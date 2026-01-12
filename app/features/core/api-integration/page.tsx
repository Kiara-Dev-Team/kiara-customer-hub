"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function ApiIntegrationPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="features.apiIntegrationTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="features.apiIntegrationIntro" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="features.apiIntegrationEndpoints" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="features.apiIntegrationEndpointsText" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="features.apiIntegrationWebhooks" /></h2>
          <p className="leading-relaxed">
            <T keyName="features.apiIntegrationWebhooksText" />
          </p>
        </div>
      </section>
    </DocsLayout>
  )
}
