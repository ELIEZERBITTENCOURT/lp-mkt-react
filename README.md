# devcraft — Landing Page

> Consultoria de desenvolvimento premium. Dark mode tech, glassmorphism e design minimalista em React puro.

---


## 📸 Preview

<p align="center">
  <img src="./assets/preview.png" width="900" />
</p>


## Visão Geral

Landing page single-page para serviço de consultoria de desenvolvimento de software. Construída em React com CSS puro, focada em performance, elegância visual e conversão.

**Stack:** React · CSS · Google Fonts · Lucide

---

## ✦ Design System

### Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#080c10` | Background principal |
| `--bg2` | `#0d1117` | Background secundário |
| `--surface` | `rgba(255,255,255,0.04)` | Cards e superfícies |
| `--border` | `rgba(255,255,255,0.08)` | Bordas sutis |
| `--accent` | `#4fffb0` | Verde neon — CTAs, destaques |
| `--accent2` | `#4fa3ff` | Azul — tags, gradientes |
| `--text` | `#f0f4f8` | Texto principal |
| `--muted` | `rgba(240,244,248,0.45)` | Texto secundário |

### Tipografia

| Família | Peso | Uso |
|---|---|---|
| **Syne** | 400 · 600 · 700 · 800 | Headings, navegação, botões |
| **DM Mono** | 300 · 400 (italic) | Labels, código, body técnico |

### Efeitos Visuais

- **Glow suave** — `box-shadow: 0 0 40px rgba(79,255,176,0.12)`
- **Glow forte** — `box-shadow: 0 0 80px rgba(79,255,176,0.2)`
- **Glassmorphism** — `backdrop-filter: blur(12-20px)` + `rgba` com opacidade baixa
- **Gradientes radiais** — atmosfera no hero e na seção CTA

---

## Componentes

```
App
├── Nav               # Navegação fixa com blur + estado de scroll
├── Hero              # Full-height, headline, métricas, CTAs
├── Marquee           # Faixa animada com tech stack
├── Services          # Grid 3×2 de serviços com hover glow interativo
├── ServiceCard       # Card com rastreamento de mouse via CSS custom props
├── Process           # 4 etapas com linha decorativa e stagger animation
├── Testimonials      # Grid assimétrico com depoimentos de clientes
├── Pricing           # 3 planos com destaque glassmorphism no featured
├── CTA               # Seção final de conversão com glow central
└── Footer            # Links + copyright
```

### `Nav`
Navbar fixa com `backdrop-filter: blur(20px)`. Detecta scroll via `useEffect` e adiciona sombra sutil ao atingir 40px. Links ocultos em mobile (< 900px).

### `Hero`
Seção full-viewport com badge de disponibilidade, headline com gradiente de texto em `<em>`, subtítulo, par de botões e trio de métricas com animações `fadeUp` em cascata (`animation-delay: 0.1s` a `0.4s`).

### `ServiceCard`
Rastreia posição do mouse via `onMouseMove` e injeta variáveis CSS `--mx` / `--my` para criar um efeito de glow radial que segue o cursor, implementado inteiramente em CSS com `::before`.

### `Process`
Quatro etapas com `transitionDelay` calculado por índice (`i * 0.1s`) para uma entrada escalonada ao entrar na viewport.

### `useReveal` (hook)
Custom hook que usa `IntersectionObserver` para adicionar a classe `.visible` a elementos `.reveal` quando entram na viewport, ativando a transição `opacity + translateY`.

---

## Animações

| Nome | Tipo | Duração | Descrição |
|---|---|---|---|
| `fadeUp` | CSS `@keyframes` | 0.6s | Entrada inicial do hero (opacity + Y) |
| `marquee` | CSS `@keyframes` | 25s loop | Faixa de tecnologias em scroll contínuo |
| `.reveal` | Intersection Observer | 0.7s | Fade-in de seções ao fazer scroll |
| Hover cards | CSS transition | 0.3s | Background + glow nos service cards |
| Hover buttons | CSS transition | 0.25s | `translateY(-2px)` + box-shadow |

---

## Estrutura de Arquivos

```
.
└── App.jsx                 # Componente raiz       
    ├── styles              # CSS completo
    ├── data[]              # Dados dos serviços, plans, process, items e testimonials
    ├── useReveal()         # Hook de animação por scroll
    └── components          # Nav, Hero, Marquee, Services, Process,
                            # Testimonials, Pricing, CTA, Footer
```

---

## Como Usar

### Pré-requisitos

- Node.js 18+
- React 18+
- Projeto configurado com Vite

## Responsividade

| Breakpoint | Comportamento |
|---|---|
| `> 900px` | Layout completo, nav com links visíveis |
| `≤ 900px` | Nav links ocultos, padding reduzido, grids em coluna única |
| `≤ 600px` | Process steps em coluna única, hero metrics comprimidas |

Tipografia responsiva com `clamp()`:
```css
font-size: clamp(3rem, 8vw, 7.5rem);   /* Hero title */
font-size: clamp(2.2rem, 5vw, 4rem);   /* Section titles */
font-size: clamp(1rem, 2vw, 1.2rem);   /* Hero subtitle */
```

---

## Customização

### Trocar cores do tema

Edite as variáveis CSS no objeto `styles`:

```css
:root {
  --accent: #4fffb0;   /* Cor primária — altere para sua brand */
  --accent2: #4fa3ff;  /* Cor secundária */
  --bg: #080c10;       /* Background */
}
```

### Editar conteúdo das seções

Todos os dados estão em data no arquivo `mockData.js`, facilitando a manutenção:

```js
const services = [ /* seus serviços */ ];
const process   = [ /* suas etapas */ ];
const testimonials = [ /* seus depoimentos */ ];
const plans     = [ /* seus planos */ ];
```

## SEO

Adicionado as seguintes meta tags no `index.html` no projeto:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Consultoria de desenvolvimento de software premium. Arquitetura, Full-Stack, DevOps e mentoria técnica para times de alto desempenho." />
  <meta name="keywords" content="consultoria dev, engenharia de software, arquitetura, React, Node.js, TypeScript" />
  <meta property="og:title" content="devcraft — Consultoria de Desenvolvimento Premium" />
  <meta property="og:description" content="Código que realmente funciona. Consultoria técnica para times sérios." />
  <meta property="og:type" content="website" />
  <title>devcraft — Consultoria de Desenvolvimento Premium</title>
</head>
```

---

## Performance

- **Zero dependências CSS** — nenhum Tailwind, bundle mínimo
- **Fontes com `display=swap`** — sem bloqueio de renderização
- **`IntersectionObserver`** — animações ativadas apenas quando visíveis, sem scroll listeners contínuos
- **CSS `will-change` implícito** — transitions declaradas via `transition` property evitam repaints desnecessários
- **Imagens** — nenhuma imagem externa
- **Icons** - ícones Lucide-React
---

## Licença

MIT — livre para uso pessoal e comercial.

---

<div align="center">
  <sub>Feito com precisão · devcraft © 2026</sub>
</div>