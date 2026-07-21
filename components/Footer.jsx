import { Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-pad border-t border-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-[13px] text-smoke">
          © 2026 Halove Vaishnav. All Rights Reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/HALOVEDIITZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-graphite transition-colors hover:text-ink"
          >
            <Instagram size={16} />
          </a>
          <a href="#" aria-label="YouTube" className="text-graphite transition-colors hover:text-ink">
            <Youtube size={16} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-graphite transition-colors hover:text-ink">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
