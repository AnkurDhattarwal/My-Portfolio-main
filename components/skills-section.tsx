"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Frontend",
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React", level: 95, projects: 15, icon: "⚛️" },
        { name: "Next.js", level: 90, projects: 12, icon: "▲" },
        { name: "TypeScript", level: 88, projects: 20, icon: "📘" },
        { name: "Tailwind CSS", level: 92, projects: 18, icon: "🎨" },
        { name: "Framer Motion", level: 85, projects: 8, icon: "🎭" },
        { name: "JavaScript", level: 75, projects: 5, icon: "🎲" },
      ],
    },
    backend: {
      title: "Backend",
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, projects: 16, icon: "🟢" },
        { name: "Python", level: 88, projects: 14, icon: "🐍" },
        { name: "PostgreSQL", level: 85, projects: 12, icon: "🐘" },
        { name: "MongoDB", level: 82, projects: 10, icon: "🍃" },
        { name: "MySQL", level: 78, projects: 6, icon: "📊" },
        { name: "FireBase", level: 80, projects: 8, icon: "🐳" },
        { name: "Express.js", level: 80, projects: 8, icon: "🐍" },
      ],
    },
    aiml: {
      title: "AI/ML",
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "TensorFlow", level: 82, projects: 7, icon: "🧠" },
        { name: "PyTorch", level: 78, projects: 5, icon: "🔥" },
        { name: "OpenAI API", level: 85, projects: 9, icon: "🤖" },
        { name: "Solidity", level: 80, projects: 6, icon: "📈" },
        { name: "NLP", level: 77, projects: 5, icon: "💬" },
      ],
    },
    tools: {
      title: "Tools",
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "Git", level: 92, projects: 25, icon: "🌿" },
        { name: "VS Code", level: 95, projects: 30, icon: "💻" },
        { name: "AWS", level: 78, projects: 8, icon: "☁️" },
        { name: "Firebase", level: 82, projects: 10, icon: "🔥" },
      ],
    },
  }

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
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My arsenal of technologies and tools, constantly evolving with the latest innovations.
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Orbs */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
            {skillCategories[selectedCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <motion.div
                  className={`relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${skillCategories[selectedCategory as keyof typeof skillCategories].color} p-1 cursor-pointer`}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 180,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2 + index * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                    scale: { duration: 0.3 },
                    rotateY: { duration: 0.6 },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Face */}
                  <motion.div
                    className="w-full h-full rounded-full bg-black/80 flex flex-col items-center justify-center backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <div className="text-white text-sm font-semibold text-center px-2">{skill.name}</div>
                  </motion.div>

                  {/* Back Face */}
                  <motion.div
                    className="absolute inset-0 w-full h-full rounded-full bg-black/90 flex flex-col items-center justify-center backface-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <div className="text-white text-sm font-semibold text-center px-2">{skill.name}</div>
                  </motion.div>

                  {/* Progress Ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(34,211,238,0.8)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: skill.level / 100 }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      style={{
                        strokeDasharray: "283",
                        strokeDashoffset: 283 - (283 * skill.level) / 100,
                      }}
                    />
                  </svg>
                </motion.div>

                {/* Skill Details on Hover */}
                {/* <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-3 text-center">
                    <div className="text-cyan-400 font-semibold">{skill.name}</div>
                    <div className="text-gray-300 text-sm">Proficiency: {skill.level}%</div>
                    <div className="text-gray-300 text-sm">Projects: {skill.projects}</div>
                  </div>
                </motion.div> */}
              </motion.div>
            ))}
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
