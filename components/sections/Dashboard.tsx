'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import InteractiveKanban from '../features/InteractiveKanban';
import { AnimatedSection, AnimatedFade } from '@/components/ui/animated-section';

const Dashboard = () => {
  return (
    <section className="relative bg-black py-12 sm:py-16 lg:py-24 overflow-hidden" id="dashboard">
      {/* Elementos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] top-1/2 -right-40 bg-[#37e067]/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bottom-0 -left-20 bg-[#37e067]/5 rounded-full blur-[80px] animate-pulse" />
      </div>

      <AnimatedFade>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Sistema Completo de{' '}
                <span className="text-[#37e067] relative inline-block">
                  CRM e Vendas
                  <div className="absolute -inset-1 bg-[#37e067]/20 blur-lg rounded-lg -z-10"></div>
                </span>{' '}
                para WhatsApp
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Gerencie todos os seus atendimentos em um só lugar. 
                Distribua conversas, monitore sua equipe e aumente suas vendas com recursos avançados:
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 text-left">
              <div className="bg-black/30 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#37e067]/30 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-[#37e067] text-xl font-semibold mb-3">🎯 Gestão de Atendimentos</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Distribuição automática de conversas</li>
                  <li>• Sistema de filas inteligente</li>
                  <li>• Tags e categorização</li>
                  <li>• Histórico completo de conversas</li>
                </ul>
              </div>
              
              <div className="bg-black/30 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#37e067]/30 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-[#37e067] text-xl font-semibold mb-3">🤖 Automação Inteligente</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Chatbot com IA avançada</li>
                  <li>• Respostas rápidas personalizadas</li>
                  <li>• Fluxos de atendimento</li>
                  <li>• Integração com ChatGPT</li>
                </ul>
              </div>
              
              <div className="bg-black/30 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#37e067]/30 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-[#37e067] text-xl font-semibold mb-3">📊 Métricas e Relatórios</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Dashboard em tempo real</li>
                  <li>• Relatórios de desempenho</li>
                  <li>• Métricas de conversão</li>
                  <li>• Análise de atendentes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <AnimatedSection delay={0.4} className="relative group max-w-6xl mx-auto">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#37e067]/10 via-[#32c95d]/10 to-[#37e067]/10 rounded-3xl blur-xl" />
            <InteractiveKanban />
          </AnimatedSection>

          {/* CTA */}
          <div className="mt-8 sm:mt-12 text-center">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-[#37e067] text-black hover:bg-[#32c95d] transform hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg shadow-[#37e067]/20 hover:shadow-[#37e067]/40"
            >
              COMECE SEU TESTE GRÁTIS
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <p className="mt-6 text-gray-400">Sem cartão de crédito • Setup em 5 minutos</p>
          </div>
        </div>
      </AnimatedFade>
    </section>
  );
};

export default Dashboard;
