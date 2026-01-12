"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function TutorialsPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="resources.tutorialsTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
          <p className="text-lg leading-relaxed">
            <T keyName="resources.tutorialsIntro" />
          </p>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="resources.tutorial1Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="resources.tutorial1Duration" /></p>
            <p className="leading-relaxed"><T keyName="resources.tutorial1Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="resources.tutorial2Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="resources.tutorial2Duration" /></p>
            <p className="leading-relaxed"><T keyName="resources.tutorial2Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="resources.tutorial3Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="resources.tutorial3Duration" /></p>
            <p className="leading-relaxed"><T keyName="resources.tutorial3Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="resources.tutorial4Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="resources.tutorial4Duration" /></p>
            <p className="leading-relaxed"><T keyName="resources.tutorial4Description" /></p>
          </Card>
        </div>
      </section>
    </DocsLayout>
  )
}
