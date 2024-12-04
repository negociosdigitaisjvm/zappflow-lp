'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import { motion } from 'framer-motion';

const AutomationCTA = () => {
  return (
    <section className="relative bg-black py-12 sm:py-16 lg:py-24 overflow-hidden" id="automation-cta">
      {/* Elementos de fundo */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-[800px] h-[800px] top-1/2 -right-40 bg-gradient-to-r from-[#37e067]/10 to-[#32c95d]/5 rounded-full blur-[100px]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute w-[600px] h-[600px] -bottom-20 -left-20 bg-gradient-to-r from-[#37e067]/10 to-[#32c95d]/5 rounded-full blur-[80px]" 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Coluna de texto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Você está{' '}
                <span className="text-[#37e067] relative inline-block group">
                  perdendo dinheiro
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#37e067]/20 to-[#32c95d]/20 blur-lg rounded-lg -z-10 transition-all duration-300 group-hover:from-[#37e067]/30 group-hover:to-[#32c95d]/30"></div>
                </span>{' '}
                se ainda:
              </h2>
              <p className="text-xl text-gray-400">
                Automatize seu atendimento e multiplique suas vendas com o ZappFlow
              </p>
            </div>

            <ul className="space-y-4 sm:space-y-5">
              {[
                'Demora mais de 5 minutos para responder seus clientes',
                'Perde vendas por não ter atendimento 24/7',
                'Não consegue gerenciar múltiplos atendentes com eficiência',
                'Não tem controle sobre o desempenho da sua equipe'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-4 text-xl text-gray-300 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#37e067]/10 flex items-center justify-center">
                    <X className="w-5 h-5 text-[#37e067]" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-6 sm:pt-8">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-[#37e067] text-black hover:bg-[#32c95d] transform hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-7 rounded-xl shadow-lg shadow-[#37e067]/20 hover:shadow-[#37e067]/40 font-semibold"
              >
                COMECE AGORA GRATUITAMENTE
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <p className="mt-4 text-gray-400 text-sm">Sem cartão de crédito • Setup em 5 minutos</p>
            </div>
          </motion.div>

          {/* Coluna de chat simulado */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#37e067]/20 to-[#32c95d]/20 blur-2xl transform -rotate-6 scale-105 rounded-3xl" />
            <div className="relative bg-[#1E1E1E] rounded-2xl p-8 space-y-6 backdrop-blur-sm border border-white/10 shadow-2xl">
              {/* Cabeçalho do Chat */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-[#37e067]" />
                  <span className="text-white font-medium">Chat Online</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#37e067]" />
                  <div className="w-2 h-2 rounded-full bg-[#37e067]/50" />
                  <div className="w-2 h-2 rounded-full bg-[#37e067]/30" />
                </div>
              </div>

              {/* Mensagens */}
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#2A2A2A] rounded-lg p-4 ml-auto max-w-[80%] transform hover:scale-[1.02] transition-transform"
                >
                  <p className="text-gray-300">Oi, quero fazer um pedido!</p>
                  <p className="text-xs text-gray-500 mt-2">14:30</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#37e067]/10 rounded-lg p-4 max-w-[80%] transform hover:scale-[1.02] transition-transform"
                >
                  <p className="text-[#37e067]">Olá! Sou o assistente virtual do ZappFlow. Como posso te ajudar hoje?</p>
                  <p className="text-xs text-[#37e067]/60 mt-2">14:30</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-[#2A2A2A] rounded-lg p-4 ml-auto max-w-[80%] transform hover:scale-[1.02] transition-transform"
                >
                  <p className="text-gray-300">Quero ver os preços dos produtos</p>
                  <p className="text-xs text-gray-500 mt-2">14:31</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-[#37e067]/10 rounded-lg p-4 max-w-[80%] transform hover:scale-[1.02] transition-transform"
                >
                  <p className="text-[#37e067]">Claro! Aqui está nosso catálogo digital com todos os produtos e preços 📱</p>
                  <p className="text-xs text-[#37e067]/60 mt-2">14:31</p>
                </motion.div>
              </div>

              {/* Input do Chat */}
              <div className="relative mt-4">
                <input 
                  type="text" 
                  placeholder="Digite sua mensagem..." 
                  className="w-full bg-[#2A2A2A] rounded-xl py-4 px-6 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#37e067]/50 border border-white/10"
                />
                <Button 
                  size="sm" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#37e067] text-black hover:bg-[#32c95d] rounded-lg px-4 py-2"
                >
                  Enviar
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationCTA;
