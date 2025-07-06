import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Motion - The Fastest Growing Digital Marketing Agency",
  description:
    "Your Digital Roadmap for Success - Full-service marketing agency for businesses and artists of all sizes",
  keywords: "digital marketing, SEO, Google Ads, social media marketing, web development, email marketing",
  authors: [{ name: "Motion Records" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/hero-background-video.mp4" as="video" type="video/mp4" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
