"use client"

import { motion } from "framer-motion"
import { Mail, Users, TrendingUp, Target, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EmailMarketingService() {
  const features = [
    {
      icon: Mail,
      title: "Campaign Design",
      description: "Beautiful, responsive email templates that capture attention and drive action across all devices.",
    },
    {
      icon: Users,
      title: "List Building",
      description:
        "Strategic lead magnets and opt-in forms to grow your email subscriber base with qualified prospects.",
    },
    {
      icon: TrendingUp,
      title: "Automation Flows",
      description: "Automated email sequences that nurture leads and convert subscribers into paying customers.",
    },
    {
      icon: Target,
      title: "Segmentation",
      description:
        "Advanced audience segmentation to deliver personalized messages that resonate with each subscriber.",
    },
  ]

  const benefits = [
    "Achieve 25-35% email open rates",
    "Generate 4000% ROI on email campaigns",
    "Increase customer lifetime value",
    "Automate lead nurturing processes",
    "Build stronger customer relationships",
    "Drive repeat purchases and referrals",
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Email Marketing</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Build lasting relationships and drive consistent revenue with strategic email marketing campaigns. Turn
            subscribers into loyal customers with personalized, high-converting email sequences.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Launch Email Campaign</span>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Email Marketing Results</h2>
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
