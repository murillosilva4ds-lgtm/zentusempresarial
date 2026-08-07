import {
  Landmark,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Users,
  Puzzle,
  Eye,
  Gauge,
} from "lucide-react";
import { Reveal } from "./Reveal";

const marquee = [
  "Créditos Tributários",
  "Reestruturação de Dívidas",
  "Blindagem Patrimonial",
  "Planejamento Fiscal",
  "Recuperação Judicial",
  "Due Diligence",
];

const services = [
  {
    icon: Landmark,
    title: "Recuperação de Créditos Tributários",
    desc: "Auditoria fiscal completa para localizar valores pagos a maior nos últimos 5 anos.",
    items: [
      "Revisão de tributos federais",
      "Compensação administrativa",
      "Teses consolidadas",
      "Restituição em espécie",
    ],
  },
  {
    icon: RefreshCw,
    title: "Reestruturação de Dívidas",
    desc: "Estratégias inteligentes para reduzir a pressão financeira do caixa.",
    items: [
      "Negociação estratégica",
      "Parcelamentos",
      "Revisão de juros",
      "Redução de multas",
      "Acompanhamento",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Blindagem Financeira e Patrimonial",
    desc: "Proteção estruturada para bens, sócios e patrimônio familiar.",
    items: [
      "Proteção patrimonial",
      "Redução de riscos",
      "Substituição de garantias",
      "Holding familiar",
    ],
  },
  {
    icon: TrendingUp,
    title: "Estratégia de Crescimento",
    desc: "Planejamento financeiro e fiscal para escalar com margem saudável.",
    items: [
      "Planejamento tributário",
      "Reorganização societária",
      "Gestão de indicadores",
      "Preparação para crédito",
    ],
  },
];

const differentials = [
  {
    icon: Users,
    title: "Atendimento Estratégico",
    desc: "Profissionais especializados dedicados ao seu caso com visão 360° do cenário.",
  },
  {
    icon: Puzzle,
    title: "Soluções Personalizadas",
    desc: "Cada estratégia é desenvolvida sob medida para as necessidades da sua empresa.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    desc: "Relatórios claros, prazos definidos e comunicação direta em todas as etapas.",
  },
  {
    icon: Gauge,
    title: "Resultado Mensurável",
    desc: "Indicadores acompanhados de perto: você enxerga o retorno em números.",
  },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico gratuito",
    desc: "Analisamos documentos fiscais, contratos e passivos para mapear oportunidades.",
  },
  {
    n: "02",
    title: "Plano estratégico",
    desc: "Apresentamos o caminho, os valores estimados e o cronograma de execução.",
  },
  {
    n: "03",
    title: "Execução técnica",
    desc: "Nossa equipe conduz negociações, teses e processos com acompanhamento contínuo.",
  },
  {
    n: "04",
    title: "Resultado e blindagem",
    desc: "Recursos recuperados, caixa aliviado e estrutura protegida para o longo prazo.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  highlight,
  suffix,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  suffix?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="text-[0.66rem] font-semibold tracking-[0.34em] text-gold uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-4xl text-balance md:text-5xl">
        {title}
        {highlight && <em className="text-gradient-gold not-italic"> {highlight}</em>}
        {suffix}
      </h2>
    </Reveal>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border/50 bg-surface/40 py-5">
      <div className="animate-marquee flex w-max gap-14">
        {[...marquee, ...marquee, ...marquee].map((m, i) => (
          <span
            key={i}
            className="flex items-center gap-14 text-xs tracking-[0.28em] text-muted-foreground uppercase"
          >
            {m}
            <span className="h-1 w-1 rounded-full bg-gold/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="solucoes" className="relative px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Soluções"
          title="O que a"
          highlight="Zentus"
          suffix=" faz por você"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="glass-card relative h-full overflow-hidden rounded-3xl p-8">
                <span className="font-display absolute top-6 right-8 text-6xl text-foreground/5">
                  0{i + 1}
                </span>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Differentials() {
  return (
    <section id="diferenciais" className="relative px-5 py-28 md:px-8 md:py-36">
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute top-1/3 left-[-15%] h-[30rem] w-[30rem] rounded-full bg-gold/8 blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a"
          highlight="Zentus"
          suffix="?"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 90}>
              <div className="glass-card flex h-full items-start gap-5 rounded-3xl p-7">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                  <d.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section
      id="processo"
      className="relative border-y border-border/50 bg-surface/30 px-5 py-28 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Processo"
          title="Do diagnóstico ao"
          highlight="resultado"
        />
        <ol className="mt-16 grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110} as="li">
              <div className="glass-card h-full rounded-3xl p-7">
                <span className="font-display text-4xl text-gradient-gold">
                  {s.n}
                </span>
                <div className="gold-rule my-5" />
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
