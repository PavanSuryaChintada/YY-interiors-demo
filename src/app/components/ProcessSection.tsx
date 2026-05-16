import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const stages = [
  {
    id: "01",
    title: "Vision",
    description: "Deep immersion into your lifestyle, aspirations, and the unique soul of the site.",
    detail: "Discovery & Dialogue"
  },
  {
    id: "02",
    title: "Concept",
    description: "Translating abstract desires into architectural language through sketches and mood curation.",
    detail: "Spatial Narrative"
  },
  {
    id: "03",
    title: "Visualization",
    description: "Photorealistic digital manifestations that allow you to feel the space before it exists.",
    detail: "Digital Craft"
  },
  {
    id: "04",
    title: "Execution",
    description: "Meticulous coordination with elite artisans and engineers to realize every detail.",
    detail: "Technical Precision"
  },
  {
    id: "05",
    title: "Transformation",
    description: "The final reveal where structure becomes home and vision becomes reality.",
    detail: "Living Masterpiece"
  }
];

export function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="process" ref={containerRef} className="py-20 md:py-32 px-6 md:px-12 bg-[#F5F1EA] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-['Inter'] text-[#8C6A4A] text-[10px] uppercase tracking-[0.4em] font-medium mb-4"
          >
            The Journey
          </motion.p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(36px,4vw,56px)] font-light text-[#1B1B1B] leading-none">
            Architecting <br />
            <span className="italic">Excellence.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#1B1B1B]/5" />
          <motion.div 
            style={{ scaleY: pathLength }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#8C6A4A] origin-top z-10"
          />

          <div className="space-y-20 md:space-y-32">
            {stages.map((stage, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Stage Number / Indicator */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                    className="w-[40px] h-[40px] rounded-full bg-[#1B1B1B] flex items-center justify-center text-[#F5F1EA] font-['Inter'] text-[11px] font-medium border-[6px] border-[#F5F1EA]"
                  >
                    {stage.id}
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}
                >
                  <p className="font-['Inter'] text-[#8C6A4A] text-[9px] uppercase tracking-[0.2em] mb-3">
                    {stage.detail}
                  </p>
                  <h3 className="font-['Cormorant_Garamond'] text-[28px] md:text-[36px] font-light text-[#1B1B1B] mb-4">
                    {stage.title}
                  </h3>
                  <p className="font-['Inter'] text-[14px] md:text-[15px] leading-[1.7] text-[#1B1B1B]/70 font-light">
                    {stage.description}
                  </p>
                  
                  {/* Decorative Architectural Line */}
                  <div className={`mt-6 h-[1px] w-10 bg-[#8C6A4A]/30 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`} />
                </motion.div>

                {/* Spacer for non-content side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

