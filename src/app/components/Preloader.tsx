import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1B1B1B]"
        >
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2
              }}
              className="font-['Cormorant_Garamond'] tracking-[0.2em] text-[#F5F1EA]"
              style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 300 }}
            >
              YY INTERIORS
            </motion.div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.76, 0, 0.24, 1],
                delay: 0.5
              }}
              className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#F5F1EA]/30 origin-left"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-24 font-['Cormorant_Garamond'] italic text-[#F5F1EA]/60 tracking-widest text-center px-8"
            style={{ fontSize: '18px', fontWeight: 300 }}
          >
            "Crafting timeless spaces that reflect your unique story."
          </motion.div>

          {/* Background animation elements */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/[0.03]"
          />
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="absolute left-2/4 top-0 bottom-0 w-[1px] bg-white/[0.03]"
          />
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-white/[0.03]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
