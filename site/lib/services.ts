// Service catalog — one entry per SEO service page (docs/02 §1.1).
// Phase 2: migrate to Payload CMS `Service` collection.

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // emoji placeholder; swap for SVG icon set later
  excerpt: string;
  priceFrom: number;
  emergency: boolean;
  intro: string[];
  situations: string[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
}

export const services: Service[] = [
  {
    slug: "abertura-de-portas",
    name: "Abertura de Portas",
    shortName: "Abertura de Portas",
    icon: "🚪",
    excerpt: "Porta fechada, chave perdida ou partida? Abrimos sem danos em 20–30 minutos.",
    priceFrom: 59,
    emergency: true,
    intro: [
      "Ficou com a porta trancada e sem chave? A nossa equipa chega em 20–30 minutos em Lisboa e abre a sua porta sem danos na fechadura nem na porta, na grande maioria dos casos.",
      "Trabalhamos com todo o tipo de portas — comuns, blindadas e de alta segurança — e confirmamos sempre o preço fixo antes de iniciar o trabalho.",
    ],
    situations: [
      "Chave perdida ou roubada",
      "Porta bateu com a chave lá dentro",
      "Chave partida no canhão",
      "Fechadura avariada que não roda",
    ],
    faqs: [
      { q: "Abrem a porta sem danificar a fechadura?", a: "Sim, na grande maioria dos casos usamos técnicas de abertura fina sem qualquer dano. Se for necessário substituir o canhão, informamos e confirmamos o preço antes." },
      { q: "Quanto tempo demoram a chegar?", a: "Em Lisboa, entre 20 e 30 minutos em média. Nas zonas limítrofes, 25–45 minutos, consoante o trânsito." },
      { q: "Preciso de comprovar que a casa é minha?", a: "Sim. Por segurança pedimos sempre um documento de identificação e um comprovativo de morada (ou outra prova razoável) antes de abrir." },
    ],
    related: ["mudanca-de-canhao", "extracao-de-chave-partida", "substituicao-de-fechaduras"],
  },
  {
    slug: "carro-trancado",
    name: "Carro Trancado — Abertura de Automóveis",
    shortName: "Carro Trancado",
    icon: "🚗",
    excerpt: "Chave fechada dentro do carro? Abrimos o seu automóvel sem danos, onde estiver.",
    priceFrom: 69,
    emergency: true,
    intro: [
      "Deixou a chave dentro do carro ou o comando não responde? Deslocamo-nos até si em qualquer ponto de Lisboa e arredores e abrimos o veículo sem danos na pintura, borrachas ou fechadura.",
      "Trabalhamos com a generalidade das marcas e modelos, incluindo viaturas com fecho centralizado.",
    ],
    situations: [
      "Chave trancada dentro do carro",
      "Chave perdida do automóvel",
      "Comando sem bateria ou avariado",
      "Bebé ou animal fechado no carro (prioridade máxima)",
    ],
    faqs: [
      { q: "Danificam o carro ao abrir?", a: "Não. Usamos ferramentas específicas de abertura automóvel que não deixam marcas." },
      { q: "Vêm ao local onde o carro está?", a: "Sim, o serviço é 100% móvel — rua, parque de estacionamento ou garagem." },
      { q: "Fazem chaves novas para o carro?", a: "Fazemos abertura e extração de chave partida. Para codificação de chaves novas indicamos parceiros especializados." },
    ],
    related: ["extracao-de-chave-partida", "abertura-de-portas", "copia-de-chaves"],
  },
  {
    slug: "chaveiro-residencial",
    name: "Chaveiro Residencial",
    shortName: "Residencial",
    icon: "🏠",
    excerpt: "Aberturas, fechaduras e reforço de segurança para casas e apartamentos.",
    priceFrom: 59,
    emergency: false,
    intro: [
      "Da abertura de emergência à instalação de fechaduras de alta segurança, tratamos de toda a serralharia de segurança da sua casa ou apartamento.",
      "Aconselhamos a solução certa para o seu tipo de porta e orçamento — sem vender o que não precisa.",
    ],
    situations: [
      "Mudança de casa (troca de canhões recomendada)",
      "Fechadura desgastada ou presa",
      "Reforço de segurança após tentativa de assalto",
      "Instalação de fechadura adicional",
    ],
    faqs: [
      { q: "Mudei de casa. Devo trocar as fechaduras?", a: "Sim, recomendamos sempre trocar os canhões ao mudar de casa — não sabe quantas cópias das chaves existem. É um serviço rápido e económico." },
      { q: "Que marcas de fechaduras instalam?", a: "Trabalhamos com marcas de referência como Yale, TESA, CISA, Mul-T-Lock e MCM, entre outras." },
      { q: "Dão garantia?", a: "Sim, 12 meses de garantia em peças e mão-de-obra." },
    ],
    related: ["mudanca-de-canhao", "instalacao-de-fechaduras", "reforco-de-seguranca"],
  },
  {
    slug: "chaveiro-comercial",
    name: "Chaveiro Comercial",
    shortName: "Comercial",
    icon: "🏢",
    excerpt: "Fechaduras, mestragem de chaves e segurança para lojas, escritórios e armazéns.",
    priceFrom: 69,
    emergency: false,
    intro: [
      "Apoiamos lojas, escritórios, restaurantes e armazéns com aberturas urgentes, substituição de fechaduras, sistemas de chave mestra e fechaduras de alta segurança.",
      "Oferecemos contratos de manutenção para empresas e condomínios com resposta prioritária.",
    ],
    situations: [
      "Abertura urgente do estabelecimento",
      "Funcionário saiu com as chaves — mestragem ou troca",
      "Fechadura de porta de vidro ou alumínio avariada",
      "Plano de chave mestra para vários espaços",
    ],
    faqs: [
      { q: "Fazem sistemas de chave mestra?", a: "Sim, desenhamos planos de mestragem: uma chave para a gerência, chaves individuais por zona ou funcionário." },
      { q: "Têm contratos para empresas?", a: "Sim, com resposta prioritária, faturação mensal e relatórios. Peça uma proposta." },
      { q: "Passam fatura com NIF?", a: "Sempre. Emitimos fatura certificada em todos os serviços." },
    ],
    related: ["fechaduras-alta-seguranca", "fechaduras-de-estores", "reforco-de-seguranca"],
  },
  {
    slug: "chaveiro-automovel",
    name: "Chaveiro Automóvel",
    shortName: "Automóvel",
    icon: "🔑",
    excerpt: "Abertura de viaturas, extração de chaves partidas e apoio em emergências na estrada.",
    priceFrom: 69,
    emergency: true,
    intro: [
      "Serviço móvel de chaveiro automóvel em Lisboa e arredores: abertura de viaturas trancadas, extração de chaves partidas na ignição ou fechadura e apoio em emergências.",
    ],
    situations: [
      "Carro trancado com a chave dentro",
      "Chave partida na ignição ou na porta",
      "Fechadura da porta do carro presa",
      "Mala do carro que não abre",
    ],
    faqs: [
      { q: "Atendem a qualquer hora?", a: "Sim, 24 horas por dia, todos os dias — incluindo fins-de-semana e feriados (aplica-se taxa noturna entre as 22h e as 8h)." },
      { q: "Que veículos abrem?", a: "Automóveis ligeiros, comerciais e a maioria dos motociclos com fechadura mecânica." },
    ],
    related: ["carro-trancado", "extracao-de-chave-partida", "copia-de-chaves"],
  },
  {
    slug: "instalacao-de-fechaduras",
    name: "Instalação de Fechaduras",
    shortName: "Instalação",
    icon: "🛠️",
    excerpt: "Instalação profissional de fechaduras novas em portas de madeira, alumínio e blindadas.",
    priceFrom: 49,
    emergency: false,
    intro: [
      "Instalamos fechaduras novas em qualquer tipo de porta: madeira, metal, alumínio, vidro e portas blindadas. Aconselhamos o modelo certo para o nível de segurança que procura.",
    ],
    situations: [
      "Porta nova sem fechadura",
      "Fechadura adicional para mais segurança",
      "Substituir fechadura antiga por modelo de alta segurança",
      "Instalação de fechadura elétrica ou inteligente",
    ],
    faqs: [
      { q: "O preço inclui a fechadura?", a: "O valor de instalação é separado do material. Apresentamos sempre opções de fechadura a vários preços e o total fixo antes de começar." },
      { q: "Quanto tempo demora?", a: "Uma instalação padrão demora 30–60 minutos." },
    ],
    related: ["substituicao-de-fechaduras", "fechaduras-alta-seguranca", "fechaduras-inteligentes"],
  },
  {
    slug: "substituicao-de-fechaduras",
    name: "Substituição de Fechaduras",
    shortName: "Substituição",
    icon: "🔄",
    excerpt: "Troca de fechaduras avariadas, desgastadas ou inseguras — com aconselhamento honesto.",
    priceFrom: 49,
    emergency: false,
    intro: [
      "Substituímos fechaduras avariadas, desgastadas ou obsoletas por modelos atuais e mais seguros. Em muitos casos basta trocar o canhão — dizemos-lhe sempre a opção mais económica.",
    ],
    situations: [
      "Fechadura presa, dura ou que não tranca",
      "Chaves perdidas ou roubadas",
      "Após arrombamento ou tentativa de assalto",
      "Atualizar para canhão anti-bumping/anti-snap",
    ],
    faqs: [
      { q: "Substituir a fechadura ou só o canhão?", a: "Se o mecanismo estiver bom, trocar apenas o canhão é mais barato e igualmente seguro. Avaliamos no local e propomos a opção mais económica." },
      { q: "Têm fechaduras em stock na carrinha?", a: "Sim, as nossas viaturas levam os modelos mais comuns — na maioria dos casos resolvemos numa única visita." },
    ],
    related: ["mudanca-de-canhao", "instalacao-de-fechaduras", "reparacao-de-fechaduras"],
  },
  {
    slug: "reparacao-de-fechaduras",
    name: "Reparação de Fechaduras",
    shortName: "Reparação",
    icon: "🔧",
    excerpt: "Reparamos fechaduras presas, duras ou desalinhadas — muitas vezes sem substituição.",
    priceFrom: 45,
    emergency: false,
    intro: [
      "Nem toda a fechadura avariada precisa de ser trocada. Reparamos mecanismos presos, lubrificamos, alinhamos portas e substituímos apenas as peças necessárias.",
    ],
    situations: [
      "Chave roda mas não abre",
      "Fechadura dura ou a prender",
      "Porta desalinhada que não tranca",
      "Trinco que não recolhe",
    ],
    faqs: [
      { q: "Compensa reparar em vez de trocar?", a: "Muitas vezes sim. Se a reparação não for durável, dizemos-lhe com transparência e apresentamos o custo de substituição para comparar." },
    ],
    related: ["substituicao-de-fechaduras", "mudanca-de-canhao", "abertura-de-portas"],
  },
  {
    slug: "abertura-de-cofres",
    name: "Abertura de Cofres",
    shortName: "Cofres",
    icon: "🔒",
    excerpt: "Abertura técnica de cofres domésticos e comerciais com código perdido ou avaria.",
    priceFrom: 120,
    emergency: false,
    intro: [
      "Abrimos cofres domésticos, de hotel e comerciais quando o código foi esquecido, a chave se perdeu ou o mecanismo avariou — com técnicas que preservam o cofre sempre que possível.",
      "Por razões de segurança, exigimos sempre prova de propriedade do cofre.",
    ],
    situations: [
      "Código esquecido ou bloqueado",
      "Chave do cofre perdida",
      "Fechadura eletrónica sem bateria/avariada",
      "Cofre herdado sem código conhecido",
    ],
    faqs: [
      { q: "O cofre fica utilizável depois da abertura?", a: "Sempre que tecnicamente possível usamos métodos não destrutivos. Quando não é possível, informamos antes e propomos a substituição." },
      { q: "Que provas pedem?", a: "Documento de identificação e prova razoável de propriedade (fatura do cofre, escritura/contrato do imóvel, etc.)." },
    ],
    related: ["fechaduras-alta-seguranca", "chaveiro-comercial", "reforco-de-seguranca"],
  },
  {
    slug: "reforco-de-seguranca",
    name: "Reforço de Segurança",
    shortName: "Segurança",
    icon: "🛡️",
    excerpt: "Auditoria e reforço da segurança da sua porta: canhões, escudos, fechos multiponto.",
    priceFrom: 79,
    emergency: false,
    intro: [
      "Avaliamos os pontos fracos da sua porta e propomos melhorias concretas: canhões anti-bumping e anti-snap, escudos de proteção, fechos multiponto, barras e correntes de segurança.",
    ],
    situations: [
      "Após assalto ou tentativa de arrombamento no prédio",
      "Porta antiga com fechadura básica",
      "Rés-do-chão ou zonas de maior risco",
      "Preparar casa para arrendamento (AL)",
    ],
    faqs: [
      { q: "O que é um canhão anti-snap?", a: "Um canhão desenhado para resistir à técnica de partir o cilindro — um dos métodos de arrombamento mais comuns em Portugal. A troca é rápida e económica." },
      { q: "Fazem avaliação gratuita?", a: "Sim, a avaliação de segurança é gratuita quando realiza o serviço connosco." },
    ],
    related: ["fechaduras-alta-seguranca", "mudanca-de-canhao", "portas-blindadas"],
  },
  {
    slug: "fechaduras-inteligentes",
    name: "Fechaduras Inteligentes",
    shortName: "Smart Locks",
    icon: "📱",
    excerpt: "Instalação de fechaduras inteligentes: abra com o telemóvel, código ou impressão digital.",
    priceFrom: 89,
    emergency: false,
    intro: [
      "Instalamos e configuramos fechaduras inteligentes das principais marcas (Nuki, Yale, Tedee, entre outras): abertura por telemóvel, código, cartão ou impressão digital, com gestão remota de acessos.",
      "Solução ideal para Alojamento Local: crie códigos temporários por hóspede sem entregar chaves.",
    ],
    situations: [
      "Alojamento Local com check-in autónomo",
      "Deixar de depender de chaves físicas",
      "Controlar acessos de empregada/obras à distância",
      "Porta de escritório com acesso por funcionário",
    ],
    faqs: [
      { q: "Funciona na minha porta atual?", a: "A maioria dos modelos adapta-se ao canhão europeu existente. Confirmamos a compatibilidade por WhatsApp com uma foto da sua porta." },
      { q: "E se a bateria acabar?", a: "Todos os modelos que instalamos mantêm abertura por chave física ou têm alimentação de emergência." },
      { q: "É seguro?", a: "Os modelos que recomendamos têm certificação de segurança e encriptação. Muitas seguradoras já os aceitam." },
    ],
    related: ["fechaduras-digitais", "instalacao-de-fechaduras", "reforco-de-seguranca"],
  },
  {
    slug: "fechaduras-digitais",
    name: "Fechaduras Digitais",
    shortName: "Digitais",
    icon: "🔢",
    excerpt: "Fechaduras de código e teclado digital para casas, escritórios e alojamento local.",
    priceFrom: 79,
    emergency: false,
    intro: [
      "Fechaduras digitais de teclado — sem app nem internet: abra com um código PIN. Robustas, simples e ideais para escritórios, arrecadações e alojamento local de gestão simples.",
    ],
    situations: [
      "Porta de escritório com vários utilizadores",
      "Arrecadação ou zona comum de condomínio",
      "AL sem necessidade de gestão remota",
      "Substituir chaves por códigos",
    ],
    faqs: [
      { q: "Qual a diferença para uma fechadura inteligente?", a: "A digital abre por código no teclado, sem app nem ligação à internet. A inteligente acrescenta gestão remota, registos e códigos temporários. Ajudamos a escolher conforme o uso." },
    ],
    related: ["fechaduras-inteligentes", "instalacao-de-fechaduras", "chaveiro-comercial"],
  },
  {
    slug: "fechaduras-alta-seguranca",
    name: "Fechaduras de Alta Segurança",
    shortName: "Alta Segurança",
    icon: "🏰",
    excerpt: "Canhões e fechaduras certificadas anti-bumping, anti-picking e anti-snap.",
    priceFrom: 99,
    emergency: false,
    intro: [
      "Instalamos fechaduras e canhões de alta segurança certificados (Mul-T-Lock, TESA TK100, CISA AP4, DOM, entre outros) com proteção anti-bumping, anti-picking, anti-drill e anti-snap e chaves de cópia protegida.",
    ],
    situations: [
      "Porta de entrada principal de casa ou loja",
      "Substituir canhão básico por certificado",
      "Chaves com cartão de propriedade (cópia controlada)",
      "Exigência da seguradora",
    ],
    faqs: [
      { q: "O que significa cópia protegida?", a: "A chave só pode ser copiada mediante apresentação de um cartão de propriedade, em centros autorizados — ninguém copia a sua chave sem autorização." },
      { q: "Vale a pena numa porta comum?", a: "Sim: a maioria dos arrombamentos ataca o canhão. Um canhão certificado elimina os métodos mais comuns mesmo em portas simples." },
    ],
    related: ["reforco-de-seguranca", "mudanca-de-canhao", "portas-blindadas"],
  },
  {
    slug: "copia-de-chaves",
    name: "Cópia de Chaves",
    shortName: "Cópia de Chaves",
    icon: "🗝️",
    excerpt: "Duplicação de chaves comuns, de segurança e de caixa de correio.",
    priceFrom: 8,
    emergency: false,
    intro: [
      "Copiamos chaves comuns, de pontos (segurança), de caixa de correio e cadeados. Para chaves protegidas por cartão de propriedade, tratamos do pedido junto do fabricante autorizado.",
    ],
    situations: [
      "Cópias para família ou empregada",
      "Chave de reserva antes que se perca a única",
      "Cópia de chave de caixa de correio",
      "Chave protegida com cartão de propriedade",
    ],
    faqs: [
      { q: "Copiam qualquer chave?", a: "A maioria sim. Chaves protegidas exigem o cartão de propriedade; chaves de veículo com transponder exigem codificação — indicamos parceiros para esses casos." },
    ],
    related: ["fechaduras-caixa-correio", "fechaduras-alta-seguranca", "abertura-de-portas"],
  },
  {
    slug: "extracao-de-chave-partida",
    name: "Extração de Chave Partida",
    shortName: "Chave Partida",
    icon: "⚠️",
    excerpt: "Chave partida dentro da fechadura? Extraímos sem danificar o canhão.",
    priceFrom: 49,
    emergency: true,
    intro: [
      "Partiu-se a chave dentro da fechadura ou da ignição? Extraímos o fragmento com ferramentas específicas, sem danificar o canhão na maioria dos casos, e fazemos nova chave ou substituímos o canhão se necessário.",
    ],
    situations: [
      "Chave partida na porta de casa",
      "Chave partida na ignição do carro",
      "Chave partida no cadeado ou correio",
      "Fragmento preso que impede usar a cópia",
    ],
    faqs: [
      { q: "Não posso tirar eu mesmo com uma pinça?", a: "Pode tentar se o fragmento estiver visível, mas empurrá-lo para dentro é o erro mais comum — e transforma uma extração simples numa troca de canhão. Em caso de dúvida, chame-nos." },
      { q: "A fechadura fica a funcionar?", a: "Se o canhão não estiver danificado, sim. Caso contrário substituímos na hora — as nossas viaturas levam canhões em stock." },
    ],
    related: ["abertura-de-portas", "mudanca-de-canhao", "carro-trancado"],
  },
  {
    slug: "fechaduras-caixa-correio",
    name: "Fechaduras de Caixa de Correio",
    shortName: "Caixa de Correio",
    icon: "📮",
    excerpt: "Abertura e substituição de fechaduras de caixas de correio — rápido e económico.",
    priceFrom: 25,
    emergency: false,
    intro: [
      "Perdeu a chave da caixa do correio? Abrimos e substituímos a fechadura por um modelo compatível (normas CTT) em minutos — um dos nossos serviços mais rápidos e económicos.",
    ],
    situations: [
      "Chave da caixa de correio perdida",
      "Fechadura forçada ou vandalizada",
      "Mudança de casa — trocar por segurança",
      "Condomínios: substituição em série",
    ],
    faqs: [
      { q: "Preciso de autorização do condomínio?", a: "Para a sua caixa individual, não. Para intervenções nas zonas comuns, deve informar a administração — também trabalhamos diretamente com condomínios." },
    ],
    related: ["copia-de-chaves", "abertura-de-portas", "chaveiro-residencial"],
  },
  {
    slug: "fechaduras-de-garagem",
    name: "Fechaduras de Garagem",
    shortName: "Garagem",
    icon: "🏗️",
    excerpt: "Fechaduras e reforço de segurança para portões de garagem basculantes e seccionados.",
    priceFrom: 59,
    emergency: false,
    intro: [
      "Instalamos, reparamos e reforçamos fechaduras de portões de garagem: basculantes, seccionados e de correr. As garagens são um alvo frequente — reforce a proteção de bicicletas, motas e arrecadações.",
    ],
    situations: [
      "Fechadura do portão avariada",
      "Garagem assaltada — reforço urgente",
      "Fechadura adicional de segurança",
      "Chave da garagem perdida",
    ],
    faqs: [
      { q: "Trabalham com portões automáticos?", a: "Tratamos da parte mecânica (fechaduras, trancas, canhões). Para motores e automatismos indicamos parceiros especializados." },
    ],
    related: ["fechaduras-de-estores", "reforco-de-seguranca", "abertura-de-portas"],
  },
  {
    slug: "fechaduras-de-estores",
    name: "Fechaduras de Estores e Portões",
    shortName: "Estores",
    icon: "🏪",
    excerpt: "Fechaduras e trancas para estores metálicos e grades de lojas e estabelecimentos.",
    priceFrom: 59,
    emergency: false,
    intro: [
      "Instalamos e substituímos fechaduras de estores metálicos, grades e portões de lojas: fechaduras centrais, laterais e cadeados de alta segurança para proteger o seu estabelecimento fora de horas.",
    ],
    situations: [
      "Estore da loja não tranca",
      "Fechadura do estore forçada durante a noite",
      "Trocar cadeados por modelos de segurança",
      "Abertura urgente de estore preso",
    ],
    faqs: [
      { q: "Fazem aberturas urgentes de estores?", a: "Sim, 24h — sabemos que uma loja que não abre é faturação perdida. Resposta prioritária para comércio." },
    ],
    related: ["chaveiro-comercial", "fechaduras-de-garagem", "fechaduras-alta-seguranca"],
  },
  {
    slug: "mudanca-de-canhao",
    name: "Mudança de Canhão",
    shortName: "Mudança de Canhão",
    icon: "⚙️",
    excerpt: "Troca de canhão da fechadura em 20 minutos — a forma mais rápida de renovar a segurança.",
    priceFrom: 39,
    emergency: false,
    intro: [
      "A mudança de canhão é o serviço mais pedido em Portugal: rápida, económica e resolve a maioria das situações — chaves perdidas, mudança de casa ou upgrade de segurança — sem trocar a fechadura completa.",
      "Levamos canhões de várias medidas e níveis de segurança em stock: resolvemos numa única visita.",
    ],
    situations: [
      "Mudança de casa ou de inquilino",
      "Chaves perdidas ou roubadas",
      "Canhão desgastado que prende",
      "Upgrade para canhão anti-snap certificado",
    ],
    faqs: [
      { q: "Quanto custa mudar um canhão?", a: "Mão-de-obra desde 39€ + o canhão escolhido (desde ~15€ um modelo básico até 80€+ um certificado de alta segurança). Preço total fixo confirmado antes de começar." },
      { q: "Quanto tempo demora?", a: "15–20 minutos na maioria das portas." },
      { q: "Como sei a medida do meu canhão?", a: "Não precisa de saber — medimos no local e temos várias medidas em stock. Se quiser adiantar, envie-nos uma foto por WhatsApp." },
    ],
    related: ["substituicao-de-fechaduras", "fechaduras-alta-seguranca", "abertura-de-portas"],
  },
  {
    slug: "portas-blindadas",
    name: "Portas Blindadas",
    shortName: "Portas Blindadas",
    icon: "🚨",
    excerpt: "Fornecimento, instalação e assistência a portas blindadas e de segurança.",
    priceFrom: 149,
    emergency: false,
    intro: [
      "Fornecemos e instalamos portas blindadas de fabricantes certificados e damos assistência a portas existentes: afinação, substituição de canhões, escudos e fechos multiponto.",
    ],
    situations: [
      "Substituir porta de entrada por blindada",
      "Porta blindada desalinhada ou presa",
      "Trocar canhão/escudo da porta blindada",
      "Abertura de porta blindada trancada",
    ],
    faqs: [
      { q: "Abrem portas blindadas sem danos?", a: "Sim, temos técnicas específicas para portas blindadas. É um trabalho mais especializado — o preço é confirmado por telefone antes da deslocação." },
      { q: "Quanto custa uma porta blindada?", a: "Depende da classe de segurança e medidas. Fazemos orçamento gratuito com visita técnica." },
    ],
    related: ["fechaduras-alta-seguranca", "reforco-de-seguranca", "abertura-de-portas"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const emergencyServices = services.filter((s) => s.emergency);
