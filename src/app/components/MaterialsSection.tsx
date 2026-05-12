import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const materials = [
  {
    name: "Italian Marble",
    description: "Timeless elegance",
    image: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0ZXh0dXJlJTIwbHV4dXJ5fGVufDF8fHx8MTc3ODQ0MTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Walnut Wood",
    description: "Natural warmth",
    image: "https://images.unsplash.com/photo-1774437290572-0e414eb62db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b29kJTIwdGV4dHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3ODQ0MTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Brushed Bronze",
    description: "Refined accents",
    image: "https://images.unsplash.com/photo-1760237655540-8197ef24838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3b29kJTIwdGV4dHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3ODQ0MTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Luxury Fabrics",
    description: "Tactile comfort",
    image: "https://images.unsplash.com/photo-1715518283046-54e007167620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwdGV4dHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3ODQ0MTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function MaterialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-8 bg-[#1B1B1B]">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-['Inter'] mb-4" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.2em', color: '#8C6A4A' }}>
            MATERIALS & TEXTURES
          </p>
          <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.2, color: '#F5F1EA' }}>
            The Art of Selection
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                <h3 className="font-['Cormorant_Garamond'] mb-2" style={{ fontSize: '24px', fontWeight: 400, color: '#F5F1EA' }}>
                  {material.name}
                </h3>
                <p className="font-['Inter']" style={{ fontSize: '13px', fontWeight: 300, color: '#D8CBB8' }}>
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
