"use client"

import { DocsLayout } from "@/components/docs-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { T } from "@tolgee/react"

const navigation = [
  {
    title: "helpNav.home",
    href: "/",
  },
  {
    title: "helpNav.faq",
    href: "/faq",
  },
  {
    title: "helpNav.quickLinks",
    href: "/quick",
  },
  {
    title: "helpNav.serviceLevel",
    href: "/service-level",
  },
  {
    title: "helpNav.roadmap",
    href: "/roadmap",
  },
  {
    title: "helpNav.contact",
    href: "/contact",
  },
]

export default function ServiceLevelPage() {
  return (
    <DocsLayout navigation={navigation} title="Service Level Agreement">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <T keyName="serviceLevelPage.title" />
        </h1>
        <p className="text-lg text-muted-foreground mb-4">
          <T keyName="serviceLevelPage.description" />
        </p>
        <Badge variant="secondary">
          <T keyName="serviceLevelPage.lastUpdated" />
        </Badge>
      </section>

      <section className="mb-12">
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            <T keyName="serviceLevelPage.supportSLOTitle" />
          </h2>
          <p className="text-muted-foreground mb-6">
            <T keyName="serviceLevelPage.supportSLODesc" />
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-start border-b pb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">
                  <T keyName="serviceLevelPage.firstResponseTitle" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  <T keyName="serviceLevelPage.firstResponseDesc" />
                </p>
              </div>
              <Badge className="ml-4">
                <T keyName="serviceLevelPage.firstResponseTarget" />
              </Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">
                  <T keyName="serviceLevelPage.criticalIssueTitle" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  <T keyName="serviceLevelPage.criticalIssueDesc" />
                </p>
              </div>
              <Badge variant="destructive" className="ml-4">
                <T keyName="serviceLevelPage.criticalIssueTarget" />
              </Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">
                  <T keyName="serviceLevelPage.resolutionTimeTitle" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  <T keyName="serviceLevelPage.resolutionTimeDesc" />
                </p>
              </div>
              <Badge className="ml-4">
                <T keyName="serviceLevelPage.resolutionTimeTarget" />
              </Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">
                  <T keyName="serviceLevelPage.ongoingUpdatesTitle" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  <T keyName="serviceLevelPage.ongoingUpdatesDesc" />
                </p>
              </div>
              <Badge className="ml-4">
                <T keyName="serviceLevelPage.ongoingUpdatesTarget" />
              </Badge>
            </div>
            <div className="flex justify-between items-start border-b pb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">
                  <T keyName="serviceLevelPage.slaComplianceTitle" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  <T keyName="serviceLevelPage.slaComplianceDesc" />
                </p>
              </div>
              <Badge className="ml-4">
                <T keyName="serviceLevelPage.slaComplianceTarget" />
              </Badge>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">
                  <T keyName="serviceLevelPage.satisfactionTitle" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  <T keyName="serviceLevelPage.satisfactionDesc" />
                </p>
              </div>
              <Badge className="ml-4">
                <T keyName="serviceLevelPage.satisfactionTarget" />
              </Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            <T keyName="serviceLevelPage.availabilityTitle" />
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                <T keyName="serviceLevelPage.uptimeTitle" />
              </h3>
              <p className="text-muted-foreground">
                <T keyName="serviceLevelPage.uptimeDesc" />
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                <T keyName="serviceLevelPage.accuracyTitle" />
              </h3>
              <p className="text-muted-foreground">
                <T keyName="serviceLevelPage.accuracyDesc" />
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            <T keyName="serviceLevelPage.featuresTitle" />
          </h2>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li><T keyName="serviceLevelPage.feature1" /></li>
            <li><T keyName="serviceLevelPage.feature2" /></li>
            <li><T keyName="serviceLevelPage.feature3" /></li>
            <li><T keyName="serviceLevelPage.feature4" /></li>
            <li><T keyName="serviceLevelPage.feature5" /></li>
            <li><T keyName="serviceLevelPage.feature6" /></li>
          </ul>
        </Card>
      </section>
    </DocsLayout>
  )
}
