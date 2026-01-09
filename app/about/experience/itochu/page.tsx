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

export default function ItochuPage() {
  return (
    <DocsLayout navigation={navigation}>
      <section className="mb-16">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2"><T keyName="experience.itochu.title" /></h1>
            <p className="text-xl text-muted-foreground"><T keyName="experience.itochu.company" /></p>
          </div>
          <span className="text-sm text-muted-foreground"><T keyName="experience.itochu.period" /></span>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <ul className="space-y-3">
            <li><T keyName="experience.itochu.point1" /></li>
            <li><T keyName="experience.itochu.point2" /></li>
          </ul>
        </div>
      </section>
    </DocsLayout>
  )
}
