import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="cta" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-card/60" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

          <div className="relative px-8 py-20 sm:px-16 sm:py-28 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-lg">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              >
                Pronto para{" "}
                <span className="text-gradient-green">crescer?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 text-muted-foreground leading-relaxed"
              >
                Vamos construir algo extraordinário juntos. O primeiro passo é uma conversa.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="/contato"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 transition-all duration-300 glow-green"
              >
                Iniciar conversa
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}