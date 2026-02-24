import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WaveImage from "@/components/WaveImage";
import { projects, projectImages } from "@/data/projects";
import { cn } from "@/lib/utils";

function WorkThumb({
  id: _id,
  href,
  indexLabel,
  title,
  isHovered,
  isDimmed,
  onEnter,
  onLeave,
  cursorX,
  cursorY,
  parallaxStrength = 28,
  imageSrc,
}: {
  id: string;
  href?: string;
  indexLabel: string;
  title: string;
  isHovered: boolean;
  isDimmed: boolean;
  onEnter: () => void;
  onLeave: () => void;
  cursorX: number;
  cursorY: number;
  parallaxStrength?: number;
  imageSrc: string | undefined;
}) {
  const effectiveStrength = parallaxStrength ?? 28;
  const offsetX = cursorX * effectiveStrength;
  const offsetY = cursorY * (effectiveStrength * 0.7);

  const scale = isHovered ? 1.08 : isDimmed ? 0.9 : 1;

  const Wrapper = href ? Link : "div";
  const wrapperProps =
    Wrapper === Link
      ? { to: href as string }
      : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      onPointerEnter={onEnter}
      onFocus={onEnter}
      onBlur={onLeave}
      className="block outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
      aria-label={href ? `Open ${title} project` : title}
    >
      <motion.div
        className={cn(
          "relative overflow-hidden bg-secondary/40 aspect-[16/10]",
          "origin-center transition-[filter,opacity] duration-300 ease-out will-change-transform",
          isDimmed && "blur-md opacity-30",
          isHovered && "opacity-100"
        )}
        animate={{ x: offsetX, y: offsetY, scale }}
        transition={{ type: "spring", stiffness: 55, damping: 18, mass: 0.55 }}
      >
        {imageSrc ? (
          <WaveImage src={imageSrc} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full" />
        )}

        <div
          className={cn(
            "absolute inset-0 grid place-items-center transition-opacity duration-200",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          aria-hidden
        >
          <span className="text-primary text-4xl sm:text-5xl leading-none select-none">+</span>
        </div>
      </motion.div>

      <p className="mt-3 text-primary text-xs tracking-widest uppercase">
        ({indexLabel}) {title}
      </p>
    </Wrapper>
  );
}

export default function SelectedWorkSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const projectThumbs = projects.map((project, index) => ({
    kind: "project" as const,
    id: project.slug,
    href: `/work/${project.slug}`,
    indexLabel: String(index + 1),
    title: project.title.toUpperCase(),
    imageSrc: projectImages[project.slug],
  }));

  const duplicateThumbs = projectThumbs.map((thumb, i) => ({
    ...thumb,
    id: `${thumb.id}-alt`,
    indexLabel: String(projectThumbs.length + i + 1),
  }));

  const allThumbs = [...projectThumbs, ...duplicateThumbs];

  const layout: {
    top: string;
    left: string;
    width: string;
    parallax: number;
    dirX: 1 | -1;
    dirY: 1 | -1;
  }[] = [
    // 1: follows mouse, large parallax
    { top: "0%", left: "10%", width: "40%", parallax: 40, dirX: 1, dirY: 1 },
    // 2: opposite X, subtle Y
    { top: "4%", left: "54%", width: "34%", parallax: 32, dirX: -1, dirY: 1 },
    // 3: opposite Y
    { top: "40%", left: "8%", width: "40%", parallax: 30, dirX: 1, dirY: -1 },
    // 4: opposite both
    { top: "44%", left: "56%", width: "32%", parallax: 26, dirX: -1, dirY: -1 },
    // 5: gentle follow
    { top: "78%", left: "14%", width: "34%", parallax: 24, dirX: 1, dirY: 1 },
    // 6: gentle opposite X
    { top: "82%", left: "58%", width: "30%", parallax: 22, dirX: -1, dirY: 1 },
  ];

  return (
    <section className="py-24 md:py-32" aria-label="Selected work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-baseline gap-4">
          <h2 className="text-primary text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase">
            SELECTED WORK
          </h2>
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            ({projects.length})
          </span>
        </div>

        <div
          className="mt-14"
          onPointerLeave={() => setHoveredId(null)}
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            const relX = (event.clientX - rect.left) / rect.width - 0.5;
            const relY = (event.clientY - rect.top) / rect.height - 0.5;
            setCursor({ x: relX, y: relY });
          }}
        >
          <div className="relative min-h-[820px] md:min-h-[880px] lg:min-h-[920px] max-w-5xl mx-auto">
            {allThumbs.map((thumb, index) => {
              const base = layout[index] ?? layout[layout.length - 1];
              const config = base;
              const id = thumb.id;
              const isHovered = hoveredId === id;
              const isDimmed = !!hoveredId && hoveredId !== id;

              return (
                <div
                  key={id}
                  className="absolute"
                  style={{
                    top: config.top,
                    left: config.left,
                    width: config.width,
                  }}
                >
                  <WorkThumb
                    id={id}
                    href={thumb.href}
                    indexLabel={thumb.indexLabel}
                    title={thumb.title}
                    isHovered={isHovered}
                    isDimmed={isDimmed}
                    onEnter={() => setHoveredId(id)}
                    onLeave={() => setHoveredId(null)}
                    cursorX={cursor.x * config.dirX}
                    cursorY={cursor.y * config.dirY}
                    parallaxStrength={config.parallax}
                    imageSrc={thumb.imageSrc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

