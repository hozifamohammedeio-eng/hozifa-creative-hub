import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8">
      <div className="glass-soft flex flex-col items-center gap-5 rounded-3xl px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold">{site.name}</p>
          <p className="text-xs text-muted-foreground">
            {site.title} · {site.location}
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}