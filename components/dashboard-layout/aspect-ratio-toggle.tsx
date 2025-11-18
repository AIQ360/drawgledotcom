"use client"
import type { AspectRatio } from "@/types"
import { ASPECT_RATIOS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AspectRatioToggleProps {
  value: AspectRatio
  onChange: (value: AspectRatio) => void
}

export function AspectRatioToggle({ value, onChange }: AspectRatioToggleProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium">Aspect Ratio</label>
      <div className="flex space-x-2 md:grid md:grid-cols-2 md:gap-2">
        {Object.entries(ASPECT_RATIOS).map(([key, { label, value: ratio }]) => (
          <Button
            key={key}
            variant="outline"
            className={cn("flex-1 md:w-full h-auto py-3 border-2", value === key && "border-primary bg-primary/10 text-primary")}
            onClick={() => onChange(key as AspectRatio)}
          >
            <div className="flex flex-col items-center">
              <span className="font-medium">{label}</span>
              <span className="text-xs text-muted-foreground mt-1">{ratio}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}
