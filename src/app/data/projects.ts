export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  area: string;
  description: string;
  images: string[];
  mainImage: string;
}

export const projects: Project[] = [
  {
    slug: "ivory-penthouse",
    title: "The Ivory Penthouse",
    category: "Luxury Residences",
    location: "Monaco",
    year: "2023",
    client: "Private Collector",
    area: "450 sqm",
    description: "A masterclass in minimalist luxury, the Ivory Penthouse overlooks the Mediterranean with a palette of soft whites, rare marbles, and bespoke bronze accents. The design emphasizes natural light as a primary material, creating a sanctuary of calm above the bustling principality.",
    mainImage: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ]
  },
  {
    slug: "geometric-villa",
    title: "Geometric Villa",
    category: "Modern Villas",
    location: "Dubai",
    year: "2024",
    client: "Al-Maktoum Estate",
    area: "1200 sqm",
    description: "Striking a balance between brutalist geometry and oasis-like tranquility, this villa in Dubai utilizes massive concrete forms juxtaposed with lush internal courtyards. Every angle was calculated to optimize shadow patterns during the intense desert daylight.",
    mainImage: "https://images.unsplash.com/photo-1666037805138-f227944ed8d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ]
  },
  {
    slug: "azure-sky-office",
    title: "Azure Sky Office",
    category: "Executive Workspaces",
    location: "Singapore",
    year: "2023",
    client: "Horizon Tech",
    area: "800 sqm",
    description: "Redefining the corporate environment, the Azure Sky Office merges high-tech infrastructure with organic design principles. Featuring floating conference pods and a living green wall that spans three floors.",
    mainImage: "https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ]
  },
  {
    slug: "obsidian-loft",
    title: "The Obsidian Loft",
    category: "Luxury Residences",
    location: "London",
    year: "2024",
    client: "V. Sterling",
    area: "220 sqm",
    description: "A dark, moody transformation of a historic industrial space in Shoreditch. The Obsidian Loft uses a monochromatic palette of blackened steel, charred wood, and deep velvet textures to create an intimate, sophisticated urban retreat.",
    mainImage: "https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d94ac25655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1600585154526-990dcea4d4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ]
  }
];
