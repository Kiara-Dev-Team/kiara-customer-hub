import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
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

interface PageProps {
  params: Promise<{
    category: string
    article: string
  }>
}

export async function generateStaticParams() {
  const params: { category: string; article: string }[] = []

  faqData.categories.forEach((category) => {
    category.articles.forEach((article) => {
      params.push({
        category: category.slug,
        article: article.slug,
      })
    })
  })

  return params
}

export default async function ArticlePage({ params }: PageProps) {
  const { category: categorySlug, article: articleSlug } = await params

  // Find the category and article
  const category = faqData.categories.find((cat) => cat.slug === categorySlug)
  if (!category) {
    notFound()
  }

  const article = category.articles.find((art) => art.slug === articleSlug)
  if (!article) {
    notFound()
  }

  // Find article index for navigation
  const currentIndex = category.articles.findIndex((art) => art.slug === articleSlug)
  const prevArticle = currentIndex > 0 ? category.articles[currentIndex - 1] : null
  const nextArticle = currentIndex < category.articles.length - 1 ? category.articles[currentIndex + 1] : null

  return (
    <DocsLayout navigation={navigation} title={article.title}>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/faq" className="hover:text-primary">
          FAQ
        </Link>
        <span>/</span>
        <Link href={`/faq#${category.slug}`} className="hover:text-primary">
          {category.name}
        </Link>
        <span>/</span>
        <span className="text-foreground">{article.title}</span>
      </nav>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="secondary">{category.name}</Badge>
        </div>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      </div>

      {/* Article Content */}
      <Card className="p-8 mb-8">
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: article.content
              .replace(/\n\n/g, "</p><p>")
              .replace(/\n/g, "<br />")
              .replace(/#{2,3}\s+(.+)/g, "<h3>$1</h3>")
              .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
              .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
              .replace(/<p>/g, '<p class="mb-4">')
              .replace(/<h3>/g, '<h3 class="text-xl font-semibold mt-6 mb-3">')
              .replace(/^- (.+)/gm, "<li>$1</li>")
              .replace(/(<li>.*<\/li>)/s, "<ul class='list-disc list-inside space-y-2 mb-4'>$1</ul>"),
          }}
        />
      </Card>

      {/* Original Source Link */}
      <div className="mb-8 p-4 bg-muted rounded-lg text-sm">
        <p className="text-muted-foreground">
          Original article:{" "}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {article.url}
          </a>
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <div className="flex-1">
          {prevArticle && (
            <Link href={`/faq/${categorySlug}/${prevArticle.slug}`}>
              <Button variant="outline">
                ← {prevArticle.title.substring(0, 40)}
                {prevArticle.title.length > 40 ? "..." : ""}
              </Button>
            </Link>
          )}
        </div>
        <div className="flex-1 text-right">
          {nextArticle && (
            <Link href={`/faq/${categorySlug}/${nextArticle.slug}`}>
              <Button variant="outline">
                {nextArticle.title.substring(0, 40)}
                {nextArticle.title.length > 40 ? "..." : ""} →
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Related Articles */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">More from {category.name}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {category.articles
            .filter((art) => art.slug !== articleSlug)
            .slice(0, 4)
            .map((relatedArticle) => (
              <Link key={relatedArticle.id} href={`/faq/${categorySlug}/${relatedArticle.slug}`}>
                <Card className="p-4 hover:border-primary transition-colors">
                  <h3 className="font-semibold mb-2">{relatedArticle.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedArticle.content.replace(/[#*\[\]()]/g, "").substring(0, 100)}...
                  </p>
                </Card>
              </Link>
            ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mt-12 p-8 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-6">Our support team is here to help.</p>
        <div className="flex gap-4">
          <Link href="/contact">
            <Button>Contact Support</Button>
          </Link>
          <Link href="/faq">
            <Button variant="outline">Browse All FAQ</Button>
          </Link>
        </div>
      </section>
    </DocsLayout>
  )
}
