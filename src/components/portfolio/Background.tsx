export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="aurora-blob top-[-10%] left-[-8%] size-[52vw] min-size-[280px] bg-cyan-glow/35" />
      <div
        className="aurora-blob top-[28%] right-[-12%] size-[46vw] bg-purple-glow/35"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="aurora-blob bottom-[-12%] left-[22%] size-[42vw] bg-emerald-glow/22"
        style={{ animationDelay: "-14s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_20%,var(--background)_100%)]" />
    </div>
  );
}