import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaHome
  } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center w-2/3 max-w-sm text-white">
        <img
          src="/images/profile.png"
          alt="Profile"
          className="w-40 h-40 rounded-full mb-4 border-4 border-gray-700"
        />
        <h2 className="text-2xl font-semibold mb-2">Varenya</h2>
        <h2 className="text-2xl font-semibold mb-2">Ramayanam</h2>
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/Varenya-ramayanam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={26} className="hover:text-purple-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/varenya-ramayanam-a357ba2ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={26} className="hover:text-purple-400" />
          </a>
          <a
            href="https://www.instagram.com/varenya_r/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={26} className="hover:text-purple-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
