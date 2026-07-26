import { Quote } from "lucide-react";
import { feedback } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Feedback() {
  return (
    <Section id="feedback" eyebrow="Client Feedback" title="What clients say">
      <Reveal className="mx-auto max-w-3xl">
        <figure className="glass-panel lift rounded-3xl p-8 sm:p-10">
          <div className="relative z-10">
            <Quote className="size-7 text-primary" aria-hidden="true" />
            <blockquote className="mt-5 text-base leading-relaxed text-balance sm:text-lg">
              “{feedback.quote}”
            </blockquote>
            <figcaption className="mt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
              {feedback.label}
            </figcaption>
          </div>
        </figure>
      </Reveal>
    </Section>
  );
}