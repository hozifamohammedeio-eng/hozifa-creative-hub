import { Clapperboard, Database, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const highlights = [
  { icon: Clapperboard, label: "Video editing", text: "Short-form and cinematic edits" },
  { icon: Sparkles, label: "AI content", text: "AI-assisted production with human QC" },
  { icon: Database, label: "Research & data", text: "Verified leads and organized data" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <p className="glass-soft mb-4 w-fit rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            About me
          </p>
          <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Clear thinking behind every delivery
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{site.about}</p>
        </Reveal>

        <Reveal delay={120} className="grid gap-4">
          {highlights.map((item) => (
            <div key={item.label} className="glass-panel lift rounded-3xl p-5">
              <div className="relative z-10 flex items-center gap-4">
                <span className="glass-soft grid size-11 shrink-0 place-items-center rounded-2xl text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-muted-foreground sm:text-sm">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}