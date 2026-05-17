import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect } from "react";
import { useContent } from "../../context/ContentContext";

export function ProjectDetail() {
  const { slug } = useParams();
  const { content } = useContent();
  const projectData = content.projects.find((p) => p.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!projectData) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F5F1EA]">
        <h1 className="font-['Cormorant_Garamond'] text-4xl">Project Not Found</h1>
        <Link to="/" className="ml-4 underline">Go Home</Link>
      </div>
    );
  }

  // Extend with mock data for fields not yet in CMS
  const project = {
    ...projectData,
    mainImage: projectData.image,
    category: projectData.style,
    client: "Confidential Client",
    area: "850 sqm",
    year: "2025",
    description: "Every element was meticulously sourced and curated to reflect a specific mood. We focused on the tactile experience—from the temperature of the floors to the grain of the paneling.",
    images: [projectData.image, projectData.image, projectData.image, projectData.image],
  };

  // Calculate Next Project
  const currentIndex = content.projects.findIndex((p) => p.id === slug);
  const nextProject = content.projects[(currentIndex + 1) % content.projects.length];

  return (
    <div className="bg-[#F5F1EA] min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#1B1B1B]/30" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="font-['Inter'] text-[#F5F1EA]/80 text-[11px] uppercase tracking-[0.5em] mb-6">
              {project.category} • {project.location}
            </p>
            <h1 className="font-['Cormorant_Garamond'] text-[clamp(64px,12vw,160px)] font-light leading-[0.9] text-[#F5F1EA] mb-12">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "italic font-extralight block" : "block"}>{word} </span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Magazine Content Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Project Specs */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="space-y-8 border-t border-[#1B1B1B]/10 pt-12">
                <div className="flex justify-between items-end">
                  <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#8C6A4A]">Client</span>
                  <span className="font-['Cormorant_Garamond'] text-[24px] text-[#1B1B1B]">{project.client}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#8C6A4A]">Area</span>
                  <span className="font-['Cormorant_Garamond'] text-[24px] text-[#1B1B1B]">{project.area}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#8C6A4A]">Year</span>
                  <span className="font-['Cormorant_Garamond'] text-[24px] text-[#1B1B1B]">{project.year}</span>
                </div>
              </div>

              <blockquote className="font-['Cormorant_Garamond'] text-[28px] italic leading-relaxed text-[#8C6A4A] pl-8 border-l-2 border-[#8C6A4A]/20">
                "Architecture should speak of its time and place, but yearn for timelessness."
              </blockquote>
            </div>
          </div>

          {/* Right: Narrative Description */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="font-['Cormorant_Garamond'] text-[48px] lg:text-[72px] font-light leading-tight text-[#1B1B1B]">
                The Design <span className="italic font-extralight">Narrative</span>
              </h2>
              <div className="columns-1 md:columns-2 gap-12 font-['Inter'] text-[16px] leading-[1.8] text-[#1B1B1B]/80 font-light space-y-8">
                <p className="first-letter:text-6xl first-letter:font-['Cormorant_Garamond'] first-letter:float-left first-letter:mr-4 first-letter:text-[#8C6A4A] first-letter:mt-2">
                  {project.description}
                </p>
                <p>
                  Every element of the {project.title} was meticulously sourced and curated to reflect a specific mood. We focused on the tactile experience—from the temperature of the marble floors to the grain of the reclaimed oak paneling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Layout Gallery */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {project.images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className={`relative overflow-hidden group ${
                idx === 0 ? "md:col-span-8 md:row-span-2" : 
                idx === 1 ? "md:col-span-4 md:row-span-1" :
                idx === 2 ? "md:col-span-4 md:row-span-1" :
                "md:col-span-6 md:row-span-1"
              }`}
            >
              <ImageWithFallback
                src={img}
                alt={`${project.title} detail ${idx + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-[#1B1B1B]/0 group-hover:bg-[#1B1B1B]/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="mt-64 border-t border-[#1B1B1B]/10 pt-24 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
          <p className="font-['Inter'] text-[10px] uppercase tracking-[0.5em] text-[#8C6A4A] mb-8">Next Project</p>
          <Link 
            to={`/project/${nextProject.id}`} 
            className="group font-['Cormorant_Garamond'] text-[clamp(40px,8vw,120px)] font-light italic text-[#1B1B1B] hover:text-[#8C6A4A] transition-colors duration-500 text-center"
          >
            {nextProject.title} →
          </Link>
        </div>
      </section>
    </div>
  );
}
