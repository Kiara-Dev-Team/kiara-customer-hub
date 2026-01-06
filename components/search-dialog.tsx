"use client"

import * as React from "react"
import { FileText, Briefcase, BookOpen, Mail, User } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface SearchResult {
  id: string
  title: string
  description?: string
  href: string
  category: string
  icon: React.ReactNode
}

export function SearchDialog() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
      // Also support "/" key like Stripe
      if (e.key === "/" && !open) {
        const target = e.target as HTMLElement
        // Only open if not in an input field
        if (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA") {
          e.preventDefault()
          setOpen(true)
        }
      }
      // Escape key to close
      if (e.key === "Escape" && open) {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open])

  const searchResults: SearchResult[] = [
    // Main sections
    {
      id: "about",
      title: "About Me",
      description: "Learn about Dave Ishii's background",
      href: "#about",
      category: "Main Sections",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      id: "experience",
      title: "Experience",
      description: "Professional experience and work history",
      href: "#experience",
      category: "Main Sections",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      id: "publications",
      title: "Publications & Patents",
      description: "Academic and professional publications",
      href: "#publications",
      category: "Main Sections",
      icon: <BookOpen className="mr-2 h-4 w-4" />,
    },
    {
      id: "contact",
      title: "Contact",
      description: "Get in touch",
      href: "#contact",
      category: "Main Sections",
      icon: <Mail className="mr-2 h-4 w-4" />,
    },
    // Experience - Companies
    {
      id: "kiara",
      title: "Kiara Inc.",
      description: "Founder & CEO - Real-time multilingual translation",
      href: "#kiara",
      category: "Experience",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      id: "kiara-features",
      title: "Kiara - Key Features",
      description: "Translation features and capabilities",
      href: "#kiara-features",
      category: "Experience",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      id: "kiara-impact",
      title: "Kiara - Impact",
      description: "Business impact and achievements",
      href: "#kiara-impact",
      category: "Experience",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      id: "liquid",
      title: "Liquid Inc.",
      description: "International Sales Director - eKYC Technology",
      href: "#liquid",
      category: "Experience",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      id: "liquid-ekyc",
      title: "Liquid - eKYC Technology",
      description: "Digital identity verification",
      href: "#liquid-ekyc",
      category: "Experience",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      id: "cuusoo",
      title: "CUUSOO SYSTEM",
      description: "Product Innovation Director",
      href: "#cuusoo",
      category: "Experience",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    {
      id: "itochu",
      title: "ITOCHU Corporation",
      description: "Sales Representative - Fashion brands",
      href: "#itochu",
      category: "Experience",
      icon: <Briefcase className="mr-2 h-4 w-4" />,
    },
    // Keywords for better search
    {
      id: "skills",
      title: "Top Skills",
      description: "Regula Face SDK, vKYC, Face Recognition",
      href: "#about",
      category: "Skills",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      id: "languages",
      title: "Languages",
      description: "Japanese, English, Italian, Korean, Chinese, Spanish",
      href: "#about",
      category: "Skills",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
  ]

  const handleSelect = (href: string) => {
    setOpen(false)
    // Navigate to the section
    window.location.hash = href
    // Scroll to the section smoothly
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Group results by category
  const groupedResults = searchResults.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = []
    }
    acc[result.category].push(result)
    return acc
  }, {} as Record<string, SearchResult[]>)

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors max-w-xs"
      >
        <span className="text-slate-400">Search</span>
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Mobile trigger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
        aria-label="Search"
      >
        <svg
          className="h-5 w-5"
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
      </button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupedResults).map(([category, results]) => (
            <CommandGroup key={category} heading={category}>
              {results.map((result) => (
                <CommandItem
                  key={result.id}
                  value={`${result.title} ${result.description}`}
                  onSelect={() => handleSelect(result.href)}
                  className="cursor-pointer"
                >
                  {result.icon}
                  <div className="flex flex-col">
                    <span className="font-medium">{result.title}</span>
                    {result.description && (
                      <span className="text-xs text-muted-foreground">
                        {result.description}
                      </span>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
