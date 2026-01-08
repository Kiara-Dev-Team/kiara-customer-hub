"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"
import { useTranslate } from "@tolgee/react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function AskAiButton() {
  const { t } = useTranslate()
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
        <span className="text-sm font-medium">{t('search.button')}</span>
      </Button>

      {/* Mobile Button - Icon Only */}
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        size="icon"
        className="md:hidden border-[#635bff] text-[#635bff] hover:bg-[#635bff] hover:text-white transition-colors"
      >
        <Sparkles className="h-4 w-4" />
        <span className="sr-only">{t('search.button')}</span>
      </Button>

      {/* Coming Soon Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[#635bff]">
              <Sparkles className="h-5 w-5" />
              {t('search.dialogTitle')}
            </DialogTitle>
            <DialogDescription className="pt-4 space-y-3 text-base">
              <p>
                {t('search.dialogDescription1')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('search.dialogDescription2')}
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setOpen(false)} className="bg-[#635bff] hover:bg-[#5148e5]">
              {t('search.gotIt')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
