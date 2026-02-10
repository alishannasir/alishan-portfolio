import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VerveCase from "./pages/VerveCase";
import SpotifyCase from "./pages/SpotifyCase";
import FigmaCase from "./pages/FigmaCase";
import NotionCase from "./pages/NotionCase";
import People from "./pages/People";
import Expertise from "./pages/Expertise";
import ProjectDetail from "./pages/ProjectDetail";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/verve" element={<VerveCase />} />
          <Route path="/spotify" element={<SpotifyCase />} />
          <Route path="/figma" element={<FigmaCase />} />
          <Route path="/notion" element={<NotionCase />} />
          <Route path="/people" element={<People />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/connect" element={<Connect />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
