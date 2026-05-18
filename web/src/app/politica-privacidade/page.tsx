import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Cronograma Home Service trata os seus dados pessoais ao abrigo do RGPD e da legislação portuguesa.",
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadePage() {
  return (
    <LegalShell title="Política de Privacidade" updatedAt="2026-05-18">
      <p>
        A presente política descreve como a <strong>Cronograma Home Service</strong>{" "}
        (adiante, &ldquo;Crono&rdquo;, &ldquo;nós&rdquo;) trata os dados pessoais que
        recolhe através deste site, ao abrigo do Regulamento (UE) 2016/679{" "}
        (&ldquo;RGPD&rdquo;) e da Lei n.º 58/2019, de 8 de Agosto.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">1. Responsável pelo tratamento</h2>
      <p>
        Cronograma Home Service<br />
        NIF: <em>a confirmar</em><br />
        Email: <a className="text-[#1E4FBF] underline" href="mailto:grupocronograma@hotmail.com">grupocronograma@hotmail.com</a><br />
        Morada: Lisboa, Portugal
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">2. Que dados recolhemos</h2>
      <p>
        Apenas recolhemos os dados que voluntariamente nos fornece através do
        formulário de pedido de orçamento ou via WhatsApp:
      </p>
      <ul className="ml-6 list-disc space-y-1">
        <li>Nome próprio</li>
        <li>Número de telemóvel / WhatsApp</li>
        <li>Mensagem opcional (descrição da obra pretendida)</li>
        <li>Foto opcional do espaço a remodelar, se a enviar pelo WhatsApp</li>
        <li>Endereço IP e user-agent do navegador (registo técnico)</li>
      </ul>
      <p>
        Não recolhemos automaticamente quaisquer outros dados de navegação,
        nem utilizamos cookies de tracking, analytics ou publicidade. Veja a{" "}
        <a className="text-[#1E4FBF] underline" href="/cookies">Política de Cookies</a> para mais detalhe.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">3. Finalidade e base legal</h2>
      <p>
        Tratamos os seus dados exclusivamente para responder ao seu pedido de
        orçamento, agendar visita técnica e, em caso de contratação, gerir a
        relação contratual ao longo da obra e respectivo período de garantia.
      </p>
      <p>
        A base legal é a execução de diligências pré-contratuais a seu pedido
        (Art.º 6.º, n.º 1, al. b) do RGPD) e, posteriormente, a execução do
        contrato de prestação de serviços.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">4. Prazo de conservação</h2>
      <p>
        Os pedidos de orçamento que não derem origem a contrato são conservados
        durante 24 meses, a contar da última interacção, para efeitos de
        retoma comercial. Os dados de clientes activos são conservados durante
        a vigência do contrato e pelos 10 anos seguintes (Art.º 123.º do Código
        do IRC e Art.º 40.º do Código Comercial). Findos estes prazos, os dados
        são eliminados de forma segura.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">5. Subcontratantes</h2>
      <p>
        Para prestar o serviço, recorremos a fornecedores tecnológicos que
        actuam como subcontratantes ao abrigo de contratos compatíveis com o
        RGPD:
      </p>
      <ul className="ml-6 list-disc space-y-1">
        <li><strong>Vercel Inc.</strong> — alojamento do site (UE / EUA, com Standard Contractual Clauses)</li>
        <li><strong>Supabase Inc.</strong> — base de dados de leads (região EU-West)</li>
        <li><strong>Telegram FZ-LLC</strong> — canal de notificação interna ao gestor de projecto</li>
      </ul>
      <p>
        Não vendemos, alugamos nem cedemos os seus dados a terceiros para fins
        de marketing.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">6. Os seus direitos</h2>
      <p>
        Pode, a qualquer momento, exercer os direitos previstos nos Art.º 15.º
        a 22.º do RGPD: acesso, rectificação, apagamento, limitação do
        tratamento, portabilidade e oposição. Para o fazer, contacte-nos por{" "}
        email para{" "}
        <a className="text-[#1E4FBF] underline" href="mailto:grupocronograma@hotmail.com">grupocronograma@hotmail.com</a>.
        Responderemos no prazo máximo de 30 dias.
      </p>
      <p>
        Tem ainda o direito de apresentar reclamação à Comissão Nacional de
        Protecção de Dados (<a className="text-[#1E4FBF] underline" href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer">cnpd.pt</a>).
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">7. Segurança</h2>
      <p>
        Adoptamos medidas técnicas e organizacionais adequadas para proteger
        os seus dados contra acesso não autorizado, perda ou destruição
        acidental: comunicações cifradas (HTTPS/TLS), acesso à base de dados
        restrito por chave, registos de auditoria das alterações.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">8. Alterações a esta política</h2>
      <p>
        Esta política pode ser actualizada a qualquer momento. A versão em
        vigor é sempre a publicada nesta página, com a data de actualização
        no topo. Recomendamos consulta periódica.
      </p>
    </LegalShell>
  );
}
