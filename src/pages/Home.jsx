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
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <ServicesSection />
      <DifferentiationSection />
      <ImpactSection />
      <ProjectsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}