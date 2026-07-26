export interface SkillGroup {
  title: string;
  accent: "cyan" | "purple" | "emerald";
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Video",
    accent: "cyan",
    skills: [
      "CapCut",
      "DaVinci Resolve",
      "Short-form Editing",
      "Captions",
      "Reels and TikTok",
      "Visual Effects",
    ],
  },
  {
    title: "Research and data",
    accent: "emerald",
    skills: [
      "Web Research",
      "Lead Generation",
      "Excel",
      "Data Entry",
      "PDF and Word",
      "Data Verification",
    ],
  },
  {
    title: "Creative and AI",
    accent: "purple",
    skills: [
      "AI Video",
      "Prompt Writing",
      "Canva",
      "Social Media Content",
      "Arabic and English Content",
    ],
  },
];