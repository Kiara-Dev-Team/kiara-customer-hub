import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import faqData from "@/data/faq-content.json"

const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "FAQ",
    items: [
      { title: "Quick Start", href: "/faq#quick-start" },
      { title: "How to Use", href: "/faq#how-to-use" },
      { title: "FAQ", href: "/faq#faq" },
      { title: "Payment", href: "/faq#payment" },
      { title: "Cancellation", href: "/faq#cancellation" },
      { title: "Contact", href: "/faq#contact" },
    ],
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

export default function FAQPage() {
  return (
    <DocsLayout navigation={navigation} title="Help & FAQ">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Help & FAQ</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Find answers to common questions about Kiara Translator. Browse by category or search for specific topics.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {faqData.categories.map((category) => (
            <Link key={category.id} href={`#${category.slug}`}>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                {category.name} ({category.articles.length})
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Categories */}
      {faqData.categories.map((category) => (
        <section key={category.id} id={category.slug} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-semibold">{category.name}</h2>
            <Badge variant="secondary">{category.articles.length} articles</Badge>
          </div>
          <p className="text-muted-foreground mb-8">{category.description}</p>

          <div className="space-y-6">
            {category.articles.map((article) => (
              <Card key={article.id} className="p-6">
                <Link href={`/faq/${category.slug}/${article.slug}`}>
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <div
                  className="prose prose-sm max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{
                    __html: article.content
                      .replace(/\n/g, "<br />")
                      .substring(0, 200) + (article.content.length > 200 ? "..." : ""),
                  }}
                />
                <Link
                  href={`/faq/${category.slug}/${article.slug}`}
                  className="text-primary hover:underline text-sm mt-3 inline-block"
                >
                  Read more →
                </Link>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="mt-16 p-8 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-6">
          Can't find what you're looking for? Get in touch with our support team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Contact Support
          </Link>
          <a
            href="mailto:hello@kiara.team"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Email Us
          </a>
        </div>
      </section>
    </DocsLayout>
  )
}
