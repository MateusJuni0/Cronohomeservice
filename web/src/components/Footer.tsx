"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const SUPPLIERS = ["Margres", "Roca", "CIN", "Grohe", "Pladur"];

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "O Método", href: "#metodo" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Orçamento", href: "#orcamento" },
];

export default function Footer() {
  return (
    <SectionWrapper className="section-dark border-t border-[rgba(230,126,34,0.10)] py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-5 sm:p-8 md:p-12">
          {/* Suppliers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center sm:mb-12"
          >
            <p className="mb-3 text-[10px] font-medium tracking-[0.3em] uppercase sm:mb-4 sm:text-xs" style={{ color: "#E67E22" }}>
              Trabalhamos com
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
              {SUPPLIERS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ scale: 1.08, color: "#FFFFFF" }}
                  className="text-sm font-semibold cursor-default sm:text-lg"
                  style={{ color: "#E67E22" }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8 flex flex-col items-center gap-4 sm:mb-12 sm:flex-row sm:gap-6"
          >
            <a href="/">
              <Image
                src="/logo.png"
                width={200}
                height={200}
                alt="Cronograma Home Service"
                className="object-contain h-24 w-24 sm:h-28 sm:w-28"
              />
            </a>
            <div className="text-center sm:text-left">
              <p className="text-base font-bold tracking-wide sm:text-lg" style={{ color: "#E67E22" }}>
                CRONOGRAMA
              </p>
              <p className="text-[10px] font-light tracking-[0.25em] sm:text-xs" style={{ color: "rgba(230,126,34,0.7)" }}>
                Home Service
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(230,126,34,0.6)" }}>
                Remodelações de alta qualidade em Lisboa e arredores. Transformamos a sua casa — no prazo e no orçamento.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-12">
            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#E67E22" }}>
                Navegação
              </h4>
              <ul className="space-y-2.5">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(230,126,34,0.7)" }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#E67E22" }}>
                Contactos
              </h4>
              <ul className="space-y-2.5 text-sm" style={{ color: "rgba(230,126,34,0.7)" }}>
                <li>
                  <a href="tel:+351931428476" className="transition-colors hover:text-white">
                    +351 931 428 476
                  </a>
                </li>
                <li>
                  <a href="tel:+351935602904" className="transition-colors hover:text-white">
                    +351 935 602 904
                  </a>
                </li>
                <li>
                  <a href="mailto:grupocronograma@hotmail.com" className="transition-colors hover:text-white">
                    grupocronograma@hotmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/351931428476"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </li>
                <li style={{ color: "rgba(230,126,34,0.4)" }}>Lisboa, Portugal</li>
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#E67E22" }}>
                Legal
              </h4>
              <ul className="space-y-2.5 text-sm" style={{ color: "rgba(230,126,34,0.7)" }}>
                <li>NIF: XXXXXXXXX</li>
                <li>Alvará: XXXXXX</li>
                <li>Política de Privacidade</li>
                <li>RGPD</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 border-t pt-6 text-center text-xs sm:mt-12 sm:pt-8"
            style={{ borderColor: "rgba(230,126,34,0.15)", color: "rgba(230,126,34,0.5)" }}
          >
            &copy; {new Date().getFullYear()} Cronograma Home Service. Todos os direitos reservados.
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
