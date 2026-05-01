import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cases } from "../../data/cases";

export default function ProjectsSection() {
  // Pegando os dois projetos reais do seu arquivo de dados
  const featuredProjects = cases.slice(0, 2);

  return (
    <section id="projetos" className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">
            Projetos Ativos
          </span>

          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-4 tracking-tight text-foreground leading-[1.1]">
            O que estamos <br />
            <span className="text-gradient-green italic">construindo agora.</span>
          </h2>

          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed text-base">
            Sistemas e plataformas em desenvolvimento, focados em transformar processos complexos em experiências simples e autônomas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Link
                to={`/projetos/${p.slug}`}
                className="group flex flex-col"
              >
                {/* CARD VISUAL */}
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border/40 bg-muted/20 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-primary/5 group-hover:border-primary/20"
                >
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="
                      w-full 
                      h-full 
                      object-cover 
                      transition-transform 
                      duration-[1.5s]
                      ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* STATUS TAG - Reflete o "Em Desenvolvimento" do seu cases.js */}
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border/40">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[9px] font-bold tracking-[0.15em] text-foreground uppercase">
                        {p.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* TEXTO - Consumindo os dados do objeto */}
                <div className="mt-8 flex justify-between items-start px-2">
                  <div className="max-w-[85%]">
                    <p className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.3em] mb-3">
                      {p.category}
                    </p>

                    <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-all duration-300">
                      {p.title}
                    </h3>
                    
                    <p className="mt-3 text-sm text-muted-foreground/80 line-clamp-2 leading-relaxed">
                      {p.subtitle}
                    </p>
                  </div>

                  <div className="mt-1 p-3 rounded-full border border-border/60 text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            to="/projetos"
            className="inline-flex flex-col items-center gap-4 group"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
              Ver Laboratório Completo
            </span>
            <div className="h-px bg-border w-24 group-hover:w-40 group-hover:bg-primary transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}