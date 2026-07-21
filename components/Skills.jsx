"use client";

import { motion } from "framer-motion";
import { Film, Sparkles, Palette, Image as ImageIcon, Camera, Layers, SlidersHorizontal } from "lucide-react";
import Reveal from "@/components/Reveal";

const SKILLS = [
  { name: "Premiere Pro", level: 5, icon: Film },
  { name: "After Effects", level: 5, icon: Sparkles },
  { name: "DaVinci Resolve", level: 4, icon: Palette },
  { name: "Photoshop", level: 4, icon: ImageIcon },
  { name: "Lightroom", level: 4, icon: Camera },
  { name: "Motion Graphics", level: 4, icon: Layers },
  { name: "Color Grading", level: 5, icon: SlidersHorizontal },
];

export default function Skills() {
  return (
    <section className="section-pad relative bg-mist/60 py-28 md:py-36 backdrop-blur-[2px]">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-16 text-center">
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="text-5xl tracking-tighter text-ink sm:text-6xl">
            Tools of the <span className="font-serif italic font-normal">craft</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass flex items-center gap-4 rounded-3xl p-5 shadow-soft"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-ink">
                <skill.icon size={18} />
              </span>

              <div className="flex-1">
                <p className="mb-2 text-[15px] font-medium tracking-tight text-ink">
                  {skill.name}
                </p>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: (index % 4) * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-ink"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}