'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const DemoVideo = () => {
  return (
    <section className="relative bg-black py-8 sm:py-12 lg:py-16 overflow-hidden" id="demo-video">
      {/* Elementos de fundo com mais camadas e efeitos */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-[1000px] h-[1000px] top-1/2 -right-40 bg-gradient-to-r from-[#37e067]/10 to-[#32c95d]/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute w-[800px] h-[800px] -bottom-20 -left-20 bg-gradient-to-r from-[#37e067]/10 to-[#32c95d]/5 rounded-full blur-[100px]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute w-[600px] h-[600px] top-0 left-1/2 bg-gradient-to-r from-[#37e067]/10 to-[#32c95d]/5 rounded-full blur-[80px]" 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          {/* Badge animada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#37e067]/10 to-[#32c95d]/10 border border-[#37e067]/20 backdrop-blur-sm mb-6"
          >
            <Play className="w-4 h-4 text-[#37e067] mr-2" />
            <span className="text-sm text-[#37e067] font-medium">Vídeo Demonstrativo</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Veja como o <span className="text-[#37e067] relative inline-block group">
              ZappFlow
              <div className="absolute -inset-1 bg-gradient-to-r from-[#37e067]/20 to-[#32c95d]/20 blur-lg rounded-lg -z-10 transition-all duration-300 group-hover:from-[#37e067]/30 group-hover:to-[#32c95d]/30"></div>
            </span> pode revolucionar suas vendas
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Descubra como nossa plataforma automatiza seu processo de vendas de ponta a ponta
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Container do vídeo com efeitos */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(55,224,103,0.15)] backdrop-blur-sm bg-gradient-to-r from-black/40 to-black/20 p-2">
            {/* Borda gradiente animada */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#37e067]/20 to-[#32c95d]/20 rounded-2xl" />
            
            {/* Container do iframe com proporção 16:9 */}
            <div className="relative rounded-xl overflow-hidden z-10">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://fast.wistia.net/embed/iframe/uddsnhr7kx"
                  title="ZappFlow Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Destaques abaixo do vídeo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 text-center"
          >
            <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#37e067]/5 to-[#32c95d]/5 backdrop-blur-sm border border-[#37e067]/10">
              <p className="text-[#37e067] font-medium">Interface Intuitiva</p>
            </div>
            <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#37e067]/5 to-[#32c95d]/5 backdrop-blur-sm border border-[#37e067]/10">
              <p className="text-[#37e067] font-medium">Automação Completa</p>
            </div>
            <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#37e067]/5 to-[#32c95d]/5 backdrop-blur-sm border border-[#37e067]/10 sm:col-span-1 col-span-2">
              <p className="text-[#37e067] font-medium">Resultados Reais</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;
