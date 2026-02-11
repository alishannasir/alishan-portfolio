import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollZigzagLine from "@/components/ScrollZigzagLine";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const Index = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="min-h-screen bg-background">
      <ScrollZigzagLine variant="index" scrollProgress={scrollProgress} />
      <Navigation />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
