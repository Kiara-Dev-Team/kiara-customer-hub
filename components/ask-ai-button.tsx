"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function AskAiButton() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {/* Desktop Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="hidden md:flex items-center gap-2 border-[#635bff] text-[#635bff] hover:bg-[#635bff] hover:text-white transition-colors"
      >
        <Sparkles className="h-4 w-4" />
        <span className="text-sm font-medium">Ask AI</span>
      </Button>

      {/* Mobile Button - Icon Only */}
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        size="icon"
        className="md:hidden border-[#635bff] text-[#635bff] hover:bg-[#635bff] hover:text-white transition-colors"
      >
        <Sparkles className="h-4 w-4" />
        <span className="sr-only">Ask AI</span>
      </Button>

      {/* Coming Soon Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#635bff]">
              <Sparkles className="h-5 w-5" />
              Ask AI - Coming Soon
            </DialogTitle>
            <DialogDescription className="pt-4 space-y-3 text-base">
              <p>
                We're building an AI assistant to help you navigate and understand Dave's experience,
                publications, and expertise.
              </p>
              <p className="text-sm text-muted-foreground">
                Stay tuned for this exciting feature!
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setOpen(false)} className="bg-[#635bff] hover:bg-[#5148e5]">
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
