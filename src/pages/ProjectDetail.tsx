import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WaveImage from "@/components/WaveImage";
import { projects, projectImages, projectGallery } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/expertise" replace />;

  const heroImage = projectImages[project.slug];
  const gallery = projectGallery[project.slug];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-screen pt-40 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
          >
            {project.tagline}
          </motion.p>

          {/* Hero Image */}
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg overflow-hidden mb-8 aspect-video"
            >
              <WaveImage src={heroImage} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>
          )}

          {/* Gallery (additional images after hero) */}
          {gallery && gallery.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16"
            >
              {gallery.slice(1).map((src, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-foreground/10 aspect-video">
                  <WaveImage src={src} alt={`${project.title} ${i + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          )}

          {/* Meta Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-foreground/10 py-8 mb-16"
          >
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Role</p>
              <p className="font-serif text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Year</p>
              <p className="font-serif text-foreground">{project.year}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Duration</p>
              <p className="font-serif text-foreground">{project.duration}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Type</p>
              <p className="font-serif text-foreground">Front-End</p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-16"
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-primary border border-primary/30 px-4 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-16"
          >
            <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
              Key Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="border border-foreground/10 rounded-lg p-5"
                >
                  <p className="font-serif text-foreground leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Detailed Writeup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
              Deep Dive
            </h3>
            <div className="flex flex-col gap-6">
              {project.details.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-serif text-lg text-foreground/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
