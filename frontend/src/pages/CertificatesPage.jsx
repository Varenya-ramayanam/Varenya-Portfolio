import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiGoogle } from "react-icons/si";
import { GiAchievement } from "react-icons/gi";

// Icon mapping
const iconMap = {
  Google: <SiGoogle className="text-green-400" />,
  Internship: <GiAchievement className="text-yellow-400" />,
};

// Certificate data
const certificateData = {
  "DSA & Programming": [
    {
      title: "Problem solving through programming in C",
      platform: "NPTEL",
      date: "Jan 2023 - April 2023",
      link: "https://drive.google.com/file/d/1LXhF9XMG6wt9pEhpweSkhz3NVkbwXSwQ/view?usp=sharing",
    },
    {
      title: "Programming, Data Structures And Algorithms Using Python",
      platform: "NPTEL",
      date: "Jan 2024 - March 2024",
      link: "https://drive.google.com/file/d/1FwPQBdkVZ8LSrhpNLHOExsRZQuC9KBNb/view?usp=sharing",
    },
    {
      title: "Data Structures and Algorithms using Java/C++",
      platform: "GeeksforGeeks",
      date: "August 2024 - October 2024",
      link: "https://drive.google.com/file/d/1miwJYcIffZkKkaodgkMhGw6yHnyevKgg/view?usp=sharing",
    },
  ],
  "Web Development": [
    {
      title: "Full Stack Internship",
      platform: "CodeClause",
      date: "July 2024",
      link: "#",
    },
  ],
  "Data Science & AI": [
    {
      title: "Cloud Computing - Elite + Silver",
      platform: "NPTEL",
      date: "Oct 2024",
      link: "https://drive.google.com/file/d/1ey7tePCEu22Qs6a8tEKbb-z4p5txVGr7/view?usp=sharing",
    },
    {
      title: "AI using Python",
      platform: "Coincent",
      date: "May 2024",
      link: "#",
    },
    {
      title: "Cybersecurity Internship",
      platform: "AICTE",
      date: "Jun 2024",
      link: "#",
    },
  ],
};

const CertificatesPage = () => {
  const [activeCategory, setActiveCategory] = useState("DSA & Programming");
  const categories = Object.keys(certificateData);

  return (
    <div className="h-screen bg-gray-900 text-white px-6 py-10 overflow-hidden">
      <div className="flex flex-col md:flex-row h-[75vh]">
        {/* Sidebar for category selection */}
        <div className="hidden md:block md:w-64 border-r border-gray-700 pr-8 flex-shrink-0">
          <h3 className="text-xl font-semibold mb-4 text-purple-300">
            Categories
          </h3>
          <div className="flex flex-col space-y-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left px-4 py-2 rounded-xl transition font-medium ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white"
                    : "bg-gray-700 hover:bg-purple-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile view: show all categories with content */}
        <div className="space-y-10 md:hidden overflow-y-auto no-scrollbar pr-2">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="space-y-6 pb-10">
                {certificateData[category].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-5 bg-gray-800 rounded-xl shadow hover:shadow-purple-500/30 transition-all"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3 text-lg">
                        <span className="text-2xl">
                          {iconMap[cert.platform] || <GiAchievement />}
                        </span>
                        <span>{cert.title}</span>
                      </div>
                      <span className="text-sm text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-purple-400 text-sm mb-2">{cert.platform}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 underline hover:text-blue-300"
                    >
                      View Certificate
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view: show only active category */}
        <div className="hidden md:block flex-1 pl-8 overflow-y-auto pb-20 no-scrollbar">
          <h1 className="text-4xl font-bold mb-6 text-purple-300">
            My Certificates
          </h1>
          <h2 className="text-2xl font-semibold mb-4">{activeCategory}</h2>
          <div className="space-y-6 pb-10">
            {certificateData[activeCategory].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 bg-gray-800 rounded-xl shadow hover:shadow-purple-500/30 transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3 text-lg">
                    <span className="text-2xl">
                      {iconMap[cert.platform] || <GiAchievement />}
                    </span>
                    <span>{cert.title}</span>
                  </div>
                  <span className="text-sm text-gray-400">{cert.date}</span>
                </div>
                <p className="text-purple-400 text-sm mb-2">{cert.platform}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 underline hover:text-blue-300"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
