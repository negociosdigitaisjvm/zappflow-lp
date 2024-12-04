'use client';

import React from 'react';
import { MessageSquare, Clock, CheckCircle, User2 } from 'lucide-react';

const AnimatedKanban = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {/* Coluna Novos */}
        <div className="bg-gradient-to-b from-zinc-900/90 to-black/80 p-3 sm:p-4 rounded-xl border border-zinc-800 min-h-[250px] sm:min-h-[400px]">
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#37e067]" />
            <h3 className="font-semibold text-base sm:text-lg text-white">Novos</h3>
          </div>
          
          {/* Cards Estáticos */}
          <div className="space-y-2 sm:space-y-3">
            <div className="bg-zinc-900 p-2.5 sm:p-3 rounded-lg border border-zinc-800">
              <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                <h4 className="font-medium text-sm sm:text-base text-white">Orçamento Website</h4>
                <span className="text-xs bg-zinc-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[#37e067]">2min</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <User2 className="w-3 h-3 text-zinc-400" />
                <p className="text-xs sm:text-sm text-zinc-400">Ana Paula</p>
              </div>
            </div>

            {/* Card Animado que se move */}
            <div className="animate-slide-through bg-zinc-900 p-2.5 sm:p-3 rounded-lg border border-zinc-800">
              <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                <h4 className="font-medium text-sm sm:text-base text-white">Suporte Técnico</h4>
                <span className="text-xs bg-zinc-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[#37e067]">5min</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <User2 className="w-3 h-3 text-zinc-400" />
                <p className="text-xs sm:text-sm text-zinc-400">João Silva</p>
              </div>
            </div>

            <div className="bg-zinc-900 p-2.5 sm:p-3 rounded-lg border border-zinc-800">
              <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                <h4 className="font-medium text-sm sm:text-base text-white">Dúvida Integração</h4>
                <span className="text-xs bg-zinc-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[#37e067]">8min</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <User2 className="w-3 h-3 text-zinc-400" />
                <p className="text-xs sm:text-sm text-zinc-400">Pedro Costa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Em Andamento */}
        <div className="bg-gradient-to-b from-zinc-900/90 to-black/80 p-3 sm:p-4 rounded-xl border border-zinc-800 min-h-[250px] sm:min-h-[400px]">
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#37e067]" />
            <h3 className="font-semibold text-base sm:text-lg text-white">Em Andamento</h3>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <div className="bg-zinc-900 p-2.5 sm:p-3 rounded-lg border border-zinc-800">
              <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                <h4 className="font-medium text-sm sm:text-base text-white">Problema Login</h4>
                <span className="text-xs bg-zinc-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-yellow-500">12min</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <User2 className="w-3 h-3 text-zinc-400" />
                <p className="text-xs sm:text-sm text-zinc-400">Maria Santos</p>
              </div>
            </div>

            <div className="bg-zinc-900 p-2.5 sm:p-3 rounded-lg border border-zinc-800">
              <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                <h4 className="font-medium text-sm sm:text-base text-white">API WhatsApp</h4>
                <span className="text-xs bg-zinc-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-yellow-500">20min</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <User2 className="w-3 h-3 text-zinc-400" />
                <p className="text-xs sm:text-sm text-zinc-400">Lucas Mendes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Concluídos */}
        <div className="bg-gradient-to-b from-zinc-900/90 to-black/80 p-3 sm:p-4 rounded-xl border border-zinc-800 min-h-[250px] sm:min-h-[400px]">
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#37e067]" />
            <h3 className="font-semibold text-base sm:text-lg text-white">Concluídos</h3>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <div className="bg-zinc-900 p-2.5 sm:p-3 rounded-lg border border-zinc-800">
              <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                <h4 className="font-medium text-sm sm:text-base text-white">Setup Inicial</h4>
                <span className="text-xs bg-zinc-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[#37e067]">Resolvido</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <User2 className="w-3 h-3 text-zinc-400" />
                <p className="text-xs sm:text-sm text-zinc-400">Carlos Oliveira</p>
              </div>
            </div>

            <div className="bg-zinc-900 p-2.5 sm:p-3 rounded-lg border border-zinc-800">
              <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                <h4 className="font-medium text-sm sm:text-base text-white">Chatbot Config</h4>
                <span className="text-xs bg-zinc-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[#37e067]">Resolvido</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <User2 className="w-3 h-3 text-zinc-400" />
                <p className="text-xs sm:text-sm text-zinc-400">Fernanda Lima</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedKanban;
