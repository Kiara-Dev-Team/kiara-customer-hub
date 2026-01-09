"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { T } from "@tolgee/react"
import { fullNavigation } from "@/lib/navigation"

export default function ContactPage() {
  return (
    <DocsLayout navigation={fullNavigation}>
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
