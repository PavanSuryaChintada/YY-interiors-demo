import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContent } from "../../context/ContentContext";

export function MaterialsSection() {
  const { content } = useContent();
  return (
    <section className="py-14 px-4 sm:px-8 bg-[#1B1B1B]">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="font-['Inter'] mb-4" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.28em", color: "#8C6A4A" }}>
            MATERIALS & TEXTURES
          </p>
          <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: "clamp(26px, 5.5vw, 60px)", fontWeight: 500, lineHeight: 1.15, color: "#F5F1EA" }}>
            The Art of Selection
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6">
                <ImageWithFallback
                  src={material.image}
                  alt={material.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/80 to-transparent opacity-60" />
                
                {/* Technical Overlay */}
                <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <svg width="100%" height="100%" className="text-[#8C6A4A]">
                    <line x1="10" y1="10" x2="50" y2="10" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="10" y1="8" x2="10" y2="12" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="50" y1="8" x2="50" y2="12" stroke="currentColor" strokeWidth="0.5" />
                    <text x="12" y="22" className="text-[8px] fill-current uppercase tracking-tighter">Spec-00{index + 1}</text>
                    
                    <circle cx="90%" cy="10%" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <text x="89%" y="11.5%" className="text-[6px] fill-current">A</text>
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-['Cormorant_Garamond'] mb-2" style={{ fontSize: "clamp(20px, 2.5vw, 24px)", fontWeight: 500, color: "#F5F1EA" }}>
                  {material.name}
                </h3>
                <p className="font-['Inter']" style={{ fontSize: "14px", fontWeight: 400, color: "#D8CBB8" }}>
                  {material.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
