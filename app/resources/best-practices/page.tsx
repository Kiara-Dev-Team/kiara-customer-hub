"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function BestPracticesPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="resources.bestPracticesTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="resources.bestPracticesIntro" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="resources.bestPracticesArchitecture" /></h2>
          <ul className="space-y-2 mb-6">
            <li><T keyName="resources.bestPracticesArchitecture1" /></li>
            <li><T keyName="resources.bestPracticesArchitecture2" /></li>
            <li><T keyName="resources.bestPracticesArchitecture3" /></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="resources.bestPracticesPerformance" /></h2>
          <ul className="space-y-2 mb-6">
            <li><T keyName="resources.bestPracticesPerformance1" /></li>
            <li><T keyName="resources.bestPracticesPerformance2" /></li>
            <li><T keyName="resources.bestPracticesPerformance3" /></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="resources.bestPracticesSecurity" /></h2>
          <ul className="space-y-2">
            <li><T keyName="resources.bestPracticesSecurity1" /></li>
            <li><T keyName="resources.bestPracticesSecurity2" /></li>
            <li><T keyName="resources.bestPracticesSecurity3" /></li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  )
}
