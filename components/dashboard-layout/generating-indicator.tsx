"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Progress } from "@/components/ui/progress"

interface GeneratingIndicatorProps {
  status?: string
  progress?: number
}

export function GeneratingIndicator({ status = "pending", progress = 0 }: GeneratingIndicatorProps) {
  return (
    <Card className="w-full shadow-sm">
      <CardContent className="flex flex-col items-center justify-center py-10 space-y-6">
        <div className="relative">
          <div className="animate-pulse bg-primary/20 rounded-full h-20 w-20 flex items-center justify-center">
            <Icons.spinner className="h-12 w-12 animate-spin text-primary" />
          </div>
        </div>
        <div className="text-center space-y-2">
          <p className="text-xl font-medium">Generating your coloring pages...</p>
          <p className="text-sm text-muted-foreground">
            {status === "pending"
              ? "Your request is in the queue. This may take a few moments."
              : status === "in_progress"
                ? "Creating beautiful coloring pages just for you!"
                : "Almost done! Processing your images..."}
          </p>
        </div>
        <div className="w-full max-w-md">
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground text-center mt-2">{progress}% complete</p>
        </div>
      </CardContent>
    </Card>
  )
}
