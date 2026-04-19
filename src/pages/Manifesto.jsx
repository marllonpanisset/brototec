import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CtaSection from "../components/home/CtaSection";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const pillars = [
  {
    num: "01",
    title: "Autonomia digital: não criamos dependência, entregamos a chave.",
    desc: "O código é seu. A infra é sua. A documentação é sua. Quando um projeto termina, você tem tudo que precisa para seguir sozinho — ou com quem quiser. Nunca refém de um fornecedor.",
  },
  {
    num: "02",
    title: "Horizontalidade real: sem chefes, com responsabilidade compartilhada.",
    desc: "Operamos como uma cooperativa. Decisões são tomadas em conjunto, os frutos são divididos, e ninguém acumula poder sobre o trabalho dos outros. Economia solidária não é slogan — é como pagamos as contas.",
  },
  {
    num: "03",
    title: "Tecnologia com intenção: cada linha de código tem um propósito ético.",
    desc: "Não aceitamos projetos que exploram dados sem consentimento, criam dark patterns ou aprisionam usuários. Simplicidade não é falta de ambição — é resultado de decisão técnica consciente.",
  },
  {
    num: "04",
    title: "Clareza radical: você entende tudo que está sendo construído.",
    desc: "Sem jargão técnico como escudo. Sem caixa-preta no orçamento. Escopo claro, decisões justificadas, e você acompanha cada etapa — não como cliente, mas como parceiro.",
  },
];

const practice = [
  "Escopo definido antes de qualquer desenvolvimento",
  "Arquitetura documentada e explicada para o cliente",
  "Decisões técnicas com justificativa clara",
  "Código organizado, comentado e transferível",
  "Nenhum lock-in tecnológico proposital",
  "Foco no impacto real, não no volume de entregas",
];

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-medium text-primary/70 tracking-[0.2em] uppercase mb-8"
          >
            Manifesto
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight max-w-4xl"
          >
            O futuro não é algo que acontece.{" "}
            <span className="text-gradient-green">
              É algo que plantamos.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed"
          >
            Acreditamos que tecnologia deve servir à vida — não ao controle. Que
            sistemas devem libertar equipes, não aprisionar clientes. Que o trabalho
            pode ser horizontal, os frutos podem ser divididos, e o código pode ter intenção.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="mt-20 h-px bg-gradient-to-r from-primary/50 via-primary/15 to-transparent origin-left"
          />
        </div>
      </section>

      {/* CONTEXTO */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-1" />
          <motion.div {...fadeUp} className="lg:col-span-8">
            <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase block mb-6">
              O problema que vemos
            </span>
            <p className="font-heading text-2xl sm:text-3xl font-semibold leading-relaxed">
              A maioria das empresas cresce criando dependências que não percebe.
            </p>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-xl">
              Ferramentas que prendem. Fornecedores que complicam de propósito.
              Sistemas que só eles entendem — e cobram por isso. No começo funciona.
              Depois vira gargalo, retrabalho, e uma conta que nunca para de crescer.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
              Nosso papel é o oposto: estruturar o digital da empresa para que ela
              possa crescer com soberania — sem travar, sem depender, sem pedir
              licença para evoluir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-16 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase">
              Os pilares
            </span>
          </div>

          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.07 }}
              className="grid lg:grid-cols-12 gap-6 py-12 border-t border-border/40 last:border-b"
            >
              <div className="lg:col-span-1">
                <span className="text-xs font-medium text-primary/50 tracking-[0.12em] uppercase">
                  {p.num}
                </span>
              </div>
              <div className="lg:col-span-6">
                <h2 className="font-heading text-xl font-bold leading-snug">
                  {p.title}
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BUILD IN PUBLIC */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-1" />
          <motion.div {...fadeUp} className="lg:col-span-8">
            <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase block mb-6">
              Build in public
            </span>

            <div className="p-8 rounded-2xl border border-border/40 bg-primary/[0.025]">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-medium text-primary tracking-[0.12em] uppercase">
                  Construção transparente
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Acreditamos que compartilhar o processo é um ato político. Ao
                mostrar como trabalhamos, quebramos o misticismo que a indústria de
                tecnologia criou para justificar preços opacos e relações de poder
                assimétricas.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Documentamos erros, decisões e aprendizados em público — não para
                parecer vulneráveis, mas porque transparência é o único antídoto
                contra a dependência. Quando você vê como fazemos, você pode fazer
                também. Ou nos cobrar quando erramos.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Acompanhe nossa construção. Questione. Sugira. Esse manifesto também é seu.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* APLICAÇÃO */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp}>
            <span className="text-xs font-medium text-primary tracking-[0.2em] uppercase block mb-4">
              Na prática
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold leading-tight">
              Como isso aparece em cada projeto
            </h2>
          </motion.div>

          <motion.div {...fadeUp}>
            <ul className="space-y-4">
              {practice.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold leading-tight">
              Sistemas vivos.<br />
              Não prisões digitais.
            </h2>
          </motion.div>

          <motion.div {...fadeUp}>
            <p className="text-muted-foreground leading-relaxed">
              Cada projeto é construído com base no contexto real do negócio — não
              em templates, não em modelos genéricos, não em soluções que só nós
              sabemos manter.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              O objetivo é simples: criar algo que funcione hoje, que você entenda
              amanhã, e que continue evoluindo conforme a empresa cresce — com ou
              sem a gente.
            </p>
          </motion.div>
        </div>
      </section>

      <CtaSection
        heading="Vamos construir o amanhã?"
        body="Não como fornecedor e cliente. Como parceiros que acreditam que tecnologia pode ser diferente."
        cta="Vamos conversar"
        hint="Sem formulário padrão. Só uma conversa honesta."
      />  
      <Footer />
    </div>
  );
}