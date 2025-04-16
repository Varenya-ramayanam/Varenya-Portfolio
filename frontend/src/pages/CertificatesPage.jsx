import React, { useState } from "react";
import { motion } from "framer-motion";
import {SiGoogle } from "react-icons/si";
import { GiAchievement } from "react-icons/gi";

const iconMap = {
//   NPTEL: <SiNptel className="text-orange-400" />,
//   Coursera: <SiCoursera className="text-blue-500" />,
//   Udemy: <SiUdemy className="text-purple-400" />,
  Google: <SiGoogle className="text-green-400" />,
  Internship: <GiAchievement className="text-yellow-400" />,
};

const certificateData = {
  "DSA & Programming": [
    {
      title: "Problem Solving (Intermediate)",
      platform: "HackerRank",
      date: "Jan 2024",
      link: "#",
    },
    {
      title: "Java Programming",
      platform: "Coursera",
      date: "Dec 2023",
      link: "#",
    },
  ],
  "Web Development": [
    {
      title: "Full Stack Internship",
      platform: "CodeClause",
      date: "July 2024",
      link: "#",
    },
    {
      title: "HTML, CSS, JS Bootcamp",
      platform: "Udemy",
      date: "Feb 2024",
      link: "#",
    },
  ],
  "Data Science & AI": [
    {
      title: "Cloud Computing - Elite",
      platform: "NPTEL",
      date: "Oct 2024",
      link: "#",
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
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 relative">
      <div className="flex flex-col md:flex-row">
        {/* Certificates Content */}
        <div className="flex-1 pr-8">
          <h1 className="text-4xl font-bold mb-6 text-purple-300">My Certificates</h1>
          <h2 className="text-2xl font-semibold mb-4">{activeCategory}</h2>

          <div className="space-y-6">
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

        {/* Category Sidebar */}
        <div className="md:w-64 mt-10 md:mt-0 md:border-l md:border-gray-700 pl-8">
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
      </div>
    </div>
  );
};

export default CertificatesPage;
