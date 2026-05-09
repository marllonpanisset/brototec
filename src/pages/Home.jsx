import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import ConceptSection from "../components/home/ConceptSection";
import ServicesSection from "../components/home/ServicesSection";
import DifferentiationSection from "../components/home/DifferentiationSection";
import ImpactSection from "../components/home/ImpactSection";
import ProjectsSection from "../components/home/ProjectsSection";
import CtaSection from "../components/home/CtaSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <HeroSection />
      
      {/* Prova Social e Capacidade Técnica logo no topo */}
      <ProjectsSection /> 
      
      <ConceptSection />
      <ServicesSection />
      <DifferentiationSection />
      <ImpactSection />
      
      <CtaSection 
        heading="Pronto para ter soberania digital?"
        body="Construímos o sistema que você controla, não o sistema que controla você. Vamos conversar?"
        cta="Iniciar Conversa"
      />
      
      <Footer />
    </div>
  );
}