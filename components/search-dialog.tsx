"use client"

import * as React from "react"
import { FileText, Briefcase, BookOpen, Mail, User, X, Search } from "lucide-react"
import { useTranslate } from "@tolgee/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { searchContent, getContentSnippet, type SearchIndexItem } from "@/lib/search-index"

export function SearchDialog() {
  const { t } = useTranslate()
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Focus input on ⌘K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        inputRef.current?.focus()
        setOpen(true)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Close on click outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Search content from translation files
  const searchResults = React.useMemo(() => {
    return searchContent(query)
  }, [query])

  // Get icon based on section
  const getSectionIcon = (section: string) => {
    switch (section) {
      case "About":
        return <User className="h-4 w-4" />
      case "Experience":
        return <Briefcase className="h-4 w-4" />
      case "Getting Started":
        return <BookOpen className="h-4 w-4" />
      case "Features":
        return <FileText className="h-4 w-4" />
      case "Resources":
        return <BookOpen className="h-4 w-4" />
      default:
        return <Search className="h-4 w-4" />
    }
  }

  // Group results by section
  const groupedResults = searchResults.reduce((acc, result) => {
    if (!acc[result.section]) {
      acc[result.section] = []
    }
    acc[result.section].push(result)
    return acc
  }, {} as Record<string, SearchIndexItem[]>)

  const handleSelect = (result: SearchIndexItem) => {
    setOpen(false)
    setQuery("")

    // Navigate to page
    router.push(result.page)

    // After navigation, scroll to element with matching translation key
    setTimeout(() => {
      const element = document.querySelector(`[data-translation-key="${result.key}"]`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
        // Add temporary highlight
        element.classList.add("highlight-flash")
        setTimeout(() => element.classList.remove("highlight-flash"), 2000)
      }
    }, 100)
  }

  return (
    <div ref={containerRef} className="relative hidden md:block w-80">
      {/* Search Input */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#635bff]/70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search"
          className="w-full pl-12 pr-20 py-4 text-sm text-slate-700 dark:text-slate-200 bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-[#635bff]/30 dark:border-[#635bff]/40 rounded-lg shadow-md hover:border-[#635bff] hover:shadow-lg hover:shadow-[#635bff]/20 focus:outline-none focus:ring-2 focus:ring-[#635bff] focus:ring-offset-2 focus:border-[#635bff] focus:shadow-xl transition-all duration-200"
        />

        {query && (
          <button
            onClick={() => {
              setQuery("")
              inputRef.current?.focus()
            }}
            className="absolute right-16 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        <kbd className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 px-2 font-mono text-xs font-medium text-slate-600 dark:text-slate-300 opacity-70">
          <span>⌘</span>K
        </kbd>
      </div>

      {/* Results Dropdown */}
      {open && query.length > 1 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-800 border-2 border-[#635bff]/20 dark:border-[#635bff]/30 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
          {searchResults.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
              No results found for "{query}"
            </div>
          ) : (
            <div className="py-2">
              {Object.entries(groupedResults).map(([section, results]) => (
                <div key={section} className="mb-2">
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                    {section}
                  </div>
                  {results.map((result) => {
                    const snippet = getContentSnippet(result.content, query)
                    const icon = getSectionIcon(result.section)

                    return (
                      <button
                        key={result.key}
                        onClick={() => handleSelect(result)}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors w-full text-left"
                      >
                        <div className="mt-0.5 text-slate-400 dark:text-slate-500">
                          {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-slate-900 dark:text-slate-100">
                            {result.pageTitle}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                            {snippet}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
