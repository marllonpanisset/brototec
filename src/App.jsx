import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { usePageMetadata } from './hooks/usePageMetadata'; // Importando seu novo hook

import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import Estudos from './pages/Estudos';
import Projetos from './pages/Projetos';
import Manifesto from './pages/Manifesto';
import Contato from './pages/Contato';
import PoliticaPrivacidade from './pages/PoliticaDePrivacidade';
import TermosDeUso from './pages/TermosDeUso';
import ProjetoDetalhe from './pages/ProjetoDetalhe';
import CookieBanner from './components/CookieBanner';

// Este componente dispara o hook a cada mudança de rota
function MetadataUpdater() {
  usePageMetadata();
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <MetadataUpdater /> {/* Centralizador de SEO */}
        <CookieBanner />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estudos" element={<Estudos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:slug" element={<ProjetoDetalhe />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/contato" element={<Contato />} />
          
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;