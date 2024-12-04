# ZappFlow Landing Page

Este é o projeto da landing page do ZappFlow, construído com Next.js, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Estrutura do Projeto

```
ZappFlow LP/
├── app/                    # Configurações principais do Next.js
│   ├── globals.css        # Estilos globais e configurações do Tailwind
│   ├── layout.tsx         # Layout principal da aplicação
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── layout/           # Componentes de layout (Header, Footer, etc)
│   ├── sections/         # Seções principais da landing page
│   ├── features/         # Componentes de funcionalidades
│   └── ui/              # Componentes de UI reutilizáveis
├── public/               # Arquivos estáticos (imagens, etc)
└── styles/              # Estilos adicionais

## 🎨 Padrões de Design

### Cores
- Principal: #37e067 (Verde)
- Secundária: #32c95d (Verde escuro)
- Fundo: #000000 (Preto)
- Texto: #FFFFFF (Branco)
- Texto secundário: #9CA3AF (Cinza)

### Espaçamento
- Mobile: 16px (1rem)
- Tablet: 24px (1.5rem)
- Desktop: 32px (2rem)

### Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## 🛠️ Como Fazer Alterações

### 1. Editando Seções

Cada seção da landing page está em um componente separado em `components/sections/`. Para editar uma seção:

1. Localize o arquivo da seção em `components/sections/`
2. Os componentes estão bem comentados para facilitar a edição
3. Siga os padrões de comentários existentes ao adicionar novo código

### 2. Alterando Estilos

- Estilos globais: `app/globals.css`
- Estilos específicos: Dentro de cada componente usando Tailwind CSS

### 3. Adicionando Novas Seções

1. Crie um novo arquivo em `components/sections/`
2. Use o padrão de comentários existente
3. Importe e adicione a seção em `app/page.tsx`

### 4. Modificando Animações

As animações são feitas com Framer Motion. Exemplo de uso:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo animado
</motion.div>
```

### 5. Alterando Textos

Os textos estão diretamente nos componentes para facilitar a edição. Procure pelo texto que deseja alterar no arquivo do componente correspondente.

## 📱 Responsividade

O site usa classes responsivas do Tailwind:
- `sm:` para telas >= 640px
- `md:` para telas >= 768px
- `lg:` para telas >= 1024px

Exemplo:
```tsx
<div className="text-base sm:text-lg lg:text-xl">
  Texto responsivo
</div>
```

## 🔧 Manutenção

### Performance
- Use imagens otimizadas
- Mantenha as animações leves
- Evite aninhamento excessivo de elementos

### Boas Práticas
- Mantenha os comentários atualizados
- Use nomes descritivos para classes e variáveis
- Siga o padrão de organização existente

## 📦 Dependências Principais

- Next.js 13+
- React 18+
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Shadcn/ui

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Faça commit das alterações
4. Faça push para a branch
5. Abra um Pull Request

## 📝 Licença

Este projeto é proprietário e confidencial.
