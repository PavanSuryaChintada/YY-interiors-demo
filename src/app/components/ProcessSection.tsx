import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

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
    <section id="process" ref={ref} className="py-32 px-8 bg-[#F5F1EA]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-['Inter'] mb-4" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.2em', color: '#8C6A4A' }}>
            OUR PROCESS
          </p>
          <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.2, color: '#1B1B1B' }}>
            From Vision to Reality
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#8C6A4A]/20 hidden lg:block" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 text-center lg:text-left" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <div className="font-['Cormorant_Garamond'] mb-3" style={{ fontSize: '72px', fontWeight: 300, color: '#8C6A4A', opacity: 0.3 }}>
                    {step.number}
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] mb-3" style={{ fontSize: '32px', fontWeight: 400, color: '#1B1B1B' }}>
                    {step.title}
                  </h3>
                  <p className="font-['Inter'] max-w-md" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: '#1B1B1B', marginLeft: index % 2 === 0 ? 'auto' : '0', marginRight: index % 2 === 0 ? '0' : 'auto' }}>
                    {step.description}
                  </p>
                </div>

                <div className="w-16 h-16 rounded-full border-2 border-[#8C6A4A] bg-[#F5F1EA] flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 rounded-full bg-[#8C6A4A]" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
