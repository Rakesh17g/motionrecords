"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  ArrowRight,
  Play,
  Camera,
  TrendingUp,
  Music,
  Utensils,
  Dumbbell,
  ShoppingBag,
  Briefcase,
  Heart,
  Gamepad2,
  Car,
  Home,
  Plane,
} from "lucide-react"

const projectCategories = [
  { id: "all", name: "All Projects", icon: <Briefcase className="w-4 h-4" /> },
  { id: "music", name: "Music Artists", icon: <Music className="w-4 h-4" /> },
  { id: "food", name: "Food & Beverage", icon: <Utensils className="w-4 h-4" /> },
  { id: "fitness", name: "Fitness & Wellness", icon: <Dumbbell className="w-4 h-4" /> },
  { id: "fashion", name: "Fashion & Beauty", icon: <ShoppingBag className="w-4 h-4" /> },
  { id: "business", name: "Business Services", icon: <Briefcase className="w-4 h-4" /> },
  { id: "lifestyle", name: "Lifestyle", icon: <Heart className="w-4 h-4" /> },
  { id: "gaming", name: "Gaming & Tech", icon: <Gamepad2 className="w-4 h-4" /> },
  { id: "automotive", name: "Automotive", icon: <Car className="w-4 h-4" /> },
  { id: "realestate", name: "Real Estate", icon: <Home className="w-4 h-4" /> },
  { id: "travel", name: "Travel & Tourism", icon: <Plane className="w-4 h-4" /> },
]

const projects = [
  {
    id: 1,
    category: "music",
    client: "Luna Waves",
    industry: "Electronic Music Artist",
    type: "Music Video Production",
    description: "Complete music video production with cinematic visuals and social media content package",
    services: ["Music Video", "Social Media Content", "Album Artwork", "Promotional Materials"],
    results: ["2.1M YouTube Views", "500K TikTok Plays", "Featured on Spotify Editorial"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-purple-500 to-pink-500",
    stats: { views: "2.1M", engagement: "15.2%", followers: "+45K" },
  },
  {
    id: 2,
    category: "food",
    client: "Artisan Brew Co.",
    industry: "Craft Coffee Roastery",
    type: "Brand Content Creation",
    description: "Complete brand storytelling through video content and social media strategy",
    services: ["Brand Videos", "Product Photography", "Social Media Strategy", "Content Calendar"],
    results: ["300% Instagram Growth", "Featured in Food Network", "Viral TikTok Campaign"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-amber-500 to-orange-500",
    stats: { views: "850K", engagement: "12.8%", followers: "+28K" },
  },
  {
    id: 3,
    category: "fitness",
    client: "FitCore Studios",
    industry: "Boutique Fitness",
    type: "Digital Transformation",
    description: "Complete digital presence overhaul with workout content and member engagement",
    services: ["Workout Videos", "Member App Content", "Social Campaigns", "Influencer Partnerships"],
    results: ["150% Membership Growth", "1M+ Video Views", "Top Fitness App Feature"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-green-500 to-teal-500",
    stats: { views: "1.2M", engagement: "18.5%", followers: "+62K" },
  },
  {
    id: 4,
    category: "fashion",
    client: "Ethereal Fashion",
    industry: "Sustainable Fashion Brand",
    type: "Fashion Campaign",
    description: "Sustainable fashion campaign with model shoots and brand storytelling",
    services: ["Fashion Photography", "Campaign Videos", "Influencer Content", "Brand Storytelling"],
    results: ["Vogue Feature", "200% Online Sales", "Sustainability Award"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-rose-500 to-pink-500",
    stats: { views: "680K", engagement: "22.1%", followers: "+38K" },
  },
  {
    id: 5,
    category: "business",
    client: "TechFlow Solutions",
    industry: "SaaS Platform",
    type: "B2B Content Strategy",
    description: "Professional B2B content creation and thought leadership positioning",
    services: ["Explainer Videos", "Case Study Content", "LinkedIn Strategy", "Webinar Production"],
    results: ["500% Lead Generation", "Industry Recognition", "Partnership Deals"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-blue-500 to-indigo-500",
    stats: { views: "420K", engagement: "8.9%", followers: "+15K" },
  },
  {
    id: 6,
    category: "lifestyle",
    client: "Mindful Living Co.",
    industry: "Wellness & Lifestyle",
    type: "Lifestyle Content",
    description: "Authentic lifestyle content creation focusing on mindfulness and wellness",
    services: ["Lifestyle Photography", "Wellness Videos", "Podcast Production", "Community Building"],
    results: ["Wellness Award Winner", "Podcast Top 10", "Community of 100K+"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-emerald-500 to-cyan-500",
    stats: { views: "920K", engagement: "16.7%", followers: "+55K" },
  },
  {
    id: 7,
    category: "gaming",
    client: "Pixel Legends",
    industry: "Gaming Content Creator",
    type: "Gaming Content",
    description: "Gaming content creation with live streaming setup and community management",
    services: ["Stream Graphics", "Gaming Videos", "Community Management", "Sponsorship Content"],
    results: ["Twitch Partner", "1M+ Subscribers", "Gaming Awards Nominee"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-violet-500 to-purple-500",
    stats: { views: "3.2M", engagement: "25.4%", followers: "+120K" },
  },
  {
    id: 8,
    category: "automotive",
    client: "Velocity Motors",
    industry: "Luxury Car Dealership",
    type: "Automotive Marketing",
    description: "High-end automotive content with cinematic car showcases and virtual tours",
    services: ["Car Photography", "Cinematic Videos", "Virtual Showroom", "Social Media"],
    results: ["40% Sales Increase", "Luxury Brand Partnership", "Award-Winning Campaign"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-slate-500 to-gray-500",
    stats: { views: "750K", engagement: "11.3%", followers: "+22K" },
  },
  {
    id: 9,
    category: "realestate",
    client: "Prime Properties",
    industry: "Luxury Real Estate",
    type: "Property Marketing",
    description: "Luxury property showcases with drone footage and virtual staging",
    services: ["Drone Photography", "Virtual Tours", "Property Videos", "Marketing Materials"],
    results: ["50% Faster Sales", "Premium Listings", "Industry Recognition"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-yellow-500 to-orange-500",
    stats: { views: "580K", engagement: "9.8%", followers: "+18K" },
  },
  {
    id: 10,
    category: "travel",
    client: "Wanderlust Adventures",
    industry: "Travel & Tourism",
    type: "Travel Content",
    description: "Destination marketing with immersive travel content and cultural storytelling",
    services: ["Travel Photography", "Destination Videos", "Cultural Content", "Tourism Campaigns"],
    results: ["Tourism Board Partnership", "Travel Award Winner", "Viral Campaign"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-sky-500 to-blue-500",
    stats: { views: "1.8M", engagement: "19.2%", followers: "+78K" },
  },
]

export default function ProjectDashboard() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400 font-medium mb-6">
            <Camera className="w-4 h-4 mr-2" />
            Content Creation Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Project Dashboard</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our diverse portfolio of content creation projects across industries - from music artists to
            lifestyle brands
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              className="bg-gray-900/50 border border-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300 cursor-pointer group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white/70 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                      {project.client}
                    </h3>
                    <p className="text-sm text-gray-400">{project.industry}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{project.stats.views}</div>
                    <div className="text-xs text-gray-400">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{project.stats.engagement}</div>
                    <div className="text-xs text-gray-400">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{project.stats.followers}</div>
                    <div className="text-xs text-gray-400">Followers</div>
                  </div>
                </div>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.services.slice(0, 3).map((service, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-md">
                      {service}
                    </span>
                  ))}
                  {project.services.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800/50 text-xs text-gray-400 rounded-md">
                      +{project.services.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Expanded Details */}
              {selectedProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-800/50 p-6 bg-gray-900/30"
                >
                  <h4 className="text-white font-semibold mb-3">Services Provided:</h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.services.map((service, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>

                  <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                  <div className="space-y-2">
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-center text-sm text-green-400">
                        <TrendingUp className="w-3 h-3 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12 backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Create Your Success Story?</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Join these successful brands and creators who've transformed their digital presence with our content
            creation expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View All Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
