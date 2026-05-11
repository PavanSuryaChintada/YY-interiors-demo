import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-12 px-8 bg-[#1B1B1B] border-t border-[#F5F1EA]/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-['Cormorant_Garamond'] tracking-wider"
            style={{ fontSize: '24px', fontWeight: 300, letterSpacing: '0.12em', color: '#F5F1EA' }}
          >
            YY INTERIORS
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Inter']"
            style={{ fontSize: '13px', fontWeight: 300, color: '#D8CBB8' }}
          >
            © 2026 YY Interiors. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-8 font-['Inter']"
            style={{ fontSize: '13px', fontWeight: 300, color: '#D8CBB8' }}
          >
            <a href="#" className="hover:text-[#8C6A4A] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#8C6A4A] transition-colors">Terms of Service</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
