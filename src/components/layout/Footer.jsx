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
    <footer className="bg-background border-t border-border/40 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Coluna 1: Marca e Descrição */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block group">
              <img src="./images/logo.png" alt="brototec" className="inline-block" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Tecnologia com intenção. Transformamos ideias em produtos digitais de alto impacto.
            </p>
            {/* Redes Sociais */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 hover:bg-green-500/20 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 hover:bg-blue-500/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 hover:bg-pink-500/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/manifesto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Manifesto
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary/70 mt-0.5 flex-shrink-0" />
                <a href="mailto:brototec@zohomail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  brototec@zohomail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary/70 mt-0.5 flex-shrink-0" />
                <a href="tel:+5521987881633" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +55 (21) 98788-1633
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary/70 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Rio de Janeiro, RJ - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha inferior: Copyright */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Brototec. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com intenção e raiz.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;