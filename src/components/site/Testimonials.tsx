import { Quote, Star, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/zentus-logo.png.asset.json";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "A Zentus identificou mais de R$ 2 milhões em créditos tributários que nossa empresa desconhecia. O retorno superou todas as expectativas.",
    name: "Carlos M.",
    role: "CEO — Indústria Metalúrgica",
  },
  {
    quote:
      "Estávamos com o caixa travado por dívidas fiscais. Em seis meses renegociamos tudo e voltamos a investir na operação.",
    name: "Renata L.",
    role: "Diretora Financeira — Rede de Varejo",
  },
  {
    quote:
      "Profissionalismo raro. Estruturaram a holding da família e nos deram segurança jurídica que nenhum escritório tinha oferecido.",
    name: "Eduardo S.",
    role: "Sócio-fundador — Agronegócio",
  },
  {
    quote:
      "Relatórios claros, prazos cumpridos e resultado em número. É a consultoria que eu indico sem pensar duas vezes.",
    name: "Patrícia A.",
    role: "Controller — Logística Nacional",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[0.66rem] font-semibold tracking-[0.34em] text-gold uppercase">
            Resultados reais
          </span>
          <h2 className="mt-5 text-4xl text-balance md:text-5xl">
            Quem <em className="text-gradient-gold not-italic">confia</em> na Zentus
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="glass-card h-full rounded-3xl p-8">
                <Quote className="h-8 w-8 text-gold/30" />
                <blockquote className="mt-5 text-base leading-relaxed text-foreground/90 italic">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex gap-1" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-lg">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
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
      className="relative overflow-hidden border-y border-border/50 bg-surface/30 px-5 py-28 md:px-8 md:py-36"
    >
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute top-1/2 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <span className="text-[0.66rem] font-semibold tracking-[0.34em] text-gold uppercase">
          Primeiro passo
        </span>
        <h2 className="mt-5 text-4xl text-balance md:text-6xl">
          Descubra quanto sua empresa pode{" "}
          <em className="shine-text not-italic">recuperar</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          O diagnóstico é gratuito, sigiloso e sem compromisso. Em até 48 horas
          você recebe um panorama completo das oportunidades identificadas.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/5551982247975?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Zentus%20e%20gostaria%20de%20solicitar%20o%20diagn%C3%B3stico%20gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-9 py-4 text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-[1.03]"
          >
            Solicitar diagnóstico gratuito
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+5551982247975"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-xs font-semibold tracking-[0.18em] text-foreground uppercase transition-colors hover:border-gold/50 hover:text-gold"
          >
            <Phone className="h-4 w-4" /> (51) 98224-7975
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img
              src={logo.url}
              alt="Zentus"
              className="h-12 w-auto rounded-md"
              width={150}
              height={48}
              loading="lazy"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Consultoria estratégica em créditos tributários, reestruturação de
              dívidas e blindagem patrimonial para empresas que querem crescer com
              segurança.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              contato@zentus.com.br
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              (51) 98224-7975
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              São Paulo — SP
            </li>
          </ul>
        </div>
        <div className="gold-rule my-10" />
        <p className="text-center text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} Zentus Consultoria. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
