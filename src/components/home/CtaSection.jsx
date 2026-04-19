import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CtaSection({
  heading = "Pare de depender de terceiros para atualizar seu site",
  body = "Tenha um site profissional com controle total nas suas mãos. Atualize quando quiser, sem complicação.",
  cta = "Criar meu site",
  hint = "Sem dependência • Sem complicação • Feito para você evoluir",
}) {
  return (
    <section className="py-32 border-t border-border/40 text-center">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
          {heading}
        </h2>

        <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
          {body}
        </p>

        <Link
          to="/contato"
          className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
        >
          {cta} <ArrowRight size={16} />
        </Link>

        <p className="mt-4 text-xs text-muted-foreground/60">
          {hint}
        </p>
      </div>
    </section>
  );
}