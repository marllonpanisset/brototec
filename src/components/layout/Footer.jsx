import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    whatsapp:
      "https://wa.me/5521987881633",
    linkedin: "https://linkedin.com/in/marllon-panisset",
    instagram: "https://instagram.com/marllon.panisset",
  };

  return (
    <footer className="relative bg-[#121614] text-white border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-10">

          {/* Marca */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                broto<span className="text-primary">tec</span>
              </span>

              <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-primary/70">
                Projeto Fictício
              </p>
            </Link>

            <p className="mt-8 text-sm text-white/70 leading-relaxed max-w-sm">
              A Brototec é um projeto fictício criado exclusivamente para meu
              portfólio de desenvolvimento Front-end.

              <br />
              <br />

              O objetivo é demonstrar conhecimentos em React, arquitetura de
              componentes, UX/UI, responsividade, animações e organização de
              código através de uma aplicação moderna.

              <br />
              <br />

              Nenhum conteúdo deste projeto representa uma empresa em operação
              ou oferta de serviços comerciais.
            </p>

            {/* Redes */}
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
              Projeto
            </h4>

            <ul className="space-y-4">
              {[
                { label: "Sobre", href: "/sobre" },
                { label: "Projetos", href: "/projetos" },
                { label: "Estudos", href: "/estudos" },
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

          {/* Contato */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">
              Contato
            </h4>

            <div className="space-y-4">
              <a
                href="mailto:brototec@outlook.com.br"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                marllon.web@gmail.com
              </a>

              <a
                href="tel:+5521987881633"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                +55 (21) 98788-1633
              </a>

              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin size={16} className="text-primary" />
                Rio de Janeiro • Brasil
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:underline"
              >
                Entrar em contato →
              </Link>
            </div>
          </div>
        </div>

        {/* Aviso */}
        <div className="mb-6 text-[11px] text-white/35 max-w-3xl leading-relaxed">
          A Brototec é um projeto fictício desenvolvido exclusivamente para fins
          educacionais e demonstração técnica. Marcas, nomes, conceitos e cases
          apresentados possuem finalidade ilustrativa para composição deste
          portfólio.
        </div>

        {/* Rodapé */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-[10px] uppercase tracking-widest text-white/40">
            © {currentYear} Brototec • Projeto de Portfólio
          </p>

          <p className="text-[10px] uppercase tracking-widest text-primary font-bold italic">
            React • Vite • Front-end • UX/UI
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;