export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  duration: string;
  techStack: string[];
  highlights: string[];
  details: string[];
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "ShopFlow",
    tagline: "A modern e-commerce platform with real-time inventory and sleek checkout flows.",
    description:
      "Built a full-featured e-commerce platform from the ground up, focusing on performance, accessibility, and conversion optimization. The platform handles thousands of daily transactions with a sub-second page load time.",
    role: "Lead Front-End Developer",
    year: "2024",
    duration: "6 months",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Stripe", "Supabase"],
    highlights: [
      "Achieved 98 Lighthouse performance score",
      "Reduced cart abandonment by 35% with optimized checkout flow",
      "Built a reusable component library with 60+ components",
      "Implemented real-time inventory tracking with WebSockets",
    ],
    details: [
      "The project started as a redesign of an existing Shopify storefront that was struggling with performance and customization limitations. I architected a headless commerce solution using Next.js with server-side rendering for optimal SEO and initial load performance.",
      "One of the key challenges was building a checkout flow that felt instant. I implemented optimistic UI updates, prefetching strategies, and skeleton loading states that made the experience feel native. The Stripe integration was built with PCI compliance in mind from day one.",
      "The component library was designed with a tokens-first approach, making it trivial to white-label the platform for different brands. Every component supports both light and dark modes and meets WCAG AA accessibility standards.",
    ],
  },
  {
    slug: "analytics-dashboard",
    title: "InsightBoard",
    tagline: "Real-time analytics dashboard for SaaS companies with interactive data visualizations.",
    description:
      "Designed and developed a comprehensive analytics dashboard that transforms complex datasets into actionable insights through interactive charts, filters, and real-time data streams.",
    role: "Senior Front-End Engineer",
    year: "2023",
    duration: "8 months",
    techStack: ["React", "TypeScript", "D3.js", "Recharts", "TanStack Query", "Framer Motion"],
    highlights: [
      "Renders 100k+ data points without jank using virtualization",
      "Custom charting library built on D3.js with 15 chart types",
      "Real-time WebSocket updates with optimistic reconciliation",
      "Exported as embeddable widget for client integration",
    ],
    details: [
      "The challenge was to build a dashboard that could handle massive datasets while remaining responsive and intuitive. I implemented canvas-based rendering for large scatter plots and used Web Workers to offload heavy data transformations.",
      "The filtering system was designed to be composable — users can chain multiple filters, save filter presets, and share filtered views via URL parameters. Every filter change triggers an optimistic update while the full dataset re-computes in the background.",
      "I also built a drag-and-drop dashboard builder that lets users customize their view with different chart types, resize panels, and save layouts. This used a combination of React DnD and CSS Grid for precise, pixel-perfect positioning.",
    ],
  },
  {
    slug: "portfolio-builder",
    title: "Folio",
    tagline: "A creative portfolio builder with drag-and-drop editing and beautiful templates.",
    description:
      "Created an intuitive portfolio builder that empowers designers and creatives to showcase their work with zero coding knowledge. Features a real-time visual editor with drag-and-drop sections.",
    role: "Full-Stack Developer",
    year: "2023",
    duration: "4 months",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Vercel"],
    highlights: [
      "10+ customizable templates with live preview",
      "Drag-and-drop section editor with undo/redo",
      "Custom domain support with automatic SSL",
      "Image optimization pipeline with lazy loading",
    ],
    details: [
      "Folio was born from frustration with existing portfolio tools that were either too rigid or too complex. I wanted to create something that felt as natural as arranging elements on a physical desk.",
      "The real-time editor was the most challenging part. I built a custom state management layer that tracks every change for undo/redo support, syncs changes to the database with debouncing, and renders a live preview simultaneously. The architecture uses an event-sourcing pattern for reliable state reconstruction.",
      "Performance was critical since portfolios need to load fast. I implemented automatic image resizing, WebP conversion, and progressive loading. Each published portfolio scores 95+ on Lighthouse.",
    ],
  },
  {
    slug: "social-app",
    title: "Circles",
    tagline: "A privacy-first social platform for close friend groups with ephemeral content.",
    description:
      "Developed a mobile-first social application focused on intimate sharing within close friend groups. Features end-to-end encrypted messaging, ephemeral stories, and a unique 'circles' organization system.",
    role: "Front-End Developer",
    year: "2022",
    duration: "10 months",
    techStack: ["React", "React Native", "TypeScript", "Firebase", "Framer Motion", "Zustand"],
    highlights: [
      "Cross-platform codebase sharing 70% of logic between web and mobile",
      "End-to-end encrypted messaging with Signal Protocol",
      "Gesture-driven navigation with smooth 60fps animations",
      "Offline-first architecture with background sync",
    ],
    details: [
      "Circles was designed as an antidote to the public, performative nature of mainstream social media. The core concept is small, invite-only groups where people can share authentically with people they actually know.",
      "I built the shared component library using React Native Web, allowing us to maintain a single codebase for both web and mobile. The gesture system was particularly tricky — I implemented custom pan responders that handle swipe-to-reply, pull-to-refresh, and card-stack navigation all without conflicting.",
      "The offline-first architecture was essential for a messaging app. I used a CRDT-based sync engine that resolves conflicts automatically, so users never lose messages even with spotty connectivity. Background sync keeps everything up to date without draining battery.",
    ],
  },
];
