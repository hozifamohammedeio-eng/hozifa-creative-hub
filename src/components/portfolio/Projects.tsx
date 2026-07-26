import { useMemo, useState } from "react";
import { FileSpreadsheet, FileText, Play, Search, Sparkles } from "lucide-react";
import { projectFilters, projects, type ProjectFilter, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Modal } from "./Modal";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const categoryIcon = {
  "Video Editing": Play,
  "AI Content": Sparkles,
  Research: Search,
  "Data & Excel": FileSpreadsheet,
  "Business Documents": FileText,
} as const;

const categoryTint = {
  "Video Editing": "from-cyan-glow/30 to-purple-glow/20",
  "AI Content": "from-purple-glow/30 to-cyan-glow/20",
  Research: "from-emerald-glow/25 to-cyan-glow/20",
  "Data & Excel": "from-emerald-glow/30 to-purple-glow/15",
  "Business Documents": "from-cyan-glow/20 to-emerald-glow/25",
} as const;

function ProjectPreview({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category];
  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-2xl bg-linear-to-br",
        categoryTint[project.category],
        project.orientation === "vertical" ? "aspect-[4/5]" : "aspect-video",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,oklch(1_0_0/12%),transparent)]" />
      <Icon className="relative size-9 text-foreground/70" aria-hidden="true" />
      <span className="glass-soft absolute bottom-3 left-3 rounded-full px-3 py-1 text-[11px] text-muted-foreground">
        {project.category}
      </span>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const isVideo = (project: Project) =>
    project.category === "Video Editing" || project.category === "AI Content";

  const hasModal = (project: Project) => Boolean(project.video) || !isVideo(project);

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work"
      subtitle="A mix of short-form video, AI-assisted content, research and business documentation."
    >
      <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
        {projectFilters.map((item) => (
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
        {visible.map((project, index) => (
          <Reveal as="li" key={project.id} delay={index * 60} className="h-full">
            <article className="glass-panel lift flex h-full flex-col rounded-3xl p-4">
              <div className="relative z-10 flex h-full flex-col">
                <ProjectPreview project={project} />
                <div className="flex flex-1 flex-col p-2 pt-5">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="glass-soft rounded-full px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2 pt-1">
                    {!hasModal(project) ? (
                      <span className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
                        Available on request
                      </span>
                    ) : isVideo(project) ? (
                      <button
                        type="button"
                        onClick={() => setOpenProject(project)}
                        className="gloss glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors hover:border-primary/50"
                      >
                        <Play className="size-3.5" aria-hidden="true" />
                        Play video
                        <span className="sr-only"> — {project.title}</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setOpenProject(project)}
                        className="gloss glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors hover:border-primary/50"
                      >
                        <FileText className="size-3.5" aria-hidden="true" />
                        View details
                        <span className="sr-only"> — {project.title}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <Modal
        open={openProject !== null}
        onClose={() => setOpenProject(null)}
        title={openProject?.title ?? ""}
      >
        {openProject ? (
          <div className="space-y-4">
            {openProject.video ? (
              <div className="space-y-3">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={openProject.poster}
                  className="max-h-[65dvh] w-full rounded-2xl bg-background"
                >
                  <source src={openProject.video} type={openProject.videoType} />
                  Your browser does not support the video tag.
                </video>
                <p className="text-xs text-muted-foreground">
                  Video not playing?{" "}
                  <a
                    href={openProject.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    Open the original file
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="glass-soft rounded-2xl p-6 text-center">
                <ProjectPreview project={openProject} />
                <p className="mt-5 text-sm text-muted-foreground">
                  {openProject.file
                    ? "Open the attached file below to see the full deliverable."
                    : "The final file for this project is not published here yet. It can be shared on request."}
                </p>
              </div>
            )}
            <p className="text-sm leading-relaxed text-muted-foreground">{openProject.description}</p>
            {openProject.file ? (
              <a
                href={openProject.file}
                target="_blank"
                rel="noopener noreferrer"
                className="gloss glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"
              >
                <FileText className="size-3.5" aria-hidden="true" />
                {openProject.fileLabel ?? "Open document"}
              </a>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}