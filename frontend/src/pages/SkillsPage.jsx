import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt } from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPandas,
  SiNumpy,
  SiFramer,
  SiScikitlearn,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbMathFunction } from "react-icons/tb";
import { MdOutlineDataObject } from "react-icons/md";
import { VscSymbolClass } from "react-icons/vsc";
import { RiCodeSSlashFill } from "react-icons/ri";

const iconMap = {
  Java: <FaJava className="text-red-500" />,
  "C++": <SiCplusplus className="text-blue-500" />,
  Python: <FaPython className="text-yellow-600" />,
  C: <span className="text-lg text-blue-400">C</span>,
  "Data Structures": <MdOutlineDataObject className="text-green-400" />,
  Algorithms: <TbMathFunction className="text-pink-400" />,
  "Problem Solving": <RiCodeSSlashFill className="text-yellow-400" />,
  "OOP Concepts": <VscSymbolClass className="text-teal-400" />,
  "Competitive Coding": <RiCodeSSlashFill className="text-orange-300" />,
  "HTML/CSS": <SiHtml5 className="text-orange-500" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  React: <FaReact className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-gray-400" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  "REST APIs": <FaGitAlt className="text-pink-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
  "Framer Motion": <SiFramer className="text-fuchsia-400" />,
  "Next.js": <FaReact className="text-white" />, // substitute with Next.js logo if needed
  Typescript: <span className="text-blue-400 text-xl">TS</span>,
  Git: <FaGitAlt className="text-orange-400" />,
  Sanity: <span className="text-pink-400 text-xl">🧠</span>,
  Firebase: <span className="text-yellow-400 text-xl">🔥</span>,
  "Gemini API": <span className="text-cyan-400 text-xl">✨</span>,
  "Machine Learning": <span className="text-lg">🧠</span>,
  "PowerBI": <span className="text-lg">📊</span>,
  SQL: <span className="text-lg">🗃️</span>,
  Statistics: <span className="text-lg">📐</span>,
};


const skillData = {
  "DSA & Programming": [
    { name: "Java", level: 80 },
    { name: "C++", level: 65 },
    { name: "Python", level: 50 },
    { name: "C", level: 65 },
    { name: "Data Structures", level: 70 },
    { name: "Algorithms", level: 72 },
    { name: "Problem Solving", level: 75 },
    { name: "OOP Concepts", level: 78 },
    { name: "Competitive Coding", level: 60 },
  ],
  "Web Development": [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 70 },
    { name: "Node.js", level: 70 },
    { name: "Express", level: 68 },
    { name: "MongoDB", level: 70 },
    { name: "REST APIs", level: 75 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Framer Motion", level: 70 },
    { name: "Next.js", level: 60 },
    { name: "Typescript", level: 50 },
    { name: "Git", level: 70 },
    { name: "Sanity", level: 60 },
    { name: "Firebase", level: 60 },
    { name: "Express", level: 60 },
    { name: "Framer Motion", level: 60 },
    { name: "Gemini API", level: 60 },
  ],
  "Data Analytics": [
    { name: "Python", level: 85 },
    { name: "Machine Learning", level: 50 },
    { name: "PowerBI", level: 60 },
    { name: "SQL", level: 60 },
    { name: "Statistics", level: 58 },
  ],
};

const SkillsPage = () => {
  const [activeGroup, setActiveGroup] = useState("DSA & Programming");
  const skillGroups = Object.keys(skillData);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 relative">
      <div className="flex flex-col md:flex-row h-[75vh]">
        {/* Skills Content */}
        <div className="flex-1 pr-8 overflow-y-auto pb-20 no-scrollbar">
          <h1 className="text-4xl font-bold mb-6 text-purple-300">My Skills</h1>

          {/* Render all skill groups on small screens */}
          <div className="space-y-10 md:hidden">
            {skillGroups.map((group) => (
              <div key={group}>
                <h2 className="text-2xl font-semibold mb-4">{group}</h2>
                <div className="space-y-6">
                  {skillData[group].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center gap-2 mb-1">
                        <div className="flex items-center gap-2 text-lg">
                          <span className="text-xl">
                            {iconMap[skill.name] || "🛠️"}
                          </span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-sm text-purple-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-700 rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2 }}
                          className="h-full bg-purple-500 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Only show selected category on md+ */}
          <div className="hidden md:block space-y-6">
            <h2 className="text-2xl font-semibold mb-4">{activeGroup}</h2>
            {skillData[activeGroup].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center gap-2 mb-1">
                  <div className="flex items-center gap-2 text-lg">
                    <span className="text-xl">
                      {iconMap[skill.name] || "🛠️"}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-sm text-purple-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-purple-500 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar shown only on md+ */}
        <div className="hidden md:block md:w-64 mt-10 md:mt-0 md:border-l md:border-gray-700 pl-8 flex-shrink-0">
          <h3 className="text-xl font-semibold mb-4 text-purple-300">
            Skill Categories
          </h3>
          <div className="flex flex-col space-y-3">
            {skillGroups.map((group) => (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className={`text-left px-4 py-2 rounded-xl transition font-medium ${
                  activeGroup === group
                    ? "bg-purple-600 text-white"
                    : "bg-gray-700 hover:bg-purple-500 hover:text-white"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
