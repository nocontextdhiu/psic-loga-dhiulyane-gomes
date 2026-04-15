import { MessageCircle, Instagram, Linkedin, GraduationCap } from "lucide-react";
import Section from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { WHATSAPP_URL, SOCIAL_LINKS, CRP, FULL_NAME } from "@/lib/constants";

const serviceOptions = [
  { value: "psicoterapia", label: "Psicoterapia Clínica" },
  { value: "avaliacao-psicologica", label: "Avaliação Psicológica" },
  { value: "avaliacao-neuropsicologica", label: "Avaliação Neuropsicológica" },
  { value: "palestras", label: "Palestras" },
  { value: "outro", label: "Outro" },
];

const Contato = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entrarei em contato com você. 💛",
    });
    setName("");
    setPhone("");
    setEmail("");
    setService("");
    setMessage("");
  };

  return (
    <>
      <Section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Contato</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Quer agendar uma sessão, tirar dúvidas ou fazer um convite? Escolha o canal que preferir.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Formulário completo */}
            <div className="rounded-2xl bg-card p-8 border border-border/50">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6">Deixe seus dados</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Nome</Label>
                  <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Telefone / WhatsApp</Label>
                  <Input id="contact-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(00) 00000-0000" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">E-mail</Label>
                  <Input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label>Serviço de interesse</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Mensagem</Label>
                  <Textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte um pouco sobre o que você busca..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Enviar
                </Button>
              </form>
            </div>

            {/* WhatsApp + Social */}
            <div className="space-y-8">
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

              <div className="rounded-2xl bg-card p-8 text-center border border-border/50">
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

              <div className="text-center text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">{FULL_NAME}</p>
                <p>Psicóloga Clínica · Neuropsicóloga · {CRP}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contato;
