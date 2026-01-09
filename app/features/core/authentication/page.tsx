"use client"

import { DocsLayout } from "@/components/docs-layout"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function AuthenticationPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8"><T keyName="features.authenticationTitle" /></h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <T keyName="features.authenticationIntro" />
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="features.authenticationMethods" /></h2>
          <ul className="space-y-2 mb-6">
            <li><T keyName="features.authenticationMethod1" /></li>
            <li><T keyName="features.authenticationMethod2" /></li>
            <li><T keyName="features.authenticationMethod3" /></li>
            <li><T keyName="features.authenticationMethod4" /></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4"><T keyName="features.authenticationSecurity" /></h2>
          <p className="leading-relaxed">
            <T keyName="features.authenticationSecurityText" />
          </p>
        </div>
      </section>
    </DocsLayout>
  )
}
