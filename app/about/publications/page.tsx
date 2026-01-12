"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function PublicationsPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      {/* Publications Section */}
      <section id="publications" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8"><T keyName="publications.title" /></h2>

        <div className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="publications.book1Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="publications.book1Subtitle" /></p>
            <p className="leading-relaxed"><T keyName="publications.book1Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="publications.book2Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="publications.book2Subtitle" /></p>
            <p className="leading-relaxed"><T keyName="publications.book2Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="publications.book3Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="publications.book3Subtitle" /></p>
            <p className="leading-relaxed"><T keyName="publications.book3Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="publications.book4Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="publications.book4Subtitle" /></p>
            <p className="leading-relaxed"><T keyName="publications.book4Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="publications.patentTitle" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="publications.patentSubtitle" /></p>
            <p className="leading-relaxed"><T keyName="publications.patentDescription" /></p>
          </Card>
        </div>
      </section>
    </DocsLayout>
  )
}
