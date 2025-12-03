"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CompetitiveProgrammingSection } from "@/components/competitive-programming-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const sections = ["hero", "about", "projects", "skills", "competitive", "achievements", "contact"]
      let currentIndex = 0

      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        currentIndex = Math.min(currentIndex + 1, sections.length - 1)
        document.getElementById(sections[currentIndex])?.scrollIntoView({ behavior: "smooth" })
      } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        currentIndex = Math.max(currentIndex - 1, 0)
        document.getElementById(sections[currentIndex])?.scrollIntoView({ behavior: "smooth" })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <main className="relative">
      <ParticleBackground />
      <Navigation />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="competitive">
        <CompetitiveProgrammingSection />
      </section>

      <section id="achievements">
        <AchievementsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </main>
  )
}
