// Transparent price table — the core trust differentiator (docs/01 §2, pillar 1).
// PLACEHOLDER VALUES: final table must be confirmed by the owner before launch.
// Day = 08:00–21:00 · Night = 21:00–08:00 · Weekend/holidays column applies all day.

export interface PriceRow {
  service: string; // service slug (links the row to its page)
  label: string;
  day: number;
  night: number;
  weekend: number;
  note?: string;
}

export const priceRows: PriceRow[] = [
  { service: "abertura-de-portas", label: "Abertura de porta comum (sem danos)", day: 59, night: 79, weekend: 79 },
  { service: "abertura-de-portas", label: "Abertura de porta blindada", day: 89, night: 119, weekend: 119, note: "Confirmado por telefone conforme o modelo" },
  { service: "carro-trancado", label: "Abertura de automóvel", day: 69, night: 89, weekend: 89 },
  { service: "extracao-de-chave-partida", label: "Extração de chave partida", day: 49, night: 69, weekend: 69 },
  { service: "mudanca-de-canhao", label: "Mudança de canhão (mão-de-obra)", day: 39, night: 59, weekend: 59, note: "+ canhão escolhido (desde 15€)" },
  { service: "substituicao-de-fechaduras", label: "Substituição de fechadura (mão-de-obra)", day: 49, night: 69, weekend: 69, note: "+ fechadura escolhida" },
  { service: "reparacao-de-fechaduras", label: "Reparação de fechadura", day: 45, night: 65, weekend: 65 },
  { service: "instalacao-de-fechaduras", label: "Instalação de fechadura nova", day: 49, night: 69, weekend: 69, note: "+ material" },
  { service: "fechaduras-caixa-correio", label: "Fechadura de caixa de correio (com material)", day: 25, night: 40, weekend: 40 },
  { service: "fechaduras-inteligentes", label: "Instalação de fechadura inteligente", day: 89, night: 109, weekend: 109, note: "+ equipamento; orçamento por WhatsApp com foto da porta" },
  { service: "abertura-de-cofres", label: "Abertura de cofre", day: 120, night: 150, weekend: 150, note: "Mediante prova de propriedade" },
  { service: "copia-de-chaves", label: "Cópia de chave comum", day: 8, night: 8, weekend: 8, note: "Na loja / em serviço" },
];

export const priceIncludes = [
  "Deslocação em Lisboa e concelhos limítrofes",
  "Mão-de-obra e ferramentas",
  "IVA à taxa legal",
  "Garantia de 12 meses em peças e mão-de-obra",
  "Fatura certificada com NIF",
];

export const paymentMethods = ["MB Way", "Multibanco", "Cartão (Visa/Mastercard)", "Dinheiro", "Transferência"];
