import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CtaSection from "../../components/home/CtaSection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function YaMassemba() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h1 {...fadeUp} className="font-heading text-5xl font-bold">
            YA MASSEMBA
          </motion.h1>

          <motion.p {...fadeUp} className="mt-4 text-muted-foreground">
            Marca autoral de roupas africanas
          </motion.p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeUp}
            className="rounded-2xl overflow-hidden border border-border/40"
          >
            <img
              src="/images/projects/ya-massemba-catalogo.png"
              alt="Catálogo YA MASSEMBA"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="py-24 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-bold">
            Contexto
          </motion.h2>

          <motion.p {...fadeUp} className="mt-6 text-muted-foreground">
            A YA MASSEMBA é uma marca independente com forte identidade cultural.
            O desafio era sair da dependência de redes sociais e construir uma
            presença digital própria, capaz de transmitir valor e organizar a operação.
          </motion.p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-24 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-bold">
            Problema
          </motion.h2>

          <ul className="mt-8 space-y-4 text-muted-foreground">
            <li>• Dependência total de redes sociais</li>
            <li>• Falta de estrutura para apresentar produtos</li>
            <li>• Baixa percepção de valor</li>
            <li>• Nenhum controle sobre a experiência do cliente</li>
          </ul>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-24 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-bold">
            Solução
          </motion.h2>

          <motion.p {...fadeUp} className="mt-6 text-muted-foreground">
            Desenvolvemos um site institucional com base na identidade da marca,
            estruturando catálogo, páginas de produto e base para evolução futura
            em e-commerce completo.
          </motion.p>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          <motion.div {...fadeUp} className="rounded-xl overflow-hidden border border-border/40">
            <img
              src="/images/projetos/ya-massemba-catalago.png"
              alt="Catálogo"
              className="w-full h-[220px] object-cover"
            />
          </motion.div>

          <motion.div {...fadeUp} className="rounded-xl overflow-hidden border border-border/40">
            <img
              src="/images/projetos/ya-massemba-pagina-produto.png"
              alt="Produto"
              className="w-full h-[220px] object-cover"
            />
          </motion.div>

          <motion.div {...fadeUp} className="rounded-xl overflow-hidden border border-border/40">
            <img
              src="/images/projetos/ya-massemba-mobile-dashboard2.png"
              alt="Dashboard"
              className="w-full h-[220px] object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* RESULTADO */}
      <section className="py-24 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-bold">
            Resultado
          </motion.h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>• Presença digital estruturada</div>
            <div>• Aumento da percepção de valor</div>
            <div>• Melhor apresentação dos produtos</div>
            <div>• Base pronta para escalar vendas</div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
}