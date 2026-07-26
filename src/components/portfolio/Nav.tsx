import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        aria-label="Main navigation"
        className={cn(
          "glass-panel mx-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full py-2.5 pr-2.5 pl-5 transition-all duration-500",
          scrolled ? "shadow-glass" : "border-transparent bg-transparent backdrop-blur-none",
        )}
      >
        <a
          href="#home"
          className="relative z-10 text-sm font-semibold tracking-tight sm:text-base"
          onClick={() => setOpen(false)}
        >
          <span className="text-gradient">Hozifa</span>
          <span className="text-muted-foreground"> Mohammad</span>
        </a>

        <ul className="relative z-10 hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === link.href
                    ? "bg-glass-strong text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="gloss glass-soft relative z-10 hidden rounded-full px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 md:inline-flex"
        >
          Let’s talk
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="glass-soft relative z-10 grid size-10 place-items-center rounded-full md:hidden"
        >
          {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="glass-panel mx-auto mt-2 w-full max-w-5xl rounded-3xl p-3 md:hidden">
          <ul className="relative z-10 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-glass hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}