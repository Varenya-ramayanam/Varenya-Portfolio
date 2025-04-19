import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaTools,
  FaFolderOpen,
  FaUserAlt,
  FaEnvelope,
  FaHome,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  const baseButtonClasses =
    "flex items-center space-x-2 px-4 py-2 rounded-xl transition w-full";
  const activeClass = "bg-purple-600";
  const inactiveClass = "bg-gray-700 hover:bg-purple-600";

  const menuItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/skills", icon: <FaTools />, label: "Skills" },
    { path: "/projects", icon: <FaFolderOpen />, label: "Projects" },
    { path: "/certificates", icon: <TbCertificate />, label: "Certificates" },
    { path: "/about", icon: <FaUserAlt />, label: "About Me" },
    { path: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white w-full p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Brand or Logo */}
        <div className="text-2xl font-bold lg:hidden sm:block">Varenya</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center items-center gap-5 w-full">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`${baseButtonClasses} ${
                isActive(item.path) ? activeClass : inactiveClass
              } flex items-center justify-center w-32`} // Added w-32 to fix width and center contents
            >
              <div className="flex justify-center items-center gap-3 h-8">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="flex flex-col mt-4 gap-2 md:hidden">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false);
              }}
              className={`${baseButtonClasses} ${
                isActive(item.path) ? activeClass : inactiveClass
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
