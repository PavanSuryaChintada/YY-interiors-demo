import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { useContent } from "../../context/ContentContext";

type Status = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const { content } = useContent();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    try {
      // Route through Vercel function to avoid CORS restrictions on Google Workspace scripts
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full px-0 py-4 border-b border-[#1B1B1B]/20 bg-transparent font-['Inter'] focus:border-[#8C6A4A] focus:outline-none transition-colors placeholder:text-[#1B1B1B]/40";
  const inputStyle = { fontSize: "16px", fontWeight: 400, color: "#1B1B1B" };

  return (
    <section id="contact" className="pt-10 pb-10 md:pt-16 md:pb-12 px-4 sm:px-6 md:px-8 bg-[#F5F1EA] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#8C6A4A]/5 -z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-['Inter'] mb-4" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.28em", color: "#8C6A4A" }}>
              {content.contact.eyebrow}
            </p>
            <h2 className="font-['Cormorant_Garamond'] mb-6" style={{ fontSize: "clamp(26px, 5.5vw, 60px)", fontWeight: 500, lineHeight: 1.15, color: "#1B1B1B" }}>
              {content.contact.heading}
            </h2>
            <p className="font-['Inter'] mb-12" style={{ fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 400, lineHeight: 1.8, color: "#1B1B1B" }}>
              {content.contact.subheading}
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <Phone size={20} color="#8C6A4A" strokeWidth={1.5} />
                <span className="font-['Inter']" style={{ fontSize: "16px", fontWeight: 400, color: "#1B1B1B" }}>{content.contact.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} color="#8C6A4A" strokeWidth={1.5} />
                <span className="font-['Inter']" style={{ fontSize: "16px", fontWeight: 400, color: "#1B1B1B" }}>{content.contact.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={20} color="#8C6A4A" strokeWidth={1.5} />
                <span className="font-['Inter']" style={{ fontSize: "16px", fontWeight: 400, color: "#1B1B1B" }}>{content.contact.address}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden"
          >
            {/* Success overlay */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-white flex flex-col items-center justify-center p-12 z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <CheckCircle size={48} color="#8C6A4A" strokeWidth={1} />
                  </motion.div>
                  <h3 className="font-['Cormorant_Garamond'] mt-6 mb-3 text-center" style={{ fontSize: "28px", fontWeight: 500, color: "#1B1B1B" }}>
                    Message Received
                  </h3>
                  <p className="font-['Inter'] text-center" style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.7, color: "#1B1B1B/70" }}>
                    Thank you for reaching out. We'll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 font-['Inter']"
                    style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", color: "#8C6A4A", background: "none", border: "none", cursor: "pointer" }}
                  >
                    SEND ANOTHER →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={set("name")}
                className={inputClass}
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={set("email")}
                className={inputClass}
                style={inputStyle}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={set("phone")}
                className={inputClass}
                style={inputStyle}
              />
              <textarea
                placeholder="Tell us about your project"
                rows={5}
                required
                value={form.message}
                onChange={set("message")}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />

              {/* Error message */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-red-500"
                  >
                    <AlertCircle size={14} strokeWidth={1.5} />
                    <span className="font-['Inter']" style={{ fontSize: "12px", fontWeight: 400 }}>
                      Something went wrong. Please try again or email us directly.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={status !== "sending" ? { scale: 1.02, backgroundColor: "#8C6A4A" } : {}}
                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                className="w-full py-5 bg-[#1B1B1B] text-[#F5F1EA] font-['Inter'] transition-colors duration-300 relative overflow-hidden"
                style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.18em", opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center gap-3">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-3.5 h-3.5 border border-[#F5F1EA]/40 border-t-[#F5F1EA] rounded-full"
                    />
                    SENDING…
                  </span>
                ) : "BOOK CONSULTATION"}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
