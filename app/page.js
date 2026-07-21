import AmbientBackground from "@/components/AmbientBackground";
import CursorLight from "@/components/CursorLight";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <AmbientBackground />
      <CursorLight />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
