import arabicPodcast from "@/assets/media/arabic-podcast.mp4.asset.json";
import luxuryResort from "@/assets/media/luxury-resort-reel.mp4.asset.json";
import islamicEducation from "@/assets/media/islamic-education.mov.asset.json";
import marsaAlam from "@/assets/media/marsa-alam-film.mov.asset.json";

export type ProjectCategory =
  | "Video Editing"
  | "AI Content"
  | "Research"
  | "Data & Excel"
  | "Business Documents";

export const projectFilters = [
  "All",
  "Video Editing",
  "AI Content",
  "Research",
  "Data & Excel",
  "Business Documents",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  orientation: "vertical" | "horizontal";
  /**
   * Optional real media. Drop files into `public/portfolio-assets/` and set the
   * path here, e.g. "/portfolio-assets/luxury-resort-reel.mp4".
   * Video projects open in an accessible modal with native controls.
   */
  video?: string;
  /** MIME type of the video source, e.g. "video/mp4" or "video/quicktime". */
  videoType?: string;
  /** Optional poster image for the video, e.g. "/portfolio-assets/poster.jpg" */
  poster?: string;
  /** Optional downloadable document, e.g. "/portfolio-assets/feasibility-study.pdf" */
  file?: string;
  fileLabel?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "luxury-resort-travel-reel",
    title: "Luxury Resort Travel Reel",
    description:
      "Vertical travel video with resort footage, captions, smooth pacing, and cinematic styling.",
    category: "Video Editing",
    orientation: "vertical",
    video: luxuryResort.url,
    videoType: "video/mp4",
    tags: ["CapCut", "Captions", "Reel"],
  },
  {
    id: "3d-islamic-educational-video",
    title: "3D Islamic Educational Video",
    description:
      "AI-assisted Arabic educational video featuring a 3D child character, subtitles, and visual storytelling.",
    category: "AI Content",
    orientation: "vertical",
    video: "/videos/islamic-education.mp4.mp4",
    videoType: "video/quicktime",
    tags: ["AI Video", "Arabic", "Subtitles"],
  },
  {
    id: "arabic-podcast-short",
    title: "Arabic Podcast Short",
    description:
      "Short-form podcast edit with Arabic captions, clean cuts, and vertical social-media formatting.",
    category: "Video Editing",
    orientation: "vertical",
    video: arabicPodcast.url,
    videoType: "video/mp4",
    tags: ["Podcast", "Arabic Captions", "Shorts"],
  },
  {
    id: "cinematic-ai-brand-reveal",
    title: "Cinematic AI Brand Reveal",
    description:
      "A short AI-generated cinematic concept with corporate visuals and professional brand presentation.",
    category: "AI Content",
    orientation: "horizontal",
    tags: ["AI Video", "Branding", "Cinematic"],
  },
  {
    id: "marsa-alam-travel-film",
    title: "Marsa Alam Travel Film",
    description:
      "Horizontal travel montage featuring Red Sea and boat footage with visual effects and cinematic editing.",
    category: "Video Editing",
    orientation: "horizontal",
    video: "/videos/marsa-alam-film.mp4.mp4",
    videoType: "video/quicktime",
    tags: ["Travel", "VFX", "Colour"],
  },
  {
    id: "ecommerce-lead-generation",
    title: "Ecommerce Lead Generation",
    description:
      "Verified ecommerce founder research with platform evidence, LinkedIn activity, public sources, and quality-control checks.",
    category: "Research",
    orientation: "horizontal",
    file: "/documents/ecommerce-lead-generation-sample.xlsx",
    fileLabel: "Download Excel Sample",
    tags: ["Lead Gen", "Verification", "Excel"],
  },
  {
    id: "oman-ecommerce-business-plan",
    title: "Oman Ecommerce Business Plan",
    description:
      "Arabic business plan covering market entry, ecommerce operations, legal setup, imports, and implementation.",
    category: "Business Documents",
    orientation: "horizontal",
    file: "/documents/oman-ecommerce-business-plan.pdf",
    fileLabel: "View Business Plan",
    tags: ["Business Plan", "Arabic", "Word"],
  },
  {
    id: "oman-feasibility-study",
    title: "Oman Feasibility Study",
    description:
      "Business feasibility study with market analysis, estimated costs, pricing, break-even calculations, roadmap, and risks.",
    category: "Data & Excel",
    orientation: "horizontal",
    file: "/documents/oman-ecommerce-feasibility-study.pdf",
    fileLabel: "View Feasibility Study",
    tags: ["Feasibility", "Excel", "Break-even"],
  },
];
