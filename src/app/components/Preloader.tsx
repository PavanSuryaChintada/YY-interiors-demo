import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth counter: 0→100 over ~1.0s
    let count = 0;
    const interval = setInterval(() => {
      count += 2; // Increment by 2 to speed it up
      setProgress(Math.min(count, 100));
      if (count >= 100) clearInterval(interval);
    }, 20);

    const exitTimer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#111111" }}
        >
          {/* Architectural grid lines */}
          {[0.25, 0.5, 0.75].map((pos, i) => (
            <motion.div
              key={pos}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
              className="absolute top-0 bottom-0 w-[1px] origin-top pointer-events-none"
              style={{ left: `${pos * 100}%`, background: "rgba(245,241,234,0.035)" }}
            />
          ))}
          {[0.3, 0.7].map((pos, i) => (
            <motion.div
              key={pos}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.05 }}
              className="absolute left-0 right-0 h-[1px] origin-left pointer-events-none"
              style={{ top: `${pos * 100}%`, background: "rgba(245,241,234,0.025)" }}
            />
          ))}

          {/* Center content */}
          <div className="flex flex-col items-center">
            {/* Top bronze rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="mb-8 origin-left"
              style={{ width: "clamp(120px, 15vw, 200px)", height: "1px", background: "#8C6A4A" }}
            />

            {/* Brand name — clip reveal */}
            <div style={{ overflow: "hidden", marginBottom: "10px" }}>
              <motion.div
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className="font-['Cormorant_Garamond'] text-[#F5F1EA] text-center"
                style={{
                  fontSize: "clamp(28px, 4.5vw, 58px)",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                }}
              >
                YY INTERIORS
              </motion.div>
            </div>

            {/* Tagline — clip reveal */}
            <div style={{ overflow: "hidden", marginBottom: "28px" }}>
              <motion.div
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                className="font-['Inter'] text-center"
                style={{
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "0.28em",
                  color: "#8C6A4A",
                }}
              >
                ELITE INTERIOR ARCHITECTURE STUDIO
              </motion.div>
            </div>

            {/* Bottom rule (dimmer) */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="mb-8 origin-left"
              style={{ width: "clamp(120px, 15vw, 200px)", height: "1px", background: "rgba(140,106,74,0.35)" }}
            />

            {/* Progress track */}
            <div
              style={{
                width: "clamp(120px, 15vw, 200px)",
                height: "1px",
                background: "rgba(245,241,234,0.08)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, ease: "linear", delay: 0.3 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#8C6A4A",
                  transformOrigin: "left",
                }}
              />
            </div>

            {/* Percentage counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-3 font-['Inter'] tabular-nums text-center"
              style={{
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.2em",
                color: "rgba(245,241,234,0.28)",
              }}
            >
              {String(progress).padStart(2, "0")}%
            </motion.div>
          </div>

          {/* Italic quote at bottom */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-14 font-['Cormorant_Garamond'] italic text-center px-8"
            style={{
              fontSize: "clamp(13px, 1.8vw, 18px)",
              fontWeight: 300,
              color: "rgba(245,241,234,0.28)",
              letterSpacing: "0.03em",
            }}
          >
            "Crafting timeless spaces that reflect your unique story."
          </motion.p>

          {/* Corner coordinates (ultra-luxury micro-detail) */}
          {[
            { style: { top: "32px", left: "40px" }, text: "28°36'N 77°12'E" },
            { style: { top: "32px", right: "40px" }, text: "EST. 2009" },
            { style: { bottom: "32px", left: "40px" }, text: "MUMBAI — NEW DELHI" },
            { style: { bottom: "32px", right: "40px" }, text: "YY — 2026" },
          ].map((corner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.05 }}
              className="absolute font-['Inter']"
              style={{
                ...corner.style,
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                color: "rgba(245,241,234,0.18)",
              }}
            >
              {corner.text}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
