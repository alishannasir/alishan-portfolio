import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import FloatingThemeToggle from "@/components/FloatingThemeToggle";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Expertise from "@/pages/Expertise";
import ProjectDetail from "@/pages/ProjectDetail";
import Connect from "@/pages/Connect";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

export default function AppWithIntro() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
