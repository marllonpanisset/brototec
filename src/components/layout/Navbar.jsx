import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getMenu } from "../../utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = getMenu().filter((l) => l.href !== "/contato");

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo Atualizado com o Novo Padrão Solarpunk Amber */}
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-2xl text-foreground group">

            {/* Icon */}
            <svg width="28" height="28" viewBox="0 0 56 56" className="shrink-0">
              {/* Borda externa do grid - agora usando o fundo escuro do card e borda âmbar */}
              <rect x="4" y="4" width="48" height="48" rx="12"
                fill="hsl(220 20% 10%)"
                stroke="hsl(28 92% 54%)"
                strokeWidth="1.5"
              />

              {/* Bloco Ativo Principal */}
              <rect x="16" y="16" width="10" height="10" rx="2"
                fill="hsl(28 92% 54%)"
              />

              {/* Bloco Secundário */}
              <rect x="30" y="16" width="10" height="10" rx="2"
                fill="hsl(28 92% 54%)"
                opacity="0.45"
              />

              {/* Bloco Terciário */}
              <rect x="16" y="30" width="10" height="10" rx="2"
                fill="hsl(28 92% 54%)"
                opacity="0.35"
              />

              {/* Bloco de Eco */}
              <rect x="30" y="30" width="10" height="10" rx="2"
                fill="hsl(28 92% 54%)"
                opacity="0.18"
              />

              {/* Linhas conectoras recalibradas para contrastar no escuro */}
              <line x1="26" y1="21" x2="30" y2="21"
                stroke="hsl(32 30% 96%)"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.4"
              />

              <line x1="21" y1="26" x2="21" y2="30"
                stroke="hsl(32 30% 96%)"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>

            {/* Wordmark */}
            <span className="font-heading font-bold text-2xl text-foreground tracking-tight">
              broto
              <span className="text-primary group-hover:opacity-80 transition-colors">
                tec
              </span>
            </span>

          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors ${
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
              className="text-sm font-bold bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              Conversar
            </Link>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 md:hidden backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-xs bg-card md:hidden border-l border-border"
            >
              <div className="p-6 border-b border-border flex justify-between items-center">
                <span className="font-heading font-bold text-lg text-foreground">Menu</span>
                <button onClick={() => setOpen(false)} className="text-foreground">
                  <X size={16} />
                </button>
              </div>

              <nav className="p-4 flex flex-col gap-2">
                {links.map((l, i) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="p-3 rounded-lg hover:bg-muted group"
                  >
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{l.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {l.description}
                    </p>
                  </Link>
                ))}
              </nav>
              
              {/* CTA mobile fixo */}
              <div className="p-4 border-t border-border mt-auto">
                <Link
                  to="/contato"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground text-sm font-bold px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Conversar
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}