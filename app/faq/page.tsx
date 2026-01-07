import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Help & FAQ</h1>
        <p className="text-base text-muted-foreground mb-4">
          Find answers to common questions about Kiara Translator. Browse by category or search for specific topics.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {faqData.categories.map((category) => (
            <Link key={category.id} href={`#${category.slug}`}>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary text-xs">
                {category.name} ({category.articles.length})
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Categories */}
      {faqData.categories.map((category) => (
        <section key={category.id} id={category.slug} className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-semibold">{category.name}</h2>
            <Badge variant="secondary">{category.articles.length} articles</Badge>
          </div>
          <p className="text-muted-foreground text-sm mb-4">{category.description}</p>

          <div className="space-y-2">
            {category.articles.map((article) => {
              // Clean markdown and extract preview text
              const cleanText = article.content
                .replace(/##\s+/g, "") // Remove headers
                .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold
                .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove links
                .replace(/\n+/g, " ") // Replace newlines with spaces
                .trim()

              // Get first sentence for compact preview
              const sentences = cleanText.match(/[^.!?]+[.!?]+/g) || [cleanText]
              const preview = sentences[0]?.trim() || cleanText.substring(0, 100)

              return (
                <Card key={article.id} className="p-3">
                  <Link href={`/faq/${category.slug}/${article.slug}`}>
                    <h3 className="text-sm font-semibold mb-1.5 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-xs line-clamp-2 mb-1.5">
                    {preview}
                  </p>
                  <Link
                    href={`/faq/${category.slug}/${article.slug}`}
                    className="text-primary hover:underline text-xs inline-block"
                  >
                    Read more →
                  </Link>
                </Card>
              )
            })}
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
        <p className="text-muted-foreground text-sm mb-4">
          Can't find what you're looking for? Get in touch with our support team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:hello@kiara.team">Email Us</a>
          </Button>
        </div>
      </section>
    </DocsLayout>
  )
}
