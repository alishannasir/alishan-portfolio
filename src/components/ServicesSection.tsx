import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/contexts/ThemeContext";
import { useSectionScrollProgress } from "@/hooks/useSectionScrollProgress";
import { services } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";
import { getAdventureImage } from "@/data/adventureImages";

function useServiceIndex(sectionProgress: number): number {
  const count = services.length;
  if (count === 0) return 0;
  const raw = sectionProgress * count;
  return Math.min(count - 1, Math.max(0, Math.floor(raw)));
}

const CIRCLE_SIZE = 48;
const CIRCLE_STROKE = 2;
const CIRCLE_R = (CIRCLE_SIZE - CIRCLE_STROKE) / 2;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_R;

function CircleCounter({ current, total }: { current: number; total: number }) {
  const progress = total > 0 ? (current + 1) / total : 0;
  const strokeDashoffset = CIRCLE_CIRCUMFERENCE * (1 - progress);

  return (
    <div className="relative inline-flex items-center justify-center" aria-hidden>
      <svg
        width={CIRCLE_SIZE}
        height={CIRCLE_SIZE}
        className="-rotate-90"
        aria-hidden
      >
        <circle
          cx={CIRCLE_SIZE / 2}
          cy={CIRCLE_SIZE / 2}
          r={CIRCLE_R}
          fill="none"
          stroke="currentColor"
          strokeWidth={CIRCLE_STROKE}
          className="text-border opacity-40"
        />
        <motion.circle
          cx={CIRCLE_SIZE / 2}
          cy={CIRCLE_SIZE / 2}
          r={CIRCLE_R}
          fill="none"
          stroke="currentColor"
          strokeWidth={CIRCLE_STROKE}
          strokeLinecap="round"
          className="text-primary"
          strokeDasharray={CIRCLE_CIRCUMFERENCE}
          initial={false}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="absolute text-foreground text-sm font-medium tabular-nums">
        {current + 1}
      </span>
    </div>
  );
}

function ServicesThreeBackground({ className }: { className?: string }) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -0.5, 1);
    camera.position.z = 0.5;
    cameraRef.current = camera;

    const color = theme;
    const intensity = theme;
    const geometry = new THREE.PlaneGeometry(2.2, 2.2, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: intensity,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    function render() {
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    }

    function loop() {
      render();
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);

    const onResize = () => {
      if (!container || !rendererRef.current) return;
      rendererRef.current.setSize(container.offsetWidth, container.offsetHeight);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      render();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      meshRef.current = null;
    };
  }, [theme]);

  return <div ref={containerRef} className={className} aria-hidden />;
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionProgress = useSectionScrollProgress(sectionRef);
  const index = useServiceIndex(sectionProgress);
  const service = services[index];

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent"
      style={{ minHeight: `${services.length * 100}vh` }}
      aria-label="Services"
    >
      <div className="sticky top-0 h-screen w-full flex overflow-hidden items-center justify-center">
        <ServicesThreeBackground className="absolute inset-0 z-0 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 w-full h-full flex flex-col justify-around items-center">
          <div className="flex-1 min-h-0 flex flex-col lg:flex-row items-center justify-center w-full">
            <div className="flex-1 min-w-0 flex flex-col justify-center lg:pr-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-foreground mb-8 md:mb-12">
                    {service.title}
                  </h2>
                </motion.div>
              </AnimatePresence>

              <div className="hidden lg:flex items-center gap-3 text-muted-foreground">
                <CircleCounter current={index} total={services.length} />
              </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:items-right lg:justify-right lg:py-16 flex-col gap-3">
              <img
                src={getAdventureImage(index)}
                alt=""
                className="max-w-full max-h-[54vh] w-full h-[54vh] object-contain justify-right items-right object-right"
              />
              <p className="font-serif text-xs text-muted-foreground/70 lg:text-right italic">
                Also: chasing light & freezing moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
