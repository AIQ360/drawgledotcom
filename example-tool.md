'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, Zap, CreditCard, AlertTriangle, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { useCreditManager, makeApiCallWithCreditUpdate } from '@/lib/credit-manager'

type GenerationResult = {
  success: boolean
  content: string
  newBalance: number
}

interface ExampleToolClientProps {
  userId: string
  initialCreditBalance: number
  hasSufficientCredits: boolean
  requiredCredits: number
}

export default function ExampleToolClient({
  userId,
  initialCreditBalance,
  hasSufficientCredits,
  requiredCredits
}: ExampleToolClientProps) {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<GenerationResult | null>(null)
  const { balance: currentBalance } = useCreditManager(userId)
  const hasCredits = currentBalance >= requiredCredits

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt')
      return
    }

    setLoading(true)
    setResult(null)

    try {
      const data = await makeApiCallWithCreditUpdate<any>(
        () => fetch('/api/example-protected', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        }),
        userId
      )
      
      setResult({
        success: true,
        content: data.content,
        newBalance: data.newBalance,
      })
      
      toast.success('Content generated successfully!')
    } catch (error) {
      console.error('Error generating content:', error)
      toast.error('Failed to generate content')
    } finally {
      setLoading(false)
    }
  }

  // No need for manual refresh - credit manager handles this automatically

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">AI Content Generator</h1>
        <p className="text-muted-foreground">
          This is an example tool that demonstrates credit deduction. Each generation costs {requiredCredits} credits.
        </p>
      </div>


      {/* Generation Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>AI Content Generator</span>
          </CardTitle>
          <CardDescription>
            Enter a prompt below to generate AI content. This will deduct {requiredCredits} credits from your balance.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium mb-2">
              Prompt
            </label>
            <Textarea
              id="prompt"
              placeholder="Enter your prompt here... (e.g., 'Write a short story about a robot')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              className="w-full"
            />
          </div>

          {result && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Generated Content:</h3>
              <div className="bg-muted p-4 rounded-lg">
                <p className="whitespace-pre-wrap">{result.content}</p>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Credits deducted: {requiredCredits} | New balance: {result.newBalance}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleGenerate}
            disabled={loading || !hasCredits || !prompt.trim()}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Generate Content ({requiredCredits} credits)
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}