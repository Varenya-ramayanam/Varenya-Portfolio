// About.jsx
import { motion } from "framer-motion";
import { Sparkles, Heart, Code2 } from "lucide-react";


export default function About() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col justify-between">
      <main className="flex flex-col items-center justify-center mt-16 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-blue-400 mb-6 text-center"
        >
          Hello, I'm Varenya 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 text-center max-w-3xl"
        >
          I’m a passionate full-stack developer who loves building interactive web applications. With a knack for creativity and problem-solving, I enjoy blending design with logic to craft delightful user experiences.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <Sparkles className="text-yellow-400 mb-3" size={32} />
            <h2 className="text-xl font-semibold text-blue-300 mb-2">Creative Coder</h2>
            <p className="text-gray-400 text-sm">
              I love building things from scratch, especially when they combine design and development.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <Code2 className="text-green-400 mb-3" size={32} />
            <h2 className="text-xl font-semibold text-blue-300 mb-2">Tech Stack</h2>
            <p className="text-gray-400 text-sm">
              MERN Stack, Tailwind, Framer Motion, MongoDB, Firebase, and a sprinkle of Three.js magic.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <Heart className="text-pink-400 mb-3" size={32} />
            <h2 className="text-xl font-semibold text-blue-300 mb-2">Hobbies</h2>
            <p className="text-gray-400 text-sm">
              I enjoy singing, working on cool side projects, and being part of coding and music clubs 🎶
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
