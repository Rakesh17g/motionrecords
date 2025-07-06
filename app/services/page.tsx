"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Target, Search, BarChart3, Globe, CheckCircle, Star, Play, Pause, Zap, Heart, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import BackgroundPaths from "@/components/background-paths"

const services = [
  {
    id: "brand-amplification",
    title: "Brand Amplification",
    subtitle: "Turn Your Vision Into Viral Moments",
    icon: <Target className="w-8 h-8" />,
    description:
      "We don't just run ads—we craft stories that resonate. Transform your brand into a movement that customers can't ignore across every social platform.",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Animation%20Exported%20%284%29-tm4pnz7COrvDHoMaddkKh1DsItdzRb.mp4",
    features: [
      "Viral Content Strategy",
      "Community Building",
      "Influencer Partnerships",
      "Brand Storytelling",
      "Audience Psychology",
      "Cultural Trend Integration",
    ],
    benefits: [
      "300% increase in brand recognition",
      "Authentic community engagement",
      "Memorable brand experiences",
      "Emotional customer connections",
    ],
    gradient: "from-slate-600 to-slate-800",
    stats: { metric: "300%", label: "Brand Recognition Boost" },
    personalMessage: "Your brand deserves to be unforgettable",
  },
  {
    id: "search-domination",
    title: "Search Domination",
    subtitle: "Own Every Search That Matters",
    icon: <Search className="w-8 h-8" />,
    description:
      "When your customers search, they should find you first, every time. We position your brand at the exact moment intent meets opportunity.",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Exported%20Web%20Video-VN8WoYsfdGj7Pag7pWyMgMemjG6BBW.mp4",
    features: [
      "Intent-Based Targeting",
      "Competitor Displacement",
      "Search Psychology",
      "Conversion Optimization",
      "Market Positioning",
      "Customer Journey Mapping",
    ],
    benefits: ["First-page dominance", "High-intent traffic capture", "Competitor advantage", "Immediate visibility"],
    gradient: "from-gray-600 to-gray-800",
    stats: { metric: "450%", label: "Revenue Growth" },
    personalMessage: "Be the answer to every search",
  },
  {
    id: "relationship-marketing",
    title: "Relationship Marketing",
    subtitle: "Turn Customers Into Brand Advocates",
    icon: <Heart className="w-8 h-8" />,
    description:
      "Beyond transactions lies transformation. We help you build genuine relationships that turn one-time buyers into lifelong brand evangelists.",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Exported-3AYAZHdNtP51Rp8SOw0yqvjeNxiSFS.mp4",
    features: [
      "Personalized Journeys",
      "Behavioral Triggers",
      "Loyalty Programs",
      "Customer Lifecycle Management",
      "Emotional Engagement",
      "Retention Strategies",
    ],
    benefits: [
      "Deeper customer relationships",
      "Higher lifetime value",
      "Organic word-of-mouth growth",
      "Reduced acquisition costs",
    ],
    gradient: "from-zinc-600 to-zinc-800",
    stats: { metric: "85%", label: "Customer Retention Rate" },
    personalMessage: "Every customer is a relationship worth nurturing",
  },
  {
    id: "growth-acceleration",
    title: "Growth Acceleration",
    subtitle: "Scale Beyond Your Wildest Dreams",
    icon: <Zap className="w-8 h-8" />,
    description:
      "Growth isn't just about getting bigger—it's about getting better, faster, smarter. We engineer sustainable growth that compounds over time.",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WebGL%20Exported%20%281%29-up7UfbD2AGlxeUKYxBpopcwLBElUHA.mp4",
    features: [
      "Growth Hacking Strategies",
      "Scalable Systems",
      "Performance Optimization",
      "Market Expansion",
      "Revenue Diversification",
      "Competitive Intelligence",
    ],
    benefits: ["Exponential growth curves", "Sustainable scaling", "Market leadership", "Future-proof strategies"],
    gradient: "from-stone-600 to-stone-800",
    stats: { metric: "250%", label: "Average Growth Rate" },
    personalMessage: "Your potential is limitless—let's unlock it",
  },
  {
    id: "data-intelligence",
    title: "Data Intelligence",
    subtitle: "Turn Numbers Into Competitive Advantage",
    icon: <BarChart3 className="w-8 h-8" />,
    description:
      "Data tells stories, but we help you write the ending. Transform raw metrics into strategic insights that drive every decision with confidence.",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jitter%20Exported%20Poster-5Dk1uXuK1IXfIj65EyF0WGwCvm43vf.mp4",
    features: [
      "Predictive Analytics",
      "Customer Intelligence",
      "Performance Forecasting",
      "Behavioral Analysis",
      "Market Insights",
      "ROI Optimization",
    ],
    benefits: ["Data-driven confidence", "Predictive advantages", "Strategic clarity", "Optimized investments"],
    gradient: "from-neutral-600 to-neutral-800",
    stats: { metric: "95%", label: "Decision Accuracy" },
    personalMessage: "Every data point is a growth opportunity",
  },
  {
    id: "digital-presence",
    title: "Digital Presence",
    subtitle: "Create Experiences That Convert Hearts",
    icon: <Globe className="w-8 h-8" />,
    description:
      "Your digital presence is your brand's first impression and lasting memory. We craft experiences that don't just look beautiful—they feel unforgettable.",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Art%20Direction%20Exported-y690LysI0PdZ1WhQ9GKekTyuag9mLZ.mp4",
    features: [
      "Experience Design",
      "Conversion Psychology",
      "Brand Storytelling",
      "User Journey Optimization",
      "Emotional Design",
      "Performance Excellence",
    ],
    benefits: ["Memorable first impressions", "Higher conversion rates", "Brand differentiation", "Customer loyalty"],
    gradient: "from-slate-700 to-slate-900",
    stats: { metric: "3.2s", label: "Average Load Time" },
    personalMessage: "Your digital home should feel like magic",
  },
]

const VideoPlayer = ({ src, isActive }: { src: string; isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      setHasError(false)
    }

    const handleError = (e) => {
      console.error("Video error:", e)
      setHasError(true)
    }

    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    // Force load the video
    video.load()

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [src])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !isLoaded) return

    const playVideo = async () => {
      try {
        if (isActive) {
          video.currentTime = 0
          await video.play()
          setIsPlaying(true)
        } else {
          video.pause()
          setIsPlaying(false)
        }
      } catch (error) {
        console.error("Video play error:", error)
        setIsPlaying(false)
      }
    }

    playVideo()
  }, [isActive, isLoaded])

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      if (isPlaying) {
        video.pause()
        setIsPlaying(false)
      } else {
        await video.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error("Toggle play error:", error)
    }
  }

  if (hasError) {
    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <Play className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">Video unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden group bg-gray-900">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        webkit-playsinline="true"
        x5-playsinline="true"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors"
        >
          {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
        </button>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 150px", "end end"],
  })

  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const sectionIndex = Math.floor(progress * services.length)
      setActiveSection(Math.min(sectionIndex, services.length - 1))
    })

    return unsubscribe
  }, [scrollYProgress])

  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-40 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Growth Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              We don't just provide services—we architect your brand's transformation journey
            </motion.p>
          </div>
        </section>

        {/* Services Viewport Scrolling */}
        <div ref={containerRef} className="relative" style={{ height: `${services.length * 100}vh` }}>
          {services.map((service, index) => {
            const sectionProgress = scrollYProgress.get() * services.length
            const isActive = sectionProgress >= index && sectionProgress < index + 1
            const opacity = isActive ? 1 : 0
            const scale = isActive ? 1 : 0.95
            const y = isActive ? "0%" : "5%"

            return (
              <motion.section
                key={service.id}
                style={{
                  opacity,
                  scale,
                  y,
                  position: "sticky",
                  top: "150px",
                  height: "calc(100vh - 200px)",
                  zIndex: services.length - index,
                }}
                className="flex items-center py-8 px-4 bg-black"
              >
                <div className="max-w-7xl mx-auto w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="space-y-4 lg:space-y-6 order-2 lg:order-1"
                    >
                      <div className="space-y-3 lg:space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 lg:p-4 rounded-2xl bg-gradient-to-r ${service.gradient}`}>
                            <div className="text-white">{service.icon}</div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div
                              className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                            >
                              {service.stats.metric}
                            </div>
                            <div className="text-gray-400 text-xs lg:text-sm">{service.stats.label}</div>
                          </div>
                        </div>

                        <div>
                          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">
                            {service.title}
                          </h2>
                          <p className="text-base lg:text-lg text-gray-400 font-medium">{service.subtitle}</p>
                        </div>

                        <div className="p-3 lg:p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                          <p className="text-sm lg:text-base text-gray-300 italic">"{service.personalMessage}"</p>
                        </div>
                      </div>

                      <p className="text-base lg:text-lg text-gray-300 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h3 className="text-base lg:text-lg font-bold text-white flex items-center">
                          <Users className="w-4 lg:w-5 h-4 lg:h-5 mr-2 text-gray-400" />
                          What We Deliver
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                              className="flex items-center space-x-3 p-2 lg:p-3 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-gray-800"
                            >
                              <CheckCircle className="w-3 lg:w-4 h-3 lg:h-4 text-gray-400 flex-shrink-0" />
                              <span className="text-xs lg:text-sm text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3">
                        <h3 className="text-base lg:text-lg font-bold text-white flex items-center">
                          <Star className="w-4 lg:w-4 h-4 lg:h-4 mr-2 text-gray-400" />
                          Your Results
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <motion.div
                              key={benefitIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: benefitIndex * 0.1 }}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-gray-500"></div>
                              <span className="text-xs lg:text-sm text-gray-300">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Video */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="relative h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500px] order-1 lg:order-2"
                    >
                      <VideoPlayer src={service.video} isActive={activeSection === index} />
                    </motion.div>
                  </div>
                </div>
              </motion.section>
            )
          })}
        </div>

        {/* Progress Indicator */}
        <div className="fixed right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-50">
          <div className="space-y-2 lg:space-y-3">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full transition-all duration-300 ${
                  activeSection === index ? "bg-white scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        <AnimatedFooter />
      </div>
    </div>
  )
}
