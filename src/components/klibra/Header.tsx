import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import kMark from "@/assets/k-mark.png";
import { Cta } from "./ui";
import { openWhatsApp } from "@/lib/klibra";

const LINKS = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#atendimento", label: "Atendimento" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <a href="#topo" className="flex items-center gap-3" aria-label="K-Libra — início">
          <img src={kMark} alt="" width={40} height={40} className="h-9 w-9" />
          <span className="font-display text-lg leading-none tracking-tight md:text-xl">
            K-Libra
            <span className="mt-1 block font-sans text-[9px] font-medium not-italic uppercase tracking-[0.25em] text-muted-foreground">
              Artefatos de Borracha
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Cta
            size="sm"
            className="hidden md:inline-flex"
            onClick={() =>
              openWhatsApp(
                "Olá! Sou lojista e quero falar com um especialista da K-Libra.",
                "header",
              )
            }
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Falar com um especialista
          </Cta>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Menu mobile" className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-wide text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Cta
              size="md"
              className="my-4"
              onClick={() => {
                setOpen(false);
                openWhatsApp("Olá! Quero falar com um especialista da K-Libra.", "header_mobile");
              }}
            >
              Falar com um especialista
            </Cta>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
