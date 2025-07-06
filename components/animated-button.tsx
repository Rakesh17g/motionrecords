"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "slim"
  gradient?: string
}

export default function AnimatedButton({
  children,
  className,
  variant = "default",
  gradient,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.button
      className={cn(
        "relative overflow-hidden rounded-lg font-medium transition-all",
        variant === "default" ? "px-6 py-3" : "px-4 py-2 text-sm",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 z-0"
        style={{
          background: gradient || "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
          opacity: 0,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
