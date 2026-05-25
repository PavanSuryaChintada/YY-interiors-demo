import { HeroSection } from "../components/HeroSection";
import { BrandStory } from "../components/BrandStory";
import { ProjectsSection } from "../components/ProjectsSection";
import { ArchitectureSection } from "../components/ArchitectureSection";
import { ServicesSection } from "../components/ServicesSection";
import { DesignPhilosophy } from "../components/DesignPhilosophy";
import { MaterialsSection } from "../components/MaterialsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ProcessSection } from "../components/ProcessSection";
import { ContactSection } from "../components/ContactSection";
import { CtaSection } from "../components/CtaSection";
import { AdPlaceholderSection } from "../components/AdPlaceholderSection";

export function Home() {
  return (
    <main>
      <HeroSection />
      
      <AdPlaceholderSection size="leaderboard" />
      
      <BrandStory />
      <CtaSection darkTheme={true} />
      
      <ProjectsSection />
      <ArchitectureSection />
      <CtaSection darkTheme={false} />
      
      <AdPlaceholderSection size="medium-rectangle" />
      
      <ServicesSection />
      <DesignPhilosophy />
      <CtaSection darkTheme={true} />
      
      <MaterialsSection />
      
      <AdPlaceholderSection size="leaderboard" />
      
      <TestimonialsSection />
      <CtaSection darkTheme={false} />
      
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
