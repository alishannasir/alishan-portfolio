import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import RumiIntro from "@/components/RumiIntro";
import FloatingThemeToggle from "@/components/FloatingThemeToggle";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Expertise from "@/pages/Expertise";
import ProjectDetail from "@/pages/ProjectDetail";
import Connect from "@/pages/Connect";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();
const INTRO_SEEN_KEY = "alishan-intro-seen";

function hasSeenIntro(): boolean {
  try {
    return localStorage.getItem(INTRO_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markIntroSeen(): void {
  try {
    localStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {
    // ignore
  }
}

export default function AppWithIntro() {
  const [showIntro, setShowIntro] = useState(() => !hasSeenIntro());

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  const handleIntroComplete = () => {
    markIntroSeen();
    setShowIntro(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatePresence mode="wait">
            {showIntro ? (
              <RumiIntro key="intro" onComplete={handleIntroComplete} />
            ) : (
              <motion.div
                key="app"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="min-h-screen"
              >
                <FloatingThemeToggle />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/expertise" element={<Expertise />} />
                    <Route path="/work/:slug" element={<ProjectDetail />} />
                    <Route path="/connect" element={<Connect />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </motion.div>
            )}
          </AnimatePresence>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
