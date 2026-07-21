"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`glass grain relative flex w-full max-w-3xl items-center justify-between rounded-full px-5 py-2.5 shadow-glass transition-all duration-500 ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 pl-1"
        >
          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-ink">
            <span className="h-2 w-2 rounded-full bg-paper" />
          </span>

          <span className="text-[15px] font-semibold tracking-tight text-ink">
            Halove Vaishnav
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-[13.5px] font-medium text-graphite transition-colors duration-300 hover:text-ink"
              >
                {link.label}

                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <MagneticButton
          strength={0.4}
          className="hidden md:inline-block"
        >
          <a
            href="#contact"
            className="inline-flex rounded-full bg-ink px-5 py-2 text-[13.5px] font-medium text-paper transition-transform duration-300 hover:scale-105"
          >
            Let&apos;s Talk
          </a>
        </MagneticButton>

        {/* Mobile Button */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="glass absolute top-16 w-[calc(100%-2rem)] max-w-3xl rounded-3xl p-4 shadow-card md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}