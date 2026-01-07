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
          <h2 className="text-2xl font-semibold mb-4">Customer Support Service Level Objectives (SLO)</h2>
          <p className="text-muted-foreground mb-6">
            We are committed to providing excellent customer support with clearly defined response and resolution times.
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-start border-b pb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">First Response Time</h3>
                <p className="text-sm text-muted-foreground">Initial response to customer inquiries</p>
              </div>
              <Badge className="ml-4">95% within 1 business day</Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Critical Issue Acknowledgment</h3>
                <p className="text-sm text-muted-foreground">Urgent technical issues and outages</p>
              </div>
              <Badge variant="destructive" className="ml-4">100% within 4 business hours</Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Resolution Time</h3>
                <p className="text-sm text-muted-foreground">Complete resolution of support cases</p>
              </div>
              <Badge className="ml-4">90% within 2 business days</Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Ongoing Case Updates</h3>
                <p className="text-sm text-muted-foreground">Regular status updates for open tickets</p>
              </div>
              <Badge className="ml-4">100% every 7 business days</Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">SLA Compliance</h3>
                <p className="text-sm text-muted-foreground">Overall adherence to service level targets</p>
              </div>
              <Badge className="ml-4">≥90% across all targets</Badge>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Customer Satisfaction</h3>
                <p className="text-sm text-muted-foreground">Target satisfaction rating from support interactions</p>
              </div>
              <Badge className="ml-4">≥4.5/5 rating</Badge>
            </div>
          </div>
        </Card>

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
