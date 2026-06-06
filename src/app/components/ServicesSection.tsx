import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContent } from "../../context/ContentContext";

export function ServicesSection() {
  const { content } = useContent();
  const extendedServices = [...content.services, ...content.services];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const speed = 1;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += speed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="services" className="py-10 md:py-16 px-4 sm:px-6 md:px-8 bg-[#1B1B1B]">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-12"
        >
          <p className="font-['Inter'] mb-3 md:mb-4" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.28em", color: "#8C6A4A" }}>
            SERVICES
          </p>
          <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: "clamp(26px, 5.5vw, 60px)", fontWeight: 500, lineHeight: 1.15, color: "#F5F1EA" }}>
            What We Create
          </h2>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-6 md:gap-8 pb-8" style={{ width: "max-content" }}>
          {extendedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: (index % content.services.length) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
              style={{ width: "clamp(280px, 80vw, 400px)", height: "clamp(350px, 60vh, 500px)" }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: hoveredIndex === index ? "scale(1.08)" : "scale(1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/90 via-[#1B1B1B]/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.div
                  animate={{ y: hoveredIndex === index ? -10 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="font-['Cormorant_Garamond'] mb-2 md:mb-3" style={{ fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 500, color: "#F5F1EA" }}>
                    {service.title}
                  </h3>
                  <p className="font-['Inter']" style={{ fontSize: "clamp(13px, 1.5vw, 16px)", fontWeight: 400, lineHeight: 1.7, color: "#D8CBB8" }}>
                    {service.description}
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 h-[2px] bg-[#8C6A4A] origin-left"
                style={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
