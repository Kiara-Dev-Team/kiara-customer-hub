"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function FeaturesOverviewPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="features.overviewTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="features.overviewIntro" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="features.overviewCore" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="features.overviewCoreText" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="features.overviewAdvanced" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="features.overviewAdvancedText" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="features.overviewIntegrations" /></h2>
          <p className="leading-relaxed">
            <T keyName="features.overviewIntegrationsText" />
          </p>
        </div>
      </section>
    </DocsLayout>
  )
}
