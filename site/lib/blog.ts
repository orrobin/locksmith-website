// Seed blog content (Phase 2: migrate to Payload CMS `BlogPost` collection).
// Categories per docs/02 §1.1; each post links to service pages (internal-linking rule docs/03 §8).

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  body: { heading?: string; paragraphs: string[] }[];
  relatedServices: string[]; // service slugs
}

export const categories = [
  { slug: "seguranca-domestica", name: "Segurança Doméstica" },
  { slug: "manutencao-de-fechaduras", name: "Manutenção de Fechaduras" },
  { slug: "dicas-de-emergencia", name: "Dicas de Emergência" },
  { slug: "seguranca-automovel", name: "Segurança Automóvel" },
  { slug: "seguranca-comercial", name: "Segurança Comercial" },
  { slug: "fechaduras-inteligentes", name: "Fechaduras Inteligentes" },
  { slug: "seguranca-em-viagem", name: "Segurança em Viagem" },
  { slug: "noticias", name: "Notícias de Segurança" },
  { slug: "guias-de-compra", name: "Guias de Compra" },
];

export const posts: BlogPost[] = [
  {
    slug: "porta-trancada-o-que-fazer",
    title: "Porta trancada e sem chave? O que fazer (e o que nunca fazer)",
    category: "Dicas de Emergência",
    categorySlug: "dicas-de-emergencia",
    excerpt: "Ficou trancado fora de casa? Antes de forçar a porta ou chamar o primeiro anúncio que aparecer, leia estes 5 passos — podem poupar-lhe centenas de euros.",
    date: "2026-07-01",
    author: "Equipa Chaveiro Express",
    relatedServices: ["abertura-de-portas", "extracao-de-chave-partida"],
    body: [
      {
        paragraphs: [
          "Acontece a toda a gente: a porta bate com a chave lá dentro, ou a chave simplesmente desaparece. Os primeiros minutos são de pânico — e é exatamente nesse pânico que as más decisões (e as burlas) acontecem.",
        ],
      },
      {
        heading: "1. Não force a porta",
        paragraphs: [
          "Cartões de crédito, arames e ombradas funcionam nos filmes. Na vida real, transformam uma abertura fina de 59€ numa substituição de fechadura, ou pior, numa porta danificada. Se a chave partiu no canhão, não tente empurrá-la — só a enterra mais.",
        ],
      },
      {
        heading: "2. Verifique alternativas óbvias",
        paragraphs: [
          "Alguém tem uma cópia? O vizinho, um familiar, o senhorio? Uma janela ficou aberta (só se for acessível em segurança)? Cinco minutos de telefonemas podem resolver tudo.",
        ],
      },
      {
        heading: "3. Escolha o chaveiro com cabeça — mesmo com pressa",
        paragraphs: [
          "Desconfie de anúncios 'desde 9€': é a isca clássica que acaba em faturas de centenas de euros exigidas em dinheiro. Um profissional sério diz-lhe o preço fixo ao telefone, aceita MB Way/cartão e emite fatura. Peça sempre o valor total antes de autorizar a deslocação.",
        ],
      },
      {
        heading: "4. Prepare a identificação",
        paragraphs: [
          "Qualquer chaveiro sério vai pedir prova de que a casa é sua — documento e comprovativo de morada. Se o 'profissional' não perguntar nada, isso também diz muito sobre ele.",
        ],
      },
      {
        heading: "5. Depois da abertura, pondere trocar o canhão",
        paragraphs: [
          "Se a chave se perdeu na rua (ou foi roubada), a fechadura está comprometida. A troca de canhão custa desde 39€ + material e demora 20 minutos — barato comparado com o risco.",
        ],
      },
    ],
  },
  {
    slug: "mudar-fechaduras-ao-mudar-de-casa",
    title: "Mudou de casa? Porque deve trocar as fechaduras no primeiro dia",
    category: "Segurança Doméstica",
    categorySlug: "seguranca-domestica",
    excerpt: "As chaves que recebeu na escritura não são as únicas que existem. Saiba porque a troca de canhão é o primeiro investimento de segurança de qualquer casa nova.",
    date: "2026-06-15",
    author: "Equipa Chaveiro Express",
    relatedServices: ["mudanca-de-canhao", "reforco-de-seguranca", "fechaduras-alta-seguranca"],
    body: [
      {
        paragraphs: [
          "Recebeu as chaves da casa nova. Mas quantas cópias existem? O anterior proprietário, os filhos, a empregada, o empreiteiro das obras, a agência imobiliária — qualquer um pode ter uma cópia num bolso ou numa gaveta.",
        ],
      },
      {
        heading: "A troca de canhão: 20 minutos, desde ~55€ no total",
        paragraphs: [
          "Não é preciso trocar a fechadura toda: na maioria das portas basta substituir o canhão (o cilindro onde a chave entra). É rápido, económico e devolve-lhe a certeza de que só a sua família tem acesso.",
          "Aproveite a troca para subir de nível: um canhão anti-snap e anti-bumping certificado custa mais 40–60€ do que um básico e elimina os métodos de arrombamento mais comuns em Portugal.",
        ],
      },
      {
        heading: "Checklist de segurança para casa nova",
        paragraphs: [
          "Além do canhão da porta principal: troque a fechadura da caixa de correio (5 minutos, ~25€), verifique portas de serviço e garagem, e confirme quantas chaves de zonas comuns recebeu do condomínio. Se a porta é blindada, confirme que o canhão não sobressai do escudo — é o erro de instalação mais comum.",
        ],
      },
    ],
  },
  {
    slug: "fechadura-inteligente-alojamento-local",
    title: "Fechaduras inteligentes para Alojamento Local: guia do anfitrião",
    category: "Fechaduras Inteligentes",
    categorySlug: "fechaduras-inteligentes",
    excerpt: "Check-in autónomo, códigos por hóspede e fim das entregas de chaves: como escolher e instalar uma fechadura inteligente no seu AL em Lisboa.",
    date: "2026-05-20",
    author: "Equipa Chaveiro Express",
    relatedServices: ["fechaduras-inteligentes", "fechaduras-digitais"],
    body: [
      {
        paragraphs: [
          "Se gere um Alojamento Local em Lisboa, sabe o custo real das chaves físicas: deslocações para entregas, hóspedes que chegam à meia-noite, chaves perdidas, cópias sem controlo. Uma fechadura inteligente elimina tudo isso.",
        ],
      },
      {
        heading: "O que procurar num AL",
        paragraphs: [
          "Códigos temporários por hóspede (criados à distância, expiram no check-out), registo de entradas, integração com plataformas de gestão (muitas geram códigos automaticamente a partir da reserva) e — essencial — abertura de recurso por chave física ou bateria externa.",
          "Modelos como Nuki, Tedee ou Yale Linus montam-se sobre o canhão europeu existente, sem obras nem furos: importante em prédios onde a porta é da fração mas a estética é do condomínio.",
        ],
      },
      {
        heading: "Instalação profissional vs. faça-você-mesmo",
        paragraphs: [
          "A montagem parece simples, mas o diabo está no canhão: precisa de função dupla (rodar com chave dos dois lados) e da medida certa. Uma instalação profissional inclui o canhão adequado, a calibração e o teste completo — e custa desde 89€ + equipamento. Envie-nos uma foto da sua porta por WhatsApp e dizemos-lhe na hora se é compatível.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
