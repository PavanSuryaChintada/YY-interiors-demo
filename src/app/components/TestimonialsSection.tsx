import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useContent } from "../../context/ContentContext";

export function TestimonialsSection() {
  const { content } = useContent();
  return (
    <section className="py-14 px-4 sm:px-8 bg-[#1B1B1B]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <p className="font-['Inter'] mb-4" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.28em", color: "#8C6A4A" }}>
            CLIENT TESTIMONIALS
          </p>
          <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 500, lineHeight: 1.15, color: "#F5F1EA" }}>
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-10 bg-[#F5F1EA]/5 backdrop-blur-sm border border-[#F5F1EA]/10 hover:bg-[#F5F1EA]/10 transition-all duration-500"
            >
              <Quote size={40} color="#8C6A4A" strokeWidth={1} className="mb-6 opacity-50" />

              <p
                className="font-['Inter'] mb-8"
                style={{ fontSize: "clamp(15px, 1vw, 17px)", fontWeight: 400, lineHeight: 1.9, color: "#F5F1EA" }}
              >
                "{testimonial.quote}"
              </p>

              <div className="border-t border-[#F5F1EA]/20 pt-6">
                <p className="font-['Cormorant_Garamond'] mb-1" style={{ fontSize: "20px", fontWeight: 500, color: "#F5F1EA" }}>
                  {testimonial.client}
                </p>
                <p className="font-['Inter']" style={{ fontSize: "13px", fontWeight: 400, color: "#D8CBB8" }}>
                  {testimonial.project}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
