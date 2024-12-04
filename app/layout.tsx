import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZappFlow - Automatize seu WhatsApp Business',
  description: 'Automatize seu atendimento no WhatsApp e aumente suas vendas com nossa plataforma inteligente.',
  icons: {
    icon: '/uploads/logozappflow',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
