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
          
          {/* Logo */}
          <Link to="/" className="font-heading font-bold text-2xl text-foreground group">
            broto
            <span className="text-primary group-hover:text-primary/80 transition-colors">
              tec
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
              className="text-sm font-bold bg-primary text-primary-foreground px-6 py-2.5 rounded-full"
            >
              Conversar
            </Link>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
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
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-xs bg-background md:hidden"
            >
              <div className="p-6 border-b">
                <button onClick={() => setOpen(false)}>
                  <X size={16} />
                </button>
              </div>

              <nav className="p-4 flex flex-col gap-2">
                {links.map((l, i) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="p-3 rounded-lg hover:bg-muted"
                  >
                    <p className="font-semibold">{l.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {l.description}
                    </p>
                  </Link>
                ))}
              </nav>
              {/* CTA mobile fixo */}
              <div className="p-4 border-t mt-auto">
                <Link
                  to="/contato"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground text-sm font-bold px-5 py-3 rounded-xl"
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