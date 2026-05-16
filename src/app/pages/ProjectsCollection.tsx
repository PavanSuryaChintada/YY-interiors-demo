import { motion } from "motion/react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect } from "react";

export function ProjectsCollection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F1EA] min-h-screen pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Inter'] text-[#8C6A4A] text-[11px] uppercase tracking-[0.5em] mb-6"
          >
            Full Portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-['Cormorant_Garamond'] text-[clamp(48px,8vw,120px)] font-light leading-none text-[#1B1B1B]"
          >
            The Complete <span className="italic">Collection.</span>
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/project/${project.slug}`} className="block group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#1B1B1B]/5 mb-8">
                  <ImageWithFallback
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#1B1B1B]/0 group-hover:bg-[#1B1B1B]/40 transition-all duration-700 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <p className="font-['Inter'] text-[#F5F1EA] text-[11px] uppercase tracking-[0.3em] border-b border-[#F5F1EA]/40 pb-2">
                      View Story
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-['Inter'] text-[10px] text-[#8C6A4A] uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h3 className="font-['Cormorant_Garamond'] text-[32px] text-[#1B1B1B] font-light group-hover:text-[#8C6A4A] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex justify-between items-center pt-4 border-t border-[#1B1B1B]/10">
                    <span className="font-['Inter'] text-[10px] text-[#1B1B1B]/40 uppercase">
                      {project.location}
                    </span>
                    <span className="font-['Inter'] text-[10px] text-[#1B1B1B]/40 uppercase">
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
