// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    console.log('Cookies aceitos. Scripts de análise podem ser carregados.');
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    console.log('Cookies rejeitados. Nenhum script de análise será carregado.');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border/40 shadow-lg p-4 md:p-6 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Nós usamos cookies para melhorar sua experiência de navegação. Ao continuar, você concorda com nossa{' '}
          <a href="/politica-de-privacidade#cookies" className="text-primary hover:underline">
            Política de Privacidade
          </a>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleReject}
            className="px-5 py-2 text-sm font-medium text-foreground border border-border rounded-full hover:bg-muted transition-colors duration-200"
          >
            Rejeitar
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors duration-200 shadow-md"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;