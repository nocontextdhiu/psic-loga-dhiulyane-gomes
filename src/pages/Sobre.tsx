import Section from "@/components/ScrollReveal";
import { FULL_NAME, SOCIAL_LINKS } from "@/lib/constants";
import { Linkedin, GraduationCap } from "lucide-react";
import dhiuFoto from "@/assets/dhiu-foto.jpg";
import aboutConcept from "@/assets/about-concept.png";

const Sobre = () => (
  <>
    {/* Hero com imagem de fundo */}
    <section
      className="relative flex items-center justify-center py-32 md:py-44"
      style={{ backgroundImage: `url(${aboutConcept})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-serif text-3xl font-semibold text-foreground md:text-5xl">Quem sou eu</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-lg">
          Psicóloga clínica, neuropsicóloga e pesquisadora — comprometida com um cuidado que faz sentido.
        </p>
      </div>
    </section>

    <Section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="flex justify-center">
          <img
            src={dhiuFoto}
            alt={FULL_NAME}
            className="aspect-square w-full max-w-sm rounded-2xl object-cover"
            loading="lazy"
            width={800}
            height={800}
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {FULL_NAME}
          </p>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Mais conhecida como Dhiu, sou psicóloga clínica e mestranda em Psicologia na Universidade Federal do Rio Grande (FURG), pós-graduada em Neuropsicologia e pós-graduanda em Avaliação Psicológica e Psicodiagnóstico, além de aspirante a cientista e pesquisadora.
            </p>
            <p>
              Filha e neta de professoras negras, aprendi cedo a valorizar o cuidado, o afeto e a empatia nas relações humanas, especialmente com populações vulneráveis. É a partir daí que surge meu sonho de contribuir significativamente com a psicologia brasileira, principalmente no que diz respeito à produção científica sobre questões de raça e saúde mental.
            </p>
            <p>
              Minha atuação articula <em className="font-serif">psicologia, negritude, cultura e escrita</em>. Amante da escrita desde cedo, iniciei minha carreira com fanfics e tive a oportunidade de trabalhar voluntariamente como redatora — sempre com espaço para crescer ainda mais. Aprecio especialmente a criação de conteúdo voltada para e sobre a comunidade negra, principalmente quando se trata de música.
            </p>
            <p>
              Não sou uma psicóloga genérica. Sou uma profissional humana, sensível, firme e comprometida com um cuidado que faz sentido — ético, contextualizado e tecnicamente qualificado.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* Seção Poética — estilo editorial */}
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

    <Section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl text-center mb-12">
          Formação e trajetória
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="border-l-2 border-primary/30 pl-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">Psicologia Clínica</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Atendimento individual com abordagem que integra cultura, identidade racial e subjetividade. Um espaço seguro para elaborar dores, fortalecer a autoestima e construir novos caminhos com profundidade e acolhimento.
              </p>
            </div>
            <div className="border-l-2 border-primary/30 pl-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">Mestrado em Psicologia — FURG</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Mestranda na Universidade Federal do Rio Grande, com pesquisa voltada para questões de raça, saúde mental e subjetividade, contribuindo para a produção científica brasileira nesse campo.
              </p>
            </div>
            <div className="border-l-2 border-primary/30 pl-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">Pós-graduação em Neuropsicologia</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Pós-graduada em Neuropsicologia, com foco em avaliação neuropsicológica que combina rigor técnico, sensibilidade clínica e atenção às particularidades de cada pessoa avaliada.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-primary/30 pl-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">Avaliação Psicológica e Psicodiagnóstico</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Pós-graduanda em Avaliação Psicológica e Psicodiagnóstico, capacitada para conduzir processos avaliativos com responsabilidade ética e técnica.
              </p>
            </div>
            <div className="border-l-2 border-primary/30 pl-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">Pesquisa e Divulgação Científica</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Apaixonada pela ciência, tenho experiência como bolsista de iniciação científica durante 1 ano e atuei como divulgadora científica durante 3 anos, além de experiências paralelas em pesquisa acadêmica.
              </p>
            </div>
            <div className="border-l-2 border-primary/30 pl-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">Experiência em Recursos Humanos</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Aproximadamente 2 anos de experiência na área de Recursos Humanos, estagiando em duas grandes empresas: Terminal Marítimo Luiz Fogliatto (TERMASA) e Supermercados Guanabara.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href={SOCIAL_LINKS.lattes} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30">
            <GraduationCap className="h-4 w-4" /> Currículo Lattes
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </Section>
  </>
);

export default Sobre;
