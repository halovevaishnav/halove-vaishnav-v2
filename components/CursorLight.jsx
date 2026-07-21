"use client";

import { useEffect } from "react";

/**
 * CursorLight
 * Tracks pointer position (desktop/mouse only — skipped on touch) and
 * writes it to CSS custom properties on <html> as viewport percentages:
 *   --pointer-x-pct, --pointer-y-pct
 *
 * Nothing visual renders from this component itself. Anything on the
 * page can opt into "liquid glass" reactivity by reading these vars —
 * see the interactive blob in AmbientBackground.jsx for an example.
 * Throttled with requestAnimationFrame so it costs ~nothing on scroll
 * or move-heavy interactions.
 */
export default function CursorLight() {
  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const root = document.documentElement;
    let frame = null;

    const handleMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x-pct", `${(e.clientX / window.innerWidth) * 100}%`);
        root.style.setProperty("--pointer-y-pct", `${(e.clientY / window.innerHeight) * 100}%`);
        frame = null;
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
