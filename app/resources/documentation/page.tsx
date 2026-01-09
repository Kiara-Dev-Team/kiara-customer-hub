"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function DocumentationPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="resources.documentationTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="resources.documentationIntro" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="resources.documentationApiReference" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="resources.documentationApiReferenceText" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="resources.documentationGuides" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="resources.documentationGuidesText" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="resources.documentationExamples" /></h2>
          <p className="leading-relaxed">
            <T keyName="resources.documentationExamplesText" />
          </p>
        </div>
      </section>
    </DocsLayout>
  )
}
