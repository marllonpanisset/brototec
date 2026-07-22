import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cases } from "@/data/cases";
import CaseCard from "@/components/projetos/CaseCard";

export default function ProjectsSection() {
  const featuredProjects = cases.slice(0, 2);

  return (
    <section id="projetos" className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">
            Estudos Publicados
          </span>

          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-4 tracking-tight text-foreground leading-[1.1]">
            Projetos desenvolvidos para <br />
            <span className="text-gradient-amber italic">
              explorar diferentes tecnologias.
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed text-base">
            Cada projeto representa um estudo prático desenvolvido para aplicar
            conceitos de design, arquitetura Front-end, componentização,
            responsividade e experiência do usuário. Todos fazem parte do meu
            processo contínuo de aprendizado e evolução como desenvolvedor.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <CaseCard
                slug={p.slug}
                title={p.title}
                subtitle={p.subtitle}
                tags={p.tags || [p.category]}
                challenge={p.challenge}
                vision={p.vision}
                status={p.status}
                cover={p.thumbnail || p.cover}
                autonomy={p.autonomy}
              />
            </motion.div>
          ))}
        </div>

        {/* LINK */}
        <div className="mt-24 text-center">
          <Link
            to="/projetos"
            className="inline-flex flex-col items-center gap-4 group"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
              Explorar todos os projetos
            </span>

            <div className="h-px bg-border w-24 group-hover:w-40 group-hover:bg-primary transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}