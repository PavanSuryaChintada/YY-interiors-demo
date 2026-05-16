import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};

export function BrandStory() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-[#F5F1EA] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column — LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="font-['Inter'] mb-3 md:mb-4" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.28em", color: "#8C6A4A" }}>
                OUR PHILOSOPHY
              </p>
              <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, lineHeight: 1.15, color: "#1B1B1B" }}>
                Crafting Emotion Through Space
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 font-['Inter']" style={{ fontSize: "clamp(16px, 1.1vw, 18px)", fontWeight: 400, lineHeight: 1.9, color: "#1B1B1B" }}>
              <p>
                At YY Interiors, we believe that luxury is not about opulence—it's about creating spaces that resonate with the soul. Each project is a careful orchestration of light, texture, and form.
              </p>
              <p>
                Our approach blends architectural rigor with emotional sensitivity, resulting in interiors that feel both timeless and deeply personal. We work with premium materials, artisanal craftsmanship, and a refined aesthetic that transcends trends.
              </p>
              <p>
                From concept to execution, every detail is considered, every surface is intentional, and every space is designed to evoke a feeling of serene sophistication.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8">
              {[
                { number: "15+", label: "Years Excellence" },
                { number: "200+", label: "Projects Completed" },
                { number: "12", label: "Design Awards" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="font-['Cormorant_Garamond']" style={{ fontSize: "clamp(36px, 3.5vw, 48px)", fontWeight: 500, color: "#8C6A4A" }}>
                    {stat.number}
                  </div>
                  <div className="font-['Inter']" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", color: "#1B1B1B" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image column — RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666037805138-f227944ed8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="YY Interiors design philosophy"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-32 h-32 md:w-64 md:h-64 bg-[#8C6A4A]/15 -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

