"use client"

import { useState } from "react"
import {
  Palette,
  Target,
  Camera,
  BarChart3,
  Megaphone,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Shield,
  Lightbulb,
} from "lucide-react"

const services = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Brand Strategy & Identity",
    description:
      "Complete brand development from concept to market-ready identity that resonates with your audience and drives recognition.",
    features: [
      "Logo & Visual Identity Design",
      "Brand Guidelines & Style Guide",
      "Market Positioning Strategy",
      "Brand Voice Development",
      "Competitor Analysis",
      "Brand Architecture Planning",
    ],
    gradient: "from-purple-100 to-purple-200",
    iconBg: "bg-purple-600",
    hoverGradient: "hover:from-purple-200 hover:to-purple-300",
    stats: {
      projects: "150+",
      satisfaction: "98%",
      timeline: "2-4 weeks",
    },
    process: [
      "Brand Discovery Workshop",
      "Market Research & Analysis",
      "Concept Development",
      "Design & Refinement",
      "Guidelines Creation",
      "Launch Strategy",
    ],
    testimonial: {
      text: "Motion transformed our brand identity completely. Our recognition increased by 300% in just 6 months.",
      author: "Sarah Chen",
      company: "TechFlow Solutions",
    },
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Digital Marketing Campaigns",
    description:
      "Data-driven digital campaigns across all platforms designed to maximize reach, engagement, and conversion rates.",
    features: [
      "Social Media Marketing",
      "PPC Advertising Management",
      "Email Marketing Campaigns",
      "SEO Optimization",
      "Content Marketing Strategy",
      "Influencer Partnerships",
    ],
    gradient: "from-blue-100 to-blue-200",
    iconBg: "bg-blue-600",
    hoverGradient: "hover:from-blue-200 hover:to-blue-300",
    stats: {
      projects: "200+",
      satisfaction: "96%",
      timeline: "Ongoing",
    },
    process: [
      "Campaign Strategy Development",
      "Audience Targeting & Segmentation",
      "Creative Asset Creation",
      "Campaign Launch & Monitoring",
      "Performance Optimization",
      "Reporting & Analysis",
    ],
    testimonial: {
      text: "Our ROI increased by 450% within the first quarter. Motion's campaigns are incredibly effective.",
      author: "Marcus Rodriguez",
      company: "GrowthLab Inc",
    },
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Content Creation & Production",
    description:
      "High-quality content that tells your story and engages your audience across all digital touchpoints and platforms.",
    features: [
      "Professional Video Production",
      "Photography & Photo Editing",
      "Graphic Design & Illustrations",
      "Copywriting & Content Strategy",
      "Social Media Content",
      "Interactive Media Creation",
    ],
    gradient: "from-green-100 to-green-200",
    iconBg: "bg-green-600",
    hoverGradient: "hover:from-green-200 hover:to-green-300",
    stats: {
      projects: "300+",
      satisfaction: "99%",
      timeline: "1-3 weeks",
    },
    process: [
      "Content Strategy Planning",
      "Creative Brief Development",
      "Production & Creation",
      "Review & Revisions",
      "Final Delivery",
      "Performance Tracking",
    ],
    testimonial: {
      text: "The content quality is exceptional. Our engagement rates doubled across all platforms.",
      author: "Emma Thompson",
      company: "Creative Studios",
    },
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Analytics & Performance",
    description:
      "Comprehensive tracking and optimization to ensure maximum ROI from every marketing dollar spent on your campaigns.",
    features: [
      "Performance Tracking & Monitoring",
      "ROI Analysis & Reporting",
      "A/B Testing & Optimization",
      "Growth Metrics Dashboard",
      "Conversion Rate Optimization",
      "Custom Analytics Setup",
    ],
    gradient: "from-orange-100 to-orange-200",
    iconBg: "bg-orange-600",
    hoverGradient: "hover:from-orange-200 hover:to-orange-300",
    stats: {
      projects: "180+",
      satisfaction: "97%",
      timeline: "Ongoing",
    },
    process: [
      "Analytics Setup & Configuration",
      "Baseline Measurement",
      "Data Collection & Analysis",
      "Optimization Recommendations",
      "Implementation & Testing",
      "Continuous Monitoring",
    ],
    testimonial: {
      text: "Data-driven insights helped us optimize our campaigns and increase conversions by 280%.",
      author: "David Park",
      company: "E-commerce Plus",
    },
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: "Public Relations & Outreach",
    description:
      "Strategic PR campaigns and media outreach designed to build brand authority and establish strong market presence.",
    features: [
      "Media Relations & Outreach",
      "Press Release Writing",
      "Influencer Partnerships",
      "Crisis Management",
      "Thought Leadership",
      "Event PR & Promotion",
    ],
    gradient: "from-pink-100 to-pink-200",
    iconBg: "bg-pink-600",
    hoverGradient: "hover:from-pink-200 hover:to-pink-300",
    stats: {
      projects: "120+",
      satisfaction: "95%",
      timeline: "2-6 weeks",
    },
    process: [
      "PR Strategy Development",
      "Media List Building",
      "Content Creation",
      "Outreach Campaign",
      "Relationship Building",
      "Results Tracking",
    ],
    testimonial: {
      text: "Motion secured coverage in major publications and elevated our brand credibility significantly.",
      author: "Lisa Wang",
      company: "InnovateTech",
    },
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development & Design",
    description:
      "Modern, responsive websites and digital experiences that convert visitors into customers and drive business growth.",
    features: [
      "Custom Website Design",
      "E-commerce Development",
      "UX/UI Design & Optimization",
      "Mobile Optimization",
      "Performance Optimization",
      "Maintenance & Support",
    ],
    gradient: "from-indigo-100 to-indigo-200",
    iconBg: "bg-indigo-600",
    hoverGradient: "hover:from-indigo-200 hover:to-indigo-300",
    stats: {
      projects: "250+",
      satisfaction: "98%",
      timeline: "4-8 weeks",
    },
    process: [
      "Requirements Gathering",
      "Design & Wireframing",
      "Development & Coding",
      "Testing & Quality Assurance",
      "Launch & Deployment",
      "Ongoing Support",
    ],
    testimonial: {
      text: "Our new website increased conversions by 320% and significantly improved user experience.",
      author: "James Mitchell",
      company: "RetailMax",
    },
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Award-Winning Services
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Complete Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything your business needs to succeed in today's competitive market. From strategy to execution, we
            deliver results that drive growth and maximize your return on investment.
          </p>
        </div>

        {/* Service Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">350%</div>
            <div className="text-sm text-gray-600">Average ROI Increase</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.gradient} ${service.hoverGradient} rounded-3xl p-8 transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                selectedService === index
                  ? "ring-4 ring-purple-500 ring-opacity-50 scale-105"
                  : "hover:shadow-xl hover:scale-102"
              }`}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`${service.iconBg} text-white p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-700">{service.stats.projects}</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-white/50 rounded-lg mb-2 mx-auto">
                      <Star className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-800">{service.stats.satisfaction}</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-white/50 rounded-lg mb-2 mx-auto">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-800">{service.stats.timeline}</div>
                    <div className="text-xs text-gray-600">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-white/50 rounded-lg mb-2 mx-auto">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-800">100%</div>
                    <div className="text-xs text-gray-600">Guaranteed</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features
                    .slice(0, selectedService === index ? service.features.length : 4)
                    .map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  {service.features.length > 4 && selectedService !== index && (
                    <div className="text-sm text-gray-600 font-medium">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                {/* Expanded Content */}
                {selectedService === index && (
                  <div className="mt-8 pt-6 border-t border-white/30">
                    {/* Process Steps */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        Our Process
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-6 h-6 bg-white/60 rounded-full flex items-center justify-center mr-3 text-xs font-bold">
                              {stepIndex + 1}
                            </div>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/40 rounded-2xl p-6">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-800 italic mb-3">"{service.testimonial.text}"</p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{service.testimonial.author}</div>
                        <div className="text-gray-600">{service.testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <button className="w-full mt-6 bg-white/60 hover:bg-white/80 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
                  {selectedService === index ? "View Less Details" : "Learn More"}
                  <ArrowRight
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${selectedService === index ? "rotate-90" : "group-hover:translate-x-1"}`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss which services are right for your business and create a custom strategy that delivers
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-purple-600 transition-all">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
