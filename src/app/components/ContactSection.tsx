import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-32 px-8 bg-[#F5F1EA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#8C6A4A]/5 -z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-['Inter'] mb-4" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.2em', color: '#8C6A4A' }}>
              GET IN TOUCH
            </p>
            <h2 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.2, color: '#1B1B1B' }}>
              Let's Design Something Timeless
            </h2>
            <p className="font-['Inter'] mb-12" style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.8, color: '#1B1B1B' }}>
              Begin your journey to a beautifully crafted space. We'd love to hear about your vision.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <Phone size={20} color="#8C6A4A" strokeWidth={1.5} />
                <span className="font-['Inter']" style={{ fontSize: '15px', fontWeight: 400, color: '#1B1B1B' }}>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} color="#8C6A4A" strokeWidth={1.5} />
                <span className="font-['Inter']" style={{ fontSize: '15px', fontWeight: 400, color: '#1B1B1B' }}>hello@yyinteriors.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={20} color="#8C6A4A" strokeWidth={1.5} />
                <span className="font-['Inter']" style={{ fontSize: '15px', fontWeight: 400, color: '#1B1B1B' }}>Mumbai, India</span>
              </div>
            </div>

            <div className="flex gap-6">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-12 h-12 border border-[#1B1B1B]/20 flex items-center justify-center hover:border-[#8C6A4A] hover:bg-[#8C6A4A]/10 transition-all duration-300"
                >
                  <Icon size={20} color="#1B1B1B" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-12 shadow-sm"
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-0 py-4 border-b border-[#1B1B1B]/20 bg-transparent font-['Inter'] focus:border-[#8C6A4A] focus:outline-none transition-colors"
                  style={{ fontSize: '15px', fontWeight: 300, color: '#1B1B1B' }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-0 py-4 border-b border-[#1B1B1B]/20 bg-transparent font-['Inter'] focus:border-[#8C6A4A] focus:outline-none transition-colors"
                  style={{ fontSize: '15px', fontWeight: 300, color: '#1B1B1B' }}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-0 py-4 border-b border-[#1B1B1B]/20 bg-transparent font-['Inter'] focus:border-[#8C6A4A] focus:outline-none transition-colors"
                  style={{ fontSize: '15px', fontWeight: 300, color: '#1B1B1B' }}
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={5}
                  className="w-full px-0 py-4 border-b border-[#1B1B1B]/20 bg-transparent font-['Inter'] focus:border-[#8C6A4A] focus:outline-none transition-colors resize-none"
                  style={{ fontSize: '15px', fontWeight: 300, color: '#1B1B1B' }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#1B1B1B] text-[#F5F1EA] font-['Inter'] hover:bg-[#8C6A4A] transition-colors duration-300"
                style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.15em' }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
