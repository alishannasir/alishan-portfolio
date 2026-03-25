import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StrategySection from "@/components/StrategySection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import Footer from "@/components/Footer";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const Index = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />      
      <main>
        <HeroSection />
        <StrategySection />
        <SelectedWorkSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
