import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollZigzagLine from "@/components/ScrollZigzagLine";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import CursorImage from "@/components/CursorImage";
import { projects, projectImages } from "@/data/projects";

const Expertise = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const scrollProgress = useScrollProgress();

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollZigzagLine variant="expertise" scrollProgress={scrollProgress} />
      <Navigation />
      <main className="min-h-screen pt-40 pb-24 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl mb-8"
          >
            Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-20 leading-relaxed"
          >
            A selection of projects — field service management, e-commerce marketplaces, and HR SaaS.
          </motion.p>

          <div className="flex flex-col" onMouseMove={handleMouseMove}>
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/work/${project.slug}`}
                  className="group border-b border-foreground/10 py-10 block cursor-pointer hover:bg-[hsl(var(--surface-active))] transition-colors duration-200 px-4 -mx-4"
                  onMouseEnter={() => setHoveredProject(project.slug)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2" />
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span>{project.year}</span>
                    <span className="text-muted-foreground/40">·</span>
                    <span>{project.role}</span>
                  </div>
                  <p className="font-serif text-muted-foreground leading-relaxed">
                    {project.tagline}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Cursor-following image preview */}
      {hoveredProject && projectImages[hoveredProject] && (
        <CursorImage
          src={projectImages[hoveredProject]}
          alt={hoveredProject}
          visible={true}
          x={mousePos.x}
          y={mousePos.y}
        />
      )}

      <Footer />
    </div>
  );
};

export default Expertise;
