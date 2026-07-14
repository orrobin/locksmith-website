// Location tree — Phase 1 scope: Lisbon hub + 8 freguesias + 8 cities (docs/02 §1.1, docs/03 §4.2).
// Every entry has genuinely unique local copy (anti-doorway guardrail).
// Phase 2: migrate to Payload CMS `Location` collection with publish gate.

export interface Location {
  slug: string;
  name: string;
  type: "city" | "freguesia";
  parent?: string; // city slug for freguesias
  eta: string;
  intro: string[];
  landmarks: string[];
  faqs: { q: string; a: string }[];
}

export const lisbon: Location = {
  slug: "lisboa",
  name: "Lisboa",
  type: "city",
  eta: "20–30 min",
  intro: [
    "Servimos toda a cidade de Lisboa, 24 horas por dia, com técnicos posicionados em vários pontos da cidade para garantir chegadas em 20–30 minutos — de Belém ao Parque das Nações.",
    "Conhecemos as realidades de cada zona: dos prédios históricos de Alfama e da Mouraria, com portas antigas e fechaduras de caixa, aos condomínios modernos das Avenidas Novas e do Parque das Nações com portas blindadas e videoporteiro. Levamos material adequado a ambos.",
  ],
  landmarks: ["Baixa e Chiado", "Avenida da Liberdade", "Marquês de Pombal", "Parque das Nações", "Belém", "Alfama"],
  faqs: [
    { q: "Quanto tempo demoram em Lisboa?", a: "Entre 20 e 30 minutos em média, a qualquer hora. Nas horas de ponta pode chegar aos 40 minutos em zonas de trânsito difícil — dizemos-lhe o tempo real quando ligar." },
    { q: "Cobram deslocação em Lisboa?", a: "Não. Dentro de Lisboa a deslocação está incluída no preço fixo do serviço." },
    { q: "Atendem de madrugada em Lisboa?", a: "Sim, 24h/365. Entre as 22h e as 8h aplica-se a taxa noturna indicada na nossa tabela de preços — sem surpresas." },
  ],
};

export const freguesias: Location[] = [
  {
    slug: "alfama",
    name: "Alfama",
    type: "freguesia",
    parent: "lisboa",
    eta: "20–30 min",
    intro: [
      "Alfama é o bairro mais antigo de Lisboa — e as suas portas mostram-no: madeira maciça, fechaduras de caixa antigas e canhões fora de medida são o nosso dia-a-dia aqui. Levamos peças compatíveis com portas históricas e sabemos abri-las sem danificar o património.",
      "Como as ruas estreitas não permitem estacionar à porta, os nossos técnicos deslocam-se com mochila de ferramenta a partir do Largo do Chafariz de Dentro ou do Campo das Cebolas — a chegada não depende de encontrar lugar.",
    ],
    landmarks: ["Castelo de São Jorge", "Sé de Lisboa", "Largo do Chafariz de Dentro", "Miradouro de Santa Luzia"],
    faqs: [
      { q: "Conseguem chegar às ruas sem acesso automóvel?", a: "Sim — em Alfama trabalhamos apeados a partir dos largos principais. A morada exata (ou uma localização por WhatsApp) ajuda-nos a chegar mais depressa." },
      { q: "Trabalham com portas antigas?", a: "Sim, incluindo fechaduras de caixa e ferragens antigas. Preservamos a porta original sempre que possível." },
    ],
  },
  {
    slug: "baixa-chiado",
    name: "Baixa-Chiado",
    type: "freguesia",
    parent: "lisboa",
    eta: "15–25 min",
    intro: [
      "Na Baixa e no Chiado servimos tanto residentes como o comércio: lojas, restaurantes e hotéis. Fora do horário comercial, a prioridade são os estores e grades — uma loja que não abre às 9h é faturação perdida, por isso o comércio tem resposta prioritária aqui.",
      "É também a zona com mais alojamento local da cidade: fazemos aberturas para hóspedes trancados e instalamos fechaduras inteligentes com códigos por hóspede para anfitriões de AL.",
    ],
    landmarks: ["Praça do Comércio", "Rua Augusta", "Elevador de Santa Justa", "Largo do Carmo"],
    faqs: [
      { q: "O meu hóspede de Airbnb ficou trancado. Conseguem ajudar sem eu estar presente?", a: "Sim — tratamos tudo por WhatsApp com o anfitrião: verificação, autorização, abertura e pagamento remoto por MB Way ou cartão. É um dos nossos serviços mais frequentes no Chiado." },
      { q: "Atendem lojas antes da abertura?", a: "Sim, com prioridade comercial — ligue e damos-lhe a hora de chegada real na hora." },
    ],
  },
  {
    slug: "alvalade",
    name: "Alvalade",
    type: "freguesia",
    parent: "lisboa",
    eta: "15–25 min",
    intro: [
      "Alvalade é um bairro de prédios de rendimento dos anos 40–60: portas de madeira sólidas, fechaduras de embutir clássicas e muitos canhões originais que já deviam ter sido trocados. A mudança de canhão é o serviço que mais fazemos aqui — 20 minutos e a segurança fica renovada.",
      "Servimos também o comércio da Avenida da Igreja e arredores com fechaduras de estores e sistemas de chave mestra.",
    ],
    landmarks: ["Avenida da Igreja", "Mercado de Alvalade", "Estádio José Alvalade", "Campo Grande"],
    faqs: [
      { q: "O prédio tem porta comum com chave igual para todos. Podem trocar só a minha?", a: "Sim — trocamos o canhão da sua fração sem afetar a porta comum. Para a porta do prédio, trabalhamos com a administração do condomínio." },
    ],
  },
  {
    slug: "benfica",
    name: "Benfica",
    type: "freguesia",
    parent: "lisboa",
    eta: "20–30 min",
    intro: [
      "Em Benfica servimos uma das maiores zonas residenciais de Lisboa: dos prédios clássicos da Estrada de Benfica aos condomínios junto ao Colombo. Grande procura de reforço de segurança — canhões anti-snap e escudos — e de fechaduras de garagem nas urbanizações.",
    ],
    landmarks: ["Centro Colombo", "Estádio da Luz", "Parque Silva Porto", "Estrada de Benfica"],
    faqs: [
      { q: "Fazem serviços em garagens de condomínio?", a: "Sim — fechaduras de portões, trancas de arrecadação e reforço pós-assalto. Trabalhamos diretamente com condóminos e administrações." },
    ],
  },
  {
    slug: "parque-das-nacoes",
    name: "Parque das Nações",
    type: "freguesia",
    parent: "lisboa",
    eta: "20–35 min",
    intro: [
      "O Parque das Nações é a zona mais moderna da cidade: condomínios com portas blindadas, fechaduras multiponto e cada vez mais fechaduras inteligentes. Os nossos técnicos estão habituados aos modelos instalados nos empreendimentos da zona e levam canhões de alta segurança em stock.",
      "É também uma zona forte de escritórios e hotelaria — oferecemos contratos de assistência prioritária a empresas.",
    ],
    landmarks: ["Oceanário", "Centro Vasco da Gama", "Estação do Oriente", "Altice Arena"],
    faqs: [
      { q: "A minha porta é blindada com fechadura multiponto. Conseguem abrir sem danos?", a: "Sim, temos técnicas específicas para portas blindadas e multiponto — é um dos serviços mais comuns no Parque das Nações. O preço é confirmado antes da deslocação." },
    ],
  },
  {
    slug: "campo-de-ourique",
    name: "Campo de Ourique",
    type: "freguesia",
    parent: "lisboa",
    eta: "15–25 min",
    intro: [
      "Campo de Ourique mistura prédios de charme com comércio de bairro. Fazemos de tudo aqui: aberturas de emergência, canhões de segurança nos prédios antigos da Ferreira Borges e fechaduras de estores no comércio da Rua Coelho da Rocha e do mercado.",
    ],
    landmarks: ["Mercado de Campo de Ourique", "Jardim da Parada", "Basílica da Estrela", "Rua Ferreira Borges"],
    faqs: [
      { q: "Estacionar é difícil no bairro. Isso atrasa a chegada?", a: "Não — os técnicos conhecem o bairro e trabalham apeados a partir dos pontos de paragem possíveis. O tempo que indicamos ao telefone já conta com isso." },
    ],
  },
  {
    slug: "arroios",
    name: "Arroios",
    type: "freguesia",
    parent: "lisboa",
    eta: "15–25 min",
    intro: [
      "Arroios é a freguesia mais densa e multicultural de Lisboa — muitos prédios antigos convertidos, arrendamento e alojamento local. Fazemos muitas trocas de canhão entre inquilinos, aberturas de emergência e instalações de fechaduras digitais em quartos e apartamentos partilhados.",
    ],
    landmarks: ["Praça do Chile", "Mercado de Arroios", "Alameda Dom Afonso Henriques", "Anjos"],
    faqs: [
      { q: "Sou senhorio e mudei de inquilino. O que recomendam?", a: "Troca de canhão (desde 39€ + material) a cada mudança de inquilino. Rápido, económico e evita o risco de cópias antigas em circulação." },
    ],
  },
  {
    slug: "belem",
    name: "Belém",
    type: "freguesia",
    parent: "lisboa",
    eta: "25–35 min",
    intro: [
      "Em Belém e no Restelo servimos sobretudo moradias e prédios baixos: portões de jardim, garagens, portas de serviço e reforço de segurança de moradias são os pedidos mais comuns — além do apoio a turistas trancados fora dos alojamentos junto à zona monumental.",
    ],
    landmarks: ["Mosteiro dos Jerónimos", "Torre de Belém", "CCB", "Restelo"],
    faqs: [
      { q: "Fazem portões e anexos de moradias?", a: "Sim — fechaduras de portões de jardim, garagens, anexos e casas de máquinas. Avaliação de segurança gratuita para moradias quando realiza o serviço." },
    ],
  },
];

export const cities: Location[] = [
  {
    slug: "cascais",
    name: "Cascais",
    type: "city",
    eta: "30–45 min",
    intro: [
      "Servimos todo o concelho de Cascais — do centro histórico ao Estoril, Carcavelos, Parede e São Domingos de Rana. Zona de moradias e condomínios fechados, com forte procura de fechaduras de alta segurança, portões e fechaduras inteligentes para alojamento local junto à Linha.",
      "Muitos dos nossos clientes em Cascais são residentes internacionais: atendemos em inglês, espanhol e francês sem problema.",
    ],
    landmarks: ["Baía de Cascais", "Estoril", "Boca do Inferno", "Carcavelos"],
    faqs: [
      { q: "Quanto tempo demoram até Cascais?", a: "Entre 30 e 45 minutos, consoante a zona do concelho e o trânsito na A5/Marginal. Dizemos-lhe o tempo real quando ligar." },
      { q: "Do you speak English?", a: "Yes — our technicians handle service calls in English, Spanish and French. Message us on WhatsApp in your language." },
    ],
  },
  {
    slug: "sintra",
    name: "Sintra",
    type: "city",
    eta: "35–50 min",
    intro: [
      "Cobrimos o concelho de Sintra: Agualva-Cacém, Queluz, Rio de Mouro, Algueirão-Mem Martins e a vila de Sintra. É o concelho mais populoso da área de Lisboa — a maioria dos pedidos são aberturas de emergência e mudanças de canhão em apartamentos, além de alojamento local na vila.",
    ],
    landmarks: ["Vila de Sintra", "Queluz", "Cacém", "Mem Martins"],
    faqs: [
      { q: "Servem todo o concelho de Sintra?", a: "Sim, do Cacém à vila de Sintra. O tempo de chegada varia entre 35 e 50 minutos consoante a zona — confirmamos ao telefone." },
    ],
  },
  {
    slug: "oeiras",
    name: "Oeiras",
    type: "city",
    eta: "25–40 min",
    intro: [
      "Em Oeiras servimos residentes e empresas: Paço de Arcos, Carnaxide, Algés, Linda-a-Velha e os parques empresariais (Lagoas Park, Quinta da Fonte, Taguspark). Contratos de assistência para escritórios e sistemas de chave mestra são especialidade nossa aqui.",
    ],
    landmarks: ["Passeio Marítimo de Algés", "Taguspark", "Lagoas Park", "Palácio do Marquês de Pombal"],
    faqs: [
      { q: "Trabalham com empresas nos parques empresariais?", a: "Sim — aberturas urgentes, mestragem de chaves e contratos de manutenção com resposta prioritária e faturação mensal." },
    ],
  },
  {
    slug: "amadora",
    name: "Amadora",
    type: "city",
    eta: "25–35 min",
    intro: [
      "Na Amadora — Reboleira, Venteira, Falagueira, Alfragide e Damaia — o essencial do nosso trabalho é residencial: aberturas de emergência, mudanças de canhão e reforço de segurança em apartamentos, além das zonas comerciais de Alfragide.",
    ],
    landmarks: ["Alfragide", "Venteira", "Parque Central da Amadora", "Reboleira"],
    faqs: [
      { q: "Cobram deslocação à Amadora?", a: "A deslocação está incluída no preço fixo que confirmamos ao telefone — sem custos escondidos." },
    ],
  },
  {
    slug: "almada",
    name: "Almada",
    type: "city",
    eta: "30–45 min",
    intro: [
      "Atravessamos a ponte para servir Almada, Cacilhas, Costa da Caparica, Charneca e Laranjeiro. No verão, a Costa da Caparica soma muitos pedidos de emergência (chaves perdidas na praia) — mantemos capacidade reforçada na margem sul nessa época.",
    ],
    landmarks: ["Cristo Rei", "Cacilhas", "Costa da Caparica", "Almada Forum"],
    faqs: [
      { q: "Perdi as chaves na praia na Caparica. E agora?", a: "Acontece todos os dias no verão — ligue-nos, abrimos a porta de casa ou do carro e fazemos a troca do canhão na hora se necessário." },
    ],
  },
  {
    slug: "loures",
    name: "Loures",
    type: "city",
    eta: "25–40 min",
    intro: [
      "Servimos o concelho de Loures: Loures cidade, Odivelas fronteira, Sacavém, Moscavide, Portela e Infantado. A proximidade ao aeroporto traz-nos muitos pedidos de viajantes e alojamento local em Moscavide e na Portela.",
    ],
    landmarks: ["Moscavide", "Sacavém", "Infantado", "Parque Adão Barata"],
    faqs: [
      { q: "Estou perto do aeroporto e fiquei sem chaves. Conseguem vir depressa?", a: "Sim — Moscavide, Portela e Sacavém estão a 25–35 minutos dos nossos técnicos, a qualquer hora." },
    ],
  },
  {
    slug: "odivelas",
    name: "Odivelas",
    type: "city",
    eta: "25–35 min",
    intro: [
      "Em Odivelas — centro, Ramada, Póvoa de Santo Adrião e Olival Basto — fazemos sobretudo serviço residencial: aberturas, canhões e fechaduras de caixa de correio em prédios de habitação, com chegadas em 25–35 minutos.",
    ],
    landmarks: ["Mosteiro de Odivelas", "Strada Outlet", "Ramada", "Póvoa de Santo Adrião"],
    faqs: [
      { q: "Fazem fim-de-semana em Odivelas?", a: "Sim, 24h todos os dias. Ao fim-de-semana aplica-se a taxa indicada na tabela de preços — confirmada antes de irmos." },
    ],
  },
  {
    slug: "setubal",
    name: "Setúbal",
    type: "city",
    eta: "45–60 min",
    intro: [
      "Servimos Setúbal cidade e arredores (Azeitão, Praias do Sado). Por ser a nossa zona mais distante, para emergências indicamos sempre o tempo real de chegada ao telefone antes de confirmar — sem promessas irrealistas. Para serviços agendados, marcamos à hora que lhe convier.",
    ],
    landmarks: ["Avenida Luísa Todi", "Mercado do Livramento", "Azeitão", "Tróia (ferry)"],
    faqs: [
      { q: "Compensa chamar-vos a Setúbal?", a: "Para serviços agendados (canhões, fechaduras, segurança) sim — mesmo preço de tabela. Para emergências dizemos-lhe o tempo de chegada real e, se houver alternativa local mais rápida, somos honestos consigo." },
    ],
  },
];

export const allLocations: Location[] = [lisbon, ...freguesias, ...cities];
export const getFreguesia = (slug: string) => freguesias.find((f) => f.slug === slug);
export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
