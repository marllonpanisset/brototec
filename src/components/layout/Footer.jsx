// src/components/layout/Footer.jsx
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    whatsapp: "https://wa.me/5521987881633",
    linkedin: "https://linkedin.com/company/brototec",
    instagram: "https://instagram.com/brototecbr",
  };

  return (
    <footer className="relative bg-[#f8f9f8] border-t border-border/60 pt-24 pb-12 bg-noise">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout em Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Coluna 01: Marca, Manifesto e Redes Sociais */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-tight text-foreground">
                broto<span className="text-primary text-gradient-green italic">tec</span>
              </span>
            </Link>
            
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Soluções digitais sob medida, da estrutura à <span className="text-foreground font-medium">autonomia operacional</span>. 
              Construído com intenção, sem dependência técnica e com gestão total em suas mãos.
            </p>

            <div className="flex items-center gap-2 pt-[25px]">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border/80 flex items-center justify-center text-muted-foreground hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border/80 flex items-center justify-center text-muted-foreground hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border/80 flex items-center justify-center text-muted-foreground hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Coluna 02: Navegação */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Explorar</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projetos</Link></li>
              <li><Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 03: Legal */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="text-sm text-muted-foreground hover:text-primary transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* Coluna 04: Contato Direto */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Conexão</h4>
            <div className="space-y-4">
              <a href="mailto:brototec@zohomail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} className="text-primary/70 flex-shrink-0" />
                brototec@zohomail.com
              </a>
              <a href="tel:+5521987881633" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} className="text-primary/70 flex-shrink-0" />
                +55 (21) 98788-1633
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary/70 flex-shrink-0" />
                <span>Operação Global — Remoto</span>
              </div>
            </div>
          </div>

        </div>

        {/* Linha Final - Melhoria de Contraste e Legibilidade */}
        <div className="pt-10 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            © {currentYear} Brototec. Todos os direitos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-primary/80 font-bold italic">
            Feito com intenção e raiz.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;