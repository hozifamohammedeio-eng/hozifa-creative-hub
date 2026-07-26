import { services } from "@/data/services";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I can help you with"
      subtitle="From social-media video to verified research and business documents — delivered in Arabic and English."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 60}>
            <article className="glass-panel lift h-full rounded-3xl p-6">
              <div className="relative z-10">
                <span className="glass-soft mb-5 grid size-11 place-items-center rounded-2xl text-primary">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}