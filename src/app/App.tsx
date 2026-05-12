import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { BrandStory } from "./components/BrandStory";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { MaterialsSection } from "./components/MaterialsSection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { ArchitecturalCursor } from "./components/ArchitecturalCursor";
import { DesignPhilosophy } from "./components/DesignPhilosophy";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] overflow-x-hidden cursor-none md:cursor-auto">
      <ArchitecturalCursor />
      <Preloader />
      <Navigation />
      <HeroSection />
      <BrandStory />
      <DesignPhilosophy />
      <ServicesSection />
      <ProjectsSection />
      <MaterialsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
