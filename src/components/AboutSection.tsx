import { motion } from "framer-motion";
import { shanImages } from "@/data/adventureImages";

const AboutSection = () => {
  return (
    <section className="w-full border-t border-foreground/10">
      <div className="max-w-3xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-center gap-8"
        >
          <img
            src={shanImages[0]}
            alt=""
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover border border-foreground/10 shrink-0"
          />
          <div>
            <p className="text-xs text-primary tracking-widest uppercase mb-2">About</p>
            <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
              Front-end developer crafting simple, clear interfaces. Focused on performance, accessibility, and clean architecture — from landing pages to full web applications.
            </p>
            <p className="font-serif text-sm text-muted-foreground/80 italic mt-2">
              When offline: adventure mode on. Capturing time as pictures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
