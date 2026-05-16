import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-8 bg-[#F5F1EA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#8C6A4A]/5 -z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-['Inter'] mb-4" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.28em", color: "#8C6A4A" }}>
              GET IN TOUCH
            </p>
            <h2 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500, lineHeight: 1.15, color: "#1B1B1B" }}>
              Let's Design Something Timeless
            </h2>
            <p className="font-['Inter'] mb-12" style={{ fontSize: "clamp(16px, 1.1vw, 18px)", fontWeight: 400, lineHeight: 1.8, color: "#1B1B1B" }}>
              Begin your journey to a beautifully crafted space. We'd love to hear about your vision.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <Phone size={20} color="#8C6A4A" strokeWidth={1.5} />
                <span className="font-['Inter']" style={{ fontSize: "16px", fontWeight: 400, color: "#1B1B1B" }}>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} color="#8C6A4A" strokeWidth={1.5} />
                <span className="font-['Inter']" style={{ fontSize: "16px", fontWeight: 400, color: "#1B1B1B" }}>hello@yyinteriors.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={20} color="#8C6A4A" strokeWidth={1.5} />
                <span className="font-['Inter']" style={{ fontSize: "16px", fontWeight: 400, color: "#1B1B1B" }}>Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-12 shadow-sm"
          >
            <form className="space-y-6">
              {[
                { type: "text", placeholder: "Your Name" },
                { type: "email", placeholder: "Email Address" },
                { type: "tel", placeholder: "Phone Number" },
              ].map((field) => (
                <input
                  key={field.placeholder}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-0 py-4 border-b border-[#1B1B1B]/20 bg-transparent font-['Inter'] focus:border-[#8C6A4A] focus:outline-none transition-colors"
                  style={{ fontSize: "16px", fontWeight: 400, color: "#1B1B1B" }}
                />
              ))}

              <textarea
                placeholder="Tell us about your project"
                rows={5}
                className="w-full px-0 py-4 border-b border-[#1B1B1B]/20 bg-transparent font-['Inter'] focus:border-[#8C6A4A] focus:outline-none transition-colors resize-none"
                style={{ fontSize: "16px", fontWeight: 400, color: "#1B1B1B" }}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, backgroundColor: "#8C6A4A" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#1B1B1B] text-[#F5F1EA] font-['Inter'] transition-colors duration-300"
                style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.18em" }}
              >
                BOOK CONSULTATION
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

