import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Check, CircleDollarSign, Camera, Package, Sparkles } from "lucide-react";
import coverImage from "@/assets/morango-cravejado-cover.jpg";
import detailImage from "@/assets/morango-cravejado-detail.jpg";
import packagingImage from "@/assets/morango-cravejado-packaging.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Morango Cravejado | Guia Completo" },
    { name: "description", content: "Guia completo para preparar, padronizar, precificar, divulgar e vender Morango Cravejado." },
    { property: "og:title", content: "Morango Cravejado | Guia Completo" },
    { property: "og:description", content: "Receita, processo, custos, precificação, marketing e vendas em um único guia." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Ebook,
});

type Page = {
  section: string;
  title: string;
  lead?: string;
  type?: "impact" | "recipe" | "list" | "table" | "image";
  items?: string[];
  tip?: string;
};

const pages: Page[] = [
  {
    section: "Parte 1 · O Produto",
    title: "O que é o Morango Cravejado",
    lead: "Uma sobremesa artesanal feita para unir contraste, textura e apresentação: morango fresco, brigadeiro branco, chocolate e cristais crocantes de caramelo.",
    type: "image",
    items: ["A proposta é transformar um morango bonito em uma experiência de compra: visual marcante por fora e contraste de texturas na mordida.", "O produto pode ser vendido por unidade, em caixas e em versões presenteáveis. A padronização é o que permite crescer sem perder qualidade.", "Neste guia você vai aprender não apenas a receita, mas o processo completo para produzir, calcular, divulgar e vender."],
  },
  {
    section: "Capítulo 1 · Conceito",
    title: "Cravejado não é Morango do Amor",
    lead: "A diferença está principalmente na construção e no acabamento. Aqui, o caramelo entra como textura e decoração, e não como uma casca contínua envolvendo toda a fruta.",
    items: ["Morango do Amor: normalmente apresenta uma cobertura contínua, rígida e brilhante de caramelo.", "Morango Cravejado: combina uma camada cremosa, chocolate e fragmentos crocantes distribuídos sobre a superfície.", "O resultado é visualmente mais artesanal e permite trabalhar diferentes tamanhos, cores, chocolates e embalagens.", "A identidade do produto deve aparecer em todos os pontos: receita, acabamento, fotografia, embalagem e comunicação."],
    tip: "Defina um padrão visual antes de vender. O cliente precisa reconhecer seu produto mesmo quando a foto aparece rapidamente no feed.",
  },
  {
    section: "Capítulo 2 · Produto",
    title: "Por que ele chama tanta atenção",
    lead: "Produtos que vendem bem costumam reunir três elementos: aparência memorável, sensação de novidade e facilidade para presentear ou consumir.",
    type: "list",
    items: ["CONTRASTE VISUAL · vermelho, branco, chocolate e brilho criam uma imagem forte.", "TEXTURA · o crocante do caramelo cria uma experiência diferente da sobremesa comum.", "FORMATO · a unidade é fácil de experimentar e a caixa aumenta o valor percebido.", "CONTEÚDO · corte, banho, quebra do caramelo e montagem funcionam bem em vídeos curtos.", "OCASIÕES · presentes, datas comemorativas, lembranças e pequenas celebrações ampliam as possibilidades de venda.", "PERSONALIZAÇÃO · cores, fitas, tags e caixas podem adaptar o produto à ocasião."],
  },
  {
    section: "Capítulo 3 · Estrutura",
    title: "Sua bancada essencial",
    lead: "Organização reduz erros. Separe utensílios, ingredientes e embalagens antes de começar a produção.",
    type: "list",
    items: ["Panela de fundo grosso para o brigadeiro.", "Espátula de silicone resistente ao calor.", "Balança digital para padronizar porções.", "Termômetro culinário para acompanhar preparos sensíveis.", "Papel manteiga ou tapete de silicone para o caramelo.", "Recipientes completamente secos para chocolate e ingredientes.", "Garfo, pinça ou ferramenta própria para banho e movimentação das frutas.", "Luvas descartáveis e materiais de higiene para manipulação.", "Embalagens, forminhas, etiquetas e fita já separadas para a finalização."],
    tip: "Monte uma estação de produção em sequência: higienização → preparo → montagem → acabamento → embalagem. Isso diminui deslocamentos e sujeira.",
  },
  {
    section: "Capítulo 4 · Ingredientes",
    title: "Ingredientes e padrão de compra",
    lead: "Não basta comprar ingredientes bons: é preciso definir um padrão para que cada lote fique parecido com o anterior.",
    type: "list",
    items: ["BRIGADEIRO · leite condensado, creme de leite, manteiga e chocolate branco de boa qualidade.", "CARAMELIZADO · açúcar, água e corante alimentício vermelho em gel, quando desejado.", "MONTAGEM · morangos firmes, sem machucados, preferencialmente de tamanho semelhante.", "COBERTURA · chocolate adequado para a técnica escolhida e compatível com o acabamento desejado.", "FINALIZAÇÃO · cristais de caramelo, confeitos opcionais, forminhas e materiais de embalagem.", "PADRÃO DE COMPRA · registre marca, peso, preço pago e rendimento de cada ingrediente para alimentar sua ficha técnica."],
    tip: "Faça compras pensando em rendimento, não apenas no preço da embalagem. O ingrediente mais barato pode sair mais caro se gerar muita perda.",
  },
  {
    section: "Parte 2 · Como Preparar",
    title: "Brigadeiro Branco",
    lead: "A camada cremosa precisa envolver a fruta sem escorrer e sem ficar tão firme a ponto de rachar durante a modelagem.",
    type: "recipe",
    items: ["INGREDIENTES · 1 caixa/lata de leite condensado, 100 g de chocolate branco, 1 colher de sopa de manteiga e cerca de ½ caixa de creme de leite.", "PREPARO · coloque leite condensado, manteiga e chocolate na panela. Cozinhe em fogo baixo, mexendo continuamente e raspando fundo e laterais.", "PONTO · quando a massa estiver encorpada e começar a se desprender do fundo, faça o teste da espátula: ao passar, o fundo deve aparecer por alguns segundos.", "FINALIZAÇÃO · desligue, incorpore o creme de leite e misture até ficar homogêneo. A quantidade pode ser ajustada conforme o ponto desejado.", "RESFRIAMENTO · transfira para recipiente raso, cubra com filme em contato e deixe esfriar completamente antes de modelar.", "RENDIMENTO · pese a massa pronta. Divida pelo peso usado em cada morango para descobrir quantas unidades o lote realmente entrega."],
    tip: "Não dependa apenas do tempo de panela. O ponto varia com panela, fogo, marca dos ingredientes e quantidade produzida.",
  },
  {
    section: "Capítulo 6 · Técnica",
    title: "O ponto que muda tudo",
    lead: "O brigadeiro é uma das etapas que mais interfere na aparência final. Aprenda a reconhecer o ponto pelo comportamento da massa.",
    type: "table",
    items: ["MUITO MOLE · escorre, deixa a fruta aparente e dificulta manter um acabamento uniforme. SOLUÇÃO · cozinhe um pouco mais e teste novamente.", "IDEAL · massa lisa, firme e maleável; permite envolver a fruta sem perder o formato. RESULTADO · camada regular e acabamento limpo.", "MUITO FIRME · quebra ou racha ao envolver o morango e pode deixar marcas. SOLUÇÃO · ajuste com pequena quantidade de creme de leite e trabalhe novamente.", "APÓS RESFRIAR · o brigadeiro sempre firma mais. Por isso, o ponto na panela não deve ser excessivamente seco."],
    tip: "Faça uma unidade-teste antes de produzir todas. É melhor corrigir o ponto em um pedaço do lote do que perder a produção inteira.",
  },
  {
    section: "Capítulo 7 · Fruta",
    title: "Morangos preparados",
    lead: "A fruta é a base do produto. Um morango bonito, firme e completamente seco faz diferença tanto na montagem quanto na conservação.",
    type: "image",
    items: ["Selecione frutas firmes, vermelhas e sem pontos machucados.", "Higienize conforme boas práticas para frutas frescas e deixe escorrer completamente.", "Seque uma a uma com papel absorvente, inclusive perto das folhas e do pedúnculo.", "Não monte com a fruta ainda úmida. Água prejudica a aderência das camadas e favorece deterioração.", "Padronize tamanhos sempre que possível para que o peso, preço e apresentação sejam consistentes."],
  },
  {
    section: "Capítulo 8 · Crocância",
    title: "Caramelo Crocante",
    lead: "O caramelo deve resultar em uma placa fina, seca e quebradiça, capaz de virar pequenos cristais para o acabamento.",
    type: "recipe",
    items: ["INGREDIENTES · açúcar, água e corante alimentício vermelho em gel, se quiser a cor característica.", "PREPARO · coloque açúcar e água na panela e leve ao fogo. Evite mexer depois que a mistura começar a ferver para reduzir a cristalização.", "PONTO · acompanhe a mudança de cor e, se utilizar termômetro, trabalhe com uma referência de caramelo duro adequada ao seu equipamento. O tom deve ficar rubi, sem gosto de queimado.", "COR · adicione o corante com cuidado e mantenha o preparo uniforme. A cor escurece conforme o caramelo avança.", "PLACA · despeje uma camada fina sobre papel manteiga ou tapete de silicone e deixe esfriar completamente.", "CRISTAIS · quebre a placa em fragmentos de tamanhos variados. Guarde em recipiente seco e bem fechado até a montagem."],
    tip: "Umidade é inimiga do crocante. Nunca armazene o caramelo em recipiente aberto ou junto de ingredientes que liberem vapor.",
  },
  {
    section: "Capítulo 9 · Acabamento",
    title: "Cristais que parecem joias",
    lead: "O objetivo não é cobrir o doce com pedaços aleatórios, mas criar uma distribuição intencional de brilho e textura.",
    type: "list",
    items: ["Use fragmentos pequenos para preencher espaços e criar continuidade.", "Use alguns fragmentos médios para dar volume e chamar atenção no close.", "Evite peças enormes, muito pesadas ou pontiagudas.", "Misture tamanhos para evitar aparência industrial e repetitiva.", "Faça o caramelo em lotes pequenos quando estiver testando cor e espessura.", "Mantenha os cristais secos até o momento da aplicação."],
    tip: "Reserve os fragmentos mais bonitos para a parte frontal da unidade. O cliente percebe primeiro a região que fica voltada para a câmera.",
  },
  {
    section: "Capítulo 10 · Montagem",
    title: "Montagem do Morango Cravejado",
    lead: "Trabalhe em uma linha de produção. Cada etapa deve estar pronta antes de iniciar a seguinte.",
    type: "list",
    items: ["01 · Higienize, escorra e seque completamente os morangos.", "02 · Porcione o brigadeiro para manter espessura semelhante entre as unidades.", "03 · Envolva cada morango sem deixar bolsões de ar e alise a superfície.", "04 · Leve para resfriar até a camada ficar firme ao toque.", "05 · Banhe no chocolate escolhido e deixe o excesso escorrer.", "06 · Enquanto o chocolate ainda estiver fresco, aplique os cristais de caramelo.", "07 · Apoie em superfície adequada e deixe firmar sem movimentar.", "08 · Faça uma inspeção: base limpa, cristais equilibrados e chocolate sem falhas.", "09 · Embale somente quando o produto estiver firme e em condição adequada para armazenamento."],
    tip: "Padronize o peso de cada camada. Consistência é mais importante para o negócio do que fazer uma unidade perfeita e outra completamente diferente.",
  },
  {
    section: "Capítulo 11 · Apresentação",
    title: "O acabamento que vende",
    lead: "A pessoa compra primeiro com os olhos. Pequenos detalhes fazem o produto parecer artesanal, premium e confiável.",
    type: "image",
    items: ["Remova excesso de chocolate da base antes de embalar.", "Distribua os cristais sem esconder completamente o chocolate.", "Evite manchas, marcas de dedo e resíduos de caramelo na embalagem.", "Padronize tamanho, peso e posição da decoração.", "Fotografe sempre o produto já no padrão que será entregue ao cliente."],
  },
  {
    section: "Capítulo 12 · Variações",
    title: "Variações com intenção",
    lead: "Crie variações para aumentar o cardápio, não para complicar sua operação.",
    type: "list",
    items: ["CLÁSSICO · brigadeiro branco + chocolate + caramelo vermelho.", "PREMIUM · chocolate de perfil mais sofisticado e embalagem presenteável.", "ROMÂNTICO · tons rosados, tag e fita para datas especiais.", "CHOCOLATE · variação de cobertura mantendo a mesma estrutura de produção.", "KITS · duas, quatro ou seis unidades para presente ou compartilhamento.", "EDIÇÕES SAZONAIS · altere apenas acabamento, embalagem ou comunicação para testar novas ocasiões."],
    tip: "Comece com poucos sabores. Muitos SKUs aumentam estoque, desperdício e complexidade antes de você saber o que vende.",
  },
  {
    section: "Parte 3 · Transformar em Negócio",
    title: "Ficha técnica profissional",
    lead: "A ficha técnica transforma uma receita em um produto repetível. Preencha uma vez e atualize sempre que preço ou fornecedor mudar.",
    type: "table",
    items: ["FRUTA · peso médio do morango: ____ g | custo por kg: R$ ____ | custo por unidade: R$ ____", "BRIGADEIRO · lote pronto: ____ g | rendimento: ____ unidades | custo do lote: R$ ____", "CHOCOLATE · quantidade por unidade: ____ g | custo por kg: R$ ____ | custo por unidade: R$ ____", "CARAMelo · lote pronto: ____ g | quantidade usada: ____ g | custo por unidade: R$ ____", "EMBALAGEM · caixa/berço/forrinho/tag/fita: R$ ____ por unidade", "PERDAS · percentual estimado: ____% | valor médio por unidade: R$ ____", "CUSTO DIRETO TOTAL · R$ ____ por unidade | RENDIMENTO DO LOTE · ____ unidades"],
  },
  {
    section: "Capítulo 14 · Finanças",
    title: "Conheça o custo real",
    type: "impact",
    lead: "CUSTO REAL = INGREDIENTES + EMBALAGEM + PERDAS + PRODUÇÃO + MÃO DE OBRA + OUTROS GASTOS DIRETOS",
    items: ["Se você calcula apenas os ingredientes, pode estar trabalhando muito e ainda assim lucrando pouco.", "Registre os gastos que realmente variam com a produção e defina uma forma simples de ratear os custos fixos quando fizer sentido.", "O objetivo não é complicar sua planilha: é saber quanto custa produzir uma unidade antes de decidir quanto cobrar."],
  },
  {
    section: "Exemplo ilustrativo",
    title: "Do custo ao preço",
    lead: "O exemplo abaixo é didático. Substitua todos os números pelos seus próprios custos antes de vender.",
    type: "table",
    items: ["MORANGO E INGREDIENTES · R$ 4,20 por unidade", "EMBALAGEM · R$ 1,30 por unidade", "PRODUÇÃO / MÃO DE OBRA RATEADA · R$ 2,50 por unidade", "CUSTO REAL ILUSTRATIVO · R$ 8,00 por unidade", "PREÇO ILUSTRATIVO · R$ 16,00 por unidade", "RESULTADO BRUTO ANTES DE OUTROS CUSTOS · R$ 8,00 por unidade", "IMPORTANTE · não copie este preço; use sua ficha técnica, mercado e posicionamento."],
  },
  {
    section: "Capítulo 15 · Precificação",
    title: "Como definir o preço",
    lead: "Preço não é apenas custo multiplicado por dois. Ele precisa sustentar a operação e fazer sentido para o valor percebido pelo cliente.",
    type: "list",
    items: ["1 · DESCUBRA O CUSTO REAL por unidade usando a ficha técnica.", "2 · DEFINA A MARGEM desejada e o quanto precisa sobrar para o negócio.", "3 · OBSERVE O MERCADO local sem copiar concorrentes cegamente.", "4 · AVALIE O POSICIONAMENTO: produto artesanal, premium, presenteável ou entrada.", "5 · CONSIDERE A EMBALAGEM e a experiência de compra.", "6 · TESTE O PREÇO com pequenos lotes e observe conversão, recompra e margem.", "7 · REVISE regularmente quando ingredientes, embalagem ou fornecedores aumentarem de preço."],
    tip: "Tenha um preço mínimo que você não aceita ultrapassar para baixo. Desconto deve ser uma decisão, não o padrão de toda venda.",
  },
  {
    section: "Capítulo 16 · Margem",
    title: "Preço baixo não significa venda fácil",
    type: "impact",
    lead: "UM PREÇO SUSTENTÁVEL PROTEGE SUA PRODUÇÃO, SUA QUALIDADE E SUA MOTIVAÇÃO PARA CONTINUAR VENDENDO.",
    items: ["Preço muito baixo pode atrair atenção, mas também pode deixar pouco dinheiro para reposição, embalagem, perdas e crescimento.", "Quando o produto tem acabamento e apresentação premium, comunique esses diferenciais antes de oferecer desconto.", "Se precisar fazer uma promoção, defina começo, fim e objetivo: conquistar clientes, aumentar ticket ou girar estoque."],
  },
  {
    section: "Capítulo 17 · Embalagem",
    title: "Embalagem é convite",
    lead: "A embalagem protege o produto e também comunica preço, cuidado e ocasião de consumo.",
    type: "image",
    items: ["UNIDADE · boa para experimentação e compras por impulso.", "CAIXA COM 2 · opção simples para casal ou pequeno presente.", "CAIXA COM 4 · formato equilibrado para presente e compartilhamento.", "CAIXA COM 6 · aumenta ticket e funciona bem para família e eventos.", "PRESENTEÁVEL · caixa, papel, fita e tag elevam percepção de valor.", "PROTEÇÃO · o doce precisa chegar inteiro, sem esmagar decoração ou chocolate."],
  },
  {
    section: "Capítulo 18 · Ticket",
    title: "Aumente o ticket médio",
    lead: "Em vez de tentar vender mais para cada pessoa à força, facilite escolhas maiores e mais convenientes.",
    type: "list",
    items: ["Mostre 3 opções de quantidade: pequena, média e presenteável.", "Crie um combo que pareça claramente vantajoso sem destruir sua margem.", "Ofereça embalagem premium como escolha adicional.", "Use datas comemorativas para criar kits com quantidade e comunicação próprias.", "Sugira complemento apenas quando fizer sentido para a ocasião.", "Mostre o preço por caixa e por unidade para o cliente entender o benefício do kit."],
    tip: "Uma boa ancoragem apresenta primeiro uma opção premium e depois as alternativas. Faça isso com honestidade, sem preços artificiais.",
  },
  {
    section: "Parte 4 · Marketing e Vendas",
    title: "Instagram que dá vontade de comprar",
    lead: "O Instagram deve responder rapidamente três perguntas: o que é, quanto custa e como pedir.",
    type: "image",
    items: ["BIO · explique o produto e indique a região ou forma de atendimento.", "DESTAQUES · cardápio, encomendas, sabores, avaliações e entrega.", "FEED · alterne produto, bastidores, embalagem, corte, depoimentos e ofertas.", "STORIES · mostre disponibilidade, produção do dia, perguntas e chamadas para pedido.", "CTA · termine conteúdos de venda com uma ação simples: chamar no WhatsApp, reservar ou consultar disponibilidade."],
  },
  {
    section: "Capítulo 20 · Conteúdo",
    title: "Ideias para Reels",
    lead: "Vídeos curtos devem mostrar transformação ou textura nos primeiros segundos.",
    type: "list",
    items: ["HOOK · “Você já viu um morango feito desse jeito?”", "TRANSFORMAÇÃO · morango → brigadeiro → chocolate → cravejado.", "TEXTURA · close no caramelo quebrando ou nos cristais sendo aplicados.", "CORTE · mostre a primeira mordida e o contraste interno.", "BASTIDORES · bancada organizada e produção em lote.", "PREÇO · explique de forma transparente o que existe por trás do valor de um produto artesanal.", "OFERTA · mostre a caixa pronta e informe quantidade, data e forma de pedido."],
    tip: "Não precisa de edição complexa. Luz boa, câmera próxima, mãos limpas e um produto bonito costumam valer mais do que muitos efeitos.",
  },
  {
    section: "Capítulo 21 · Fotografia",
    title: "Fotografia que vende",
    lead: "A fotografia precisa revelar textura e tamanho sem deixar o produto artificial.",
    type: "image",
    items: ["Use luz natural indireta perto de uma janela sempre que possível.", "Evite luz muito dura diretamente sobre o chocolate.", "Faça pelo menos uma foto inteira, uma aproximada e uma do interior/corte.", "Use fundo limpo e poucos elementos de apoio.", "Fotografe a embalagem para vender a experiência completa.", "Mantenha o mesmo estilo de enquadramento para criar identidade no perfil."],
  },
  {
    section: "Capítulo 22 · WhatsApp",
    title: "Venda pelo WhatsApp",
    lead: "A conversa deve reduzir dúvidas e facilitar o fechamento. Não transforme o atendimento em uma sequência confusa de mensagens.",
    type: "list",
    items: ["1 · RESPONDA com simpatia e confirme o que a pessoa deseja.", "2 · APRESENTE o cardápio com fotos, quantidades e preços.", "3 · PERGUNTE data, quantidade e preferência de embalagem.", "4 · CONFIRME disponibilidade antes de prometer o pedido.", "5 · ENVIE valor total, forma de pagamento e regras de retirada/entrega.", "6 · REGISTRE o pedido em uma planilha ou sistema para não depender da memória.", "7 · FAÇA PÓS-VENDA e peça avaliação ou autorização para compartilhar o feedback."],
  },
  {
    section: "Capítulo 23 · Conversão",
    title: "Mensagens prontas de venda",
    lead: "Adapte o texto ao seu jeito de falar. O objetivo é ser claro, humano e direto.",
    type: "recipe",
    items: ["ABERTURA · “Oi! Que bom ter você por aqui 🍓 Hoje temos Morango Cravejado feito sob encomenda, com morango fresco, chocolate e cristais crocantes.”", "CARDÁPIO · “Tenho opções de 1, 2, 4 e 6 unidades. Se você quiser, te envio as opções e os valores.”", "QUALIFICAÇÃO · “Para qual dia você gostaria e quantas unidades precisa?”", "FECHAMENTO · “Perfeito! Posso reservar sua caixa para [dia]. O total fica em R$ ____. A retirada/entrega funciona assim: ____.”", "CONFIRMAÇÃO · “Pedido confirmado 🍓 Obrigado(a) pela confiança! Vou deixar tudo preparado para o horário combinado.”", "PÓS-VENDA · “Oi! Passando para saber se você gostou do Morango Cravejado. Seu feedback ajuda muito nosso trabalho. ❤️”"],
    tip: "Não pressione o cliente. Facilite a decisão com informações completas, fotos e opções claras.",
  },
  {
    section: "Capítulo 24 · Ofertas",
    title: "Combos e ofertas",
    lead: "Use os combos para orientar o cliente, não apenas para dar desconto.",
    type: "table",
    items: ["1 UNIDADE · R$ ____ | objetivo: experimentação", "CAIXA COM 2 · R$ ____ | objetivo: casal / pequeno presente", "CAIXA COM 4 · R$ ____ | objetivo: presente / compartilhamento", "CAIXA COM 6 · R$ ____ | objetivo: maior ticket", "CAIXA PRESENTE · R$ ____ | objetivo: datas especiais", "OFERTA DA SEMANA · R$ ____ | período: ____ até ____", "REGRA · calcule sempre o desconto sobre uma margem que continue saudável."],
  },
  {
    section: "Capítulo 25 · Operação",
    title: "Produção sob encomenda",
    lead: "Produzir por pedido reduz desperdício e ajuda a entregar um produto mais fresco, mas exige regras claras.",
    type: "list",
    items: ["Defina antecedência mínima para pedidos pequenos e grandes.", "Estabeleça quantidade mínima para datas de alta demanda.", "Informe horário e local de retirada ou área de entrega.", "Defina política para alterações, cancelamentos e atrasos.", "Confirme o pagamento ou sinal antes de bloquear capacidade de produção, conforme sua política.", "Faça uma lista diária com quantidade, cliente, horário, embalagem e observações.", "Reserve margem de tempo para imprevistos e acabamento."],
    tip: "Nunca prometa mais unidades do que consegue produzir mantendo o padrão. Reputação vale mais que um pico de faturamento.",
  },
  {
    section: "Capítulo 26 · Gestão",
    title: "Controle financeiro",
    lead: "Uma rotina simples de registro mostra se você está vendendo muito ou realmente ganhando dinheiro.",
    type: "table",
    items: ["DATA · ____ | PEDIDOS · ____ | UNIDADES · ____ | FATURAMENTO · R$ ____", "CUSTO DOS INGREDIENTES · R$ ____ | EMBALAGENS · R$ ____", "OUTROS CUSTOS DIRETOS · R$ ____ | MÃO DE OBRA · R$ ____", "CUSTO TOTAL DO DIA · R$ ____ | RESULTADO BRUTO · R$ ____", "TICKET MÉDIO · R$ ____ | MARGEM ESTIMADA · ____%", "OBSERVAÇÕES · produto mais vendido: ____ | desperdício: ____ | melhoria: ____"],
  },
  {
    section: "Capítulo 27 · Lançamento",
    title: "Plano de lançamento em 7 dias",
    lead: "Um lançamento simples cria expectativa antes de abrir as encomendas.",
    type: "list",
    items: ["DIA 1 · CURIOSIDADE — publique um close do produto sem explicar tudo.", "DIA 2 · BASTIDORES — mostre ingredientes, caramelo ou montagem.", "DIA 3 · REVELAÇÃO — apresente o Morango Cravejado e explique o diferencial.", "DIA 4 · PROVA — mostre corte, textura, embalagem ou primeiros feedbacks.", "DIA 5 · OFERTA — publique quantidades, preços e como encomendar.", "DIA 6 · URGÊNCIA REAL — informe prazo ou quantidade limitada, somente se for verdade.", "DIA 7 · FECHAMENTO — lembre o horário limite para pedidos e agradeça quem comprou."],
  },
  {
    section: "Capítulo 28 · Produção",
    title: "Checklist de produção",
    lead: "Use este checklist antes de considerar um lote pronto.",
    type: "list",
    items: ["☐ Morangos selecionados, higienizados e completamente secos.", "☐ Brigadeiro preparado e no ponto correto.", "☐ Caramelo pronto, frio e armazenado seco.", "☐ Chocolate disponível e preparado para o método escolhido.", "☐ Porções padronizadas.", "☐ Cristais distribuídos de maneira equilibrada.", "☐ Bases e laterais limpas.", "☐ Produto firme antes de embalar.", "☐ Embalagem limpa, seca e adequada ao tamanho.", "☐ Lote identificado com data e controle interno."],
  },
  {
    section: "Capítulo 29 · Venda",
    title: "Checklist de venda",
    lead: "Uma venda organizada termina apenas quando o cliente recebe e você registra o resultado.",
    type: "list",
    items: ["☐ Fotos atuais e fiéis ao produto entregue.", "☐ Cardápio e preços revisados.", "☐ Disponibilidade confirmada.", "☐ Data e quantidade registradas.", "☐ Pagamento/sinal registrado conforme sua política.", "☐ Retirada ou entrega combinada.", "☐ Pedido conferido antes de sair.", "☐ Cliente recebeu instruções de conservação quando necessárias.", "☐ Feedback solicitado após a entrega.", "☐ Venda lançada no controle financeiro."],
  },
  {
    section: "Capítulo 30 · Bônus",
    title: "Banco de conteúdo para vender",
    lead: "Quando faltar ideia para postar, volte a esta página. Seu próprio processo é uma fonte de conteúdo.",
    type: "list",
    items: ["POST · “O detalhe que faz nosso Morango Cravejado ser diferente.”", "POST · “Por trás de uma caixa pronta existem várias etapas de cuidado.”", "REELS · montagem completa em cortes rápidos.", "REELS · close na quebra dos cristais de caramelo.", "STORY · enquete: “Você escolheria 1 ou 4 unidades?”", "STORY · bastidor da embalagem do dia.", "PROVA SOCIAL · publique avaliações reais com autorização.", "OFERTA · mostre a caixa pronta, quantidade disponível e prazo para pedir.", "EDUCAÇÃO · explique por que fruta seca, embalagem e temperatura fazem diferença."],
  },
  {
    section: "Encerramento · Próximo passo",
    title: "Transforme receita em produto",
    lead: "Agora você tem um caminho para sair da receita isolada e construir uma operação: padronize, calcule, apresente, divulgue, venda e registre.",
    type: "impact",
    items: ["COMECE PEQUENO · faça um lote de teste e registre tudo.", "PADRONIZE · escolha pesos, acabamento e embalagem.", "CALCULE · descubra seu custo real antes de definir o preço.", "TESTE · venda para um grupo pequeno e recolha feedback.", "MELHORE · ajuste receita, processo, foto, oferta e atendimento.", "REPITA · transforme o que funciona em rotina."],
    tip: "O melhor produto não é o mais complicado. É aquele que você consegue produzir com qualidade, vender com clareza e repetir com lucro.",
  },
];

const partRanges = [
  ["PARTE 1", "O Produto", 1, 5],
  ["PARTE 2", "Como Preparar", 6, 13],
  ["PARTE 3", "Negócio e Precificação", 14, 20],
  ["PARTE 4", "Marketing e Vendas", 21, 33],
] as const;

function getPageImage(title: string) {
  if (title === "Embalagem é convite") return packagingImage;
  if (title === "O que é o Morango Cravejado" || title === "Morangos preparados" || title === "O acabamento que vende" || title === "Instagram que dá vontade de comprar" || title === "Fotografia que vende") return detailImage;
  return detailImage;
}

function PageContent({ page }: { page: Page }) {
  if (page.type === "impact") {
    return <div className="internal-impact"><div className="impact-icon"><Sparkles size={24} /></div><p className="impact-statement">{page.lead}</p>{page.items && <div className="impact-points">{page.items.map((item) => <div key={item} className="impact-point"><Check size={15} /> <span>{item}</span></div>)}</div>}</div>;
  }

  if (page.type === "image") {
    return <div className="image-layout"><div className="image-frame"><img src={getPageImage(page.title)} alt={page.title} /></div><div className="image-copy">{page.items?.map((item, index) => <div className="editorial-bullet" key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div></div>;
  }

  if (page.type === "recipe") {
    return <div className="recipe-layout"><div className="recipe-steps">{page.items?.map((item, index) => { const [label, ...rest] = item.split(" · "); return <div className="recipe-step" key={item}><div className="recipe-number">{String(index + 1).padStart(2, "0")}</div><div><p className="recipe-label">{label}</p><p className="recipe-text">{rest.join(" · ")}</p></div></div>; })}</div>{page.tip && <aside className="tip-card"><Sparkles size={17} /><div><strong>DICA DO GUIA</strong><p>{page.tip}</p></div></aside>}</div>;
  }

  if (page.type === "table") {
    return <div className="editorial-table">{page.items?.map((item, index) => { const [label, ...rest] = item.split(" · "); return <div className={index === page.items!.length - 1 ? "table-row table-row-last" : "table-row"} key={item}><div className="table-index">{String(index + 1).padStart(2, "0")}</div><div><p className="table-label">{label}</p><p className="table-text">{rest.join(" · ")}</p></div></div>; })}</div>;
  }

  return <div className="list-layout">{page.items?.map((item, index) => { const [label, ...rest] = item.split(" · "); const hasLabel = rest.length > 0; return <article className="info-card" key={item}><div className="info-number">{String(index + 1).padStart(2, "0")}</div><div><p className={hasLabel ? "info-label" : "info-text"}>{label}</p>{hasLabel && <p className="info-description">{rest.join(" · ")}</p>}</div></article>; })}{page.tip && <aside className="tip-card"><Sparkles size={17} /><div><strong>DICA DO GUIA</strong><p>{page.tip}</p></div></aside>}</div>;
}

function Ebook() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return <main className="pb-8">
    <nav className="screen-nav sticky top-0 z-20 border-b border-border bg-background/95 px-5 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-[794px] items-center justify-between gap-4">
        <button onClick={() => go("sumario")} className="text-xs font-bold uppercase tracking-[.16em] text-primary">Sumário</button>
        <span className="font-display text-lg text-primary">Morango Cravejado</span>
        <button onClick={() => window.print()} className="text-xs font-bold uppercase tracking-[.16em] text-primary">Imprimir / PDF</button>
      </div>
    </nav>

    <section id="capa" className="book-page editorial-page cover-page flex flex-col justify-between">
      <div className="relative z-10"><p className="eyebrow">Ebook gourmet · edição completa</p><div className="gold-rule mt-7" /><h1 className="book-title mt-8 text-6xl text-primary sm:text-8xl">MORANGO<br />CRAVEJADO</h1><p className="mt-7 max-w-md text-sm font-medium leading-7 text-foreground">O guia completo para preparar, padronizar, precificar, divulgar e vender um produto artesanal com aparência premium.</p></div>
      <img src={coverImage} alt="Morango cravejado gourmet coberto por cristais vermelhos" width={1200} height={1600} className="absolute inset-x-0 bottom-0 h-[56%] w-full object-cover" />
      <div className="relative z-10 mt-auto bg-card/90 p-5 backdrop-blur-sm"><p className="text-xs uppercase tracking-[.18em] text-gold">Receita · técnica · custos · vendas</p></div>
    </section>

    <section id="sumario" className="book-page editorial-page"><p className="eyebrow">Navegação</p><h2 className="book-title mt-5 text-5xl text-primary">Sumário</h2><div className="mt-10 grid gap-6">{partRanges.map(([part, name, start, end]) => <button key={part} onClick={() => go(`pagina-${start}`)} className="toc-item flex items-end justify-between border-b border-border pb-5 text-left"><span><span className="block text-xs font-bold tracking-[.16em] text-gold">{part}</span><span className="book-title mt-2 block text-3xl text-primary">{name}</span></span><span className="text-sm text-muted-foreground">{start}—{end}</span></button>)}</div><div className="absolute bottom-20 left-[74px] right-[74px] border-t border-border pt-5"><p className="max-w-xl text-sm leading-6 text-muted-foreground">Um guia feito para consulta: você pode voltar às fichas, checklists, mensagens e cálculos sempre que precisar.</p></div><span className="page-number">—</span></section>

    {pages.map((page, index) => {
      const number = index + 1;
      const isChapterStart = page.section.startsWith("Parte");
      return <section id={`pagina-${number}`} className={`book-page editorial-page internal-page internal-${page.type ?? "list"}`} key={`${page.title}-${number}`}>
        <header className="internal-header">
          <div className="internal-meta"><span className="eyebrow">{page.section}</span><span className="chapter-number">{String(number).padStart(2, "0")}</span></div>
          <div className="gold-rule mt-4" />
          <h2 className={`book-title mt-5 text-4xl text-primary ${isChapterStart ? "sm:text-5xl" : ""}`}>{page.title}</h2>
          {page.lead && <p className="internal-lead">{page.lead}</p>}
        </header>
        <div className="internal-body"><PageContent page={page} /></div>
        <footer className="internal-footer"><span>Morango Cravejado · Guia Completo</span><span>{String(number).padStart(2, "0")}</span></footer>
      </section>;
    })}

    <div className="book-navigation screen-nav"><button onClick={() => go("sumario")}><ChevronLeft size={15} /> Sumário</button><span>Fim do guia</span><button onClick={() => go("capa")}>Capa <ChevronRight size={15} /></button></div>
  </main>;
}
