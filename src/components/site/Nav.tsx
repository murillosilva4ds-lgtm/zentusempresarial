import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_ESPECIALISTA } from "@/lib/contact";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#processo", label: "Processo" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src="/zentus-logo.png"
            alt="Zentus — consultoria estratégica"
            className="h-12 w-auto shrink-0"
            width={175}
            height={50}
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-[0.14em] text-foreground/80 uppercase transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_ESPECIALISTA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/50 px-5 py-2.5 text-sm font-semibold tracking-[0.12em] text-gold uppercase transition-all hover:bg-gold/10 hover:shadow-[0_0_30px_-8px_var(--gold)]"
          >
            Falar com especialista
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border/60 bg-background/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base tracking-[0.12em] text-foreground/85 uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_ESPECIALISTA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-bold tracking-[0.12em] text-primary-foreground uppercase"
            >
              Falar com especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
