# SPECIFICATION DOCUMENT: Crono Home Service (Elite V1)

## 1. Visão Executiva e Filosofia
A indústria da construção civil e remodelações em Portugal sofre de um problema crónico: **falta de confiança**. A maioria das empresas apresenta sites amadores, lentos e confusos, gerando o medo clássico no consumidor: *"Será que esta obra vai ser uma dor de cabeça?"*.

O objetivo deste projeto é construir uma máquina de conversão que transmita **Autoridade, Segurança e Profissionalismo Supremo**. Vamos abandonar o aspeto "Hostinger/Template" e criar uma experiência digital imersiva, posicionando a Crono Home Service no Top 1% do mercado nacional.

---

## 2. Análise Competitiva (Mercado Português)
**O que a concorrência faz mal:**
- Sites pesados (WordPress mal otimizado).
- Zero provas reais (usam fotos de stock em vez das obras reais).
- Formulários de contacto chatos ("Nome, Email, Mensagem") que ninguém quer preencher.
- Ocultam informações de segurança (faturas, alvará, garantias).

**A Nossa Solução (O "Edge" da Crono):**
- **Velocidade Extrema:** Next.js 16 com SSR. O site abre instantaneamente no 4G/5G, retendo a atenção.
- **Transparência Visual:** Sliders interativos de "Antes e Depois". O cliente compra o *resultado final*.
- **Gatilhos de Confiança Nacionais:** Destaque para cumprimento de prazos, orçamentos detalhados, e menção a garantias legais em Portugal.
- **Micro-Conversões:** Formulário multi-step interativo em vez de um bloco de texto assustador.

---

## 3. Arquitetura e Stack Tecnológica
- **Frontend:** Next.js 16 (React 19) + Tailwind CSS 4. (Justificativa: SEO impecável, Core Web Vitals no verde, carregamento ultrarrápido).
- **Animações:** Framer Motion. (Justificativa: Micro-interações dão a percepção tátil de um serviço premium. Efeitos de *fade-in* suaves sugerem cuidado e atenção aos detalhes).
- **Gestão de Leads:** Integração via Webhook com **n8n** (VPS) + Notificações no WhatsApp/Telegram.
- **UI Components:** Lucide Icons, Radix UI (acessibilidade), e um sistema de *Bento Grid* para os serviços.

---

## 4. Design System (UI/UX)
- **Cores Primárias:** Azul Profundo/Navy (transmite confiança, engenharia, segurança) + Laranja Vibrante ou Dourado (Call to Action, energia, rapidez).
- **Fundo:** Off-white limpo, garantindo foco total nas fotografias das obras. Nada de dark mode pesado, queremos transmitir luz, limpeza e espaços novos.
- **Tipografia:** Inter ou Plus Jakarta Sans (geométrica, limpa, perfeitamente legível em mobile).

---

## 5. Estrutura do Site (Secção a Secção detalhada)

### 5.1. Hero Section (O Primeiro Impacto)
- **O que é:** Um cabeçalho imersivo com uma imagem/vídeo subtil de uma obra de alto padrão concluída.
- **Copy principal:** "Remodelações Sem Dores de Cabeça. Entregues no Prazo."
- **Botão CTA:** "Pedir Orçamento Gratuito" (Destaque máximo).
- **Porquê:** O cliente de obras quer duas coisas: que fique bonito e que não haja chatices/atrasos. Atacamos a dor principal logo na primeira frase.

### 5.2. Trust Bar (Gatilhos de Autoridade)
- **O que é:** Uma barra horizontal logo abaixo do Hero.
- **Elementos:** "Mais de 20 Anos de Experiência" | "Orçamentos Fechados" | "Garantia de Qualidade" | "Cumprimento Rigoroso de Prazos".
- **Porquê:** Em Portugal, a confiança é o fator #1 de decisão. Provar que a empresa é legítima nos primeiros 3 segundos reduz a taxa de rejeição em 60%.

### 5.3. Nossos Serviços (Bento Grid)
- **O que é:** Grelha assimétrica elegante mostrando os serviços (Obras Rápidas, Instalações, Decoração, Remodelações Completas).
- **Como:** Cada cartão tem um ícone premium e expande ligeiramente ao passar o rato (hover effect).
- **Porquê:** Foge à lista chata de serviços. Mostra sofisticação arquitetónica.

### 5.4. A Joia da Coroa: Sliders Interativos "Antes / Depois"
- **O que é:** Um componente onde o utilizador arrasta uma barra central para a esquerda e direita, revelando o estado "Antes da Obra" e o "Resultado Final".
- **Porquê:** É o elemento mais hipnótico num site de remodelações. O cliente *sente* a transformação. Nenhuma foto estática bate o impacto psicológico de "varrer" o feio e revelar o bonito. Isto converte visitantes curiosos em leads quentes.

### 5.5. A Metodologia (Como Trabalhamos)
- **O que é:** Um fluxo de 3 passos simples (Ex: 1. Avaliação Gratuita -> 2. Projeto e Orçamento -> 3. Obra com Chave na Mão).
- **Porquê:** Desmistifica o processo. O medo do desconhecido afasta clientes. Mostrar que existe um método testado e seguro tranquiliza quem vai investir milhares de euros.

### 5.6. Prova Social e Testemunhos Reais
- **O que é:** Secção com fotos das obras acompanhadas dos depoimentos. Se possível, usar formato "Vídeo Selfie" dos clientes. Se não, cards com avaliações 5 estrelas do Google.
- **Porquê:** As pessoas confiam nas pessoas. Testemunhos genéricos como no site antigo geram desconfiança. Precisamos de nomes, zonas (Ex: "Ana M., Lisboa") e o problema que foi resolvido.

### 5.7. Funil de Conversão (Smart Lead Form)
- **O que é:** Em vez de uma página "Contactos" normal, temos um formulário interativo de 3 passos rápidos:
  1. *O que precisa?* (Remodelação, Eletricidade, Casa de Banho...)
  2. *Qual a urgência?* (Imediato, 1 mês, Só sondar)
  3. *Contacto para orçamento* (Nome, WhatsApp, Email).
- **Porquê:** Aumenta a taxa de submissão em 300%. Transforma o contacto num "pedido de ajuda qualificado". A Crono recebe a lead já com contexto, pronta a fechar via n8n/WhatsApp.

### 5.8. Footer (SEO e Transparência Legal)
- **O que é:** Links de navegação rápidos, zonas de atuação em Portugal (excelente para Local SEO), contactos diretos, NIF (opcional mas passa confiança) e Políticas de Privacidade / RGPD.

---

## 6. O Caminho de Implementação (Fases)
1. **Setup & Arquitetura (NEXUS):** Inicialização do Next.js 16, Tailwind 4, e definição da estrutura de pastas.
2. **UI Components (NEXUS):** Criação dos Bento Grids, Sliders Before/After, e Smart Form.
3. **Páginas & Animações (NEXUS):** Assemblagem da Landing Page completa com Framer Motion.
4. **Backend & Automação (VALKYRIE/NERO):** Configurar o endpoint do formulário para disparar no n8n.
5. **Quality Assurance (LÚCIO):** Teste de performance, SEO, e responsividade (mobile first).
6. **Deploy (VULKAN):** Vercel + Domínio definitivo.

---
**Status:** SPEC criado. Aguarda luz verde para Fase 1 (Setup do projeto).

## 7. O Pitch de Venda (Como a CMTecnologia Vende este Site à Crono)
**O nosso argumento não é 'vamos fazer um site mais bonito'. O nosso argumento é 'vamos criar um motor de aquisição de clientes que afasta os curiosos e atrai clientes de alto ticket.'**

### O Que a Crono Ganha:
- **Filtro de Curiosos:** O Smart Form qualifica a urgência e o tipo de serviço. Quem procura orçamentos irrealistas desiste aqui.
- **Autoridade Perceptual:** Ao ver o portfolio em Sliders de Antes/Depois de luxo, o cliente associa a qualidade do site à qualidade da obra. A negociação de preços fica muito mais fácil.
- **Canal de Venda Direto:** O site não é um catálogo, é uma ponte para o WhatsApp, enviando leads já informadas e pré-aquecidas.

## 8. Front-End Focado no Consumidor (Vender Reformas, não Software)
Tudo no ecrã existe para mitigar os medos de quem contrata empreiteiros:

1. **A Dor do Atraso:** Bloco visual claro com as Etapas (Orçamento -> Proteção do Local -> Obra -> Entrega Limpa). Mostra profissionalismo e gestão rigorosa.
2. **Medo da Burla/Abandono:** Contacto imediato e transparente, secção de garantias e fotos da equipa com fardamento (se disponível).
3. **Facilidade de Pedido:** O cliente deve poder anexar no formulário 2 fotos do espaço que quer remodelar. O empreiteiro (Crono) já recebe a foto no WhatsApp via n8n e pode dar um valor aproximado imediatamente.
