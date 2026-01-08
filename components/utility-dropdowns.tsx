"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { T } from "@tolgee/react"
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
          <T keyName="helpDropdown.apisSDKs" />
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem asChild>
            <a href="#" className="cursor-pointer">
              <T keyName="helpDropdown.apiReference" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#" className="cursor-pointer">
              <T keyName="helpDropdown.documentation" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="#" className="cursor-pointer">
              <T keyName="helpDropdown.librariesSDKs" />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Help Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors outline-none">
          <T keyName="helpDropdown.help" />
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem asChild>
            <Link href="/faq" className="cursor-pointer">
              <T keyName="helpNav.faq" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/quick" className="cursor-pointer">
              <T keyName="helpNav.quickLinks" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/service-level" className="cursor-pointer">
              <T keyName="helpNav.serviceLevel" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/roadmap" className="cursor-pointer">
              <T keyName="helpNav.roadmap" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/contact" className="cursor-pointer">
              <T keyName="helpDropdown.contactSupport" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="https://www.getkiara.com/contact" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <T keyName="helpDropdown.contactSales" />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
