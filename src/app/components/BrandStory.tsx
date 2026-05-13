import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BrandStory() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-32 md:py-56 px-6 md:px-12 bg-[#F5F1EA] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          
          {/* Main Content Column */}
          <div className="lg:col-span-5 z-20 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-['Inter'] mb-8 text-[#8C6A4A] text-[11px] uppercase tracking-[0.4em] font-medium">
                Our Narrative
              </p>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,72px)] font-light leading-[1.1] text-[#1B1B1B] mb-12">
                A Visionary Studio <br />
                <span className="italic">for the Global Elite.</span>
              </h2>
              
              <div className="space-y-8 font-['Inter'] text-[16px] leading-[1.9] text-[#1B1B1B]/80 font-light max-w-md">
                <p>
                  YY Interiors is an award-winning interior architecture firm dedicated to crafting ultra-luxury environments that redefine modern living.
                </p>
                <p>
                  From bespoke residences in Monaco to high-executive workspaces in Singapore, our portfolio spans the globe's most exclusive addresses. We specialize in luxury villas, premium commercial interiors, and curated living experiences that balance architectural rigor with artistic soul.
                </p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="mt-12 group flex items-center gap-6 font-['Inter'] text-[11px] uppercase tracking-[0.3em] text-[#1B1B1B]"
              >
                <span className="w-12 h-[1px] bg-[#1B1B1B] group-hover:w-20 transition-all duration-500" />
                Read Full Story
              </motion.button>
            </motion.div>
          </div>

          {/* Layered Visuals Column */}
          <div className="lg:col-span-7 relative flex justify-end">
            <div className="relative w-full lg:w-[85%] aspect-[4/5] lg:aspect-auto lg:h-[900px]">
              
              {/* Primary Image */}
              <motion.div 
                style={{ y: y1 }}
                className="absolute top-0 right-0 w-[80%] h-[70%] z-10 overflow-hidden shadow-2xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666037805138-f227944ed8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1200"
                  alt="Luxury Interior"
                  className="w-full h-full object-cover scale-110"
                />
              </motion.div>

              {/* Secondary Image (Layered) */}
              <motion.div 
                style={{ y: y2 }}
                className="absolute bottom-10 left-0 w-[55%] h-[45%] z-20 overflow-hidden shadow-2xl border-[15px] border-[#F5F1EA]"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Architectural Detail"
                  className="w-full h-full object-cover scale-125"
                />
              </motion.div>

              {/* Floating Architectural Note */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute top-[20%] left-[-15%] z-30 hidden lg:block bg-white p-8 shadow-xl max-w-[200px]"
              >
                <p className="font-['Cormorant_Garamond'] text-[18px] italic text-[#1B1B1B] mb-2">"Light is the only material that is truly infinite."</p>
                <p className="font-['Inter'] text-[9px] uppercase tracking-widest text-[#8C6A4A]">Y. Yamamoto, Founder</p>
              </motion.div>

              {/* Background Geometry */}
              <div className="absolute top-[10%] right-[10%] w-full h-[80%] border border-[#1B1B1B]/5 -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

