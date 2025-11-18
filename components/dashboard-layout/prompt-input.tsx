"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Dice5Icon } from "lucide-react"
import { promptList } from "@/lib/prompt-list"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PromptInputProps {
  onSubmit: (prompt: string) => void
  isLoading: boolean
  defaultValue?: string
  onChange?: (value: string) => void // Add onChange prop
}

export function PromptInput({ onSubmit, isLoading, defaultValue = "", onChange }: PromptInputProps) {
  const [prompt, setPrompt] = useState(defaultValue)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Update parent component when prompt changes
  useEffect(() => {
    if (onChange) {
      onChange(prompt)
    }
  }, [prompt, onChange])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (prompt.trim()) {
      onSubmit(prompt.trim())
    }
  }

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setPrompt(newValue)
    // Also call onChange directly for immediate update
    if (onChange) {
      onChange(newValue)
    }
  }

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * promptList.length)
    const newPrompt = promptList[randomIndex]
    setPrompt(newPrompt)

    // Also update parent component
    if (onChange) {
      onChange(newPrompt)
    }

    // Focus the textarea after setting the random prompt
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Prompt</label>
      <form onSubmit={handleSubmit} className="relative">
        <Textarea
          ref={textareaRef}
          placeholder="Describe your coloring page... (e.g., 'a train with animals riding it through jungle')"
          value={prompt}
          onChange={handlePromptChange}
          className="min-h-[100px] resize-none pr-12"
          disabled={isLoading}
        />
        <div className="absolute bottom-2 right-2 flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={getRandomPrompt}
                  disabled={isLoading}
                  className="h-8 w-8 p-0"
                >
                  <Dice5Icon className="h-4 w-4" />
                  <span className="sr-only">Random Prompt</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Get a random prompt</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </form>
    </div>
  )
}
