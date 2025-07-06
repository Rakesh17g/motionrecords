"use client"

import { useState } from "react"
import {
  Search,
  Car,
  Music,
  Dumbbell,
  Palette,
  Gamepad2,
  Home,
  X,
  TrendingUp,
  Users,
  Eye,
  Calendar,
} from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Velocity Motors",
    company: "Luxury Car Dealership",
    description: "Premium automotive content creation with cinematic car showcases and social media campaigns",
    image: "/projects/velocity-motors.png",
    heroImage: "/projects/velocity-motors-hero.png",
    logo: "VM",
    logoColor: "bg-orange-500",
    category: "automotive",
    icon: <Car className="w-4 h-4" />,
    results: {
      revenue: "+340%",
      leads: "+280%",
      engagement: "+450%",
      timeline: "8 months",
    },
    services: ["Video Production", "Social Media Marketing", "Brand Strategy", "Content Creation"],
    metrics: [
      { label: "Monthly Revenue", before: "$85K", after: "$374K", change: "+340%" },
      { label: "Lead Generation", before: "45/month", after: "171/month", change: "+280%" },
      { label: "Social Engagement", before: "2.1K", after: "11.5K", change: "+450%" },
      { label: "Video Views", before: "12K/month", after: "89K/month", change: "+642%" },
    ],
    testimonial: {
      quote:
        "Motion transformed our entire digital presence. Our showroom visits increased by 300% and we're closing deals we never thought possible.",
      author: "Michael Rodriguez",
      position: "General Manager",
    },
    challenge:
      "Velocity Motors was struggling to showcase their luxury vehicles online and attract high-end customers through digital channels.",
    solution:
      "We created cinematic video content, implemented targeted social campaigns, and developed a premium brand strategy that resonated with luxury car buyers.",
    outcome:
      "Became the #1 luxury dealership in their region with a 340% increase in revenue and a waiting list for premium vehicles.",
  },
  {
    id: 2,
    title: "Luna Waves",
    company: "Electronic Music Artist",
    description: "Music video production and artist branding with complete social media content package",
    image: "/projects/luna-waves.png",
    heroImage: "/projects/luna-waves-hero.png",
    logo: "LW",
    logoColor: "bg-purple-500",
    category: "music",
    icon: <Music className="w-4 h-4" />,
    results: {
      revenue: "+520%",
      followers: "+890%",
      streams: "+1200%",
      timeline: "6 months",
    },
    services: ["Music Video Production", "Artist Branding", "Social Media Growth", "Streaming Optimization"],
    metrics: [
      { label: "Monthly Streams", before: "15K", after: "195K", change: "+1200%" },
      { label: "Social Followers", before: "3.2K", after: "31.7K", change: "+890%" },
      { label: "Monthly Revenue", before: "$2.1K", after: "$13K", change: "+520%" },
      { label: "Playlist Placements", before: "2", after: "47", change: "+2250%" },
    ],
    testimonial: {
      quote:
        "Motion didn't just create content - they built my entire brand identity. I went from bedroom producer to touring artist in 6 months.",
      author: "Luna Waves",
      position: "Electronic Music Artist",
    },
    challenge:
      "Luna Waves had incredible music but no visual identity or social presence to match the quality of their sound.",
    solution:
      "We developed a complete visual brand, produced high-quality music videos, and implemented a strategic social media campaign across all platforms.",
    outcome: "Luna Waves is now a recognized name in electronic music with sold-out shows and major label interest.",
  },
  {
    id: 3,
    title: "FitCore Studios",
    company: "Boutique Fitness Chain",
    description: "Fitness content creation with workout videos and member engagement campaigns",
    image: "/projects/fitcore-studios.png",
    heroImage: "/projects/fitcore-hero.png",
    logo: "FC",
    logoColor: "bg-green-500",
    category: "fitness",
    icon: <Dumbbell className="w-4 h-4" />,
    results: {
      revenue: "+280%",
      members: "+450%",
      retention: "+85%",
      timeline: "10 months",
    },
    services: ["Fitness Video Production", "Member Engagement", "Social Media Marketing", "Brand Development"],
    metrics: [
      { label: "Monthly Revenue", before: "$45K", after: "$171K", change: "+280%" },
      { label: "Active Members", before: "180", after: "990", change: "+450%" },
      { label: "Retention Rate", before: "68%", after: "89%", change: "+31%" },
      { label: "Class Bookings", before: "420/month", after: "1,890/month", change: "+350%" },
    ],
    testimonial: {
      quote:
        "Motion helped us scale from 2 locations to 8 locations. Our member engagement and retention rates are now industry-leading.",
      author: "Sarah Chen",
      position: "Founder & CEO",
    },
    challenge:
      "FitCore was struggling to differentiate themselves in a crowded fitness market and retain members long-term.",
    solution:
      "We created engaging workout content, developed a strong community-focused brand, and implemented retention-focused marketing campaigns.",
    outcome:
      "FitCore became the fastest-growing boutique fitness chain in their city with industry-leading retention rates.",
  },
  {
    id: 4,
    title: "Artisan Brew Co.",
    company: "Craft Coffee Roastery",
    description: "Brand storytelling through coffee culture content and local community engagement",
    image: "/projects/artisan-brew.png",
    heroImage: "/projects/artisan-brew-hero.png",
    logo: "AB",
    logoColor: "bg-amber-600",
    category: "food",
    icon: <Palette className="w-4 h-4" />,
    results: {
      revenue: "+410%",
      customers: "+320%",
      locations: "+200%",
      timeline: "12 months",
    },
    services: ["Brand Storytelling", "Content Creation", "Community Marketing", "E-commerce Development"],
    metrics: [
      { label: "Monthly Revenue", before: "$28K", after: "$143K", change: "+410%" },
      { label: "Regular Customers", before: "340", after: "1,428", change: "+320%" },
      { label: "Online Sales", before: "$3K/month", after: "$31K/month", change: "+933%" },
      { label: "Locations", before: "1", after: "3", change: "+200%" },
    ],
    testimonial: {
      quote:
        "Motion captured the soul of our brand. We went from a single coffee shop to a recognized local brand with multiple locations.",
      author: "Emma Thompson",
      position: "Co-Founder",
    },
    challenge:
      "Artisan Brew had amazing coffee but struggled to communicate their story and expand beyond their single location.",
    solution:
      "We developed compelling brand storytelling, created authentic content showcasing their craft, and built a strong local community presence.",
    outcome:
      "Artisan Brew became a beloved local brand with 3 locations and a thriving online coffee subscription business.",
  },
  {
    id: 5,
    title: "Ethereal Fashion",
    company: "Sustainable Fashion Brand",
    description: "Fashion photography and sustainable brand messaging across digital platforms",
    image: "/projects/ethereal-fashion.png",
    heroImage: "/projects/ethereal-fashion-hero.png",
    logo: "EF",
    logoColor: "bg-pink-500",
    category: "fashion",
    icon: <Palette className="w-4 h-4" />,
    results: {
      revenue: "+380%",
      orders: "+290%",
      awareness: "+650%",
      timeline: "9 months",
    },
    services: ["Fashion Photography", "Sustainable Branding", "Influencer Marketing", "E-commerce Optimization"],
    metrics: [
      { label: "Monthly Revenue", before: "$22K", after: "$106K", change: "+380%" },
      { label: "Monthly Orders", before: "89", after: "347", change: "+290%" },
      { label: "Brand Awareness", before: "12%", after: "90%", change: "+650%" },
      { label: "Social Following", before: "2.1K", after: "28.4K", change: "+1252%" },
    ],
    testimonial: {
      quote:
        "Motion understood our mission and helped us build a brand that truly represents sustainable fashion. Our growth has been incredible.",
      author: "Isabella Martinez",
      position: "Creative Director",
    },
    challenge:
      "Ethereal Fashion needed to stand out in the competitive fashion market while staying true to their sustainable values.",
    solution:
      "We created stunning visual content that highlighted their sustainable practices and built authentic connections with eco-conscious consumers.",
    outcome:
      "Ethereal Fashion became a leading sustainable fashion brand with a loyal customer base and strong market presence.",
  },
  {
    id: 6,
    title: "Pixel Legends",
    company: "Gaming Content Studio",
    description: "Gaming content creation with live streaming setup and community building strategies",
    image: "/projects/pixel-legends.png",
    heroImage: "/projects/pixel-legends-hero.png",
    logo: "PL",
    logoColor: "bg-indigo-500",
    category: "gaming",
    icon: <Gamepad2 className="w-4 h-4" />,
    results: {
      revenue: "+720%",
      subscribers: "+1400%",
      views: "+890%",
      timeline: "7 months",
    },
    services: ["Gaming Content Creation", "Live Streaming Setup", "Community Building", "Monetization Strategy"],
    metrics: [
      { label: "Monthly Revenue", before: "$1.8K", after: "$14.8K", change: "+720%" },
      { label: "Subscribers", before: "4.2K", after: "63K", change: "+1400%" },
      { label: "Monthly Views", before: "45K", after: "445K", change: "+890%" },
      { label: "Community Members", before: "180", after: "8,900", change: "+4844%" },
    ],
    testimonial: {
      quote: "Motion turned my gaming hobby into a full-time career. The growth has been beyond my wildest dreams.",
      author: "Alex Chen",
      position: "Content Creator",
    },
    challenge:
      "Pixel Legends had gaming skills but struggled to build an audience and monetize their content effectively.",
    solution:
      "We developed a comprehensive content strategy, optimized their streaming setup, and built engaged gaming communities across platforms.",
    outcome:
      "Pixel Legends became a top gaming content creator with multiple revenue streams and a thriving community.",
  },
]

const categories = [
  { id: "all", name: "All", icon: null },
  { id: "automotive", name: "Automotive", icon: <Car className="w-4 h-4" /> },
  { id: "music", name: "Music", icon: <Music className="w-4 h-4" /> },
  { id: "fitness", name: "Fitness", icon: <Dumbbell className="w-4 h-4" /> },
  { id: "food", name: "Food & Beverage", icon: <Palette className="w-4 h-4" /> },
  { id: "fashion", name: "Fashion", icon: <Palette className="w-4 h-4" /> },
  { id: "gaming", name: "Gaming", icon: <Gamepad2 className="w-4 h-4" /> },
  { id: "real-estate", name: "Real Estate", icon: <Home className="w-4 h-4" /> },
]

export default function ProjectDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <>
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-black p-6 rounded-2xl border border-gray-800">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-white text-black"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search Results Summary */}
            {(searchTerm || selectedCategory !== "all") && (
              <div className="mt-4 text-center">
                <p className="text-gray-400">
                  {filteredProjects.length === 0
                    ? "No projects found matching your criteria"
                    : `Showing ${filteredProjects.length} project${filteredProjects.length !== 1 ? "s" : ""}`}
                  {searchTerm && (
                    <span>
                      {" "}
                      for "<span className="text-white">{searchTerm}</span>"
                    </span>
                  )}
                  {selectedCategory !== "all" && (
                    <span>
                      {" "}
                      in <span className="text-white">{categories.find((c) => c.id === selectedCategory)?.name}</span>
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-black border-2 border-white rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Logo and Category Icon */}
                  <div className="absolute top-4 left-4 flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 ${project.logoColor} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-sm">{project.logo}</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-black/70 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center">
                      <div className="text-white">{project.icon}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.company}</p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-xs rounded-full capitalize">
                        {project.category}
                      </span>
                    </div>

                    <div className="text-white hover:text-gray-300 text-sm font-medium transition-colors flex items-center space-x-1 border border-white/30 px-3 py-1 rounded-lg hover:bg-white/10">
                      <span>View Details</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-black border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
                className="px-6 py-3 bg-black border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-black border border-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="relative">
              <div className="h-64 relative overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProject.heroImage || selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 ${selectedProject.logoColor} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-xl">{selectedProject.logo}</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                    <p className="text-gray-300">{selectedProject.company}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Results Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">{selectedProject.results.revenue}</div>
                  <div className="text-sm text-gray-400">Revenue Growth</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400">
                    {selectedProject.results.leads ||
                      selectedProject.results.followers ||
                      selectedProject.results.members ||
                      selectedProject.results.customers ||
                      selectedProject.results.orders ||
                      selectedProject.results.subscribers}
                  </div>
                  <div className="text-sm text-gray-400">Growth</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <Eye className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400">
                    {selectedProject.results.engagement ||
                      selectedProject.results.streams ||
                      selectedProject.results.retention ||
                      selectedProject.results.locations ||
                      selectedProject.results.awareness ||
                      selectedProject.results.views}
                  </div>
                  <div className="text-sm text-gray-400">Engagement</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                  <Calendar className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-400">{selectedProject.results.timeline}</div>
                  <div className="text-sm text-gray-400">Timeline</div>
                </div>
              </div>

              {/* Challenge, Solution, Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-lg font-bold text-red-400 mb-3">Challenge</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Solution</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.solution}</p>
                </div>
                <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-lg font-bold text-green-400 mb-3">Outcome</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.outcome}</p>
                </div>
              </div>

              {/* Detailed Metrics */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Key Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-gray-900/30 rounded-lg border border-gray-800"
                    >
                      <span className="text-gray-300">{metric.label}</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-red-400 text-sm">{metric.before}</span>
                        <span className="text-gray-500">→</span>
                        <span className="text-green-400 font-bold">{metric.after}</span>
                        <span className="text-green-400 text-sm font-medium">({metric.change})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Services Provided</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{selectedProject.testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-gray-300 italic mb-4">"{selectedProject.testimonial.quote}"</p>
                    <div>
                      <p className="text-white font-medium">{selectedProject.testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{selectedProject.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
