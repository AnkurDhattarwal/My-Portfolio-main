"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Play, X } from "lucide-react"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "CoEdit",
      description: "Developed a multi-user coding environment enabling developers to share code and resources concurrently, improving project alignment and communication.",
      image: "https://i.ibb.co/QFGnC4Hk/Screenshot-2025-10-13-at-12-43-59-PM.png",
      tech: ["React.js", "TypeScript", "Node.js", "Socket.io", "Express.js"],
      github: "https://github.com/Tanishka534/COEDIT",
      demo: "https://demo.com",
      details:
        ["Implemented functionality for creating and sharing unique room IDs, facilitating easy access and secure collaboration across coding sessions. ", "Developed a collaborative drawing board with real-time user interaction, allowing seamless transitions between drawing and coding modes while supporting simultaneous contributions from multiple users."],
    },
    {
      id: 2,
      title: "ClimaMind",
      description: "Built captivating visualizations, integrated advanced features for",
      image: "https://i.ibb.co/KpT3DTw2/Screenshot-2025-10-13-at-12-46-19-PM.png",
      tech: ["Python", "ML", "AI", "APIs", "Javascript", "CSS", "HTML"],
      github: "https://github.com/Tanishka534/ClimaMind_Environmental-Data-Monitoring",
      demo: "https://demo.com",
      details:
        ["Built captivating visualizations, integrated advanced features for identifying flowers, assessing plant health, and providing valuable insights on soil types through Satellite imaging, empowering users to make informed decisions and take action for a sustainable future.", "Leveraged AI and ML cutting-edge technologies to develop ClimaMind, a dynamic website presenting an interactive map showcasing crucial environmental data, air quality, water pollution, deforestation rates, climate patterns, weather conditions."]
    },
    {
      id: 3,
      title: "DesTecho",
      description: "Managed the upload and display of UI/UX designs on the marketplace, offering a diverse range of options for users to explore and purchase.",
      image: "https://i.ibb.co/hxG54QXV/Screenshot-2025-10-13-at-12-45-26-PM.png",
      tech: ["React.js", "Node.js", "Express.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Tanishka534/DESTECHO",
      demo: "https://demo.com",
      details:
        ["Implemented a subscription model granting access to premium designs, allowing users to stay updated with the latest trends.", "Enhanced the user interface for design submissions and free design workshops for everyone to dive into the world of designs."]
    },
    {
      id: 4,
      title: "ClubManagementSystem",
      description: "The ClubManagementSystem is a web-based application designed to showcase and manage all clubs at IIIT Lucknow. This system provides a centralized platform for students, faculty, and administrators to view, join, and manage various clubs within the institution.",
      image: "https://i.ibb.co/spXFFZ1F/Screenshot-2025-10-13-at-12-46-59-PM.png",
      tech: ["SpringBoot", "Java", "MySQL", "React.js"],
      github: "https://github.com/Tanishka534/CMS",
      demo: "https://demo.com",
      details:
        "The ClubManagementSystem is a web-based application designed to showcase and manage all clubs at IIIT Lucknow. This system provides a centralized platform for students, faculty, and administrators to view, join, and manage various clubs within the institution.",
    },
  
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
