import { DocsLayout } from "@/components/docs-layout"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navigation = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    items: [
      { title: "Kiara Inc.", href: "#kiara" },
      { title: "Liquid Inc.", href: "#liquid" },
      { title: "CUUSOO SYSTEM", href: "#cuusoo" },
      { title: "ITOCHU Corporation", href: "#itochu" },
    ],
  },
  {
    title: "Publications & Patents",
    href: "#publications",
  },
  {
    title: "Contact",
    href: "#contact",
  },
]

export default function Home() {
  return (
    <DocsLayout navigation={navigation} title="WELCOME, I'M DAVE">
      {/* About Section */}
      <section id="about" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>

        <div className="mb-8">
          <p className="text-lg leading-relaxed mb-4">
            I'm Dave Ishii — a Fintech and AI entrepreneur with a background in pure mathematics, fashion business, and international market development.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            As Founder & CEO of Kiara Inc., I build products that bridge technology and human experience, like the Kiara Translator app for multilingual teams.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Previously at Itochu Corp., I led global fashion brand expansions in Europe and Japan.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Today, I focus on Human-Finance Interaction research, digital identity (eKYC), and innovation at the crossroads of finance, AI, and business strategy.
          </p>
          <p className="text-lg leading-relaxed">
            I share insights regularly through publications, patents, and media, helping organizations navigate transformation with clarity and speed.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Top Skills</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Regula Face SDK</Badge>
            <Badge variant="secondary">vKYC – Video KYC/CIP Solution</Badge>
            <Badge variant="secondary">Face Recognition</Badge>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Japanese (Native)</Badge>
            <Badge variant="outline">English (Full Professional)</Badge>
            <Badge variant="outline">Italian (Professional Working)</Badge>
            <Badge variant="outline">Korean (Limited Working)</Badge>
            <Badge variant="outline">Chinese (Limited Working)</Badge>
            <Badge variant="outline">Spanish (Limited Working)</Badge>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>

        <div className="space-y-8">
          <Card className="p-6" id="kiara">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Founder & CEO</h3>
                <p className="text-muted-foreground">Kiara Inc.</p>
              </div>
              <span className="text-sm text-muted-foreground">August 2011 — Present</span>
            </div>
            <p className="leading-relaxed mb-4">
              Building products that bridge technology and human experience. Kiara Translator is a real-time
              multilingual translation app for Slack, supporting over 100 languages and enabling seamless
              communication across language barriers. Successfully deployed for 2,000 social innovators at MIT's
              global hackathon, translating Spanish and Portuguese in high-stakes environments.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Real-Time Translation</Badge>
              <Badge>Product Innovation</Badge>
              <Badge>AI Integration</Badge>
              <Badge>Team Communication</Badge>
            </div>
          </Card>

          <Card className="p-6" id="liquid">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">International Sales Director</h3>
                <p className="text-muted-foreground">Liquid Inc.</p>
              </div>
              <span className="text-sm text-muted-foreground">November 2024 — October 2025</span>
            </div>
            <p className="leading-relaxed mb-4">
              Leading digital identity verification solutions through Liquid eKYC, enabling businesses to verify
              customer identities online quickly and securely. Delivering fast verification processes (within
              minutes), reducing costs for businesses, and implementing smart technology including face scans and AI
              to accurately confirm identities and reduce fraud.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>eKYC</Badge>
              <Badge>Digital Identity</Badge>
              <Badge>Face Recognition</Badge>
              <Badge>Business Development</Badge>
            </div>
          </Card>

          <Card className="p-6" id="cuusoo">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Product Innovation Director</h3>
                <p className="text-muted-foreground">CUUSOO SYSTEM</p>
              </div>
              <span className="text-sm text-muted-foreground">October 2009 — April 2010</span>
            </div>
            <p className="leading-relaxed mb-4">
              Spearheaded the revolutionary Cuusoo System, redefining innovation and community engagement in
              consumer electronics. Collaborated with TEPCO to develop cutting-edge home appliances inspired by user
              creativity, bridging the gap between ideas and market needs.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Product Innovation</Badge>
              <Badge>Community Engagement</Badge>
              <Badge>Strategic Partnerships</Badge>
              <Badge>Consumer Electronics</Badge>
            </div>
          </Card>

          <Card className="p-6" id="itochu">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Sales Representative</h3>
                <p className="text-muted-foreground">ITOCHU Corporation</p>
              </div>
              <span className="text-sm text-muted-foreground">April 1998 — June 2009</span>
            </div>
            <p className="leading-relaxed mb-4">
              Developed strategic business initiatives and international market expansion for renowned global
              fashion brands including Paul Smith (UK), Replay Jeans, Patrizia Pepe, Freddy, Richard Ginori (Italy),
              Essential (Belgium), and J.Lindeberg (Sweden). Successfully led cross-cultural projects and
              partnerships as an expatriate in the UK and Italy, driving brand growth and enhancing market presence
              across European markets.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>International Business</Badge>
              <Badge>Fashion Brands</Badge>
              <Badge>Market Expansion</Badge>
              <Badge>Cross-Cultural Management</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Publications & Patents</h2>

        <div className="grid gap-8">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Machine Learning Engineering Books</h3>
              <p className="text-muted-foreground mb-4">
                Authored multiple books on AI and machine learning engineering, including
                "機械学習エンジニアになりたい人のための本" (Book for Those Who Want to Become Machine Learning
                Engineers) and "コロナ vs. AI 最新テクノロジーで感染症に挑む" (Corona vs. AI: Challenging Infectious
                Diseases with Latest Technology).
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">AI/ML</Badge>
                <Badge variant="outline">Technical Writing</Badge>
                <Badge variant="outline">Education</Badge>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Digital Transformation & Remote Work</h3>
              <p className="text-muted-foreground mb-4">
                Published "働き方のデジタルシフト: リモートワークからはじめる、しなやかな組織づくりの処方箋"
                (Digital Shift in Work Styles: A Prescription for Creating Flexible Organizations Starting with
                Remote Work), exploring the future of work and organizational transformation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Remote Work</Badge>
                <Badge variant="outline">Digital Transformation</Badge>
                <Badge variant="outline">Business Strategy</Badge>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Service Evaluation Patent</h3>
              <p className="text-muted-foreground mb-4">
                Invented and patented a system for evaluating services provided by service providers, including the
                device architecture, methods, and program implementation. This innovation contributes to improving
                service quality assessment and customer experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Patent</Badge>
                <Badge variant="outline">Service Innovation</Badge>
                <Badge variant="outline">Technology</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
        <p className="text-lg leading-relaxed mb-8">
          I'm always interested in discussing new opportunities, collaborations, and innovative projects at the
          intersection of fintech, AI, and business strategy. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
          <Button asChild size="lg">
            <a href="mailto:dai@jenio.co">Send me an email</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://www.linkedin.com/in/dai19980401" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </Button>
        </div>
        <div className="text-sm">
          <p><strong>Email:</strong> dai@jenio.co</p>
          <p><strong>Mobile:</strong> +81-80-6306-2223</p>
          <p><strong>Location:</strong> Shibuya-ku, Tokyo, Japan</p>
          <p><strong>Website:</strong> <Link href="https://www.kiara.team" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.kiara.team</Link></p>
          <p><strong>Portfolio:</strong> <Link href="https://linktr.ee/ishiid" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linktr.ee/ishiid</Link></p>
        </div>
      </section>
    </DocsLayout>
  )
}
