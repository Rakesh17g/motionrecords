"use client"

import { motion } from "framer-motion"
import { PenTool, Video, Camera, Megaphone, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContentMarketingService() {
  const features = [
    {
      icon: PenTool,
      title: "Blog & Articles",
      description:
        "SEO-optimized blog posts and articles that establish authority and drive organic traffic to your site.",
    },
    {
      icon: Video,
      title: "Video Content",
      description:
        "Engaging video content for social media, websites, and advertising campaigns that captivate audiences.",
    },
    {
      icon: Camera,
      title: "Visual Content",
      description:
        "Professional photography, graphics, and visual assets that enhance your brand's visual storytelling.",
    },
    {
      icon: Megaphone,
      title: "Content Strategy",
      description: "Comprehensive content planning and distribution strategies across all marketing channels.",
    },
  ]

  const benefits = [
    "Increase website traffic by 200-400%",
    "Generate 3x more leads than traditional marketing",
    "Build brand authority and thought leadership",
    "Improve customer engagement and loyalty",
    "Create evergreen content assets",
    "Boost social media following and shares",
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Content Marketing</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Create compelling content that attracts, engages, and converts your target audience. Our content marketing
            strategies build brand authority and drive sustainable business growth.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Create Content Strategy</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:bg-gray-900/70 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Content Marketing Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
