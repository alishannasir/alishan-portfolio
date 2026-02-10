import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Core",
    skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "Figma", "Vite", "Webpack", "Docker"],
  },
  {
    title: "Testing & Quality",
    skills: ["Jest", "Vitest", "Cypress", "Playwright", "Storybook"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "REST APIs", "GraphQL", "Supabase", "Firebase"],
  },
];

const People = () => {
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
            Skills
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-20 leading-relaxed"
          >
            Front-end developer with a passion for building performant, accessible, and beautiful web experiences.
          </motion.p>

          <div className="flex flex-col gap-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-foreground/10 pb-10"
              >
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-primary border border-primary/30 px-4 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default People;
