import type { MouseEvent } from "react";

/**
 * Opens a link reliably, including inside sandboxed preview iframes where
 * `target="_blank"`, `tel:` and `mailto:` navigations can be blocked.
 */
export function openLink(href: string, external: boolean) {
  if (typeof window === "undefined") return;
  if (external) {
    const win = window.open(href, "_blank", "noopener,noreferrer");
    if (win) return;
  }
  try {
    (window.top ?? window).location.href = href;
  } catch {
    window.location.href = href;
  }
}

export function handleLinkClick(href: string, external: boolean) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    openLink(href, external);
  };
}