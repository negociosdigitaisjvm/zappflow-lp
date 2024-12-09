# ZappFlow - Landing Page

Landing page moderna e responsiva para o ZappFlow, uma plataforma de automação de vendas via WhatsApp.

## 🚀 Tecnologias Utilizadas

- Next.js 13+ (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn/ui
- Lucide Icons

## 📁 Estrutura do Projeto

```
ZappFlow-LP/
├── app/                    # Diretório principal do Next.js
│   ├── layout.tsx         # Layout principal com Meta Pixel
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── layout/           # Componentes de layout
│   │   ├── Header.tsx    # Navbar responsiva
│   │   ├── Hero.tsx      # Seção inicial
│   │   └── Footer.tsx    # Rodapé
│   ├── sections/         # Seções principais
│   │   ├── AutomationCTA.tsx
│   │   ├── Dashboard.tsx
│   │   ├── DemoVideo.tsx
│   │   ├── FAQ.tsx
│   │   ├── Pricing.tsx
│   │   └── Testimonials.tsx
│   ├── features/         # Componentes de recursos
│   │   ├── FeatureCards.tsx
│   │   └── ProductPreview.tsx
│   └── ui/              # Componentes de UI reutilizáveis
├── public/              # Arquivos estáticos
│   ├── images/         # Imagens do site
│   └── faviconzf.ico   # Favicon personalizado
└── utils/              # Utilitários
    └── motion.ts       # Configurações de animação
```

## 🎯 Principais Funcionalidades

### Navegação
- Navbar responsiva com menu mobile
- Rolagem suave para seções
- Links de navegação rápida

### Seções
1. **Hero**: Apresentação inicial com CTA principal
2. **Demo**: Vídeo demonstrativo com efeitos imersivos
3. **Automação**: Benefícios da automação
4. **Recursos**: Cards de funcionalidades
5. **Dashboard**: Preview da interface
6. **Depoimentos**: Carrossel de testimoniais
7. **Preços**: Planos e valores
8. **FAQ**: Perguntas frequentes

### UI/UX
- Animações suaves com Framer Motion
- Design responsivo para todos dispositivos
- Efeitos de hover e feedback visual
- Gradientes e blur effects modernos
- Loading otimizado de imagens e vídeos

### Analytics
- Meta Pixel do Facebook integrado
- Tracking de PageView configurado
- ID do Pixel: 459482113848753

## 🛠 Configuração e Instalação

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/negociosdigitaisjvm/zappflow-lp.git
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. Execute o ambiente de desenvolvimento:
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`


## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Manutenção

### Alterando o Conteúdo
- Textos e links podem ser editados diretamente nos componentes
- Imagens devem ser adicionadas em `/public/images`
- Novos componentes devem seguir a estrutura existente

### Performance
- Imagens são otimizadas pelo Next.js Image
- Vídeo usa loading="lazy" para carregamento otimizado
- Componentes usam animações com `viewport={{ once: true }}`

### SEO
- Meta tags configuradas em `layout.tsx`
- Estrutura HTML semântica
- Alt text em todas as imagens
- Favicon personalizado

## 📈 Analytics

O Meta Pixel está configurado para:
- Tracking de PageView
- Monitoramento de eventos de conversão
- Retargeting de visitantes

Para adicionar novos eventos:
\`\`\`javascript
fbq('track', 'NomeDoEvento', {
  // parâmetros do evento
});
\`\`\`

## 🚀 Deploy

O site está hospedado na Vercel com:
- CI/CD automático
- HTTPS habilitado
- Otimizações de performance
- Preview de branches

## 📝 Notas Importantes

1. Mantenha o arquivo `.env` seguro e fora do controle de versão
2. Teste em diferentes navegadores após alterações
3. Verifique o Meta Pixel após modificações
4. Mantenha as dependências atualizadas

## 🤝 Suporte

Para suporte ou dúvidas, entre em contato através de:
- Email: [contato@zappflow.com.br](mailto:contato@zappflow.app)
- WhatsApp: [Link direto](https://api.whatsapp.com/send?phone=553799477799&text=Ol%C3%A1!%20Tenho%20interesse%20e%20gostaria%20de%20falar%20com%20um%20especialista.%20Pode%20me%20ajudar%3F%20%F0%9F%98%89)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  <br>
  <img src="https://ibb.co/2nQM2h6" alt="Logo ZappFlow" width="150">
  <br>
  <br>
  Feito com ❤️ por <a href="https://www.instagram.com/marraecom">Guilherme Marra</a>
  <br>
  TMND 
  <br>
  2024 ZappFlow. Todos os direitos reservados.
</p>
