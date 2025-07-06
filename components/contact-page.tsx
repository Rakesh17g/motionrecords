"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "rakesh1719g@gmail.com",
      href: "mailto:rakesh1719g@gmail.com",
      description: "Send me an email",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 90805 94664",
      href: "tel:+919080594664",
      description: "Give me a call",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vellore, Tamil Nadu",
      href: null,
      description: "Based in India",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/rakesh-g-261666350",
      description: "Professional network",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/Rakesh17g",
      description: "Open source projects",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-500 mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                        placeholder="Tell me about your project, ideas, or how I can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-400 mb-8">Prefer direct contact? Reach out through any of these channels.</p>
            </div>

            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{item.label}</h3>
                      <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-300 font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30">
              <h3 className="text-xl font-bold mb-4">What I Do</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="text-blue-400">• Web Development</div>
                  <div className="text-blue-400">• UI/UX Design</div>
                  <div className="text-blue-400">• Mobile Apps</div>
                </div>
                <div className="space-y-2">
                  <div className="text-purple-400">• Digital Marketing</div>
                  <div className="text-purple-400">• Brand Identity</div>
                  <div className="text-purple-400">• Creative Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
