import React from "react";
import { motion } from "framer-motion";

const screenClasses =
  "absolute overflow-hidden bg-black flex items-start justify-center will-change-transform antialiased";

// ================= MACBOOK AIR 13 =================
export const MacBookAir = ({ src }) => {
  return (
    <div className="relative w-full max-w-[1000px] mx-auto isolate">
      <div
        className={screenClasses}
        style={{
          top: "4.5%",
          left: "12.1%",
          width: "75.8%",
          height: "82.5%",
          zIndex: 1,
          borderRadius: "1.2% / 1.5%",
        }}
      >
        <img src={src} alt="MacBook View" className="w-full h-full object-top pt-5" />
      </div>

      <img
        src="/images/devices/MacBook-Air-13-mockup.png"
        className="relative z-10 w-full h-auto pointer-events-none select-none"
        alt="MacBook Air"
      />
    </div>
  );
};

// ================= IPHONE 12 =================
export const IPhone12 = ({ src }) => {
  return (
    <div className="relative w-full mx-auto isolate">
      <div
        className={screenClasses}
        style={{
          top: "2.4%",
          left: "6.8%",
          width: "86.4%",
          height: "95.2%",
          zIndex: 1,
          borderRadius: "10% / 5%",
          paddingTop: "4px", 
          backgroundColor: "#0B192E" // Fundo Schio
        }}
      >
        <img 
          src={src} 
          alt="iPhone View" 
          className="w-full h-full object-cover"
        />
      </div>

      <img
        src="/images/devices/iPhone-12-mockup.png"
        className="relative z-10 w-full h-auto pointer-events-none select-none"
        alt="iPhone 12"
      />
    </div>
  );
};

// ================= IPAD AIR PORTRAIT (NOVO) =================
export const IPadAirPortrait = ({ src }) => {
  return (
    <div className="relative w-full max-w-[480px] mx-auto isolate">
      {/* SCREEN */}
      <div
        className={screenClasses}
        style={{
          top: "3.2%",
          left: "5.5%",
          width: "89%",
          height: "93.6%",
          zIndex: 1,
          borderRadius: "1.5rem", // Arredondado do iPad Air
          backgroundColor: "#0B192E", // Fundo Schio
        }}
      >
        <img 
          src={src} 
          alt="iPad Portrait View" 
          className="w-full h-full p-[11px_7px]" 
        />
      </div>

      {/* FRAME OVERLAY */}
      <img
        src="/images/devices/iPad-Air--Portrait.png"
        className="relative z-10 w-full h-auto pointer-events-none select-none"
        alt="iPad Air Portrait"
      />
    </div>
  );
};

// ================= INTRO COMBO: IPAD PORTRAIT + IPHONE (NOVO PARA SEÇÃO 1) =================
export const IntroIpadMockup = ({ ipadSrc }) => {
  return (
    <div className="relative w-full flex items-center justify-center py-10 md:py-20 isolate">
      {/* iPad Air Portrait (Central e Base) */}
      <div className="relative z-10 w-full max-w-[400px] md:max-w-[480px]">
        <IPadAirPortrait src={ipadSrc} />
      </div>
    </div>
  );
};

// ================= CORE SYSTEM COMBO: MACBOOK + IPHONE (Ajustado para Desktop Only no Mobile) =================
export const ComboMockup = ({ desktopSrc, mobileSrc, reverse = false }) => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-center py-12 md:py-22 px-4">
      
      {/* MACBOOK: Escondido no mobile (hidden), visível no desktop (md:block) */}
      <div className={`hidden md:block relative z-10 w-full md:max-w-[850px] transition-all duration-500 
        ${reverse ? 'md:translate-x-16' : 'md:-translate-x-16'}`}>
        <MacBookAir src={desktopSrc} />
      </div>

      {/* IPHONE: No mobile ele vira o protagonista, centralizado e maior */}
      <div 
        className={`z-20 w-[300px] md:w-[243px] drop-shadow-2xl transition-all duration-500
          ${reverse 
            ? 'md:absolute md:left-[8%] md:bottom-10' 
            : 'md:absolute md:right-[0%] md:top-[10%]'
          }`}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <IPhone12 src={mobileSrc} />
        </motion.div>
      </div>

      {/* TEXTO DE APOIO PARA MOBILE (Opcional) */}
      <p className="md:hidden text-[10px] text-muted-foreground uppercase tracking-widest mt-8">
        Interface Mobile Otimizada
      </p>
    </div>
  );
};