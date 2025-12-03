// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
// import { Star, Trophy, Award, Zap } from "lucide-react"

// export function AchievementsSection() {
//   const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null)

//   const achievements = [
//     {
//       id: 1,
//       title: "First Open Source Contribution",
//       date: "2023",
//       description: "Successfuly contributd to the Hacktoberfest by mading more than 4 successful PRs",
//       type: "milestone",
//       icon: "🌟",
//       position: { x: 20, y: 30 },
//       size: "small",
//     },
//     {
//       id: 2,
//       title: "Hackathon",
//       date: "2023",
//       description: "Selected in the Hack The Mountain Hackathon as a finalist",
//       type: "award",
//       icon: "🏆",
//       position: { x: 60, y: 20 },
//       size: "medium",
//     },
//     {
//       id: 4,
//       title: "Google Girls hackathon",
//       date: "2025",
//       description: "Semi Finalist in Google Girls Hackathon 2025, Presented innovative AI solution",
//       type: "recognition",
//       icon: "🎤",
//       position: { x: 30, y: 70 },
//       size: "large",
//     },
//     {
//       id: 3,
//       title: "GirlScript Summer of Code 2023",
//       date: "2023",
//       description: "Selected to contribute to the open-source initiative GirlScript Summer of Code 2023",
//       type: "milestone",
//       icon: "⭐",
//       position: { x: 80, y: 60 },
//       size: "medium",
//     },
//     {
//       id: 5,
//       title: "Competitive Programming Specialist",
//       date: "2025",
//       description: "Achieved Specialist rating on Codeforces",
//       type: "achievement",
//       icon: "🧠",
//       position: { x: 70, y: 40 },
//       size: "medium",
//     },
//     {
//       id: 6,
//       title: "Full-Stack Certification",
//       date: "2025",
//       description: "Full Stack Developer Intern at Innomatics Research Labs",
//       type: "education",
//       icon: "📜",
//       position: { x: 40, y: 50 },
//       size: "small",
//     },
//   ]

//   const getAchievementColor = (type: string) => {
//     switch (type) {
//       case "milestone":
//         return "from-cyan-400 to-blue-500"
//       case "award":
//         return "from-yellow-400 to-orange-500"
//       case "recognition":
//         return "from-purple-400 to-pink-500"
//       case "achievement":
//         return "from-green-400 to-emerald-500"
//       case "education":
//         return "from-indigo-400 to-purple-500"
//       default:
//         return "from-gray-400 to-gray-600"
//     }
//   }

//   const getSizeClass = (size: string) => {
//     switch (size) {
//       case "small":
//         return "w-16 h-16"
//       case "medium":
//         return "w-20 h-20"
//       case "large":
//         return "w-24 h-24"
//       default:
//         return "w-20 h-20"
//     }
//   }

//   return (
//     <div className="min-h-screen py-20 px-4 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
//             <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
//               Achievements Galaxy
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Navigate through my journey of milestones, awards, and accomplishments in the vast universe of technology.
//           </p>
//         </motion.div>

//         {/* Galaxy Container */}
//         <div className="relative h-[600px] rounded-3xl bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50 border border-purple-500/30 overflow-hidden">
//           {/* Background Stars */}
//           <div className="absolute inset-0">
//             {[...Array(100)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-1 h-1 bg-white rounded-full"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                 }}
//                 animate={{
//                   opacity: [0.3, 1, 0.3],
//                   scale: [1, 1.5, 1],
//                 }}
//                 transition={{
//                   duration: 2 + Math.random() * 3,
//                   repeat: Number.POSITIVE_INFINITY,
//                   delay: Math.random() * 2,
//                 }}
//               />
//             ))}
//           </div>

//           {/* Achievement Planets */}
//           {achievements.map((achievement, index) => (
//             <motion.div
//               key={achievement.id}
//               className="absolute cursor-pointer group"
//               style={{
//                 left: `${achievement.position.x}%`,
//                 top: `${achievement.position.y}%`,
//               }}
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               onClick={() => setSelectedPlanet(selectedPlanet === achievement.id ? null : achievement.id)}
//             >
//               <motion.div
//                 className={`relative ${getSizeClass(achievement.size)} rounded-full bg-gradient-to-br ${getAchievementColor(achievement.type)} p-1`}
//                 whileHover={{ scale: 1.2 }}
//                 animate={{
//                   rotate: [0, 360],
//                 }}
//                 transition={{
//                   rotate: {
//                     duration: 20 + index * 5,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "linear",
//                   },
//                   scale: { duration: 0.3 },
//                 }}
//               >
//                 <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center">
//                   <span className="text-2xl">{achievement.icon}</span>
//                 </div>

//                 {/* Orbital Ring */}
//                 <motion.div
//                   className="absolute inset-0 rounded-full border-2 border-white/20"
//                   animate={{
//                     scale: [1, 1.3, 1],
//                     opacity: [0.5, 1, 0.5],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "easeInOut",
//                   }}
//                 />

//                 {/* Tooltip */}
//                 <motion.div
//                   className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                   initial={{ y: 10 }}
//                   whileHover={{ y: 0 }}
//                 >
//                   <div className="bg-black/90 backdrop-blur-md border border-purple-500/30 rounded-lg p-3 text-center whitespace-nowrap">
//                     <div className="text-white font-semibold text-sm">{achievement.title}</div>
//                     <div className="text-purple-400 text-xs">{achievement.date}</div>
//                   </div>
//                 </motion.div>
//               </motion.div>

//               {/* Connection Lines */}
//               {index > 0 && (
//                 <svg
//                   className="absolute inset-0 pointer-events-none"
//                   style={{
//                     width: "100vw",
//                     height: "100vh",
//                     left: "-50vw",
//                     top: "-50vh",
//                   }}
//                 >
//                   <motion.line
//                     x1={`${achievements[index - 1].position.x}%`}
//                     y1={`${achievements[index - 1].position.y + 50}%`}
//                     x2={`${achievement.position.x}%`}
//                     y2={`${achievement.position.y + 50}%`}
//                     stroke="rgba(139, 92, 246, 0.3)"
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     initial={{ pathLength: 0 }}
//                     animate={{ pathLength: 1 }}
//                     transition={{ duration: 1, delay: index * 0.3 }}
//                   />
//                 </svg>
//               )}
//             </motion.div>
//           ))}

//           {/* Central Timeline */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <motion.div
//               className="w-2 h-2 bg-white rounded-full"
//               animate={{
//                 scale: [1, 2, 1],
//                 opacity: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Number.POSITIVE_INFINITY,
//                 ease: "easeInOut",
//               }}
//             />
//           </div>
//         </div>

//         {/* Achievement Details */}
//         {selectedPlanet && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="mt-8"
//           >
//             {(() => {
//               const achievement = achievements.find((a) => a.id === selectedPlanet)
//               if (!achievement) return null

//               return (
//                 <div
//                   className={`backdrop-blur-md bg-gradient-to-r ${getAchievementColor(achievement.type)}/20 border border-white/20 rounded-2xl p-8`}
//                 >
//                   <div className="flex items-center gap-4 mb-4">
//                     <span className="text-4xl">{achievement.icon}</span>
//                     <div>
//                       <h3 className="text-2xl font-bold text-white">{achievement.title}</h3>
//                       <p className="text-purple-400 font-semibold">{achievement.date}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-300 text-lg leading-relaxed">{achievement.description}</p>
//                 </div>
//               )
//             })()}
//           </motion.div>
//         )}

//         {/* Achievement Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
//         >
//           {[
//             { label: "Total Achievements", value: "25+", icon: Trophy },
//             { label: "Years Active", value: "4+", icon: Star },
//             { label: "Projects Completed", value: "50+", icon: Zap },
//             { label: "Recognition Awards", value: "8", icon: Award },
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               className="text-center p-6 backdrop-blur-md bg-black/20 border border-purple-500/30 rounded-xl"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//             >
//               <stat.icon size={32} className="text-purple-400 mx-auto mb-3" />
//               <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
//               <div className="text-gray-300 text-sm">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Star, Trophy, Award, Zap } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    
    {
      id: 8,
      title: "Google Student Launchpad Upskilling Program",
      date: "2023",
      description: "Successfully completed the program and earned a certificate.",
      type: "education",
      icon: "📜",
    },
    {
      id: 7,
      title: "Flipkart Grid 6.0",
      date: "2023",
      description: "Advanced to the top 200 teams from thousands of participants.",
      type: "milestone",
      icon: "⚡",
    },
    {
      id: 6,
      title: "Senior Web Development Member, Axios",
      date: "2025",
      description: "Played a key role in developing and maintaining 5+ high-impact club projects, and mentored over 100 junior members by teaching web technologies, reviewing their work, and helping them grow into confident contributors.",
      type: "education",
      icon: "📜",
    },
    {
      id: 11,
      title: "Equinox Volunteer",
      date: "Jan 2023 – Mar 2023",
      description: "Managed activities for 1,000+ participants and optimized event operations, boosting attendee satisfaction by 30%.",
      type: "milestone",
      icon: "🤝",
    },
    {
      id: 5,
      title: "Competitive Programming Expert",
      date: "2025",
      description: "Achieved Expert rating on Codeforces",
      type: "achievement",
      icon: "🧠",
    },
    {
      id: 2,
      title: "Hackathon",
      date: "2023",
      description: "Selected in the Hack The Mountain Hackathon as a finalist",
      type: "award",
      icon: "🏆",
    },
    {
      id: 1,
      title: "First Open Source Contribution",
      date: "2023",
      description: "Successfully contributed to Hacktoberfest by making more than 4 successful PRs",
      type: "milestone",
      icon: "🌟",
    },
];

  const getAchievementColor = (type: string) => {
    switch (type) {
      case "milestone":
        return "from-cyan-400 to-blue-500"
      case "award":
        return "from-yellow-400 to-orange-500"
      case "recognition":
        return "from-purple-400 to-pink-500"
      case "achievement":
        return "from-green-400 to-emerald-500"
      case "education":
        return "from-indigo-400 to-purple-500"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-indigo-900/20 via-purple-900/20 to-pink-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey of milestones, awards, and accomplishments in technology.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${getAchievementColor(achievement.type)}/20 border border-white/20`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{achievement.title}</h3>
                  <p className="text-purple-400 font-semibold">{achievement.date}</p>
                </div>
              </div>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Achievements", value: "25+", icon: Trophy },
            { label: "Years Active", value: "4+", icon: Star },
            { label: "Projects Completed", value: "10+", icon: Zap },
            { label: "Recognition Awards", value: "8", icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 backdrop-blur-md bg-black/20 border border-purple-500/30 rounded-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <stat.icon size={32} className="text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
