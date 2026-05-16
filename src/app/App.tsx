import { BrowserRouter, Routes, Route } from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { ProjectsCollection } from "./pages/ProjectsCollection";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F5F1EA] overflow-x-hidden">
        <Preloader />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsCollection />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

