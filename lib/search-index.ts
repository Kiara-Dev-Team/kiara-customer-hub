import enUS from "@/locales/en-US.json"
import faqData from "@/data/faq-content.json"

export interface SearchIndexItem {
  key: string
  content: string
  page: string
  pageTitle: string
  section: string
}

// Map translation keys to page URLs
const keyToPageMap: Record<string, { page: string; pageTitle: string; section: string }> = {
  // About pages
  "hero.greeting": { page: "/about", pageTitle: "About", section: "About" },
  "about.title": { page: "/about", pageTitle: "About", section: "About" },
  "about.intro1": { page: "/about", pageTitle: "About", section: "About" },
  "about.intro2": { page: "/about", pageTitle: "About", section: "About" },
  "about.intro3": { page: "/about", pageTitle: "About", section: "About" },
  "about.intro4": { page: "/about", pageTitle: "About", section: "About" },
  "about.intro5": { page: "/about", pageTitle: "About", section: "About" },

  // Experience - Kiara
  "experience.kiara.title": { page: "/about/experience/kiara", pageTitle: "Kiara Inc.", section: "Experience" },
  "experience.kiara.company": { page: "/about/experience/kiara", pageTitle: "Kiara Inc.", section: "Experience" },
  "experience.kiara.description": { page: "/about/experience/kiara", pageTitle: "Kiara Inc.", section: "Experience" },
  "experience.kiara.feature1": { page: "/about/experience/kiara", pageTitle: "Kiara Inc.", section: "Experience" },
  "experience.kiara.feature2": { page: "/about/experience/kiara", pageTitle: "Kiara Inc.", section: "Experience" },
  "experience.kiara.feature3": { page: "/about/experience/kiara", pageTitle: "Kiara Inc.", section: "Experience" },

  // Experience - Liquid
  "experience.liquid.title": { page: "/about/experience/liquid", pageTitle: "Liquid Inc.", section: "Experience" },
  "experience.liquid.company": { page: "/about/experience/liquid", pageTitle: "Liquid Inc.", section: "Experience" },
  "experience.liquid.description": { page: "/about/experience/liquid", pageTitle: "Liquid Inc.", section: "Experience" },

  // Experience - CUUSOO
  "experience.cuusoo.title": { page: "/about/experience/cuusoo", pageTitle: "CUUSOO SYSTEM", section: "Experience" },
  "experience.cuusoo.company": { page: "/about/experience/cuusoo", pageTitle: "CUUSOO SYSTEM", section: "Experience" },
  "experience.cuusoo.description": { page: "/about/experience/cuusoo", pageTitle: "CUUSOO SYSTEM", section: "Experience" },

  // Experience - ITOCHU
  "experience.itochu.title": { page: "/about/experience/itochu", pageTitle: "ITOCHU Corporation", section: "Experience" },
  "experience.itochu.company": { page: "/about/experience/itochu", pageTitle: "ITOCHU Corporation", section: "Experience" },
  "experience.itochu.description": { page: "/about/experience/itochu", pageTitle: "ITOCHU Corporation", section: "Experience" },

  // Getting Started
  "gettingStarted.overviewTitle": { page: "/getting-started/overview", pageTitle: "Getting Started Overview", section: "Getting Started" },
  "gettingStarted.quickStartTitle": { page: "/getting-started/quick-start", pageTitle: "Quick Start", section: "Getting Started" },
  "gettingStarted.installationTitle": { page: "/getting-started/installation", pageTitle: "Installation", section: "Getting Started" },
  "gettingStarted.configurationTitle": { page: "/getting-started/configuration", pageTitle: "Configuration", section: "Getting Started" },

  // Features
  "features.overviewTitle": { page: "/features/overview", pageTitle: "Features Overview", section: "Features" },
  "features.authenticationTitle": { page: "/features/core/authentication", pageTitle: "Authentication", section: "Features" },
  "features.dataManagementTitle": { page: "/features/core/data-management", pageTitle: "Data Management", section: "Features" },
  "features.apiIntegrationTitle": { page: "/features/core/api-integration", pageTitle: "API Integration", section: "Features" },
  "features.customWorkflowsTitle": { page: "/features/advanced/custom-workflows", pageTitle: "Custom Workflows", section: "Features" },
  "features.analyticsTitle": { page: "/features/advanced/analytics", pageTitle: "Analytics", section: "Features" },
  "features.securityTitle": { page: "/features/advanced/security", pageTitle: "Security", section: "Features" },
  "features.integrationsTitle": { page: "/features/integrations", pageTitle: "Integrations", section: "Features" },

  // Resources
  "resources.documentationTitle": { page: "/resources/documentation", pageTitle: "Documentation", section: "Resources" },
  "resources.tutorialsTitle": { page: "/resources/tutorials", pageTitle: "Tutorials", section: "Resources" },
  "resources.bestPracticesTitle": { page: "/resources/best-practices", pageTitle: "Best Practices", section: "Resources" },
  "resources.faqsTitle": { page: "/resources/faqs", pageTitle: "FAQs", section: "Resources" },
}

// Flatten nested JSON object to get all key-value pairs
function flattenObject(obj: any, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {}

  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    const value = obj[key]

    if (typeof value === "string") {
      result[fullKey] = value
    } else if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenObject(value, fullKey))
    }
  }

  return result
}

// Build search index
export function buildSearchIndex(): SearchIndexItem[] {
  const flattenedContent = flattenObject(enUS)
  const index: SearchIndexItem[] = []

  // Add translation content
  for (const [key, content] of Object.entries(flattenedContent)) {
    const pageInfo = keyToPageMap[key]

    if (pageInfo && content && content.length > 10) {
      index.push({
        key,
        content,
        page: pageInfo.page,
        pageTitle: pageInfo.pageTitle,
        section: pageInfo.section,
      })
    }
  }

  // Add FAQ content
  faqData.categories.forEach(category => {
    category.articles.forEach(article => {
      // Clean markdown from content
      const cleanContent = article.content
        .replace(/##\s+/g, "")
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/\[(.*?)\]\(.*?\)/g, "$1")
        .replace(/\n+/g, " ")
        .trim()

      if (cleanContent.length > 10) {
        index.push({
          key: `faq-${article.slug}`,
          content: cleanContent,
          page: `/faq/${category.slug}/${article.slug}`,
          pageTitle: article.title,
          section: "Help & FAQ",
        })
      }
    })
  })

  return index
}

// Search function
export function searchContent(query: string): SearchIndexItem[] {
  if (!query || query.length < 2) return []

  const index = buildSearchIndex()
  const lowerQuery = query.toLowerCase()

  const matches = index.filter(item =>
    item.content.toLowerCase().includes(lowerQuery) ||
    item.pageTitle.toLowerCase().includes(lowerQuery)
  )

  return matches
}

// Get content snippet with highlight
export function getContentSnippet(content: string, query: string, maxLength = 100): string {
  const lowerContent = content.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const matchIndex = lowerContent.indexOf(lowerQuery)

  if (matchIndex === -1) return content.substring(0, maxLength) + "..."

  // Get 40 chars before and after match
  const start = Math.max(0, matchIndex - 40)
  const end = Math.min(content.length, matchIndex + query.length + 40)

  let snippet = content.substring(start, end)

  // Add ellipsis
  if (start > 0) snippet = "..." + snippet
  if (end < content.length) snippet = snippet + "..."

  return snippet
}
