import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "YY Interiors transformed our home into a sanctuary. Every detail reflects our personality while maintaining an elevated aesthetic we never thought possible.",
    client: "Ananya Sharma",
    project: "Modern Residence, Mumbai"
  },
  {
    quote: "The level of craftsmanship and attention to detail is extraordinary. Our space feels like it belongs in a design magazine, yet it's deeply personal.",
    client: "Rajesh Malhotra",
    project: "Luxury Penthouse, Delhi"
  },
  {
    quote: "Working with YY Interiors was a masterclass in design. They listened, understood, and delivered beyond our wildest expectations.",
    client: "Priya Menon",
    project: "Contemporary Villa, Bangalore"
  }
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-8 bg-[#1B1B1B]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-['Inter'] mb-4" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.2em', color: '#8C6A4A' }}>
            CLIENT TESTIMONIALS
          </p>
          <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.2, color: '#F5F1EA' }}>
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-10 bg-[#F5F1EA]/5 backdrop-blur-sm border border-[#F5F1EA]/10 hover:bg-[#F5F1EA]/10 transition-all duration-500"
            >
              <Quote size={40} color="#8C6A4A" strokeWidth={1} className="mb-6 opacity-50" />

              <p className="font-['Inter'] mb-8" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.9, color: '#F5F1EA', fontStyle: 'italic' }}>
                "{testimonial.quote}"
              </p>

              <div className="border-t border-[#F5F1EA]/20 pt-6">
                <p className="font-['Cormorant_Garamond'] mb-1" style={{ fontSize: '20px', fontWeight: 400, color: '#F5F1EA' }}>
                  {testimonial.client}
                </p>
                <p className="font-['Inter']" style={{ fontSize: '13px', fontWeight: 300, color: '#D8CBB8' }}>
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
