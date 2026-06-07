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
          navBg ? "bg-[#F5F1EA]/92 backdrop-blur-xl shadow-sm" : "bg-[#1B1B1B]/20 backdrop-blur-sm"
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
              src="https://res.cloudinary.com/dsqeawg67/image/upload/v1780823592/YY_Logo_Squre_pofbfw.png"
              alt="Yellow Yards Interiors"
              className="object-contain shrink-0"
              style={{ height: "72px", width: "72px", objectFit: "contain" }}
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
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#1B1B1B] flex flex-col md:hidden overflow-hidden"
          >
            {/* Top strip — logo echo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-3 px-6 pt-6 pb-8"
            >
              <img
                src="https://res.cloudinary.com/dsqeawg67/image/upload/v1780823592/YY_Logo_Squre_pofbfw.png"
                alt=""
                className="object-contain opacity-90"
                style={{ height: "44px", width: "44px", objectFit: "contain" }}
              />
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-[0.5px] bg-[#F5F1EA]/10 mx-6 origin-left"
            />

            {/* Nav items */}
            <nav className="flex flex-col justify-center flex-1 px-6 gap-0">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-baseline gap-5 py-5 border-b border-[#F5F1EA]/8 last:border-b-0"
                >
                  <span
                    className="font-['Inter'] text-[#8C6A4A] shrink-0 transition-opacity duration-300 group-hover:opacity-100 opacity-60"
                    style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em" }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="font-['Cormorant_Garamond'] text-[#F5F1EA] group-hover:text-[#8C6A4A] transition-colors duration-300 leading-none"
                    style={{ fontSize: "clamp(36px, 10vw, 52px)", fontWeight: 400, letterSpacing: "0.05em" }}
                  >
                    {link.name}
                  </span>
                  <motion.span
                    className="ml-auto font-['Inter'] text-[#F5F1EA]/20 group-hover:text-[#8C6A4A]/60 transition-colors duration-300"
                    style={{ fontSize: "18px" }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom contact strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="px-6 pb-10 pt-6 border-t border-[#F5F1EA]/10 flex items-center justify-between"
            >
              <div className="space-y-1">
                <p className="font-['Inter'] text-[#F5F1EA]/30" style={{ fontSize: "9px", letterSpacing: "0.25em" }}>
                  HYDERABAD, INDIA
                </p>
                <p className="font-['Inter'] text-[#D8CBB8]" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
                  LUXURY INTERIORS
                </p>
              </div>
              <p className="font-['Inter'] text-[#F5F1EA]/20" style={{ fontSize: "9px", letterSpacing: "0.2em" }}>
                © 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
