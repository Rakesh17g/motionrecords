import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import WebDevelopmentService from "@/components/web-development-service"

export default function WebDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <WebDevelopmentService />
        <AnimatedFooter />
      </div>
    </div>
  )
}
