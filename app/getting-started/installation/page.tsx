"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function InstallationPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="gettingStarted.installationTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="gettingStarted.installationIntro" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.installationPrerequisites" /></h2>
          <ul className="space-y-2 mb-6">
            <li><T keyName="gettingStarted.installationPrereq1" /></li>
            <li><T keyName="gettingStarted.installationPrereq2" /></li>
            <li><T keyName="gettingStarted.installationPrereq3" /></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.installationSteps" /></h2>
          <p className="leading-relaxed mb-4">
            <T keyName="gettingStarted.installationStep1" />
          </p>
          <p className="leading-relaxed mb-4">
            <T keyName="gettingStarted.installationStep2" />
          </p>
          <p className="leading-relaxed mb-4">
            <T keyName="gettingStarted.installationStep3" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="gettingStarted.installationVerify" /></h2>
          <p className="leading-relaxed">
            <T keyName="gettingStarted.installationVerifyText" />
          </p>
        </div>
      </section>
    </DocsLayout>
  )
}
