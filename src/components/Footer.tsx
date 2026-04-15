import { Instagram, Linkedin, GraduationCap } from "lucide-react";
import { SOCIAL_LINKS, FULL_NAME, CRP } from "@/lib/constants";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
      <div>
        <span className="font-serif text-lg font-semibold text-foreground">Psicóloga Dhiulyane Gomes</span>
        <p className="mt-1">{FULL_NAME}</p>
        <p className="mt-0.5">Psicóloga Clínica · Neuropsicóloga · {CRP}</p>
      </div>
      <div className="flex items-center gap-5">
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href={SOCIAL_LINKS.medium} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="Medium">
          <span className="text-base font-bold">M</span>
        </a>
        <a href={SOCIAL_LINKS.lattes} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="Currículo Lattes">
          <GraduationCap className="h-5 w-5" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Psicóloga Dhiulyane Gomes. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
