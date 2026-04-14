import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Section from "@/components/ScrollReveal";
import LeadModal from "@/components/LeadModal";
import { WHATSAPP_URL, CRP } from "@/lib/constants";

const Home = () => (
  <>
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
            Psicologia clínica com profundidade, acolhimento e identidade. Atendimento online e presencial.
          </p>
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
          <div className="aspect-[3/4] w-full max-w-sm rounded-2xl bg-accent" />
        </div>
      </div>
    </section>

    {/* Seção Poética */}
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <blockquote className="font-serif-display text-2xl italic leading-relaxed text-secondary-foreground md:text-3xl">
          "Permita que eu fale, não as minhas cicatrizes"
        </blockquote>
        <cite className="mt-6 block text-sm font-medium not-italic tracking-wide text-secondary-foreground/70">
          — Emicida, AmarElo
        </cite>
      </div>
    </section>

    {/* Para Quem */}
    <Section className="py-24 md:py-32">
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
    <Section className="bg-card py-24 md:py-32">
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
