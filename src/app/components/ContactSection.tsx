import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-48 px-6 md:px-12 bg-[#1B1B1B] overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 opacity-40">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3Nzg0NDExNjN8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Luxury Interior Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/60 to-[#1B1B1B]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-['Inter'] mb-6 text-[#8C6A4A] text-[11px] uppercase tracking-[0.4em] font-medium">
              Consultation
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,72px)] font-light leading-[1.1] text-[#F5F1EA] mb-8">
              Let’s Create <br />
              <span className="italic">Something Timeless.</span>
            </h2>
            <p className="font-['Inter'] text-[18px] leading-[1.8] text-[#F5F1EA]/70 font-light mb-12 max-w-md">
              An extraordinary space begins with a bold vision. Partner with us to craft a legacy of elegance.
            </p>
            
            <div className="space-y-4">
              <p className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#8C6A4A]">Studio Presence</p>
              <div className="grid grid-cols-2 gap-8 font-['Cormorant_Garamond'] text-[#F5F1EA] text-[20px]">
                <p>Mumbai • <span className="opacity-50 text-[14px] font-['Inter']">Design HQ</span></p>
                <p>Dubai • <span className="opacity-50 text-[14px] font-['Inter']">Global Studio</span></p>
                <p>London • <span className="opacity-50 text-[14px] font-['Inter']">Curation Lab</span></p>
                <p>Singapore • <span className="opacity-50 text-[14px] font-['Inter']">Execution Office</span></p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-2xl p-10 md:p-16 border border-[#F5F1EA]/10"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <label className="font-['Inter'] text-[9px] uppercase tracking-widest text-[#8C6A4A] absolute -top-4 left-0 opacity-0 group-focus-within:opacity-100 transition-opacity">Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-[#F5F1EA]/20 py-4 font-['Inter'] text-[#F5F1EA] focus:outline-none focus:border-[#8C6A4A] transition-colors"
                  />
                </div>
                <div className="group relative">
                  <label className="font-['Inter'] text-[9px] uppercase tracking-widest text-[#8C6A4A] absolute -top-4 left-0 opacity-0 group-focus-within:opacity-100 transition-opacity">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-[#F5F1EA]/20 py-4 font-['Inter'] text-[#F5F1EA] focus:outline-none focus:border-[#8C6A4A] transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <label className="font-['Inter'] text-[9px] uppercase tracking-widest text-[#8C6A4A] absolute -top-4 left-0 opacity-0 group-focus-within:opacity-100 transition-opacity">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-[#F5F1EA]/20 py-4 font-['Inter'] text-[#F5F1EA] focus:outline-none focus:border-[#8C6A4A] transition-colors"
                  />
                </div>
                <div className="group relative">
                  <label className="font-['Inter'] text-[9px] uppercase tracking-widest text-[#8C6A4A] absolute -top-4 left-0 opacity-0 group-focus-within:opacity-100 transition-opacity">Project Location</label>
                  <input
                    type="text"
                    placeholder="Project Location (City, Country)"
                    className="w-full bg-transparent border-b border-[#F5F1EA]/20 py-4 font-['Inter'] text-[#F5F1EA] focus:outline-none focus:border-[#8C6A4A] transition-colors"
                  />
                </div>
              </div>

              <div className="group relative">
                <textarea
                  placeholder="Tell us about your vision..."
                  rows={6}
                  className="w-full bg-transparent border-b border-[#F5F1EA]/20 py-4 font-['Inter'] text-[#F5F1EA] focus:outline-none focus:border-[#8C6A4A] transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#F5F1EA", color: "#1B1B1B" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#8C6A4A] text-[#F5F1EA] font-['Inter'] uppercase tracking-[0.3em] text-[12px] font-medium transition-all duration-500"
              >
                Inquire Excellence
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

