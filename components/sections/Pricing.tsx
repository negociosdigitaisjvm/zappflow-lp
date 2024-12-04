'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, AnimatedFade } from '@/components/ui/animated-section';

const plans = {
    monthly: [
        {
            name: "Plano Básico",
            price: "397",
            description: "Ideal para pequenas e médias empresas",
            features: [
                "1 Número do WhatsApp",
                "5 Usuários",
                "Atendimentos Ilimitados",
                "Chatbot",
                "Respostas Automáticas",
                "Disparo em Massa",
                "Relatórios",
                "Gestão de Equipe",
                "Integração com CRM",
                "Suporte via Chat/Email"
            ]
        },
        {
            name: "Plano Avançado",
            price: "497",
            description: "Para empresas que precisam de mais recursos",
            popular: true,
            features: [
                "3 Números do WhatsApp",
                "10 Usuários",
                "Atendimentos Ilimitados",
                "Chatbot Avançado",
                "Respostas Automáticas",
                "Disparo em Massa",
                "Relatórios Avançados",
                "Gestão de Equipe",
                "Integração com CRM",
                "API Disponível",
                "Integração com ChatGPT",
                "Suporte Prioritário"
            ]
        }
    ]
};

const Pricing = () => {
    return (
        <section className="relative bg-black py-12 sm:py-16 lg:py-24 overflow-hidden" id="pricing">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute w-[800px] h-[800px] top-1/2 -left-40 bg-[#37e067]/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute w-[600px] h-[600px] bottom-0 right-0 bg-[#37e067]/5 rounded-full blur-[80px] animate-pulse" />
            </div>

            <AnimatedFade>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <AnimatedSection delay={0.2}>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                                Planos e{' '}
                                <span className="text-[#37e067] relative inline-block">
                                    Preços
                                    <div className="absolute -inset-1 bg-[#37e067]/20 blur-lg rounded-lg -z-10"></div>
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                                Escolha o plano ideal para o seu negócio
                            </p>
                        </AnimatedSection>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {plans.monthly.map((plan, index) => (
                            <AnimatedSection
                                key={plan.name}
                                delay={0.2 + index * 0.1}
                                className={`relative p-6 sm:p-8 rounded-2xl border ${
                                    plan.popular
                                        ? 'border-[#37e067] bg-[#37e067]/5'
                                        : 'border-white/10 bg-black/30'
                                } hover:border-[#37e067]/30 transition-all duration-300`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-[#37e067] text-black px-4 py-1 rounded-full text-sm font-medium">
                                            Mais Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                                    <p className="text-gray-400 mb-6">{plan.description}</p>
                                    <div className="flex items-center justify-center mb-6">
                                        <span className="text-4xl font-bold text-white">R$</span>
                                        <span className="text-6xl font-bold text-white mx-2">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-400">/mês</span>
                                    </div>
                                    <div className="space-y-4">
                                        <Button
                                            className="w-full bg-[#37e067] text-black hover:bg-[#32c95d] transition-all duration-300"
                                            onClick={() => window.open('https://web.zappflow.app/login', '_blank')}
                                        >
                                            Comece Agora
                                        </Button>
                                        <p className="text-xs text-center text-muted-foreground">
                                            Cancele a qualquer momento
                                        </p>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-300">
                                            <Check className="w-5 h-5 text-[#37e067] mr-3 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </AnimatedFade>
        </section>
    );
};

export default Pricing;
