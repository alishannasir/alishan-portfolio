export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  duration: string;
  techStack: string[];
  highlights: string[];
  details: string[];
  /** Optional URL to the live site. When set, a "Live" button is shown on the Expertise page. */
  liveUrl?: string;
}
