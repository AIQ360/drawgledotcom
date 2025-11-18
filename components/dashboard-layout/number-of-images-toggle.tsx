"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NumberOfImagesToggleProps {
  value: number
  onChange: (value: number) => void
  max: number
}

export function NumberOfImagesToggle({ value, onChange, max }: NumberOfImagesToggleProps) {
  const options = [1, 2, 3, 4]

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium">Number of Images</label>
      <div className="flex space-x-2 md:grid md:grid-cols-2 md:gap-2">
        {options.map((option) => (
          <Button
            key={option}
            variant="outline"
            className={cn(
              "flex-1 md:w-full h-auto py-3 border-2",
              value === option && "border-primary bg-primary/10 text-primary",
              option > max && "opacity-50 cursor-not-allowed",
            )}
            onClick={() => option <= max && onChange(option)}
            disabled={option > max}
          >
            <div className="flex flex-col items-center">
              <span className="font-medium">{option}</span>
              <span className="text-xs text-muted-foreground mt-1">{option === 1 ? "image" : "images"}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}
