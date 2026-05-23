import { motion } from "framer-motion";
import { Monitor, LayoutGrid, ShieldCheck } from "lucide-react"; // Mudado Cpu para LayoutGrid (mais focado em design)
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    num: "01",
    title: "Interfaces & Landing Pages", // Removido "Plataformas" para evitar associação com sistemas complexos
    tagline: "Sua presença com soberania.",
    desc: "Estruturamos o design de interfaces e páginas institucionais de alta performance com painéis de gerenciamento intuitivos e customizados. Você edita seus próprios conteúdos e evolui sua marca com total autonomia, sem depender de taxas extras ou intermediários.",
  },
  {
    icon: LayoutGrid, // Ícone alinhado a layouts e organização visual
    num: "02",
    title: "Design de Painéis & Fluxos Visuais", // Removido "Arquitetura & Dashboards de Dados" (termo técnico perigoso)
    tagline: "Gestão integrada e inteligente.",
    desc: "Configuramos e customizamos painéis de controle e organizadores visuais privados para centralizar seus indicadores de faturamento, estoques ou fluxos de atendimento. Ambientes práticos onde você mantém o controle absoluto da sua estratégia de marketing.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Patrimônio Digital",
    tagline: "A chave é sempre sua.",
    desc: "Entregamos a propriedade total da sua estrutura de páginas, arquivos de identidade visual, layouts e chaves de acesso dos provedores. Na Brototec você constrói um ativo de marca que pertence legalmente à sua empresa, com total liberdade.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 border-t border-border/40 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase"
        >
          O Valor da Entrega
        </motion.span>

        
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-4xl font-bold mt-4 max-w-xl leading-[1.1] text-white"
        >
          Transformamos presença digital em <br />
          <span className="text-gradient-amber italic">ativos de faturamento.</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 rounded-3xl overflow-hidden border border-border/40 shadow-sm">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card hover:bg-primary/[0.02] p-10 transition-colors duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <s.icon size={22} className="text-primary" />
              </div>

              <span className="text-[10px] font-bold text-primary/30 tracking-widest uppercase block mb-3">
                Solução {s.num} {/* Trocado Serviço por Solução (sooa mais corporativo e protege) */}
              </span>

              <h3 className="font-heading text-xl font-bold mb-3 text-white">{s.title}</h3>

              <p className="text-xs text-primary font-bold mb-5 tracking-wide uppercase">
                {s.tagline}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/solucoes"
            className="group inline-flex items-center gap-3 text-[10px] font-bold text-primary tracking-[0.2em] uppercase hover:gap-5 transition-all"
          >
            Explorar todas as soluções <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}