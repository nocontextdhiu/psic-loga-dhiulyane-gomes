import { Card, CardContent } from "@/components/ui/card";
import { Heart, ClipboardCheck, Brain, Mic, ArrowRight } from "lucide-react";
import Section from "@/components/ScrollReveal";
import LeadModal from "@/components/LeadModal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/constants";
import servicesConcept from "@/assets/services-concept.png";

const services = [
  {
    icon: Heart,
    title: "Psicoterapia Clínica",
    description:
      "A psicoterapia é um processo de escuta profunda e acolhedora, onde você pode falar sobre o que sente, pensa e vive — sem julgamento. Meu trabalho como psicóloga clínica é contextualizado: considero sua história, seus afetos, sua cor, sua cultura e tudo aquilo que te constitui como pessoa. Trabalho com questões como ansiedade, depressão, autoestima, luto, conflitos relacionais, identidade racial e autoconhecimento. Cada sessão é um espaço seguro para elaborar, compreender e cuidar — no seu tempo, com profundidade e respeito.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação Psicológica",
    description:
      "A avaliação psicológica é um processo técnico e criterioso que utiliza entrevistas, testes psicológicos e observação clínica para compreender aspectos da sua personalidade, cognição e estado emocional. É indicada para concursos públicos, processos seletivos, obtenção ou renovação de porte de arma, cirurgia bariátrica, autoconhecimento e encaminhamentos profissionais. Realizo cada avaliação com responsabilidade ética, rigor científico e sensibilidade humana, produzindo laudos e pareceres fundamentados e acessíveis.",
  },
  {
    icon: Brain,
    title: "Avaliação Neuropsicológica",
    description:
      "A avaliação neuropsicológica investiga de forma aprofundada as funções cognitivas — como memória, atenção, linguagem, raciocínio e funções executivas — além de aspectos emocionais e comportamentais. É indicada para diagnóstico diferencial de transtornos como TDAH, TEA, dislexia, demências, entre outros. Como pós-graduada em Neuropsicologia, conduzo cada avaliação com rigor técnico, instrumentos validados e uma escuta sensível ao contexto de vida de cada pessoa, gerando relatórios completos e orientações práticas.",
  },
  {
    icon: Mic,
    title: "Palestras e Formações",
    description:
      "Ofereço palestras, rodas de conversa e formações sobre temas que atravessam minha prática e minha pesquisa: psicologia, saúde mental, negritude, cultura, racismo, identidade e subjetividade. Estou aberta a convites de instituições, escolas, universidades, empresas e comunidades que queiram ampliar o diálogo sobre cuidado em saúde mental de forma contextualizada e culturalmente sensível. Cada fala é preparada com carinho, profundidade e acessibilidade.",
  },
];

const Servicos = () => (
  <>
    {/* Hero com imagem de fundo */}
    <section
      className="relative flex items-center justify-center py-32 md:py-44"
      style={{ backgroundImage: `url(${servicesConcept})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-serif text-3xl font-semibold text-foreground md:text-5xl">Como posso te ajudar</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Cada serviço é pensado com cuidado, responsabilidade técnica e uma escuta que te acolhe de verdade.
        </p>
      </div>
    </section>

    <Section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="border-border/50 bg-card transition-shadow duration-300 hover:shadow-md">
              <CardContent className="p-8">
                <service.icon className="mb-4 h-8 w-8 text-primary" strokeWidth={1.5} />
                <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">{service.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                  Agendar <ArrowRight className="h-4 w-4" />
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
