import Hero from "@/components/hero"
import InnovativeServices from "@/components/innovative-services"
import ArtistContentCreation from "@/components/artist-content-creation"
import AnimatedFooter from "@/components/animated-footer"
import Navbar from "@/components/navbar"
import MotionGallerySection from "@/components/motion-gallery-section"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <InnovativeServices />
        <ArtistContentCreation />
        <MotionGallerySection />
        <AnimatedFooter />
      </div>
    </div>
  )
}
