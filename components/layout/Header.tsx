'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Recursos', href: '#features' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Preços', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="relative w-32 h-8">
              <Image
                src="/logozappflow.png"
                alt="ZappFlow Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-300 hover:text-[#37e067] transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <Button 
                variant="outline"
                size="lg"
                className="border-[#37e067] text-[#37e067] hover:bg-[#37e067] hover:text-black transition-all hover:scale-105 text-base"
                onClick={() => window.open('https://web.zappflow.app/', '_blank')}
              >
                Login
              </Button>
              <Button 
                className="bg-[#37e067] text-black hover:bg-[#32c95d] transition-all duration-300"
                onClick={(e) => scrollToSection(e as any, '#pricing')}
              >
                COMECE AGORA
              </Button>
            </div>
          </nav>

          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block px-3 py-2 text-gray-300 hover:text-[#37e067] transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-[#37e067] text-[#37e067] hover:bg-[#37e067] hover:text-black transition-all hover:scale-105 text-base w-full"
                    onClick={() => window.open('https://web.zappflow.app/', '_blank')}
                  >
                    Login
                  </Button>
                  <Button 
                    className="w-full bg-[#37e067] text-black hover:bg-[#32c95d] transition-all duration-300"
                    onClick={(e) => scrollToSection(e as any, '#pricing')}
                  >
                    COMECE AGORA
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;