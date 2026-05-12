import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Masonry from "react-responsive-masonry";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Modern Minimalist Residence",
    location: "Mumbai, India",
    style: "Contemporary",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Luxury Penthouse Suite",
    location: "Delhi, India",
    style: "Modern Luxury",
    image: "https://images.unsplash.com/photo-1666037805138-f227944ed8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Serene Bedroom Retreat",
    location: "Bangalore, India",
    style: "Transitional",
    image: "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc4NDQxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Architectural Kitchen",
    location: "Gurgaon, India",
    style: "Contemporary",
    image: "https://images.unsplash.com/photo-1704383014594-01bc24b6b840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc4NDQxMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Elegant Living Space",
    location: "Pune, India",
    style: "Classic Modern",
    image: "https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Tranquil Master Suite",
    location: "Hyderabad, India",
    style: "Minimalist",
    image: "https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc4NDQxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="portfolio" ref={ref} className="py-20 md:py-32 px-6 md:px-8 bg-[#F5F1EA]">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="font-['Inter'] mb-3 md:mb-4" style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.2em', color: '#8C6A4A' }}>
            FEATURED WORK
          </p>
          <h2 className="font-['Cormorant_Garamond'] mb-4 md:mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.2, color: '#1B1B1B' }}>
            Selected Projects
          </h2>
          <p className="font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 300, lineHeight: 1.8, color: '#1B1B1B' }}>
            A curated collection of spaces that embody our design philosophy
          </p>
        </motion.div>

        <Masonry columnsCount={window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3} gutter="24px">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer relative overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1B1B1B]/10 group-hover:bg-[#1B1B1B]/60 transition-all duration-500" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100"
                >
                  <h3 className="font-['Cormorant_Garamond'] mb-1 md:mb-2" style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 400, color: '#F5F1EA' }}>
                    {project.title}
                  </h3>
                  <div className="font-['Inter'] flex items-center gap-3 md:gap-4" style={{ fontSize: '11px', fontWeight: 300, color: '#D8CBB8' }}>
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.style}</span>
                  </div>
                </motion.div>
                
                {/* Always visible title on mobile for better UX */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1B1B1B]/80 to-transparent">
                  <h3 className="font-['Cormorant_Garamond']" style={{ fontSize: '18px', fontWeight: 400, color: '#F5F1EA' }}>
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
