"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function ConfigurationPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="gettingStarted.configurationTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="gettingStarted.configurationIntro" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.configurationBasic" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="gettingStarted.configurationBasicText" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.configurationAdvanced" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="gettingStarted.configurationAdvancedText" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.configurationEnvironment" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="gettingStarted.configurationEnvironmentText" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.configurationBestPractices" /></h2>
          <ul className="space-y-2">
            <li><T keyName="gettingStarted.configurationBestPractice1" /></li>
            <li><T keyName="gettingStarted.configurationBestPractice2" /></li>
            <li><T keyName="gettingStarted.configurationBestPractice3" /></li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  )
}
