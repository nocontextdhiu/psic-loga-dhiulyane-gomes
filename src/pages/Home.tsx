import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Heart, ClipboardCheck, Brain, Mic, ArrowRight, Globe, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "@/components/ScrollReveal";
import { WHATSAPP_URL, CRP, FULL_NAME, EMAIL_ADDRESS } from "@/lib/constants";
import heroConcept from "@/assets/hero-concept.png";

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

const faqs = [
  {
    question: "Os atendimentos são online ou presenciais?",
    answer: <>Os atendimentos podem acontecer de forma <strong>online</strong> ou <strong>presencial</strong>, conforme a modalidade mais adequada para cada caso e a disponibilidade de agenda.</>
  },
  {
    question: "Onde acontecem os atendimentos presenciais?",
    answer: <>Os atendimentos presenciais acontecem em <strong>Rio Grande, RS</strong>, mediante agendamento prévio.</>
  },
  {
    question: "Como funciona o agendamento?",
    answer: <>O primeiro contato é feito pelo <strong>WhatsApp</strong>, onde também posso esclarecer pequenas dúvidas iniciais. A partir desse contato, realizamos o agendamento do <strong>acolhimento</strong>, que é a sessão inicial. Nesse primeiro encontro, conversamos sobre a demanda, alinhamos aspectos importantes do processo e apresento o <strong>contrato terapêutico</strong>. A partir daí, damos início ao acompanhamento.</>
  },
  {
    question: "Quais serviços você oferece?",
    answer: <>Atuo com <strong>psicoterapia</strong>, <strong>avaliação psicológica</strong>, <strong>avaliação neuropsicológica</strong> e também com <strong>palestras e atividades formativas</strong>, conforme a proposta e o contexto de cada demanda.</>
  },
  {
    question: "Qual a diferença entre psicoterapia, avaliação psicológica e avaliação neuropsicológica?",
    answer: (
      <div className="space-y-4">
        <p>A <strong>psicoterapia</strong> é um processo de acompanhamento clínico voltado à escuta, ao cuidado com o sofrimento psíquico e à elaboração de questões emocionais, relacionais e subjetivas.</p>
        <p>A <strong>avaliação psicológica</strong> é um processo técnico e estruturado que busca compreender aspectos emocionais, comportamentais, de personalidade e do funcionamento psicológico, de acordo com um objetivo específico. Pode ser indicada, por exemplo, em contextos <strong>clínicos</strong>, <strong>cirúrgicos</strong>, <strong>jurídicos</strong>, <strong>concursais</strong> ou em situações em que seja necessário um parecer técnico mais aprofundado.</p>
        <p>A <strong>avaliação neuropsicológica</strong> é um processo mais específico, voltado à investigação das funções cognitivas e de sua relação com aspectos emocionais e comportamentais. Pode ser indicada quando há queixas relacionadas a <strong>memória</strong>, <strong>atenção</strong>, <strong>concentração</strong>, <strong>aprendizagem</strong>, <strong>linguagem</strong>, <strong>planejamento</strong>, <strong>organização</strong>, ou em casos de hipótese diagnóstica como <strong>TDAH</strong>, <strong>TEA</strong>, <strong>altas habilidades/superdotação</strong>, transtornos cognitivos, dificuldades escolares ou alterações no funcionamento cognitivo ao longo da vida.</p>
      </div>
    )
  },
  {
    question: "Para quem é o atendimento?",
    answer: "O atendimento é voltado a pessoas que buscam um espaço de escuta qualificada, acolhimento e cuidado psicológico, seja para acompanhamento clínico, seja para processos avaliativos."
  },
  {
    question: "Como posso entrar em contato?",
    answer: <>Você pode entrar em contato pelo <strong>WhatsApp</strong> disponível no site. Esse é o canal mais direto para tirar dúvidas, solicitar informações e realizar agendamentos.</>
  },
  {
    question: "Você realiza palestras e formações?",
    answer: <>Sim. Também realizo <strong>palestras, rodas de conversa e atividades formativas</strong>, construídas de acordo com o público, o contexto e os objetivos da proposta.</>
  },
  {
    question: "As palestras podem ser presenciais ou online?",
    answer: <>Sim. As palestras e atividades formativas podem ser realizadas de forma <strong>presencial</strong> ou <strong>online</strong>, conforme a necessidade da instituição, grupo ou evento.</>
  },
  {
    question: "Quais temas podem ser abordados nas palestras?",
    answer: <>Os temas podem ser definidos conforme a proposta da atividade. Entre as possibilidades, estão assuntos relacionados à <strong>saúde mental</strong>, <strong>educação</strong>, <strong>gênero</strong>, <strong>sexualidade</strong>, <strong>diversidade</strong>, <strong>relações étnico-raciais</strong>, <strong>violências</strong>, <strong>processos psicossociais</strong> e outros temas afins à minha atuação.</>
  },
  {
    question: "Como solicitar uma palestra ou atividade formativa?",
    answer: <>O contato pode ser feito pelo <strong>WhatsApp</strong>. A partir disso, alinhamos o tema, o formato, o público, a data e os demais detalhes necessários para a construção da proposta.</>
  }
];

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative flex min-h-[calc(100vh-72px)] overflow-hidden items-center">
      {/* Background soft ambient glows */}
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />
      
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-5 py-8 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-12">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Psicóloga Clínica · Neuropsicóloga
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Existe cuidado que começa quando alguém, enfim, te escuta de verdade.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Psicoterapia e avaliação psicológica conduzidas com rigor técnico e profundidade emocional. Um espaço clínico seguro para acolher sua história e promover saúde mental. Atendimento online e presencial em Rio Grande, RS, sob agendamento.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span>Online para qualquer lugar</span>
            </div>
            <div className="hidden sm:block h-1 w-1 rounded-full bg-border" />
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Presencial em Rio Grande, RS</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <MessageCircle className="mr-2 h-5 w-5" /> Agendar consulta
              </Button>
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`}>
              <Button size="lg" variant="outline" className="rounded-full">
                <Mail className="mr-2 h-5 w-5" /> Enviar E-mail
              </Button>
            </a>
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
    <section className="relative overflow-hidden bg-secondary py-16 md:py-36">
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
    <Section className="relative border-y border-border/40 bg-card/40 py-16 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Como posso te ajudar</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Cada serviço é pensado com cuidado, responsabilidade técnica e uma escuta que te acolhe de verdade.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="group relative overflow-hidden border-primary/5 bg-background/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
              <CardContent className="p-8 md:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary">{service.title}</h3>
                <div className="mb-5 h-px w-10 bg-border transition-all duration-500 group-hover:w-full group-hover:bg-primary/20" />
                <p className="mb-8 leading-relaxed text-muted-foreground">{service.description}</p>
                <Link to="/servicos" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:gap-3 hover:text-primary/80">
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>

    {/* Para Quem */}
    <Section className="bg-card py-16 md:py-32">
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

    {/* FAQ */}
    <Section className="py-16 md:py-32 bg-card/30">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Dúvidas Frequentes</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Como posso te apoiar e como funcionam os atendimentos.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/40 px-2">
              <AccordionTrigger className="text-left font-serif text-[1.1rem] font-medium text-foreground hover:text-primary transition-colors py-5 leading-snug">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 md:pr-12">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>

    {/* CTA */}
    <Section className="py-16 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Cuidar de si é um ato de coragem e de amor.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Se algo aqui fez sentido para você, me chama. O primeiro passo pode ser uma mensagem.
        </p>
        <div className="mt-10 flex flex-col md:flex-row flex-wrap justify-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto rounded-full bg-primary px-10 text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="mr-2 h-5 w-5" /> Falar pelo WhatsApp
            </Button>
          </a>
          <a href={`mailto:${EMAIL_ADDRESS}`} className="w-full md:w-auto">
            <Button size="lg" variant="outline" className="w-full md:w-auto rounded-full px-10">
              <Mail className="mr-2 h-5 w-5" /> Enviar E-mail
            </Button>
          </a>
        </div>
      </div>
    </Section>
  </>
);

export default Home;
