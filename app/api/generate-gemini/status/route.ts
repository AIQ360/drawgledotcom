import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import { checkQueueStatus } from "@/utils/gemini/generate"

export async function GET(request: Request) {
  try {
    // Get the current user from Supabase
    const supabase = await createClient()

    // Use getUser instead of getSession for better security
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Auth error:", userError)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get request ID from query params
    const url = new URL(request.url)
    const requestId = url.searchParams.get("requestId")

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
