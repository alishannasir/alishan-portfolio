import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "01",
    title: "BRAND STRATEGY",
    paragraphs: [
      "CLARITY IS A RADICAL ACT. WE DIVE DEEP TOGETHER TO UNCOVER WHAT YOUR BRAND TRULY STANDS FOR NOT JUST TO SAY IT, BUT TO LIVE IT.",
      "FROM POSITIONING TO PURPOSE, WE BUILD THE FOUNDATION FOR INTENTIONAL GROWTH.",
    ],
    items: [
      "RESEARCH & COMPETITOR ANALYSIS",
      "BRAND AUDIT",
      "VALUE PROPOSITION",
      "BRAND BEHAVIOUR",
      "TONE OF VOICE",
      "MANIFESTO",
      "BRAND AI TRAINING",
      "MOODBOARDING",
    ],
  },
  {
    id: "02",
    title: "VISUAL IDENTITY",
    paragraphs: [
      "IN A WORLD OF NOISE, YOUR IDENTITY SHOULD SPEAK WITH PRECISION. WE CRAFT VISUAL SYSTEMS THAT ARE BOLD, INTENTIONAL, AND BUILT TO CARRY MEANING – NOT JUST STYLE.",
      "FROM LOGO TO ROLLOUT, EVERY ELEMENT IS MADE TO LAST – AND DRIVE GROWTH.",
    ],
    items: [
      "LOGO DESIGN",
      "TYPOGRAPHY & COLOR PALETTES",
      "VISUAL SYSTEMS",
      "BRAND GUIDELINES",
      "SOCIAL, DIGITAL & PRINT ASSETS",
      "WEB DESIGN & UI",
      "PITCH DECK DESIGN",
    ],
  },
  {
    id: "03",
    title: "CREATIVE CONSULTING",
    paragraphs: [
      "WE PARTNER WITH FOUNDERS AND TEAMS IN MOMENTS OF CHANGE – BLENDING STRATEGY WITH HANDS-ON CREATIVE AND ART DIRECTION.",
      "THESE AREN'T PASSIVE SESSIONS, BUT FAST, FOCUSED, AND AI POWERED SPRINTS THAT UNLOCK CLARITY AND GUIDE BOLD EXECUTION.",
    ],
    items: [
      "CREATIVE DIAGNOSIS",
      "ON-DEMAND CONSULTING",
      "CREATIVE PIVOTS",
      "NAMING & MESSAGING",
      "CREATIVE & ART DIRECTION",
      "BRAND IMPLEMENTATION SESSIONS",
    ],
  },
];

const slideVariants = {
  enterRight: { opacity: 0, y: 28 },
  enterLeft: { opacity: 0, y: -28 },
  center: { opacity: 1, y: 0 },
  exitRight: { opacity: 0, y: -28 },
  exitLeft: { opacity: 0, y: 28 },
};

const slideTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

export default function StrategySection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");

  const goPrev = () => {
    setDirection("left");
    setSelectedIndex((i) => (i <= 0 ? slides.length - 1 : i - 1));
  };

  const goNext = () => {
    setDirection("right");
    setSelectedIndex((i) => (i >= slides.length - 1 ? 0 : i + 1));
  };

  const slide = slides[selectedIndex];

  return (
    <section
      className="py-24 md:py-32"
      aria-label="Strategy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="section-header mb-12 uppercase">Strategy</h2>
        <div className="relative h-[520px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              variants={slideVariants}
              initial={direction === "right" ? "enterRight" : "enterLeft"}
              animate="center"
              exit={direction === "right" ? "exitLeft" : "exitRight"}
              transition={slideTransition}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 xl:gap-32 min-h-[400px] items-start"
            >
              {/* Left: number + stacked title (staggered) + list */}
              <div className="flex flex-col">
                <h3 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-[0.95] mb-12">
                  <span className="text-muted-foreground text-2xl sm:text-3xl block mb-0.5">
                    ({slide.id})
                  </span>
                  {slide.title.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={`block ${i === 0 ? "" : "pl-6 sm:pl-8 md:pl-10"}`}
                    >
                      {word}
                    </span>
                  ))}
                </h3>
                <ul className="space-y-2 text-sm sm:text-base font-medium text-foreground uppercase tracking-wide">
                  {slide.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-primary">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right: paragraphs - aligned with top of second word (IDENTITY) */}
              <div className="flex flex-col justify-start pt-20 sm:pt-24 lg:pt-16 xl:pt-20">
                <div className="space-y-6 text-foreground/90 font-serif text-base sm:text-lg leading-relaxed uppercase">
                  {slide.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        {/* Slider navigation - fixed bottom right */}
        <div className="absolute bottom-0 right-0 flex justify-end items-center gap-4">
          <div
            className="w-2 h-2 rounded-full bg-primary shrink-0"
            aria-hidden
          />
          <span className="text-sm font-medium text-muted-foreground tabular-nums">
            {String(selectedIndex + 1).padStart(2, "0")}-{String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={goPrev}
              className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
