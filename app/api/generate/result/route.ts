import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import { getQueueResult } from "@/utils/fal/generate"
import { creditService } from "@/lib/credits"

export async function GET(request: Request) {
 try {
    // 1. Authentication Check
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Get request ID and model from query params
    const url = new URL(request.url)
    const requestId = url.searchParams.get("requestId")
    const model = url.searchParams.get("model")
    const prompt = url.searchParams.get("prompt")
    const aspectRatio = url.searchParams.get("aspectRatio")
    const numImagesStr = url.searchParams.get("numImages")
    const numImages = numImagesStr ? Number.parseInt(numImagesStr) : 1

    if (!requestId) {
      return NextResponse.json({ error: "Request ID is required" }, { status: 400 })
    }

    // Get queue result (images from FAL.ai)
    const falImages = await getQueueResult(requestId)

    // If prompt and aspectRatio are provided, store images in database
    if (prompt && aspectRatio && falImages.length > 0) {
      // Upload images to Supabase Storage and get public URLs
        const storedImages = await Promise.all(
          falImages.map(async (imageUrl, index) => {
            try {
              // Fetch the image from FAL
              const response = await fetch(imageUrl)
              if (!response.ok) {
                console.error(`Failed to fetch image from FAL: ${response.statusText}`)
                return imageUrl // Return original URL on error
              }

              const blob = await response.blob()

              // Generate a unique filename - using 'private' as the folder name to match your policy
              const filename = `private/${user.id}-${Date.now()}-${index}-${prompt.slice(0, 20).replace(/[^a-z0-9]/gi, "_")}.png`

              console.log("Uploading to path:", filename)

              // Upload to Supabase Storage
              const { data, error } = await supabase.storage.from("coloring-pages").upload(filename, blob, {
                contentType: "image/png",
                upsert: true, // Use upsert to overwrite if file exists
              })

              if (error) {
                console.error("Storage upload error:", error)
                return imageUrl // Return original URL on error
              }

              // Get a public URL
              const { data: publicUrlData } = supabase.storage.from("coloring-pages").getPublicUrl(filename)
              console.log("Image uploaded to Supabase Storage:", publicUrlData.publicUrl)

              return publicUrlData.publicUrl
            } catch (error) {
              console.error("Error uploading to storage:", error)
              return imageUrl // Fall back to original FAL URL if storage fails
            }
          }),
        )

        // Store images in database with URLs (either Supabase Storage or FAL)
        for (const imageUrl of storedImages) {
          await supabase.from("images").insert({
            user_id: user.id,
            prompt,
            image_url: imageUrl,
            aspect_ratio: aspectRatio,
            model: "flux-1/schnell",
          })
        }
        const deduction = await creditService.deductCredits(user.id, numImages, "Text-to-image generation")
        if (!deduction.success) {
          return NextResponse.json({ error: deduction.error || "Failed to deduct credits" }, { status: 400 })
        }
        return NextResponse.json({ images: storedImages, newBalance: deduction.newBalance })
      }

    // If we couldn't store in Supabase Storage, return the original FAL.ai URLs
    return NextResponse.json({ images: falImages })
  } catch (error: any) {
    console.error("Error getting queue result:", error)
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 })
  }
}
