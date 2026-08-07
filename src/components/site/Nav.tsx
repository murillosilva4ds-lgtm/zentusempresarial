import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/zentus-logo.png.asset.json";
import { cn } from "@/lib/utils";

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
            src={logo.url}
            alt="Zentus — consultoria estratégica"
            className="h-11 w-auto shrink-0 rounded-md"
            width={140}
            height={44}
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5551982247975?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Zentus%20e%20gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/40 px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-gold uppercase transition-all hover:bg-gold/10 hover:shadow-[0_0_30px_-8px_var(--gold)]"
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
                className="text-sm tracking-[0.16em] text-muted-foreground uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5551982247975?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Zentus%20e%20gostaria%20de%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gold-gradient px-5 py-3 text-center text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase"
            >
              Falar com especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
