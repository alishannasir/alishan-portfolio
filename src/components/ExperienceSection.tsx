import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
}

const experiences: ExperienceItem[] = [
  { company: "FieldPulse", role: "Front-End Developer", period: "2024" },
  { company: "GilgitApp", role: "Front-End Developer", period: "2023" },
  { company: "Qho HR", role: "Front-End Developer", period: "2024" },
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="experience-card"
  >
    <div className="flex-1 flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <span className="font-serif text-2xl md:text-3xl text-foreground">{item.company}</span>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-muted-foreground">{item.period}</span>
          <span className="text-muted-foreground/40">·</span>
          <span className="text-muted-foreground">{item.role}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section className="section-container">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        experience
      </motion.h3>
      <div className="flex flex-col">
        {experiences.map((item, index) => (
          <ExperienceCard key={item.company} item={item} index={index} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <Link to="/expertise" className="text-sm text-primary font-medium tracking-wide hover:underline">
          View all work →
        </Link>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
