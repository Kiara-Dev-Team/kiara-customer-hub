import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
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

export default function ContactPage() {
  return (
    <DocsLayout navigation={navigation} title="Contact Us">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Get in touch with our team. We're here to help with any questions or issues you may have.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Email</h2>
          <p className="text-muted-foreground mb-4">
            Send us an email and we'll get back to you within 24 hours.
          </p>
          <Button asChild>
            <a href="mailto:hello@kiara.team">hello@kiara.team</a>
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <p className="text-muted-foreground mb-4">
            Fill out our contact form for detailed inquiries or support requests.
          </p>
          <Button asChild variant="outline">
            <Link href="https://www.getkiara.com/contact" target="_blank" rel="noopener noreferrer">
              Open Contact Form
            </Link>
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Phone / WhatsApp</h2>
          <p className="text-muted-foreground mb-4">Call or text us for immediate assistance.</p>
          <div className="space-y-2">
            <p className="font-mono">+81 80 6306 2223</p>
            <p className="font-mono">+80 9286 3531</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Live Chat</h2>
          <p className="text-muted-foreground mb-4">
            Use the chat box on the bottom right of the screen for instant support.
          </p>
          <p className="text-sm text-muted-foreground">Available during business hours</p>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Common Reasons to Contact Us</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Sales Inquiries</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Pricing and discounts</li>
              <li>Enterprise plans</li>
              <li>Quotations and invoicing</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Technical Support</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Installation issues</li>
              <li>Translation problems</li>
              <li>Account management</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Billing & Payments</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Payment methods</li>
              <li>Update billing info</li>
              <li>Subscription changes</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Cancellations</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Cancel subscription</li>
              <li>Delete Kiara</li>
              <li>Data retention</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="p-8 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Before You Contact Us</h2>
        <p className="text-muted-foreground mb-4">
          Check our FAQ section - you might find your answer there!
        </p>
        <Button asChild variant="outline">
          <Link href="/faq">Browse FAQ</Link>
        </Button>
      </section>
    </DocsLayout>
  )
}
