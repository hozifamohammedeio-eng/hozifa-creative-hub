import { Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/site";
import { Reveal } from "./Reveal";

const links = [
  { label: "Phone", value: contact.phone, href: `tel:${contact.phone}`, icon: Phone, external: false },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail, external: false },
  { label: "LinkedIn", value: "LinkedIn profile", href: contact.linkedin, icon: Linkedin, external: true },
  { label: "Instagram", value: "Instagram profile", href: contact.instagram, icon: Instagram, external: true },
  { label: "WhatsApp", value: "WhatsApp chat", href: contact.whatsapp, icon: MessageCircle, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <div className="glass-panel glow-purple rounded-4xl p-8 text-center sm:p-14">
          <div className="relative z-10">
            <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tell me what you need, and I’ll help turn it into clear, professional work.
            </p>

            <ul className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              {links.map((link) => (
                <li key={link.label} className="group relative">
                  <a
                    href={link.href}
                    aria-label={`${link.label}: ${link.value}`}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="gloss glass-soft grid size-14 place-items-center rounded-2xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-foreground"
                  >
                    <link.icon className="size-5" aria-hidden="true" />
                  </a>
                  <span
                    role="tooltip"
                    className="glass-soft pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] whitespace-nowrap text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-2 text-sm text-muted-foreground">
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-foreground">
                {contact.email}
              </a>
              <a href={`tel:${contact.phone}`} className="transition-colors hover:text-foreground" dir="ltr">
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}