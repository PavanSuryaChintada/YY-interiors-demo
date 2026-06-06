import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useContent } from "../../context/ContentContext";

const navLinks = [
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "SERVICES", href: "#services" },
  { name: "PROCESS", href: "#process" },
  { name: "CONTACT", href: "#contact" },
];

export function Navigation() {
  const { content } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled || isOpen;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-8 md:py-5 transition-all duration-500 ${
          navBg ? "bg-[#F5F1EA]/92 backdrop-blur-xl shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Brand + tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center gap-3 z-50 shrink-0"
          >
            <img
              src="/logo.svg"
              alt="Yellow Yards Interiors"
              className="object-contain shrink-0"
              style={{ height: "40px", width: "auto", maxWidth: "120px" }}
            />
            <div className="flex flex-col gap-0.5">
              <span
                className="font-['Cormorant_Garamond'] tracking-wider transition-colors duration-500 whitespace-nowrap"
                style={{
                  fontSize: "clamp(16px, 3vw, 22px)",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: navBg ? "#1B1B1B" : "#F5F1EA",
                }}
              >
                {content.navigation.brandName}
              </span>
              <span
                className="font-['Inter'] hidden sm:block whitespace-nowrap transition-colors duration-500"
                style={{ fontSize: "8px", fontWeight: 400, letterSpacing: "0.25em", color: navBg ? "#8C6A4A" : "rgba(216,203,184,0.7)" }}
              >
                {content.navigation.tagline}
              </span>
            </div>
          </motion.div>

          {/* Desktop navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="hidden md:flex items-center gap-10 font-['Inter']"
            style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.1em" }}
          >
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors duration-300 hover:text-[#8C6A4A]"
                style={{ color: navBg ? "#1B1B1B" : "#F5F1EA" }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 transition-all duration-300 hover:bg-[#8C6A4A] hover:border-[#8C6A4A] hover:text-[#F5F1EA]"
              style={{
                color: navBg ? "#1B1B1B" : "#F5F1EA",
                border: `1px solid ${navBg ? "rgba(27,27,27,0.3)" : "rgba(245,241,234,0.4)"}`,
              }}
            >
              CONTACT
            </a>
          </motion.div>

          {/* Mobile toggle */}
          <button
            className="md:hidden z-50 p-2 transition-colors duration-500"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: navBg ? "#1B1B1B" : "#F5F1EA" }}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#F5F1EA] flex flex-col items-center justify-center gap-8 md:hidden px-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-['Cormorant_Garamond'] text-4xl tracking-[0.2em] text-[#1B1B1B] hover:text-[#8C6A4A] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 font-['Inter'] text-[10px] tracking-[0.3em] text-[#1B1B1B]/40"
            >
              YY INTERIORS © 2026
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
