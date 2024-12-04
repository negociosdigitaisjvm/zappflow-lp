'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Carlos Silva",
        position: "Dono de E-commerce",
        company: "TechStore",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&h=256&q=80",
        text: "Multiplicamos nossas vendas em 3X em apenas 2 meses! O chatbot do ZappFlow converteu 70% mais leads em clientes. Quem não está usando está literalmente jogando dinheiro fora.",
        metrics: "300% de aumento em vendas"
    },
    {
        name: "Ana Rodrigues",
        position: "Gerente Comercial",
        company: "Mega Móveis",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80",
        text: "Nosso time reduziu o tempo de resposta de 3 horas para 3 minutos. Resultado? Fechamos 5X mais vendas por mês. É surreal como perdíamos clientes antes do ZappFlow.",
        metrics: "500% mais conversões"
    },
    {
        name: "Roberto Santos",
        position: "CEO",
        company: "RS Imports",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&h=256&q=80",
        text: "Automatizamos 89% dos atendimentos e reduzimos custos em 62%. Nossos vendedores agora focam apenas em fechar negócios. O ROI foi positivo já na primeira semana.",
        metrics: "89% de automação"
    }
];

const Testimonials = () => {
    return (
        <section className="relative bg-black py-16 sm:py-24 overflow-hidden" id="testimonials">
            {/* Elementos de fundo */}
            <div className="absolute inset-0">
                <div className="absolute w-[600px] h-[600px] top-1/2 -right-40 bg-[#37e067]/5 rounded-full blur-3xl" />
                <div className="absolute w-[400px] h-[400px] bottom-0 -left-20 bg-[#37e067]/5 rounded-full blur-2xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Empresas que{' '}
                        <span className="text-[#37e067] relative">
                            Multiplicaram suas Vendas
                            <div className="absolute -inset-1 bg-[#37e067]/20 blur-sm rounded-lg -z-10"></div>
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Veja como nossos clientes estão dominando o mercado enquanto seus concorrentes ainda usam WhatsApp comum
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-black/30 p-8 rounded-xl border border-white/10"
                        >
                            <div className="flex items-center mb-6">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#37e067]/20 mr-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={`Foto de ${testimonial.name}`}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                                    <p className="text-gray-400">{testimonial.position}</p>
                                    <p className="text-[#37e067]">{testimonial.company}</p>
                                </div>
                            </div>
                            
                            <blockquote className="text-gray-300 mb-6">
                                "{testimonial.text}"
                            </blockquote>
                            
                            <div className="bg-[#37e067]/10 p-4 rounded-lg">
                                <p className="text-[#37e067] font-bold text-lg">
                                    {testimonial.metrics}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-2xl font-bold text-white mb-8">
                        Enquanto você lê isso, seus concorrentes já estão{' '}
                        <span className="text-[#37e067]">vendendo mais</span>
                    </p>
                    <button className="bg-[#37e067] text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#37e067]/90 transition-colors duration-300 flex items-center mx-auto">
                        Começar a Vender Mais Agora
                        <span className="ml-2">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
