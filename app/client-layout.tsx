"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className={inter.className}>{children}</div>
    </ThemeProvider>
  )
}
