import openai from "@/assets/certs/openai-ai-foundations.png.asset.json";
import arc from "@/assets/certs/arc-english-103.png.asset.json";
import aiFluencyPreview from "@/assets/certs/ai-fluency-preview.jpg.asset.json";
import aiFluencyPdf from "@/assets/certs/ai-fluency.pdf.asset.json";
import claudePreview from "@/assets/certs/claude-101-preview.jpg.asset.json";
import claudePdf from "@/assets/certs/claude-101.pdf.asset.json";
import capcutPreview from "@/assets/certs/capcut-preview.jpg.asset.json";
import capcutPdf from "@/assets/certs/capcut.pdf.asset.json";
import edraakPreview from "@/assets/certs/edraak-ai-preview.jpg.asset.json";
import edraakPdf from "@/assets/certs/edraak-ai.pdf.asset.json";
import communicationPreview from "@/assets/certs/communication-preview.jpg.asset.json";
import communicationPdf from "@/assets/certs/communication.pdf.asset.json";
import marketingPreview from "@/assets/certs/marketing-preview.jpg.asset.json";
import marketingPdf from "@/assets/certs/marketing.pdf.asset.json";
import js2Preview from "@/assets/certs/js-2-preview.jpg.asset.json";
import js2Pdf from "@/assets/certs/js-2.pdf.asset.json";
import js1Preview from "@/assets/certs/js-1-preview.jpg.asset.json";
import js1Pdf from "@/assets/certs/js-1.pdf.asset.json";

export const certificateFilters = [
  "All",
  "Artificial Intelligence",
  "Video & Photography",
  "Communication & Marketing",
  "Programming",
] as const;

export type CertificateFilter = (typeof certificateFilters)[number];
export type CertificateCategory = Exclude<CertificateFilter, "All">;

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  /** Preview image of the certificate. */
  image: string;
  /** Original PDF, when the certificate was issued as a PDF. */
  pdf?: string;
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
    id: "anthropic-ai-fluency",
    title: "AI Fluency: AI Capabilities & Limitations",
    issuer: "Anthropic",
    category: "Artificial Intelligence",
    image: aiFluencyPreview.url,
    pdf: aiFluencyPdf.url,
  },
  {
    id: "anthropic-claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    category: "Artificial Intelligence",
    image: claudePreview.url,
    pdf: claudePdf.url,
  },
  {
    id: "courssat-capcut",
    title: "CapCut and AI Short-Video Production",
    issuer: "Courssat Plus",
    category: "Video & Photography",
    image: capcutPreview.url,
    pdf: capcutPdf.url,
  },
  {
    id: "edraak-intro-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "Edraak",
    category: "Artificial Intelligence",
    image: edraakPreview.url,
    pdf: edraakPdf.url,
  },
  {
    id: "yanfaa-communication",
    title: "Communication Skills",
    issuer: "Yanfaa",
    category: "Communication & Marketing",
    image: communicationPreview.url,
    pdf: communicationPdf.url,
  },
  {
    id: "m3aarf-marketing",
    title: "Learn Marketing",
    issuer: "M3aarf",
    category: "Communication & Marketing",
    image: marketingPreview.url,
    pdf: marketingPdf.url,
  },
  {
    id: "tofas-javascript-2",
    title: "JavaScript Level 2",
    issuer: "TOFAS",
    category: "Programming",
    image: js2Preview.url,
    pdf: js2Pdf.url,
  },
  {
    id: "tofas-javascript-1",
    title: "JavaScript Level 1",
    issuer: "TOFAS",
    category: "Programming",
    image: js1Preview.url,
    pdf: js1Pdf.url,
  },
  {
    id: "arc-english-103",
    title: "103 Foundations of English",
    issuer: "ARC",
    category: "Communication & Marketing",
    image: arc.url,
  },
];
