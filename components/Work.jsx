"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const PROJECTS = [
  {
    id: "01",
    title: "Cinematic Travel Films",
    category: "Travel · Documentary",
    description:
      "Sweeping, story-led travel edits that turn raw footage from the road into immersive cinematic journeys.",
    tone: "linear-gradient(150deg,#14141A 0%,#26305E 55%,#17171D 100%)",
  },
  {
    id: "02",
    title: "Real Estate Editing",
    category: "Property · Commercial",
    description:
      "Smooth walkthroughs and premium property films built to make listings feel like architecture, not ads.",
    tone: "linear-gradient(150deg,#14141A 0%,#232B45 55%,#17171D 100%)",
  },
  {
    id: "03",
    title: "Commercial Videos",
    category: "Branded · Advertising",
    description:
      "Polished commercial cuts that carry a brand's voice through pacing, color and sound design.",
    tone: "linear-gradient(150deg,#14141A 0%,#1E3A6B 55%,#17171D 100%)",
  },
  {
    id: "04",
    title: "Instagram Reels",
    category: "Social · Short-form",
    description:
      "Fast-paced, trend-aware reels edited for retention, rhythm and scroll-stopping first frames.",
    tone: "linear-gradient(150deg,#14141A 0%,#3A2A63 55%,#17171D 100%)",
  },
  {
    id: "05",
    title: "Short Films",
    category: "Narrative · Film",
    description:
      "Story-first narrative editing focused on performance, timing and emotional through-line.",
    tone: "linear-gradient(150deg,#14141A 0%,#2C2350 55%,#17171D 100%)",
  },
  {
    id: "06",
    title: "Color Grading",
    category: "Post-production · Grading",
    description:
      "Mood-driven color grades that give footage a distinct, filmic identity from frame to frame.",
    tone: "linear-gradient(150deg,#14141A 0%,#2A2F55 55%,#1D2440 100%)",
  },
];

/**
 * FilmCard — the one card design shared by the desktop filmstrip and
 * the mobile swipe strip below. `className` controls sizing per
 * context so the markup/behavior never has to fork.
 */
function FilmCard({ project, className = "" }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative shrink-0 overflow-hidden rounded-4xl border border-white/10 bg-panel shadow-soft transition-shadow duration-500 hover:shadow-card ${className}`}
    >
      {/*
        ============================================================
        ADD PROJECT THUMBNAIL / VIDEO HERE
        Replace the gradient div below with an <img> or <video>:

        <video
          className="h-full w-full object-cover"
          src="/media/work/project-01.mp4"
          muted loop playsInline
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => e.currentTarget.pause()}
        />
        ============================================================
      */}
      <div className="relative aspect-video w-full overflow-hidden bg-mist">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: project.tone }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full glass opacity-0 shadow-glass transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
            <Play size={18} className="ml-0.5 text-ink" fill="currentColor" />
          </div>
        </div>
        <span className="absolute left-5 top-5 font-mono text-[11px] tracking-widest text-smoke">
          {project.id}
        </span>
        <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full glass opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight size={14} className="text-ink" />
        </span>
      </div>

      <div className="flex flex-col gap-1.5 p-6">
        <p className="font-serif italic text-[13px] text-smoke">{project.category}</p>
        <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {project.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-graphite">{project.description}</p>
      </div>
    </motion.article>
  );
}

/**
 * Scrubber — a timeline-style progress bar pinned to the bottom of
 * the sticky viewport, echoing a video editor's timeline while you
 * scroll through the reel. Purely decorative (pointer-events-none).
 */
function Scrubber({ progress }) {
  const widthPct = useTransform(progress, [0, 1], ["2%", "100%"]);
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 mx-auto w-full max-w-md px-6">
      <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-line">
        <motion.div style={{ width: widthPct }} className="h-full rounded-full bg-ink" />
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-smoke">
        <span>SELECTED WORKS</span>
        <span>{`0${PROJECTS.length}`.slice(-2)} CLIPS</span>
      </div>
    </div>
  );
}

/**
 * DesktopFilmstrip — a pinned, horizontally-scrolling gallery. The
 * section holds extra scroll height; while it's in view the row of
 * cards is sticky and translates horizontally in step with vertical
 * scroll, so scrolling down "plays through" the reel.
 */
function DesktopFilmstrip() {
  const sectionRef = useRef(null);
  const rowRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!rowRef.current) return;
      const rowWidth = rowRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setDistance(Math.max(rowWidth - viewportWidth + 96, 0));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <div ref={sectionRef} style={{ height: `${PROJECTS.length * 62}vh` }} className="relative hidden md:block">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div ref={rowRef} style={{ x }} className="flex gap-8 pl-[6vw]">
          {PROJECTS.map((project) => (
            <FilmCard key={project.id} project={project} className="w-[38vw] max-w-[560px]" />
          ))}
          <div aria-hidden className="w-[2vw] shrink-0" />
        </motion.div>
      </div>
      <Scrubber progress={scrollYProgress} />
    </div>
  );
}

/** MobileFilmstrip — natural touch-swipe strip, no scroll-jacking. */
function MobileFilmstrip() {
  return (
    <div className="md:hidden">
      <div className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4">
        {PROJECTS.map((project) => (
          <FilmCard
            key={project.id}
            project={project}
            className="w-[82vw] max-w-[380px] snap-center"
          />
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-[10px] tracking-[0.2em] text-smoke">
        SWIPE TO EXPLORE →
      </p>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative py-28 md:py-36">
      <Reveal className="section-pad mx-auto mb-16 flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-4">Portfolio</p>
          <h2 className="text-5xl tracking-tighter text-ink sm:text-6xl md:text-7xl">
            Selected <span className="font-serif italic font-normal">Works</span>
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-relaxed text-graphite">
          A curated collection of edits across travel, brand, real estate
          and narrative work — each project reserved below for its film.
        </p>
      </Reveal>

      {/* Desktop: pinned cinematic filmstrip, deliberately full-bleed
          (no section padding) so cards run close to the viewport edge. */}
      <DesktopFilmstrip />
      <div className="section-pad">
        <MobileFilmstrip />
      </div>
    </section>
  );
}