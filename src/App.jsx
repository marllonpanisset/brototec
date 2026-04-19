import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import Ecossistema from './pages/Ecossistema';
import Laboratorio from './pages/Laboratorio';
import Manifesto from './pages/Manifesto';
import Contato from './pages/Contato';
import PoliticaPrivacidade from './pages/PoliticaDePrivacidade';
import TermosDeUso from './pages/TermosDeUso';
import ProjetoDetalhe from './pages/ProjetoDetalhe';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <CookieBanner />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecossistema" element={<Ecossistema />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/laboratorio/:slug" element={<ProjetoDetalhe />} />
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