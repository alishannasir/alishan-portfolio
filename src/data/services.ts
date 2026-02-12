export type ServiceItem = {
  title: string;
  items: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Frontend Development",
    items: [
      "Modern FE stack: HTML, CSS, TypeScript, SASS, Tailwind",
      "React & Next.js application development",
      "Responsive, accessible UI architecture",
      "Scalable components & design system implementation",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Headless CMS workflows (WordPress, Sanity)",
      "WordPress development & REST/GraphQL APIs",
      "Supabase backend services & authentication",
    ],
  },
  {
    title: "Creative 3D & WebGL",
    items: [
      "Three.js / React Three Fiber experiences",
      "Custom shaders & creative coding",
      "Interactive WebGL scenes & micro-interactions",
      "Blender-to-web asset optimization",
    ],
  },
  {
    title: "Motion Engineering",
    items: [
      "GSAP & Framer Motion driven animations",
      "Scroll-based storytelling & transitions",
      "Micro-interactions for UI/UX",
      "Lottie & canvas-based motion setups",
    ],
  },
  {
    title: "Responsive Design",
    items: [
      "Mobile-first layouts",
      "Adaptive grids & typography systems",
      "Cross-device consistency",
      "Performance audits for all breakpoints",
    ],
  },
  {
    title: "Performance Optimization",
    items: [
      "Lighthouse & Core Web Vitals improvements",
      "Code splitting & asset optimization",
      "Lazy loading & caching strategies",
      "Image, video & WebGL performance tuning",
    ],
  },
  {
    title: "SEO Enhancement",
    items: [
      "Semantic HTML & metadata setup",
      "SSR/SSG optimization for ranking",
      "Open Graph & structured data",
      "Technical audits with actionable fixes",
    ],
  },
  {
    title: "Analytics & Insights",
    items: [
      "Google Analytics 4 setup & configuration",
      "Event & conversion tracking",
      "User behavior analysis & reporting",
    ],
  },
  {
    title: "Project Support",
    items: [
      "Bug fixes & refactoring",
      "Feature development and enhancements",
      "Component cleanup & design audits",
      "Consulting on architecture & best practices",
    ],
  },
];
