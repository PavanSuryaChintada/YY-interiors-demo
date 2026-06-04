import { motion } from "motion/react";
import { useContent } from "../../context/ContentContext";

export function Footer() {
  const { content } = useContent();
  return (
    <footer className="py-12 px-4 sm:px-8 bg-[#1B1B1B] border-t border-[#F5F1EA]/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-0.5"
          >
            <span
              className="font-['Cormorant_Garamond'] tracking-wider"
              style={{ fontSize: "24px", fontWeight: 500, letterSpacing: "0.12em", color: "#F5F1EA" }}
            >
              {content.footer.brandName}
            </span>
            <span
              className="font-['Inter']"
              style={{ fontSize: "9px", fontWeight: 400, letterSpacing: "0.25em", color: "#8C6A4A" }}
            >
              {content.footer.tagline}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-1"
          >
            <p className="font-['Inter']" style={{ fontSize: "13px", fontWeight: 400, color: "#D8CBB8" }}>
              {content.footer.copyright}
            </p>
            <p className="font-['Inter']" style={{ fontSize: "11px", fontWeight: 400, color: "#8C6A4A", letterSpacing: "0.05em" }}>
              Developed by{" "}
              <a
                href="https://artechstudio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 500, color: "#8C6A4A", textDecoration: "none" }}
                className="hover:text-[#D8CBB8] transition-colors duration-300"
              >
                AR Tech Studio
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-8 font-['Inter']"
            style={{ fontSize: "13px", fontWeight: 400, color: "#D8CBB8" }}
          >
            <a href="#" className="hover:text-[#8C6A4A] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#8C6A4A] transition-colors">Terms of Service</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
