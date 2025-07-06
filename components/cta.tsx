"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Phone } from "lucide-react"
import AnimatedButton from "./animated-button"

export default function CTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Brand?
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Let's collaborate to create something extraordinary. From concept to execution, I'll help bring your vision
            to life with cutting-edge design and development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <AnimatedButton
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                gradient="radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(37,99,235,0.2) 50%, rgba(29,78,216,0) 100%)"
              >
                <span className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </AnimatedButton>
            </motion.div>

            <div className="flex gap-4">
              <motion.a
                href="mailto:rakesh1719g@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>Email Me</span>
              </motion.a>

              <motion.a
                href="tel:+919080594664"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Call Me</span>
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 text-sm mb-4">Trusted by creative professionals worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Placeholder for client logos or testimonials */}
              <div className="w-24 h-8 bg-gray-800 rounded opacity-50"></div>
              <div className="w-24 h-8 bg-gray-800 rounded opacity-50"></div>
              <div className="w-24 h-8 bg-gray-800 rounded opacity-50"></div>
              <div className="w-24 h-8 bg-gray-800 rounded opacity-50"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
