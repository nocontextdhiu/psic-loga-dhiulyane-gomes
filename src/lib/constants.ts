export const WHATSAPP_NUMBER = "5553991137734";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os seus serviços.")}`;

export const getWhatsAppUrl = (serviceName?: string) => {
  const message = serviceName
    ? `Olá! Gostaria de saber mais sobre: ${serviceName}.`
    : "Olá! Gostaria de saber mais sobre os seus serviços.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/psi.dhiu/",
  linkedin: "https://www.linkedin.com/in/dhiulyane-farias-gomes-fuentes-a2a3b520a/",
  medium: "https://medium.com/@dhiulyane",
  lattes: "http://lattes.cnpq.br/0938310483660368",
};

export const EMAIL_ADDRESS = "dhiulyane@gmail.com";

export const FULL_NAME = "Dhiulyane Farias Gomes Fuentes";
export const CRP = "CRP 07/41202";
