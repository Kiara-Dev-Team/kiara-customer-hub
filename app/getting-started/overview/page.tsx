"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"

import { fullNavigation } from "@/lib/navigation"

export default function GettingStartedOverviewPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="gettingStarted.overviewTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-4">
            <T keyName="gettingStarted.overviewIntro1" />
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <T keyName="gettingStarted.overviewIntro2" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.overviewWhy" /></h2>
          <ul className="space-y-2">
            <li><T keyName="gettingStarted.overviewReason1" /></li>
            <li><T keyName="gettingStarted.overviewReason2" /></li>
            <li><T keyName="gettingStarted.overviewReason3" /></li>
            <li><T keyName="gettingStarted.overviewReason4" /></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.overviewNext" /></h2>
          <p className="leading-relaxed">
            <T keyName="gettingStarted.overviewNextText" />
          </p>
        </div>
      </section>
    </DocsLayout>
  )
}
