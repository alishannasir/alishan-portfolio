import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

function getRandomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function scrambleTick(
  text: string,
  resolvedCount: number
): string {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += i < resolvedCount ? text[i] : getRandomChar();
  }
  return result;
}

interface HoverTextProps {
  text: string;
  className?: string;
}

const RESOLVE_DURATION_MS = 500;
const FRAME_MS = 35;

const HoverText = ({ text, className = "" }: HoverTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    startTimeRef.current = Date.now();

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(1, elapsed / RESOLVE_DURATION_MS);
      const resolvedCount = Math.min(text.length, Math.floor(progress * text.length));

      setDisplayText(scrambleTick(text, resolvedCount));

      if (resolvedCount >= text.length) {
        clearInterval(intervalId);
      }
    }, FRAME_MS);

    return () => clearInterval(intervalId);
  }, [isHovered, text]);

  return (
    <motion.span
      className={`inline-flex cursor-default ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ color: "hsl(var(--primary))" }}
      transition={{ duration: 0.2 }}
    >
      {text.split("").map((originalChar, i) => (
        <span
          key={i}
          className="inline-block relative align-bottom"
        >
          <span aria-hidden className="invisible select-none">
            {originalChar}
          </span>
          <span className="absolute left-0 top-0">
            {displayText[i] ?? originalChar}
          </span>
        </span>
      ))}
    </motion.span>
  );
};

export default HoverText;
