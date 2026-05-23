import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    whatsapp:
      "https://wa.me/5521991472417?text=Quero%20uma%20plataforma%20digital%20independente.%20Pode%20me%20explicar%20como%20funciona%3F",
    linkedin: "https://linkedin.com/company/brototec",
    instagram: "https://instagram.com/brototecbr",
  };

  return (
    <footer className="relative bg-[#121614] text-white border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* Marca */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                broto<span className="text-primary">tec</span>
              </span>
            </Link>

            <p className="mt-8 text-sm text-white/70 leading-relaxed max-w-sm">
              Tecnologia feita para você não depender de ninguém depois da entrega.
              <br /><br />
              Plataformas, portfólios e canais de conversão que você controla sozinho —
              com autonomia visual, flexibilidade e independência total.
              <br /><br />
              Sem dependência de agências. Sem manutenção obrigatória.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 pt-6">
              {[
                { icon: Instagram, href: socialLinks.instagram },
                { icon: Linkedin, href: socialLinks.linkedin },
                { icon: MessageCircle, href: socialLinks.whatsapp },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/10 text-white/70 hover:text-primary hover:border-primary hover:bg-white/5 transition-all"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">
              Explorar
            </h4>

            <ul className="space-y-4">
              {[
                { label: "Soluções", href: "/solucoes" },
                { label: "Projetos", href: "/projetos" },
                { label: "Manifesto", href: "/manifesto" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">
              Legal
            </h4>

            <ul className="space-y-4">
              <li>
                <Link to="/politica-de-privacidade" className="text-sm text-white/70 hover:text-primary">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-sm text-white/70 hover:text-primary">
                  Termos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">
              Fale com a gente
            </h4>

            <div className="space-y-4">
              <a
                href="mailto:contato@brototec.com.br"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                contato@brototec.com.br
              </a>

              <a
                href="tel:+5521991472417"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                +55 (21) 99147-2417
              </a>

              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin size={16} className="text-primary" />
                Rio de Janeiro — remoto para o mundo
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:underline"
              >
                Quero minha plataforma independente →
              </Link>
            </div>
          </div>
        </div>

        {/* SEO leve higienizado */}
        <div className="mb-8 text-[11px] text-white/50 max-w-3xl leading-relaxed">
          Estruturamos ambientes digitais, landing pages e plataformas web com foco em autonomia, 
          performance extrema e posicionamento estratégico de marca.
        </div>

        {/* Final */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/40">
            © {currentYear} Brototec
          </p>

          <p className="text-[10px] uppercase tracking-widest text-primary font-bold italic">
            Autonomia digital construída na prática.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;