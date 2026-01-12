"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function FaqsPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="resources.faqsTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
          <p className="text-lg leading-relaxed">
            <T keyName="resources.faqsIntro" />
          </p>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3"><T keyName="resources.faq1Question" /></h3>
            <p className="leading-relaxed"><T keyName="resources.faq1Answer" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3"><T keyName="resources.faq2Question" /></h3>
            <p className="leading-relaxed"><T keyName="resources.faq2Answer" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3"><T keyName="resources.faq3Question" /></h3>
            <p className="leading-relaxed"><T keyName="resources.faq3Answer" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3"><T keyName="resources.faq4Question" /></h3>
            <p className="leading-relaxed"><T keyName="resources.faq4Answer" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3"><T keyName="resources.faq5Question" /></h3>
            <p className="leading-relaxed"><T keyName="resources.faq5Answer" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3"><T keyName="resources.faq6Question" /></h3>
            <p className="leading-relaxed"><T keyName="resources.faq6Answer" /></p>
          </Card>
        </div>
      </section>
    </DocsLayout>
  )
}
