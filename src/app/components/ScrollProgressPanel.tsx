import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "ENTRANCE", num: "00" },
  { id: "portfolio", label: "PORTFOLIO", num: "01" },
  { id: "services", label: "SERVICES", num: "02" },
  { id: "process", label: "PROCESS", num: "03" },
  { id: "contact", label: "CONTACT", num: "04" },
];

export function ScrollProgressPanel() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [activeSection, setActiveSection] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setScrollPct(Math.round(v * 100));

      const idx = Math.min(
        sections.length - 1,
        Math.floor(v * sections.length)
      );
      setActiveSection(idx);
    });
    return unsub;
  }, [scrollYProgress]);

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
    >
      {/* Architectural bracket top */}
      <div className="flex flex-col items-center gap-0">
        <div className="w-[1px] h-4 bg-[#8C6A4A]/30" />
        <div className="w-3 h-[0.5px] bg-[#8C6A4A]/30" />
      </div>

      {/* Section markers with vertical rail */}
      <div className="relative flex flex-col items-center">
        {/* Rail background */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[0.5px] bg-[#8C6A4A]/15" />

        {/* Progress fill */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#8C6A4A]/60"
        />

        <div className="relative flex flex-col gap-7 py-2">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.id}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => {
                const el = document.getElementById(sec.id);
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              {/* Label — hidden until hover or active */}
              <motion.div
                animate={{
                  opacity: activeSection === i ? 1 : 0,
                  x: activeSection === i ? 0 : 6,
                }}
                className="group-hover:opacity-100 transition-opacity duration-300"
                style={{ opacity: activeSection === i ? 1 : 0 }}
              >
                <span
                  className="font-['Inter'] text-[7px] tracking-[0.25em] whitespace-nowrap"
                  style={{ color: "#8C6A4A" }}
                >
                  {sec.num} {sec.label}
                </span>
              </motion.div>

              {/* Tick mark */}
              <motion.div
                animate={{
                  width: activeSection === i ? 8 : 4,
                  backgroundColor: activeSection === i ? "#8C6A4A" : "rgba(140,106,74,0.35)",
                }}
                transition={{ duration: 0.3 }}
                className="h-[0.5px]"
              />

              {/* Node dot */}
              <motion.div
                animate={{
                  width: activeSection === i ? 5 : 3,
                  height: activeSection === i ? 5 : 3,
                  backgroundColor: activeSection === i ? "#8C6A4A" : "rgba(140,106,74,0.3)",
                  boxShadow: activeSection === i ? "0 0 8px rgba(140,106,74,0.4)" : "none",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Architectural bracket bottom */}
      <div className="flex flex-col items-center gap-0">
        <div className="w-3 h-[0.5px] bg-[#8C6A4A]/30" />
        <div className="w-[1px] h-4 bg-[#8C6A4A]/30" />
      </div>

      {/* Rotating architectural dial */}
      <motion.div className="relative w-10 h-10 mt-1">
        {/* Outer ring */}
        <svg width="40" height="40" viewBox="0 0 40 40" className="absolute inset-0">
          <circle
            cx="20" cy="20" r="17"
            fill="none"
            stroke="rgba(140,106,74,0.15)"
            strokeWidth="0.5"
          />
          {/* Tick marks around the ring */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * 360;
            const rad = (angle * Math.PI) / 180;
            const innerR = 14;
            const outerR = 17;
            return (
              <line
                key={i}
                x1={20 + innerR * Math.cos(rad - Math.PI / 2)}
                y1={20 + innerR * Math.sin(rad - Math.PI / 2)}
                x2={20 + outerR * Math.cos(rad - Math.PI / 2)}
                y2={20 + outerR * Math.sin(rad - Math.PI / 2)}
                stroke="rgba(140,106,74,0.3)"
                strokeWidth="0.5"
              />
            );
          })}
          {/* Progress arc */}
          <motion.circle
            cx="20" cy="20" r="17"
            fill="none"
            stroke="#8C6A4A"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 17}`}
            style={{
              strokeDashoffset: useTransform(
                scrollYProgress,
                [0, 1],
                [2 * Math.PI * 17, 0]
              ),
              rotate: -90,
              transformOrigin: "center",
            }}
          />
        </svg>

        {/* Rotating inner needle */}
        <motion.div
          style={{ rotate: rotation }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="absolute bg-[#8C6A4A]"
            style={{ width: "0.5px", height: "8px", top: "4px", left: "19.75px", transformOrigin: "bottom center" }}
          />
        </motion.div>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#8C6A4A]/60" />
        </div>

        {/* Percentage readout */}
        <div
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-['Inter'] text-[#8C6A4A]"
          style={{ fontSize: "7px", letterSpacing: "0.1em", whiteSpace: "nowrap" }}
        >
          {String(scrollPct).padStart(2, "0")}%
        </div>
      </motion.div>

      {/* Vertical label */}
      <div
        className="font-['Inter'] text-[#8C6A4A]/30 mt-4"
        style={{
          fontSize: "7px",
          letterSpacing: "0.3em",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        YY · SCROLL
      </div>
    </motion.div>
  );
}
