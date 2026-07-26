import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const accentText = {
  cyan: "text-cyan-glow",
  purple: "text-purple-glow",
  emerald: "text-emerald-glow",
} as const;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools and strengths"
      subtitle="The stack behind the videos, research and documents I deliver."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 90}>
            <article className="glass-panel lift h-full rounded-3xl p-6">
              <div className="relative z-10">
                <h3 className={cn("text-sm font-semibold tracking-[0.14em] uppercase", accentText[group.accent])}>
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="glass-soft rounded-full px-3 py-1.5 text-xs text-muted-foreground sm:text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}