// src/pages/PoliticaDePrivacidade.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />
      <section className="relative pt-44 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-sm font-medium text-primary tracking-widest uppercase mb-8"
          >
            Privacidade
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            Política de <span className="text-gradient-green">Privacidade</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-16 h-px bg-gradient-to-r from-primary/60 via-primary/20 to-transparent origin-left"
          />
        </div>
      </section>

      <motion.section {...fadeUp} transition={{ duration: 0.7 }} className="py-16">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-invert">
          <h2>1. Introdução</h2>
          <p>A sua privacidade é importante para nós. É política da brototec respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://brototec.com.br">brototec</a>, e outros sites que possuímos e operamos.</p>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>

          <h2>2. Dados que Coletamos</h2>
          <p>Quando você entra em contato conosco através do formulário do site, podemos coletar as seguintes informações:</p>
          <ul>
            <li><strong>Nome completo:</strong> Para nos dirigirmos a você de forma adequada.</li>
            <li><strong>Endereço de e-mail:</strong> Para responder à sua solicitação.</li>
            <li><strong>Mensagem:</strong> O conteúdo da sua consulta.</li>
            <li><strong>Dados de navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, etc., coletados por meio de cookies (veja nossa Política de Cookies).</li>
          </ul>

          <h2>3. Uso dos Dados</h2>
          <p>Os dados que coletamos são utilizados para as seguintes finalidades:</p>
          <ul>
            <li>Responder às suas mensagens e prestar suporte.</li>
            <li>Melhorar a experiência do usuário em nosso site (através de análises anônimas).</li>
            <li>Cumprir obrigações legais.</li>
          </ul>

          <h2>4. Compartilhamento de Dados</h2>
          <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou quando necessário para a execução de nossos serviços (ex: ferramentas de e-mail marketing).</p>

          <h2>5. Seus Direitos (LGPD)</h2>
          <p>De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/18), você tem o direito de:</p>
          <ul>
            <li>Confirmar a existência de tratamento de seus dados.</li>
            <li>Acessar seus dados.</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Solicitar a portabilidade de seus dados.</li>
            <li>Revogar seu consentimento a qualquer momento.</li>
          </ul>

          <h2>6. Contato do Encarregado (DPO)</h2>
          <p>Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato com nosso Encarregado de Dados:</p>
          <ul>
            <li><strong>Nome:</strong> Marllon [Seu Sobrenome]</li>
            <li><strong>E-mail:</strong> privacidade@brototec.com</li>
          </ul>

          <h2>7. Atualizações desta Política</h2>
          <p>Esta política pode ser atualizada periodicamente. Recomendamos que você a revise com frequência. A data da última atualização estará sempre indicada no final deste documento.</p>
          <p><strong>Última atualização:</strong> [Data Atual]</p>

          
        <h2 id="cookies">8. Política de Cookies</h2>
        <p>Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdo. Abaixo detalhamos os tipos de cookies que utilizamos:</p>

        <h3>Cookies Estritamente Necessários</h3>
        <p>Essenciais para o funcionamento do site. Não coletam dados pessoais.</p>
        <ul>
        <li><strong>cookieConsent</strong>: Armazena sua preferência de consentimento de cookies. Duração: 1 ano.</li>
        </ul>

        <h3>Cookies de Desempenho e Análise</h3>
        <p>Nos ajudam a entender como os visitantes interagem com o site, coletando informações anônimas.</p>
        <ul>
        <li><strong>_ga (Google Analytics)</strong>: Distingue usuários únicos. Duração: 2 anos.</li>
        <li><strong>_gid (Google Analytics)</strong>: Distingue usuários. Duração: 24 horas.</li>
        </ul>

        <p>Você pode gerenciar ou desabilitar cookies nas configurações do seu navegador. Para mais informações, visite <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.</p>
        </div>

      </motion.section>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;