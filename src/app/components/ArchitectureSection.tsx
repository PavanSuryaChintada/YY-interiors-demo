import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArchitecturalElements } from "./ArchitecturalElements";
import { useContent } from "../../context/ContentContext";

export function ArchitectureSection() {
  const { content } = useContent();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[120vh] flex items-center justify-center bg-[#F5F1EA] overflow-hidden py-32 px-8"
    >
      <ArchitecturalElements />
      
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      >
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="font-['Inter'] mb-4 text-[#8C6A4A] text-[11px] uppercase tracking-[0.3em] font-medium">
              {content.architecture.eyebrow}
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,72px)] font-light leading-[1.1] text-[#1B1B1B] mb-8">
              {content.architecture.heading1} <br />
              <span className="italic">{content.architecture.heading2}</span>
            </h2>
            <p className="font-['Inter'] text-[16px] leading-[1.8] text-[#1B1B1B]/70 font-light max-w-lg">
              {content.architecture.body}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-12 pt-8">
            {content.architecture.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="border-l border-[#8C6A4A]/20 pl-6"
              >
                <p className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#8C6A4A] mb-2">{stat.label}</p>
                <p className="font-['Cormorant_Garamond'] text-[24px] text-[#1B1B1B]">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] bg-white shadow-2xl p-8 flex items-center justify-center overflow-hidden group">
          {/* Animated Floor Plan Layer */}
          <div className="absolute inset-0 p-12 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
            <svg width="100%" height="100%" viewBox="0 0 400 500" className="w-full h-full">
              <motion.rect
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                x="20" y="20" width="360" height="460"
                fill="none" stroke="#8C6A4A" strokeWidth="0.5"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                d="M 20 150 L 380 150 M 150 150 L 150 480 M 20 300 L 150 300"
                fill="none" stroke="#8C6A4A" strokeWidth="0.5"
              />
              <motion.circle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                cx="260" cy="320" r="60"
                fill="none" stroke="#8C6A4A" strokeWidth="0.5" strokeDasharray="4 4"
              />
              
              {/* Interactive Geometry Nodes */}
              {[
                { x: 20, y: 20 }, { x: 380, y: 20 }, 
                { x: 380, y: 480 }, { x: 20, y: 480 },
                { x: 150, y: 150 }, { x: 260, y: 320 }
              ].map((point, i) => (
                <motion.circle
                  key={i}
                  initial={{ r: 0 }}
                  whileInView={{ r: 3 }}
                  transition={{ delay: 2 + (i * 0.1) }}
                  cx={point.x} cy={point.y}
                  fill="#8C6A4A"
                />
              ))}
            </svg>
          </div>

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 bg-[#1B1B1B] text-[#F5F1EA] p-6 backdrop-blur-xl border border-[#F5F1EA]/10 shadow-2xl"
          >
            <p className="font-['Inter'] text-[9px] uppercase tracking-[0.2em] mb-2 opacity-60">{content.architecture.cardEyebrow}</p>
            <p className="font-['Cormorant_Garamond'] text-[20px] mb-4">{content.architecture.cardTitle}</p>
            <div className="flex gap-4">
              <div className="w-12 h-[1px] bg-[#8C6A4A] mt-3" />
              <p className="font-['Inter'] text-[11px] font-light leading-relaxed opacity-80">
                {content.architecture.cardBody}
              </p>
            </div>
          </motion.div>
          
          {/* Subtle Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8C6A4A]/5 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Decorative Text */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute right-[-5%] top-[20%] font-['Cormorant_Garamond'] text-[200px] text-[#1B1B1B]/5 font-light pointer-events-none whitespace-nowrap rotate-90"
      >
        PRECISION
      </motion.div>
    </section>
  );
}
