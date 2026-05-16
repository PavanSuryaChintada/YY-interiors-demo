import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";

export function Navigation() {
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

  const navLinks = [
    { name: "PORTFOLIO", href: "/#portfolio" },
    { name: "SERVICES", href: "/#services" },
    { name: "PROCESS", href: "/#process" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-8 md:py-6 transition-all duration-500 ${
          scrolled || isOpen || isProjectPage ? "bg-[#F5F1EA]/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-['Cormorant_Garamond'] tracking-wider transition-colors duration-500 z-50 cursor-pointer"
              style={{ 
                fontSize: 'clamp(20px, 4vw, 28px)', 
                fontWeight: 300, 
                letterSpacing: '0.12em', 
                color: (scrolled || isOpen || isProjectPage) ? '#1B1B1B' : '#F5F1EA' 
              }}
            >
              YY INTERIORS
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 font-['Cormorant_Garamond'] transition-colors duration-500" style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '0.15em', color: (scrolled || isProjectPage) ? '#1B1B1B' : '#F5F1EA' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="hover:opacity-60 transition-opacity duration-300 italic"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 transition-colors duration-500"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: (scrolled || isOpen) ? '#1B1B1B' : '#F5F1EA' }}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#F5F1EA] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-['Cormorant_Garamond'] text-4xl tracking-[0.2em] text-[#1B1B1B] hover:opacity-50 transition-opacity"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex flex-col items-center gap-2"
            >
              <p className="font-['Inter'] text-[10px] tracking-[0.3em] text-[#1B1B1B]/40">YY INTERIORS © 2024</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
