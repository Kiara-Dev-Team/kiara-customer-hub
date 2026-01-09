"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function RoadmapPage() {
  return (
    <DocsLayout navigation={fullNavigation} title="Product Roadmap">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <T keyName="roadmapPage.title" />
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          <T keyName="roadmapPage.description" />
        </p>
        <Link
          href="https://trello.com/b/16w542hm/kiara-dev-roadmap"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          <T keyName="roadmapPage.viewTrelloLink" />
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          <T keyName="roadmapPage.plannedFeatures" />
        </h2>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">
                <T keyName="roadmapPage.feature1Title" />
              </h3>
              <Badge variant="outline">
                <T keyName="roadmapPage.statusPlanned" />
              </Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              <T keyName="roadmapPage.feature1Desc" />
            </p>
            <p className="text-sm text-muted-foreground">
              <T keyName="roadmapPage.feature1Note" />
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">
                <T keyName="roadmapPage.feature2Title" />
              </h3>
              <Badge variant="outline">
                <T keyName="roadmapPage.statusPlanned" />
              </Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              <T keyName="roadmapPage.feature2Desc" />
            </p>
            <p className="text-sm text-muted-foreground">
              <T keyName="roadmapPage.feature2Note" />
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">
                <T keyName="roadmapPage.feature3Title" />
              </h3>
              <Badge variant="outline">
                <T keyName="roadmapPage.statusPlanned" />
              </Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              <T keyName="roadmapPage.feature3Desc" />
            </p>
            <p className="text-sm text-muted-foreground">
              <T keyName="roadmapPage.feature3Note" />
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">
                <T keyName="roadmapPage.feature4Title" />
              </h3>
              <Badge>
                <T keyName="roadmapPage.statusInProgress" />
              </Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              <T keyName="roadmapPage.feature4Desc" />
            </p>
            <p className="text-sm text-muted-foreground">
              <T keyName="roadmapPage.feature4Note" />
            </p>
          </Card>
        </div>
      </section>

      <section className="mt-12 p-8 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          <T keyName="roadmapPage.featureRequestTitle" />
        </h2>
        <p className="text-muted-foreground mb-6">
          <T keyName="roadmapPage.featureRequestDesc" />
        </p>
        <Button asChild>
          <Link href="/contact">
            <T keyName="roadmapPage.featureRequestBtn" />
          </Link>
        </Button>
      </section>
    </DocsLayout>
  )
}
