import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import GoogleAdsService from "@/components/google-ads-service"

export default function GoogleAdsPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <GoogleAdsService />
        <AnimatedFooter />
      </div>
    </div>
  )
}
