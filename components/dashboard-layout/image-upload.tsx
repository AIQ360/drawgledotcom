"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"
import type { AspectRatio } from "@/types"
import { Card, CardContent } from "@/components/ui/card"

interface ImageUploadProps {
  onImageSelect: (file: File) => void
  aspectRatio: AspectRatio
  disabled?: boolean
  maxHeight?: string // Add maxHeight prop
}

export function ImageUpload({ onImageSelect, aspectRatio, disabled = false, maxHeight }: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleFile = (file: File) => {
    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file")
      return
    }

    // Create a preview URL
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)

    // Call the callback
    onImageSelect(file)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleClearImage = () => {
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Upload Image</label>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />

      <Card className={`overflow-hidden ${disabled ? "opacity-50" : ""}`}>
        <CardContent className="p-0">
          <div
            className={`relative ${
              aspectRatio === "portrait"
                ? "aspect-[3/4]"
                : aspectRatio === "landscape"
                  ? "aspect-[4/3]"
                  : "aspect-square"
            } w-full border-2 border-dashed rounded-lg overflow-hidden ${
              isDragging ? "border-primary bg-primary/10" : "border-border"
            } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={disabled ? undefined : handleBrowseClick}
            style={{ maxHeight: maxHeight || "auto" }} // Apply maxHeight if provided
          >
            {previewUrl ? (
              <>
                <img src={previewUrl || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
                {!disabled && (
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-background/80 p-1 rounded-full text-foreground hover:bg-background shadow-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleClearImage()
                    }}
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6">
                <div className="bg-muted rounded-full p-3 mb-4">
                  <Upload className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="text-sm text-center font-medium mb-1">Drag and drop an image here</p>
                <p className="text-xs text-center text-muted-foreground">or click to browse</p>
                <p className="text-xs text-center text-muted-foreground mt-4">Supports JPG, PNG, WEBP</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
