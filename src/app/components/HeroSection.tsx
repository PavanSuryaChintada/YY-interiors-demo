import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1B1B1B]">
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Luxury interior design"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/70 via-transparent to-[#1B1B1B]/80" />
        
        {/* Floating Architectural Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="opacity-20">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
              d="M 10% 20% L 90% 20% M 10% 80% L 90% 80%"
              stroke="#F5F1EA"
              strokeWidth="0.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
              d="M 20% 10% L 20% 90% M 80% 10% L 80% 90%"
              stroke="#F5F1EA"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="font-['Inter'] mb-6 uppercase"
            style={{ fontSize: '12px', fontWeight: 400, color: '#D8CBB8' }}
          >
            YY INTERIORS • EST. 2012
          </motion.p>
          
          <h1
            className="font-['Cormorant_Garamond'] mb-6"
            style={{
              fontSize: 'clamp(40px, 8vw, 110px)',
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: '-0.01em',
              color: '#F5F1EA'
            }}
          >
            Designed Beyond Trends.<br />
            <span className="italic">Crafted for Timeless Living.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-['Inter'] mb-12 max-w-2xl mx-auto opacity-70"
            style={{
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 300,
              lineHeight: 1.8,
              letterSpacing: '0.02em',
              color: '#F5F1EA'
            }}
          >
            A globally recognized luxury design house specializing in bespoke residences and visionary spatial architecture.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 241, 234, 1)", color: "#1B1B1B" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border border-[#F5F1EA] font-['Inter'] transition-all duration-500 uppercase tracking-widest text-[11px] bg-transparent text-[#F5F1EA]"
            >
              Explore Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 241, 234, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border border-[#F5F1EA]/30 font-['Inter'] transition-all duration-500 uppercase tracking-widest text-[11px] bg-transparent text-[#F5F1EA]"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="font-['Inter'] text-[9px] uppercase tracking-[0.3em] opacity-40 text-[#F5F1EA]">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#F5F1EA] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

