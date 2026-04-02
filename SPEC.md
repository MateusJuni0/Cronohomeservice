# MASTER SPECIFICATION DOCUMENT: Crono Home Service (Elite V1)

## 1. VISÃO GLOBAL: A MÁQUINA DE AQUISIÇÃO
Nós não estamos a vender um website. Estamos a vender à Crono Home Service um **Motor de Fecho de Obras de Alto Padrão**. 
O mercado de construção civil sofre de um problema de confiança endémico: atrasos, poeira, construtores que desaparecem e orçamentos que duplicam. O objetivo deste sistema é ser a **antítese** desse mercado. Quando o cliente entra, ele não vê "mais um pedreiro". Ele vê uma empresa de engenharia e gestão de projetos que lhe tira as dores de cabeça.

---

## 2. A JORNADA PSICOLÓGICA DO CLIENTE FINAL

### Como o cliente vai buscar o nosso site? (Atração)
- **Pesquisa de Dor Aguda (Google):** "Picheleiro urgente", "remodelação casa de banho", "infiltração teto". O site será otimizado (SEO Local e preparado para Google Ads) para responder a dores diretas, não apenas a pesquisas genéricas.
- **Pesquisa de Confiança (Referenciação):** Alguém recomenda a Crono. A pessoa pesquisa o nome. Em vez de um site Hostinger genérico, encontra um portal premium. A venda está 80% fechada aqui.

### O que o cliente vai sentir? (Sentimentos gerados)
1. **Segundo 0 ao 3 (Alívio & Autoridade):** O site carrega quase em tempo zero (SSR). O design limpo (sem cores de construção berrantes, mas sim navy/dourado/branco) transmite higiene e rigor. Ele sente: *"Estou num lugar profissional"*.
2. **Segundo 4 ao 10 (Encantamento):** Brinca com o Slider interativo de "Antes/Depois". Vê o esgoto transformado em luxo. Ele sente: *"Eu quero isto na minha casa"*.
3. **Segundo 10 ao 20 (Segurança):** Lê a Trust Bar (Garantias, Alvará, Limpeza Pós-Obra, Orçamentos Fechados). Os medos (poeira, roubo, atraso) morrem aqui.
4. **Segundo 21+ (Ação Fácil):** O CTA não é "Contacte-nos" (que exige esforço). O CTA é "Descreva o seu problema e receba um orçamento em 24h". Ele sente: *"Finalmente alguém que facilita o processo"*.

### Porque ele vai escolher a Crono e não o concorrente?
Porque o concorrente pede-lhe para ligar para um número ou enviar um email vazio. Nós guiamos a lead pela mão: perguntamos a divisão, deixamos anexar uma foto do estrago e prometemos resposta via WhatsApp. A Crono ganha por **Facilidade e Redução de Atrito**.

---

## 3. O PITCH DE VENDA (CMTecnologia -> Crono)
Como justificamos o valor (Alto Ticket) deste projeto:
- **Filtro de Curiosos:** O sistema não traz pessoas que querem "só um remendo barato". O design de luxo atrai clientes que querem pagar por paz de espírito.
- **Processo Automático:** A Crono deixa de perder tempo ao telemóvel a tentar perceber o que o cliente quer. A notificação no telemóvel do dono (via n8n) já diz: *"Lead quente: Casa de Banho, Orçamento para esta semana, [Foto do local anexada]"*.
- **Posicionamento Premium:** O site permite à Crono cobrar mais 15-20% por obra do que o concorrente de bairro, puramente porque o aspeto transmite fiabilidade.

---

## 4. ESTRUTURA VISUAL E DE CONTEÚDO (O MAPA DA PÁGINA)

A landing page será uma "One-Page" longa de alta conversão, arquitetada para scroll:

### Secção 1: O "Above the Fold" (Hero Section)
- **Fundo:** Vídeo em loop suave (escurecido) ou imagem premium de uma obra polida e limpa.
- **Copy Principal:** Promessa direta. (Ex: "Remodelações e Obras Sem Dores de Cabeça. Projetadas à medida, entregues a tempo e horas.")
- **Botões:** `[Pedir Orçamento Gratuito] ` (Destacado) e `[Ver Portfolio] ` (Secundário).

### Secção 2: O Desbloqueio de Objeções (Trust Bar Visual)
- Fila de 4 selos de confiança:
  - 🛡️ +20 Anos de Experiência
  - 📝 Orçamentos Transparentes (Sem surpresas)
  - 🧹 Limpeza Pós-Obra Garantida
  - ⏱️ Cumprimento Rigoroso de Prazos

### Secção 3: Como Resolvemos o seu Problema (Serviços - Bento Grid)
- Cards elegantes: Remodelações Gerais, Pichelaria/Eletricidade, Pinturas, Decoração.
- Clicar num card não leva a uma página maçadora de texto; abre um modal com os benefícios rápidos.

### Secção 4: A Prova (Slider Antes / Depois)
- A joia tecnológica do site. 3 ou 4 exemplos fortíssimos. O cliente desliza o dedo no ecrã para ver o "Lixo" virar "Luxo".
- **Gatilho:** As pessoas compram transformações, não tijolos.

### Secção 5: O Método Crono (Gestão de Expectativas)
- Um roadmap simples (Passos 1, 2, 3 e 4). 
- Mostramos como passamos do primeiro contacto à entrega da chave. Tira o medo do caos que é uma obra.

### Secção 6: O Esmagador de Dúvidas (FAQ Estratégico)
- Perguntas que o cliente pensa mas não diz: 
  - "E se encontrarem problemas nas tubagens?" 
  - "Tenho de sair de casa durante a obra?"
  - "O orçamento pode resvalar?" 
- Respostas diretas que matam a objeção ali mesmo.

### Secção 7: O Funil Inteligente (Formulário Multistep + Upload)
- Esqueça o formulário "Nome, Email, Assunto".
- **Passo 1:** Qual é a zona? (Sala, Cozinha, Wc, Geral)
- **Passo 2:** Qual a urgência? (Imediato, Em planeamento)
- **Passo 3:** Anexe aqui uma foto do estado atual (botão direto para a câmara no mobile).
- **Passo 4:** Nome e WhatsApp.
- O botão final diz: "Receber Avaliação no WhatsApp".

### Secção 8: Footer de Autoridade
- Logotipos de fornecedores de qualidade (tintas, materiais de construção conhecidos).
- NIF, Morada, Contactos, Política de Privacidade. Essencial para passar na malha fina de quem desconfia de "burlas de empreiteiros".

---

## 5. ARQUITETURA TÉCNICA E PERFORMANCE (A Máquina)
- **Framework:** Next.js 16 App Router. SSR garante que a página é indexada a 100% pelos motores de busca (Ao contrário de muitos SPA's ou construtores de arrastar/soltar).
- **Styling & UI:** TailwindCSS 4 para design utility-first + Framer Motion para entradas suaves, parallax e interações táteis (micro-animações geram percepção de qualidade).
- **Assets:** Imagens em formato `.avif` / `.webp` para manter qualidade máxima com 10% do tamanho. Lazy loading em todas as imagens abaixo do Hero.
- **Backend/Lead Gen:** Formulário envia Payload via POST para um Webhook `n8n` hospedado na nossa VPS. O `n8n` processa a foto e a mensagem, e envia um alerta estruturado diretamente para o WhatsApp do dono da Crono (Ex: "🚨 NOVA LEAD | Orçamento Wc | Cliente: João | Tel: 91...").
- **SEO Base:** `LocalBusiness` Schema Markup injetado no `<head>` para a Crono aparecer no pack de 3 do Google Maps quando alguém pesquisar "obras perto de mim".

---
*Ficheiro Vivo: Qualquer alteração à estratégia deve ser refletida neste documento antes do código.*