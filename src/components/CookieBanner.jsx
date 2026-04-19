// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Recomendo usar framer para ser suave

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Pequeno delay para não assustar o usuário assim que ele abre o site
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
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-xl bg-white/80 backdrop-blur-xl border border-border/40 shadow-2xl p-6 z-[9999] rounded-[2rem]"
        >
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-foreground tracking-tight">Privacidade & Experiência</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nós usamos cookies para entender como você interage com a nossa filosofia digital e melhorar sua navegação. 
                Consulte nossa <a href="/politica-de-privacidade" className="text-primary hover:underline font-medium">Política de Privacidade</a>.
              </p>
            </div>
            
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={handleReject}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
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