import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArchitecturalElements } from "./ArchitecturalElements";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your vision, lifestyle, and spatial needs through in-depth dialogue"
  },
  {
    number: "02",
    title: "Concept Design",
    description: "Translating ideas into architectural concepts with mood boards and sketches"
  },
  {
    number: "03",
    title: "3D Visualization",
    description: "Bringing designs to life with photorealistic renderings and walkthroughs"
  },
  {
    number: "04",
    title: "Material Selection",
    description: "Curating premium materials, finishes, and bespoke furnishings"
  },
  {
    number: "05",
    title: "Execution",
    description: "Meticulous project management ensuring precision and quality"
  },
  {
    number: "06",
    title: "Final Styling",
    description: "The finishing touches that transform a space into an experience"
  }
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" ref={ref} className="relative py-20 md:py-32 px-6 md:px-8 bg-[#F5F1EA] overflow-hidden">
      <ArchitecturalElements />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-['Inter'] mb-3 md:mb-4" style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.2em', color: '#8C6A4A' }}>
            OUR PROCESS
          </p>
          <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.2, color: '#1B1B1B' }}>
            From Vision to Reality
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#8C6A4A]/20" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 pl-12 md:pl-0 text-left md:text-right" 
                     style={{ textAlign: window.innerWidth < 768 ? 'left' : (index % 2 === 0 ? 'right' : 'left') }}>
                  <div className="font-['Cormorant_Garamond'] mb-1 md:mb-3" style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 300, color: '#8C6A4A', opacity: 0.3 }}>
                    {step.number}
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] mb-2 md:mb-3" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400, color: '#1B1B1B' }}>
                    {step.title}
                  </h3>
                  <p className="font-['Inter'] max-w-md mx-0" 
                     style={{ 
                       fontSize: 'clamp(14px, 2vw, 15px)', 
                       fontWeight: 300, 
                       lineHeight: 1.8, 
                       color: '#1B1B1B', 
                       marginLeft: window.innerWidth < 768 ? '0' : (index % 2 === 0 ? 'auto' : '0'), 
                       marginRight: window.innerWidth < 768 ? '0' : (index % 2 === 0 ? '0' : 'auto') 
                     }}>
                    {step.description}
                  </p>
                </div>

                <div className="absolute left-0 md:relative w-8 h-8 md:w-16 md:h-16 rounded-full border-2 border-[#8C6A4A] bg-[#F5F1EA] flex items-center justify-center z-10 translate-x-0 md:translate-x-0">
                  <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#8C6A4A]" />
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
