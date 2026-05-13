import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Masonry from "react-responsive-masonry";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "The Ivory Penthouse",
    category: "Luxury Residences",
    location: "Monaco",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "tall"
  },
  {
    title: "Geometric Villa",
    category: "Modern Villas",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1666037805138-f227944ed8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "wide"
  },
  {
    title: "Azure Sky Office",
    category: "Executive Workspaces",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc4NDQxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Stone & Silk Retreat",
    category: "Hospitality Interiors",
    location: "Paris",
    image: "https://images.unsplash.com/photo-1704383014594-01bc24b6b840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc4NDQxMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Linear Harmony",
    category: "Signature Concepts",
    location: "New York",
    image: "https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "The Obsidian Loft",
    category: "Luxury Residences",
    location: "London",
    image: "https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc4NDQxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="portfolio" ref={ref} className="py-32 md:py-48 px-6 md:px-12 bg-[#F5F1EA]">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <p className="font-['Inter'] mb-6 text-[#8C6A4A] text-[10px] uppercase tracking-[0.4em] font-medium">
              Curated Portfolio
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,6vw,80px)] font-light leading-[1.1] text-[#1B1B1B]">
              Bespoke Masterpieces <br />
              <span className="italic">Across the Globe.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block"
          >
            <button className="group flex items-center gap-4 font-['Inter'] text-[11px] uppercase tracking-[0.2em] text-[#1B1B1B] border-b border-[#1B1B1B]/10 pb-2 hover:border-[#1B1B1B] transition-all duration-500">
              View All Projects
              <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
            </button>
          </motion.div>
        </div>

        <Masonry columnsCount={window.innerWidth < 768 ? 1 : 2} gutter="40px">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="group relative cursor-none"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-[#1B1B1B]/0 group-hover:bg-[#1B1B1B]/40 transition-all duration-700" />
                
                {/* Project Info */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <p className="font-['Inter'] text-[#D8CBB8] text-[9px] uppercase tracking-[0.3em] mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-['Cormorant_Garamond'] text-[#F5F1EA] text-[32px] font-light mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-[#F5F1EA]/60 font-['Inter'] text-[10px] uppercase tracking-widest">
                    <span>{project.location}</span>
                    <div className="w-8 h-[1px] bg-[#8C6A4A]" />
                    <span>View Project</span>
                  </div>
                </div>
              </div>
              
              {/* External label for non-hover state (Museum style) */}
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h4 className="font-['Cormorant_Garamond'] text-[24px] text-[#1B1B1B] leading-none mb-2">
                    {project.title}
                  </h4>
                  <p className="font-['Inter'] text-[11px] text-[#1B1B1B]/40 uppercase tracking-widest">
                    {project.location}
                  </p>
                </div>
                <p className="font-['Inter'] text-[10px] text-[#8C6A4A] border border-[#8C6A4A]/20 px-3 py-1 rounded-full uppercase tracking-tighter font-medium">
                  Ref. {String(index + 1).padStart(2, '0')}
                </p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
