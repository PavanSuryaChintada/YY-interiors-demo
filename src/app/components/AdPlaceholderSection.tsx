import { motion } from "motion/react";

interface AdPlaceholderSectionProps {
  size?: "leaderboard" | "medium-rectangle";
}

export function AdPlaceholderSection({ size = "leaderboard" }: AdPlaceholderSectionProps) {
  const isLeaderboard = size === "leaderboard";
  
  return (
    <section className="py-12 px-8 flex justify-center items-center bg-[#F5F1EA]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border border-[#1B1B1B]/10 bg-[#1B1B1B]/5 flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          width: "100%",
          maxWidth: isLeaderboard ? "728px" : "300px",
          height: isLeaderboard ? "90px" : "250px",
        }}
      >
        <span className="font-['Inter'] text-[#1B1B1B]/40" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em" }}>
          ADVERTISEMENT
        </span>
        <span className="font-['Inter'] text-[#1B1B1B]/30 mt-1" style={{ fontSize: "9px" }}>
          {isLeaderboard ? "728 x 90" : "300 x 250"}
        </span>
      </motion.div>
    </section>
  );
}
