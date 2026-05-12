import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function DesignPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-40 px-8 bg-[#1B1B1B] overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div style={{ opacity }} className="space-y-12">
            <div>
              <p className="font-['Inter'] mb-4" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.3em', color: '#8C6A4A' }}>
                DESIGN INTELLIGENCE
              </p>
              <h2 className="font-['Cormorant_Garamond'] text-[#F5F1EA]" style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.1 }}>
                The Physics of <br />
                <span className="italic">Emotional Space</span>
              </h2>
            </div>

            <div className="space-y-8 font-['Inter'] text-[#D8CBB8]" style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.9 }}>
              <div className="flex gap-6 items-start">
                <span className="text-[#8C6A4A] font-medium pt-1">01</span>
                <p>Mathematical precision meets human intuition. We calculate the flow of light and the resonance of materials to craft atmospheres that breathe.</p>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-[#8C6A4A] font-medium pt-1">02</span>
                <p>Every line in our drawings is a commitment to spatial harmony. We don't just fill rooms; we architect experiences that evolve with you.</p>
              </div>
            </div>
          </motion.div>

          <div className="relative aspect-square lg:aspect-auto h-full min-h-[500px]">
            {/* Technical Drawing Animation */}
            <svg viewBox="0 0 500 500" className="w-full h-full stroke-[#8C6A4A] fill-none opacity-40">
              {/* Foundation Lines */}
              <motion.path
                d="M 50 450 L 450 450 L 450 50 L 50 50 Z"
                style={{ pathLength }}
                strokeWidth="0.5"
              />
              {/* Internal Grid */}
              <motion.path
                d="M 50 150 L 450 150 M 50 250 L 450 250 M 50 350 L 450 350 M 150 50 L 150 450 M 250 50 L 250 450 M 350 50 L 350 450"
                style={{ pathLength }}
                strokeWidth="0.2"
                strokeDasharray="4 4"
              />
              {/* Design Flow Curves */}
              <motion.path
                d="M 100 400 Q 250 100 400 400"
                style={{ pathLength }}
                strokeWidth="1"
                className="stroke-[#8C6A4A]"
              />
              <motion.circle
                cx="250"
                cy="200"
                r="80"
                style={{ pathLength }}
                strokeWidth="0.5"
              />
              
              {/* Animated Technical Text */}
              <motion.g style={{ opacity: pathLength }} className="fill-[#8C6A4A] font-['Inter'] text-[10px] tracking-widest">
                <text x="60" y="40">PLAN_VIEW_V.01</text>
                <text x="380" y="40">S-201</text>
                <text x="230" y="190">CENTRAL_HUB</text>
                <text x="240" y="470">AXIS_LINE_ALPHA</text>
              </motion.g>
            </svg>

            {/* Floating Design Points */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#8C6A4A]"
            />
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-[#8C6A4A]"
            />
          </div>
        </div>
      </div>

      {/* Background Section Number */}
      <div className="absolute -bottom-20 -right-20 font-['Cormorant_Garamond'] text-[400px] text-white/[0.02] leading-none pointer-events-none uppercase">
        Flow
      </div>
    </section>
  );
}
