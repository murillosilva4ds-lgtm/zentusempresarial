import { Quote, Star, ArrowRight, Mail, Phone, MapPin, Building2 } from "lucide-react";
import logoAsset from "@/assets/zentus-logo.png";
import { Reveal } from "./Reveal";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  CNPJ,
  COMPANY_NAME,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_DIAGNOSTICO,
} from "@/lib/contact";

const testimonials = [
  {
    quote:
      "A Zentus fez o raio x tributário da nossa indústria e identificou tributos pagos indevidamente que nós nem sabíamos que existiam. O retorno superou as expectativas.",
    name: "Carlos M.",
    role: "CEO — Indústria Metalúrgica",
  },
  {
    quote:
      "Estávamos com o caixa travado por dívidas e restrições no CNPJ. Com o plano estratégico da Zentus regularizamos o nome e voltamos a ter acesso a crédito.",
    name: "Renata L.",
    role: "Diretora Financeira — Rede de Varejo",
  },
  {
    quote:
      "Estruturaram a holding familiar e organizaram a sucessão. Segurança jurídica que nenhum escritório tinha nos oferecido antes.",
    name: "Eduardo S.",
    role: "Sócio-fundador — Agronegócio",
  },
  {
    quote:
      "O raio x bancário apontou cobranças indevidas nos nossos contratos. Revisamos tudo e reduzimos custo financeiro de forma consistente.",
    name: "Patrícia A.",
    role: "Controller — Logística Nacional",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.28em] text-gold uppercase">
            Resultados reais
          </span>
          <h2 className="mt-5 text-4xl text-balance md:text-5xl">
            Quem <em className="text-gradient-gold not-italic">confia</em> na Zentus
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="glass-card h-full rounded-3xl p-8">
                <Quote className="h-8 w-8 text-gold/50" />
                <blockquote className="mt-5 text-lg leading-relaxed text-foreground/90 italic">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex gap-1" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-xl">{t.name}</p>
                  <p className="text-sm text-foreground/70">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-y border-border/50 bg-surface/30 px-5 py-14 md:px-8 md:py-20"
    >
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold tracking-[0.28em] text-gold uppercase">
          Primeiro passo
        </span>
        <h2 className="mt-5 text-4xl text-balance md:text-6xl">
          Descubra o que sua empresa pode{" "}
          <em className="shine-text not-italic">recuperar</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
          O diagnóstico é gratuito, sigiloso e sem compromisso. Analisamos a
          situação financeira, tributária, bancária e patrimonial e apresentamos
          as oportunidades identificadas.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_DIAGNOSTICO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-9 py-4 text-sm font-bold tracking-[0.14em] text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-[1.03]"
          >
            Solicitar diagnóstico gratuito
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold tracking-[0.14em] text-foreground uppercase transition-colors hover:border-gold/60 hover:text-gold"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-5 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img
              src={logoAsset}
              alt="Zentus"
              className="h-14 w-auto"
              width={200}
              height={58}
              loading="lazy"
            />
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              Consultoria estratégica em planejamento e recuperação tributária,
              estratégia bancária, holding e blindagem patrimonial para empresas
              que querem crescer com segurança.
            </p>
          </div>
          <ul className="space-y-4 text-base text-foreground/85">
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${EMAIL}`} className="hover:text-gold">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <span>
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Building2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <span>
                {COMPANY_NAME}
                <br />
                CNPJ {CNPJ}
              </span>
            </li>
          </ul>
        </div>
        <div className="gold-rule my-10" />
        <p className="text-center text-sm tracking-wide text-foreground/70">
          © {new Date().getFullYear()} Zentus Consultoria e Planejamento. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
