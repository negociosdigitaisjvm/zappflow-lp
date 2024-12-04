import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-8 md:mb-0">
            <Image
              src="/logozappflow.png"
              alt="ZappFlow Logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <p className="text-gray-400">&copy; {new Date().getFullYear()} ZappFlow. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-[#37e067] transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#37e067] transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#37e067] transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
