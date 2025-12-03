"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Play, X } from "lucide-react"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Universal Clipboard",
      description: "Created a cross-platform clipboard sync tool that works on Android, Windows, and Linux using Python and Firebase.",
      image: "https://i.ibb.co/RRWRHDK/Screenshot-2025-12-04-at-2-49-11-AM.png",
      tech: ["Python" , "Firebase", "Realtime", "Database"],
      github: "https://github.com/AnkurDhattarwal/universal-clipboard",
      demo: "#",
      details:
        ["Created a cross-platform clipboard sync tool that works on Android, Windows, and Linux using Python and Firebase. It syncs clipboard content over the internet, completely wirelessly, without needing Bluetooth. Built a smart change-detection system to avoid unnecessary uploads and keep syncing smooth and fast. The tool can be placed in the root of any device and automatically starts running in the background when the device is powered on."],
    },
    {
      id: 2,
      title: "Pett App",
      description: "Built a full-stack pet management app using JWT authentication and MongoDB",
      image: "https://i.ibb.co/QvxW6Jhj/Screenshot-2025-12-04-at-2-49-48-AM.png",
      tech: ["React.js", "Express.js", "Node.js", "MongoDB", "JWT", "Bcrypt", "Mongoose", "Multer"],
      github: "https://github.com/AnkurDhattarwal/pettapp",
      demo: "https://pet-app-d6d34.web.app/home",
      details:
        ["Built a full-stack pet management app using JWT authentication and MongoDB. Added an easy feature for pet owners to upload and edit their pet profiles, which handled 500+ image uploads every week and increased platform activity by 40%. Also connected the app to Google Search Console to improve SEO and online visibility."]
    },
    {
      id: 3,
      title: "Chit-Chat",
      description: "Built a real-time chat application where users can send and receive messages instantly.",
      image: "https://i.ibb.co/8LCM4Bh1/Screenshot-2025-12-04-at-2-50-36-AM.png",
      tech: ["React.js", "Node.js", "Express.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/AnkurDhattarwal/Chit-Chat",
      demo: "#",
      details:
        ["Built a real-time chat application where users can send and receive messages instantly. Added features like user login, message history, and typing indicators to make conversations smooth. Designed the app to work across devices and keep chats synced securely."]
    }
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
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions and cutting-edge technologies. Each project represents a journey of
            learning and pushing boundaries.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="relative backdrop-blur-md bg-black/20 border border-cyan-500/30 rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-cyan-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play size={48} className="text-white" />
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700/50 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                  </div>
                </div>

                {/* Hologram Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-md bg-black/40 border border-cyan-500/30 rounded-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {(() => {
                const project = projects.find((p) => p.id === selectedProject)
                if (!project) return null

                return (
                  <div>
                    <h3 className="text-3xl font-orbitron font-bold text-cyan-400 mb-4">{project.title}</h3>

                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.details}</p>

                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-white mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                      {/* <motion.a
                        href={project.demo}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a> */}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
