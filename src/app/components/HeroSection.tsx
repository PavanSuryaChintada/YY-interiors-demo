import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-screen w-full overflow-hidden bg-[#1B1B1B]">
      {/* Parallax background */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 origin-center"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury interior design"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/65 via-[#1B1B1B]/45 to-[#1B1B1B]/75 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#111111]/80 to-transparent pointer-events-none" />

      {/* Subtle architectural grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5F1EA" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Content with parallax fade-out */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: contentY, opacity }}
        className="relative h-full flex flex-col items-center justify-center px-8 text-center"
      >
        <div className="max-w-5xl w-full mb-24">
          <motion.p
            variants={itemVariants}
            className="font-['Inter'] mb-6"
            style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.32em", color: "#D8CBB8", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
          >
            AWARD-WINNING LUXURY DESIGN STUDIO
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-['Cormorant_Garamond'] mb-8"
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "0.02em",
              color: "#F5F1EA",
              textShadow: "0 4px 32px rgba(0,0,0,0.45)",
            }}
          >
            Designing Spaces That Feel Timeless
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-['Inter'] mb-12 max-w-2xl mx-auto"
            style={{
              fontSize: "clamp(16px, 1.1vw, 18px)",
              fontWeight: 400,
              lineHeight: 1.85,
              letterSpacing: "0.03em",
              color: "#D8CBB8",
              textShadow: "0 1px 8px rgba(0,0,0,0.3)",
            }}
          >
            A globally recognized luxury design house specializing in{" "}
            <br className="hidden md:block" />
            bespoke residences and visionary spatial architecture.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.14)" }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 font-['Inter']"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                color: "#F5F1EA",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(245,241,234,0.35)",
              }}
            >
              EXPLORE PORTFOLIO
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#7a5c3f" }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 font-['Inter']"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                color: "#F5F1EA",
                background: "#8C6A4A",
                border: "1px solid rgba(140,106,74,0.6)",
              }}
            >
              BOOK CONSULTATION
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-3"
        >
          <span className="font-['Inter'] text-[9px] uppercase tracking-[0.45em] text-[#D8CBB8]/70">
            Discover More
          </span>
          <div className="relative w-[1px] h-16 bg-[#F5F1EA]/10 overflow-hidden">
            <motion.div
              animate={{ y: [-64, 64] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#D8CBB8] to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
