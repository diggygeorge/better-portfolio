"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/LoadingScreen"
import Hero from "@/components/Hero"
import PhotoGallerySection from "@/components/PhotoGallerySection"
import ProjectsSection from "@/components/ProjectsSection"
import ExperienceSection from "@/components/ExperienceSection"
import SkillsCarousel from "@/components/SkillCarousel"
import ResumeSection from "@/components/ResumeSection"
import { ThemeToggle } from "@/components/ThemeToggle"
import ContactSection from "@/components/ContactSection"
import Navbar from "@/components/Navbar"

export default function HomePage() {
  const [loadingDone, setLoadingDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoadingDone(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  if (!loadingDone) return <LoadingScreen />

  return (
    <main className="text-white scroll-smooth">
      <Navbar />
      <ThemeToggle />

      {/* ---- 2-column layout ---- */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side: pinned SkillsCarousel */}
        <div className="z-20 md:w-1/10 lg:w-1/8 hidden md:block sticky top-0 h-screen overflow-hidden border-r border-neutral-800">
          <div className="flex justify-center items-center h-full">
            <SkillsCarousel />
          </div>
        </div>

        {/* Right side: scrollable content */}
        <div className="md:w-9/10 lg:w-7/8 px-6 md:px-10 overflow-x-hidden">
          <Hero />
          <PhotoGallerySection />
          <ExperienceSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </div>
      </div>
    </main>
  )
}