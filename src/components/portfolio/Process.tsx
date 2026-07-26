import { processSteps } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Work Process"
      title="How a project runs"
      subtitle="A simple, transparent process from the first message to the final file."
    >
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal as="li" key={step.step} delay={index * 80} className="h-full">
            <article className="glass-panel lift h-full rounded-3xl p-6">
              <div className="relative z-10">
                <span className="text-gradient text-3xl font-semibold">{step.step}</span>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}