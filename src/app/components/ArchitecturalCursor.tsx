import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function ArchitecturalCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const unsubX = springX.on("change", (latest) => {
      setCoords((prev) => ({ ...prev, x: Math.round(latest) }));
    });
    const unsubY = springY.on("change", (latest) => {
      setCoords((prev) => ({ ...prev, y: Math.round(latest) }));
    });

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      unsubX();
      unsubY();
    };
  }, [cursorX, cursorY, springX, springY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="relative"
      >
        {/* Crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[60px] h-[0.5px] bg-[#8C6A4A]/30" />
          <div className="h-[60px] w-[0.5px] bg-[#8C6A4A]/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Coordinates */}
        <div 
          className="absolute top-6 left-6 font-['Inter'] text-[9px] text-[#8C6A4A] flex flex-col gap-0.5 opacity-80"
          style={{ letterSpacing: '0.1em' }}
        >
          <div className="flex justify-between w-14">
            <span className="opacity-40">X.POS</span>
            <span>{coords.x.toString().padStart(4, '0')}</span>
          </div>
          <div className="flex justify-between w-14">
            <span className="opacity-40">Y.POS</span>
            <span>{coords.y.toString().padStart(4, '0')}</span>
          </div>
          <div className="mt-1 pt-1 border-t border-[#8C6A4A]/20">
            <span className="opacity-40">REF.SYST</span>
          </div>
        </div>

        {/* Circle accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#8C6A4A]/10 scale-50" />
      </motion.div>
    </div>
  );
}
