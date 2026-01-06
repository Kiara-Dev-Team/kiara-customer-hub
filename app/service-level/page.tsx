import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export default function ServiceLevelPage() {
  return (
    <DocsLayout navigation={navigation} title="Service Level Agreement">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Service Level Agreement</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Our commitment to providing reliable and high-quality translation services.
        </p>
        <Badge variant="secondary">Last Updated: January 2026</Badge>
      </section>

      <section className="mb-12">
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Uptime Guarantee</h3>
              <p className="text-muted-foreground">
                We strive to maintain 99.9% uptime for our translation services. Any scheduled maintenance
                will be announced in advance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Translation Accuracy</h3>
              <p className="text-muted-foreground">
                Our current translation accuracy is approximately 90%. We continuously improve our algorithms
                to enhance translation quality, especially for special terms and nuanced language.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Support Response Times</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">Email Support</span>
              <Badge>Within 24 hours</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Chat Support</span>
              <Badge>During business hours</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Critical Issues</span>
              <Badge variant="destructive">Within 4 hours</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Supported Features</h2>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Real-time translation in 100+ languages</li>
            <li>Unlimited character translation (as of Jan 2021)</li>
            <li>Message length up to 5000 characters</li>
            <li>Mobile app support via Slack mobile</li>
            <li>Channel and direct message translation</li>
            <li>Multi-language detection</li>
          </ul>
        </Card>
      </section>
    </DocsLayout>
  )
}
