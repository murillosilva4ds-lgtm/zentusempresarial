import {
  Landmark,
  Scale,
  Banknote,
  RefreshCw,
  ShieldCheck,
  Building2,
  Users,
  Puzzle,
  Eye,
  Gauge,
} from "lucide-react";
import { Reveal } from "./Reveal";

const marquee = [
  "Tributário",
  "Bancário",
  "Patrimonial",
  "Holding",
  "Recuperação Tributária",
  "Planejamento",
];

const services = [
  {
    icon: Landmark,
    title: "Raio X Tributário",
    desc: "Diagnóstico completo para identificar riscos, oportunidades e economia tributária.",
    items: [
      "Revisão de tributos federais",
      "Mapa de riscos fiscais",
      "Parcelamento vantajoso",
      "Redução de encargos",
    ],
  },
  {
    icon: Scale,
    title: "Assessoria Tributária",
    desc: "Atuação especializada para contestar cobranças indevidas e defender seus direitos.",
    items: [
      "Defesa administrativa",
      "Teses consolidadas",
      "Regularização de pendências",
      "Acompanhamento técnico",
    ],
  },
  {
    icon: Banknote,
    title: "Raio X Bancário",
    desc: "Análise financeira e bancária para otimizar crédito e reduzir custos.",
    items: [
      "Análise de contratos",
      "Revisão de juros",
      "Cobranças indevidas",
      "Renegociação de dívidas",
    ],
  },
  {
    icon: RefreshCw,
    title: "Recuperação Tributária",
    desc: "Identificação e recuperação de tributos pagos a maior ou indevidamente.",
    items: [
      "Auditoria dos últimos 5 anos",
      "Compensação administrativa",
      "Restituição em espécie",
      "Relatórios de resultado",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Blindagem Patrimonial",
    desc: "Proteção estratégica do patrimônio contra riscos jurídicos e financeiros.",
    items: [
      "Proteção de bens",
      "Substituição de garantias",
      "Redução de exposição",
      "Segurança jurídica",
    ],
  },
  {
    icon: Building2,
    title: "Holding Empresarial e Familiar",
    desc: "Estruturação patrimonial para proteção, sucessão familiar e eficiência fiscal.",
    items: [
      "Organização societária",
      "Planejamento sucessório",
      "Redução de conflitos familiares",
      "Continuidade dos negócios",
    ],
  },
];

const differentials = [
  {
    icon: Users,
    title: "Atendimento Estratégico",
    desc: "Profissionais especializados dedicados ao seu caso com visão 360° do cenário tributário, bancário e patrimonial.",
  },
  {
    icon: Puzzle,
    title: "Soluções Personalizadas",
    desc: "Cada estratégia é desenvolvida sob medida, alinhada aos objetivos e à realidade da sua empresa.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    desc: "Relatórios claros, prazos definidos e comunicação direta em todas as etapas do processo.",
  },
  {
    icon: Gauge,
    title: "Resultado Mensurável",
    desc: "Mais organização, redução de custos, proteção patrimonial e crescimento sustentável — acompanhados em números.",
  },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico empresarial",
    desc: "Analisamos a situação financeira, tributária, bancária e patrimonial para identificar oportunidades e riscos.",
  },
  {
    n: "02",
    title: "Plano estratégico",
    desc: "Desenvolvemos estratégias personalizadas alinhadas aos objetivos e à realidade do cliente.",
  },
  {
    n: "03",
    title: "Execução técnica",
    desc: "Executamos as soluções definidas com acompanhamento técnico e foco em eficiência.",
  },
  {
    n: "04",
    title: "Acompanhamento e ajustes",
    desc: "Monitoramos os resultados e realizamos ajustes estratégicos sempre que necessário.",
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
      <span className="text-sm font-semibold tracking-[0.28em] text-gold uppercase">
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
            className="flex items-center gap-14 text-sm tracking-[0.24em] text-foreground/75 uppercase"
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
    <section id="solucoes" className="relative px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Nossas soluções"
          title="Estratégia, proteção e resultados para o"
          highlight="seu crescimento"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="glass-card relative h-full overflow-hidden rounded-3xl p-8">
                <span className="font-display absolute top-6 right-8 text-6xl text-foreground/10">
                  0{i + 1}
                </span>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-base text-foreground/75"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
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

export function Manifesto() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-surface/20 px-5 py-14 md:px-8 md:py-20">
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px]"
      />
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p className="font-display text-4xl leading-[1.15] text-balance uppercase md:text-6xl">
          Grandes empresas{" "}
          <em className="text-gradient-gold not-italic">não crescem</em> por acaso.
          Crescem com <em className="shine-text not-italic">estratégia.</em>
        </p>
      </Reveal>
    </section>
  );
}

export function Differentials() {
  return (
    <section id="diferenciais" className="relative px-5 py-14 md:px-8 md:py-20">
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
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 90}>
              <div className="glass-card flex h-full items-start gap-5 rounded-3xl p-7">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                  <d.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl">{d.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground/80">
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
      className="relative border-y border-border/50 bg-surface/30 px-5 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Processo"
          title="Do diagnóstico ao"
          highlight="resultado"
        />
        <ol className="mt-14 grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110} as="li">
              <div className="glass-card h-full rounded-3xl p-7">
                <span className="font-display text-4xl text-gradient-gold">
                  {s.n}
                </span>
                <div className="gold-rule my-5" />
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">
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
