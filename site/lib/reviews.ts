// PLACEHOLDER testimonials for layout/dev only — replace with real first-party reviews
// (and the Places API sync) before launch. Because these are placeholders, Review/AggregateRating
// schema is intentionally NOT emitted (see docs/03 §3 — first-party reviews only).

export interface Testimonial {
  name: string;
  area: string;
  service: string; // service slug
  rating: number;
  text: string;
  placeholder: true;
}

export const testimonials: Testimonial[] = [
  { name: "Marta S.", area: "Alvalade", service: "abertura-de-portas", rating: 5, placeholder: true, text: "Porta bateu com as chaves dentro às 23h. Chegaram em 25 minutos e abriram sem qualquer dano. Preço exatamente como disseram ao telefone." },
  { name: "João P.", area: "Benfica", service: "mudanca-de-canhao", rating: 5, placeholder: true, text: "Mudei de casa e trocaram os dois canhões em meia hora. Explicaram as opções sem empurrar a mais cara. Recomendo." },
  { name: "Sophie L.", area: "Baixa-Chiado", service: "abertura-de-portas", rating: 5, placeholder: true, text: "Locked out of our Airbnb at midnight. They answered on WhatsApp in English, arrived in 20 minutes and sorted everything. Lifesavers!" },
  { name: "Ricardo M.", area: "Parque das Nações", service: "fechaduras-inteligentes", rating: 5, placeholder: true, text: "Instalaram uma fechadura inteligente no meu AL. Agora envio códigos aos hóspedes e acabaram-se as entregas de chaves. Serviço impecável." },
  { name: "Ana C.", area: "Cascais", service: "reforco-de-seguranca", rating: 5, placeholder: true, text: "Depois de um assalto no prédio, reforçaram a porta com canhão anti-snap e escudo. Vieram no próprio dia e deixaram tudo explicado." },
  { name: "Miguel T.", area: "Arroios", service: "carro-trancado", rating: 5, placeholder: true, text: "Chave fechada no carro à hora de almoço. 20 minutos depois estava resolvido, sem uma marca na porta. Fatura na hora por email." },
];
