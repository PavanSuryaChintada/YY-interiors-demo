import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContent } from "../../context/ContentContext";

export function ProjectsSection() {
  const { content } = useContent();
  const projects = content.projects;
  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-8 bg-[#F5F1EA]">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-20"
        >
          <p className="font-['Inter'] mb-3 md:mb-4" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.28em", color: "#8C6A4A" }}>
            OUR PORTFOLIO
          </p>
          <h2 className="font-['Cormorant_Garamond'] mb-4 md:mb-5" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, lineHeight: 1.15, color: "#1B1B1B" }}>
            Explore Our Recent Projects
          </h2>
          <p className="font-['Inter'] max-w-xl" style={{ fontSize: "clamp(16px, 1.1vw, 18px)", fontWeight: 400, lineHeight: 1.8, color: "#1B1B1B" }}>
            From modern apartments to luxury villas, we've transformed homes across Hyderabad with personalized interior solutions that balance style, comfort, and functionality.
          </p>
        </motion.div>

        <Masonry columnsCount={3} gutter="24px">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer relative overflow-hidden"
            >
              <div className="relative overflow-hidden bg-[#1B1B1B]/5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-[#1B1B1B]/0 group-hover:bg-[#1B1B1B]/40 transition-all duration-700 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="font-['Inter'] text-[#F5F1EA]/60 text-[9px] uppercase tracking-[0.4em] mb-4">
                      {project.location}
                    </p>
                    <div className="px-8 py-4 border border-[#F5F1EA]/20 bg-[#F5F1EA]/10 backdrop-blur-md">
                      <p className="font-['Inter'] text-[#F5F1EA] text-[11px] uppercase tracking-[0.3em] font-medium">
                        View Project —
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <h3 className="font-['Cormorant_Garamond'] mb-1" style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 500, color: "#1B1B1B" }}>
                  {project.title}
                </h3>
                <div className="font-['Inter'] flex items-center gap-3" style={{ fontSize: "13px", fontWeight: 400, color: "#8C6A4A" }}>
                  <span>{project.location}</span>
                  <span>·</span>
                  <span>{project.style}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
