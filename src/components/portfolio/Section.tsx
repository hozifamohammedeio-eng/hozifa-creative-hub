import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28", className)}>
      <Reveal className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        {eyebrow ? (
          <p className="glass-soft mx-auto mb-4 w-fit rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>
        ) : null}
      </Reveal>
      {children}
    </section>
  );
}