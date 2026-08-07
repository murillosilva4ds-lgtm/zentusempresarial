import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  Marquee,
  Services,
  Manifesto,
  Differentials,
  Process,
} from "@/components/site/Sections";

import { Testimonials, CTA, Footer } from "@/components/site/Testimonials";

const title = "Zentus — Consultoria Estratégica e Créditos Tributários";
const description =
  "A Zentus recupera créditos tributários, reestrutura dívidas e blinda patrimônios. Diagnóstico gratuito e sem compromisso para sua empresa crescer com segurança.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Manifesto />
        <Differentials />

        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
