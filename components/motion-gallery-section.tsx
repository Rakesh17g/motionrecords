"use client"

import DynamicFrameLayout from "./dynamic-frame-layout"

export default function MotionGallerySection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%] mb-6 lg:mb-8">
              Our
              <br />
              Creative
              <br />
              Portfolio
            </h2>
            <div className="space-y-4 lg:space-y-6 text-white/50 text-sm font-light max-w-full lg:max-w-[300px]">
              <div className="h-px bg-white/10 w-full" />
              <p>
                Motion Records specializes in creating compelling digital experiences that drive results. From brand
                identity to web development, we craft solutions that resonate with your audience.
              </p>
              <p>
                Our multi-disciplinary approach combines strategic thinking with creative execution, delivering projects
                that not only look exceptional but perform at the highest level.
              </p>
              <p>Here are some of our favorite works so far.</p>
              <div className="h-px bg-white/10 w-full" />
            </div>
            <a
              href="/success-stories"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full sm:w-auto sm:max-w-[260px] text-sm mt-6 lg:mt-8"
            >
              View All Projects
            </a>
          </div>

          {/* Right Content - Dynamic Frame Layout */}
          <div className="w-full lg:flex-grow">
            <DynamicFrameLayout />
          </div>
        </div>
      </div>
    </section>
  )
}
