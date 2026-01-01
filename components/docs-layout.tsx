"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { Sidebar, type NavItem } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DocsLayoutProps {
  navigation: NavItem[]
  children: React.ReactNode
  title?: string
}

export function DocsLayout({ navigation, children, title }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Mobile sidebar toggle */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:block">
        <Sidebar navigation={navigation} />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 lg:hidden">
            <Sidebar navigation={navigation} className="shadow-lg" />
          </div>
        </>
      )}

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto max-w-4xl px-6 py-8 lg:px-8 lg:py-12">
          {title && (
            <header className="mb-8 border-b border-border pb-6">
              <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            </header>
          )}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
