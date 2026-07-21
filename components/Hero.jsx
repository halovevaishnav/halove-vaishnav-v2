"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

/**
 * RevealLine — Apple-style masked text reveal.
 * Each word sits inside an overflow-hidden mask and slides up into
 * place, so the line looks like it's being "printed" into view rather
 * than just fading in.
 */
function RevealLine({ text, className = "", delay = 0 }) {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.28em] overflow-hidden pb-2 pr-[0.08em]">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1,
              ease: EASE,
              delay: delay + i * 0.06,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scroll parallax — background drifts slower than the video frame,
  // the whole hero gently fades/scales back as you scroll into Work.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  // Mouse parallax — the video frame tilts gently toward the cursor,
  // like a pane of glass catching the light as you move.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 20 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(relX * 6);
    tiltX.set(relY * -6);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Ambient lens-flare gradient field — the section's own atmosphere,
          layered on top of the global AmbientBackground, drifting on scroll */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-lensA blur-[110px] opacity-70" />
        <div className="absolute right-[8%] top-[20%] h-[380px] w-[380px] rounded-full bg-violetGlass blur-[100px] opacity-60 animate-floatSlow" />
        <div className="absolute left-[6%] top-[35%] h-[320px] w-[320px] rounded-full bg-amber blur-[100px] opacity-50 animate-float" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090B_75%)]" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="section-pad flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="eyebrow mx-auto mb-6 flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" />
            Cinematic Video Editor
          </motion.div>

          <h1 className="text-[clamp(2.75rem,11vw,6.5rem)] leading-[1.08] tracking-tightest text-ink">
            <RevealLine text="Hello, I’m" delay={0.2} />
            <br />
            <RevealLine
              text="Halove Vaishnav"
              delay={0.45}
              className="font-serif italic font-normal tracking-normal"
            />
          </h1>

          <motion.div
            variants={item}
            className="mt-7 flex flex-col items-center gap-0.5 text-graphite"
          >
            <p className="text-lg font-medium sm:text-xl md:text-2xl">Cinematic Video Editor</p>
            <span className="font-serif italic text-lg text-smoke sm:text-xl">&amp;</span>
            <p className="text-lg font-medium sm:text-xl md:text-2xl">Visual Storyteller</p>
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-smoke sm:text-base"
          >
            I create cinematic edits, commercial videos and visual stories
            that leave a lasting impression.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <MagneticButton>
              <a href="#work" className="btn-primary">
                View My Work
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="btn-secondary">
                Let&rsquo;s Talk
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hero video placeholder — dedicated empty area for future hero.mp4 */}
      <motion.div
        style={{ y: videoY }}
        initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 0.9, ease: EASE }}
        className="section-pad relative mt-16 w-full max-w-5xl"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{
            rotateX: springTiltX,
            rotateY: springTiltY,
            transformPerspective: 1200,
          }}
          className="group relative aspect-video w-full overflow-hidden rounded-4xl border border-white/10 bg-titanium shadow-card"
        >
          {/*
            ============================================================
            ADD YOUR HERO VIDEO HERE
            Replace this placeholder with an actual <video> element:

            <video
              className="h-full w-full object-cover"
              src="/media/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            Drop the file at: /public/media/hero.mp4
            ============================================================
          */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#1A1A1F_0%,#141418_45%,#1D1D22_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(76,111,255,0.25),transparent_70%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full glass shadow-glass transition-transform duration-500 group-hover:scale-110">
              <Play size={22} className="ml-0.5 text-ink" fill="currentColor" />
            </div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-smoke uppercase">
              hero.mp4 — reserved frame
            </p>
          </div>

          {/* Corner timecode marks, a nod to the editing timeline */}
          <span className="absolute left-5 top-5 font-mono text-[11px] tracking-widest text-smoke">
            00:00:00:00
          </span>
          <span className="absolute right-5 top-5 font-mono text-[11px] tracking-widest text-smoke">
            16:9
          </span>
          <span className="absolute bottom-5 left-5 font-mono text-[11px] tracking-widest text-smoke">
            REC ●
          </span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="mt-14 flex flex-col items-center gap-2 text-smoke"
        aria-label="Scroll to work"
      >
        <span className="text-[11px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}