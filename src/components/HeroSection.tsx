import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-40 pb-24 px-8">
      <div className="max-w-3xl mx-auto w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-16">
        {/* Name — two lines, left-aligned, large display */}
        <div className="flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.95] tracking-tight text-foreground"
          >
            <span className="block">Ali</span>
            <span className="block pl-4 lg:pl-8">Shan</span>
          </motion.h1>
        </div>

        {/* Tagline — right side, smaller, aligned to name */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-lg sm:text-xl md:text-2xl text-muted-foreground leading-snug max-w-md lg:max-w-sm lg:text-right self-start lg:self-end"
        >
          Front-end developer with experience building products for the web. Based in Pakistan.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
