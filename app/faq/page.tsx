"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { T, useTranslate } from "@tolgee/react"
import faqData from "@/data/faq-content.json"
import { fullNavigation } from "@/lib/navigation"

// Map category slugs to translation keys
const categoryTranslationMap: Record<string, { name: string; desc: string }> = {
  "quick-start": { name: "faqPage.categoryQuickStart", desc: "faqPage.categoryQuickStartDesc" },
  "how-to-use": { name: "faqPage.categoryHowToUse", desc: "faqPage.categoryHowToUseDesc" },
  "faq": { name: "faqPage.categoryFAQ", desc: "faqPage.categoryFAQDesc" },
  "payment": { name: "faqPage.categoryPayment", desc: "faqPage.categoryPaymentDesc" },
  "cancellation": { name: "faqPage.categoryCancellation", desc: "faqPage.categoryCancellationDesc" },
  "contact": { name: "faqPage.categoryContact", desc: "faqPage.categoryContactDesc" },
}

export default function FAQPage() {
  const { t } = useTranslate()

  return (
    <DocsLayout navigation={fullNavigation} title="Help & FAQ">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-3">
          <T keyName="faqPage.title" />
        </h1>
        <p className="text-base text-muted-foreground mb-4">
          <T keyName="faqPage.description" />
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {faqData.categories.map((category) => {
            const translationKeys = categoryTranslationMap[category.slug]
            return (
              <Link key={category.id} href={`#${category.slug}`}>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary text-xs">
                  {translationKeys ? t(translationKeys.name) : category.name} ({category.articles.length})
                </Badge>
              </Link>
            )
          })}
        </div>
      </section>

      {/* FAQ Categories */}
      {faqData.categories.map((category) => {
        const translationKeys = categoryTranslationMap[category.slug]
        return (
          <section key={category.id} id={category.slug} className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-semibold">
                {translationKeys ? t(translationKeys.name) : category.name}
              </h2>
              <Badge variant="secondary">{category.articles.length} <T keyName="faqPage.articles" /></Badge>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {translationKeys ? t(translationKeys.desc) : category.description}
            </p>

            <div className="space-y-2">
              {category.articles.map((article) => {
                // Get translated title and content from locale
                const articleKey = `faqArticles.${article.slug}`
                const translatedTitle = t(`${articleKey}.title`)
                const translatedContent = t(`${articleKey}.content`)

                // Clean markdown and extract preview text
                const cleanText = translatedContent
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
                        {translatedTitle}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-xs line-clamp-2 mb-1.5">
                      {preview}
                    </p>
                    <Link
                      href={`/faq/${category.slug}/${article.slug}`}
                      className="text-primary hover:underline text-xs inline-block"
                    >
                      <T keyName="faqPage.readMore" />
                    </Link>
                  </Card>
                )
              })}
            </div>
          </section>
        )
      })}

      {/* Contact Section */}
      <section className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          <T keyName="faqPage.stillHaveQuestions" />
        </h2>
        <p className="text-muted-foreground text-sm mb-4">
          <T keyName="faqPage.cantFindAnswer" />
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/contact">
              <T keyName="faqPage.contactSupportBtn" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:hello@kiara.team">
              <T keyName="faqPage.emailUsBtn" />
            </a>
          </Button>
        </div>
      </section>
    </DocsLayout>
  )
}
