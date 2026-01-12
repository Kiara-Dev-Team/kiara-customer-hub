"use client"

import Link from "next/link"
import { T } from "@tolgee/react"
import { TopNavigation } from "@/components/top-navigation"
import { LanguageSelector } from "@/components/language-selector"
import { fullNavigation } from "@/lib/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Top Navigation */}
      <TopNavigation navigation={fullNavigation} />

      {/* Language Selector */}
      <LanguageSelector />

      {/* Hero Section */}
      <div className="relative h-[calc(100vh-7rem)] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background - Gradient or Image */}
        <div className="absolute inset-0">
          {/* Beautiful gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />

          {/* Cityscape Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: "url('/hero-cityscape.jpeg')",
            }}
          />

          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-translation-key="hero.title"
          >
            <T keyName="hero.title" />
          </h1>

          <p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
            data-translation-key="hero.subtitle"
          >
            <T keyName="hero.subtitle" />
          </p>

          {/* Get Started Button */}
          <Link
            href="/getting-started/overview"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-[#635bff] hover:bg-[#5046e5] rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <T keyName="hero.getStarted" />
          </Link>
        </div>
      </div>
    </div>
  )
}
