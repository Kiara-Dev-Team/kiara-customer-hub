"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { T } from "@tolgee/react"

const navigation = [
  {
    title: "helpNav.home",
    href: "/",
  },
  {
    title: "helpNav.faq",
    href: "/faq",
  },
  {
    title: "helpNav.quickLinks",
    href: "/quick",
  },
  {
    title: "helpNav.serviceLevel",
    href: "/service-level",
  },
  {
    title: "helpNav.roadmap",
    href: "/roadmap",
  },
  {
    title: "helpNav.contact",
    href: "/contact",
  },
]

export default function QuickLinksPage() {
  return (
    <DocsLayout navigation={navigation} title="Quick Links">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <T keyName="quick.title" />
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          <T keyName="quick.description" />
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">
            <T keyName="quick.gettingStartedTitle" />
          </h3>
          <p className="text-muted-foreground mb-4">
            <T keyName="quick.gettingStartedDesc" />
          </p>
          <Link href="/faq#quick-start" className="text-primary hover:underline">
            <T keyName="quick.gettingStartedLink" />
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">
            <T keyName="quick.installationTitle" />
          </h3>
          <p className="text-muted-foreground mb-4">
            <T keyName="quick.installationDesc" />
          </p>
          <Link href="/faq/quick-start/install-kiara" className="text-primary hover:underline">
            <T keyName="quick.installationLink" />
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">
            <T keyName="quick.pricingTitle" />
          </h3>
          <p className="text-muted-foreground mb-4">
            <T keyName="quick.pricingDesc" />
          </p>
          <Link href="/faq#payment" className="text-primary hover:underline">
            <T keyName="quick.pricingLink" />
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">
            <T keyName="quick.supportTitle" />
          </h3>
          <p className="text-muted-foreground mb-4">
            <T keyName="quick.supportDesc" />
          </p>
          <Link href="/contact" className="text-primary hover:underline">
            <T keyName="quick.supportLink" />
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">
            <T keyName="quick.roadmapTitle" />
          </h3>
          <p className="text-muted-foreground mb-4">
            <T keyName="quick.roadmapDesc" />
          </p>
          <Link href="/roadmap" className="text-primary hover:underline">
            <T keyName="quick.roadmapLink" />
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">
            <T keyName="quick.serviceLevelTitle" />
          </h3>
          <p className="text-muted-foreground mb-4">
            <T keyName="quick.serviceLevelDesc" />
          </p>
          <Link href="/service-level" className="text-primary hover:underline">
            <T keyName="quick.serviceLevelLink" />
          </Link>
        </Card>
      </div>
    </DocsLayout>
  )
}
