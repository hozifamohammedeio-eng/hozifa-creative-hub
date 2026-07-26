import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

/**
 * To use a real profile photo, add it to `public/portfolio-assets/profile.jpg`
 * and set PROFILE_IMAGE below. The monogram frame is used until then.
 */
const PROFILE_IMAGE: string | null = null;

export function Hero() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 lg:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="glass-soft mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            {site.location}
          </p>
          <h1 className="text-gradient text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {site.heroHeadline}
          </h1>
          <p className="mt-4 text-sm font-medium tracking-wide text-primary sm:text-base">{site.title}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {site.heroDescription}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="gloss glass-soft glow-cyan inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="gloss inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex justify-center lg:justify-end">
          <div className="relative float-slow">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-[conic-gradient(from_140deg,var(--cyan-glow),var(--purple-glow),var(--emerald-glow),var(--cyan-glow))] opacity-30 blur-3xl"
            />
            <div className="glass-panel relative grid size-56 place-items-center rounded-full sm:size-72">
              {PROFILE_IMAGE ? (
                <img
                  src={PROFILE_IMAGE}
                  alt="Hozifa Mohammad"
                  loading="eager"
                  className="relative z-10 size-[92%] rounded-full object-cover"
                />
              ) : (
                <span
                  role="img"
                  aria-label="Hozifa Mohammad"
                  className="text-gradient relative z-10 text-6xl font-semibold tracking-tight sm:text-7xl"
                >
                  HM
                </span>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}