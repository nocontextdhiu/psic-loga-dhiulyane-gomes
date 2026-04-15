import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Heart, ClipboardCheck, Brain, Mic, ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "@/components/ScrollReveal";
import LeadModal from "@/components/LeadModal";
import { WHATSAPP_URL, CRP, FULL_NAME } from "@/lib/constants";
import heroConcept from "@/assets/hero-concept.jpg";

const services = [
  {
    icon: Heart,
    title: "Psicoterapia Clínica",
    description: "Escuta acolhedora que considera sua história, seus afetos, sua cultura e tudo que te constitui.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação Psicológica",
    description: "Avaliação cuidadosa e tecnicamente qualificada para concursos, processos seletivos e autoconhecimento.",
  },
  {
    icon: Brain,
    title: "Avaliação Neuropsicológica",
    description: "Investigação aprofundada de aspectos cognitivos, emocionais e comportamentais.",
  },
  {
    icon: Mic,
    title: "Palestras",
    description: "Formações sobre psicologia, saúde mental, cultura, raça, negritude e subjetividade.",
  },
];

const Home = () => (
  <>
    <div className="fixed top-0 left-0 w-full z-[9999] bg-red-500 text-white text-center py-2 font-bold pointer-events-none">TESTE HOME REAL</div>
    {/* Hero */}
    <section className="flex min-h-[calc(100vh-72px)] items-center">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Psicóloga Clínica · Neuropsicóloga
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Existe cuidado que começa quando alguém, enfim, te escuta de verdade.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Psicologia clínica com profundidade, acolhimento e identidade. Atendimento online para qualquer lugar do mundo e presencial sob agendamento.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4 text-primary" />
            <span>Atendimento online para qualquer lugar do mundo</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <MessageCircle className="mr-2 h-5 w-5" /> Agende pelo WhatsApp
              </Button>
            </a>
            <LeadModal>
              <Button size="lg" variant="outline" className="rounded-full">
                Quero ser contatada
              </Button>
            </LeadModal>
            <span className="text-sm text-muted-foreground">{CRP}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={heroConcept}
            alt="Fotografia conceitual com tons terrosos"
            className="aspect-[3/4] w-full max-w-sm rounded-2xl object-cover"
            width={768}
            height={1024}
          />
        </div>
      </div>
    </section>

    {/* Seção Poética — estilo editorial/Reinserir */}
    <section className="relative overflow-hidden bg-secondary py-24 md:py-36">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="h-px w-16 bg-secondary-foreground/20" />
          <blockquote className="text-center font-serif text-3xl italic leading-relaxed text-secondary-foreground md:text-4xl lg:text-5xl">
            "Permita que eu fale, não as minhas cicatrizes"
          </blockquote>
          <div className="h-px w-16 bg-secondary-foreground/20" />
          <cite className="text-sm font-medium not-italic tracking-widest uppercase text-secondary-foreground/60">
            Emicida — AmarElo
          </cite>
        </div>
      </div>
    </section>

    {/* Serviços resumidos */}
    <Section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Como posso te ajudar</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Cada serviço é pensado com cuidado, responsabilidade técnica e uma escuta que te acolhe de verdade.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="border-border/50 bg-card transition-shadow duration-300 hover:shadow-md">
              <CardContent className="p-8">
                <service.icon className="mb-4 h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">{service.description}</p>
                <Link to="/servicos" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>

    {/* Para Quem */}
    <Section className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Para quem é meu trabalho</h2>
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            Se você é uma pessoa preta ou parda que busca um espaço de escuta onde se sinta verdadeiramente compreendida. Se você procura autoconhecimento emocional e cultural, cuidado em saúde mental com profundidade e identidade — meu consultório é para você.
          </p>
          <p>
            Se você busca avaliação psicológica ou neuropsicológica com seriedade técnica e acolhimento, também posso te ajudar.
          </p>
          <p>
            Se você é uma instituição, escola ou universidade interessada em palestras sobre psicologia, raça, cultura e subjetividade — entre em contato.
          </p>
        </div>
      </div>
    </Section>

    {/* CTA */}
    <Section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Cuidar de si é um ato de coragem e de amor.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Se algo aqui fez sentido para você, me chama. O primeiro passo pode ser uma mensagem.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-primary px-10 text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="mr-2 h-5 w-5" /> Falar pelo WhatsApp
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

export default Home;
