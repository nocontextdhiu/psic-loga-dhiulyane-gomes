import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { MessageCircle, Brain, ClipboardCheck, Mic, Heart, Monitor, MapPin, ArrowRight, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5553991137734?text=Olá! Gostaria de saber mais sobre os seus serviços.";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in");
          el.classList.remove("opacity-0");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useScrollReveal();
  return (
    <section id={id} ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </section>
  );
};

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

const steps = [
  { number: "01", title: "Entre em contato", description: "Envie uma mensagem pelo WhatsApp. Sem burocracia, sem formulários longos." },
  { number: "02", title: "Conversa inicial", description: "Entendemos juntas o que você busca e como posso te acompanhar." },
  { number: "03", title: "Agendamento", description: "Escolhemos o melhor formato — online ou presencial — e começamos." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 z-40 w-full bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-serif text-xl font-semibold text-foreground">Dhiu</span>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#sobre" className="transition-colors hover:text-foreground">Sobre</a>
            <a href="#servicos" className="transition-colors hover:text-foreground">Serviços</a>
            <a href="#como-funciona" className="transition-colors hover:text-foreground">Como funciona</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen items-center pt-20">
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
              <span className="text-sm text-muted-foreground">CRP 07/41202</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="aspect-[3/4] w-full max-w-sm rounded-2xl bg-accent" />
          </div>
        </div>
      </section>

      {/* Quem Sou */}
      <Section id="sobre" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="flex justify-center md:order-first">
            <div className="aspect-square w-full max-w-sm rounded-2xl bg-accent" />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Quem sou eu</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou psicóloga clínica e neuropsicóloga, e meu trabalho nasce do encontro entre escuta, cultura e profundidade. Acredito que o cuidado em saúde mental precisa considerar quem você é por inteiro — sua história, seus afetos, sua cor, seus pertencimentos.
              </p>
              <p>
                Minha atuação articula <em className="font-serif-display">psicologia, negritude, cultura e escrita</em>. Tenho experiência em redação cultural e acadêmica com foco na população negra, e isso atravessa diretamente a forma como penso a clínica e a escuta.
              </p>
              <p>
                Não sou uma psicóloga genérica. Sou uma profissional humana, sensível, firme e comprometida com um cuidado que faz sentido — ético, contextualizado e tecnicamente qualificado.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Serviços */}
      <Section id="servicos" className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Como posso te ajudar</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Cada serviço é pensado com cuidado, responsabilidade técnica e uma escuta que te acolhe de verdade.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="border-border/50 bg-background transition-shadow duration-300 hover:shadow-md">
                <CardContent className="p-8">
                  <service.icon className="mb-4 h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">{service.title}</h3>
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

      {/* Como Funciona */}
      <Section id="como-funciona" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Como funciona</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Minha prioridade é o <strong>atendimento online</strong>, para que você tenha acesso ao cuidado de onde estiver. Também realizo atendimentos presenciais, mediante agendamento prévio.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center md:text-left">
                <span className="font-serif text-4xl font-bold text-primary/30">{step.number}</span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
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

      {/* Seção Poética */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <blockquote className="font-serif-display text-2xl italic leading-relaxed text-secondary-foreground md:text-3xl">
            "É preciso ter força, é preciso ter raça, é preciso ter gana sempre"
          </blockquote>
          <cite className="mt-6 block text-sm font-medium not-italic tracking-wide text-secondary-foreground/70">
            — Emicida, Levanta e Anda
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
              Se você é uma instituição, escola ou universidade interessada em palestras sobre psicologia, raça, cultura e subjetividade — entre em contato. Vai ser um prazer conversar.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section id="contato" className="bg-card py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Cuidar de si é um ato de coragem e de amor.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Se algo aqui fez sentido para você, me chama. O primeiro passo pode ser uma mensagem.
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

      {/* Rodapé */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
          <div>
            <span className="font-serif text-lg font-semibold text-foreground">Dhiu</span>
            <p className="mt-1">Psicóloga Clínica · Neuropsicóloga · CRP 07/41202</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/psi.dhiu" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://medium.com/@psi.dhiu" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="Medium">
              <span className="text-base font-bold">M</span>
            </a>
          </div>
          <p>© {new Date().getFullYear()} Dhiu Psicologia. Todos os direitos reservados.</p>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
};

export default Index;
