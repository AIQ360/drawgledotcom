import { fal } from "@fal-ai/client"
import type { AspectRatio } from "@/types"

// Configure the FAL client with API key
if (process.env.FAL_API_KEY) {
  fal.config({
    credentials: process.env.FAL_API_KEY,
  })
}

// Model IDs
export const MODELS = {
  SANA: "fal-ai/sana",
  FLUX_SCHNELL: "fal-ai/flux/schnell",
  FLUX_1_SCHNELL: "fal-ai/flux-1/schnell",
  IDEOGRAM: "fal-ai/ideogram/v2a/turbo",
  GPT_MINI: "fal-ai/gpt-image-1-mini",
}

// Helper function to convert aspect ratio to width and height
export function getImageDimensions(aspectRatio: AspectRatio): { width: number; height: number } {
  switch (aspectRatio) {
    case "square":
      return { width: 1024, height: 1024 }
    case "portrait":
      return { width: 768, height: 1024 }
    case "landscape":
      return { width: 1024, height: 768 }
    case "letter":
      return { width: 1024, height: 1320 }
    default:
      return { width: 1024, height: 1024 }
  }
}

// Helper function to convert dimensions to FAL image_size format
export function getImageSize(aspectRatio: AspectRatio): string | { width: number; height: number } {
  switch (aspectRatio) {
    case "square":
      return "square_hd"
    case "portrait":
      return "portrait_4_3"
    case "landscape":
      return "landscape_4_3"
    case "letter":
      return { width: 1024, height: 1320 }
    default:
      return "square_hd"
  }
}

export function getIdeogramAspectRatio(
  aspectRatio: AspectRatio,
): "3:4" | "10:16" | "16:10" | "9:16" | "16:9" | "4:3" | "1:1" | "1:3" | "3:1" | "3:2" | "2:3" {
  switch (aspectRatio) {
    case "square":
      return "1:1"
    case "portrait":
      return "3:4"
    case "landscape":
      return "4:3"
    case "letter":
      return "3:4"
    default:
      return "1:1"
  }
}
