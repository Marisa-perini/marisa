# PROJECT_SPEC.md — Landing Page Marisa Perini (Psicóloga)

**Referência visual:** Aloe (Framer Template)
**Resolução base:** 1440 × 900 (desktop)
**Altura total da página de referência:** 8286px

---

## Paleta de Cores (HEX exato extraído do código fonte)

### Backgrounds
- `--color-bg-cream`        : `#FDF7EF`   (fundo principal — `rgb(253,247,239)`)
- `--color-bg-hero`         : `#FCF4E6`   (fundo do hero — `rgb(252,244,230)`)
- `--color-bg-dark`         : `#2F2F2F`   (fundo seções escuras — `rgb(47,47,47)`)
- `--color-bg-soft`         : `#E1E7E3`   (cards sage muito claro)
- `--color-bg-sage`         : `#BDCDC1`   (cards sage médio)

### Brand / Acentos
- `--color-primary`         : `#5FA573`   (verde principal CTA — `rgb(95,165,115)`)
- `--color-primary-deep`    : `#467B55`   (verde escuro hover)
- `--color-primary-darker`  : `#386A46`   (verde mais escuro)
- `--color-olive`           : `#5A5143`   (marrom-oliva — formas decorativas)

### Texto
- `--color-text`            : `#2F2F2F`   (texto principal)
- `--color-text-soft`       : `#2E2E2E`   (texto alternativo)
- `--color-text-muted`      : `#787878`   (texto secundário/legendas)
- `--color-text-on-dark`    : `#FFFFFF`   (texto sobre fundo escuro)
- `--color-black`           : `#000000`

---

## Tipografia (valores computados exatos do reference)

### Famílias
- `--font-display` : `'Gentium Plus', serif`   (todos os headings h1/h2/h3)
- `--font-body`    : `'Karla', sans-serif`     (todo texto corrido, nav, botões)

### Pesos
- Headings: `400` (regular)
- Nav / Botões: `500` (medium)
- Body: `400`

### Escala tipográfica (extraída via getComputedStyle)

| Elemento | font-size | line-height | letter-spacing | weight |
|---|---|---|---|---|
| H1 (hero)              | `90px`  | `99px`   | `-3.6px` | 400 |
| H2 (seção sobre cream) | `50px`  | `55px`   | `-2px`   | 400 |
| H2 (seção sobre dark)  | `46px`  | `50.6px` | `-1.84px`| 400 |
| H3 (card / depoimento) | `30px`  | `33px`   | `-1.2px` | 400 |
| Nav links              | `20px`  | `28px`   | `-0.8px` | 500 |
| Botão CTA              | `20px`  | `28px`   | `-0.8px` | 500 |
| Body (parágrafo)       | `18px`  | `28px`   | `-0.4px` | 400 |
| Small / legenda        | `14px`  | `22px`   | `0`      | 400 |

> **Regra:** sempre que escrever um heading, usar `font-display`. Sempre que escrever body, nav ou label, usar `font-body`.

---

## Espaçamento e Layout

### Container
- `--container-max-width`   : `1200px`
- `--container-padding-x`   : `120px`  (left/right do viewport 1440 = 1440-1200 ÷ 2)
- Em viewports menores, padding lateral reduz proporcionalmente.

### Padding vertical de seções
- `--section-padding-y-base`: `130px` (padrão para a maioria das seções)
- `--section-padding-y-hero`: `140px 0 20px`  (Hero — top maior, bottom curto)

### Padding interno do navbar
- `--nav-padding-y`         : `15px`
- `--nav-height`            : `82px`  (incluindo o pill button de 52px)
- Posição: `fixed` no topo (sem `top-0` — usar `top: 0` com fundo cream translúcido ou sólido)

### Gap padrão entre cards/itens
- `--gap-cards`             : `32px`
- `--gap-grid-large`        : `40px`
- `--gap-text-stack`        : `16px` (entre h3 e p dentro de cards)

---

## Componentes — Botões (CTA Pills)

### Primário (verde sólido)
- `padding`           : `12px 30px`
- `border-radius`     : `50px`  (pill total)
- `height`            : `52px`
- `background`        : `#5FA573`
- `color`             : `#FFFFFF`
- `font-family`       : `var(--font-body)` (Karla)
- `font-size`         : `20px`
- `font-weight`       : `500`
- `letter-spacing`    : `-0.8px`
- `cursor`            : `pointer`
- `transition`        : `background 200ms ease`
- `hover`             : `background: #467B55`

### Secundário (outline)
- Mesmo padding/radius/font do primário
- `background`        : `transparent`
- `color`             : `#2F2F2F`
- `border`            : `1px solid #2F2F2F`
- `hover`             : `background: rgba(47,47,47,0.05)`

### Botão sobre fundo escuro
- `background`        : `transparent`
- `color`             : `#FFFFFF`
- `border`            : `1px solid #FFFFFF`

---

## Componentes — Imagens / Cards

### Photo strip do hero (faixa de fotos horizontal)
- `height`            : `300px`
- `border-radius`     : `100px`   (radius extremo — visual orgânico)
- `object-fit`        : `cover`
- `width`             : variável (faixa contínua / strip)

### Cards de imagem nas grades
- `width`             : `288px`
- `height`            : varia entre `340px`, `380px`, `420px` (escalonamento orgânico)
- `border-radius`     : `10px`
- `object-fit`        : `cover`

### Cards de serviço (com imagem + texto)
- `border-radius`     : `20px`
- `padding interno`   : `24px`
- `background`        : `#E1E7E3` ou `#BDCDC1`

### Avatars (depoimentos / prova social)
- `width / height`    : `48px`
- `border-radius`     : `50%` (circular)
- `border`            : `2px solid #FFFFFF`

---

## Componentes — Navbar

- `position`          : `fixed`
- `top`               : `0`
- `width`             : `100%`
- `z-index`           : `1000`
- `padding`           : `15px 120px`  (vertical 15px, horizontal mesmo do container)
- `background`        : `#FCF4E6` (mesma cor do hero — efeito de fusão)
- Layout: `flex` com `space-between`
- Itens: `logo (esquerda) | nav links centro | CTA primário direita`

---

## Componentes — Seção Hero

- `background`        : `#FCF4E6`
- `padding`           : `140px 0 20px`
- `text-align`        : `center` para headline e subtítulo
- Headline (h1) com palavra final em verde (`--color-primary`) — destaque parcial
- Dois CTAs centralizados, gap `16px`
- Borda inferior: efeito **scalloped/wavy** (semicírculos recortados) com `clip-path` ou SVG mask

---

## Componentes — Seção Dark (Depoimentos / Manifesto)

- `background`        : `#2F2F2F`
- `color`             : `#FFFFFF`
- `padding`           : `130px 0`
- Headings em branco
- Imagens redondas/orgânicas mantêm seu radius

---

## Animações

| Elemento | Animação | Duração | Easing |
|---|---|---|---|
| Botões (hover bg) | color transition | 200ms | ease |
| Cards (hover) | translateY(-4px) + shadow | 250ms | ease-out |
| Reveal de seção | fade + translateY(20px) | 600ms | cubic-bezier(0.22, 1, 0.36, 1) |
| Nav links (hover) | color shift para `--color-primary` | 150ms | ease |
| Carrossel de depoimentos | slide horizontal | 400ms | ease-in-out |

Respeitar `prefers-reduced-motion: reduce` desabilitando transforms/translates.

---

## Z-Index Scale
- Base: `auto`
- Cards / Imagens sobrepostas: `10`
- Modais / Overlays: `100`
- Navbar fixo: `1000`
- Toast / Notification: `2000`
- Botão flutuante WhatsApp: `999`

---

## Breakpoints Responsivos

| Nome | Width | Ajustes principais |
|---|---|---|
| Desktop large | `≥1440px`  | Layout base (referência) |
| Desktop       | `1200–1439`| Container fluido, mantém 1200px |
| Tablet        | `768–1199` | h1 → `64px`, padding-x → `48px`, grid 4col → 2col |
| Mobile        | `375–767`  | h1 → `40px`, padding-x → `24px`, tudo single-col, padding-y seção → `80px` |
| Mobile small  | `<375`     | h1 → `36px`, padding-x → `16px` |

---

## Iconografia
- **Setas / chevrons**: SVG inline (Lucide ou custom). 24×24px viewBox.
- **Estrelas (rating)**: SVG fill #5FA573, 16×16px, gap 4px.
- **Social (Instagram, WhatsApp)**: SVG Simple Icons oficiais.
- **NUNCA usar emoji** como ícone de UI.

---

## Detalhes Visuais Especiais

### Borda scalloped do Hero
Implementar com SVG `path` ou `clip-path: polygon()` simulando semicírculos invertidos na base do hero. Cor do semicírculo igual ao fundo da próxima seção.

### Diagrama de 4 pétalas (seção "Natural Medicine Network")
4 quadrantes com `border-radius` assimétrico criando forma de pétala:
- `border-radius: 0 100% 0 100%` (top-right e bottom-left)
- Tamanho: ~200×200px cada pétala
- Cores alternadas: 2 verdes (`#5FA573`) e 2 olive (`#5A5143`)
- Linhas tracejadas conectando pétalas (decorativo)

### Photo strip orgânica
Linha contínua de fotos com `border-radius: 100px` cobrindo full-width do viewport. Imagens em `object-fit: cover`.

---

## Variáveis CSS — Bloco final pronto para colar em `main.css`

```css
:root {
  /* Cores */
  --color-bg-cream: #FDF7EF;
  --color-bg-hero: #FCF4E6;
  --color-bg-dark: #2F2F2F;
  --color-bg-soft: #E1E7E3;
  --color-bg-sage: #BDCDC1;
  --color-primary: #5FA573;
  --color-primary-deep: #467B55;
  --color-primary-darker: #386A46;
  --color-olive: #5A5143;
  --color-text: #2F2F2F;
  --color-text-muted: #787878;
  --color-text-on-dark: #FFFFFF;

  /* Tipografia */
  --font-display: 'Gentium Plus', Georgia, serif;
  --font-body: 'Karla', system-ui, -apple-system, sans-serif;

  --fs-h1: 90px;
  --lh-h1: 99px;
  --ls-h1: -3.6px;

  --fs-h2: 50px;
  --lh-h2: 55px;
  --ls-h2: -2px;

  --fs-h2-dark: 46px;
  --lh-h2-dark: 50.6px;
  --ls-h2-dark: -1.84px;

  --fs-h3: 30px;
  --lh-h3: 33px;
  --ls-h3: -1.2px;

  --fs-nav: 20px;
  --lh-nav: 28px;
  --ls-nav: -0.8px;

  --fs-body: 18px;
  --lh-body: 28px;
  --ls-body: -0.4px;

  --fs-small: 14px;
  --lh-small: 22px;

  /* Espaçamento */
  --container-max: 1200px;
  --container-px: 120px;
  --section-py: 130px;
  --hero-py-top: 140px;
  --hero-py-bottom: 20px;
  --nav-py: 15px;
  --nav-h: 82px;

  --gap-cards: 32px;
  --gap-grid: 40px;
  --gap-stack: 16px;

  /* Componentes */
  --btn-py: 12px;
  --btn-px: 30px;
  --btn-h: 52px;
  --btn-radius: 50px;

  --card-radius: 20px;
  --card-img-radius: 10px;
  --strip-img-radius: 100px;

  --avatar-size: 48px;

  /* Z-index */
  --z-card: 10;
  --z-modal: 100;
  --z-nav: 1000;
  --z-toast: 2000;

  /* Animação */
  --t-fast: 150ms;
  --t-base: 200ms;
  --t-slow: 400ms;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## Mapeamento das Seções da Referência → LP Marisa Perini

| # | Seção da referência (Aloe) | Seção da LP (Marisa) |
|---|---|---|
| 1 | Navbar fixo | Navbar fixo (Logo "Marisa Perini" + nav + CTA) |
| 2 | Hero "Prioritizing Your Health" | Hero — promessa para idosos 60+ |
| 3 | Photo strip horizontal | Photo strip (fotos do consultório/atendimento) |
| 4 | "Natural Medicine Network" 4 diferenciais | "Como posso te apoiar" — 4 diferenciais |
| 5 | Hero secundário com imagem de fundo + CTAs | Convite à primeira sessão (CTA reforço) |
| 6 | Testimonial dark com carrossel | Depoimentos (fundo escuro, carrossel) |
| 7 | "How We Can Help You" + serviços | "Modalidades de atendimento" (presencial, online, domicílio) |
| 8 | "Art of Natural Remedies" bento | "O caminho da TCC" — processo terapêutico |
| 9 | FAQ accordion + fotos | FAQ (com perguntas reais que pacientes fazem) |
| 10 | "Explore Our Healing Gallery" | Galeria (consultório, momentos de atendimento) |
| 11 | Manifesto sobre fundo dark | Manifesto sobre cuidado e envelhecimento |
| 12 | Footer com colunas | Footer (contatos, endereço, social, CRP) |

---

## Fontes — Carregamento

Adicionar no `<head>` do index.html:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400&family=Karla:wght@400;500;700&display=swap" rel="stylesheet">
```
