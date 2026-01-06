"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronDown, ChevronRight } from "lucide-react"
import { TopNavigation, type NavItem } from "@/components/top-navigation"
import { LanguageSelector } from "@/components/language-selector"
import { cn } from "@/lib/utils"

interface DocsLayoutProps {
  navigation: NavItem[]
  children: React.ReactNode
}

function SidebarNavItem({ item, level = 0, currentHash }: { item: NavItem; level?: number; currentHash: string }) {
  const [isOpen, setIsOpen] = React.useState(true)
  const hasChildren = item.items && item.items.length > 0

  // Check if this item or any of its children (recursively) are active
  const isActive = item.href === currentHash
  const checkActiveChild = (items: NavItem[]): boolean => {
    return items.some(child => {
      if (child.href === currentHash) return true
      if (child.items) return checkActiveChild(child.items)
      return false
    })
  }
  const hasActiveChild = hasChildren && item.items ? checkActiveChild(item.items) : false

  // Debug logging
  if (level === 0) {
    console.log(`${item.title}: hasActiveChild=${hasActiveChild}, currentHash=${currentHash}`)
  }
  if (item.href) {
    console.log(`  ${item.title} (${item.href}): isActive=${isActive}`)
  }

  return (
    <div>
      {item.href ? (
        <a
          href={item.href}
          className={cn(
            "block px-3 py-2 text-sm rounded-md transition-colors",
            level > 0 && "ml-4",
            // Level 0 (companies): bold when active or has active child
            level === 0 && (isActive || hasActiveChild) && "font-semibold",
            // Level 1+ (sub-sections): blue when active
            level > 0 && isActive && "text-[#635bff] font-medium",
            // Default colors
            !isActive && "text-slate-600 dark:text-slate-300 hover:text-[#635bff] hover:bg-slate-50 dark:hover:bg-slate-800"
          )}
        >
          {item.title}
        </a>
      ) : (
        <button
          onClick={() => {
            setIsOpen(!isOpen)
            // Navigate to first child if exists
            if (item.items && item.items.length > 0 && item.items[0].href) {
              window.location.hash = item.items[0].href
            }
          }}
          className={cn(
            "flex w-full items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
            level > 0 && "ml-4",
            // Level 0 (companies): bold when has active child
            level === 0 && hasActiveChild && "font-semibold",
            // Default colors
            "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
          )}
        >
          <span>{item.title}</span>
          {hasChildren && (
            <span className="ml-auto">
              {isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </span>
          )}
        </button>
      )}
      {hasChildren && isOpen && (
        <div className="mt-1 space-y-1">
          {item.items?.map((child, index) => (
            <SidebarNavItem key={index} item={child} level={level + 1} currentHash={currentHash} />
          ))}
        </div>
      )}
    </div>
  )
}

export function DocsLayout({ navigation, children }: DocsLayoutProps) {
  const [activeSection, setActiveSection] = React.useState<string>("")
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)
  const [currentHash, setCurrentHash] = React.useState("")

  // Track hash changes and set default
  React.useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash || "#about"
      console.log("Hash changed to:", hash)
      setCurrentHash(hash)

      // Check if hash belongs to Experience section
      const experienceHashes = ["#kiara", "#kiara-features", "#kiara-impact", "#liquid", "#liquid-ekyc", "#cuusoo", "#itochu"]
      if (experienceHashes.includes(hash)) {
        setActiveSection("Experience")
      } else {
        setActiveSection("")
      }
    }
    updateHash()

    // Set default hash if none exists
    if (!window.location.hash) {
      window.location.hash = "#about"
    }

    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  // Get the active navigation item with sub-items
  const activeSectionData = React.useMemo(() => {
    return navigation.find(item => item.title === activeSection && item.items)
  }, [navigation, activeSection])

  // Reset sidebar when activeSection changes
  React.useEffect(() => {
    if (activeSectionData) {
      setIsSidebarOpen(true)
    }
  }, [activeSectionData])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background">
      {/* Top Navigation */}
      <TopNavigation
        navigation={navigation}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Language Selector */}
      <LanguageSelector />

      <div className="flex">
        {/* Left Sidebar - Only shown when there's an active section with items */}
        {activeSectionData && activeSectionData.items && (
          <>
            {/* Desktop Sidebar */}
            <aside
              className={cn(
                "hidden lg:block sticky top-28 h-[calc(100vh-7rem)] w-64 border-r bg-white dark:bg-background transition-all",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              )}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-semibold text-[#635bff]">
                    {activeSectionData.title}
                  </h3>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                    aria-label="Close sidebar"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {activeSectionData.items.map((item, index) => (
                    <SidebarNavItem key={index} item={item} currentHash={currentHash} />
                  ))}
                </nav>
              </div>
            </aside>

            {/* Sidebar toggle button when closed */}
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="hidden lg:block fixed left-0 top-32 p-2 bg-white dark:bg-slate-800 border border-l-0 rounded-r-md shadow-md z-40"
                aria-label="Open sidebar"
              >
                <ChevronLeft className="h-4 w-4 rotate-180" />
              </button>
            )}
          </>
        )}

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-12">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
