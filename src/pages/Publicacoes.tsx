import { ExternalLink } from "lucide-react";
import Section from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SOCIAL_LINKS } from "@/lib/constants";

const Publicacoes = () => (
  <>
    <Section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Publicações</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Textos, reflexões e produções sobre psicologia, negritude, cultura e subjetividade.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="border-border/50 bg-card transition-shadow duration-300 hover:shadow-md">
            <CardContent className="p-8">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Medium</span>
              <h2 className="mt-3 font-serif text-xl font-semibold text-foreground">Artigos e reflexões</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Textos sobre psicologia, raça, cultura e saúde mental publicados no Medium.
              </p>
              <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                Ler no Medium <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card transition-shadow duration-300 hover:shadow-md">
            <CardContent className="p-8">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Lattes</span>
              <h2 className="mt-3 font-serif text-xl font-semibold text-foreground">Currículo acadêmico</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Trajetória acadêmica, formações e produções científicas na Plataforma Lattes.
              </p>
              <a href={SOCIAL_LINKS.lattes} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                Ver Lattes <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card transition-shadow duration-300 hover:shadow-md sm:col-span-2">
            <CardContent className="p-8">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Instagram</span>
              <h2 className="mt-3 font-serif text-xl font-semibold text-foreground">Conteúdos e reflexões</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Acompanhe conteúdos sobre psicologia, negritude e cuidado no Instagram @psi.dhiu.
              </p>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                Seguir no Instagram <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  </>
);

export default Publicacoes;
