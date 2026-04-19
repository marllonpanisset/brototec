import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseCard({
  slug, 
  title, 
  subtitle, 
  tags, 
  challenge, 
  vision, 
  status, 
  cover, // Recebendo cover (print) do data/cases.js
  wide,
}) {
  return (
    <Link
      to={`/projetos/${slug}`}
      className={`group block border border-border/40 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 bg-background hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-primary/5 ${wide ? "md:col-span-2" : ""}`}
    >
      {/* Container da Imagem usando object-cover para Prints */}
      <div className={`relative overflow-hidden bg-secondary/20 ${wide ? "h-64" : "h-56"}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-60" />
        
        <img 
            src={cover} 
            alt={title} 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
        />
        
        <div className="absolute top-4 left-4 z-20">
          <span className="flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {status}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-5">
          {tags?.map((t) => (
            <span
              key={t}
              className="text-[9px] font-bold text-primary border border-primary/20 px-2.5 py-1 rounded-md uppercase tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>

        <h2 className="font-heading text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground mb-6 font-medium">{subtitle}</p>

        <div className="w-12 h-px bg-primary/30 mb-6" />

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/60">O desafio</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{challenge}</p>
          </div>

          <div className="p-5 rounded-xl bg-secondary/30 border border-border/40 space-y-2">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">A visão Brototec</p>
            <p className="text-sm text-foreground leading-relaxed italic font-heading">"{vision}"</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-end">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
            Explorar caso <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}