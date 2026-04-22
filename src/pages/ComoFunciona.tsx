import { MapPin, MessageCircle, Globe } from "lucide-react";
import Section from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import comoFuncionaConcept from "@/assets/como-funciona-concept.png";

const steps = [
  { number: "01", title: "Entre em contato", description: "Envie uma mensagem pelo WhatsApp. Sem burocracia, sem formulários longos." },
  { number: "02", title: "Conversa inicial", description: "Entendemos o que você busca e como posso te acompanhar." },
  { number: "03", title: "Agendamento", description: "Escolhemos o melhor formato — online ou presencial — e começamos." },
];

const ComoFunciona = () => (
  <>
    {/* Hero com imagem de fundo */}
    <section
      className="relative flex items-center justify-center py-32 md:py-44"
      style={{ backgroundImage: `url(${comoFuncionaConcept})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-serif text-3xl font-semibold text-foreground md:text-5xl">Como funciona</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Realizo atendimentos <strong>online para qualquer lugar do mundo</strong> e também presenciais, mediante agendamento prévio. O importante é que o cuidado chegue até você.
        </p>
      </div>
    </section>

    <Section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              <span className="font-serif text-4xl font-bold text-primary/30">{step.number}</span>
              <h2 className="mt-2 font-serif text-xl font-semibold text-foreground">{step.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Globe className="h-5 w-5 text-primary" /> Online — para qualquer lugar do mundo</span>
          <span className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Presencial — sob agendamento</span>
        </div>
      </div>
    </Section>

    <Section className="bg-card py-16 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Vamos começar?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          O primeiro passo é simples: me manda uma mensagem.
        </p>
        <div className="mt-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-primary px-10 text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="mr-2 h-5 w-5" /> Falar pelo WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </Section>
  </>
);

export default ComoFunciona;
