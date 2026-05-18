"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* -----------------------------------------------------------------------------
   Banner de cookies — GDPR/ePrivacy minimal.
   Funcional-only por agora (sem analytics activos), mas a infraestrutura está
   pronta para gate de analytics futuros: ler `getCookieConsent()` antes de
   carregar GA/Clarity/etc.
   ----------------------------------------------------------------------------- */

const STORAGE_KEY = "crono_cookie_consent";
type Consent = "accepted" | "declined";

interface StoredConsent {
  value: Consent;
  at: string; // ISO timestamp
}

export function getCookieConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    return parsed.value === "accepted" || parsed.value === "declined" ? parsed.value : null;
  } catch {
    return null;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostra só depois de hidratar; evita FOUC + diff SSR.
    if (getCookieConsent() === null) {
      setVisible(true);
    }
  }, []);

  function persist(value: Consent) {
    try {
      const payload: StoredConsent = { value, at: new Date().toISOString() };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // se LocalStorage estiver indisponível (browser private mode em iOS, etc),
      // simplesmente esconde o banner durante esta sessão.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-[#E6EAF0] bg-white p-5 shadow-[0_25px_70px_rgba(11,30,58,0.25)] sm:flex-row sm:items-center sm:gap-6">
        <div className="flex-1">
          <p className="text-sm font-bold text-[#0B1E3A]">
            Cookies estritamente funcionais
          </p>
          <p className="mt-1 text-sm text-[#4A5568]">
            Este site usa apenas cookies necessários ao funcionamento. Não há
            tracking nem publicidade.{" "}
            <Link href="/cookies" className="font-semibold text-[#1E4FBF] underline">
              Saiba mais
            </Link>.
          </p>
        </div>
        <div className="flex flex-none gap-2">
          <button
            type="button"
            onClick={() => persist("declined")}
            className="rounded-full border border-[#E6EAF0] px-4 py-2 text-sm font-semibold text-[#1A2238] transition hover:border-[#1E4FBF] hover:text-[#1E4FBF]"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="rounded-full bg-[#1E4FBF] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#173FA3]"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
