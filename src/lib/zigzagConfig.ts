/**
 * Per-page zigzag line design.
 * Each variant produces a different zigzag shape from top to bottom.
 */
export type ZigzagVariant =
  | "index"
  | "about"
  | "expertise"
  | "connect"
  | "projectDetail"
  | "notFound";

export type ZigzagConfig = {
  /** Number of zigzag segments from top to bottom. */
  segments: number;
  /** Hex color for the line. */
  color: string;
  /** Line opacity 0–1. */
  opacity: number;
  /** "saw" = sharp edge-to-edge, "sine" = smooth wave full width. */
  style: "saw" | "sine";
};

/** Maximum 4–5 zigzag turns (segments) so there’s lots of vertical space between each turn. */
const configs: Record<ZigzagVariant, ZigzagConfig> = {
  index: {
    segments: 5,
    color: "#c73838",
    opacity: 0.85,
    style: "saw",
  },
  about: {
    segments: 4,
    color: "#b85252",
    opacity: 0.7,
    style: "sine",
  },
  expertise: {
    segments: 5,
    color: "#d44a4a",
    opacity: 0.8,
    style: "saw",
  },
  connect: {
    segments: 4,
    color: "#a63d3d",
    opacity: 0.75,
    style: "sine",
  },
  projectDetail: {
    segments: 5,
    color: "#cc5555",
    opacity: 0.7,
    style: "saw",
  },
  notFound: {
    segments: 4,
    color: "#e06060",
    opacity: 0.9,
    style: "sine",
  },
};

export function getZigzagConfig(variant: ZigzagVariant): ZigzagConfig {
  return configs[variant];
}

/**
 * Build zigzag points from top (y=1) to bottom (y=-1) in NDC.
 * X spans -1 to 1 (full viewport width, edge to edge).
 * Returns flat array [x,y,z, x,y,z, ...] for Three.js BufferAttribute.
 */
export function buildZigzagPoints(config: ZigzagConfig): Float32Array {
  const { segments, style } = config;
  const count = segments + 1;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / segments) * 2; // 1 at top, -1 at bottom
    let x: number;
    if (style === "saw") {
      x = i % 2 === 0 ? 1 : -1; // full width: left edge (-1) to right edge (1)
    } else {
      // ~2.5 waves over full height so few broad turns, lots of vertical space
      x = Math.sin((i / segments) * Math.PI * 2.5);
    }
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = 0;
  }

  return positions;
}
