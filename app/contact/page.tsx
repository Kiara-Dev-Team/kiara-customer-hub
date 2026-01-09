"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function ContactPage() {
  return (
    <DocsLayout navigation={fullNavigation} title="Contact Us">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <T keyName="contactPage.title" />
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          <T keyName="contactPage.description" />
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            <T keyName="contactPage.emailTitle" />
          </h2>
          <p className="text-muted-foreground mb-4">
            <T keyName="contactPage.emailDesc" />
          </p>
          <Button asChild>
            <a href="mailto:hello@kiara.team">
              <T keyName="contactPage.emailAddress" />
            </a>
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            <T keyName="contactPage.contactFormTitle" />
          </h2>
          <p className="text-muted-foreground mb-4">
            <T keyName="contactPage.contactFormDesc" />
          </p>
          <Button asChild variant="outline">
            <Link href="https://www.getkiara.com/contact" target="_blank" rel="noopener noreferrer">
              <T keyName="contactPage.contactFormBtn" />
            </Link>
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            <T keyName="contactPage.phoneTitle" />
          </h2>
          <p className="text-muted-foreground mb-4">
            <T keyName="contactPage.phoneDesc" />
          </p>
          <div className="space-y-2">
            <p className="font-mono">+81 80 6306 2223</p>
            <p className="font-mono">+80 9286 3531</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            <T keyName="contactPage.liveChatTitle" />
          </h2>
          <p className="text-muted-foreground mb-4">
            <T keyName="contactPage.liveChatDesc" />
          </p>
          <p className="text-sm text-muted-foreground">
            <T keyName="contactPage.liveChatHours" />
          </p>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          <T keyName="contactPage.reasonsTitle" />
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">
              <T keyName="contactPage.salesTitle" />
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li><T keyName="contactPage.salesItem1" /></li>
              <li><T keyName="contactPage.salesItem2" /></li>
              <li><T keyName="contactPage.salesItem3" /></li>
            </ul>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">
              <T keyName="contactPage.technicalTitle" />
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li><T keyName="contactPage.technicalItem1" /></li>
              <li><T keyName="contactPage.technicalItem2" /></li>
              <li><T keyName="contactPage.technicalItem3" /></li>
            </ul>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">
              <T keyName="contactPage.billingTitle" />
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li><T keyName="contactPage.billingItem1" /></li>
              <li><T keyName="contactPage.billingItem2" /></li>
              <li><T keyName="contactPage.billingItem3" /></li>
            </ul>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">
              <T keyName="contactPage.cancellationTitle" />
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li><T keyName="contactPage.cancellationItem1" /></li>
              <li><T keyName="contactPage.cancellationItem2" /></li>
              <li><T keyName="contactPage.cancellationItem3" /></li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="p-8 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          <T keyName="contactPage.beforeContactTitle" />
        </h2>
        <p className="text-muted-foreground mb-4">
          <T keyName="contactPage.beforeContactDesc" />
        </p>
        <Button asChild variant="outline">
          <Link href="/faq">
            <T keyName="contactPage.browseFAQBtn" />
          </Link>
        </Button>
      </section>
    </DocsLayout>
  )
}
