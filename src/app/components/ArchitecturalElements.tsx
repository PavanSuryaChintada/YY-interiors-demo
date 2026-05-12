import { motion } from "motion/react";

export function ArchitecturalElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      {/* Technical Grid */}
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="technical-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#8C6A4A" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1.5" fill="#8C6A4A" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#technical-grid)" />
      </svg>

      {/* Abstract Design Flow Lines */}
      <svg width="100%" height="100%" className="absolute inset-0">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M -100 200 Q 300 100 600 400 T 1200 200"
          fill="none"
          stroke="#8C6A4A"
          strokeWidth="1"
          strokeDasharray="10 10"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          d="M 1400 600 Q 1000 800 700 500 T 0 700"
          fill="none"
          stroke="#8C6A4A"
          strokeWidth="1"
        />
        
        {/* Technical Annotations */}
        <g className="font-['Inter'] text-[10px] fill-[#8C6A4A] tracking-widest uppercase">
          <text x="50" y="50">Scale 1:50</text>
          <text x="50" y="70">Ref: Arch-024</text>
          <text x="90%" y="90%">A-102</text>
        </g>

        {/* Geometric Accents */}
        <circle cx="20%" cy="30%" r="40" fill="none" stroke="#8C6A4A" strokeWidth="0.5" strokeDasharray="4 4" />
        <path d="M 20% 30% L 25% 25%" stroke="#8C6A4A" strokeWidth="0.5" />
        <text x="26%" y="24%" className="font-['Inter'] text-[8px] fill-[#8C6A4A]">R 4.0m</text>
      </svg>
    </div>
  );
}

export function FlowIndicator({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{ 
          height: ["0%", "100%", "0%"],
          top: ["0%", "0%", "100%"]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute left-1/2 -translate-x-1/2 w-[1px] bg-[#8C6A4A]"
      />
    </div>
  );
}
