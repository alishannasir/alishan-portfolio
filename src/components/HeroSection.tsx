import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroImage } from "@/data/adventureImages";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col lg:flex-row relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
        {/* Left: large text that overlaps image on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex-1 lg:-mr-32 xl:-mr-40 flex items-center"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-[6.5rem] font-bold leading-[0.98] tracking-tight text-primary max-w-xl lg:max-w-2xl">
            Front-end developer with experience building products for the web.
          </h1>
        </motion.div>

        {/* Right: image with top/bottom padding + "Based in Pakistan." below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:w-[55%] xl:w-[52%] flex flex-col items-end gap-4 py-8 lg:py-12"
        >
          <motion.img
            src={heroImage}
            alt="alishan"
            style={{ y: imageY }}
            className="w-full h-[50vh] min-h-[280px] max-h-[65vh] object-cover object-center rounded-md"
          />
          <p className="font-serif text-base sm:text-lg md:text-xl text-primary font-medium">
            Based in Pakistan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
