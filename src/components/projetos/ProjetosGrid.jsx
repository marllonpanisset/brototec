import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Plataforma E-commerce",
    category: "Desenvolvimento Web",
    tag: "2024",
    image: "/__generating__/img_6e640cf56d5a.png",
    size: "large",
  },
  {
    title: "App de Gestão",
    category: "Aplicação Mobile",
    tag: "2024",
    image: "/__generating__/img_d95d090aeaa5.png",
    size: "normal",
  },
  {
    title: "Dashboard Analytics",
    category: "Marketing Digital",
    tag: "2024",
    image: "/__generating__/img_f4ef08a39f81.png",
    size: "normal",
  },
  {
    title: "Identidade Digital",
    category: "Redes Sociais",
    tag: "2023",
    image: "/__generating__/img_6e640cf56d5a.png",
    size: "normal",
  },
  {
    title: "Campanha de Performance",
    category: "Tráfego Pago",
    tag: "2023",
    image: "/__generating__/img_d95d090aeaa5.png",
    size: "normal",
  },
  {
    title: "Portal Corporativo",
    category: "Desenvolvimento Web",
    tag: "2023",
    image: "/__generating__/img_f4ef08a39f81.png",
    size: "large",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative rounded-2xl overflow-hidden border border-border/40 bg-card/30 cursor-pointer"
    >
      {/* Image */}
      <div className={`overflow-hidden bg-muted ${project.size === "large" ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info bar */}
      <div className="p-6 flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-primary font-medium">{project.category}</span>
            <span className="text-xs text-muted-foreground/50">·</span>
            <span className="text-xs text-muted-foreground">{project.tag}</span>
          </div>
          <h3 className="font-heading font-semibold text-base">{project.title}</h3>
        </div>

        <div className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-400">
          <ArrowUpRight
            size={16}
            className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-400"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjetosGrid() {
  const featured = projects.filter((p) => p.size === "large");
  const rest = projects.filter((p) => p.size === "normal");

  return (
    <section className="py-8 pb-32">
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        {/* Featured row */}
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* Regular grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}