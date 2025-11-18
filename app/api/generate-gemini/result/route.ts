import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import { generateColoringPage } from "@/utils/gemini/generate"
import { creditService } from "@/lib/credits"

export async function POST(request: Request) {
  try {
    // Get the current user from Supabase
    const supabase = await createClient()

    // Use getUser instead of getSession for better security
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Auth error:", userError)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Parse request body
    const body = await request.json()
    const { requestId, imageBase64, mimeType } = body

    if (!requestId || !imageBase64 || !mimeType) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    console.log("Processing image conversion request:", {
      requestId,
      mimeType,
      imageBase64Length: imageBase64 ? imageBase64.length : 0,
    })

    // Generate the coloring page
    try {
      // Note: aspectRatio is no longer used by the model or stored in the database
      const coloringPageBase64 = await generateColoringPage({
        imageBase64,
        mimeType,
      })

      // Check if we got a valid image back
      if (!coloringPageBase64) {
        console.error("No coloring page was generated")
        return NextResponse.json(
          {
            error: "No coloring page was generated",
            noCredit: true, // Flag to indicate not to deduct credit
          },
          { status: 400 },
        )
      }

      console.log("Successfully generated coloring page, base64 length:", coloringPageBase64.length)

      // Skip uploading the original image - we don't want to store it

      // Upload only the coloring page to Supabase Storage
      const filename = `private/${user.id}-${Date.now()}-coloring-page.png`

      console.log("Uploading coloring page to storage path:", filename)

      // Convert base64 to Buffer for storage
      const buffer = Buffer.from(coloringPageBase64, "base64")

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("coloring-pages")
        .upload(filename, buffer, {
          contentType: "image/png",
          upsert: false,
        })

      if (uploadError) {
        console.error("Error uploading coloring page:", uploadError)

        // If we can't upload to storage, return the base64 data directly
        // This is a fallback so the user still gets their image
        return NextResponse.json({
          coloringPageBase64: `data:image/png;base64,${coloringPageBase64}`,
          error: "Failed to upload to storage, but image was generated",
          noCredit: false, // Still charge credit since we generated the image
        })
      }

      // Get the public URL of the coloring page
      const { data: publicUrlData } = supabase.storage.from("coloring-pages").getPublicUrl(filename)
      const coloringPageUrl = publicUrlData.publicUrl

      // Store only the coloring page in the database (no original image reference or aspect_ratio)
      const { data: geminiImageData, error: geminiImageError } = await supabase
        .from("gemini_images")
        .insert({
          user_id: user.id,
          original_image_url: null, // Set to null since we're not storing the original
          coloring_page_url: coloringPageUrl,
          prompt: "Convert to coloring page",
          is_public: false,
        })
        .select()

      if (geminiImageError) {
        console.error("Error storing gemini image:", geminiImageError)
        // Still return the image URL even if database insert fails
        return NextResponse.json({
          coloringPageUrl,
          error: "Image generated but failed to save to database",
          noCredit: false, // Still charge credit
        })
      }

      const deduction = await creditService.deductCredits(user.id, 1, "Gemini image conversion")
      if (!deduction.success) {
        return NextResponse.json({ error: deduction.error || "Failed to deduct credits" }, { status: 400 })
      }

      return NextResponse.json({
        coloringPageUrl,
        geminiImageId: geminiImageData?.[0]?.id,
        newBalance: deduction.newBalance,
      })
    } catch (error: any) {
      console.error("Error generating coloring page:", error)
      return NextResponse.json(
        {
          error: error.message || "Failed to generate coloring page",
          noCredit: true, // Don't deduct credit on generation error
        },
        { status: 500 },
      )
    }
  } catch (error: any) {
    console.error("Error getting coloring page result:", error)
    return NextResponse.json(
      {
        error: error.message || "Something went wrong",
        noCredit: true, // Don't deduct credit on any error
      },
      { status: 500 },
    )
  }
}
