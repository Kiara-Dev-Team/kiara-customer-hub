"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function DataManagementPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="features.dataManagementTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="features.dataManagementIntro" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="features.dataManagementCapabilities" /></h2>
          <ul className="space-y-2 mb-6">
            <li><T keyName="features.dataManagementCapability1" /></li>
            <li><T keyName="features.dataManagementCapability2" /></li>
            <li><T keyName="features.dataManagementCapability3" /></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="features.dataManagementStorage" /></h2>
          <p className="leading-relaxed">
            <T keyName="features.dataManagementStorageText" />
          </p>
        </div>
      </section>
    </DocsLayout>
  )
}
