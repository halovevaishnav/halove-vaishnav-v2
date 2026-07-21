"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Motion Graphics",
  "Color Grading",
  "Cinematic Editing",
  "Visual Storytelling",
  "Photoshop",
  "Lightroom",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section-pad relative bg-mist/60 py-28 md:py-36 backdrop-blur-[2px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
        {/* Portrait / device placeholder */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative order-2 lg:order-1 lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-5xl border border-line bg-panel shadow-card">
            {/*
              ========================================================
              ADD YOUR PORTRAIT PHOTO HERE
              Replace the placeholder below with:

              <img
                src="/media/portrait.jpg"
                alt="Halove Vaishnav"
                className="h-full w-full object-cover"
              />
              ========================================================
            */}
            <div className="absolute inset-0 bg-[linear-gradient(160deg,#1B1B20_0%,#141418_60%,#1E1E24_100%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif italic text-7xl text-white/10">HV</span>
            </div>
            <span className="absolute left-6 top-6 font-mono text-[11px] tracking-widest text-smoke">
              PORTRAIT
            </span>
          </div>

          {/* Floating experience badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-4 -top-4 rounded-3xl px-5 py-4 shadow-glass sm:-right-8"
          >
            <p className="text-2xl font-semibold tracking-tight text-ink">2+</p>
            <p className="text-[11px] font-medium text-graphite">Years Experience</p>
          </motion.div>
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 lg:order-2 lg:col-span-7"
        >
          <p className="eyebrow mb-4">About</p>
          <h2 className="mb-8 text-4xl tracking-tighter text-ink sm:text-5xl md:text-6xl">
            Editing with <span className="font-serif italic font-normal">intention.</span>
          </h2>

          <p className="mb-5 text-lg leading-relaxed text-ink/90">
            Hi, I&rsquo;m Halove Vaishnav, a cinematic video editor and
            filmmaker with around 2 years of professional experience
            shaping raw footage into polished, story-driven films.
          </p>
          <p className="mb-10 text-lg leading-relaxed text-graphite">
            I lead with strong storytelling instincts and a disciplined
            post-production workflow — structuring every edit, then
            finishing it with deliberate color and sound — so the final
            cut feels emotional, modern and intentional. It&rsquo;s a
            craft I approach with real passion, not just process.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="glass rounded-full px-4 py-2 text-[13px] font-medium text-ink shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}