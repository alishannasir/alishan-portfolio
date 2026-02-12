import { useEffect, useState } from "react";

/**
 * Returns progress 0–1 through a section based on scroll.
 * When section top hits viewport bottom, progress is 0.
 * When section bottom hits viewport top, progress is 1.
 * So scrolling through the section drives the value.
 */
export function useSectionScrollProgress(sectionRef: React.RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId: number;

    const update = () => {
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        const sectionHeight = rect.height;

        if (sectionHeight <= 0) {
          setProgress(1);
          return;
        }

        const scrollable = sectionHeight - viewHeight;
        if (scrollable <= 0) {
          setProgress(rect.top <= viewHeight / 2 ? 1 : 0);
          return;
        }

        const scrolled = -rect.top;
        const raw = scrolled / scrollable;
        setProgress(Math.min(1, Math.max(0, raw)));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [sectionRef]);

  return progress;
}
