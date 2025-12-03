// "use client"

// import { motion } from "framer-motion"
// import { useState, useEffect } from "react"
// import { ChevronDown, Download, Mail } from "lucide-react"

// export function HeroSection() {
//   const [text, setText] = useState("")
//   const fullText = "Hi, I'm  Ankur – Developer. Creator. Competitor."

//   useEffect(() => {
//     let i = 0
//     const timer = setInterval(() => {
//       setText(fullText.slice(0, i))
//       i++
//       if (i > fullText.length) {
//         clearInterval(timer)
//       }
//     }, 100)

//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* 3D Avatar Container */}
//       <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 hidden lg:block">
//         <motion.div
//           className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1"
//           animate={{
//             rotateY: [0, 360],
//             scale: [1, 1.05, 1],
//           }}
//           transition={{
//             rotateY: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
//             scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
//           }}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
//             <motion.div
//               className="text-6xl"
//               animate={{ rotateY: [0, -360] }}
//               transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//             >
//               👨‍💻
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Main Content */}
//       <div className="text-center z-10 max-w-4xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mb-8"
//         >
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6">
//             <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               {text}
//             </span>
//             <motion.span
//               animate={{ opacity: [1, 0] }}
//               transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
//               className="text-cyan-400"
//             >
//               |
//             </motion.span>
//           </h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2, duration: 1 }}
//             className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
//           >
//             Crafting digital experiences that push the boundaries of what's possible. Welcome to the future of web
//             development.
//           </motion.p>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 3, duration: 1 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           {/* <motion.button
//             className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
//               initial={{ x: "100%" }}
//               whileHover={{ x: "0%" }}
//               transition={{ duration: 0.3 }}
//             />
//             <span className="relative z-10 flex items-center gap-2">
//               <Mail size={20} />
//               Get In Touch
//             </span>
//             <motion.div
//               className="absolute inset-0 opacity-0 group-hover:opacity-100"
//               animate={{
//                 background: [
//                   "radial-gradient(circle at 0% 0%, rgba(34,211,238,0.3) 0%, transparent 50%)",
//                   "radial-gradient(circle at 100% 100%, rgba(34,211,238,0.3) 0%, transparent 50%)",
//                   "radial-gradient(circle at 0% 0%, rgba(34,211,238,0.3) 0%, transparent 50%)",
//                 ],
//               }}
//               transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//             />
//           </motion.button> */}

//           {/* <motion.button
//             className="group relative px-8 py-4 border-2 border-cyan-500 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="flex items-center gap-2">
//               <Download size={20} />
//               Download Resume
//             </span>
//           </motion.button> */}
//           <motion.a
//                 href="https://drive.google.com/file/d/13IsT3OgwOm0BEhes-DidBQvShdMnNdxT/view?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-colors"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 📄 Download Resume
//               </motion.a>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 4, duration: 1 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//             className="text-cyan-400"
//           >
//             <ChevronDown size={32} />
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -100, 0],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Number.POSITIVE_INFINITY,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Hi, I'm Ankur – Developer. Creator. Competitor."

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(timer)
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 text-center">
      
      {/* Profile Image */}
      <motion.img
        src="https://media.licdn.com/dms/image/v2/D5635AQHl4gHPghu6zQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1729436592013?e=1765400400&v=beta&t=LT0KjRPvtMkNEen2h3lSPq9Mt4muwtOZ0m-_m6btWx8" // ← replace with your image path, e.g. /me.png or an external URL
        alt="Ankur Dhattarwal"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-cyan-400 shadow-lg mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated Text */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {text}
        </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          className="text-cyan-400"
        >
          |
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-merriweather font-semibold"
      >
        Engineer by logic, creator by passion — building seamless digital worlds
      </motion.p>

      {/* CTA: Resume */}
      <motion.a
        href="https://drive.google.com/file/d/1FtPlTHUbvVUXbdiEGaE-v9ZYQlbN9tbb/view"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📄 Download Resume
      </motion.a>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-cyan-400"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      {/* Floating elements (optional sparkle background) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
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
  )
}
