"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface NavItem {
  title: string
  href?: string
  items?: { title: string; href: string }[]
}

interface TopNavigationProps {
  navigation: NavItem[]
  title?: string
  activeSection?: string
  onSectionChange?: (section: string) => void
}

export function TopNavigation({ navigation, title, activeSection, onSectionChange }: TopNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [currentHash, setCurrentHash] = React.useState("")

  // Track hash changes
  React.useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash || "#about" // Default to #about if no hash
      setCurrentHash(hash)
    }
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  const handleSectionClick = (item: NavItem) => {
    if (item.href) {
      // For items with direct hrefs, clear active section
      if (onSectionChange) {
        onSectionChange("")
      }
      // Manually update hash for immediate feedback
      setTimeout(() => setCurrentHash(item.href), 0)
    } else if (item.items && onSectionChange) {
      // For items with sub-items (Experience), set as active section and navigate to #experience
      onSectionChange(item.title)
      // Clear the hash to remove active indicators from other tabs
      setCurrentHash("")
      // Navigate to the experience section
      const experienceSection = document.getElementById("experience")
      if (experienceSection) {
        experienceSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#ffffff] dark:bg-background">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo/Title */}
        <div className="flex items-center mr-8">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image
              src="/kiara-logo.png"
              alt="Kiara"
              width={120}
              height={40}
              priority
            />
          <Link href="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
            {title || "Dave Ishii"}
          </Link>
        </div>

        {/* Desktop Navigation - Flat Tabs */}
        <div className="hidden md:flex items-center flex-1 space-x-6">
          {navigation.map((item) => {
            // Determine if this tab is active
            let isActive = false
            if (item.items) {
              // For items with sub-items (Experience), check if it's the active section
              isActive = activeSection === item.title
            } else if (item.href) {
              // For items with direct hrefs, check if hash matches
              isActive = currentHash === item.href
            }

            return (
              <div key={item.title} className="relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      handleSectionClick(item)
                    }}
                    className={cn(
                      "text-sm font-medium py-5 block border-b-2 transition-colors",
                      isActive
                        ? "text-[#635bff] border-[#635bff]"
                        : "text-slate-600 dark:text-slate-300 border-transparent hover:text-slate-900 dark:hover:text-slate-100"
                    )}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleSectionClick(item)}
                    className={cn(
                      "text-sm font-medium py-5 block border-b-2 transition-colors",
                      isActive
                        ? "text-[#635bff] border-[#635bff]"
                        : "text-slate-600 dark:text-slate-300 border-transparent hover:text-slate-900 dark:hover:text-slate-100"
                    )}
                  >
                    {item.title}
                  </button>
                )}
              </div>
            )
          })}
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
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href || "#"}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  handleSectionClick(item)
                }}
                className="block px-4 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
