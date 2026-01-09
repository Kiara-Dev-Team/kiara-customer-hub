"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  const pathname = usePathname()

  // Check if current path is a Help page
  const isHelpActive = pathname?.startsWith('/faq') ||
                       pathname?.startsWith('/quick') ||
                       pathname?.startsWith('/service-level') ||
                       pathname?.startsWith('/roadmap') ||
                       pathname?.startsWith('/contact')

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

      {/* Help Tab */}
      <Link
        href="/faq"
        className={cn(
          "text-sm font-medium py-3 block border-b-2 transition-colors",
          isHelpActive
            ? "text-[#635bff] border-[#635bff]"
            : "text-slate-600 dark:text-slate-300 border-transparent hover:text-slate-900 dark:hover:text-slate-100"
        )}
      >
        <T keyName="helpDropdown.help" />
      </Link>
    </div>
  )
}
