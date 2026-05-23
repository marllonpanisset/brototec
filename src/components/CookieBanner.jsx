// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay estratégico para preservar a primeira impressão do design
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-background/80 backdrop-blur-xl border border-border/40 shadow-2xl p-6 z-[9999] rounded-[2rem]"
        >
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-foreground tracking-tight text-base">
                Autonomia & Privacidade
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies essenciais e analíticos para entender como você interage com o nosso ecossistema digital e otimizar sua experiência. Consulte nossa{" "}
                <Link to="/politica-de-privacidade" className="text-primary hover:underline font-medium">
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
            
            <div className="flex items-center justify-end gap-4 border-t border-border/20 pt-4">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Aceitar Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;