/**
 * Extracts the storage path from a Supabase storage URL
 * @param url The full URL to the file in Supabase storage
 * @param bucketName The name of the storage bucket
 * @returns The storage path or null if it couldn't be extracted
 */
export function extractStoragePath(url: string, bucketName = "coloring-pages"): string | null {
  if (!url) return null

  try {
    // Try parsing as URL first
    const storageUrl = new URL(url)

    // Different patterns to try
    const patterns = [
      new RegExp(`/public/${bucketName}/(.+)`), // Standard pattern
      new RegExp(`/storage/v1/object/public/${bucketName}/(.+)`), // Full Supabase path
      new RegExp(`/${bucketName}/(.+)`), // Simple bucket path
    ]

    // Try each pattern
    for (const pattern of patterns) {
      const match = storageUrl.pathname.match(pattern)
      if (match && match[1]) {
        return decodeURIComponent(match[1])
      }
    }

    // If URL parsing didn't work, try string manipulation
    const urlParts = url.split(`${bucketName}/`)
    if (urlParts.length > 1) {
      return urlParts[1]
    }

    return null
  } catch (error) {
    console.error("Error extracting storage path:", error)

    // Last resort: try string manipulation without URL parsing
    try {
      const urlParts = url.split(`${bucketName}/`)
      if (urlParts.length > 1) {
        return urlParts[1]
      }
    } catch (e) {
      console.error("Final attempt to extract path failed:", e)
    }

    return null
  }
}

/**
 * Deletes a file from Supabase storage
 * @param supabase Supabase client
 * @param url The full URL to the file
 * @param bucketName The name of the storage bucket
 * @returns Object with success status and error if any
 */
export async function deleteFileFromStorage(supabase: any, url: string, bucketName = "coloring-pages") {
  try {
    const path = extractStoragePath(url, bucketName)

    if (!path) {
      return {
        success: false,
        error: "Could not extract storage path from URL",
      }
    }

    console.log(`Attempting to delete file from ${bucketName}: ${path}`)

    const { error } = await supabase.storage.from(bucketName).remove([path])

    if (error) {
      console.error("Storage deletion error:", error)
      return { success: false, error }
    }

    return { success: true }
  } catch (error) {
    console.error("Error in deleteFileFromStorage:", error)
    return {
      success: false,
      error: error instanceof Error ? error : new Error("Unknown error in deleteFileFromStorage"),
    }
  }
}