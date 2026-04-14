

## Plano de Implementação — Landing Page Psicóloga Dhiu

### Dados coletados
- **CRP:** 07/41202
- **WhatsApp:** (53) 99113-7734
- **Link WhatsApp:** `https://wa.me/5553991137734`

### O que será construído

Uma landing page single-page com 7 seções, paleta terrosa-quente com verde-sálvia, tipografia Playfair Display + Inter, animações suaves e foco em conversão via WhatsApp.

### Arquivos a criar/editar

1. **`src/index.css`** — Paleta de cores customizada (off-white #FAF7F2, terracota #A0674B, verde-sálvia #7A8B6F, marrom #3D2B1F, bege #E8DDD3), importação das fontes Playfair Display e Inter via Google Fonts

2. **`src/pages/Index.tsx`** — Página principal com todas as seções:
   - **Hero** — Frase poética de impacto, subtítulo com CRP, botão WhatsApp terracota, placeholder de foto
   - **Quem Sou** — Apresentação com diferencial (psicologia + cultura + negritude + escrita), placeholder de foto
   - **Serviços** — 4 cards elegantes (Clínico, Avaliação Psicológica, Avaliação Neuropsicológica, Palestras) com botão WhatsApp em cada
   - **Como Funciona** — Destaque online, presencial sob marcação, passo a passo (Contato → Conversa → Agendamento)
   - **Seção Poética** — Trecho de Luedji Luna em fundo verde-sálvia, itálico serifado
   - **Para Quem** — Texto direcionado ao público-alvo
   - **CTA Final + Rodapé** — Frase de fechamento, botão WhatsApp, links Instagram/Medium, CRP

3. **`src/components/WhatsAppFloat.tsx`** — Botão flutuante de WhatsApp (canto inferior direito, sempre visível)

4. **`index.html`** — Adicionar Google Fonts (Playfair Display + Inter)

5. **`tailwind.config.ts`** — Estender com cores customizadas e fontes

### Tom de voz dos textos
Afetivo, firme, elegante, sensível. Inspirado no seu Medium e Instagram. Frases como:
- *"Existe cuidado que começa quando alguém, enfim, te escuta de verdade."*
- Referências poéticas de Luedji Luna, Emicida, Liniker

### Trecho poético (placeholder inicial)
> *"Eu não vou morrer antes de ser feliz"* — Luedji Luna

Pode ser trocado depois por qualquer trecho que preferir.

### Responsividade
Mobile-first, com layout adaptado para todas as telas. Animações de fade-in ao scroll com Intersection Observer.

