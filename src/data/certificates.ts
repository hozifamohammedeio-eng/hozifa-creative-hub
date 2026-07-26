import openai from "@/assets/cert-openai-ai-foundations.png.asset.json";
import arc from "@/assets/cert-arc-english.png.asset.json";
import aiFluency from "@/assets/cert-anthropic-ai-fluency.png.asset.json";
import claude101 from "@/assets/cert-anthropic-claude-101.png.asset.json";
import js1 from "@/assets/cert-tofas-js-1.png.asset.json";
import js2 from "@/assets/cert-tofas-js-2.png.asset.json";
import capcut from "@/assets/cert-courssat-capcut.png.asset.json";
import communication from "@/assets/cert-yanfaa-communication.png.asset.json";
import marketing from "@/assets/cert-m3aarf-marketing.png.asset.json";

export const certificateFilters = [
  "All",
  "Artificial Intelligence",
  "Video & Photography",
  "Communication & Marketing",
  "Programming",
  "Productivity & Office",
] as const;

export type CertificateFilter = (typeof certificateFilters)[number];
export type CertificateCategory = Exclude<CertificateFilter, "All">;

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  /** Certificate image URL, when available. */
  image?: string;
}

export const certificates: Certificate[] = [
  {
    id: "openai-ai-foundations",
    title: "AI Foundations",
    issuer: "OpenAI Academy",
    category: "Artificial Intelligence",
    image: openai.url,
  },
  {
    id: "arc-english-103",
    title: "103 Foundations of English",
    issuer: "ARC",
    category: "Communication & Marketing",
    image: arc.url,
  },
  {
    id: "anthropic-ai-fluency",
    title: "AI Fluency: AI Capabilities & Limitations",
    issuer: "Anthropic",
    category: "Artificial Intelligence",
    image: aiFluency.url,
  },
  {
    id: "anthropic-claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    category: "Artificial Intelligence",
    image: claude101.url,
  },
  {
    id: "tofas-javascript-1",
    title: "JavaScript Level 1",
    issuer: "TOFAS",
    category: "Programming",
    image: js1.url,
  },
  {
    id: "tofas-javascript-2",
    title: "JavaScript Level 2",
    issuer: "TOFAS",
    category: "Programming",
    image: js2.url,
  },
  {
    id: "edraak-intro-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "Edraak",
    category: "Artificial Intelligence",
  },
  {
    id: "courssat-capcut",
    title: "CapCut and AI Short-Video Production",
    issuer: "Courssat Plus",
    category: "Video & Photography",
    image: capcut.url,
  },
  {
    id: "yanfaa-photography",
    title: "Photography Basics",
    issuer: "Yanfaa",
    category: "Video & Photography",
  },
  {
    id: "yanfaa-communication",
    title: "Communication Skills",
    issuer: "Yanfaa",
    category: "Communication & Marketing",
    image: communication.url,
  },
  {
    id: "yanfaa-mobile-photography",
    title: "Mobile Photography Basics",
    issuer: "Yanfaa",
    category: "Video & Photography",
  },
  {
    id: "m3aarf-marketing",
    title: "Learn Marketing",
    issuer: "M3aarf",
    category: "Communication & Marketing",
    image: marketing.url,
  },
  {
    id: "m3aarf-time-management",
    title: "Time Management Skills",
    issuer: "M3aarf",
    category: "Productivity & Office",
  },
  {
    id: "mindluster-letterhead",
    title: "Create a Letterhead in Microsoft Word",
    issuer: "Mind Luster",
    category: "Productivity & Office",
  },
];