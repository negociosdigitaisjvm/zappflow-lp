'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Play, MessageSquare, BarChart3, Settings2, ArrowRight } from 'lucide-react';

const ProductPreview = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-black py-8 sm:py-12 lg:py-16 overflow-hidden" id="product-preview">
      {/* Gradiente de Fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Dashboard Completo e{' '}
                <span className="text-[#37e067] relative">
                  Intuitivo
                  <div className="absolute -inset-1 bg-[#37e067]/20 blur-sm rounded-lg -z-10"></div>
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Tenha total controle do seu negócio com nosso painel administrativo.
                Visualize métricas, gerencie equipes e acompanhe todos os atendimentos em tempo real.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MessageSquare,
                  title: 'Gestão Centralizada',
                  description: 'Controle todos os seus atendimentos e equipes em um único lugar'
                },
                {
                  icon: BarChart3,
                  title: 'Métricas em Tempo Real',
                  description: 'Acompanhe o desempenho da sua equipe e a satisfação dos clientes'
                },
                {
                  icon: Settings2,
                  title: 'Personalização Completa',
                  description: 'Configure automações, chatbots e fluxos de atendimento facilmente'
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <div className="bg-[#37e067]/10 p-2 rounded-lg">
                    <feature.icon className="w-6 h-6 text-[#37e067]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-[#37e067] text-black hover:bg-[#32c95d] transform hover:scale-105 transition-all text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                onClick={() => scrollToSection('#pricing')}
              >
                Experimente Gratuitamente
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>

          {/* Prévia do Produto */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#37e067] to-[#32c95d] opacity-30 blur-3xl group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10">
              {/* Interface de Demonstração */}
              <div className="rounded-xl overflow-hidden">
                <div className="bg-[#1E1E1E] p-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-white/60 text-sm">ZappFlow - Painel de Controle</div>
                </div>
                <div className="relative bg-[#121212] p-2">
                  <Image
                    src="/dashboard.png"
                    alt="Interface ZappFlow"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;