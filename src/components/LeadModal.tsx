import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from '@formspree/react';

const serviceOptions = [
  { value: "psicoterapia", label: "Psicoterapia Clínica" },
  { value: "avaliacao-psicologica", label: "Avaliação Psicológica" },
  { value: "avaliacao-neuropsicologica", label: "Avaliação Neuropsicológica" },
  { value: "palestras", label: "Palestras" },
  { value: "outro", label: "Outro" },
];

const LeadModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  
  const [state, handleSubmit] = useForm("mlgaprdl");

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Mensagem enviada!",
        description: "Em breve entrarei em contato com você. 💛",
      });
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
      setOpen(false);
    }
  }, [state.succeeded, toast]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Vamos conversar?</DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Deixe seus dados e eu entro em contato para agendarmos.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="lead-name">Nome</Label>
            <Input id="lead-name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" required />
            <ValidationError prefix="Nome" field="name" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-phone">Telefone / WhatsApp</Label>
            <Input id="lead-phone" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(00) 00000-0000" required />
            <ValidationError prefix="Telefone" field="phone" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-email">E-mail</Label>
            <Input id="lead-email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" required />
            <ValidationError prefix="E-mail" field="email" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label>Serviço de interesse</Label>
            <Select name="service" value={service} onValueChange={setService} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <ValidationError prefix="Serviço" field="service" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-message">Mensagem</Label>
            <Textarea
              id="lead-message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Conte um pouco sobre o que você busca..."
              rows={4}
            />
            <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
          </div>
          <Button type="submit" disabled={state.submitting} className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            {state.submitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadModal;
