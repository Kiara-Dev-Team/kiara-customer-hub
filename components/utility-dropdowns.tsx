"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function UtilityDropdowns() {
  return (
    <div className="hidden md:flex items-center gap-6">
      {/* APIs & SDKs Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors outline-none">
          APIs & SDKs
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem asChild>
            <a href="#" className="cursor-pointer">
              API Reference
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#" className="cursor-pointer">
              Documentation
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#" className="cursor-pointer">
              Libraries & SDKs
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Help Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors outline-none">
          Help
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem asChild>
            <a href="/faq" className="cursor-pointer">
              FAQ
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/quick" className="cursor-pointer">
              Quick Links
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/service-level" className="cursor-pointer">
              Service Level
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/roadmap" className="cursor-pointer">
              Roadmap
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/contact" className="cursor-pointer">
              Contact Support
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="https://www.getkiara.com/contact" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              Contact sales
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
