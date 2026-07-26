import type { LucideIcon } from "lucide-react";
import {
  Scissors,
  Clapperboard,
  Sparkles,
  Share2,
  Target,
  Search,
  Table,
  LineChart,
  FileText,
  Languages,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Short-form Video Editing",
    description: "Reels, Shorts and TikToks edited for pacing, retention and clean storytelling.",
    icon: Scissors,
  },
  {
    title: "CapCut Editing",
    description: "Fast, polished CapCut edits with captions, transitions and sound design.",
    icon: Clapperboard,
  },
  {
    title: "AI-assisted Content",
    description: "AI visuals, voice and B-roll combined with human editing and quality control.",
    icon: Sparkles,
  },
  {
    title: "Social Media Videos",
    description: "Platform-ready vertical and horizontal cuts sized for every feed.",
    icon: Share2,
  },
  {
    title: "Lead Generation",
    description: "Verified, targeted lead lists with evidence for every contact collected.",
    icon: Target,
  },
  {
    title: "Web Research",
    description: "Structured research from public sources, documented and easy to review.",
    icon: Search,
  },
  {
    title: "Excel and Data Entry",
    description: "Accurate data entry, cleaning and organized spreadsheets you can build on.",
    icon: Table,
  },
  {
    title: "Market Research",
    description: "Market, competitor and pricing analysis summarized into clear findings.",
    icon: LineChart,
  },
  {
    title: "PDF and Word Projects",
    description: "Business documents, reports and templates formatted to a professional standard.",
    icon: FileText,
  },
  {
    title: "Arabic and English Content Support",
    description: "Bilingual content, captions and documents in both Arabic and English.",
    icon: Languages,
  },
];