import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Importando Link para evitar refresh de página

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Início", href: "/" },
    { label: "Ecossistema", href: "/ecossistema" },
    { label: "Laboratório", href: "/laboratorio" },
    { label: "Manifesto", href: "/manifesto" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo - Agora atua como o 'Início' */}
        <Link to="/" className="font-heading font-bold text-2xl tracking-tight text-foreground group">
          broto<span className="text-primary group-hover:text-primary/80 transition-colors">tec</span>  
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
            className="text-sm font-bold uppercase tracking-widest bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/10"
          >
            Plantar Ideia
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-heading font-semibold ${
                    location.pathname === l.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setOpen(false)}
                className="text-sm font-bold uppercase tracking-widest bg-primary text-primary-foreground px-5 py-3.5 rounded-full text-center hover:opacity-90 transition-opacity mt-4"
              >
                Plantar Ideia
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}