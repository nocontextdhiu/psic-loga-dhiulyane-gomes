import { MessageCircle, Instagram, Linkedin, GraduationCap, Mail, MapPin, Globe } from "lucide-react";
import Section from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, SOCIAL_LINKS, CRP, FULL_NAME, EMAIL_ADDRESS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const Contato = () => {
  return (
    <>
      <Section className="py-24 md:py-32" onReveal={() => trackEvent("view_contact_section")}>
        <div className="mx-auto max-w-4xl px-6">
          {/* Cabeçalho */}
          <div className="mb-16 text-center">
            <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Contato</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              O cuidado com a sua saúde mental pode começar com uma simples mensagem. Sinta-se à vontade para agendar uma consulta, tirar dúvidas ou enviar um convite para palestras no canal que preferir.
            </p>
          </div>

          {/* Opções de Contato Direto */}
          <div className="grid gap-6 md:grid-cols-2 mb-16">
            <div className="rounded-2xl bg-card p-10 text-center border border-border/50 flex flex-col items-center justify-between transition-colors hover:border-primary/20 hover:shadow-sm">
              <div>
                <MessageCircle className="mx-auto h-10 w-10 text-primary mb-5" strokeWidth={1.5} />
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">WhatsApp</h2>
                <p className="text-muted-foreground mb-8">
                  A forma mais rápida e direta de conversar comigo e realizar o seu agendamento.
                </p>
              </div>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full"
                onClick={() => trackEvent("click_whatsapp", { button_location: "contact_page", cta_type: "primary" })}
              >
                <Button size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <MessageCircle className="mr-2 h-5 w-5" /> Enviar mensagem
                </Button>
              </a>
            </div>

            <div className="rounded-2xl bg-card p-10 text-center border border-border/50 flex flex-col items-center justify-between transition-colors hover:border-primary/20 hover:shadow-sm">
              <div>
                <Mail className="mx-auto h-10 w-10 text-primary mb-5" strokeWidth={1.5} />
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">E-mail</h2>
                <p className="text-muted-foreground mb-8">
                  Prefere escrever um e-mail? Fique à vontade para me enviar suas dúvidas ou propostas por aqui.
                </p>
              </div>
              <a 
                href={`mailto:${EMAIL_ADDRESS}`} 
                className="w-full"
                onClick={() => trackEvent("click_email", { button_location: "contact_page", cta_type: "secondary" })}
              >
                <Button size="lg" variant="outline" className="w-full rounded-full">
                  <Mail className="mr-2 h-5 w-5" /> Escrever um e-mail
                </Button>
              </a>
            </div>
          </div>

          {/* Modalidade de atendimento */}
          <div className="rounded-2xl bg-secondary/30 p-10 text-center border border-border/50 mb-16">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-8">Modalidades de Atendimento</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 text-muted-foreground">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center bg-background rounded-full border border-border/50 shadow-sm text-primary">
                  <Globe className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <span className="font-medium text-foreground">Online</span>
                <span className="text-sm">Para qualquer lugar do mundo</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center bg-background rounded-full border border-border/50 shadow-sm text-primary">
                  <MapPin className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <span className="font-medium text-foreground">Presencial</span>
                <span className="text-sm">Em Rio Grande, RS, mediante agendamento</span>
              </div>
            </div>
          </div>

          {/* Socials & Info */}
          <div className="rounded-2xl bg-card p-10 text-center border border-border/50">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-8">Me encontre também em</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center gap-2 text-muted-foreground transition-all hover:text-primary hover:-translate-y-1"
                onClick={() => trackEvent("click_instagram", { button_location: "contact_page" })}
              >
                <Instagram className="h-6 w-6" />
                <span className="text-xs font-medium uppercase tracking-wider">Instagram</span>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground transition-all hover:text-primary hover:-translate-y-1">
                <Linkedin className="h-6 w-6" />
                <span className="text-xs font-medium uppercase tracking-wider">LinkedIn</span>
              </a>
              <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground transition-all hover:text-primary hover:-translate-y-1">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="text-[1.35rem] font-medium font-serif leading-none mt-[0.1rem]">M</span>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider">Medium</span>
              </a>
              <a href={SOCIAL_LINKS.lattes} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground transition-all hover:text-primary hover:-translate-y-1">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xs font-medium uppercase tracking-wider">Lattes</span>
              </a>
            </div>

            <div className="max-w-md mx-auto pt-8 border-t border-border/50 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground md:text-base mb-1">{FULL_NAME}</p>
              <p>Psicóloga Clínica · Neuropsicóloga</p>
              <p className="mt-1">{CRP}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contato;
