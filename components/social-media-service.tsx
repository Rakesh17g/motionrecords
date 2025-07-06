"use client"

import { motion } from "framer-motion"
import { Users, Heart, MessageCircle, Share2, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SocialMediaService() {
  const features = [
    {
      icon: Users,
      title: "Community Building",
      description: "Grow engaged followers who become loyal customers through authentic social media presence.",
    },
    {
      icon: Heart,
      title: "Content Creation",
      description: "Professional content that resonates with your audience and drives engagement across all platforms.",
    },
    {
      icon: MessageCircle,
      title: "Social Management",
      description:
        "Daily posting, community management, and customer service to keep your brand active and responsive.",
    },
    {
      icon: Share2,
      title: "Viral Marketing",
      description:
        "Strategic campaigns designed to maximize reach, shares, and brand awareness across social networks.",
    },
  ]

  const benefits = [
    "Increase followers by 200-400% monthly",
    "Boost engagement rates significantly",
    "Generate leads through social channels",
    "Build brand awareness and recognition",
    "Create viral content opportunities",
    "Develop loyal customer communities",
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Social Media Marketing</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Build engaged communities and drive business growth through strategic social media marketing. We create
            content that connects, engages, and converts your audience.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Grow Social Presence</span>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Social Growth Results</h2>
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
