import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { projects } from "../data/projects";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section id="portfolio" ref={ref} className="pt-12 pb-48 px-6 md:px-12 bg-[#F5F1EA]">
      <div className="max-w-[1600px] mx-auto">
        {/* Simplified Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-['Inter'] text-[#8C6A4A] text-[11px] uppercase tracking-[0.5em] font-medium mb-6">
              Curated Selection
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,6vw,80px)] font-light leading-none text-[#1B1B1B]">
              Bespoke <span className="italic">Masterpieces.</span>
            </h2>
          </motion.div>
        </div>

        {/* Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/project/${project.slug}`} className="block group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1B1B1B]/5 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.mainImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Enhanced Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1B1B1B]/0 group-hover:bg-[#1B1B1B]/40 backdrop-blur-[2px] transition-all duration-700 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
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

                {/* Minimal Labels */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-[28px] text-[#1B1B1B] font-light mb-2">
                      {project.title}
                    </h3>
                    <p className="font-['Inter'] text-[11px] text-[#1B1B1B]/40 uppercase tracking-[0.2em]">
                      {project.category} • {project.location}
                    </p>
                  </div>
                  <span className="font-['Inter'] text-[9px] text-[#8C6A4A] border border-[#8C6A4A]/20 px-3 py-1 rounded-full uppercase tracking-tighter">
                    0{index + 1}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 flex justify-center"
        >
          <Link to="/projects" className="group flex items-center gap-6 font-['Inter'] text-[11px] uppercase tracking-[0.3em] text-[#1B1B1B] py-4 px-12 border border-[#1B1B1B]/10 hover:border-[#1B1B1B] transition-all duration-500">
            Explore All Projects
            <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
