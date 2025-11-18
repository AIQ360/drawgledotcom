import { createClient } from "@/utils/supabase/server"

export async function uploadImageToStorage(imageUrl: string, userId: string, prompt: string): Promise<string> {
  const supabase = await createClient()

  try {
    console.log("🔍 [STORAGE] Starting upload for user:", userId)
    console.log("🔍 [STORAGE] Image URL:", imageUrl)

    // Fetch the image
    const response = await fetch(imageUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`)
    }

    const blob = await response.blob()
    console.log("✅ [STORAGE] Image fetched successfully, size:", blob.size)

    // Generate a unique filename
    const filename = `${userId}/${Date.now()}-${prompt.slice(0, 20).replace(/[^a-z0-9]/gi, "_")}.png`
    console.log("🔍 [STORAGE] Generated filename:", filename)

    // Upload to Supabase Storage with detailed error logging
    console.log("🔍 [STORAGE] Uploading to bucket: coloring-pages")
    const { data, error } = await supabase.storage.from("coloring-pages").upload(filename, blob, {
      contentType: "image/png",
      upsert: false,
    })

    if (error) {
      console.error("❌ [STORAGE] Upload error details:", JSON.stringify(error, null, 2))
      throw error
    }

    console.log("✅ [STORAGE] Upload successful:", data)

    // Get the public URL
    const { data: publicUrlData } = supabase.storage.from("coloring-pages").getPublicUrl(filename)
    console.log("✅ [STORAGE] Public URL generated:", publicUrlData.publicUrl)

    return publicUrlData.publicUrl
  } catch (error) {
    console.error("❌ [STORAGE] Error uploading image to storage:", error)
    // Re-throw the error to be handled by the caller
    throw error
  }
}