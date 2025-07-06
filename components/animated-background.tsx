"use client"

import { useMobile } from "@/hooks/use-mobile"

export default function AnimatedBackground() {
  const isMobile = useMobile()

  // Don't render anything on mobile for performance
  if (isMobile) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simple static dots instead of animated particles */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-white/10 rounded-full" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-white/10 rounded-full" />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-white/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-white/10 rounded-full" />

      {/* Simple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/5" />
    </div>
  )
}
