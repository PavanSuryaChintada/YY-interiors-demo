import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1B1B1B]">
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Luxury interior design"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/90 via-[#1B1B1B]/60 to-[#1B1B1B]/95" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent to-[#1B1B1B]/70" />
        
        {/* Architectural Grid Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" className="opacity-[0.15]">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
              d="M 5% 15% L 95% 15% M 5% 85% L 95% 85%"
              stroke="#F5F1EA"
              strokeWidth="0.5"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
              d="M 15% 5% L 15% 95% M 85% 5% L 85% 95%"
              stroke="#F5F1EA"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-6xl w-full"
        >
          {/* Subtle Prefix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="w-12 h-[1px] bg-[#D8CBB8]/30" />
            <span className="font-['Inter'] uppercase tracking-[0.5em] text-[#D8CBB8] text-[10px] md:text-[12px] font-medium">
              YY INTERIORS • EST. 2012
            </span>
            <div className="w-12 h-[1px] bg-[#D8CBB8]/30" />
          </motion.div>
          
          {/* Main Headline with Split Animation Concept */}
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-['Cormorant_Garamond'] leading-[0.9] md:leading-[0.85]"
              style={{
                fontSize: 'clamp(38px, 7vw, 96px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                color: '#F5F1EA',
                textShadow: '0 10px 40px rgba(0,0,0,0.8)'
              }}
            >
              Designed <span className="italic font-extralight text-[#D8CBB8]">Beyond</span> Trends.<br />
              <span className="relative inline-block mt-2 md:mt-4">
                Crafted for Timeless Living.
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.5, ease: "circOut" }}
                  className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D8CBB8]/40 to-transparent"
                />
              </span>
            </motion.h1>
          </div>

          {/* Descriptive Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="font-['Inter'] mb-16 max-w-3xl mx-auto text-[#F5F1EA]/85"
            style={{
              fontSize: 'clamp(16px, 2.8vw, 22px)',
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: '0.01em',
              textShadow: '0 4px 15px rgba(0,0,0,0.6)'
            }}
          >
            A globally recognized luxury design house specializing in <br className="hidden md:block" />
            bespoke residences and visionary spatial architecture.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#F5F1EA", color: "#1B1B1B" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-14 py-6 border border-[#F5F1EA] font-['Inter'] transition-all duration-500 uppercase tracking-[0.3em] text-[11px] bg-transparent text-[#F5F1EA] font-semibold overflow-hidden"
            >
              <span className="relative z-10">Explore Projects</span>
              <motion.div 
                className="absolute inset-0 bg-[#F5F1EA] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 241, 234, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-14 py-6 border border-[#F5F1EA]/20 font-['Inter'] transition-all duration-500 uppercase tracking-[0.3em] text-[11px] bg-transparent text-[#F5F1EA] backdrop-blur-md"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
        >
          <span className="font-['Inter'] text-[10px] uppercase tracking-[0.4em] text-[#D8CBB8] opacity-60">
            Discover More
          </span>
          <div className="relative w-[1px] h-20 bg-[#F5F1EA]/10 overflow-hidden">
            <motion.div
              animate={{ 
                y: [-80, 80] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#F5F1EA] to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
