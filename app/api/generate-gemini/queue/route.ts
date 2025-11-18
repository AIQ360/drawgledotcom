import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import { bufferToBase64 } from "@/utils/gemini/geminiClient"
import { queueColoringPageGeneration } from "@/utils/gemini/generate"
import { creditService } from "@/lib/credits"

export async function POST(request: Request) {
  try {
    // Get the current user from Supabase
    const supabase = await createClient()

    // Use getUser instead of getSession for better security
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { balance } = await creditService.getUserCredits(user.id)
    if (balance < 1) {
      return NextResponse.json({ error: "Not enough credits" }, { status: 400 })
    }

    // Parse request body
    const formData = await request.formData()
    const imageFile = formData.get("image") as File | null

    if (!imageFile) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 })
    }

    // Convert the file to an ArrayBuffer
    const arrayBuffer = await imageFile.arrayBuffer()
    // Convert ArrayBuffer to Buffer
    const buffer = Buffer.from(arrayBuffer)
    // Convert Buffer to base64
    const imageBase64 = bufferToBase64(buffer)
    const mimeType = imageFile.type

    // Queue the coloring page generation
    const requestId = await queueColoringPageGeneration({
      imageBase64,
      mimeType,
    })

    // Return the request ID for polling
    return NextResponse.json({
      requestId,
      mimeType,
      // We'll pass the base64 data in memory for the result endpoint
      // This is a temporary ID that will be used to match the request
      tempImageId: `temp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    })
  } catch (error: any) {
    console.error("Error queueing coloring page generation:", error)
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 })
  }
}
