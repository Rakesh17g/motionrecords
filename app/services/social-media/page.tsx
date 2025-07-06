import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import SocialMediaService from "@/components/social-media-service"

export default function SocialMediaPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <SocialMediaService />
        <AnimatedFooter />
      </div>
    </div>
  )
}
