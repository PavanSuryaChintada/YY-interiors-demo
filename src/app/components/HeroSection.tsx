import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/60 via-[#1B1B1B]/40 to-[#1B1B1B]/70" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <h1
            className="font-['Cormorant_Garamond'] mb-8"
            style={{
              fontSize: 'clamp(48px, 7vw, 96px)',
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: '0.02em',
              color: '#F5F1EA'
            }}
          >
            Designing Spaces That Feel Timeless
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-['Inter'] mb-12 max-w-2xl mx-auto"
            style={{
              fontSize: '18px',
              fontWeight: 300,
              lineHeight: 1.8,
              letterSpacing: '0.05em',
              color: '#D8CBB8'
            }}
          >
            Award-winning luxury interior design studio crafting emotionally immersive spaces with architectural precision
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border border-[#F5F1EA]/30 font-['Inter'] hover:bg-[#F5F1EA]/10 transition-all duration-300"
            style={{
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              color: '#F5F1EA'
            }}
          >
            EXPLORE PORTFOLIO
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} color="#F5F1EA" strokeWidth={1} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
