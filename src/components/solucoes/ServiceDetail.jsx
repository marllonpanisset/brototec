import { motion } from "framer-motion";

export default function ServiceDetail({
  index,
  icon: Icon,
  title,
  tagline,
  description,
  items,
  flipped,
}) {
  const isEven = flipped;

  return (
    <section className="relative py-24 overflow-hidden">
      {isEven && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-transparent pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isEven ? "lg:order-2" : ""}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon size={18} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-primary tracking-widest uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              {title}
            </h2>

            <p className="mt-3 text-lg text-gradient-green font-medium font-heading">
              {tagline}
            </p>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              {description}
            </p>

            <ul className="mt-8 space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {/* 🔥 gatilho high ticket */}
            {/* 🔥 gatilho high ticket */}
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10 max-w-sm">
              <p className="text-[10px] uppercase tracking-wider font-bold text-primary mb-1">
                Compromisso Brototec
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Este projeto não possui mensalidade de licença. O investimento é focado na construção de um ativo que pertencerá para sempre ao seu negócio.
              </p>
            </div>
          </motion.div>

          {/* VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isEven ? "lg:order-1" : ""}
          >
            <div className="relative rounded-2xl border border-border/40 bg-card/30 overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                  <Icon size={36} className="text-primary" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}