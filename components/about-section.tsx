"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Palette, Trophy, Zap } from "lucide-react"

export function AboutSection() {
  const [activeTrait, setActiveTrait] = useState(0)

  const traits = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "I love breaking down complex problems into elegant solutions.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Palette,
      title: "Creative Designer",
      description: "Crafting beautiful interfaces that users love to interact with.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Trophy,
      title: "Competitive Coder",
      description: "Constantly pushing my limits in algorithmic challenges.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Zap,
      title: "Innovation Driver",
      description: "Always exploring cutting-edge technologies and methodologies.",
      color: "from-green-400 to-emerald-500",
    },
  ]

  const timeline = [
    { year: "2022", event: "Began my coding journey at IIIT Lucknow", description: "Discovered a deep interest in problem-solving and technology while pursuing B.Tech in CS & Business." },
    { year: "2022", event: "Competitive Programming Enthusiast", description: "Entered the global competitive-coding arena, reaching Speciaist and 4-Star on CodeChef." },
    { year: "2023", event: "Built My First Full-Stack App", description: "Created the Club Management System, connecting student communities through a responsive React + Spring Boot platform." },
    { year: "2023 - 2024", event: "Open Source & Hackathon", description: "Contributed to Hacktoberfest 2023 and reached the Google Girls Hackathon Semifinals, sharpening collaboration & innovation." },
    { year: "2024", event: "Developed CoEdit — a Real-Time Collaboration Tool", description: "Engineered a secure multi-user editor using React, Node.js & Socket.io for seamless real-time coding and drawing." },
    { year: "Jan - Mar 2025", event: "Full-Stack Development Intern @ Innomatics Research Labs", description: "Delivered end-to-end web apps with React, Node, Express & MongoDB; implemented auth flows and REST APIs." },
    { year: "May - July 2025", event: "Software Engineering Intern @ Intuit", description: "Built a Preview Simulator in OICMS; implemented URL compression API (+60% readability), enhanced UI responsiveness & collaboration." },
    { year: "2025 - Present", event: "Evolving as a Full-Stack Developer", description: "Exploring Next.js, AI APIs & modern architectures to craft human-centered digital experiences." },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who believes in the power of technology to transform ideas into reality. My
            journey spans across multiple domains, from competitive programming to full-stack development.
          </p>
        </motion.div>

        {/* Personality Traits as 3D Cubes */}
        {/* Personality Traits as Interactive Flip Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
  {traits.map((trait, index) => (
    <div
      key={index}
      className="group perspective cursor-pointer"
      onMouseEnter={() => setActiveTrait(index)}
      onMouseLeave={() => setActiveTrait(-1)}
    >
      <motion.div
        className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d"
        animate={{
          rotateY: activeTrait === index ? 180 : 0,
        }}
      >
        {/* FRONT FACE */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${trait.color} flex flex-col items-center justify-center text-white`}
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <trait.icon size={48} className="mb-4" />
          <h3 className="text-lg md:text-xl font-semibold text-center">
            {trait.title}
          </h3>
        </div>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 rounded-2xl bg-slate-900 flex items-center justify-center p-4 text-center text-gray-200"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-sm md:text-base leading-relaxed">
            {trait.description}
          </p>
        </div>
      </motion.div>
    </div>
  ))}
</div>


        {/* 3D Timeline */}
        {/* TIMELINE - 3 column grid approach */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative"
>
  <h3 className="text-3xl font-orbitron font-bold text-center mb-12 text-cyan-400">My Journey</h3>

  <div className="w-full">
    {/* The container uses grid: left / line / right.
        On small screens we collapse to a single column (stacked). */}
    <div className="grid grid-cols-[1fr_48px_1fr] gap-4">
      {/* vertical line column (spans full height via background) */}
      <div className="col-start-2 col-end-3 relative">
        {/* Full height line - make it visible with gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
      </div>

      {timeline.map((item, index) => {
        const isLeft = index % 2 === 0

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.12 }}
            className="w-full col-span-3" // span full so we can control internal layout per row
          >
            {/* Row grid for each item: left / middle(node) / right */}
            <div className="grid grid-cols-[1fr_48px_1fr] items-start gap-4 md:items-center">
              {/* LEFT CELL */}
              <div
                className={`col-start-1 col-end-2 flex ${isLeft ? "justify-end pr-8" : "justify-start pr-8 md:opacity-0 md:pointer-events-none"}`}
              >
                {/* Put content in left for left-items only */}
                {isLeft && (
                  <div className="max-w-md md:max-w-sm">
                    <motion.div className="backdrop-blur-md bg-black/20 border border-cyan-500/30 rounded-xl p-6" whileHover={{ scale: 1.02 }}>
                      <h4 className="text-xl font-bold text-cyan-400 mb-2">{item.event}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </motion.div>
                  </div>
                )}
                {/* Year placed left (to the left of the center line) */}
                {isLeft && (
                  <div className="hidden md:flex items-center ml-4">
                    <div className="text-2xl md:text-3xl font-orbitron font-bold text-purple-400 mr-6">
                      {item.year}
                    </div>
                  </div>
                )}
              </div>

              {/* MIDDLE CELL - node */}
              <div className="col-start-2 col-end-3 flex justify-center items-start md:items-center relative">
                <motion.div
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 border-4 border-black"
                  whileHover={{ scale: 1.4 }}
                />
              </div>

              {/* RIGHT CELL */}
              <div
                className={`col-start-3 col-end-4 flex ${!isLeft ? "justify-start pl-8" : "justify-end pl-8 md:opacity-0 md:pointer-events-none"}`}
              >
                {/* For right-side items place the year and content on the right */}
                {!isLeft && (
                  <div className="hidden md:flex items-center mr-6">
                    <div className="text-2xl md:text-3xl font-orbitron font-bold text-purple-400">
                      {item.year}
                    </div>
                  </div>
                )}

                {!isLeft && (
                  <div className="max-w-md md:max-w-sm">
                    <motion.div className="backdrop-blur-md bg-black/20 border border-cyan-500/30 rounded-xl p-6" whileHover={{ scale: 1.02 }}>
                      <h4 className="text-xl font-bold text-cyan-400 mb-2">{item.event}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* MOBILE: show year stacked above card so nothing overlaps */}
              <div className="md:hidden col-span-3 mt-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-lg font-orbitron font-bold text-purple-400">{item.year}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  </div>
</motion.div>

      </div>
    </div>
  )
}
