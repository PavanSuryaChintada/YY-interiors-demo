import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContent } from "../../context/ContentContext";

function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};

export function BrandStory() {
  const { content } = useContent();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const blockY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="py-10 md:py-16 px-6 md:px-8 bg-[#F5F1EA] overflow-hidden">
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
              {/* Animated reveal line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="w-8 h-[1px] bg-[#8C6A4A] mb-4 origin-left"
              />
              <p className="font-['Inter'] mb-3 md:mb-4" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.28em", color: "#8C6A4A" }}>
                {content.brandStory.eyebrow}
              </p>
              <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, lineHeight: 1.15, color: "#1B1B1B" }}>
                {content.brandStory.heading}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 font-['Inter']" style={{ fontSize: "clamp(16px, 1.1vw, 18px)", fontWeight: 400, lineHeight: 1.9, color: "#1B1B1B" }}>
              <p>{content.brandStory.paragraph1}</p>
              <p>{content.brandStory.paragraph2}</p>
              <p>{content.brandStory.paragraph3}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8">
              {content.brandStory.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <div className="font-['Cormorant_Garamond']" style={{ fontSize: "clamp(36px, 3.5vw, 48px)", fontWeight: 500, color: "#8C6A4A" }}>
                    <CountUp value={stat.number} />
                  </div>
                  <div className="font-['Inter']" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", color: "#1B1B1B" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image column — RIGHT with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group overflow-hidden">
              <motion.div style={{ y: imageY }} className="w-full">
                <ImageWithFallback
                  src={content.brandStory.image}
                  alt="YY Interiors design philosophy"
                  className="w-full h-[400px] md:h-[500px] lg:h-[640px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </motion.div>
              <motion.div
                style={{ y: blockY }}
                className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-32 h-32 md:w-64 md:h-64 bg-[#8C6A4A]/12 -z-10"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
