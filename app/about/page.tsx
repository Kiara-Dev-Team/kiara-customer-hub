"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function AboutPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
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
    </DocsLayout>
  )
}
