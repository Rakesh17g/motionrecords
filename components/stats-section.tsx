"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, Award, BarChart3, Globe, Clock } from "lucide-react"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Successful Campaigns",
      icon: TrendingUp,
      color: "from-blue-500 to-indigo-600",
      description: "Marketing campaigns delivered with measurable results",
    },
    {
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      description: "Of our clients report exceeding their marketing goals",
    },
    {
      value: 15,
      suffix: "M+",
      label: "Revenue Generated",
      icon: BarChart3,
      color: "from-purple-500 to-violet-600",
      description: "In additional revenue for our clients",
    },
    {
      value: 42,
      suffix: "",
      label: "Industry Awards",
      icon: Award,
      color: "from-amber-500 to-orange-600",
      description: "Recognizing our innovative marketing approaches",
    },
    {
      value: 120,
      suffix: "+",
      label: "Global Clients",
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      description: "Across 18 countries and 5 continents",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Support & Service",
      icon: Clock,
      color: "from-rose-500 to-red-600",
      description: "Always available to help with your marketing needs",
    },
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6"
            animate={
              isInView
                ? {
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.2)",
                      "0 0 20px rgba(255,255,255,0.4)",
                      "0 0 10px rgba(255,255,255,0.2)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Our Impact
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering measurable results and exceptional value across all our marketing services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 h-full transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`}
                  style={{ zIndex: -1 }}
                />

                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 mx-auto">
                  <stat.icon className={`h-8 w-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                </div>

                <motion.div
                  className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 text-center`}
                  animate={
                    isInView
                      ? {
                          scale: [1, 1.05, 1],
                          transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                        }
                      : {}
                  }
                >
                  {stat.value}
                  {stat.suffix}
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-2 text-center">{stat.label}</h3>
                <p className="text-gray-400 text-center">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
