import { Monitor, MapPin, MessageCircle } from "lucide-react";
import Section from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

const steps = [
  { number: "01", title: "Entre em contato", description: "Envie uma mensagem pelo WhatsApp. Sem burocracia, sem formulários longos." },
  { number: "02", title: "Conversa inicial", description: "Entendemos juntas o que você busca e como posso te acompanhar." },
  { number: "03", title: "Agendamento", description: "Escolhemos o melhor formato — online ou presencial — e começamos." },
];

const ComoFunciona = () => (
  <>
    <Section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Como funciona</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Minha prioridade é o <strong>atendimento online</strong>, para que você tenha acesso ao cuidado de onde estiver. Também realizo atendimentos presenciais, mediante agendamento prévio.
          </p>
        </div>
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
          <span className="flex items-center gap-2"><Monitor className="h-5 w-5 text-primary" /> Online — de qualquer lugar</span>
          <span className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Presencial — sob agendamento</span>
        </div>
      </div>
    </Section>

    <Section className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Pronta para começar?
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
