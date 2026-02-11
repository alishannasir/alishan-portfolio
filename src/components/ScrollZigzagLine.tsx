import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/contexts/ThemeContext";
import type { ZigzagVariant } from "@/lib/zigzagConfig";
import {
  getZigzagConfig,
  buildZigzagPoints,
} from "@/lib/zigzagConfig";

const DARK_MODE_LINE_COLOR = "#4c44e4";

type ScrollZigzagLineProps = {
  variant: ZigzagVariant;
  scrollProgress: number;
};

export default function ScrollZigzagLine({
  variant,
  scrollProgress,
}: ScrollZigzagLineProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const lineRef = useRef<THREE.Line | null>(null);
  const geometryRef = useRef<THREE.BufferGeometry | null>(null);
  const configRef = useRef(getZigzagConfig(variant));
  const progressRef = useRef(scrollProgress);
  const rafRef = useRef<number>(0);

  progressRef.current = scrollProgress;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const config = getZigzagConfig(variant);
    configRef.current = config;
    const positions = buildZigzagPoints(config);
    const numPoints = positions.length / 3;

    const lineColor = theme === "dark" ? DARK_MODE_LINE_COLOR : config.color;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
    camera.position.z = 1;
    cameraRef.current = camera;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    geometry.setDrawRange(0, 0);
    geometryRef.current = geometry;

    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(lineColor),
      opacity: config.opacity,
      transparent: true,
    });

    const line = new THREE.Line(geometry, material);
    scene.add(line);
    lineRef.current = line;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    function render() {
      const prog = progressRef.current;
      const visibleCount = Math.max(
        2,
        Math.ceil(prog * numPoints)
      );
      geometry.setDrawRange(0, visibleCount);
      renderer.render(scene, camera);
    }

    function loop() {
      render();
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
      lineRef.current = null;
      geometryRef.current = null;
    };
  }, [variant, theme]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden
    />
  );
}
