"use client";

import { motion } from "framer-motion";
import { Home, Smartphone, Clapperboard, Palette, Megaphone, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    icon: Home,
    title: "Real Estate Editing",
    description:
      "Professional cinematic property videos, smooth transitions and premium storytelling.",
  },
  {
    icon: Megaphone,
    title: "Commercial Editing",
    description:
      "Polished commercial cuts built to sell — sharp pacing, a clear message and a premium finish.",
  },
  {
    icon: Smartphone,
    title: "Social Media Editing",
    description:
      "High-quality Instagram reels, YouTube shorts and scroll-stopping short-form content.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Professional colors and cinematic looks.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Modern animations and visual effects.",
  },
  {
    icon: Clapperboard,
    title: "Cinematic Films",
    description: "Movie-style editing with professional pacing, mood and effects.",
  },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="section-pad relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Services</p>
          <h2 className="text-5xl tracking-tighter text-ink sm:text-6xl md:text-7xl">
            What I <span className="font-serif italic font-normal">offer</span>
          </h2>
        </Reveal>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-4xl border border-line bg-panel p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lensA opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />

              <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-mist transition-colors duration-500 group-hover:bg-ink">
                <Icon size={20} className="text-ink transition-colors duration-500 group-hover:text-paper" />
              </div>
              <h3 className="relative mb-2 text-lg font-semibold tracking-tight text-ink">
                {title}
              </h3>
              <p className="relative text-[14px] leading-relaxed text-graphite">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}