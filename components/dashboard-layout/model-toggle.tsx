"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icons } from "@/components/icons"

interface ModelToggleProps {
  value: "text-to-image" | "image-to-coloring"
  onChange: (value: "text-to-image" | "image-to-coloring") => void
  disabled?: boolean
}

export function ModelToggle({ value, onChange, disabled = false }: ModelToggleProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Generation Method</label>
      <Tabs value={value} onValueChange={onChange as (value: string) => void} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="text-to-image" disabled={disabled} className="flex items-center gap-2">
            <Icons.post className="h-4 w-4" />
            <span>Text to Image</span>
          </TabsTrigger>
          <TabsTrigger value="image-to-coloring" disabled={disabled} className="flex items-center gap-2">
            <Icons.image className="h-4 w-4" />
            <span>Image to Coloring</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <p className="text-xs text-muted-foreground">
        {value === "text-to-image"
          ? "Generate coloring pages from text descriptions"
          : "Convert your photos into coloring pages"}
      </p>
    </div>
  )
}
