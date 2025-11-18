import { getGeminiClient } from "./geminiClient"

interface GenerateColoringPageOptions {
  imageBase64: string
  mimeType: string
}

const FIXED_PROMPT = "Convert this photo to a line art, suitable for coloring page for kids"

// Update the generateColoringPage function to use the chat-based approach
export async function generateColoringPage({ imageBase64, mimeType }: GenerateColoringPageOptions): Promise<string> {
  try {
    const genAI = getGeminiClient()
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
    })

    // Configure the generation settings
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseModalities: ["image", "text"], // This is crucial for getting image responses
    }

    // Start a chat session
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    })

    console.log("Starting chat session with prompt:", FIXED_PROMPT)

    // Send the message with the image and prompt
    const result = await chatSession.sendMessage([
      {
        inlineData: {
          mimeType: mimeType,
          data: imageBase64,
        },
      },
      { text: FIXED_PROMPT },
    ])

    // Get the response from the model
    const response = result.response
    console.log("Raw response received:", JSON.stringify(response, null, 2))

    // Check if we have candidates with parts containing inline data
    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0]
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData) {
            console.log("Found inline data in response")
            // Return just the base64 data without the prefix
            return part.inlineData.data
          }
        }
      }
    }

    // If we didn't find inline data in the standard location, look for base64 data in the entire response
    const responseText = JSON.stringify(response)

    // Look for both "data" and "fileData" patterns
    const base64Match = responseText.match(/"(data|fileData)"\s*:\s*"([A-Za-z0-9+/=]+)"/)

    if (base64Match && base64Match[2]) {
      console.log("Found base64 data via regex match")
      // We found what appears to be base64 data
      return base64Match[2]
    }

    // One more attempt - look for any base64-like string (long string of letters, numbers, and +/=)
    const anyBase64Match = responseText.match(/[A-Za-z0-9+/=]{100,}/)
    if (anyBase64Match) {
      console.log("Found potential base64 data via generic match")
      return anyBase64Match[0]
    }

    console.error("No image found in the model response")
    console.error("Response structure:", JSON.stringify(response))
    throw new Error("No image was generated")
  } catch (error) {
    console.error("Error generating coloring page:", error)
    throw error
  }
}

// These are dummy implementations as in the demo code
export async function queueColoringPageGeneration({
  imageBase64,
  mimeType,
}: GenerateColoringPageOptions): Promise<string> {
  // This function currently doesn't queue anything, but returns a dummy request ID
  return `dummy-request-${Date.now()}`
}

export async function checkQueueStatus(requestId: string): Promise<any> {
  // This function currently doesn't check any queue, but returns a dummy status
  return {
    status: "COMPLETED",
  }
}
