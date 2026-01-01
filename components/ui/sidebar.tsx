"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
}

interface SidebarProps {
  navigation: NavItem[]
  className?: string
}

function NavItem({ item, level = 0 }: { item: NavItem; level?: number }) {
  const [isOpen, setIsOpen] = React.useState(true)
  const hasChildren = item.items && item.items.length > 0

  return (
    <div>
      {item.href ? (
        <Link
          href={item.href}
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
            level > 0 && "ml-4"
          )}
        >
          {item.title}
        </Link>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
            level > 0 && "ml-4"
          )}
        >
          <span className="flex items-center gap-2">
            {item.title}
          </span>
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
            <NavItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar({ navigation, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "sticky top-0 h-screen w-64 overflow-y-auto border-r border-border bg-background p-4",
        className
      )}
    >
      <nav className="space-y-1">
        {navigation.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </nav>
    </aside>
  )
}
