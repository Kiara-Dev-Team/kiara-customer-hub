import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

export default function RoadmapPage() {
  return (
    <DocsLayout navigation={navigation} title="Product Roadmap">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Product Roadmap</h1>
        <p className="text-lg text-muted-foreground mb-6">
          See what we're working on and what's coming next for Kiara Translator.
        </p>
        <Link
          href="https://trello.com/b/16w542hm/kiara-dev-roadmap"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          View detailed roadmap on Trello →
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Planned Features</h2>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">Translation Memory & Glossary</h3>
              <Badge variant="outline">Planned</Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              Add support for translation memory and custom glossaries to improve consistency and allow
              customization for domain-specific terminology.
            </p>
            <p className="text-sm text-muted-foreground">
              Requested by multiple customers. We'll implement this when ready.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">Single Language Display</h3>
              <Badge variant="outline">Planned</Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              Allow users to configure settings so only one language translation is shown, reducing visual
              clutter when multiple languages are active in a channel.
            </p>
            <p className="text-sm text-muted-foreground">
              Based on customer feedback. Implementation in progress.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">Custom Translation Input</h3>
              <Badge variant="outline">Planned</Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              Enable users to add their own custom translations through Kiara, allowing for personalized
              and context-specific translations.
            </p>
            <p className="text-sm text-muted-foreground">
              Multiple customer requests received. Feature in planning phase.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">Enhanced Translation Accuracy</h3>
              <Badge>In Progress</Badge>
            </div>
            <p className="text-muted-foreground mb-3">
              Continuous improvements to translation quality, especially for special terms, nuances, and
              domain-specific language. Current accuracy: ~90%.
            </p>
            <p className="text-sm text-muted-foreground">Ongoing development and optimization.</p>
          </Card>
        </div>
      </section>

      <section className="mt-12 p-8 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Have a Feature Request?</h2>
        <p className="text-muted-foreground mb-6">
          We value your feedback! Let us know what features you'd like to see in Kiara Translator.
        </p>
        <Button asChild>
          <Link href="/contact">Submit Feature Request</Link>
        </Button>
      </section>
    </DocsLayout>
  )
}
