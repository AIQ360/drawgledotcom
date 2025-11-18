import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import { queueImageGeneration } from "@/utils/fal/generate"
import type { GenerateImageParams } from "@/types"
import { creditService } from "@/lib/credits"

export async function POST(request: Request) {
  try {
    // Get the current user from Supabase
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { balance } = await creditService.getUserCredits(user.id)

    // Parse request body
    const params: GenerateImageParams = await request.json()

    if (balance < params.numImages) {
      return NextResponse.json({ error: "Not enough credits" }, { status: 400 })
    }

    // Explicitly use FLUX-1 SCHNELL model
    const modelToUse = "flux-1/schnell"

    // Queue image generation
    const requestId = await queueImageGeneration({
      prompt: params.prompt,
      aspectRatio: params.aspectRatio,
      numImages: params.numImages,
    })

    // Return the request ID for polling
    return NextResponse.json({
      requestId,
      model: modelToUse,
      prompt: params.prompt,
      aspectRatio: params.aspectRatio,
      numImages: params.numImages,
    })
  } catch (error: any) {
    console.error("Error queueing image generation:", error)
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 })
  }
}
