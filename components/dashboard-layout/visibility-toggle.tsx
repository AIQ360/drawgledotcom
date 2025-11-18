"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { createClient } from "@/utils/supabase/client"

interface VisibilityToggleProps {
  imageId: string
  isPublic: boolean
  disabled?: boolean
  onToggle?: (isPublic: boolean) => void
  tableType?: "images" | "gemini_images" // Add this new prop
}

export function VisibilityToggle({
  imageId,
  isPublic: initialIsPublic,
  disabled = false,
  onToggle,
  tableType = "images", // Default to 'images' for backward compatibility
}: VisibilityToggleProps) {
  const [isPublic, setIsPublic] = useState(initialIsPublic)
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()

  const handleToggle = async (checked: boolean) => {
    if (disabled) return

    setIsLoading(true)
    console.log(`Attempting to update ${tableType} ${imageId} to is_public=${checked}`)

    try {
      // Use the tableType to determine which table to update
      const { data, error } = await supabase.from(tableType).update({ is_public: checked }).eq("id", imageId).select()

      if (error) {
        console.error("Supabase error:", error)
        throw error
      }

      console.log("Update response:", data)
      setIsPublic(checked)
      if (onToggle) onToggle(checked)

      toast.success(checked ? "Image is now public" : "Image is now private", {
        description: checked
          ? "Your image will be visible in the public gallery"
          : "Your image has been removed from the public gallery",
      })
    } catch (error: any) {
      console.error("Error toggling visibility:", error)
      toast.error("Error updating visibility", {
        description: error.message || "Please try again",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={`visibility-toggle-${imageId}`}
        checked={isPublic}
        onCheckedChange={handleToggle}
        disabled={isLoading || disabled}
        aria-label={isPublic ? "Make private" : "Make public"}
      />
      <Label htmlFor={`visibility-toggle-${imageId}`} className="text-xs">
        {isPublic ? "Public" : "Private"}
      </Label>
    </div>
  )
}
