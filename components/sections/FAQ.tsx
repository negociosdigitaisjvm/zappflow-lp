/**
 * FAQ.tsx
 * 
 * Este componente renderiza a seção de Perguntas Frequentes (FAQ) da landing page.
 * Inclui um sistema de acordeão para exibir/ocultar respostas e animações suaves
 * usando Framer Motion.
 */

'use client';

import React, { useState } from 'react';
// Framer Motion para animações suaves
import { motion, AnimatePresence } from 'framer-motion';
// Ícones do Lucide
import { 
  ChevronDown,    // Seta para baixo no acordeão
  MessageSquare,  // Ícone de mensagem
  ArrowRight,     // Seta para direita no botão
  Zap,            // Ícone de raio
  Smartphone,     // Ícone de celular
  Clock,          // Ícone de relógio
  Shield,         // Ícone de escudo
  HeadphonesIcon  // Ícone de fone de ouvido
} from 'lucide-react';
// Componente de botão personalizado
import { Button } from '@/components/ui/button';

const FAQ = () => {
  // Estado para controlar qual pergunta está aberta
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Array com todas as perguntas e respostas
  // Cada objeto contém: pergunta, resposta e um ícone relacionado
  const faqs = [
    {
      question: 'Como posso começar a usar o ZappFlow?',
      answer: 'Começar com o ZappFlow é muito simples! Basta se cadastrar em nossa plataforma, escolher seu plano e seguir o assistente de configuração. Em menos de 5 minutos você já estará pronto para automatizar seu atendimento.',
      icon: MessageSquare
    },
    {
      question: 'Preciso ter conhecimento técnico para usar?',
      answer: 'Não! O ZappFlow foi desenvolvido pensando em todos os níveis de usuários. Nossa interface é intuitiva e amigável, e oferecemos suporte completo para ajudar em qualquer dúvida.',
      icon: Zap
    },
    {
      question: 'Posso usar em múltiplos números de WhatsApp?',
      answer: 'Sim! Dependendo do seu plano, você pode conectar múltiplos números de WhatsApp e gerenciar todos eles em uma única interface, mantendo a organização e eficiência do seu atendimento.',
      icon: Smartphone
    },
    {
      question: 'Como funciona o período de teste gratuito?',
      answer: 'Oferecemos 7 dias de teste totalmente gratuito, com acesso a todas as funcionalidades da plataforma. Não exigimos cartão de crédito para começar, e você pode cancelar a qualquer momento.',
      icon: Clock
    },
    {
      question: 'O ZappFlow é seguro? Como funciona a proteção dos dados?',
      answer: 'Absolutamente! Utilizamos as mais avançadas tecnologias de criptografia e seguimos rigorosos protocolos de segurança para proteger seus dados e conversas. Estamos em conformidade com a LGPD e outras regulamentações de proteção de dados.',
      icon: Shield
    },
    {
      question: 'Que tipo de suporte vocês oferecem?',
      answer: 'Oferecemos suporte completo via chat, email e WhatsApp. Nossa equipe está disponível em horário comercial para ajudar com qualquer dúvida técnica ou operacional. Planos empresariais contam com suporte prioritário 24/7.',
      icon: HeadphonesIcon
    }
  ];

  return (
    // Seção principal do FAQ com fundo preto e padding responsivo
    <section className="relative bg-black py-12 sm:py-16 lg:py-24 overflow-hidden" id="faq">
      {/* Elementos de fundo animados */}
      <div className="absolute inset-0">
        {/* Gradiente superior direito com animação de pulso */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-[600px] h-[600px] top-1/2 -right-40 bg-[#37e067]/5 rounded-full blur-3xl" 
        />
        {/* Gradiente inferior esquerdo com animação de pulso */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute w-[400px] h-[400px] bottom-0 -left-20 bg-[#37e067]/5 rounded-full blur-2xl" 
        />
      </div>

      {/* Container principal com largura máxima e padding responsivo */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Dúvidas{' '}
              {/* Palavra destacada com efeito de glow */}
              <span className="text-[#37e067] relative inline-block">
                Frequentes
                <div className="absolute -inset-1 bg-[#37e067]/20 blur-sm rounded-lg -z-10"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre o ZappFlow
            </p>
          </motion.div>
        </div>

        {/* Lista de perguntas e respostas */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            // Cada pergunta é envolvida em um componente de animação
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card da pergunta com efeitos de hover e foco */}
              <div 
                className={`bg-black/30 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-[#37e067] shadow-lg shadow-[#37e067]/10' 
                    : 'border-white/10 hover:border-[#37e067]/30'
                }`}
              >
                {/* Botão que controla a exibição da resposta */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Ícone com mudança de cor quando ativo */}
                    <div className={`p-2 rounded-xl transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-[#37e067] text-black' 
                        : 'bg-[#37e067]/10 text-[#37e067]'
                    }`}>
                      <faq.icon className="w-6 h-6" />
                    </div>
                    {/* Texto da pergunta */}
                    <h3 className={`font-semibold transition-all duration-300 ${
                      openIndex === index ? 'text-[#37e067]' : 'text-white'
                    } text-lg sm:text-xl`}>
                      {faq.question}
                    </h3>
                  </div>
                  {/* Ícone de seta com rotação */}
                  <ChevronDown
                    className={`w-5 h-5 text-[#37e067] transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animação da resposta */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {/* Conteúdo da resposta */}
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-gray-400 border-t border-white/5 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seção CTA (Call to Action) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          {/* Card do CTA com efeito de vidro */}
          <div className="bg-[#37e067]/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto border border-[#37e067]/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-400 mb-8">
              Nossa equipe está pronta para ajudar você a começar
            </p>
            {/* Botão de ação principal */}
            <Button 
              size="lg"
              className="bg-[#37e067] text-black hover:bg-[#32c95d] transform hover:scale-105 transition-all duration-300 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl shadow-lg shadow-[#37e067]/20 hover:shadow-[#37e067]/40"
              onClick={() => window.open('https://wa.link/lzwa69', '_blank')}
            >
              Fale com um Especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
