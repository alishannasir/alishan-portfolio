import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface WorkItem {
  title: string;
  description: string;
  role: string;
  year: string;
  link?: string;
}

const workItems: WorkItem[] = [
  {
    title: "Verve",
    description: "Led the redesign of the core product experience, improving user engagement by 40%.",
    role: "Design Director",
    year: "2024–Present",
    link: "/verve",
  },
  {
    title: "Spotify",
    description: "Designed key features for the mobile and desktop listening experience across millions of users.",
    role: "Staff Designer",
    year: "2020–2024",
    link: "/spotify",
  },
  {
    title: "Figma",
    description: "Built and scaled the design system used across all Figma product surfaces.",
    role: "Senior Designer",
    year: "2016–2020",
    link: "/figma",
  },
  {
    title: "Notion",
    description: "Shaped the early product design language and helped establish the brand identity.",
    role: "Senior Designer",
    year: "2012–2016",
    link: "/notion",
  },
];

const Expertise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-screen pt-40 pb-24 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl mb-8"
          >
            Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-20 leading-relaxed"
          >
            A selection of projects and roles that have shaped my craft over the years.
          </motion.p>

          <div className="flex flex-col gap-0">
            {workItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group border-b border-foreground/10 py-10 block cursor-pointer hover:bg-[hsl(var(--surface-active))] transition-colors duration-200 px-4 -mx-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2" />
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span>{item.year}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span>{item.role}</span>
                </div>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Expertise;
