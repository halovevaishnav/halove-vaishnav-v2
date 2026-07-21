"use client";

/**
 * AmbientBackground
 * A fixed, pointer-events-none atmosphere layer sitting behind every
 * section. This is where the "titanium / silver / soft blue / violet
 * glass / warm cinematic" color system lives as soft, moving light —
 * never as flat color fills.
 *
 * Rendered once in app/page.js, behind <Navbar /> and all sections.
 */
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper">
      {/* Slow-moving gradient mesh — the base atmosphere */}
      <div
        className="absolute inset-0 opacity-[0.35] animate-gradientShift"
        style={{
          backgroundImage:
            "radial-gradient(38% 32% at 15% 8%, #3E63FF 0%, transparent 70%), radial-gradient(34% 30% at 85% 18%, #8B5CF6 0%, transparent 70%), radial-gradient(40% 34% at 50% 55%, #5B8CFF 0%, transparent 72%), radial-gradient(36% 30% at 10% 85%, #6D6AFF 0%, transparent 70%), radial-gradient(30% 28% at 90% 92%, #8B5CF6 0%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Fine grain to keep the gradients from looking flat/digital */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Liquid-glass light — a soft glow that eases toward the cursor.
          Reads the --pointer-x-pct/--pointer-y-pct vars written by
          CursorLight.jsx. Falls back to a fixed point (so it looks
          intentional, not broken) before the first pointer move / on
          touch devices where CursorLight opts out. */}
      <div
        className="absolute h-[500px] w-[500px] rounded-full opacity-30 blur-[100px] transition-[left,top] duration-[900ms] ease-out"
        style={{
          left: "var(--pointer-x-pct, 50%)",
          top: "var(--pointer-y-pct, 30%)",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, #4C6FFF 0%, #9B6BFF 55%, transparent 75%)",
        }}
      />

      {/* Floating glass bubbles — liquid-glass particles drifting in place */}
      <span className="absolute left-[8%] top-[14%] h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-particle [animation-delay:-2s]" />
      <span className="absolute right-[12%] top-[38%] h-16 w-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-particle [animation-delay:-8s]" />
      <span className="absolute left-[20%] top-[62%] h-10 w-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-particle [animation-delay:-5s]" />
      <span className="absolute right-[22%] top-[78%] h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-particle [animation-delay:-11s]" />
      <span className="absolute left-[45%] top-[92%] h-12 w-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-particle [animation-delay:-14s]" />

      {/* Soft vignette so content edges stay dark and readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,#09090B_92%)]" />
    </div>
  );
}