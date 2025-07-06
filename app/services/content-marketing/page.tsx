import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import ContentMarketingService from "@/components/content-marketing-service"

export default function ContentMarketingPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <ContentMarketingService />
        <AnimatedFooter />
      </div>
    </div>
  )
}
