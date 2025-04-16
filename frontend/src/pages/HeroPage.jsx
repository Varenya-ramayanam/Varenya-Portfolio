import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaUserAlt,
  FaFolderOpen,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TbCertificate } from "react-icons/tb";
const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-full px-6 py-8 space-y-8 md:space-y-0 md:space-x-12">
      {/* Left Side: Profile Card */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center w-full max-w-sm text-white">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-40 h-40 rounded-full mb-4 border-4 border-gray-700"
          />
          <h2 className="text-2xl font-semibold mb-2">Varenya Ramayanam</h2>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={26} className="hover:text-purple-400" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={26} className="hover:text-purple-400" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={26} className="hover:text-purple-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Vertical Navigation with Labels */}
      <div className="w-full md:w-1/2 text-white">
        <div className="flex flex-col space-y-4 text-lg">
          <button
            onClick={() => navigate("/skills")}
            className="flex items-center space-x-3 bg-gray-700 hover:bg-purple-600 px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <FaTools />
            <span>Skills</span>
          </button>
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center space-x-3 bg-gray-700 hover:bg-purple-600 px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <FaFolderOpen />
            <span>Projects</span>
          </button>
          <button
            onClick={() => navigate("/certificates")}
            className="flex items-center space-x-3 bg-gray-700 hover:bg-purple-600 px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <TbCertificate />
            <span>Certificates</span>
          </button>
          <button
            onClick={() => navigate("/about")}
            className="flex items-center space-x-3 bg-gray-700 hover:bg-purple-600 px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <FaUserAlt />
            <span>About Me</span>
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center space-x-3 bg-gray-700 hover:bg-purple-600 px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <FaEnvelope />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
