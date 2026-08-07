import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Reveal } from "./Reveal";

const metrics = [
  { value: "R$ 180M+", label: "recuperados e renegociados" },
  { value: "420+", label: "empresas atendidas" },
  { value: "18 anos", label: "de experiência tributária" },
  { value: "97%", label: "de clientes que renovam" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-night">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1200}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -top-32 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold/12 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-24 md:px-8 md:pt-48 md:pb-32">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-[0.68rem] font-medium tracking-[0.28em] text-gold uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Consultoria Estratégica
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 text-5xl leading-[1.05] text-balance md:text-7xl">
              Transformamos <em className="shine-text not-italic">dívidas</em>,
              riscos e bloqueios em{" "}
              <span className="text-gradient-gold">estratégias de crescimento</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A Zentus identifica oportunidades ocultas, reduz passivos
              financeiros, protege patrimônios e desenvolve estratégias para
              fortalecer empresas e empresários.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-[1.03]"
              >
                Solicitar diagnóstico gratuito
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-xs font-semibold tracking-[0.18em] text-foreground uppercase transition-colors hover:border-gold/50 hover:text-gold"
              >
                Conhecer soluções
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={420}>
          <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border/60 pt-10 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="min-w-0">
                <dt className="font-display text-3xl text-gradient-gold md:text-4xl">
                  {m.value}
                </dt>
                <dd className="mt-2 text-xs leading-relaxed tracking-wide text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="text-[0.6rem] tracking-[0.4em] text-muted-foreground uppercase">
            Explorar
          </span>
          <ChevronDown className="animate-scroll-hint h-4 w-4 text-gold" />
        </div>
      </div>
    </section>
  );
}
