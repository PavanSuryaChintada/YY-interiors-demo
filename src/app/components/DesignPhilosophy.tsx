import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContent } from "../../context/ContentContext";

export function DesignPhilosophy() {
  const { content } = useContent();
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const img2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-6%"]);
  const textX = useTransform(scrollYProgress, [0, 0.3], [-20, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1B1B1B] overflow-hidden py-12 md:py-20"
    >
      {/* Faint large watermark numeral */}
      <div
        className="absolute -top-8 -left-6 font-['Cormorant_Garamond'] leading-none pointer-events-none select-none"
        style={{ fontSize: "clamp(160px, 30vw, 380px)", fontWeight: 500, color: "rgba(255,255,255,0.025)" }}
        aria-hidden
      >
        02
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">

          {/* ── LEFT: text ── */}
          <motion.div
            style={{ x: textX, opacity: textOpacity }}
            className="lg:sticky lg:top-32 space-y-10 md:space-y-14"
          >
            {/* Eyebrow */}
            <div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="w-8 h-[1px] bg-[#8C6A4A] mb-4 origin-left"
              />
              <p
                className="font-['Inter'] mb-4"
                style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.3em", color: "#8C6A4A" }}
              >
                {content.philosophy.eyebrow}
              </p>
              <h2
                className="font-['Cormorant_Garamond']"
                style={{
                  fontSize: "clamp(28px, 5.5vw, 72px)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  color: "#F5F1EA",
                }}
              >
                {content.philosophy.heading}{" "}
                <span
                  style={{ color: "#D8CBB8" }}
                >
                  {content.philosophy.headingItalic}
                </span>
              </h2>
            </div>

            {/* Divider */}
            <div className="w-full h-[0.5px] bg-[#F5F1EA]/10" />

            {/* Philosophy pillars */}
            <div className="space-y-10">
              {content.philosophy.pillars.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.85, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6 md:gap-8 group"
                >
                  <span
                    className="font-['Cormorant_Garamond'] shrink-0 pt-1"
                    style={{ fontSize: "13px", fontWeight: 500, color: "#8C6A4A", letterSpacing: "0.15em" }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h3
                      className="font-['Cormorant_Garamond'] mb-2"
                      style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 500, color: "#F5F1EA", lineHeight: 1.2 }}
                    >
                      {p.heading}
                    </h3>
                    <p
                      className="font-['Inter']"
                      style={{ fontSize: "clamp(14px, 1.5vw, 17px)", fontWeight: 400, lineHeight: 1.85, color: "#D8CBB8" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a
                href="#process"
                className="inline-flex items-center gap-4 font-['Inter'] group"
                style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em", color: "#8C6A4A" }}
              >
                <span className="group-hover:underline underline-offset-4 transition-all">OUR PROCESS</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: image composition ── */}
          <div ref={imageRef} className="relative">

            {/* Main large image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden ml-0 lg:ml-8"
            >
              <motion.div style={{ y: img1Y }}>
                <ImageWithFallback
                  src={content.philosophy.image1}
                  alt="Luxury interior — light and space"
                  className="w-full object-cover"
                  style={{ height: "clamp(380px, 55vh, 560px)" }}
                />
              </motion.div>
              {/* Image caption */}
              <div className="absolute bottom-4 left-4 font-['Inter']" style={{ fontSize: "9px", letterSpacing: "0.25em", color: "rgba(245,241,234,0.45)" }}>
                STUDY IN LIGHT · REF 2024
              </div>
            </motion.div>

            {/* Secondary smaller image — offset lower-left */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-4 ml-0 lg:-ml-8 overflow-hidden"
              style={{ width: "62%" }}
            >
              <motion.div style={{ y: img2Y }}>
                <ImageWithFallback
                  src={content.philosophy.image2}
                  alt="Bedroom interior detail"
                  className="w-full object-cover"
                  style={{ height: "clamp(200px, 28vh, 300px)" }}
                />
              </motion.div>
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-6 right-0 lg:-right-4 bg-[#8C6A4A]/10 backdrop-blur-md border border-[#8C6A4A]/20 p-6"
              style={{ minWidth: "160px" }}
            >
              <div
                className="font-['Cormorant_Garamond'] mb-1"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 500, color: "#F5F1EA", lineHeight: 1 }}
              >
                {content.philosophy.statNumber}
              </div>
              <div className="font-['Inter']" style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.22em", color: "#8C6A4A" }}>
                {content.philosophy.statLabel}
              </div>
              <div className="w-full h-[0.5px] bg-[#8C6A4A]/25 my-3" />
              <div className="font-['Inter']" style={{ fontSize: "9px", fontWeight: 400, letterSpacing: "0.15em", color: "#D8CBB8/70", lineHeight: 1.6 }}>
                {content.philosophy.statDescription}
              </div>
            </motion.div>

            {/* Bronze accent corner — top right */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-0 right-0 lg:-right-4 pointer-events-none"
              style={{ width: "40px", height: "40px" }}
            >
              <div className="absolute top-0 right-0 w-full h-[0.5px] bg-[#8C6A4A]/40" />
              <div className="absolute top-0 right-0 w-[0.5px] h-full bg-[#8C6A4A]/40" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
