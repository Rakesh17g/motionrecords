"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search, Car, Music, Dumbbell, Utensils, ShoppingBag, Gamepad2, Building, Heart } from "lucide-react"

const categories = [
  { name: "All", value: "all", icon: null },
  { name: "Automotive", value: "automotive", icon: Car },
  { name: "Music", value: "music", icon: Music },
  { name: "Fitness", value: "fitness", icon: Dumbbell },
  { name: "Food", value: "food", icon: Utensils },
  { name: "Fashion", value: "fashion", icon: ShoppingBag },
  { name: "Gaming", value: "gaming", icon: Gamepad2 },
  { name: "Real Estate", value: "realestate", icon: Building },
  { name: "Wellness", value: "wellness", icon: Heart },
]

interface ProjectFilterProps {
  onFilterChange: (category: string) => void
  onSearchChange: (search: string) => void
}

export default function ProjectFilter({ onFilterChange, onSearchChange }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    onFilterChange(category)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearchChange(value)
  }

  return (
    <section className="py-6 bg-black border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search Bar - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 max-w-md"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors text-sm"
              />
            </div>
          </motion.div>

          {/* Category Filters - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border text-sm transition-all duration-200 ${
                    activeCategory === category.value
                      ? "bg-white text-black border-white"
                      : "bg-gray-900 text-gray-400 border-gray-800 hover:bg-gray-800 hover:border-gray-700"
                  }`}
                >
                  {IconComponent && <IconComponent className="w-3 h-3" />}
                  <span>{category.name}</span>
                </button>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
