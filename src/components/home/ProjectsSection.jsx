import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Plataforma E-commerce",
    category: "Desenvolvimento Web",
    image: "https://media.base44.com/images/public/69d93e23dc4bba4faeae3b3f/2283df6d8_generated_1952d20e.png",
  },
  {
    title: "App de Gestão",
    category: "Aplicação Mobile",
    image: "https://media.base44.com/images/public/69d93e23dc4bba4faeae3b3f/d9a4f797d_generated_42ea9038.png",
  },
  {
    title: "Dashboard Analytics",
    category: "Marketing Digital",
    image: "https://media.base44.com/images/public/69d93e23dc4bba4faeae3b3f/9b9a9c304_generated_a0031d99.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Portfólio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 tracking-tight">
            Projetos recentes.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden border border-border/40 bg-card/30 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={`${p.title} - projeto de criação de site e automação`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading font-semibold text-base">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.category}</p>
                </div>
                <div className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}