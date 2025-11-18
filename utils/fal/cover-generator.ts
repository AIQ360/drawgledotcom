import { fal } from "@fal-ai/client"
import type { AspectRatio } from "@/types"
import { MODELS, getImageSize } from "./client"

// Set up Fal AI client
if (process.env.FAL_API_KEY) {
  fal.config({
    credentials: process.env.FAL_API_KEY,
  })
}

interface GenerateCoverOptions {
  prompt: string
  aspectRatio?: AspectRatio
  userId: string
}

export async function generateCover({ prompt, aspectRatio = "portrait", userId }: GenerateCoverOptions): Promise<string> {
  console.log("Generating cover with prompt:", prompt)
  try {
    const result = await fal.subscribe(MODELS.FLUX_1_SCHNELL, {
      input: {
        prompt,
        image_size: getImageSize(aspectRatio),
        num_inference_steps: 6,
        guidance_scale: 6,
        num_images: 1,
        enable_safety_checker: true,
        output_format: "png",
      },
      logs: true,
      onQueueUpdate: (update) => {
        console.log("Generation in progress:", update.status)
      },
    })

    console.log("Cover generation completed:", result)

    if (!result.data?.images || result.data.images.length === 0) {
      throw new Error("No images in result")
    }

    const imageUrl = result.data.images[0].url
    console.log("Image URL:", imageUrl)

    return imageUrl
  } catch (error: any) {
    console.error("Error generating cover:", error)
    throw error
  }
}
