import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cases } from "@/data/cases";
import CaseCard from "@/components/projetos/CaseCard";

export default function ProjectsSection() {
  // Pegando os dois projetos em destaque para a Home
  const featuredProjects = cases.slice(0, 2);

  return (
    <section id="projetos" className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER DA SEÇÃO */}
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
            Soluções e interfaces digitais em desenvolvimento, focadas em transformar processos de comunicação em experiências simples, visuais e autônomas.
          </p>
        </motion.div>

        {/* GRID DE PROJETOS USANDO CASE CARD */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {/* 
                  Passando as props do objeto 'p' (seu cases.js) 
                  ajustadas para o componente CaseCard 
              */}
              <CaseCard 
                slug={p.slug}
                title={p.title}
                subtitle={p.subtitle}
                tags={p.tags || [p.category]} // Usa tags ou a categoria como fallback
                challenge={p.challenge}
                vision={p.vision}
                status={p.status}
                cover={p.thumbnail || p.cover} // Ajuste conforme a chave no seu cases.js
                autonomy={p.autonomy}
              />
            </motion.div>
          ))}
        </div>

        {/* LINK PARA LABORATÓRIO */}
        <div className="mt-24 text-center">
          <Link
            to="/projetos"
            className="inline-flex flex-col items-center gap-4 group"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
              Ver Portfólio Completo
            </span>
            <div className="h-px bg-border w-24 group-hover:w-40 group-hover:bg-primary transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}