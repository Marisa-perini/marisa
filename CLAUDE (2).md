# Instruções do Projeto — Landing Page

## Skills Obrigatórias

Antes de criar qualquer interface, componente, layout ou texto, leia e aplique
as diretrizes nas seguintes skills:
~/.claude/skills/copywriting-pro/SKILL.md   → Todo conteúdo textual
~/.claude/skills/frontend-design/SKILL.md   → Direção criativa e estética
~/.claude/skills/ui-ux-pro-max/SKILL.md     → Design system e padrões de UX

Nunca comece a implementar copy, UI ou design sem consultar os arquivos acima primeiro.

---

## Responsabilidade dos Arquivos

### `CLAUDE.md` — INTOCÁVEL
- Define processo de trabalho e regras de execução
- Vale para qualquer projeto, qualquer nicho, qualquer cliente
- NUNCA deve ser editado, sob nenhuma circunstância
- Não contém cores, fontes, estilos ou qualquer detalhe específico de projeto

### `PROJECT_SPEC.md` — Criado por você no início de cada projeto
- Criado do zero para cada novo projeto
- Contém tudo que é específico da referência: paleta, fontes, seções,
  espaçamentos, animações, padrões de layout
- É a fonte de verdade visual do projeto
- DEVE conter valores numéricos exatos — nunca descrições vagas como
  "espaçamento generoso" ou "fonte grande". Exemplo correto:
  padding-section: 120px | font-size-h1: 64px | gap-cards: 32px

### `CONTENT.md` — Criado por você no início de cada projeto
- Criado antes de qualquer implementação de design
- Contém todo o conteúdo textual: headlines, serviços, depoimentos, contatos
- É a fonte de verdade de conteúdo do projeto
- Nenhum texto pode ser inventado fora do CONTENT.md

### `reference.html` — Criado por você no início de cada projeto
- Criado com o código fonte HTML/CSS/JS fornecido pelo usuário
- Salvo na pasta `reference/`
- Usado em conjunto com o screenshot full-size para extração de valores exatos
- Nunca deve ser alterado após criado — é a fonte de verdade técnica da referência

---

## Ordem de Execução Obrigatória

### Etapa 0 — Preparação do Ambiente
1. Crie as pastas `screenshots/reference/` e `reference/`
2. Avise o usuário que as pastas estão prontas
3. **PAUSA OBRIGATÓRIA** — aguarde o usuário colocar:
   - O screenshot full-size da página de referência em `screenshots/reference/`
   - O código fonte HTML/CSS/JS da referência na pasta `reference/`
4. Aguarde a confirmação do usuário para prosseguir
5. Crie o `reference/reference.html` com o código fonte recebido em anexo.
6. Leia o screenshot + `reference.html`, extraia os valores exatos e crie o `PROJECT_SPEC.md`

### Etapa 1 — Conteúdo
- Leia `copywriting-pro/SKILL.md`
- Crie o `CONTENT.md` completo com todo o conteúdo textual do projeto
- Valide o CONTENT.md com o checklist de copy antes de avançar

### Etapa 2 — Design System
- Leia `frontend-design/SKILL.md` e `ui-ux-pro-max/SKILL.md`
- Crie o design system base: variáveis CSS, tipografia, cores e espaçamentos
- Todos os valores devem vir do `PROJECT_SPEC.md`

### Etapa 3 — Implementação
- Implemente cada seção com o conteúdo do `CONTENT.md`
- Mantenha o screenshot de referência da seção aberto durante toda a implementação
- Ao concluir cada seção, execute obrigatoriamente o Loop de Screenshot (ver abaixo)
- Só avance para a próxima seção após o loop estar zerado

### Etapa 4 — Integração e QA
- Integre todas as seções
- Execute o Relatório de Comparação Final
- Corrija todas as diferenças
- Entregue somente quando o checklist final estiver 100% ✅

**Regra crítica: nunca comece o design antes do `CONTENT.md` estar pronto e validado.**

---

## Padrão de Código

- **HTML**: Semântico (HTML5) — use `<section>`, `<article>`, `<header>`, `<main>`, `<footer>` corretamente
- **CSS**: Variáveis CSS obrigatórias (`--color-*`, `--font-*`, `--spacing-*`), mobile-first
- **JS**: Vanilla por padrão; React apenas quando o projeto exigir reatividade complexa
- **Nenhum framework CSS genérico** (sem Bootstrap, Bulma etc.) — escreva o CSS próprio do projeto

---

## Design — Fidelidade Visual à Referência é OBRIGATÓRIA

O objetivo é replicar o design da referência com precisão máxima.
"Inspirado em" NÃO é aceito. "Parecido com" NÃO é aceito.
O resultado deve ser visualmente idêntico à referência, trocando apenas o conteúdo.

### Fonte de Referência Visual
Você receberá dois arquivos do usuário:
- **Screenshot full-size** da página de referência → mostra como o design parece visualmente
- **Código fonte HTML/CSS/JS** da referência → confirma os valores exatos sem estimativa visual
- **Vídeo das animações** (quando disponível) → usado para reconstruir animações complexas

O código fonte tem prioridade para valores numéricos.
O screenshot tem prioridade para percepção visual e estados de hover.
O vídeo é a fonte de verdade para timing e sequência de animações.

### Regras de Replicação Visual

- Mantenha o screenshot de referência da seção aberto durante toda a implementação
- Extraia valores de espaçamento, fonte, border-radius, gap e padding diretamente do código fonte
- Cores em hex exato extraído do código fonte — nunca aproximadas
- Layout de grid (colunas, largura de cards) deve replicar a referência
- Hierarquia tipográfica deve replicar tamanho, peso e espaçamento da referência
- Animações presentes na referência são obrigatórias — não opcionais
- Se o código fonte da animação estiver no `reference.html`, extraia diretamente
- Se não estiver, analise o vídeo fornecido e reconstrua com base na análise visual
- Diferenças visuais são bugs — corrija, não justifique

### Loop de Screenshot — Obrigatório por Seção

Após implementar cada seção, execute obrigatoriamente:

1. Tire screenshot da seção implementada
2. Compare lado a lado com o screenshot de referência correspondente
3. Preencha o checklist numérico abaixo
4. Corrija TODOS os itens com ❌
5. Tire novo screenshot e repita o ciclo
6. **Só avance para a próxima seção quando todos os itens estiverem ✅**

Checklist numérico por seção:
- Cor de fundo (hex): [atual] vs [referência] → [✅ ou ❌]
- Cor do texto principal (hex): [atual] vs [referência] → [✅ ou ❌]
- Font-family heading: [atual] vs [referência] → [✅ ou ❌]
- Font-size heading (px): [atual] vs [referência] → [✅ ou ❌]
- Font-weight heading: [atual] vs [referência] → [✅ ou ❌]
- Letter-spacing (px ou em): [atual] vs [referência] → [✅ ou ❌]
- Font-family body: [atual] vs [referência] → [✅ ou ❌]
- Font-size body (px): [atual] vs [referência] → [✅ ou ❌]
- Padding interno da seção (px): [atual] vs [referência] → [✅ ou ❌]
- Gap entre cards/itens (px): [atual] vs [referência] → [✅ ou ❌]
- Border-radius de cards/botões (px): [atual] vs [referência] → [✅ ou ❌]
- Número de colunas do grid: [atual] vs [referência] → [✅ ou ❌]
- Largura máxima do container (px): [atual] vs [referência] → [✅ ou ❌]
- Cor dos botões CTA (hex): [atual] vs [referência] → [✅ ou ❌]
- Animações presentes: [atual] vs [referência] → [✅ ou ❌]
- Hover states: [atual] vs [referência] → [✅ ou ❌]

### O que NUNCA fazer no Design

- Tomar decisões estéticas próprias que não estejam na referência
- Usar cores aproximadas — apenas hex exato extraído do código fonte
- Usar espaçamentos estimados — apenas valores extraídos do código fonte
- Entregar uma seção sem completar o Loop de Screenshot
- Pular etapas de screenshot e comparação
- Usar texto que não esteja no `CONTENT.md`
- Editar o `CLAUDE.md` por qualquer motivo

---

## Copy

- Todo texto vem exclusivamente do `CONTENT.md` — nunca inventado durante o design
- O `CONTENT.md` é criado com base na skill `copywriting-pro/SKILL.md`
- **Nunca usar Lorem Ipsum** ou qualquer placeholder de texto
- Headlines nunca podem conter o nome da empresa
- Diferenciais nunca podem ser "qualidade", "excelência" ou "comprometimento"
- Todo texto escrito na segunda pessoa ("você")
- Serviços descritos por benefício, nunca por processo

---

## Estrutura de Arquivos

```
src/
  assets/       → imagens, fontes locais, ícones SVG
  css/          → estilos (main.css + módulos por seção)
  js/           → scripts (main.js + módulos)
  components/   → partes reutilizáveis (hero, navbar, footer…)
public/           → arquivos estáticos prontos para deploy
reference/
  reference.html        → código fonte HTML/CSS/JS da referência
  [video-animacao.mp4]  → vídeo de animações (quando fornecido pelo usuário)
screenshots/
  reference/
    reference-full.png      → screenshot full-size fornecido pelo usuário
    reference-navbar.png    → recorte da navbar
    reference-hero.png      → recorte do hero
    reference-mid.png       → recorte das seções intermediárias
    reference-footer.png    → recorte do footer
  progress/
    01-navbar.png
    02-hero.png
    03-[nome-da-secao].png
    04-[nome-da-secao].png
    05-full-page.png
```

---

## Screenshot Workflow — Visual Validation

### Fresh Start em Cada Nova Tarefa
No início de cada novo projeto, limpe a pasta de progresso:

```bash
find screenshots/progress -type f -name "*.png" -delete && echo "Screenshots cleared."
```

### Quando Tirar Screenshots
- Após implementar ou atualizar a Navbar
- Após implementar ou atualizar o Hero
- Após adicionar ou modificar qualquer seção
- Após qualquer correção que afete o visual
- Na entrega final de cada seção ou da página completa

### Como Tirar Screenshots

```bash
npx playwright screenshot http://127.0.0.1:5500/index.html screenshots/progress/[section-name].png --viewport-size="1440,900" --full-page
```

Se o Playwright não estiver instalado:

```bash
npx playwright install chromium
```

### Convenção de Nomenclatura
```
screenshots/progress/01-navbar.png
screenshots/progress/02-hero.png
screenshots/progress/03-[nome-da-secao].png
screenshots/progress/04-[nome-da-secao].png
screenshots/progress/05-full-page.png
```

### Recortes da Referência por Seção
Recorte o screenshot full-size em partes para ter a referência isolada de cada seção:

```bash
node -e "
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('file://\$(pwd)/reference/reference.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/reference/reference-full.png', fullPage: true });
  await page.screenshot({ path: 'screenshots/reference/reference-viewport.png', fullPage: false });
  await browser.close();
  console.log('Reference captured!');
})();
"
```

### Relatório de Comparação Final

COPY:
Headline sem nome da empresa: [✅ ou ❌]
Serviços orientados a benefício: [✅ ou ❌]
Depoimentos com resultado concreto: [✅ ou ❌]
FAQ com objeções reais: [✅ ou ❌]
CTA com verbo forte: [✅ ou ❌]

TYPOGRAPHY:
Heading font: [atual] vs [referência] → [✅ ou ❌]
Heading weight: [atual] vs [referência] → [✅ ou ❌]
Heading size (px): [atual] vs [referência] → [✅ ou ❌]
Letter spacing: [atual] vs [referência] → [✅ ou ❌]
Body font: [atual] vs [referência] → [✅ ou ❌]
Body size (px): [atual] vs [referência] → [✅ ou ❌]
Label style: [atual] vs [referência] → [✅ ou ❌]
Button font: [atual] vs [referência] → [✅ ou ❌]

LAYOUT:
Espaçamento de seções (px): [atual] vs [referência] → [✅ ou ❌]
Grid de cards (colunas): [atual] vs [referência] → [✅ ou ❌]
Largura máxima container (px): [atual] vs [referência] → [✅ ou ❌]
Padding interno seções (px): [atual] vs [referência] → [✅ ou ❌]
Gap entre elementos (px): [atual] vs [referência] → [✅ ou ❌]
Responsivo mobile: [✅ ou ❌]

VISUAL:
Paleta de cores (hex exato): [✅ ou ❌]
Border-radius cards (px): [atual] vs [referência] → [✅ ou ❌]
Animações: [✅ ou ❌]
Hover states: [✅ ou ❌]

LINKS:
Todos os CTAs linkados corretamente: [✅ ou ❌]
Redes sociais no footer: [✅ ou ❌]
Botão flutuante WhatsApp: [✅ ou ❌]

PRÓXIMOS AJUSTES: [lista com valores exatos do que precisa corrigir]

---

## Todo Workflow — Task Tracking

### Todo List Padrão

- [ ] Ler ~/.claude/skills/copywriting-pro/SKILL.md
- [ ] Ler ~/.claude/skills/frontend-design/SKILL.md
- [ ] Ler ~/.claude/skills/ui-ux-pro-max/SKILL.md
- [ ] Ler CLAUDE.md
- [ ] Criar pastas `screenshots/reference/` e `reference/` e avisar o usuário
- [ ] **AGUARDAR** o usuário colocar o screenshot, código fonte e vídeo (se houver) nas pastas
- [ ] **AGUARDAR** confirmação do usuário para prosseguir
- [ ] Criar `reference/reference.html` com o código fonte recebido
- [ ] Extrair valores exatos do screenshot + reference.html
- [ ] Criar PROJECT_SPEC.md com valores numéricos exatos
- [ ] Criar CONTENT.md completo com base na skill de copywriting
- [ ] Validar CONTENT.md (checklist de copy)
- [ ] Criar index.html — estrutura completa baseada no CONTENT.md
- [ ] Criar design system base (main.css + variáveis com px exatos da referência)
- [ ] Implementar seções com conteúdo do CONTENT.md
- [ ] Loop de Screenshot — Navbar: tirar print, comparar, corrigir, repetir até ✅
- [ ] Loop de Screenshot — Hero: tirar print, comparar, corrigir, repetir até ✅
- [ ] Loop de Screenshot — Seções intermediárias: tirar print, comparar, corrigir, repetir até ✅
- [ ] Loop de Screenshot — Footer: tirar print, comparar, corrigir, repetir até ✅
- [ ] Relatório de Comparação Final preenchido e zerado
- [ ] Screenshot final — resultado visualmente idêntico à referência

### Regras
- Marque cada tarefa como concluída [x] antes de passar para a próxima
- NUNCA pule as etapas de Loop de Screenshot
- NUNCA pule a validação do CONTENT.md
- NUNCA avance sem a confirmação do usuário nas pausas obrigatórias
- Diferenças visuais são bugs — corrija até zerar o checklist

---

## Checklist antes de entregar

- [ ] Skills copywriting-pro, frontend-design e ui-ux-pro-max aplicadas
- [ ] Pastas criadas e arquivos de referência recebidos do usuário
- [ ] `reference/reference.html` criado
- [ ] `PROJECT_SPEC.md` criado com valores numéricos exatos extraídos do screenshot + código fonte
- [ ] `CONTENT.md` criado e validado
- [ ] Todo texto vem do CONTENT.md — nenhum texto inventado durante o design
- [ ] Design visualmente idêntico à referência — não "parecido", idêntico
- [ ] Fonte da referência carregada e registrada no PROJECT_SPEC.md
- [ ] Animações implementadas conforme a referência (via código fonte ou vídeo)
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Variáveis CSS com valores exatos extraídos do código fonte da referência
- [ ] HTML semântico
- [ ] Nenhum Lorem Ipsum ou texto placeholder
- [ ] Todos os links (CTA, WhatsApp, Instagram) verificados
- [ ] Loop de Screenshot de cada seção concluído e zerado
- [ ] Screenshot final comparado com a referência e aprovado
