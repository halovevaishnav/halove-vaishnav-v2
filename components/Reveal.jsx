"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Reveal
 * The site's one scroll-reveal primitive: fade up + blur-in, once,
 * on entering the viewport. Used for section headers and standalone
 * blocks so every section animates in consistently. For staggered
 * groups (grids of cards), components use their own variants +
 * this same easing curve instead.
 */
export default function Reveal({ children, className = "", delay = 0, y = 28 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
