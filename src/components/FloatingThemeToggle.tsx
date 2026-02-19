import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const FloatingThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[55] w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary bg-background/90 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-[hsl(var(--surface-active))] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -4, 0],
      }}
      transition={{
        opacity: { duration: 0.4 },
        scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" aria-hidden />
      ) : (
        <Moon className="w-5 h-5" aria-hidden />
      )}
    </motion.button>
  );
};

export default FloatingThemeToggle;
