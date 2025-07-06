"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return // Don't track mouse on mobile devices

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [isMobile])

  useEffect(() => {
    if (isMobile) return // Don't add event listeners on mobile

    const handleMouseDown = () => setCursorVariant("click")
    const handleMouseUp = () => setCursorVariant("default")
    const handleMouseEnter = () => setCursorVariant("hover")
    const handleMouseLeave = () => setCursorVariant("default")

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select, [role='button']")

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })

      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isMobile])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 24,
      width: 24,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  }

  if (isMobile) {
    return null // Don't render cursor effect on mobile
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 backdrop-blur-sm"
      variants={variants}
      animate={cursorVariant}
    />
  )
}
