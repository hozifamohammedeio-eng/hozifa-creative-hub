import { useMemo, useState } from "react";
import { FileText, Maximize2 } from "lucide-react";
import {
  certificateFilters,
  certificates,
  type Certificate,
  type CertificateFilter,
} from "@/data/certificates";
import { cn } from "@/lib/utils";
import { Modal } from "./Modal";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Certificates() {
  const [filter, setFilter] = useState<CertificateFilter>("All");
  const [open, setOpen] = useState<Certificate | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? certificates : certificates.filter((c) => c.category === filter)),
    [filter],
  );

  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Certificates & Learning"
      subtitle="Courses and certificates that support my skills in AI, video editing, communication, marketing, programming, and digital tools."
    >
      <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
        {certificateFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={cn(
              "gloss rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm",
              filter === item
                ? "border-primary/40 bg-glass-strong text-foreground"
                : "border-glass-border text-muted-foreground hover:text-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </Reveal>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((certificate, index) => (
          <Reveal as="li" key={certificate.id} delay={index * 50} className="h-full">
            <article className="glass-panel lift h-full rounded-3xl p-4">
              <div className="relative z-10 flex h-full flex-col">
                <button
                  type="button"
                  onClick={() => setOpen(certificate)}
                  className="group relative block w-full overflow-hidden rounded-2xl"
                  aria-label={`Open larger preview of ${certificate.title}`}
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate issued by ${certificate.issuer}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full bg-glass object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="glass-soft absolute top-3 right-3 grid size-8 place-items-center rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 className="size-3.5" aria-hidden="true" />
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-2 pt-4">
                  <h3 className="text-sm font-semibold">{certificate.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{certificate.issuer}</p>
                  <p className="mt-3 text-[11px] tracking-wide text-primary/80 uppercase">
                    {certificate.category}
                  </p>
                  <div className="mt-4 flex pt-1">
                    <button
                      type="button"
                      onClick={() => setOpen(certificate)}
                      className="gloss glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors hover:border-primary/50"
                    >
                      <Maximize2 className="size-3.5" aria-hidden="true" />
                      View Certificate
                      <span className="sr-only"> — {certificate.title}</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <Modal open={open !== null} onClose={() => setOpen(null)} title={open?.title ?? ""}>
        {open ? (
          <div className="space-y-4">
            <img
              src={open.image}
              alt={`${open.title} certificate issued by ${open.issuer}`}
              decoding="async"
              className="mx-auto max-h-[65dvh] w-full rounded-2xl bg-glass object-contain"
            />
            <p className="text-sm text-muted-foreground">
              {open.issuer} · {open.category}
            </p>
            {open.pdf ? (
              <a
                href={open.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="gloss glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors hover:border-primary/50"
              >
                <FileText className="size-3.5" aria-hidden="true" />
                Open Original PDF
              </a>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}