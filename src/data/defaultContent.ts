export interface SiteContent {
  navigation: {
    brandName: string;
    tagline: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    cta1: string;
    cta2: string;
    image: string;
  };
  brandStory: {
    eyebrow: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    stats: Array<{ number: string; label: string }>;
    image: string;
  };
  projects: Array<{
    id: string;
    title: string;
    location: string;
    style: string;
    image: string;
  }>;
  architecture: {
    eyebrow: string;
    heading1: string;
    heading2: string;
    body: string;
    stats: Array<{ label: string; value: string }>;
    cardEyebrow: string;
    cardTitle: string;
    cardBody: string;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  philosophy: {
    eyebrow: string;
    heading: string;
    headingItalic: string;
    pillars: Array<{ num: string; heading: string; body: string }>;
    image1: string;
    image2: string;
    statNumber: string;
    statLabel: string;
    statDescription: string;
  };
  materials: Array<{
    id: string;
    name: string;
    description: string;
    image: string;
  }>;
  testimonials: Array<{
    id: string;
    quote: string;
    client: string;
    project: string;
  }>;
  process: Array<{
    id: string;
    number: string;
    title: string;
    description: string;
  }>;
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    phone: string;
    email: string;
    address: string;
    web3formsKey: string;
  };
  footer: {
    brandName: string;
    tagline: string;
    copyright: string;
    developer: string;
  };
}

export const defaultContent: SiteContent = {
  navigation: {
    brandName: "YY INTERIORS",
    tagline: "ELITE INTERIOR ARCHITECTURE STUDIO",
  },
  hero: {
    eyebrow: "AWARD-WINNING LUXURY DESIGN STUDIO",
    heading: "Luxury Interiors Designed Around Your Lifestyle, Not Templates",
    subheading:
      "From concept to execution, we create premium home interiors that combine elegant design, intelligent storage, and flawless craftsmanship—tailored specifically to your floor plan and lifestyle.",
    cta1: "Book Free Design Consultation",
    cta2: "View Our Projects",
    image:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  brandStory: {
    eyebrow: "OUR PHILOSOPHY",
    heading: "Designing Homes That Feel Personal",
    paragraph1:
      "At Yellow Yards Interiors, we believe every home should reflect the people living in it. That's why we don't follow cookie-cutter designs.",
    paragraph2:
      "We study your floor plan, understand your family's lifestyle, storage requirements, aesthetic preferences, and daily routines before creating a space that's both beautiful and practical.",
    paragraph3:
      "Whether it's a luxury apartment, villa, or independent house, our goal is simple: Create a home that looks stunning on Day 1 and functions perfectly for years.",
    stats: [
      { number: "15+", label: "Years Excellence" },
      { number: "200+", label: "Projects Completed" },
      { number: "12", label: "Design Awards" },
    ],
    image:
      "https://images.unsplash.com/photo-1666037805138-f227944ed8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  projects: [
    {
      id: "p1",
      title: "Modern Minimalist Residence",
      location: "Mumbai, India",
      style: "Contemporary",
      image:
        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "p2",
      title: "Luxury Penthouse Suite",
      location: "Delhi, India",
      style: "Modern Luxury",
      image:
        "https://images.unsplash.com/photo-1666037805138-f227944ed8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "p3",
      title: "Serene Bedroom Retreat",
      location: "Bangalore, India",
      style: "Transitional",
      image:
        "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc4NDQxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "p4",
      title: "Architectural Kitchen",
      location: "Gurgaon, India",
      style: "Contemporary",
      image:
        "https://images.unsplash.com/photo-1704383014594-01bc24b6b840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc4NDQxMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "p5",
      title: "Elegant Living Space",
      location: "Pune, India",
      style: "Classic Modern",
      image:
        "https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "p6",
      title: "Tranquil Master Suite",
      location: "Hyderabad, India",
      style: "Minimalist",
      image:
        "https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc4NDQxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
  architecture: {
    eyebrow: "Thoughtful Design",
    heading1: "Beautiful Designs Are Easy.",
    heading2: "Designing a Home That Works Every Day Is Hard.",
    body: "Most interiors either focus on aesthetics or storage. We design both. Hidden storage integrated into premium wall paneling. Modular kitchens designed for maximum usability. Bedrooms with smart storage solutions that don't feel cluttered. Luxury finishes that remain timeless years later. Because true luxury isn't expensive materials — it's thoughtful design.",
    stats: [
      { label: "Experience", value: "8+ Years" },
      { label: "Projects", value: "200+" },
      { label: "Design", value: "Bespoke" },
      { label: "Delivery", value: "On Time" },
    ],
    cardEyebrow: "Our Promise",
    cardTitle: "Thoughtful Design",
    cardBody: "Every square foot planned with purpose — beauty and function, never a compromise.",
  },
  services: [
    {
      id: "s1",
      title: "Modular Kitchens",
      description: "Elegant kitchens designed for functionality, storage, and daily convenience.",
      image:
        "https://images.unsplash.com/photo-1704383014594-01bc24b6b840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzc4NDQxMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s2",
      title: "Living Room Interiors",
      description: "Premium TV units, wall paneling, display units, and entertainment spaces.",
      image:
        "https://images.unsplash.com/photo-1669387448840-610c588f003d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s3",
      title: "Bedroom Interiors",
      description: "Luxury wardrobes, dressers, storage beds, and customized furniture.",
      image:
        "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc4NDQxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s4",
      title: "False Ceiling & Lighting",
      description: "Ambient lighting solutions that elevate the mood of every room.",
      image:
        "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s5",
      title: "Space Planning",
      description: "Optimized layouts that improve flow, usability, and comfort.",
      image:
        "https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s6",
      title: "Custom Furniture",
      description: "Furniture designed specifically for your home and lifestyle.",
      image:
        "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bHV4dXJ5JTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3ODM1NDE3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s7",
      title: "Villa Interiors",
      description: "End-to-end luxury interior solutions for villas and independent homes.",
      image:
        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "s8",
      title: "Renovation Services",
      description: "Transform existing spaces into modern, functional, and premium environments.",
      image:
        "https://images.unsplash.com/photo-1672927936377-97d1be3976cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
  philosophy: {
    eyebrow: "WHY CHOOSE US",
    heading: "Why Homeowners Choose",
    headingItalic: "Yellow Yards Interiors",
    pillars: [
      {
        num: "01",
        heading: "Personalized Designs",
        body: "Every design is created around your floor plan and lifestyle requirements.",
      },
      {
        num: "02",
        heading: "Smart Storage Solutions",
        body: "Maximum storage without compromising aesthetics.",
      },
      {
        num: "03",
        heading: "Premium Material Selection",
        body: "Carefully curated materials that offer durability and elegance.",
      },
      {
        num: "04",
        heading: "Complete Project Management",
        body: "From design discussions to final handover, we handle everything.",
      },
      {
        num: "05",
        heading: "Transparent Communication",
        body: "Regular updates, milestone tracking, and clear timelines.",
      },
      {
        num: "06",
        heading: "Quality Craftsmanship",
        body: "Attention to every detail, from finishes to fittings.",
      },
    ],
    image1:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    image2:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGJlZHJvb218ZW58MXx8fHwxNzc4MzU0MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    statNumber: "98",
    statLabel: "NPS SCORE",
    statDescription: "Client satisfaction across 200+ projects",
  },
  materials: [
    {
      id: "m1",
      name: "Italian Marble",
      description: "Timeless elegance",
      image:
        "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0ZXh0dXJlJTIwbHV4dXJ5fGVufDF8fHx8MTc3ODQ0MTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "m2",
      name: "Walnut Wood",
      description: "Natural warmth",
      image:
        "https://images.unsplash.com/photo-1774437290572-0e414eb62db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b29kJTIwdGV4dHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3ODQ0MTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "m3",
      name: "Brushed Bronze",
      description: "Refined accents",
      image:
        "https://images.unsplash.com/photo-1760237655540-8197ef24838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3b29kJTIwdGV4dHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3ODQ0MTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "m4",
      name: "Luxury Fabrics",
      description: "Tactile comfort",
      image:
        "https://images.unsplash.com/photo-1715518283046-54e007167620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwdGV4dHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3ODQ0MTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
  testimonials: [
    {
      id: "t1",
      quote:
        "The design perfectly matched our lifestyle and the execution quality exceeded expectations.",
      client: "Ananya Sharma",
      project: "Modern Residence, Hyderabad",
    },
    {
      id: "t2",
      quote:
        "Every inch of storage was thoughtfully planned without compromising aesthetics.",
      client: "Rajesh Malhotra",
      project: "Luxury Villa, Hyderabad",
    },
    {
      id: "t3",
      quote:
        "Professional team, transparent communication, and excellent attention to detail.",
      client: "Priya Menon",
      project: "Contemporary Apartment, Hyderabad",
    },
  ],
  process: [
    {
      id: "pr1",
      number: "01",
      title: "Consultation",
      description: "Understand your vision, requirements, budget, and lifestyle.",
    },
    {
      id: "pr2",
      number: "02",
      title: "Design Planning",
      description: "Space planning, mood boards, concepts, and design development.",
    },
    {
      id: "pr3",
      number: "03",
      title: "Material Selection",
      description: "Choose finishes, colors, textures, and materials with expert guidance.",
    },
    {
      id: "pr4",
      number: "04",
      title: "Execution",
      description: "Manufacturing, site coordination, installation, and quality checks.",
    },
    {
      id: "pr5",
      number: "05",
      title: "Handover",
      description: "Final walkthrough and delivery of your dream home.",
    },
  ],
  contact: {
    eyebrow: "GET IN TOUCH",
    heading: "Let's Design Something Timeless",
    subheading: "Begin your journey to a beautifully crafted space. We'd love to hear about your vision.",
    phone: "+91 98765 43210",
    email: "hello@yyinteriors.com",
    address: "Mumbai, India",
    web3formsKey: "",
  },
  footer: {
    brandName: "YY INTERIORS",
    tagline: "ELITE INTERIOR ARCHITECTURE STUDIO",
    copyright: "© 2026 YY Interiors. All rights reserved.",
    developer: "AR Tech Studio",
  },
};
