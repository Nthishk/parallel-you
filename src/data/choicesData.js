// Choice definitions for Parallel You experience

export const CAREER_OPTIONS = [
  {
    id: 'tech_ai',
    title: 'Technology & AI Ethics',
    subtitle: 'Building human-centric software and intelligent systems',
    icon: 'Cpu',
    tag: 'Tech & Engineering',
    metrics: { creative: 70, career: 90, adventure: 60, peace: 55, finance: 90 }
  },
  {
    id: 'design_craft',
    title: 'Design & Visual Arts',
    subtitle: 'Crafting meaningful brand identities, UI/UX, and generative art',
    icon: 'Palette',
    tag: 'Creative Arts',
    metrics: { creative: 95, career: 75, adventure: 70, peace: 70, finance: 65 }
  },
  {
    id: 'culinary_gastronomy',
    title: 'Culinary Arts & Farm-to-Table',
    subtitle: 'Exploring sustainable gastronomy and artisanal food craft',
    icon: 'Utensils',
    tag: 'Hospitality & Craft',
    metrics: { creative: 85, career: 70, adventure: 65, peace: 60, finance: 60 }
  },
  {
    id: 'eco_sustainability',
    title: 'Renewable Energy & Climate Tech',
    subtitle: 'Pioneering clean energy solutions and environmental policy',
    icon: 'Leaf',
    tag: 'Sustainability & Impact',
    metrics: { creative: 65, career: 85, adventure: 75, peace: 75, finance: 70 }
  },
  {
    id: 'entrepreneurship',
    title: 'Indie Startup Founder',
    subtitle: 'Bootstrapping early-stage products and building autonomous ventures',
    icon: 'Rocket',
    tag: 'Business & Ventures',
    metrics: { creative: 90, career: 95, adventure: 85, peace: 45, finance: 75 }
  },
  {
    id: 'literature_journalism',
    title: 'Journalism & Literature',
    subtitle: 'Investigative storytelling, publishing essays, and narrative non-fiction',
    icon: 'BookOpen',
    tag: 'Media & Writing',
    metrics: { creative: 90, career: 65, adventure: 80, peace: 65, finance: 55 }
  },
  {
    id: 'marine_oceanography',
    title: 'Marine Biology & Exploration',
    subtitle: 'Studying ocean ecosystems, coral conservation, and deep sea life',
    icon: 'Waves',
    tag: 'Scientific Exploration',
    metrics: { creative: 60, career: 80, adventure: 95, peace: 80, finance: 60 }
  }
];

export const CITY_OPTIONS = [
  {
    id: 'tokyo',
    cityName: 'Tokyo, Japan',
    vibe: 'High-Tech Metropole',
    description: 'Neon alleys, precise transit systems, quiet izakayas, and bleeding-edge technology.',
    icon: 'Building2',
    metricsBonus: { career: 10, finance: 10, adventure: 5 }
  },
  {
    id: 'berlin',
    cityName: 'Berlin, Germany',
    vibe: 'Creative & Underground Hub',
    description: 'Industrial studio spaces, avant-garde art collectives, relaxed work culture, and rich history.',
    icon: 'Music',
    metricsBonus: { creative: 15, peace: 10, finance: -5 }
  },
  {
    id: 'reykjavik',
    cityName: 'Reykjavík, Iceland',
    vibe: 'Coastal & Serene Sanctuary',
    description: 'Volcanic landscapes, northern lights, tight-knit community, and profound quiet focus.',
    icon: 'Compass',
    metricsBonus: { peace: 20, adventure: 10, career: -5 }
  },
  {
    id: 'singapore',
    cityName: 'Singapore',
    vibe: 'Global Crossroads & Garden City',
    description: 'Tropical urbanism, high-speed innovation, diverse food scene, and seamless connectivity.',
    icon: 'Globe',
    metricsBonus: { career: 15, finance: 15, peace: -5 }
  },
  {
    id: 'newyork',
    cityName: 'New York City, USA',
    vibe: 'Fast-Paced Ambition',
    description: 'Electric energy, endless cultural diversity, midnight coffee shops, and unmatched hustle.',
    icon: 'Zap',
    metricsBonus: { career: 20, creative: 10, peace: -15, finance: 5 }
  },
  {
    id: 'valparaiso',
    cityName: 'Valparaíso, Chile',
    vibe: 'Bohemian Coastal Haven',
    description: 'Colorful hillside funiculars, street murals, Pacific ocean breezes, and slow living.',
    icon: 'Sun',
    metricsBonus: { creative: 15, peace: 15, adventure: 15, finance: -10 }
  }
];

export const PRIORITY_OPTIONS = [
  {
    id: 'high_risk_venture',
    title: 'High-Risk Ambition',
    subtitle: 'Chasing big leaps, taking bold investments, and striving for maximal industry impact.',
    icon: 'TrendingUp',
    modifier: { career: 20, finance: 15, peace: -20 }
  },
  {
    id: 'deep_craft',
    title: 'Mastery of Craft',
    subtitle: 'Focusing on quality, technique, and deep focus without rushing for scale.',
    icon: 'Award',
    modifier: { creative: 20, peace: 10, finance: 0 }
  },
  {
    id: 'work_life_travel',
    title: 'Work-Life Harmony & Travel',
    subtitle: 'Prioritizing remote flexibility, personal wellness, and seeing the world.',
    icon: 'Plane',
    modifier: { adventure: 25, peace: 20, career: -10 }
  },
  {
    id: 'social_impact',
    title: 'Community & Social Good',
    subtitle: 'Directing time and talent toward local communities, open-source, and social causes.',
    icon: 'Heart',
    modifier: { peace: 15, creative: 10, finance: -10 }
  },
  {
    id: 'autonomy_freedom',
    title: 'Total Independent Autonomy',
    subtitle: 'Refusing corporate ladders, maintaining strict control over schedule and projects.',
    icon: 'ShieldCheck',
    modifier: { creative: 25, peace: 15, career: -5 }
  }
];

export const TURNING_POINT_OPTIONS = [
  {
    id: 'overseas_fellowship',
    title: 'Accepted an Overseas Fellowship',
    subtitle: 'Packed two bags on 3 weeks notice and moved into a shared studio across the ocean.',
    impactText: 'Expanded global mindset & international network.'
  },
  {
    id: 'passion_project_co',
    title: 'Co-founded a Side Project with a Friend',
    subtitle: 'Spent late nights building an experimental app/initiative that took off unexpectedly.',
    impactText: 'Sparked early entrepreneurial momentum.'
  },
  {
    id: 'solo_sabbatical',
    title: 'Took a 6-Month Solo Sabbatical',
    subtitle: 'Stepped away from traditional work to travel, read, and re-evaluate core values.',
    impactText: 'Deepened self-reflection and personal clarity.'
  },
  {
    id: 'unrelated_pivot',
    title: 'Pivoted into a Unrelated Discipline',
    subtitle: 'Leaped into a domain where you had zero background, starting from square one.',
    impactText: 'Built immense resilience and polymath adaptability.'
  }
];

export const LIFESTYLE_OPTIONS = [
  {
    id: 'nomad',
    title: 'Digital Nomad Lifestyle',
    subtitle: 'Living out of curated apartments, co-working spaces, and mountain cabins worldwide.',
    badge: 'Nomadic Living'
  },
  {
    id: 'artisan_home',
    title: 'Artisanal Studio & Workshop',
    subtitle: 'Renting a dedicated workshop filled with raw materials, tools, and cozy vinyl records.',
    badge: 'Artisanal Studio'
  },
  {
    id: 'eco_homestead',
    title: 'Urban Micro-Farming',
    subtitle: 'Cultivating rooftop gardens, honeybees, and participating in neighborhood green cooperatives.',
    badge: 'Green Living'
  },
  {
    id: 'media_creator',
    title: 'Indie Game & Media Lab',
    subtitle: 'Building a small digital atelier publishing niche games, zines, and audio projects.',
    badge: 'Digital Atelier'
  }
];
