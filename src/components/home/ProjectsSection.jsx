import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cases } from "../../data/cases";

export default function ProjectsSection() {
  const featuredProjects = cases.slice(0, 2);

  return (
    <section id="projetos" className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">
            Laboratório
          </span>

          <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-4 tracking-tight text-foreground">
            O que estamos <span className="text-gradient-green italic">cultivando.</span>
          </h2>

          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Projetos reais desenvolvidos com foco em soberania tecnológica e design orgânico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {featuredProjects.map((p) => (
            <Link
              key={p.slug}
              to={`/projetos/${p.slug}`}
              className="group flex flex-col"
            >
              {/* CARD VISUAL */}
              <motion.div
                className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-border/40 bg-black/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10"
              >
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="
                    w-full 
                    h-full 
                    object-cover 
                    transition-transform 
                    duration-700 
                    group-hover:scale-[1.05]
                  "
                />

                {/* overlay sutil (sem “placeholder feel”) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-black/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </motion.div>

              {/* TEXTO */}
              <div className="mt-10 flex justify-between items-end px-2">
                <div>
                  <p className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.3em] mb-3">
                    {p.category}
                  </p>

                  <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </div>

                <div className="mb-1 p-3 rounded-full border border-border/60 text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                  <ArrowUpRight size={22} strokeWidth={2.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/projetos"
            className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2 group"
          >
            Ver todos os projetos
            <div className="w-8 h-px bg-border group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}