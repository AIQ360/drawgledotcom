import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const page = Number.parseInt(url.searchParams.get("page") || "1")
    const limit = Number.parseInt(url.searchParams.get("limit") || "20")
    const from = (page - 1) * limit
    const to = from + limit - 1

    const supabase = await createClient()

    // Fetch regular public images
    const {
      data: regularImages,
      error: regularError,
      count: regularCount,
    } = await supabase
      .from("images")
      .select("*", { count: "exact" })
      .eq("is_public", true)
      .order("created_at", { ascending: false })

    if (regularError) {
      throw regularError
    }

    // Fetch gemini public images
    const {
      data: geminiImages,
      error: geminiError,
      count: geminiCount,
    } = await supabase
      .from("gemini_images")
      .select("*", { count: "exact" })
      .eq("is_public", true)
      .order("created_at", { ascending: false })

    if (geminiError) {
      throw geminiError
    }

    // Transform gemini images to match the format of regular images
    const transformedGeminiImages = geminiImages.map((img) => ({
      id: img.id,
      user_id: img.user_id,
      prompt: img.prompt || "Image to Coloring Page",
      image_url: img.coloring_page_url,
      aspect_ratio: img.aspect_ratio,
      model: "gemini",
      created_at: img.created_at,
      is_public: img.is_public,
      source: "gemini",
    }))

    // Add source field to regular images
    const transformedRegularImages = regularImages.map((img) => ({
      ...img,
      source: "regular",
    }))

    // Combine both types of images
    const allImages = [...transformedRegularImages, ...transformedGeminiImages]

    // Sort combined images by created_at
    allImages.sort((a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })

    // Calculate total count
    const totalCount = (regularCount || 0) + (geminiCount || 0)

    // Apply pagination to the combined results
    const paginatedImages = allImages.slice(from, Math.min(from + limit, allImages.length))

    return NextResponse.json({
      images: paginatedImages,
      totalCount,
      page,
      limit,
      totalPages: Math.ceil(totalCount / limit),
    })
  } catch (error: any) {
    console.error("Error fetching public images:", error)
    return NextResponse.json({ error: error.message || "Failed to fetch public images" }, { status: 500 })
  }
}
