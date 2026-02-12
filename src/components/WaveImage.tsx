import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  uniform sampler2D uTexture;
  uniform vec2 uCursor;
  uniform float uTime;
  uniform float uHover;
  uniform float uAspect;

  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec2 toCursor = uv - uCursor;
    toCursor.x *= uAspect;
    float dist = length(toCursor);

    float wave1 = sin(dist * 18.0 - uTime * 5.0) * 0.5 + 0.5;
    float wave2 = sin(dist * 12.0 - uTime * 3.5 + 1.0) * 0.5 + 0.5;
    float falloff = exp(-dist * 2.2);
    float strength = (wave1 * 0.6 + wave2 * 0.4) * falloff * uHover * 0.028;

    vec2 dir = dist > 0.001 ? normalize(toCursor) : vec2(0.0);
    uv += dir * strength;
    uv.x /= uAspect;
    uv += vec2(dir.y, -dir.x) * strength * 0.3 / uAspect;

    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
  }
`;

interface WaveImageProps {
  src: string;
  alt: string;
  className?: string;
}

function setupScene(container: HTMLDivElement, image: HTMLImageElement) {
  const scene = new THREE.Scene();
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  const aspect = width / height;

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  camera.position.z = 0;

  const texture = new THREE.Texture(image);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;

  const uniforms = {
    uTexture: { value: texture },
    uCursor: { value: new THREE.Vector2(0.5, 0.5) },
    uTime: { value: 0 },
    uHover: { value: 0 },
    uAspect: { value: aspect },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader: VERTEX_SHADER,
    fragmentShader: FRAGMENT_SHADER,
    uniforms,
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.inset = "0";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  container.appendChild(renderer.domElement);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height;
    uniforms.uCursor.value.set(x, y);
  };

  const handleMouseEnter = () => {
    uniforms.uHover.value = 1;
  };

  const handleMouseLeave = () => {
    uniforms.uHover.value = 0;
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseenter", handleMouseEnter);
  container.addEventListener("mouseleave", handleMouseLeave);

  let rafId = 0;
  const startTime = performance.now() / 1000;

  function loop() {
    uniforms.uTime.value = performance.now() / 1000 - startTime;
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(loop);
  }
  rafId = requestAnimationFrame(loop);

  const onResize = () => {
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    if (w === 0 || h === 0) return;
    uniforms.uAspect.value = w / h;
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  window.addEventListener("resize", onResize);

  return () => {
    window.removeEventListener("resize", onResize);
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseenter", handleMouseEnter);
    container.removeEventListener("mouseleave", handleMouseLeave);
    cancelAnimationFrame(rafId);
    geometry.dispose();
    material.dispose();
    texture.dispose();
    renderer.dispose();
    if (renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
  };
}

const WaveImage = ({ src, alt, className = "" }: WaveImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !src) return;

    let teardown: (() => void) | null = null;
    const image = new Image();
    image.crossOrigin = "anonymous";

    image.onload = () => {
      if (!mountedRef.current || !containerRef.current) return;
      setLoaded(true);
      teardown = setupScene(container, image);
    };

    image.src = src;

    return () => {
      image.onload = null;
      image.src = "";
      teardown?.();
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ position: "relative", minHeight: loaded ? undefined : 24 }}
      role="img"
      aria-label={alt}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" aria-hidden />
      )}
    </div>
  );
};

export default WaveImage;
