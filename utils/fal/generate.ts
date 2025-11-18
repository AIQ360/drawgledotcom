import { fal } from "@fal-ai/client"
import { MODELS, getImageSize } from "./client"
import type { AspectRatio } from "@/types"

interface GenerateImageOptions {
  prompt: string
  aspectRatio: AspectRatio
  numImages?: number
}


// implementation using queue for long-running requests
export async function queueImageGeneration({
  prompt,
  aspectRatio,
  numImages = 1,
}: GenerateImageOptions): Promise<string> {
  try {
    const modelId = MODELS.FLUX_1_SCHNELL
    const imageSize = getImageSize(aspectRatio)

    // Enhance the prompt for coloring pages
    const enhancedPrompt = `${prompt}, coloring page style, black and white line art, clean lines, suitable for children, printable`

    // Submit the request to the queue
    const { request_id } = await fal.queue.submit(modelId, {
      input: {
        prompt: enhancedPrompt,
        image_size: imageSize,
        num_inference_steps: 6,
        guidance_scale: 6,
        num_images: numImages,
        enable_safety_checker: true,
        output_format: "png",
      },
    })

    return request_id
  } catch (error) {
    console.error("Error queueing image generation:", error)
    throw error
  }
}

// Function to check the status of a queued request
export async function checkQueueStatus(requestId: string): Promise<any> {
  try {
    const modelId = MODELS.FLUX_1_SCHNELL
    const status = await fal.queue.status(modelId, {
      requestId,
      logs: true,
    })

    return status
  } catch (error) {
    console.error("Error checking queue status:", error)
    throw error
  }
}

// Function to get the result of a completed request
export async function getQueueResult(requestId: string): Promise<string[]> {
  try {
    const modelId = MODELS.FLUX_1_SCHNELL
    const result = await fal.queue.result(modelId, {
      requestId,
    })

    if (!result.data || !result.data.images) {
      throw new Error("No images in result")
    }

    const images = result.data.images.map((img: any) => img.url)
    return images
  } catch (error) {
    console.error("Error getting queue result:", error)
    throw error
  }
}
