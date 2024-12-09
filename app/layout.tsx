import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MetaPixel from '@/components/MetaPixel';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZappFlow - Automatize suas vendas no WhatsApp',
  description: 'Automatize suas vendas no WhatsApp com o ZappFlow. A ferramenta completa para gestão e automação de atendimento.',
  icons: {
    icon: '/faviconzf.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <MetaPixel />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
