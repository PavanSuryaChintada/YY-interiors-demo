import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-500 ${
        scrolled ? "bg-[#F5F1EA]/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-['Cormorant_Garamond'] tracking-wider"
          style={{ fontSize: '28px', fontWeight: 300, letterSpacing: '0.12em', color: '#1B1B1B' }}
        >
          YY INTERIORS
        </motion.div>

        <div className="flex items-center gap-12 font-['Inter']" style={{ fontSize: '14px', fontWeight: 400, letterSpacing: '0.05em', color: '#1B1B1B' }}>
          <a href="#portfolio" className="hover:opacity-60 transition-opacity duration-300">PORTFOLIO</a>
          <a href="#services" className="hover:opacity-60 transition-opacity duration-300">SERVICES</a>
          <a href="#process" className="hover:opacity-60 transition-opacity duration-300">PROCESS</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity duration-300">CONTACT</a>
        </div>
      </div>
    </motion.nav>
  );
}
