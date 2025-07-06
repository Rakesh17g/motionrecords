"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const videoItems = [
  {
    id: 1,
    title: "Web Development",
    category: "Development",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Exported%20Web%20Video-VN8WoYsfdGj7Pag7pWyMgMemjG6BBW.mp4",
    poster: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Logo Design",
    category: "Branding",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Exported-3AYAZHdNtP51Rp8SOw0yqvjeNxiSFS.mp4",
    poster: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Motion Graphics",
    category: "Animation",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Animation%20Exported%20%284%29-tm4pnz7COrvDHoMaddkKh1DsItdzRb.mp4",
    poster: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Art Direction",
    category: "Creative",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Art%20Direction%20Exported-y690LysI0PdZ1WhQ9GKekTyuag9mLZ.mp4",
    poster: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "WebGL Experience",
    category: "Interactive",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WebGL%20Exported%20%281%29-up7UfbD2AGlxeUKYxBpopcwLBElUHA.mp4",
    poster: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Illustration",
    category: "Design",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Illustration%20Exported%20%281%29%20%281%29-q3m1KRfvH7iKKQDxXJ10KJeqcv1jAl.mp4",
    poster: "/placeholder.svg?height=400&width=600",
  },
]

const VideoCard = ({ item, isActive }: { item: any; isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      setHasError(false)
    }

    const handleError = () => {
      setHasError(true)
      setIsLoaded(false)
    }

    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    // Preload the video
    video.load()

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [item.src])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !isLoaded) return

    if (isActive) {
      video.currentTime = 0
      video.play().catch(() => {
        // Ignore play errors
      })
    } else {
      video.pause()
    }
  }, [isActive, isLoaded])

  return (
    <motion.div
      className="relative bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-[4/3] relative">
        {!hasError ? (
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
              poster={item.poster}
            >
              <source src={item.src} type="video/mp4" />
            </video>

            {!isLoaded && (
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white/50"></div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l7-5-7-5z" />
                </svg>
              </div>
              <p className="text-sm">Video Preview</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-xs text-white/70 mb-1">{item.category}</div>
          <div className="text-sm font-medium">{item.title}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function DynamicFrameLayout() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videoItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {videoItems.map((item, index) => (
          <VideoCard key={item.id} item={item} isActive={index === activeIndex} />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {videoItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
