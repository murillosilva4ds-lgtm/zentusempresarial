import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroCity from "@/assets/hero-city.jpg";
import { Reveal } from "./Reveal";
import { WHATSAPP_DIAGNOSTICO } from "@/lib/contact";

const metrics = [
  { value: "8 anos", label: "de experiência em consultoria estratégica" },
  { value: "Tributário", label: "planejamento e recuperação de tributos" },
  { value: "Bancário", label: "raio x de contratos e revisão de juros" },
  { value: "Patrimonial", label: "holding e blindagem do patrimônio" },
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

      <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-20 md:px-8 md:pt-44 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-gold uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Consultoria Estratégica Empresarial
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-8 text-5xl leading-[1.05] text-balance md:text-7xl">
                Mais que consultoria.{" "}
                <em className="shine-text not-italic">Estratégia</em> para
                proteger e{" "}
                <span className="text-gradient-gold">fortalecer sua empresa</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                Empresas não quebram apenas por dívidas — elas enfraquecem pela
                ausência de planejamento, estrutura e inteligência tributária. A
                Zentus atua no tributário, bancário e patrimonial para transformar
                problemas em resultados reais.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_DIAGNOSTICO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-sm font-bold tracking-[0.14em] text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-[1.03]"
                >
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#solucoes"
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-semibold tracking-[0.14em] text-foreground uppercase transition-colors hover:border-gold/60 hover:text-gold"
                >
                  Conhecer soluções
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260} className="hidden lg:block">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="animate-glow absolute -inset-10 rounded-[3rem] bg-gold/10 blur-3xl"
              />
              <img
                src={heroAbstract}
                alt=""
                aria-hidden="true"
                width={1536}
                height={1024}
                className="animate-float relative w-full rounded-[2rem] border border-gold/15 object-cover opacity-35 shadow-[var(--shadow-elegant)]"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={420}>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border/60 pt-8 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="min-w-0">
                <dt className="font-display text-3xl text-gradient-gold md:text-4xl">
                  {m.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.3em] text-foreground/70 uppercase">
            Explorar
          </span>
          <ChevronDown className="animate-scroll-hint h-4 w-4 text-gold" />
        </div>
      </div>
    </section>
  );
}
