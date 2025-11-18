import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import { checkQueueStatus } from "@/utils/fal/generate"

export async function GET(request: Request) {
  try {
    // Get the current user from Supabase
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get request ID and model from query params
    const url = new URL(request.url)
    const requestId = url.searchParams.get("requestId")
    const model = url.searchParams.get("model")

    if (!requestId) {
      return NextResponse.json({ error: "Request ID is required" }, { status: 400 })
    }

    // Check queue status
    const status = await checkQueueStatus(requestId)

    return NextResponse.json(status)
  } catch (error: any) {
    console.error("Error checking queue status:", error)
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 })
  }
}
