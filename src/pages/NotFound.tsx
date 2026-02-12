import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollZigzagLine from "@/components/ScrollZigzagLine";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { loveImages } from "@/data/adventureImages";

const NotFound = () => {
  const location = useLocation();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6">
      <ScrollZigzagLine variant="notFound" scrollProgress={scrollProgress} />
      <div className="text-center max-w-md">
        <img
          src={loveImages[2]}
          alt=""
          className="mx-auto w-24 h-24 rounded-md object-cover border border-foreground/10 mb-6"
        />
        <h1 className="mb-2 text-4xl font-bold">404</h1>
        <p className="mb-2 text-lg text-muted-foreground">This page went on an adventure.</p>
        <p className="mb-6 font-serif text-sm text-muted-foreground/80 italic">You can go home though.</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
