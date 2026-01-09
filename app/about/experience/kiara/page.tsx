"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function KiaraPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2" data-translation-key="experience.kiara.title"><T keyName="experience.kiara.title" /></h1>
            <p className="text-xl text-muted-foreground" data-translation-key="experience.kiara.company"><T keyName="experience.kiara.company" /></p>
          </div>
          <span className="text-sm text-muted-foreground" data-translation-key="experience.kiara.period"><T keyName="experience.kiara.period" /></span>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6" data-translation-key="experience.kiara.description">
            <T keyName="experience.kiara.description" />
          </p>

          <h2 data-translation-key="experience.kiara.featuresTitle"><T keyName="experience.kiara.featuresTitle" /></h2>
          <ul className="space-y-2">
            <li data-translation-key="experience.kiara.feature1"><T keyName="experience.kiara.feature1" /></li>
            <li data-translation-key="experience.kiara.feature2"><T keyName="experience.kiara.feature2" /></li>
            <li data-translation-key="experience.kiara.feature3"><T keyName="experience.kiara.feature3" /></li>
            <li data-translation-key="experience.kiara.feature4"><T keyName="experience.kiara.feature4" /></li>
          </ul>

          <h2 data-translation-key="experience.kiara.impactTitle"><T keyName="experience.kiara.impactTitle" /></h2>
          <p data-translation-key="experience.kiara.impact"><T keyName="experience.kiara.impact" /></p>
        </div>
      </section>
    </DocsLayout>
  )
}
