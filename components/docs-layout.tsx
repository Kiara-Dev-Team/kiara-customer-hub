"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronDown, ChevronRight } from "lucide-react"
import { useTranslate } from "@tolgee/react"
import { TopNavigation, type NavItem } from "@/components/top-navigation"
import { LanguageSelector } from "@/components/language-selector"
import { cn } from "@/lib/utils"

interface DocsLayoutProps {
  navigation: NavItem[]
  children: React.ReactNode
}

function SidebarNavItem({ item, level = 0 }: { item: NavItem; level?: number }) {
  const { t } = useTranslate()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentHash, setCurrentHash] = React.useState("")
  const hasChildren = item.items && item.items.length > 0
  const contentId = React.useId()

  // Track hash changes
  React.useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash)
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  // Check if this item is active (matches pathname or pathname + hash)
  const isActive = React.useMemo(() => {
    if (!item.href) return false
    const [itemPath, itemHash] = item.href.split('#')

    // If item has hash, check both path and hash
    if (itemHash) {
      return pathname === itemPath && currentHash === '#' + itemHash
    }
    // Otherwise just check path
    return pathname === itemPath
  }, [item.href, pathname, currentHash])

  // Check if any children are active
  const checkActiveChild = (items: NavItem[]): boolean => {
    return items.some(child => {
      if (!child.href) return false
      const [childPath, childHash] = child.href.split('#')
      const childActive = childHash
        ? pathname === childPath && currentHash === '#' + childHash
        : pathname === childPath
      if (childActive) return true
      if (child.items) return checkActiveChild(child.items)
      return false
    })
  }
  const hasActiveChild = hasChildren && item.items ? checkActiveChild(item.items) : false

  // Auto-expand if this item or its children are active
  React.useEffect(() => {
    if (hasActiveChild || isActive) {
      setIsOpen(true)
    }
  }, [hasActiveChild, isActive])

  return (
    <div>
      {item.href ? (
        <Link
          href={item.href}
          className={cn(
            "block px-3 py-2 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#635bff] focus:ring-offset-2",
            level > 0 && "ml-4",
            // Level 0: bold when active or has active child
            level === 0 && (isActive || hasActiveChild) && "font-semibold",
            // Level 1+: blue when active
            level > 0 && isActive && "text-[#635bff] font-medium",
            // Default colors
            !isActive && "text-slate-600 dark:text-slate-300 hover:text-[#635bff] hover:bg-slate-50 dark:hover:bg-slate-800"
          )}
        >
          {t(item.title)}
        </Link>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={hasChildren ? isOpen : undefined}
          aria-controls={hasChildren ? contentId : undefined}
          className={cn(
            "flex w-full items-center justify-between px-3 py-2 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#635bff] focus:ring-offset-2",
            level > 0 && "ml-4",
            // Level 0: bold when has active child
            level === 0 && hasActiveChild && "font-semibold",
            // Default colors
            "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
          )}
        >
          <span>{t(item.title)}</span>
          {hasChildren && (
            <span className="ml-auto" aria-hidden="true">
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
        <div id={contentId} className="mt-1 space-y-1">
          {item.items?.map((child, index) => (
            <SidebarNavItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function DocsLayout({ navigation, children }: DocsLayoutProps) {
  const { t } = useTranslate()
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  // Get the active navigation section based on current pathname
  const activeSectionData = React.useMemo(() => {
    // Helper function to check if pathname matches any href in the navigation item
    const pathMatchesSection = (item: NavItem): boolean => {
      if (!item.items) return false

      const checkItems = (items: NavItem[]): boolean => {
        return items.some(child => {
          if (child.href) {
            const [childPath] = child.href.split('#')
            if (pathname === childPath) return true
          }
          if (child.items) return checkItems(child.items)
          return false
        })
      }

      return checkItems(item.items)
    }

    return navigation.find(item => pathMatchesSection(item))
  }, [navigation, pathname])

  // Reset sidebar when activeSection changes
  React.useEffect(() => {
    if (activeSectionData) {
      setIsSidebarOpen(true)
    }
  }, [activeSectionData])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background">
      {/* Top Navigation */}
      <TopNavigation navigation={navigation} />

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
                    {t(activeSectionData.title)}
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
                    <SidebarNavItem key={index} item={item} />
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
