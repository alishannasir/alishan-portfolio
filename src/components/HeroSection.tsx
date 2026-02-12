import { motion } from "framer-motion";
import WaveImage from "@/components/WaveImage";
import { heroImage } from "@/data/adventureImages";
import HoverText from "@/components/HoverText";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-12 lg:gap-16">
        {/* Name — left-aligned, scales for mobile */}
        <div className="flex flex-col min-w-0">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-4xl sm:text-6xl md:text-5xl lg:text-[5rem] xl:text-[6rem] leading-[0.95] tracking-tight text-foreground break-words"
          >
            <span className="block">ali<HoverText text="shan" forceForeground /></span>
          </motion.h1>
        </div>

        {/* Tagline — photo + description; stacked on mobile, right on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start lg:items-end gap-4 sm:gap-3 self-start lg:self-end"
        >
          <WaveImage
            src={heroImage}
            alt="alishan"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-md object-cover flex-shrink-0 border border-[hsl(var(--border-default))]"
          />
          <p className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-snug max-w-md lg:max-w-sm lg:text-right">
            Front-end developer with experience building products for the web. Based in Pakistan.
          </p>
          <p className="font-serif text-sm sm:text-base text-muted-foreground/80 italic max-w-md lg:max-w-sm lg:text-right">
            Adventure junkie. I turn time into pictures when I'm not turning ideas into pixels.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
