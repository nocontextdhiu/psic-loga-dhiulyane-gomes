import Section from "@/components/ScrollReveal";
import { FULL_NAME } from "@/lib/constants";

const Sobre = () => (
  <>
    <Section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="flex justify-center">
          <div className="aspect-square w-full max-w-sm rounded-2xl bg-accent" />
        </div>
        <div className="space-y-6">
          <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Quem sou eu
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {FULL_NAME}
          </p>
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

    <Section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl text-center mb-12">
          Formação e trajetória
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <div className="border-l-2 border-primary/30 pl-6">
            <h3 className="font-serif text-lg font-semibold text-foreground">Psicologia Clínica</h3>
            <p>Atendimento individual com abordagem que integra cultura, identidade racial e subjetividade.</p>
          </div>
          <div className="border-l-2 border-primary/30 pl-6">
            <h3 className="font-serif text-lg font-semibold text-foreground">Neuropsicologia</h3>
            <p>Avaliação neuropsicológica com rigor técnico e sensibilidade clínica.</p>
          </div>
          <div className="border-l-2 border-primary/30 pl-6">
            <h3 className="font-serif text-lg font-semibold text-foreground">Redação Cultural e Acadêmica</h3>
            <p>Experiência em escrita com foco na população negra, articulando cultura, raça e subjetividade.</p>
          </div>
        </div>
      </div>
    </Section>
  </>
);

export default Sobre;
