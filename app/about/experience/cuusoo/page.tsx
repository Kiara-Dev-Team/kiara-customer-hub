"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
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

export default function CuusooPage() {
  return (
    <DocsLayout navigation={navigation}>
      <section className="mb-16">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2"><T keyName="experience.cuusoo.title" /></h1>
            <p className="text-xl text-muted-foreground"><T keyName="experience.cuusoo.company" /></p>
          </div>
          <span className="text-sm text-muted-foreground"><T keyName="experience.cuusoo.period" /></span>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="experience.cuusoo.description" />
          </p>

          <div className="flex flex-wrap gap-2 not-prose">
            <Badge><T keyName="experience.cuusoo.badge1" /></Badge>
            <Badge><T keyName="experience.cuusoo.badge2" /></Badge>
            <Badge><T keyName="experience.cuusoo.badge3" /></Badge>
            <Badge><T keyName="experience.cuusoo.badge4" /></Badge>
          </div>
        </div>
      </section>
    </DocsLayout>
  )
}
