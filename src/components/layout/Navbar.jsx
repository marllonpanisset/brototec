import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Fecha menu ao mudar de rota
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Trava scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { label: "Soluções", href: "/solucoes", description: "O que construímos" },
    { label: "Laboratório", href: "/laboratorio", description: "Projetos e processo" },
    { label: "Manifesto", href: "/manifesto", description: "Como pensamos" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-heading font-bold text-2xl tracking-tight text-foreground group z-10"
          >
            broto
            <span className="text-primary italic group-hover:text-primary/80 transition-colors">
              tec
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === l.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contato"
              className="text-sm font-bold tracking-widest bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/10"
            >
              Conversar
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl border border-border/60 bg-background/80 text-foreground hover:border-primary/40 transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — painel lateral direito */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop clicável */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            />

            {/* Painel deslizante da direita */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-xs bg-background border-l border-border/60 flex flex-col md:hidden shadow-2xl"
            >
              {/* Header do painel */}
              <div className="h-16 flex items-center justify-between px-6 border-b border-border/40 shrink-0">
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Links com descrição */}
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                  >
                    <Link
                      to={l.href}
                      className={`group flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-200 ${
                        location.pathname === l.href
                          ? "bg-primary/[0.08] text-primary"
                          : "hover:bg-muted/60 text-foreground"
                      }`}
                    >
                      <div>
                        <p className="font-heading font-bold text-base leading-tight">
                          {l.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {l.description}
                        </p>
                      </div>
                      <ArrowRight
                        size={14}
                        className={`shrink-0 transition-all duration-200 ${
                          location.pathname === l.href
                            ? "text-primary opacity-100"
                            : "text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Rodapé do painel — CTA fixo na base */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="px-6 py-6 border-t border-border/40 space-y-3 shrink-0"
              >
                <Link
                  to="/contato"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground text-sm font-bold px-5 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Conversar sobre meu projeto
                  <ArrowRight size={15} />
                </Link>
                <p className="text-center text-[10px] text-muted-foreground/50 tracking-wide">
                  Respondemos em até 24h. Sem enrolação.
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}