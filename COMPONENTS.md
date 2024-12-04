# Documentação dos Componentes

Este documento detalha cada componente principal da landing page do ZappFlow.

## 📚 Índice

1. [Layout](#layout)
2. [Seções](#seções)
3. [Features](#features)
4. [UI Components](#ui-components)

## Layout

### Header.tsx
- **Propósito**: Barra de navegação principal
- **Estado**: `isMenuOpen` para controle do menu mobile
- **Responsividade**: Muda para menu hamburguer em telas < 768px
- **Animações**: Transições suaves no hover e scroll

### Hero.tsx
- **Propósito**: Seção principal da landing page
- **Elementos**: 
  - Título principal com destaque
  - Subtítulo
  - Botões de CTA
  - Estatísticas animadas
- **Animações**: Fade-in e floating elements

## Seções

### FAQ.tsx
- **Propósito**: Lista de perguntas frequentes
- **Estado**: `openIndex` controla qual pergunta está aberta
- **Componentes**:
  - Acordeão animado
  - Ícones personalizados
  - CTA section
- **Animações**:
  - Entrada suave dos elementos
  - Transição do acordeão
  - Gradientes animados no fundo

### AutomationCTA.tsx
- **Propósito**: Seção de chamada para automação
- **Features**:
  - Lista de benefícios
  - Simulação de chat
  - Botão de ação
- **Animações**: Simulação de digitação

### Dashboard.tsx
- **Propósito**: Demonstração do produto
- **Elementos**:
  - Preview do dashboard
  - Cards de recursos
  - Estatísticas
- **Efeitos**: Glassmorphism e hover effects

### Pricing.tsx
- **Propósito**: Planos e preços
- **Estado**: `billingCycle` para alternar entre mensal/anual
- **Componentes**:
  - Cards de preços
  - Toggle de período
  - Badges de desconto

## Features

### FeatureCards.tsx
- **Propósito**: Mostrar principais funcionalidades
- **Layout**: Grid responsivo de cards
- **Efeitos**:
  - Hover scale
  - Glow effect
  - Transições suaves

### ProductPreview.tsx
- **Propósito**: Preview do produto em uso
- **Elementos**:
  - Interface simulada
  - Lista de recursos
  - Demonstração visual
- **Animações**: Scroll reveal

## UI Components

### Button.tsx
- **Variantes**:
  - Primary (verde)
  - Outline
  - Ghost
- **Props**:
  - size: "sm" | "md" | "lg"
  - variant: "default" | "outline" | "ghost"
  - className: string
- **Estados**: hover, focus, active

### Card.tsx
- **Variantes**:
  - Default
  - Pricing
  - Feature
- **Props**:
  - variant: "default" | "pricing" | "feature"
  - className: string
  - children: React.ReactNode

## 🎨 Estilos Comuns

```tsx
// Gradientes
const gradientClasses = "bg-gradient-to-r from-[#37e067] to-[#32c95d]";

// Efeito Glassmorphism
const glassEffect = "bg-black/30 backdrop-blur-sm border border-white/10";

// Animações
const hoverScale = "hover:scale-105 transition-all duration-300";

// Sombras
const glowShadow = "shadow-lg shadow-[#37e067]/20 hover:shadow-[#37e067]/40";
```

## 🔄 Estados Globais

- Menu mobile aberto/fechado
- Seção atual da navegação
- Ciclo de faturamento (mensal/anual)
- FAQ pergunta aberta

## 📱 Breakpoints Padrão

```tsx
// Mobile First
const base = "w-full p-4";
const sm = "sm:w-auto sm:p-6";
const md = "md:grid-cols-2 md:gap-8";
const lg = "lg:grid-cols-3 lg:gap-12";
```

## 🎭 Animações Reutilizáveis

```tsx
// Fade In Up
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Scale On Hover
const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 }
};
```

## 🛠️ Dicas de Manutenção

1. **Adicionando Novas Features**:
   - Crie um novo componente na pasta adequada
   - Siga o padrão de comentários existente
   - Use os estilos e animações padrão

2. **Modificando Estilos**:
   - Mantenha a consistência com as cores principais
   - Use as classes utilitárias do Tailwind
   - Teste em todos os breakpoints

3. **Otimização**:
   - Use Image do Next.js para imagens
   - Lazy load para componentes pesados
   - Minimize o uso de estados globais

4. **Acessibilidade**:
   - Mantenha bom contraste
   - Use tags semânticas
   - Adicione aria-labels quando necessário
