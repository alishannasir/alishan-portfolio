import type { Project } from "./types";

const gilgitApp: Project = {
  slug: "gilgit-app",
  title: "GilgitApp",
  tagline:
    "Pakistan’s buyer-centric e-commerce marketplace — buy and sell across cars, mobiles, home, fashion, and more.",
  description:
    "GilgitApp is an online marketplace that started in Gilgit-Baltistan and expanded across Pakistan. It offers a buyer-centric experience with categories including cars, bikes, laptops, mobiles, home, office, furniture, books, pets, fashion, dry fruits, and more. The platform includes Buyer Requests, location-based listing, and GilgitApp Shops for merchants. Built for performance and trust with payments and Google login.",
  role: "Front-End Developer",
  year: "2023",
  duration: "10 months",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Google Auth", "React"],
  liveUrl: "https://gilgit.app/",
  highlights: [
    "Multi-category marketplace with search, location selector, and Sell Now flow",
    "Buyer Requests — post what you’re looking for and get offers from sellers",
    "Product detail pages with gallery, specs, seller profile, and contact",
    "Payments and Login with Google for secure, fast onboarding",
  ],
  details: [
    "The app was designed to feel equally good for buyers and sellers, unlike many seller-centric marketplaces. The homepage combines a hero banner, Buyer Requests panel, and most recent items. Listing pages include rich product details, image galleries, condition, location, and direct contact with the seller.",
    "Next.js was chosen for SEO, fast navigation, and API routes. Payment integration handles secure transactions, and Google login reduces friction for new users. The UI uses a dark theme with clear CTAs and category icons for quick scanning.",
    "From its origins as a Facebook-based vehicle sales service in Gilgit-Baltistan, the platform scaled to Karachi and other cities. The tech stack and UX were built to support that growth while keeping the experience simple and trustworthy.",
  ],
};

export default gilgitApp;
