import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: "Residential Interiors",
    description: "Complete home transformations with architectural sophistication",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Luxury Living Rooms",
    description: "Curated spaces for elevated everyday living",
    image: "https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Modular Kitchens",
    description: "Where functionality meets refined aesthetics",
    image: "https://images.unsplash.com/photo-1704383014594-01bc24b6b840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc4NDQxMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Bedroom Design",
    description: "Sanctuaries of comfort and tranquility",
    image: "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc4NDQxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Commercial Interiors",
    description: "Brand experiences through spatial design",
    image: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Space Planning",
    description: "Optimizing flow and spatial harmony",
    image: "https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Furniture Styling",
    description: "Curated selections and custom pieces",
    image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bHV4dXJ5JTIwaW50ZXJpb3IlMjBkZXNpZ25lciUyMHJvb218ZW58MXx8fHx8&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Renovation & Execution",
    description: "End-to-end project realization",
    image: "https://images.unsplash.com/photo-1672927936377-97d1be3976cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

// Double the services for seamless looping
const extendedServices = [...services, ...services];

export function ServicesSection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTime = 0;
    const speed = 1; // Pixels per frame approx

    const scroll = (time: number) => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += speed;
        
        // Loop logic: if we reached the end of the first set of items
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="services" ref={ref} className="py-20 md:py-32 bg-[#1B1B1B] overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="font-['Inter'] mb-3 md:mb-4" style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.2em', color: '#8C6A4A' }}>
            SERVICES
          </p>
          <h2 className="font-['Cormorant_Garamond']" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.2, color: '#F5F1EA' }}>
            What We Create
          </h2>
        </motion.div>
      </div>

      <div 
        ref={scrollRef}
        className="relative flex overflow-x-auto scrollbar-hide select-none active:cursor-grabbing cursor-grab"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        style={{ scrollBehavior: 'auto' }}
      >
        <div className="flex gap-6 md:gap-8 px-6 md:px-8" style={{ width: 'max-content' }}>
          {extendedServices.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group flex-shrink-0"
              style={{ width: 'clamp(280px, 80vw, 400px)', height: 'clamp(350px, 60vh, 500px)' }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/95 via-[#1B1B1B]/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="translate-y-0">
                  <h3 className="font-['Cormorant_Garamond'] mb-2 md:mb-3" style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: '#F5F1EA' }}>
                    {service.title}
                  </h3>
                  <p className="font-['Inter']" style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 300, lineHeight: 1.6, color: '#D8CBB8' }}>
                    {service.description}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-[2px] bg-[#8C6A4A] origin-left"
                style={{ width: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
