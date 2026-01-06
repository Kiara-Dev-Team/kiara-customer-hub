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
      {
        title: "Kiara Inc.",
        items: [
          { title: "Overview", href: "#kiara" },
          { title: "Key Features", href: "#kiara-features" },
          { title: "Impact", href: "#kiara-impact" },
        ]
      },
      {
        title: "Liquid Inc.",
        items: [
          { title: "Overview", href: "#liquid" },
          { title: "eKYC Technology", href: "#liquid-ekyc" },
        ]
      },
      {
        title: "CUUSOO SYSTEM",
        items: [
          { title: "Overview", href: "#cuusoo" },
        ]
      },
      {
        title: "ITOCHU Corporation",
        items: [
          { title: "Overview", href: "#itochu" },
        ]
      },
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
    <DocsLayout navigation={navigation}>
      {/* About Section */}
      <section id="about" className="mb-16">
        <h1 className="text-4xl font-bold mb-8">Hello, I'm Dave Ishii</h1>
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
              Kiara Translator is a real-time multilingual translation app designed for Slack, enabling seamless communication across language barriers within teams. It supports over 100 languages and integrates directly into Slack, automatically translating messages to enhance productivity and inclusivity.
            </p>
            <div className="mb-4" id="kiara-features">
              <p className="font-semibold mb-2">Key Features and Strengths</p>
              <ul className="list-disc list-inside space-y-1 leading-relaxed">
                <li><strong>Real-Time Translation:</strong> Messages are translated instantly within Slack, facilitating smooth conversations among team members who speak different languages.</li>
                <li><strong>Broad Language Support:</strong> Kiara supports over 100 languages, making it suitable for diverse, global teams.</li>
                <li><strong>User-Friendly Integration:</strong> As a Slack plugin, Kiara offers a straightforward setup with no hidden fees, allowing teams to start using it immediately without complex configurations.</li>
                <li><strong>Affordable Pricing:</strong> Kiara provides various pricing plans to accommodate different team sizes, starting at $30 per month for up to 10 users.</li>
              </ul>
            </div>
            <div id="kiara-impact">
              <p className="font-semibold mb-2">Impact</p>
              <p className="leading-relaxed"><strong>Proven Effectiveness:</strong> Kiara has been utilized in significant projects, such as supporting 2,000 social innovators at MIT's global hackathon by translating Spanish and Portuguese, demonstrating its reliability in high-stakes environments.</p>
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
              Liquid eKYC is a fully digital process that businesses use to verify a customer's identity online, without needing physical paperwork.
            </p>
            <div className="mb-4" id="liquid-ekyc">
              <p className="font-semibold mb-2">eKYC Technology Strengths</p>
              <ul className="list-disc list-inside space-y-1 leading-relaxed">
                <li><strong>Fast and Easy:</strong> Customers can get verified quickly—usually within minutes, instead of days.</li>
                <li><strong>Lower Costs:</strong> Businesses save money because they don't have to handle paper documents or manual checking.</li>
                <li><strong>More Secure:</strong> It uses smart technology like face scans or AI to accurately confirm identities and reduce fraud.</li>
              </ul>
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
            <ul className="list-disc list-inside space-y-2 leading-relaxed mb-4">
              <li>Developed strategic business initiatives and international market expansion for renowned global fashion brands, including Paul Smith (UK), Replay Jeans, Patrizia Pepe, Freddy, Richard Ginori (Italy), Essential (Belgium), and J.Lindeberg (Sweden).</li>
              <li>Successfully led cross-cultural projects and partnerships, working as an expatriate in the UK and Italy, driving brand growth and enhancing market presence across European markets.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Publications & Patents</h2>

        <div className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">機械学習エンジニアになりたい人のための本 AIを天職にする</h3>
            <p className="text-sm text-muted-foreground mb-2">(Book for Those Who Want to Become Machine Learning Engineers)</p>
            <p className="leading-relaxed">Publication on AI and machine learning engineering career development.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">働き方のデジタルシフト : リモートワークからはじめる、しなやかな組織づくりの処方箋</h3>
            <p className="text-sm text-muted-foreground mb-2">(Digital Shift in Work Styles: A Prescription for Creating Flexible Organizations Starting with Remote Work)</p>
            <p className="leading-relaxed">Exploring the future of work and organizational transformation through remote work practices.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">コロナ vs. AI 最新テクノロジーで感染症に挑む</h3>
            <p className="text-sm text-muted-foreground mb-2">(Corona vs. AI: Challenging Infectious Diseases with Latest Technology)</p>
            <p className="leading-relaxed">Analysis of how AI and technology can be leveraged to combat infectious diseases.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">機械学習エンジニアになりたい人のための本</h3>
            <p className="text-sm text-muted-foreground mb-2">(Book for Those Who Want to Become Machine Learning Engineers)</p>
            <p className="leading-relaxed">Comprehensive guide for aspiring machine learning engineers.</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">サービス提供者が提供するサービスを評価するための装置、その装置において実行される方法、プログラム</h3>
            <p className="text-sm text-muted-foreground mb-2">(Patent: Device for Evaluating Services Provided by Service Providers, Method and Program)</p>
            <p className="leading-relaxed">Patented system for evaluating services, including device architecture, methods, and program implementation for improving service quality assessment.</p>
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
