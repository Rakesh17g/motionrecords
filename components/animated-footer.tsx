"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export default function AnimatedFooter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const services = [
    "Brand Identity Development",
    "Digital Marketing",
    "Content Creation",
    "SEO & Analytics",
    "Social Media Management",
    "Performance Marketing",
  ]

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/rakesh-g-261666350", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Rakesh17g", label: "GitHub" },
  ]

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
          style={{
            left: mousePosition.x * 0.02,
            top: mousePosition.y * 0.02,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
          style={{
            right: mousePosition.x * 0.01,
            bottom: mousePosition.y * 0.01,
            transform: "translate(50%, 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <Image src="/motion-records-logo.png" alt="Motion Records" width={50} height={50} className="w-12 h-12" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Motion Records
              </span>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Empowering creative professionals and entrepreneurs to build powerful brands that drive real traction and
              sustainable growth in today's competitive market.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Get In Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:rakesh1719g@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">rakesh1719g@gmail.com</span>
              </a>

              <a
                href="tel:+919080594664"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+91 90805 94664</span>
              </a>

              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Vellore, Tamil Nadu</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Motion Records. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
