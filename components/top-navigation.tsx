"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTranslate } from "@tolgee/react"
import { SearchDialog } from "@/components/search-dialog"
import { AskAiButton } from "@/components/ask-ai-button"
import { UtilityDropdowns } from "@/components/utility-dropdowns"

export interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
}

interface TopNavigationProps {
  navigation: NavItem[]
}

export function TopNavigation({ navigation }: TopNavigationProps) {
  const { t } = useTranslate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#ffffff] dark:bg-background">
      {/* Layer 1: Logo, Search, and Mobile Menu */}
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image
              src="/kiara-logo.png"
              alt="Kiara"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Centered Search & AI */}
        <div className="flex-1 flex items-center justify-center gap-2">
          <SearchDialog />
          <AskAiButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Layer 2: Navigation Tabs & Utility Dropdowns */}
      <div>
        <div className="container mx-auto flex h-12 items-center justify-between px-6">
          {/* Desktop Navigation - Flat Tabs */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.filter(item => item.title !== "helpDropdown.help").map((item) => {
              // Determine if this tab is active based on pathname
              let isActive = false
              let href = item.href || "#"

              if (item.items) {
                // For items with sub-items, check if any sub-item matches current path
                // Or use the first sub-item's href as the link
                const firstSubItem = item.items[0]
                if (firstSubItem?.href) {
                  href = firstSubItem.href
                  // Check if pathname starts with any sub-item path
                  isActive = item.items.some(subItem =>
                    subItem.href && pathname?.startsWith(subItem.href.split('#')[0])
                  )
                }
              } else if (item.href) {
                // For items with direct hrefs, check if pathname matches
                const itemPath = item.href.split('#')[0]
                isActive = pathname === itemPath || pathname?.startsWith(itemPath + '/')
              }

              return (
                <div key={item.title} className="relative">
                  <Link
                    href={href}
                    className={cn(
                      "text-sm font-medium py-3 block border-b-2 transition-colors",
                      isActive
                        ? "text-[#635bff] border-[#635bff]"
                        : "text-slate-600 dark:text-slate-300 border-transparent hover:text-slate-900 dark:hover:text-slate-100"
                    )}
                  >
                    {t(item.title)}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Utility Dropdowns */}
          <UtilityDropdowns />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navigation.map((item) => {
              let href = item.href || "#"
              if (item.items && item.items[0]?.href) {
                href = item.items[0].href
              }

              return (
                <Link
                  key={item.title}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                >
                  {t(item.title)}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
