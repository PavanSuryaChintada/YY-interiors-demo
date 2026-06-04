import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { useContent } from "../../context/ContentContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect } from "react";

export function ProjectDetail() {
  const { slug } = useParams();
  const { content } = useContent();
  const projects = content.projects;
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F5F1EA] flex-col gap-4">
        <h1 className="font-['Cormorant_Garamond'] text-4xl text-[#1B1B1B]">Project Not Found</h1>
        <Link to="/" className="font-['Inter'] text-sm text-[#8C6A4A] underline underline-offset-4">Go Home</Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="bg-[#F5F1EA] min-h-screen pb-32">

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={project.mainImage || project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#1B1B1B]/40" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="font-['Inter'] text-[#F5F1EA]/70 text-[11px] uppercase tracking-[0.4em] mb-4">
              {project.category} · {project.location}
            </p>
            <h1
              className="font-['Cormorant_Garamond'] font-light leading-[1] text-[#F5F1EA]"
              style={{ fontSize: "clamp(40px, 10vw, 120px)" }}
            >
              {project.title}
            </h1>
          </motion.div>
        </div>

        {/* Back button */}
        <Link
          to="/"
          className="absolute top-24 left-6 md:left-12 font-['Inter'] text-[11px] uppercase tracking-[0.3em] text-[#F5F1EA]/70 hover:text-[#F5F1EA] transition-colors flex items-center gap-2"
        >
          ← Back
        </Link>
      </section>

      {/* Content */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 mt-16 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left: specs */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-10 border-t border-[#1B1B1B]/10 pt-10">
              {[
                { label: "Client", value: project.client },
                { label: "Area", value: project.area },
                { label: "Year", value: project.year },
                { label: "Style", value: project.style },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-baseline gap-4">
                  <span className="font-['Inter'] text-[10px] uppercase tracking-widest text-[#8C6A4A] shrink-0">{label}</span>
                  <span className="font-['Cormorant_Garamond'] text-[22px] text-[#1B1B1B] text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: description */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <h2
                className="font-['Cormorant_Garamond'] font-light leading-tight text-[#1B1B1B]"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                The Design <span className="italic">Narrative</span>
              </h2>
              <p className="font-['Inter'] text-[16px] md:text-[18px] leading-[1.9] text-[#1B1B1B]/80 font-light">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 mt-20 md:mt-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[380px]">
            {project.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className={`relative overflow-hidden group ${
                  idx === 0 ? "md:col-span-8 md:row-span-2" :
                  idx === 1 ? "md:col-span-4" :
                  "md:col-span-4"
                }`}
              >
                <ImageWithFallback
                  src={img}
                  alt={`${project.title} — image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1B1B1B]/0 group-hover:bg-[#1B1B1B]/15 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="mt-32 md:mt-64 border-t border-[#1B1B1B]/10 pt-16 md:pt-24 pb-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col items-center text-center">
          <p className="font-['Inter'] text-[10px] uppercase tracking-[0.5em] text-[#8C6A4A] mb-6">Next Project</p>
          <Link
            to={`/project/${nextProject.slug}`}
            className="font-['Cormorant_Garamond'] italic font-light text-[#1B1B1B] hover:text-[#8C6A4A] transition-colors duration-500"
            style={{ fontSize: "clamp(32px, 7vw, 100px)" }}
          >
            {nextProject.title} →
          </Link>
        </div>
      </section>
    </div>
  );
}
