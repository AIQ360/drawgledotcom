import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import { queueImageGeneration } from "@/utils/fal/generate"
import type { GenerateImageParams } from "@/types"
import { creditService } from "@/lib/credits"
import { redirect } from 'next/navigation';

export async function POST(request: Request) {
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

    const { balance } = await creditService.getUserCredits(user.id)

    // Parse request body
    const params: GenerateImageParams = await request.json()

    if (balance < params.numImages) {
      return NextResponse.json({ error: "Not enough credits" }, { status: 400 })
    }

    // Determine which model to use (from env or default)
    const modelToUse = process.env.USE_SANA === "true" ? "sana" : "flux-schnell"

    // Queue image generation
    const requestId = await queueImageGeneration({
      prompt: params.prompt,
      aspectRatio: params.aspectRatio,
      numImages: params.numImages,
      model: modelToUse,
    })

    // Return the request ID for polling
    return NextResponse.json({ requestId, model: modelToUse })
  } catch (error: any) {
    console.error("Error queueing image generation:", error)
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 })
  }
}
