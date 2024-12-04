'use client';

import { Bot, BarChart3, MessageSquareHeart, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Bot,
    title: 'Chatbot com IA Avançada',
    description: 'Responda seus clientes em segundos com IA que realmente entende e vende. Integração com ChatGPT.'
  },
  {
    icon: BarChart3,
    title: 'Métricas que Vendem',
    description: 'Acompanhe vendas, tempo de resposta e desempenho da equipe em tempo real. Tome decisões baseadas em dados.'
  },
  {
    icon: MessageSquareHeart,
    title: 'Multi-Atendentes',
    description: 'Gerencie toda sua equipe em um só lugar. Distribua conversas automaticamente e monitore o desempenho.'
  },
  {
    icon: Rocket,
    title: 'Automação Completa',
    description: 'Respostas prontas, distribuição automática, tags, filas e muito mais. Tudo para vender mais.'
  }
];

const FeatureCards = () => {
  return (
    <section className="relative bg-[#1E1E1E] py-16 sm:py-20 overflow-hidden" id="features">
      {/* Elementos de Fundo */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] -top-40 -right-40 bg-[#37e067]/5 rounded-full blur-3xl" />
        <div className="absolute w-[600px] h-[600px] -bottom-20 -left-20 bg-[#37e067]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Funcionalidades Poderosas para{' '}
            <span className="text-[#37e067]">Vender Mais</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto transition-all hover:text-gray-300">
            Tudo que você precisa para transformar seu WhatsApp em um canal de vendas profissional e automatizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-black/50 rounded-xl p-6 hover:bg-black/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#37e067]/20 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Efeito de Borda no Hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#37e067]/0 via-[#37e067]/50 to-[#37e067]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ height: '2px', top: '-1px' }} />
              
              <div className="bg-[#37e067]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                <feature.icon className="w-6 h-6 text-[#37e067] transition-all group-hover:text-[#32c95d]" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 transition-all group-hover:text-[#37e067]">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 transition-all group-hover:text-gray-300">
                {feature.description}
              </p>

              {/* Link Saiba Mais */}
              <div className="mt-4 flex items-center text-[#37e067] opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <span className="text-sm font-medium">Saiba mais</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-[#37e067] text-black hover:bg-[#32c95d] transform hover:scale-105 transition-all animate-glow text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
          >
            COMECE A VENDER MAIS AGORA
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;