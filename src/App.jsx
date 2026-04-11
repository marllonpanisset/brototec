import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import Solucoes from './pages/Solucoes';
import Projetos from './pages/Projetos';
import Manifesto from './pages/Manifesto';
import Contato from './pages/Contato';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;