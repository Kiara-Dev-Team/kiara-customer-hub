"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function IntegrationsPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="features.integrationsTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
          <p className="text-lg leading-relaxed">
            <T keyName="features.integrationsIntro" />
          </p>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="features.integration1Title" /></h3>
            <p className="leading-relaxed"><T keyName="features.integration1Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="features.integration2Title" /></h3>
            <p className="leading-relaxed"><T keyName="features.integration2Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="features.integration3Title" /></h3>
            <p className="leading-relaxed"><T keyName="features.integration3Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="features.integration4Title" /></h3>
            <p className="leading-relaxed"><T keyName="features.integration4Description" /></p>
          </Card>
        </div>
      </section>
    </DocsLayout>
  )
}
