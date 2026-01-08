"use client"

import * as React from "react"
import { Globe, Check } from "lucide-react"
import { useTolgee } from "@tolgee/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languages = [
  { code: "en-US", label: "English (United States)", flag: "🇺🇸" },
  { code: "ja-JP", label: "Japanese (Japan)", flag: "🇯🇵" },
]

export function LanguageSelector() {
  const tolgee = useTolgee(["language"])
  const selectedLanguage = tolgee.getLanguage()

  const handleLanguageChange = (code: string) => {
    tolgee.changeLanguage(code)
  }

  const currentLanguage = languages.find((lang) => lang.code === selectedLanguage)

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">
              {currentLanguage?.flag} {currentLanguage?.code}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="top" className="w-56">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="cursor-pointer flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span>{language.flag}</span>
                <span>{language.label}</span>
              </span>
              {selectedLanguage === language.code && (
                <Check className="h-4 w-4 text-[#635bff]" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
