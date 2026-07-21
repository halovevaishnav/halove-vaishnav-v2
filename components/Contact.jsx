"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, Linkedin, ArrowUpRight, Check, Loader2 } from "lucide-react";

// ============================================================================
// CONTACT FORM DELIVERY — powered by EmailJS (free tier, no backend needed)
//
// Right now, without keys set, the form will still "work" visually but the
// message only lives in the browser — it will NOT reach your inbox.
//
// To make it real (5 minutes, free):
//   1. Create an account at https://www.emailjs.com
//   2. Add an Email Service (Gmail is easiest) → connect halovevaishnavv@gmail.com
//   3. Create an Email Template with variables: {{name}}, {{email}}, {{message}}
//   4. Copy your Service ID, Template ID and Public Key
//   5. Create a file named .env.local in the project root (copy from
//      .env.local.example) and paste your keys in
//   6. Restart `npm run dev` — the form will now email you directly
//
// Full walkthrough is in README.md → "Contact form".
// ============================================================================
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const INSTAGRAM_HANDLE = "HALOVEDIITZ";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Keys not configured yet — see the setup comment above.
      console.warn(
        "EmailJS keys are missing. Add them to .env.local so messages actually reach your inbox. See README.md → Contact form."
      );
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lensB blur-[120px] opacity-50" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="mb-6 text-5xl tracking-tighter text-ink sm:text-6xl">
            Let&rsquo;s <span className="font-serif italic font-normal">talk.</span>
          </h2>
          <p className="mb-10 max-w-sm text-[15px] leading-relaxed text-graphite">
            Have a project in mind? Tell me about your footage, your
            timeline and the story you want to tell — I&rsquo;ll take it
            from there.
          </p>

          <a
            href="mailto:halovevaishnavv@gmail.com"
            className="group mb-6 flex items-center gap-3 text-lg font-medium text-ink"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mist transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
              <Mail size={17} />
            </span>
            halovevaishnavv@gmail.com
            <ArrowUpRight size={16} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          {/* Instagram — featured button, since it's where the latest edits live */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8 flex items-center gap-4 rounded-3xl glass p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glass"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#EAE0FB_0%,#DCEAFF_100%)] text-ink">
              <Instagram size={18} />
            </span>
            <span className="flex flex-col">
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                View My Latest Work
              </span>
              <span className="text-[13px] text-graphite">@{INSTAGRAM_HANDLE} on Instagram</span>
            </span>
            <ArrowUpRight size={16} className="ml-auto shrink-0 text-smoke transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-ink shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-ink shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
            >
              <Youtube size={16} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-ink shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass grain relative overflow-hidden rounded-5xl p-8 shadow-card sm:p-10 lg:col-span-7"
        >
          {status === "sent" ? (
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center gap-4 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink">
                <Check size={22} className="text-white" />
              </div>
              <p className="text-xl font-semibold tracking-tight text-ink">Message sent</p>
              <p className="max-w-xs text-[14px] text-graphite">
                Thanks for reaching out — I&rsquo;ll reply to {form.email || "your inbox"} soon.
              </p>
              <button
                onClick={() => {
                  setForm({ name: "", email: "", message: "" });
                  setStatus("idle");
                }}
                className="mt-2 text-[13px] font-medium text-graphite underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-smoke">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-line bg-white/70 px-5 py-3.5 text-[15px] text-ink placeholder:text-smoke focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-smoke">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-line bg-white/70 px-5 py-3.5 text-[15px] text-ink placeholder:text-smoke focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-[12px] font-medium uppercase tracking-[0.1em] text-smoke">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-line bg-white/70 px-5 py-3.5 text-[15px] text-ink placeholder:text-smoke focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10"
                />
              </div>

              {status === "error" && (
                <p className="text-[13px] text-red-500">
                  Something went wrong sending your message. Please try again, or email
                  halovevaishnavv@gmail.com directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-2 w-full disabled:opacity-60 sm:w-auto sm:self-start"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
