"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function QuickStartPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="gettingStarted.quickStartTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="gettingStarted.quickStartIntro" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.quickStartStep1" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="gettingStarted.quickStartStep1Text" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.quickStartStep2" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="gettingStarted.quickStartStep2Text" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.quickStartStep3" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="gettingStarted.quickStartStep3Text" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.quickStartStep4" /></h2>
          <p className="leading-relaxed">
            <T keyName="gettingStarted.quickStartStep4Text" />
          </p>
        </div>
      </section>
    </DocsLayout>
  )
}
