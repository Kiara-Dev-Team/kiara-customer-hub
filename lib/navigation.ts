import { NavItem } from "@/components/top-navigation"

export const fullNavigation: NavItem[] = [
  {
    title: "navigation.about",
    items: [
      { title: "aboutNav.overview", href: "/about" },
      {
        title: "navigation.experience",
        items: [
          { title: "experience.kiara.company", href: "/about/experience/kiara" },
          { title: "experience.liquid.company", href: "/about/experience/liquid" },
          { title: "experience.cuusoo.company", href: "/about/experience/cuusoo" },
          { title: "experience.itochu.company", href: "/about/experience/itochu" },
        ],
      },
      { title: "navigation.publications", href: "/about/publications" },
      { title: "navigation.contact", href: "/about/contact" },
    ],
  },
  {
    title: "navigation.gettingStarted",
    items: [
      { title: "gettingStarted.overview", href: "/getting-started/overview" },
      { title: "gettingStarted.quickStart", href: "/getting-started/quick-start" },
      { title: "gettingStarted.installation", href: "/getting-started/installation" },
      { title: "gettingStarted.configuration", href: "/getting-started/configuration" },
    ],
  },
  {
    title: "navigation.features",
    items: [
      { title: "features.overview", href: "/features/overview" },
      {
        title: "features.coreFeatures",
        items: [
          { title: "features.authentication", href: "/features/core/authentication" },
          { title: "features.dataManagement", href: "/features/core/data-management" },
          { title: "features.apiIntegration", href: "/features/core/api-integration" },
        ],
      },
      {
        title: "features.advancedFeatures",
        items: [
          { title: "features.customWorkflows", href: "/features/advanced/custom-workflows" },
          { title: "features.analytics", href: "/features/advanced/analytics" },
          { title: "features.security", href: "/features/advanced/security" },
        ],
      },
      { title: "features.integrations", href: "/features/integrations" },
    ],
  },
  {
    title: "navigation.resources",
    items: [
      { title: "resources.documentation", href: "/resources/documentation" },
      { title: "resources.tutorials", href: "/resources/tutorials" },
      { title: "resources.bestPractices", href: "/resources/best-practices" },
      { title: "resources.faqs", href: "/resources/faqs" },
    ],
  },
  {
    title: "helpDropdown.help",
    items: [
      { title: "helpNav.faq", href: "/faq" },
      { title: "helpNav.quickLinks", href: "/quick" },
      { title: "helpNav.serviceLevel", href: "/service-level" },
      { title: "helpNav.roadmap", href: "/roadmap" },
      { title: "helpNav.contact", href: "/contact" },
      { title: "helpDropdown.contactSales", href: "https://www.getkiara.com/contact" },
    ],
  },
]
