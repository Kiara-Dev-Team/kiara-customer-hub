import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "Quick Links",
    href: "/quick",
  },
  {
    title: "Service Level",
    href: "/service-level",
  },
  {
    title: "Roadmap",
    href: "/roadmap",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function QuickLinksPage() {
  return (
    <DocsLayout navigation={navigation} title="Quick Links">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Quick Links</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Access frequently used resources and documentation quickly.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Getting Started</h3>
          <p className="text-muted-foreground mb-4">
            New to Kiara? Start here to learn the basics and get up and running quickly.
          </p>
          <Link href="/faq#quick-start" className="text-primary hover:underline">
            View Quick Start Guide →
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Installation</h3>
          <p className="text-muted-foreground mb-4">
            Step-by-step guide to installing Kiara in your Slack workspace.
          </p>
          <Link href="/faq/quick-start/install-kiara" className="text-primary hover:underline">
            View Installation Guide →
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Pricing</h3>
          <p className="text-muted-foreground mb-4">
            Learn about our pricing plans and payment options.
          </p>
          <Link href="/faq#payment" className="text-primary hover:underline">
            View Pricing Info →
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <p className="text-muted-foreground mb-4">
            Get help from our support team or browse our FAQ.
          </p>
          <Link href="/contact" className="text-primary hover:underline">
            Contact Support →
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Roadmap</h3>
          <p className="text-muted-foreground mb-4">
            See what we're working on and what's coming next.
          </p>
          <Link href="/roadmap" className="text-primary hover:underline">
            View Roadmap →
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Service Level</h3>
          <p className="text-muted-foreground mb-4">
            Learn about our service level agreements and commitments.
          </p>
          <Link href="/service-level" className="text-primary hover:underline">
            View SLA →
          </Link>
        </Card>
      </div>
    </DocsLayout>
  )
}
