"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { T } from "@tolgee/react"

const navigation = [
  {
    title: "navigation.about",
    href: "#about",
  },
  {
    title: "navigation.experience",
    items: [
      {
        title: "experience.kiara.company",
        items: [
          { title: "experience.kiara.navOverview", href: "#kiara" },
          { title: "experience.kiara.navFeatures", href: "#kiara-features" },
          { title: "experience.kiara.navImpact", href: "#kiara-impact" },
        ]
      },
      {
        title: "experience.liquid.company",
        items: [
          { title: "experience.liquid.navOverview", href: "#liquid" },
          { title: "experience.liquid.navEkyc", href: "#liquid-ekyc" },
        ]
      },
      {
        title: "experience.cuusoo.company",
        items: [
          { title: "experience.cuusoo.navOverview", href: "#cuusoo" },
        ]
      },
      {
        title: "experience.itochu.company",
        items: [
          { title: "experience.itochu.navOverview", href: "#itochu" },
        ]
      },
    ],
  },
  {
    title: "navigation.publications",
    href: "#publications",
  },
  {
    title: "navigation.contact",
    href: "#contact",
  },
]

export default function Home() {
  return (
    <DocsLayout navigation={navigation}>
      {/* About Section */}
      <section id="about" className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="hero.greeting" /></h1>
        <h2 className="text-3xl font-semibold mb-6"><T keyName="about.title" /></h2>

        <div className="mb-8">
          <p className="text-lg leading-relaxed mb-4">
            <T keyName="about.intro1" />
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <T keyName="about.intro2" />
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <T keyName="about.intro3" />
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <T keyName="about.intro4" />
          </p>
          <p className="text-lg leading-relaxed">
            <T keyName="about.intro5" />
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4"><T keyName="about.topSkillsTitle" /></h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary"><T keyName="skills.regula" /></Badge>
            <Badge variant="secondary"><T keyName="skills.vkyc" /></Badge>
            <Badge variant="secondary"><T keyName="skills.faceRecognition" /></Badge>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4"><T keyName="about.languagesTitle" /></h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline"><T keyName="languages.japanese" /></Badge>
            <Badge variant="outline"><T keyName="languages.english" /></Badge>
            <Badge variant="outline"><T keyName="languages.italian" /></Badge>
            <Badge variant="outline"><T keyName="languages.korean" /></Badge>
            <Badge variant="outline"><T keyName="languages.chinese" /></Badge>
            <Badge variant="outline"><T keyName="languages.spanish" /></Badge>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8"><T keyName="experience.title" /></h2>

        <div className="space-y-8">
          <Card className="p-6" id="kiara">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold"><T keyName="experience.kiara.title" /></h3>
                <p className="text-muted-foreground"><T keyName="experience.kiara.company" /></p>
              </div>
              <span className="text-sm text-muted-foreground"><T keyName="experience.kiara.period" /></span>
            </div>
            <p className="leading-relaxed mb-4">
              <T keyName="experience.kiara.description" />
            </p>
            <div className="mb-4" id="kiara-features">
              <p className="font-semibold mb-2"><T keyName="experience.kiara.featuresTitle" /></p>
              <ul className="list-disc list-inside space-y-1 leading-relaxed">
                <li><T keyName="experience.kiara.feature1" /></li>
                <li><T keyName="experience.kiara.feature2" /></li>
                <li><T keyName="experience.kiara.feature3" /></li>
                <li><T keyName="experience.kiara.feature4" /></li>
              </ul>
            </div>
            <div id="kiara-impact">
              <p className="font-semibold mb-2"><T keyName="experience.kiara.impactTitle" /></p>
              <p className="leading-relaxed"><T keyName="experience.kiara.impact" /></p>
            </div>
          </Card>

          <Card className="p-6" id="liquid">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold"><T keyName="experience.liquid.title" /></h3>
                <p className="text-muted-foreground"><T keyName="experience.liquid.company" /></p>
              </div>
              <span className="text-sm text-muted-foreground"><T keyName="experience.liquid.period" /></span>
            </div>
            <p className="leading-relaxed mb-4">
              <T keyName="experience.liquid.description" />
            </p>
            <div className="mb-4" id="liquid-ekyc">
              <p className="font-semibold mb-2"><T keyName="experience.liquid.ekycTitle" /></p>
              <ul className="list-disc list-inside space-y-1 leading-relaxed">
                <li><T keyName="experience.liquid.ekyc1" /></li>
                <li><T keyName="experience.liquid.ekyc2" /></li>
                <li><T keyName="experience.liquid.ekyc3" /></li>
              </ul>
            </div>
          </Card>

          <Card className="p-6" id="cuusoo">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold"><T keyName="experience.cuusoo.title" /></h3>
                <p className="text-muted-foreground"><T keyName="experience.cuusoo.company" /></p>
              </div>
              <span className="text-sm text-muted-foreground"><T keyName="experience.cuusoo.period" /></span>
            </div>
            <p className="leading-relaxed mb-4">
              <T keyName="experience.cuusoo.description" />
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge><T keyName="experience.cuusoo.badge1" /></Badge>
              <Badge><T keyName="experience.cuusoo.badge2" /></Badge>
              <Badge><T keyName="experience.cuusoo.badge3" /></Badge>
              <Badge><T keyName="experience.cuusoo.badge4" /></Badge>
            </div>
          </Card>

          <Card className="p-6" id="itochu">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold"><T keyName="experience.itochu.title" /></h3>
                <p className="text-muted-foreground"><T keyName="experience.itochu.company" /></p>
              </div>
              <span className="text-sm text-muted-foreground"><T keyName="experience.itochu.period" /></span>
            </div>
            <ul className="list-disc list-inside space-y-2 leading-relaxed mb-4">
              <li><T keyName="experience.itochu.point1" /></li>
              <li><T keyName="experience.itochu.point2" /></li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8"><T keyName="publications.title" /></h2>

        <div className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="publications.book1Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="publications.book1Subtitle" /></p>
            <p className="leading-relaxed"><T keyName="publications.book1Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="publications.book2Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="publications.book2Subtitle" /></p>
            <p className="leading-relaxed"><T keyName="publications.book2Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="publications.book3Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="publications.book3Subtitle" /></p>
            <p className="leading-relaxed"><T keyName="publications.book3Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="publications.book4Title" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="publications.book4Subtitle" /></p>
            <p className="leading-relaxed"><T keyName="publications.book4Description" /></p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2"><T keyName="publications.patentTitle" /></h3>
            <p className="text-sm text-muted-foreground mb-2"><T keyName="publications.patentSubtitle" /></p>
            <p className="leading-relaxed"><T keyName="publications.patentDescription" /></p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6"><T keyName="contact.title" /></h2>
        <p className="text-lg leading-relaxed mb-8">
          <T keyName="contact.description" />
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
          <Button asChild size="lg">
            <a href="mailto:dai@jenio.co"><T keyName="contact.emailButton" /></a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://www.linkedin.com/in/dai19980401" target="_blank" rel="noopener noreferrer">
              <T keyName="contact.linkedinButton" />
            </a>
          </Button>
        </div>
        <div className="text-sm">
          <p><strong><T keyName="contact.email" />:</strong> dai@jenio.co</p>
          <p><strong><T keyName="contact.mobile" />:</strong> +81-80-6306-2223</p>
          <p><strong><T keyName="contact.location" />:</strong> <T keyName="contact.locationValue" /></p>
          <p><strong><T keyName="contact.website" />:</strong> <Link href="https://www.kiara.team" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.kiara.team</Link></p>
          <p><strong><T keyName="contact.portfolio" />:</strong> <Link href="https://linktr.ee/ishiid" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linktr.ee/ishiid</Link></p>
        </div>
      </section>
    </DocsLayout>
  )
}
