import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Termos & Condições",
  description:
    "Termos de utilização do site cronohomeservice.pt. Os termos da prestação de serviços de obras são contratuais e entregues à parte.",
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <LegalShell title="Termos & Condições de Utilização" updatedAt="2026-05-18">
      <p>
        Os presentes Termos regulam o acesso e a utilização do site{" "}
        <strong>cronohomeservice.pt</strong> (&ldquo;Site&rdquo;), explorado pela{" "}
        <strong>Cronograma Home Service</strong>. Ao aceder ao Site, você aceita
        integralmente estes Termos. Se não concordar, deve abandoná-lo.
      </p>

      <p className="rounded-xl bg-[#F5F7FA] p-5 text-[15px] text-[#4A5568]">
        <strong>Nota importante:</strong> Estes Termos cobrem apenas a
        utilização do Site. Os termos da prestação de serviços de obra são
        contratuais e entregues por escrito ao cliente, em documento próprio,
        após a aprovação do orçamento.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">1. Objecto do Site</h2>
      <p>
        O Site tem natureza informativa e comercial: apresenta os serviços
        prestados pela Crono e disponibiliza um formulário para pedido de
        orçamento sem compromisso. Submeter um pedido de orçamento{" "}
        <strong>não constitui</strong> celebração de qualquer contrato.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">2. Utilização aceitável</h2>
      <p>
        Compromete-se a utilizar o Site de boa-fé e a não:
      </p>
      <ul className="ml-6 list-disc space-y-1">
        <li>Submeter dados falsos, ofensivos ou que não lhe pertençam</li>
        <li>Tentar aceder a áreas ou funcionalidades não públicas</li>
        <li>Sobrecarregar o serviço com pedidos automatizados (scraping, bots)</li>
        <li>Copiar, modificar ou redistribuir os conteúdos sem autorização escrita</li>
      </ul>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">3. Propriedade intelectual</h2>
      <p>
        Todos os textos, imagens, fotografias, marcas e logótipos apresentados
        no Site são propriedade da Crono ou de terceiros licenciados, e estão
        protegidos pelo Código do Direito de Autor e dos Direitos Conexos
        (DL n.º 63/85) e pelo Código da Propriedade Industrial. A reprodução,
        total ou parcial, carece de autorização prévia e escrita.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">4. Conteúdo de terceiros</h2>
      <p>
        O Site pode conter links para sites de terceiros (Livro de
        Reclamações, redes sociais, fornecedores de materiais). A Crono não é
        responsável pelo conteúdo, políticas ou práticas desses sites.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">5. Limitação de responsabilidade</h2>
      <p>
        Os preços e prazos indicados no Site têm carácter informativo. O preço
        e prazo finais são confirmados sempre no orçamento escrito, após a
        visita técnica. A Crono diligencia para manter o Site disponível e
        actualizado, mas não garante a sua disponibilidade ininterrupta.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">6. Dados pessoais</h2>
      <p>
        O tratamento dos seus dados pessoais é regido pela{" "}
        <a className="text-[#1E4FBF] underline" href="/politica-privacidade">Política de Privacidade</a>.
        A utilização de cookies é descrita na{" "}
        <a className="text-[#1E4FBF] underline" href="/cookies">Política de Cookies</a>.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">7. Resolução de litígios</h2>
      <p>
        Para qualquer litígio relacionado com a utilização do Site, é
        competente o foro da Comarca de Lisboa, com expressa renúncia a
        qualquer outro. Em alternativa, pode recorrer ao{" "}
        <a className="text-[#1E4FBF] underline" href="/livro-reclamacoes">Livro de Reclamações electrónico</a>{" "}
        e às entidades de resolução alternativa de litígios reconhecidas pela
        DGC (Direcção-Geral do Consumidor).
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">8. Lei aplicável</h2>
      <p>
        Estes Termos são regidos pela lei portuguesa.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">9. Alterações</h2>
      <p>
        A Crono reserva-se o direito de actualizar estes Termos a qualquer
        momento. A versão em vigor é sempre a publicada nesta página.
      </p>
    </LegalShell>
  );
}
