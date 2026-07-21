# Halove Vaishnav — Portfolio

A premium, Apple-inspired cinematic portfolio for video editor & filmmaker
**Halove Vaishnav**, built with Next.js (App Router), Tailwind CSS and
Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com/new — Vercel auto-detects Next.js, no
   config needed.
3. If you've set up the contact form (see below), add the three
   `NEXT_PUBLIC_EMAILJS_...` variables under Project → Settings →
   Environment Variables too, or the deployed form won't send.
4. Deploy.

Or with the CLI:

```bash
npm i -g vercel
vercel
```

## Project structure

```
app/
  layout.js               — fonts, metadata, root shell
  page.js                 — composes the whole page
  globals.css              — design tokens, glass + scrollbar utilities
components/
  AmbientBackground.jsx    — moving gradient mesh + cursor-reactive glow + glass particles
  CursorLight.jsx          — tracks pointer position into CSS vars (no visual output itself)
  MagneticButton.jsx       — reusable "pulls toward cursor" button wrapper
  Reveal.jsx               — shared fade-up + blur-in scroll reveal
  Navbar.jsx               — floating glass nav, magnetic CTA
  Hero.jsx                 — text reveal, scroll parallax, mouse-tilt video frame
  Work.jsx                 — pinned cinematic filmstrip (desktop) / swipe strip (mobile)
  About.jsx                — bio + skills chips + portrait placeholder
  Services.jsx              — services grid
  Skills.jsx                — animated tool proficiency bars
  Contact.jsx                — contact form (EmailJS) + Instagram + info
  Footer.jsx                 — minimal footer
public/
  media/                    — put your videos & images here
```

## Contact form — where do messages actually go?

The form is wired to **EmailJS** (free, no backend needed), but needs
your own keys to actually deliver anywhere — without them it will
still show a success screen locally, but nothing reaches your inbox.
Setup takes about 5 minutes:

1. Create a free account at https://www.emailjs.com
2. **Add an Email Service** → Gmail → connect
   `halovevaishnavv@gmail.com`. This is your **Service ID**.
3. **Create an Email Template** using the variables `{{name}}`,
   `{{email}}`, `{{message}}` in the body. This is your **Template ID**.
4. Go to Account → General and copy your **Public Key**.
5. Copy `.env.local.example` to a new file `.env.local` and fill in:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
6. Restart `npm run dev`. Messages now land directly in
   `halovevaishnavv@gmail.com`.

Free tier covers 200 emails/month. Prefer Formspree instead? Swap the
`handleSubmit` function in `components/Contact.jsx` for a `fetch()`
POST to your Formspree endpoint — same form markup, different
delivery call.

## Editing guide

**Change text** — open the component for that section and edit the
JSX/string directly. Every visible line is plain text.

**Change colors** — all in one place: `tailwind.config.js` →
`theme.extend.colors`. `ink` is body text, `graphite`/`smoke` are
secondary text, `lensA/B/C`, `skyGlass`, `violetGlass`, `amber` are
the soft gradient glow colors used across the ambient background and
card thumbnails, `titanium`/`silver` are the metal-tinted surfaces
(hero video frame, etc). Change a hex value and it updates everywhere
that token is used.

**Change animations** — timings/easing live as `const ... = {...}`
variants or inline `<motion.*>` props right above each component's
`return`. Looping ambient motion (floating blobs, gradient drift) is
defined as keyframes in `tailwind.config.js` → `theme.extend.keyframes`
/ `animation`. The scroll-reveal used on every section header is the
shared `components/Reveal.jsx`. The pinned horizontal scroll in the
Work section is in `DesktopFilmstrip` inside `components/Work.jsx`.

**Change the Instagram link** — open `components/Contact.jsx` and
edit `const INSTAGRAM_HANDLE = "HALOVEDIITZ";` near the top. The
footer's Instagram icon has its own `href` in `components/Footer.jsx`.

**Change the email address** — search for
`halovevaishnavv@gmail.com` — it appears in `components/Contact.jsx`
(mailto link + form destination context) and `app/layout.js`
(metadata). Update both.

**Add your images/videos** — every placeholder has a comment block
directly above it with the exact code to paste in:
- `hero.mp4` → `components/Hero.jsx` → drop file at `public/media/hero.mp4`
- `portrait.jpg` → `components/About.jsx` → `public/media/portrait.jpg`
- `work/project-01.mp4` … `project-06.mp4` → `components/Work.jsx`
  (inside `FilmCard`) → `public/media/work/`

**Which file controls which section?**

| Section | File |
|---|---|
| Floating nav bar | `components/Navbar.jsx` |
| Hero (name, tagline, hero video) | `components/Hero.jsx` |
| Selected Works (cinematic filmstrip) | `components/Work.jsx` |
| About (bio, skills chips, portrait) | `components/About.jsx` |
| Services grid | `components/Services.jsx` |
| Tools of the craft (skill bars) | `components/Skills.jsx` |
| Contact form + Instagram + socials | `components/Contact.jsx` |
| Footer | `components/Footer.jsx` |
| Background atmosphere + cursor glow | `components/AmbientBackground.jsx`, `components/CursorLight.jsx` |

Nothing here can "break" permanently — it's all text files, so
Ctrl/Cmd+Z in your editor undoes any change.

## Design reference

This pass was designed with a short reference clip you provided as a
mood/energy reference (bold, confident motion and typography) layered
onto the fuller written brief — no branding, layout or content was
copied from it; only general tone.

## Design tokens

- **Colors**: white/near-white base (`paper`, `fog`, `mist`) layered
  with a titanium/silver metal system and moving soft-blue / violet-
  glass / warm-amber light — used only as gradient glow, never flat fills.
- **Type**: Inter for UI/body, Instrument Serif italic for editorial
  accents, Space Mono for timecode/eyebrow labels.
- **Motion**: masked word-by-word hero reveal, scroll + mouse
  parallax, a pinned cinematic filmstrip with a timeline scrubber,
  magnetic buttons, and an ambient layer of moving gradients + a
  cursor-following glow tying the whole page together.
