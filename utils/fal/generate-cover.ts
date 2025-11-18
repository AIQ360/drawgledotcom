import { fal } from "@fal-ai/client"
import { v4 as uuidv4 } from "uuid"
import type { AspectRatio } from "@/types"
import { MODELS, getImageSize } from "./client"

// Queue types
interface QueueItem {
  id: string
  prompt: string
  aspectRatio: AspectRatio
  status: "pending" | "processing" | "completed" | "failed"
  result?: any
  error?: string
  createdAt: Date
  updatedAt: Date
}

// In-memory queue for cover generation requests
const coverQueue: Record<string, QueueItem> = {}

// Function to queue a cover generation request
export async function queueCoverGeneration({
  prompt,
  aspectRatio = "portrait",
}: {
  prompt: string
  aspectRatio?: AspectRatio
}) {
  const requestId = uuidv4()

  // Add to queue
  coverQueue[requestId] = {
    id: requestId,
    prompt,
    aspectRatio,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  processCoverGeneration(requestId).catch((error) => {
    console.error(`Error processing cover generation for request ${requestId}:`, error)
    coverQueue[requestId].status = "failed"
    coverQueue[requestId].error = error.message
    coverQueue[requestId].updatedAt = new Date()
  })

  return requestId
}

// Function to process a cover generation request
async function processCoverGeneration(requestId: string) {
  const queueItem = coverQueue[requestId]
  if (!queueItem) {
    throw new Error(`Request ${requestId} not found in queue`)
  }

  try {
    queueItem.status = "processing"
    queueItem.updatedAt = new Date()

    const result = await fal.subscribe(MODELS.FLUX_1_SCHNELL, {
      input: {
        prompt: queueItem.prompt,
        image_size: getImageSize(queueItem.aspectRatio),
        num_inference_steps: 6,
        guidance_scale: 6,
        num_images: 1,
        enable_safety_checker: true,
        output_format: "png",
      },
    })

    queueItem.status = "completed"
    queueItem.result = result
    queueItem.updatedAt = new Date()

    return result
  } catch (error: any) {
    queueItem.status = "failed"
    queueItem.error = error.message
    queueItem.updatedAt = new Date()
    throw error
  }
}

// Function to get the status of a cover generation request
export function getCoverGenerationStatus(requestId: string) {
  const queueItem = coverQueue[requestId]
  if (!queueItem) {
    throw new Error(`Request ${requestId} not found in queue`)
  }

  return {
    id: queueItem.id,
    status: queueItem.status,
    result: queueItem.result,
    error: queueItem.error,
    createdAt: queueItem.createdAt,
    updatedAt: queueItem.updatedAt,
  }
}

// Clean up old queue items (older than 1 hour)
setInterval(
  () => {
    const now = new Date()
    Object.keys(coverQueue).forEach((requestId) => {
      const queueItem = coverQueue[requestId]
      const ageInMs = now.getTime() - queueItem.createdAt.getTime()
      if (ageInMs > 60 * 60 * 1000) {
        delete coverQueue[requestId]
      }
    })
  },
  15 * 60 * 1000,
) // Run every 15 minutes
