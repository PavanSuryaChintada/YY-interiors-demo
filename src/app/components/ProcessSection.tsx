import { motion } from "motion/react";
import { useContent } from "../../context/ContentContext";

export function ProcessSection() {
  const { content } = useContent();
  const stages = content.process;
  return (
    <section id="process" className="py-20 md:py-32 px-6 md:px-8 bg-[#F5F1EA]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-['Inter'] mb-3 md:mb-4" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.28em", color: "#8C6A4A" }}>
            OUR PROCESS
          </p>
          <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 500, lineHeight: 1.15, color: "#1B1B1B" }}>
            From Vision to Reality
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#1B1B1B]/5" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "linear" }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#8C6A4A] origin-top z-10"
          />

          <div className="space-y-12 md:space-y-24">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className="flex-1 pl-12 md:pl-0 text-left md:text-right"
                  style={{ textAlign: index % 2 === 0 ? "right" : "left" }}
                >
                  <div
                    className="font-['Cormorant_Garamond'] mb-1 md:mb-3"
                    style={{ fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 400, color: "#8C6A4A", opacity: 0.25 }}
                  >
                    {stage.number}
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] mb-2 md:mb-3" style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 500, color: "#1B1B1B" }}>
                    {stage.title}
                  </h3>
                  <p
                    className="font-['Inter'] max-w-md"
                    style={{
                      fontSize: "clamp(16px, 1.1vw, 18px)",
                      fontWeight: 400,
                      lineHeight: 1.8,
                      color: "#1B1B1B",
                      marginLeft: index % 2 === 0 ? "auto" : "0",
                      marginRight: index % 2 === 0 ? "0" : "auto",
                    }}
                  >
                    {stage.description}
                  </p>
                </div>

                <div className="absolute left-0 md:relative w-8 h-8 md:w-16 md:h-16 rounded-full border-2 border-[#8C6A4A] bg-[#F5F1EA] flex items-center justify-center z-10 shrink-0">
                  <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#8C6A4A]" />
                </div>

                {/* Spacer for non-content side */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
