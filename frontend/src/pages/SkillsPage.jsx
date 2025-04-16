import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
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
  "Problem Solving": <RiCodeSSlashFill className="text-yellow-400" />,
  "Data Structures": <MdOutlineDataObject className="text-green-400" />,
  Algorithms: <TbMathFunction className="text-pink-400" />,
  "OOP Concepts": <VscSymbolClass className="text-teal-400" />,
  "Competitive Coding": <RiCodeSSlashFill className="text-orange-300" />,
  Python: <FaPython className="text-yellow-600" />,
  "HTML/CSS": <SiHtml5 className="text-orange-500" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  React: <FaReact className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-gray-400" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  "REST APIs": <FaGitAlt className="text-pink-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
  "Framer Motion": <SiFramer className="text-fuchsia-400" />,
  Pandas: <SiPandas className="text-white" />,
  NumPy: <SiNumpy className="text-blue-300" />,
  Matplotlib: <span className="text-lg">📊</span>,
  Seaborn: <span className="text-lg">🌊</span>,
  "Machine Learning": <span className="text-lg">🧠</span>,
  "Scikit-learn": <SiScikitlearn className="text-yellow-400" />,
  "Data Visualization": <span className="text-lg">📈</span>,
  Statistics: <span className="text-lg">📐</span>,
};

const skillData = {
  "DSA & Programming": [
    { name: "Java", level: 80 },
    { name: "C++", level: 65 },
    { name: "Problem Solving", level: 75 },
    { name: "Data Structures", level: 70 },
    { name: "Algorithms", level: 72 },
    { name: "OOP Concepts", level: 78 },
    { name: "Competitive Coding", level: 60 },
    { name: "Python", level: 50 },
  ],
  "Web Development": [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "Express", level: 68 },
    { name: "MongoDB", level: 65 },
    { name: "REST APIs", level: 75 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Framer Motion", level: 70 },
  ],
  "Data Science": [
    { name: "Python", level: 85 },
    { name: "Pandas", level: 70 },
    { name: "NumPy", level: 75 },
    { name: "Matplotlib", level: 60 },
    { name: "Seaborn", level: 55 },
    { name: "Machine Learning", level: 60 },
    { name: "Scikit-learn", level: 65 },
    { name: "Data Visualization", level: 70 },
    { name: "Statistics", level: 58 },
  ],
};

const SkillsPage = () => {
  const [activeGroup, setActiveGroup] = useState("DSA & Programming");
  // const { scrollYProgress } = useScroll();

  const skillGroups = Object.keys(skillData);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 relative">
      {/* Scroll Progress Bar */}
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      /> */}

      <div className="flex flex-col md:flex-row">
        {/* Skills Content */}
        <div className="flex-1 pr-8">
          <h1 className="text-4xl font-bold mb-6 text-purple-300">My Skills</h1>
          <h2 className="text-2xl font-semibold mb-4">{activeGroup}</h2>

          <div className="space-y-6">
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
                    <span className="text-xl">{iconMap[skill.name] || "🛠️"}</span>
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

        {/* Skill Groups Navbar */}
        <div className="md:w-64 mt-10 md:mt-0 md:border-l md:border-gray-700 pl-8">
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
