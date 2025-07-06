"use client"
import { Slider } from "@/components/ui/slider"
import { useEffect, useRef } from "react"
import Image from "next/image"

interface FrameComponentProps {
  content: string
  contentType: "image" | "video"
  width: number | string
  height: number | string
  className?: string
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  onMediaSizeChange: (value: number) => void
  onBorderThicknessChange: (value: number) => void
  onBorderSizeChange: (value: number) => void
  showControls: boolean
  label: string
  showFrame: boolean
  autoplayMode: "all" | "hover"
  isHovered: boolean
  title?: string
  description?: string
}

export function FrameComponent({
  content,
  contentType,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  onMediaSizeChange,
  onBorderThicknessChange,
  onBorderSizeChange,
  showControls,
  label,
  showFrame,
  autoplayMode,
  isHovered,
  title,
  description,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (contentType === "video") {
      if (autoplayMode === "all") {
        videoRef.current?.play()
      } else if (autoplayMode === "hover") {
        if (isHovered) {
          videoRef.current?.play()
        } else {
          videoRef.current?.pause()
        }
      }
    }
  }, [isHovered, autoplayMode, contentType])

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {/* Content with Border */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="w-full h-full overflow-hidden rounded-lg"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {contentType === "video" ? (
              <video
                className="w-full h-full object-cover rounded-lg"
                src={content}
                loop
                muted
                playsInline
                autoPlay={autoplayMode === "all" || (autoplayMode === "hover" && isHovered)}
                ref={videoRef}
                onMouseEnter={(e) => {
                  if (autoplayMode === "hover") {
                    e.currentTarget.play()
                  }
                }}
                onMouseLeave={(e) => {
                  if (autoplayMode === "hover") {
                    e.currentTarget.pause()
                  }
                }}
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={content || "/placeholder.svg"}
                  alt={title || label}
                  fill
                  className="object-cover rounded-lg"
                />
                {(title || description) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 rounded-lg">
                    {title && <h3 className="text-white font-bold text-lg mb-1">{title}</h3>}
                    {description && <p className="text-white/80 text-sm">{description}</p>}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Frame Elements (Higher z-index) */}
        {showFrame && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            {/* Simple border frame */}
            <div className="absolute inset-0 border-2 border-white/20 rounded-lg" />
            <div className="absolute inset-1 border border-white/10 rounded-lg" />

            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/40" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/40" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/40" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/40" />
          </div>
        )}

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-white/5 transition-opacity duration-300 rounded-lg ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/80 backdrop-blur-sm z-10 rounded-b-lg">
          <div className="text-white font-bold mb-2">{label}</div>
          <div className="space-y-2">
            <div>
              <label htmlFor={`media-size-${label}`} className="block text-sm font-medium text-white">
                Media Size: {mediaSize.toFixed(2)}
              </label>
              <Slider
                id={`media-size-${label}`}
                min={0.5}
                max={3}
                step={0.01}
                value={[mediaSize]}
                onValueChange={(value) => onMediaSizeChange(value[0])}
              />
            </div>
            <div>
              <label htmlFor={`border-thickness-${label}`} className="block text-sm font-medium text-white">
                Border Thickness: {borderThickness}px
              </label>
              <Slider
                id={`border-thickness-${label}`}
                min={0}
                max={20}
                step={1}
                value={[borderThickness]}
                onValueChange={(value) => onBorderThicknessChange(value[0])}
              />
            </div>
            <div>
              <label htmlFor={`border-size-${label}`} className="block text-sm font-medium text-white">
                Border Size: {borderSize}%
              </label>
              <Slider
                id={`border-size-${label}`}
                min={50}
                max={100}
                step={1}
                value={[borderSize]}
                onValueChange={(value) => onBorderSizeChange(value[0])}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
