import { useEffect, useState } from "react";

function getScrollProgress(): number {
  const { scrollY, innerHeight } = window;
  const docHeight = document.documentElement.scrollHeight - innerHeight;
  if (docHeight <= 0) return 1;
  return Math.min(1, Math.max(0, scrollY / docHeight));
}

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(() => getScrollProgress());

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        setProgress(getScrollProgress());
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    setProgress(getScrollProgress());

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  return progress;
}
