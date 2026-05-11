import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-8 bg-[#F5F1EA]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666037805138-f227944ed8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="YY Interiors design philosophy"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#8C6A4A]/20 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <p className="font-['Inter'] mb-4" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.2em', color: '#8C6A4A' }}>
                OUR PHILOSOPHY
              </p>
              <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.2, color: '#1B1B1B' }}>
                Crafting Emotion Through Space
              </h2>
            </div>

            <div className="space-y-6 font-['Inter']" style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.9, color: '#1B1B1B' }}>
              <p>
                At YY Interiors, we believe that luxury is not about opulence—it's about creating spaces that resonate with the soul. Each project is a careful orchestration of light, texture, and form.
              </p>
              <p>
                Our approach blends architectural rigor with emotional sensitivity, resulting in interiors that feel both timeless and deeply personal. We work with premium materials, artisanal craftsmanship, and a refined aesthetic that transcends trends.
              </p>
              <p>
                From concept to execution, every detail is considered, every surface is intentional, and every space is designed to evoke a feeling of serene sophistication.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "15+", label: "Years Excellence" },
                { number: "200+", label: "Projects Completed" },
                { number: "12", label: "Design Awards" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  <div className="font-['Cormorant_Garamond']" style={{ fontSize: '42px', fontWeight: 300, color: '#8C6A4A' }}>
                    {stat.number}
                  </div>
                  <div className="font-['Inter']" style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.1em', color: '#1B1B1B' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
