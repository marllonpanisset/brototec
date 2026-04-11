import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ImpactSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Subtle radial */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl border border-border/40 bg-card/30 overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 blur-[100px] pointer-events-none" />

          <div className="relative px-8 py-20 sm:px-16 sm:py-28 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-8">
                <Sparkles size={14} />
                Impacto
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            >
                Cada projeto contribui para a{" "}
              <span className="text-gradient-green">educação tecnológica e inovação digital</span>{" "}
              
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-muted-foreground leading-relaxed max-w-xl mx-auto"
            >
              Acreditamos que tecnologia é uma ferramenta de transformação coletiva. Parte de cada projeto é direcionada ao apoio de iniciativas de capacitação e inclusão digital.
            </motion.p>

            {/* Visual dots / network */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-16 flex items-center justify-center gap-3"
            >
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="relative"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-glow"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  {i < 6 && (
                    <div className="absolute top-1/2 left-full -translate-y-1/2 w-3 h-px bg-primary/30" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}