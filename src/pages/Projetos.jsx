import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";
import ProjetosHero from "../components/projetos/ProjetosHero";
import ProjetosGrid from "../components/projetos/ProjetosGrid";

export default function Projetos() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />
      <ProjetosHero />
      <ProjetosGrid />
      <CtaSection />
      <Footer />
    </div>
  );
}