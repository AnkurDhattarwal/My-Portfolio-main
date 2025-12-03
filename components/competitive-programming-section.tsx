"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { TrendingUp, Award, Code } from "lucide-react"

export function CompetitiveProgrammingSection() {
  const [terminalText, setTerminalText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)

  const terminalLines = [
    "> Initializing competitive programming stats...",
    "> Connecting to platforms...",
    "> Loading achievements...",
    "> Data retrieved successfully!",
    "> Welcome to the hacker terminal.",
  ]

  const platforms = [
    {
      name: "Codeforces",
      handle: "tanishkas534",
      maxRating: 1579,
      currentRating: 1579,
      problemsSolved: 144,
      color: "from-blue-400 to-blue-600",
      icon: "🔵",
    },
    {
      name: "CodeChef",
      handle: "tanishka5singh",
      maxRating: 1631,
      currentRating: 1631,
      problemsSolved: 50,
      color: "from-yellow-400 to-yellow-600",
      icon: "🟡",
    },
    {
      name: "LeetCode",
      handle: "TanishkaS534",
      maxRating: 0,
      currentRating: 0,
      problemsSolved: 125,
      color: "from-orange-400 to-orange-600",
      icon: "🟠",
    },
  ]

  const achievements = [
    { title: "Global Rank #197", platform: "Codeforces Round 1003", date: "2025" },
    { title: "Global Rank #857", platform: "Codechef Starter 146", date: "2024" },
    { title: "Specialist", platform: "Codeforces", date: "2025" },
    { title: "3⭐", platform: "Codechef", date: "2024" },
    { title: "Knight", platform: "LeetCode", date: "2024" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < terminalLines.length) {
        setTerminalText((prev) => prev + terminalLines[currentLine] + "\n")
        setCurrentLine((prev) => prev + 1)
      }
    }, 800)

    return () => clearInterval(timer)
  }, [currentLine])

  return (
    <div className="min-h-screen py-20 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Competitive Programming
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where algorithms meet adrenaline. My journey through the world of competitive coding.
          </p>
        </motion.div>

        {/* Terminal Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="bg-black border border-green-500/50 rounded-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-300 text-sm ml-4">competitive_stats.sh</span>
            </div>
            <div className="p-6 font-mono text-green-400 text-sm">
              <pre className="whitespace-pre-wrap">
                {terminalText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                >
                  █
                </motion.span>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${platform.color} backdrop-blur-md border border-white/20 overflow-hidden`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Matrix Rain Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-green-400 text-xs font-mono"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, 100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                      }}
                    >
                      {Math.random() > 0.5 ? "1" : "0"}
                    </motion.div>
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                    <span className="text-2xl">{platform.icon}</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-white/80 text-sm">Handle</div>
                      <div className="text-white font-mono">{platform.handle}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-white/80 text-sm">Max Rating</div>
                        <motion.div
                          className="text-white font-bold text-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          {platform.maxRating}
                        </motion.div>
                      </div>

                      <div>
                        <div className="text-white/80 text-sm">Current</div>
                        <motion.div
                          className="text-white font-bold text-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                        >
                          {platform.currentRating}
                        </motion.div>
                      </div>
                    </div>

                    <div>
                      <div className="text-white/80 text-sm">Problems Solved</div>
                      <motion.div
                        className="text-white font-bold text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.9 }}
                      >
                        {platform.problemsSolved}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Glitch Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Charts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Rating Progress Chart */}
          <div className="backdrop-blur-md bg-black/20 border border-green-500/30 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <TrendingUp size={24} />
              Rating Progress
            </h3>
            <div className="space-y-4">
              {platforms.slice(0, 3).map((platform, index) => (
                <div key={platform.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{platform.name}</span>
                    <span className="text-green-400 font-mono">{platform.currentRating}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${platform.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(platform.currentRating / 2500) * 100}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Problems Solved Chart */}
          <div className="backdrop-blur-md bg-black/20 border border-green-500/30 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <Code size={24} />
              Problems Solved
            </h3>
            <div className="relative h-48">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  className={`absolute bottom-0 bg-gradient-to-t ${platform.color} rounded-t-lg`}
                  style={{
                    left: `${index * 20}%`,
                    width: "15%",
                  }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(platform.problemsSolved / 600) * 100}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
                    {platform.problemsSolved}
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs rotate-45 origin-bottom-left">
                    {platform.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-md bg-black/20 border border-green-500/30 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-green-400 mb-8 flex items-center gap-2">
            <Award size={32} />
            Notable Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30"
              >
                <div className="text-2xl">🏆</div>
                <div>
                  <h4 className="text-white font-bold">{achievement.title}</h4>
                  <p className="text-green-400 text-sm">{achievement.platform}</p>
                  <p className="text-gray-400 text-xs">{achievement.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
