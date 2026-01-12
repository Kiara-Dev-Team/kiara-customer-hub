"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"

const navigation = [
  {
    title: "navigation.about",
    items: [
      { title: "aboutNav.overview", href: "/about" },
      {
        title: "navigation.experience",
        items: [
          { title: "experience.kiara.company", href: "/about/experience/kiara" },
          { title: "experience.liquid.company", href: "/about/experience/liquid" },
          { title: "experience.cuusoo.company", href: "/about/experience/cuusoo" },
          { title: "experience.itochu.company", href: "/about/experience/itochu" },
        ],
      },
      { title: "navigation.publications", href: "/about/publications" },
      { title: "navigation.contact", href: "/about/contact" },
    ],
  },
]

export default function LiquidPage() {
  return (
    <DocsLayout navigation={navigation}>
      <section className="mb-16">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2"><T keyName="experience.liquid.title" /></h1>
            <p className="text-xl text-muted-foreground"><T keyName="experience.liquid.company" /></p>
          </div>
          <span className="text-sm text-muted-foreground"><T keyName="experience.liquid.period" /></span>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="experience.liquid.description" />
          </p>

          <h2><T keyName="experience.liquid.ekycTitle" /></h2>
          <ul className="space-y-2">
            <li><T keyName="experience.liquid.ekyc1" /></li>
            <li><T keyName="experience.liquid.ekyc2" /></li>
            <li><T keyName="experience.liquid.ekyc3" /></li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  )
}
