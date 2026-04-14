import { MessageCircle, Instagram, Linkedin, GraduationCap } from "lucide-react";
import Section from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import LeadModal from "@/components/LeadModal";
import { WHATSAPP_URL, SOCIAL_LINKS, CRP, FULL_NAME } from "@/lib/constants";

const Contato = () => (
  <>
    <Section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Contato</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Quer agendar uma sessão, tirar dúvidas ou fazer um convite? Escolha o canal que preferir.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* WhatsApp */}
          <div className="rounded-2xl bg-card p-8 text-center border border-border/50">
            <MessageCircle className="mx-auto h-10 w-10 text-primary mb-4" />
            <h2 className="font-serif text-xl font-semibold text-foreground">WhatsApp</h2>
            <p className="mt-2 text-muted-foreground">A forma mais rápida de falar comigo.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <MessageCircle className="mr-2 h-4 w-4" /> Enviar mensagem
              </Button>
            </a>
          </div>

          {/* Lead form */}
          <div className="rounded-2xl bg-card p-8 text-center border border-border/50">
            <div className="mx-auto h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary font-serif font-bold text-lg">@</span>
            </div>
            <h2 className="font-serif text-xl font-semibold text-foreground">Deixe seus dados</h2>
            <p className="mt-2 text-muted-foreground">Eu entro em contato com você.</p>
            <LeadModal>
              <Button variant="outline" className="mt-6 rounded-full">
                Preencher formulário
              </Button>
            </LeadModal>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-16 text-center">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-6">Me encontre também em</h2>
          <div className="flex justify-center gap-6">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <Instagram className="h-6 w-6" />
              <span className="text-xs">Instagram</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <Linkedin className="h-6 w-6" />
              <span className="text-xs">LinkedIn</span>
            </a>
            <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <span className="text-lg font-bold">M</span>
              <span className="text-xs">Medium</span>
            </a>
            <a href={SOCIAL_LINKS.lattes} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
              <GraduationCap className="h-6 w-6" />
              <span className="text-xs">Lattes</span>
            </a>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">{FULL_NAME}</p>
          <p>Psicóloga Clínica · Neuropsicóloga · {CRP}</p>
        </div>
      </div>
    </Section>
  </>
);

export default Contato;
