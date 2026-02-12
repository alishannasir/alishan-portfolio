import type { Project } from "./types";

const fieldpulse: Project = {
  slug: "fieldpulse",
  title: "FieldPulse",
  tagline:
    "Field service management software for contractors — scheduling, dispatch, estimates, and CRM in one platform.",
  description:
    "FieldPulse is an all-in-one field service management (FSM) platform trusted by thousands of field service companies and specialty contractors. Built with a modern stack to deliver scheduling, job management, estimates, invoicing, payments, and customer management in a single, customizable platform. Companies go live in weeks with typical ROI in one month and roughly 10 hours saved per week.",
  role: "Front-End Developer",
  year: "2024",
  duration: "8 months",
  techStack: ["SvelteKit", "Strapi", "Tailwind CSS", "TypeScript", "Third-party integrations"],
  highlights: [
    "Scheduling & dispatch with contract storage and service history tracking",
    "Estimating and invoicing with contract-based pricing and profitability tracking",
    "Solutions by segment (Residential, Commercial, Franchises) and by industry (MEP, Field Service, Equipment)",
    "Dashboard for jobs, clock-in tracking, and conversion metrics",
  ],
  liveUrl: "https://www.fieldpulse.com/",
  details: [
    "The product serves HVAC-R, electrical, plumbing, garage door, locksmith, property management, appliance repair, commercial equipment, fire and security, contractors, septic, and A/V installation. The UI had to support both segment-based and industry-based navigation with clear dropdowns and consistent patterns.",
    "I worked on the dashboard experience: job cards with status (In Progress, On the way), technician clock-in display, and conversion rate views. The design uses a dark blue background with a subtle grid and clear status indicators (green for in progress, purple for on the way).",
    "Integration with Strapi as the CMS allowed non-developers to manage content and copy. Third-party scripts were used for analytics and specific vendor integrations while keeping the core app fast and maintainable. Tailwind ensured consistent styling and quick iteration across the SvelteKit app.",
  ],
};

export default fieldpulse;
