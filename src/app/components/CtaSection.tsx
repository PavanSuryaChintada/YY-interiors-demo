import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useContent } from "../../context/ContentContext";

interface CtaSectionProps {
  darkTheme?: boolean;
}

export function CtaSection({ darkTheme = true }: CtaSectionProps) {
  const { content } = useContent();
  const { cta } = content;
  const bg = darkTheme ? "#111111" : "#F5F1EA";
  const fg = darkTheme ? "#F5F1EA" : "#111111";
  const accent = "#8C6A4A";

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-8 relative overflow-hidden" style={{ backgroundColor: bg }}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(${fg} 1px, transparent 1px), linear-gradient(90deg, ${fg} 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />

      <div className="max-w-[1000px] mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Inter'] mb-6"
          style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.28em", color: accent }}
        >
          {cta.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Cormorant_Garamond'] mb-10"
          style={{ fontSize: "clamp(28px, 6vw, 68px)", fontWeight: 500, lineHeight: 1.1, color: fg }}
        >
          {cta.heading} <span className="text-[#8C6A4A]">{cta.headingItalic}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Inter'] mb-12 max-w-[600px] mx-auto"
          style={{ fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 300, lineHeight: 1.6, color: darkTheme ? "rgba(245,241,234,0.7)" : "rgba(17,17,17,0.7)" }}
        >
          {cta.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="group relative overflow-hidden flex items-center gap-4 px-10 py-5"
            style={{ backgroundColor: accent, color: "#F5F1EA" }}
          >
            <div className="absolute inset-0 bg-[#7A5A3C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
            <span className="relative z-10 font-['Inter']" style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em" }}>
              {cta.button1}
            </span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.a
            href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 px-10 py-5 font-['Inter']"
            style={{
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: fg,
              border: `1px solid ${darkTheme ? "rgba(245,241,234,0.25)" : "rgba(27,27,27,0.25)"}`,
              textDecoration: "none",
            }}
          >
            {cta.button2}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
