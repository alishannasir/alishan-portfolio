import { motion } from "framer-motion";

interface HoverTextProps {
  text: string;
  className?: string;
}

const HoverText = ({ text, className = "" }: HoverTextProps) => {
  return (
    <motion.span
      className={`inline-block cursor-default ${className}`}
      whileHover={{ color: "hsl(var(--primary))" }}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.span>
  );
};

export default HoverText;
