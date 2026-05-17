import { BrowserRouter, Routes, Route } from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { ArchitecturalCursor } from "./components/ArchitecturalCursor";
import { ScrollProgressPanel } from "./components/ScrollProgressPanel";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { ProjectsCollection } from "./pages/ProjectsCollection";
import { AdminPanel } from "./pages/AdminPanel";
import { ContentProvider } from "../context/ContentContext";

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] overflow-x-hidden cursor-none md:cursor-auto">
      <Preloader />
      <ArchitecturalCursor />
      <ScrollProgressPanel />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsCollection />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/secret" element={<AdminPanel />} />
          <Route path="/*" element={<SiteLayout />} />
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  );
}
