import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Cookies utilizadas pelo site cronohomeservice.pt — actualmente, apenas cookies funcionais e nenhumas cookies de tracking ou marketing.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalShell title="Política de Cookies" updatedAt="2026-05-18">
      <p>
        Esta política explica como o site <strong>cronohomeservice.pt</strong> usa
        cookies e tecnologias similares, em conformidade com a Lei n.º 41/2004
        (transposição da Directiva ePrivacy) e o RGPD.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">1. O que são cookies</h2>
      <p>
        Cookies são pequenos ficheiros de texto guardados no seu navegador
        quando visita um site. Permitem que o site se &ldquo;lembre&rdquo; das
        suas acções e preferências (por exemplo, a sua escolha sobre o banner
        de cookies) durante um período definido.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">2. Que cookies usamos</h2>
      <p>
        Actualmente este site usa <strong>apenas cookies estritamente
        funcionais</strong>. Não utilizamos cookies de análise (Google Analytics,
        Microsoft Clarity, Plausible, etc.), nem de publicidade, nem de
        terceiros para personalização.
      </p>

      <div className="overflow-x-auto">
        <table className="mt-4 w-full text-left text-sm">
          <thead className="bg-[#F5F7FA] text-xs uppercase tracking-wider text-[#4A5568]">
            <tr>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Finalidade</th>
              <th className="px-4 py-3">Validade</th>
              <th className="px-4 py-3">Tipo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E6EAF0]">
            <tr>
              <td className="px-4 py-3 font-mono text-[13px]">crono_cookie_consent</td>
              <td className="px-4 py-3">Guarda a sua escolha no banner de cookies para não a repetir.</td>
              <td className="px-4 py-3">12 meses</td>
              <td className="px-4 py-3">Funcional (LocalStorage)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">3. Quando aceita ou recusa</h2>
      <p>
        O banner permite-lhe <strong>aceitar</strong> ou <strong>recusar</strong>{" "}
        no primeiro acesso. Como hoje só usamos cookies funcionais, ambas as
        respostas têm o mesmo efeito técnico: guardamos a sua escolha
        localmente para não voltar a mostrar o banner.
      </p>
      <p>
        Caso passemos a usar cookies de análise no futuro (por exemplo, para
        medir tráfego com Google Analytics), passarão a ser carregadas{" "}
        <strong>apenas</strong> se você as aceitar explicitamente. Esta página
        será actualizada antes dessa alteração.
      </p>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">4. Como controlar cookies</h2>
      <p>
        Pode a qualquer momento limpar as cookies e armazenamento local através
        das definições do seu navegador. Pode também usar o modo anónimo /
        privado para navegar sem deixar rasto local. Tipicamente:
      </p>
      <ul className="ml-6 list-disc space-y-1">
        <li>Chrome → Definições → Privacidade e segurança → Cookies</li>
        <li>Firefox → Definições → Privacidade e segurança</li>
        <li>Safari → Preferências → Privacidade</li>
        <li>Edge → Definições → Cookies e permissões do site</li>
      </ul>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">5. Mais informação</h2>
      <p>
        Para mais detalhes sobre o tratamento dos seus dados, consulte a{" "}
        <a className="text-[#1E4FBF] underline" href="/politica-privacidade">Política de Privacidade</a>.
        Para qualquer dúvida, contacte-nos por email para{" "}
        <a className="text-[#1E4FBF] underline" href="mailto:grupocronograma@hotmail.com">grupocronograma@hotmail.com</a>.
      </p>
    </LegalShell>
  );
}
