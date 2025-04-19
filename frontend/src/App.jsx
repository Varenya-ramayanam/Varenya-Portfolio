import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import CertificatesPage from "./pages/CertificatesPage";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Preloader from "./components/Preloader";

function App() {
  const location = useLocation();
  const showNavbarAndProfile = location.pathname !== "/";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full bg-black overflow-hidden px-4">
      {/* Left: ProfileCard */}
      {showNavbarAndProfile && (
        <div className="hidden md:block md:w-1/2">
          <ProfileCard />
        </div>
      )}

      <div className="bg-gray-900 rounded-2xl shadow-2xl p-4 md:p-6 w-full md:max-w-7xl h-full md:h-[90vh] overflow-hidden flex flex-col scroll-smooth md:mr-10">
        {/* Navbar at top */}
        {showNavbarAndProfile && (
          <div className="mb-4">
            <Navbar />
          </div>
        )}

        {/* Main content area */}
        <div className="flex flex-1 overflow-y-auto">
          <div className="flex-1 pr-0 md:pr-2">
            <Routes>
              <Route path="/" element={<HeroPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
