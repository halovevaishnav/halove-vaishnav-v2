import { Inter, Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-instrument",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Halove Vaishnav — Cinematic Video Editor & Visual Storyteller",
  description:
    "Halove Vaishnav is a cinematic video editor and filmmaker crafting commercial videos, brand films and visual experiences that turn footage into powerful stories.",
  keywords: [
    "Halove Vaishnav",
    "video editor",
    "filmmaker",
    "cinematic editing",
    "color grading",
    "motion graphics",
  ],
  openGraph: {
    title: "Halove Vaishnav — Cinematic Video Editor & Visual Storyteller",
    description:
      "Cinematic edits, commercial videos and visual experiences that turn simple footage into powerful stories.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-paper text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
