import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import CertificatesPage from "./pages/CertificatesPage";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-5xl h-[90vh] overflow-hidden flex flex-col">
        <BrowserRouter>
          <div className="flex-1 overflow-hidden">
            <Routes>
              <Route path="/" element={<HeroPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
