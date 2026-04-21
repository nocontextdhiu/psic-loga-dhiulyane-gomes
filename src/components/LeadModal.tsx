import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  { value: "psicoterapia", label: "Psicoterapia Clínica" },
  { value: "avaliacao-psicologica", label: "Avaliação Psicológica" },
  { value: "avaliacao-neuropsicologica", label: "Avaliação Neuropsicológica" },
  { value: "palestras", label: "Palestras" },
  { value: "outro", label: "Outro" },
];

const LeadModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState("");
  const [debugLogs, setDebugLogs] = useState<string[]>([]);
  
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const addLog = (msg: string) => {
    console.log(msg);
    setDebugLogs(prev => [...prev, msg]);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDebugLogs([]); // Limpa logs anteriores
    addLog("SUBMIT DISPAROU");
    addLog(`SERVICE: "${service}"`);

    if (!service) {
      addLog("VALIDAÇÃO BLOQUEOU: service vazio");
      toast({ 
        title: "Selecione um serviço", 
        description: "Por favor, selecione qual serviço você tem interesse.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.set("service", service);

    try {
      addLog("FETCH VAI RODAR AGORA");
      const response = await fetch("https://formspree.io/f/mlgaprdl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      addLog(`HTTP STATUS: ${response.status}`);

      if (response.ok) {
        addLog("MOSTRANDO SUCESSO");
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entrarei em contato assim que possível. 💛",
        });
        formRef.current?.reset();
        setService("");
        setOpen(false);
      } else {
        const errorData = await response.json().catch(() => null);
        addLog(`ERRO DE API (Formspree devolveu dados): ${JSON.stringify(errorData)}`);
        let errorMsg = "Não foi possível enviar sua mensagem.";
        if (errorData?.errors?.length > 0) {
          errorMsg = errorData.errors.map((err: any) => err.message).join(", ");
        }
        toast({ title: "Erro no servidor", description: errorMsg, variant: "destructive" });
      }
    } catch (error) {
      addLog(`ERRO CRITICO (Falha no Fetch): ${String(error)}`);
      console.error(error);
      toast({ 
        title: "Falha na submissão", 
        description: "Verifique sua conexão com a internet e tente novamente.", 
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form ref={formRef} onSubmit={onSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="lead-name">Nome</Label>
            <Input id="lead-name" name="name" placeholder="Seu nome completo" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-phone">Telefone / WhatsApp</Label>
            <Input id="lead-phone" name="phone" type="tel" placeholder="(00) 00000-0000" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-email">E-mail</Label>
            <Input id="lead-email" name="email" type="email" placeholder="seu@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-service">Serviço de interesse</Label>
            <input type="hidden" name="service" id="lead-service" value={service} />
            <Select value={service} onValueChange={setService}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um serviço..." />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-message">Mensagem</Label>
            <Textarea
              id="lead-message"
              name="message"
              placeholder="Conte um pouco sobre o que você busca..."
              rows={4}
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </Button>

          {/* Painel visual temporário de debug */}
          {debugLogs.length > 0 && (
            <div className="mt-4 p-3 bg-zinc-950 text-emerald-400 text-xs font-mono rounded-md border border-zinc-800 space-y-1 max-h-32 overflow-y-auto">
              <strong className="text-zinc-400 block mb-2">DEBUG LOGS:</strong>
              {debugLogs.map((log, i) => (
                <div key={i}>&gt; {log}</div>
              ))}
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadModal;
