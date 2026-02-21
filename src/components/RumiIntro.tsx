import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const RUMI_QUOTE = "Stop acting so small. You are the universe in ecstatic motion.";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const CHAR_SCRAMBLE_DURATION = 40;
const CHAR_REVEAL_DELAY = 60;

function getRandomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

interface ScrambleCharProps {
  char: string;
  isRevealed: boolean;
}

function ScrambleChar({ char, isRevealed }: ScrambleCharProps) {
  const [display, setDisplay] = useState(() => getRandomChar());

  useEffect(() => {
    if (isRevealed) {
      setDisplay(char);
      return;
    }
    const interval = setInterval(() => setDisplay(getRandomChar()), CHAR_SCRAMBLE_DURATION);
    return () => clearInterval(interval);
  }, [char, isRevealed]);

  return (
    <span className="inline-block font-mono font-light">
      {char === " " ? "\u00A0" : display}
    </span>
  );
}

interface ScrambleTextProps {
  text: string;
  revealedCount: number;
}

function ScrambleText({ text, revealedCount }: ScrambleTextProps) {
  const chars = text.split("");
  return (
    <>
      {chars.map((char, i) => (
        <ScrambleChar key={i} char={char} isRevealed={i < revealedCount} />
      ))}
    </>
  );
}

interface RumiIntroProps {
  onComplete: () => void;
}

function splitQuote(quote: string): [string[], string[]] {
  const words = quote.split(/(\s+)/).filter((t) => t.trim().length > 0);
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid), words.slice(mid)];
}

export default function RumiIntro({ onComplete }: RumiIntroProps) {
  const { theme } = useTheme();
  const [leftRevealed, setLeftRevealed] = useState(0);
  const [rightRevealed, setRightRevealed] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [canScroll, setCanScroll] = useState(false);

  const [leftWords, rightWords] = splitQuote(RUMI_QUOTE);
  const leftChars = leftWords.join(" ").split("");
  const rightChars = rightWords.join(" ").split("");

  // Character-by-character reveal: left column first, then right
  useEffect(() => {
    if (leftRevealed < leftChars.length) {
      const t = setTimeout(() => setLeftRevealed((c) => c + 1), CHAR_REVEAL_DELAY);
      return () => clearTimeout(t);
    }
    if (rightRevealed < rightChars.length) {
      const t = setTimeout(() => setRightRevealed((c) => c + 1), CHAR_REVEAL_DELAY);
      return () => clearTimeout(t);
    }
    setAnimationComplete(true);
    const t = setTimeout(() => setCanScroll(true), 400);
    return () => clearTimeout(t);
  }, [leftRevealed, rightRevealed, leftChars.length, rightChars.length]);

  // Scroll to transition
  useEffect(() => {
    if (!canScroll) return;
    const opts: AddEventListenerOptions = { passive: false };
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        e.preventDefault();
        onComplete();
        window.removeEventListener("wheel", handleWheel, opts);
      }
    };
    window.addEventListener("wheel", handleWheel, opts);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [canScroll, onComplete]);

  const baseClass =
    "font-mono font-light uppercase leading-[0.9] tracking-tight text-primary select-none";

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-auto bg-background"
      initial={false}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className="min-h-screen w-full grid grid-cols-2 gap-8 md:gap-16 lg:gap-24 xl:gap-32 px-6 sm:px-8 md:px-12 lg:px-16 py-12 flex items-center justify-items-center">
        {/* Left column */}
        <div className="flex flex-col items-end justify-center text-right w-full">
          <p
            className={`${baseClass} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]`}
            style={{
              textShadow:
                theme === "dark"
                  ? "0 0 80px hsl(var(--primary) / 0.25)"
                  : "0 0 60px hsl(var(--primary) / 0.15)",
            }}
          >
            <ScrambleText
              text={leftWords.join(" ")}
              revealedCount={leftRevealed}
            />
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col items-start justify-center text-left w-full">
          <p
            className={`${baseClass} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]`}
            style={{
              textShadow:
                theme === "dark"
                  ? "0 0 80px hsl(var(--primary) / 0.25)"
                  : "0 0 60px hsl(var(--primary) / 0.15)",
            }}
          >
            <ScrambleText
              text={rightWords.join(" ")}
              revealedCount={rightRevealed}
            />
          </p>
        </div>
      </div>

      {animationComplete && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.4em] uppercase text-muted-foreground font-light"
          >
            — Rumi
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground/70 font-light"
          >
            Scroll to enter
          </motion.p>
        </div>
      )}
    </motion.div>
  );
}
