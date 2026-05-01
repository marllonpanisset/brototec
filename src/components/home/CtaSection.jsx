import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CtaSection({
  heading = "Pronto para ter soberania digital?",
  body = "Construímos ferramentas que pertencem ao seu negócio, não o contrário. Vamos transformar sua operação em um ativo real?",
  cta = "Iniciar Consultoria",
  hint = "Conversa direta, sem intermediários.",
}) {
  return (
    <section className="relative py-32 border-t border-border/40 overflow-hidden bg-primary/[0.01]">
      {/* Elemento Decorativo de Fundo (Sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
            <Sparkles size={20} className="text-primary" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            {heading}
          </h2>

          <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            {body}
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <Link
              to="/contato"
              className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground text-sm font-bold px-10 py-5 rounded-2xl transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              {cta} 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                {hint}
              </p>
              <div className="flex items-center justify-center gap-4 mt-2">
                <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary/40" /> Sem Mensalidade
                </span>
                <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary/40" /> Código Aberto
                </span>
                <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary/40" /> Suporte Direto
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}