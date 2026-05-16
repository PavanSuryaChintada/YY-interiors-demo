import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function ArchitecturalCursor() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const springConfig = { damping: 28, stiffness: 250, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const slowSpringX = useSpring(cursorX, { damping: 40, stiffness: 120 });
  const slowSpringY = useSpring(cursorY, { damping: 40, stiffness: 120 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.closest("a, button, [role='button'], input, textarea, label, select, .cursor-pointer") !== null
      );
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [cursorX, cursorY]);

  const size = isHovering ? 48 : isClicking ? 20 : 32;
  const outerSize = isHovering ? 72 : 56;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer orbit ring — slow follow */}
      <motion.div
        style={{ x: slowSpringX, y: slowSpringY }}
        className="absolute"
      >
        <motion.div
          animate={{
            width: outerSize,
            height: outerSize,
            opacity: isHovering ? 0.6 : 0.25,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute rounded-full border border-[#8C6A4A]"
          style={{
            left: -outerSize / 2,
            top: -outerSize / 2,
            borderStyle: "dashed",
            borderWidth: "0.5px",
          }}
        />
        {/* Rotating tick ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full"
          style={{
            width: outerSize + 16,
            height: outerSize + 16,
            left: -(outerSize + 16) / 2,
            top: -(outerSize + 16) / 2,
            border: "0.5px solid transparent",
          }}
        >
          {[0, 90, 180, 270].map((deg) => (
            <div
              key={deg}
              className="absolute bg-[#8C6A4A]"
              style={{
                width: "4px",
                height: "0.5px",
                opacity: 0.5,
                top: "50%",
                left: deg === 0 ? "0px" : deg === 180 ? "calc(100% - 4px)" : "50%",
                transform:
                  deg === 90
                    ? "rotate(90deg) translateX(-50%) translateY(-50%)"
                    : deg === 270
                    ? "rotate(90deg) translateX(-50%) translateY(-50%)"
                    : "translateY(-50%)",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Core precision dot — fast follow */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute"
      >
        {/* Crosshair lines */}
        <motion.div
          animate={{
            scaleX: isHovering ? 1.6 : 1,
            opacity: isHovering ? 0.5 : 0.3,
          }}
          transition={{ duration: 0.25 }}
          className="absolute bg-[#8C6A4A]"
          style={{
            width: "20px",
            height: "0.5px",
            left: "-10px",
            top: "-0.25px",
          }}
        />
        <motion.div
          animate={{
            scaleY: isHovering ? 1.6 : 1,
            opacity: isHovering ? 0.5 : 0.3,
          }}
          transition={{ duration: 0.25 }}
          className="absolute bg-[#8C6A4A]"
          style={{
            width: "0.5px",
            height: "20px",
            left: "-0.25px",
            top: "-10px",
          }}
        />

        {/* Center dot */}
        <motion.div
          animate={{
            width: isClicking ? 2 : 3,
            height: isClicking ? 2 : 3,
            backgroundColor: isHovering ? "#F5F1EA" : "#8C6A4A",
          }}
          transition={{ duration: 0.15 }}
          className="absolute rounded-full"
          style={{ left: "-1.5px", top: "-1.5px" }}
        />

        {/* Precision inner circle */}
        <motion.div
          animate={{
            width: size,
            height: size,
            opacity: isHovering ? 0.35 : 0.15,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute rounded-full border border-[#8C6A4A]"
          style={{
            left: -size / 2,
            top: -size / 2,
            borderWidth: "0.5px",
          }}
        />

        {/* Corner brackets */}
        {[
          { top: -10, left: -10, rotate: 0 },
          { top: -10, right: -10, rotate: 90 },
          { bottom: -10, right: -10, rotate: 180 },
          { bottom: -10, left: -10, rotate: 270 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            animate={{ opacity: isHovering ? 0.7 : 0.3, scale: isHovering ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute"
            style={{
              top: pos.top,
              left: "left" in pos ? pos.left : undefined,
              right: "right" in pos ? pos.right : undefined,
              bottom: pos.bottom,
              width: "6px",
              height: "6px",
              borderTop: i < 2 ? "0.5px solid #8C6A4A" : "none",
              borderBottom: i >= 2 ? "0.5px solid #8C6A4A" : "none",
              borderLeft: i === 0 || i === 3 ? "0.5px solid #8C6A4A" : "none",
              borderRight: i === 1 || i === 2 ? "0.5px solid #8C6A4A" : "none",
            }}
          />
        ))}

        {/* Coordinate readout */}
        <motion.div
          animate={{ opacity: isHovering ? 0 : 0.65 }}
          transition={{ duration: 0.2 }}
          className="absolute font-['Inter'] text-[#8C6A4A] pointer-events-none"
          style={{
            fontSize: "8px",
            letterSpacing: "0.08em",
            top: "14px",
            left: "10px",
            whiteSpace: "nowrap",
          }}
        >
          <div>{String(coords.x).padStart(4, "0")} · {String(coords.y).padStart(4, "0")}</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
