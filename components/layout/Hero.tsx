'use client';

import Image from 'next/image';
import { ArrowRight, MessageSquare, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
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
    <>
      <div className="relative min-h-[80vh] bg-black pt-20 pb-12 overflow-hidden" id="hero">
        {/* Efeito de Gradiente */}
        <div className="hero-gradient" />
        
        {/* Elementos de Fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="gradient-blur w-[500px] h-[500px] -top-20 -right-20" />
          <div className="gradient-blur w-[300px] h-[300px] top-1/2 -left-20" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
          <div className="text-center">
            <div className="flex flex-col items-center gap-4 mb-10">
              <div className="animate-float">
                <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="flex -space-x-3">
                    {[
                      'https://i.pravatar.cc/100?img=1',
                      'https://i.pravatar.cc/100?img=2',
                      'https://i.pravatar.cc/100?img=3',
                      'https://i.pravatar.cc/100?img=4',
                      'https://i.pravatar.cc/100?img=5'
                    ].map((avatar, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-[#37e067]/20 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden"
                      >
                        <Image
                          src={avatar}
                          alt={`User ${index + 1}`}
                          width={32}
                          height={32}
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4285F4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-white/90 text-sm">+2.000 negócios já usam</span>
                </div>
              </div>
              <div className="animate-float" style={{ animationDelay: '0.2s' }}>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#37e067]/10 text-[#37e067] text-sm sm:text-base font-medium">
                  🚀 Multiplique suas vendas com IA
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all hover:scale-105">
              Transforme seu WhatsApp em uma{' '}
              <span className="text-[#37e067] relative inline-block">
                Máquina de Vendas Automática
                <div className="absolute -inset-1 bg-[#37e067]/10 blur-lg rounded-lg -z-10 opacity-75"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all hover:text-white">
              Pare de perder dinheiro com atendimentos lentos e desorganizados. 
              Automatize seu WhatsApp agora e venda até 3x mais, 24 horas por dia, 
              7 dias por semana.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center mb-16 sm:mb-20">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-[#37e067] text-black hover:bg-[#32c95d] transform hover:scale-105 transition-all text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                onClick={() => window.open('https://web.zappflow.app/login', '_blank')}
              >
                Comece seu Teste GRÁTIS
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#37e067] text-[#37e067] hover:bg-[#37e067] hover:text-black transition-all hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                onClick={() => scrollToSection('#pricing')}
              >
                Planos e Preços
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mt-4">
              {[
                { icon: MessageSquare, value: '300%', label: 'Aumento em Vendas' },
                { icon: Users, value: '24/7', label: 'Atendimento Automático' },
                { icon: Zap, value: '5min', label: 'Setup Rápido' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center transform hover:scale-105 transition-all glass-effect p-6 rounded-xl bg-black/30 backdrop-blur-sm"
                >
                  <div className="bg-[#37e067]/10 p-4 rounded-full mb-4 animate-glow">
                    <stat.icon className="w-8 h-8 text-[#37e067]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicador de Rolagem */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-[#37e067] p-2">
            <div className="w-2 h-2 bg-[#37e067] rounded-full mx-auto animate-float"></div>
          </div>
        </div>
      </div>
      
      {/* Transição Suave */}
      <div className="section-transition section-gradient" />
    </>
  );
};

export default Hero;