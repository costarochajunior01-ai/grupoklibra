import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Handshake,
  Layers,
  MessageCircle,
  PackageX,
  ShieldCheck,
  TrendingDown,
  Truck,
} from "lucide-react";

import heroImgAsset from "@/assets/hero-tires.jpg.asset.json";
const heroImg = heroImgAsset.url;
import kLogoAsset from "@/assets/k-logo.png.asset.json";
const kLogo = kLogoAsset.url;
import agricolaImg from "@/assets/line-agricola.jpg";
import reparacaoImg from "@/assets/line-reparacao.jpg";
import motosImg from "@/assets/line-motos.jpg";
import logisticaImg from "@/assets/logistica.jpg";

import { Header } from "@/components/klibra/Header";
import { LeadForm } from "@/components/klibra/LeadForm";
import { Cta, Panel, SectionTitle } from "@/components/klibra/ui";
import { COMPANY, openWhatsApp } from "@/lib/klibra";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K-Libra | Distribuição B2B de Pneus, Câmaras e Reparação" },
      {
        name: "description",
        content:
          "Distribuição B2B de câmaras de ar, pneus e materiais de reparação para revendas, borracharias e oficinas da Bahia. Consulte disponibilidade e mantenha seu estoque.",
      },
      { property: "og:title", content: "K-Libra | Distribuição B2B de Pneus, Câmaras e Reparação" },
      {
        property: "og:description",
        content:
          "Parceira de revendas, borracharias e oficinas da Bahia: câmaras de ar, pneus e linha de reparação para manter sua operação em movimento.",
      },
    ],
  }),
  component: Landing,
});

function scrollToForm() {
  document.getElementById("atendimento")?.scrollIntoView({ behavior: "smooth" });
}

const DORES = [
  {
    icon: PackageX,
    title: "Estoque insuficiente",
    text: "Produto em falta significa venda perdida no balcão.",
  },
  {
    icon: Clock,
    title: "Reposição demorada",
    text: "A operação para justamente quando a demanda aumenta.",
  },
  {
    icon: TrendingDown,
    title: "Margem pressionada",
    text: "Sem uma compra competitiva, fica mais difícil proteger o lucro.",
  },
];

const LINHAS = [
  {
    img: agricolaImg,
    title: "Linha agrícola e pesada",
    text: "Câmaras de ar e pneus para operações exigentes.",
  },
  {
    img: reparacaoImg,
    title: "Linha de reparação",
    text: "Remendos, colas e itens de alto giro.",
  },
  {
    img: motosImg,
    title: "Linha motos",
    text: "Pneus e câmaras para demanda recorrente.",
  },
];

const DIFERENCIAIS = [
  { icon: Handshake, text: "Atendimento B2B especializado." },
  { icon: Truck, text: "Reposição ágil para sua operação." },
  { icon: Layers, text: "Portfólio para diferentes necessidades." },
  { icon: ShieldCheck, text: "Atendimento comercial próximo." },
];

const PASSOS = [
  "Você informa o que sua operação precisa.",
  "Nossa equipe consulta disponibilidade e condição comercial.",
  "Você recebe atendimento para manter suas vendas em movimento.",
];

const FAQ = [
  {
    q: "A K-Libra atende pessoa física?",
    a: "O atendimento é direcionado principalmente a revendas, borracharias e oficinas.",
  },
  {
    q: "Quais regiões são atendidas?",
    a: "Atendimento comercial para todo o estado da Bahia.",
  },
  {
    q: "Como consultar disponibilidade?",
    a: "Pelo formulário ou diretamente pelo WhatsApp.",
  },
  {
    q: "Quais linhas de produto estão disponíveis?",
    a: "Linhas agrícola e pesada, reparação e motos.",
  },
];

function Landing() {
  return (
    <div id="topo" className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 md:pt-32">
          <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
            <img
              src={heroImg}
              alt="Estoque de câmaras de ar e pneus carregado para distribuição"
              width={1280}
              height={1280}
              className="h-full w-full object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-fade)" }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-background/45" aria-hidden />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-8 md:px-8 lg:grid-cols-2 lg:pb-14">
            <div className="reveal max-w-[600px]">
              <p className="inline-flex items-center gap-2 border border-primary/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                DISTRIBUIÇÃO B2B PARA TODO O ESTADO DA BAHIA.
              </p>
              <h1 className="mt-5 text-4xl leading-[1.02] sm:text-5xl lg:mt-6 lg:text-[3.5rem]">
                ESTOQUE, MARGEM E<br />
                <span className="text-primary">CONFIANÇA PARA SUA REVENDA.</span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg lg:mt-5">
                Câmaras de ar, pneus e materiais de reparação para revendas e borracharias que não
                podem perder venda por falta de produto.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-7">
                <Cta size="lg" className="w-full sm:w-auto" onClick={scrollToForm}>
                  Consultar disponibilidade
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Cta>
                <Cta
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    openWhatsApp("Olá, quero consultar disponibilidade para minha empresa.", "hero")
                  }
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Falar no WhatsApp
                </Cta>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-3 lg:mt-8">
                {["Atendimento B2B", "Reposição ágil", "Qualidade para operação pesada"].map(
                  (s) => (
                    <li
                      key={s}
                      className="angular-clip border border-border bg-surface px-4 py-3 text-xs font-semibold uppercase tracking-wide text-foreground"
                    >
                      <span className="mr-2 inline-block h-2 w-2 rotate-45 bg-primary" aria-hidden />
                      {s}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="relative lg:hidden">
              <img
                src={heroImg}
                alt="Estoque de câmaras de ar e pneus carregado para distribuição"
                width={1280}
                height={1280}
                className="angular-clip h-64 w-full object-cover object-top sm:h-80"
              />
            </div>
          </div>
        </section>

        {/* O CUSTO DA FALTA */}
        <section className="border-y border-border bg-surface/40">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <SectionTitle eyebrow="O custo da falta">
              Quando falta produto, sua venda vai para o concorrente.
            </SectionTitle>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {DORES.map(({ icon: Icon, title, text }) => (
                <Panel key={title} className="border-l-4 border-l-primary">
                  <Icon className="h-7 w-7 text-primary" aria-hidden />
                  <h3 className="mt-4 text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES / LINHAS */}
        <section id="solucoes" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionTitle eyebrow="Soluções">
            Linhas para manter sua operação em movimento.
          </SectionTitle>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {LINHAS.map((l) => (
              <article
                key={l.title}
                className="angular-clip group flex flex-col border border-border bg-surface transition-colors hover:border-primary/60"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={l.img}
                    alt={l.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/40" aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl">{l.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {l.text}
                  </p>
                  <Cta variant="outline" className="mt-6 w-full" onClick={scrollToForm}>
                    Consultar disponibilidade
                  </Cta>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section
          id="diferenciais"
          className="border-y border-border bg-surface/40"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle eyebrow="Diferenciais">
                Uma parceria para sua revenda vender com mais segurança.
              </SectionTitle>
              <ul className="mt-8 space-y-4">
                {DIFERENCIAIS.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-start gap-4 border-l-2 border-primary/60 bg-surface/60 px-5 py-4"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <span className="text-sm font-medium text-foreground md:text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={logisticaImg}
              alt="Caminhonete carregada de pneus em doca de distribuição"
              loading="lazy"
              width={1280}
              height={800}
              className="angular-clip h-72 w-full object-cover lg:h-[26rem]"
            />
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionTitle eyebrow="Como funciona">Simples, rápido e direto.</SectionTitle>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {PASSOS.map((p, i) => (
              <li key={p} className="angular-clip relative border border-border bg-surface p-6">
                <span className="font-display text-5xl leading-none text-primary/30">0{i + 1}</span>
                <p className="mt-4 text-base font-medium text-foreground">{p}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Cta
              size="lg"
              onClick={() =>
                openWhatsApp(
                  "Olá, quero consultar disponibilidade para minha empresa.",
                  "como_funciona",
                )
              }
            >
              Falar com um especialista
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Cta>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section
          id="atendimento"
          className="border-y border-border bg-surface/40 scroll-mt-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.25fr] lg:items-start">
            <div>
              <SectionTitle eyebrow="Atendimento">Solicite atendimento comercial.</SectionTitle>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Preencha os dados e nossa equipe retornará para entender sua necessidade.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Atendimento exclusivo para revendas, borracharias e oficinas no estado da Bahia.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
          <SectionTitle eyebrow="FAQ">Perguntas frequentes</SectionTitle>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                  {item.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* CTA fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <Cta
          className="w-full"
          size="lg"
          onClick={() =>
            openWhatsApp(
              "Olá, quero consultar disponibilidade para minha empresa.",
              "sticky_mobile",
            )
          }
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          Falar no WhatsApp
        </Cta>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary/40 bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <img src={kLogo} alt="K-Libra" className="h-9 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Distribuição B2B de câmaras de ar, pneus e materiais de reparação para revendas,
            borracharias e oficinas da Bahia.
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a className="hover:text-primary" href="#solucoes">
            Soluções
          </a>
          <a className="hover:text-primary" href="#diferenciais">
            Diferenciais
          </a>
          <a className="hover:text-primary" href="#como-funciona">
            Como funciona
          </a>
          <a className="hover:text-primary" href="#atendimento">
            Atendimento
          </a>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contato</p>
          <Cta
            size="sm"
            className="mt-3"
            onClick={() =>
              openWhatsApp("Olá, quero consultar disponibilidade para minha empresa.", "rodape")
            }
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp comercial
          </Cta>
          <p className="mt-4 text-sm text-muted-foreground">Atuação: Estado da Bahia.</p>
        </div>
      </div>
      <div className="border-t border-primary/20 py-5 text-center text-xs text-muted-foreground">
        © {COMPANY.year} {COMPANY.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
