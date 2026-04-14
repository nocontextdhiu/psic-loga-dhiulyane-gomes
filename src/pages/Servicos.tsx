import { Card, CardContent } from "@/components/ui/card";
import { Heart, ClipboardCheck, Brain, Mic, ArrowRight } from "lucide-react";
import Section from "@/components/ScrollReveal";
import LeadModal from "@/components/LeadModal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";

const services = [
  {
    icon: Heart,
    title: "Atendimento Clínico",
    description:
      "Escuta acolhedora e contextualizada, que considera sua história, seus afetos, sua cultura e tudo aquilo que te constitui. Um espaço seguro para elaborar, compreender e cuidar.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação Psicológica",
    description:
      "Avaliação cuidadosa e tecnicamente qualificada para concursos, processos seletivos, autoconhecimento e encaminhamentos profissionais.",
  },
  {
    icon: Brain,
    title: "Avaliação Neuropsicológica",
    description:
      "Investigação aprofundada de aspectos cognitivos, emocionais e comportamentais, com responsabilidade técnica e escuta sensível.",
  },
  {
    icon: Mic,
    title: "Palestras",
    description:
      "Conversas e formações sobre psicologia, saúde mental, cultura, raça, negritude e subjetividade. Aberta a convites institucionais, acadêmicos e comunitários.",
  },
];

const Servicos = () => (
  <>
    <Section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Como posso te ajudar</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Cada serviço é pensado com cuidado, responsabilidade técnica e uma escuta que te acolhe de verdade.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="border-border/50 bg-card transition-shadow duration-300 hover:shadow-md">
              <CardContent className="p-8">
                <service.icon className="mb-4 h-8 w-8 text-primary" strokeWidth={1.5} />
                <h2 className="mb-3 font-serif text-xl font-semibold text-foreground">{service.title}</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">{service.description}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>

    <Section className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Quer saber qual serviço é ideal para você?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Me conta o que você precisa e eu te ajudo a encontrar o melhor caminho.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-primary px-10 text-primary-foreground hover:bg-primary/90">
              Falar pelo WhatsApp
            </Button>
          </a>
          <LeadModal>
            <Button size="lg" variant="outline" className="rounded-full px-10">
              Deixar meus dados
            </Button>
          </LeadModal>
        </div>
      </div>
    </Section>
  </>
);

export default Servicos;
