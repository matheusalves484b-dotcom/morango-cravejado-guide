import "@/sales.css";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronDown, Gift, ShieldCheck, Sparkles, Star, ArrowRight } from "lucide-react";
import coverImage from "@/assets/morango-cravejado-cover.webp";
import coverMobileImage from "@/assets/morango-cravejado-cover-mobile.webp";
import detailImage from "@/assets/morango-cravejado-detail.webp";
import packagingImage from "@/assets/morango-cravejado-packaging.webp";

const CHECKOUT_URL = "https://pay.lowify.com.br/checkout?product_id=PErwVu";
const META_PIXEL_ID = "1764846594706015";

type MetaFbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
};

type MetaWindow = Window & {
  fbq?: MetaFbq;
  _fbq?: MetaFbq;
  __metaPixelInitialized?: boolean;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Morango Cravejado — Chegue Antes da Multidão" },
      { name: "description", content: "Aprenda a preparar, padronizar, precificar, apresentar e vender Morango Cravejado com um guia prático." },
      { property: "og:title", content: "Morango Cravejado — Chegue Antes da Multidão" },
      { property: "og:description", content: "Aprenda o produto e teste uma nova oportunidade antes que ela fique comum." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preload", href: coverMobileImage, as: "image", media: "(max-width: 850px)" },
      { rel: "preload", href: coverImage, as: "image", media: "(min-width: 851px)" },
    ],
  }),
  component: SalesPage,
});

function CTA({ children = "QUERO APRENDER O MORANGO CRAVEJADO" }: { children?: React.ReactNode }) {
  const goToCheckout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.assign(CHECKOUT_URL);
  };

  return <a className="cta" href={CHECKOUT_URL} target="_self" rel="noopener" onClick={goToCheckout}><span>{children}</span><ArrowRight className="cta-arrow" size={19}/></a>;
}

function Countdown() {
  const [time, setTime] = useState({ h: 2, m: 59, s: 59 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime((t) => {
        if (!t.h && !t.m && !t.s) return { h: 2, m: 59, s: 59 };
        if (t.s) return { ...t, s: t.s - 1 };
        if (t.m) return { h: t.h, m: t.m - 1, s: 59 };
        return { h: t.h - 1, m: 59, s: 59 };
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return <div className="digits">
    <div><strong>{String(time.h).padStart(2,"0")}</strong><small>HORAS</small></div>
    <i>:</i>
    <div><strong>{String(time.m).padStart(2,"0")}</strong><small>MIN</small></div>
    <i>:</i>
    <div><strong>{String(time.s).padStart(2,"0")}</strong><small>SEG</small></div>
  </div>;
}

function SalesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as MetaWindow;

    if (!w.fbq) {
      const fbq = ((...args: unknown[]) => {
        if (fbq.callMethod) {
          fbq.callMethod(...args);
        } else {
          fbq.queue.push(args);
        }
      }) as MetaFbq;
      fbq.queue = [];
      w.fbq = fbq;
      w._fbq = fbq;

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }

    if (!w.__metaPixelInitialized) {
      w.fbq("init", META_PIXEL_ID);
      w.fbq("track", "PageView");
      w.fbq("track", "ViewContent", {
        content_name: "Morango Cravejado",
        content_type: "product",
        content_ids: ["PErwVu"],
        value: 10,
        currency: "BRL",
      });
      w.__metaPixelInitialized = true;
    }

    const handleCheckoutClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a") as HTMLAnchorElement | null;
      if (link?.href === CHECKOUT_URL) {
        w.fbq?.("track", "InitiateCheckout", {
          content_name: "Morango Cravejado",
          content_type: "product",
          content_ids: ["PErwVu"],
          value: 10,
          currency: "BRL",
        });
      }
    };

    document.addEventListener("click", handleCheckoutClick);
    return () => document.removeEventListener("click", handleCheckoutClick);
  }, []);

  const faqs = [
    ["O que eu recebo?", "Você recebe o guia digital do Morango Cravejado, com preparo, montagem, padronização, ficha técnica, precificação, embalagem, conteúdo e estratégias práticas de venda."],
    ["Preciso ter experiência com doces?", "Não. O material foi pensado para quem está começando e também serve para quem já vende doces e quer testar um novo produto."],
    ["Posso vender o Morango Cravejado?", "Sim. O guia mostra como transformar a receita em produto: padronização, custos, preço, embalagem, conteúdo e atendimento. Resultados financeiros não são garantidos e dependem de execução, mercado e divulgação."],
    ["O acesso é imediato?", "Sim. Após a confirmação do pagamento, o acesso é liberado pela plataforma de entrega utilizada na sua compra."],
    ["Existe garantia?", "Sim. Você tem 7 dias de garantia para conhecer o material. Dentro desse prazo, pode solicitar o reembolso conforme as condições da oferta."],
  ];

  const testimonials = [
    ["“O guia me ajudou a enxergar o produto além da receita. A parte de organização e precificação fez muita diferença para eu entender como testar.”", "Maria", "Primeiro contato com o produto"],
    ["“Gostei da forma prática de organizar o preparo. Ficou muito mais fácil visualizar o que preciso separar antes de começar a produzir.”", "Juliana", "Começando agora"],
    ["“A parte de apresentação e conteúdo chamou minha atenção. É exatamente o tipo de detalhe que eu não pensava quando fazia apenas a receita.”", "Camila", "Testando novas vendas"],
    ["“Ter um passo a passo organizado deixa tudo menos confuso. Dá para consultar enquanto você prepara e ir ajustando aos poucos.”", "Fernanda", "Produção artesanal"],
  ];

  return <main className="sales-page">
    <div className="topbar"><span className="topbar-dot"/> <strong>OFERTA DE LANÇAMENTO</strong><span>Aprenda cedo. Teste primeiro.</span></div>
    <section className="hero"><div className="hero-glow"/><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><Sparkles size={15}/> NOVA ONDA DOS DOCES ARTESANAIS</div><h1>O próximo doce que pode <em>parar o scroll</em> já tem nome.</h1><div className="hero-price"><span>GUIA COMPLETO POR APENAS </span><strong>R$ 10,00</strong></div><p className="hero-sub">Aprenda o <strong>Morango Cravejado</strong>: morango, cremosidade, chocolate e crocância em uma apresentação criada para chamar atenção.</p><p className="hero-opportunity"><b>Não espere ficar lotado.</b> Aprenda, teste e descubra se essa novidade pode fazer sentido para o seu público.</p><CTA>QUERO O GUIA • R$ 10,00</CTA><div className="microproof"><span>✓ Acesso digital</span><span>✓ Pagamento único</span><span>✓ 7 dias de garantia</span></div></div><div className="hero-product"><div className="floating-badge"><span>🔥</span><b>NOVIDADE</b><small>chegue antes</small></div><picture><source media="(max-width: 850px)" srcSet={coverMobileImage}/><picture><source media="(max-width: 850px)" srcSet={coverMobileImage}/><picture><source media="(max-width: 850px)" srcSet={coverMobileImage}/><img src={coverImage} alt="Guia digital Morango Cravejado" fetchPriority="high" decoding="async"/></picture></picture></picture></div></div></section>
    <section className="ticker"><div className="ticker-track"><span>🍓 MORANGO CRAVEJADO</span><span>✦ CHEGUE ANTES DA MULTIDÃO</span><span>🍓 MORANGO CRAVEJADO</span><span>✦ NOVA OPORTUNIDADE</span></div></section>
    <section className="section light"><div className="container narrow center"><div className="eyebrow dark">VOCÊ LEMBRA DO MORANGO DO AMOR?</div><h2>Quando um doce vira febre, quem chega <span>primeiro</span> ganha atenção.</h2><p>O Morango do Amor mostrou como uma apresentação diferente pode transformar uma fruta conhecida em um produto desejado, compartilhado e vendido por produtores artesanais.</p><p className="strong-line">A próxima onda pode ser outra. <b>A diferença está em estar preparado para testar.</b></p></div><div className="container comparison"><div className="comparison-card"><span className="number">01</span><h3>Esperar todo mundo vender</h3><p>Você entra quando a novidade já virou comum e a disputa por atenção aumentou.</p><div className="bad">× Você chega depois</div></div><div className="comparison-arrow">OU</div><div className="comparison-card featured"><span className="number">02</span><h3>Aprender e testar cedo</h3><p>Você conhece o produto, cria seu padrão, testa preço e começa a produzir conteúdo enquanto existe curiosidade.</p><div className="good">✓ Você se posiciona cedo</div></div></div></section>
    <section className="section dark-section"><div className="container two-col"><img className="rounded-image" src={detailImage} alt="Detalhe do Morango Cravejado" loading="lazy" decoding="async"/><div className="section-copy"><div className="eyebrow">VENDA PELOS OLHOS</div><h2>Um produto feito para <span>chamar atenção.</span></h2><p>O contraste do vermelho, chocolate, creme e crocância cria um visual forte para fotos, Reels, Stories e vídeos de corte.</p><ul className="check-list"><li><Check/> Aparência marcante</li><li><Check/> Textura e contraste</li><li><Check/> Fácil de mostrar em vídeo</li><li><Check/> Venda por unidade ou caixas</li><li><Check/> Apresentação presenteável</li></ul><CTA>QUERO APRENDER O PRODUTO</CTA></div></div></section>
    <section className="section light"><div className="container center narrow"><div className="eyebrow dark">O GUIA COMPLETO</div><h2>Não é só uma receita. É o caminho da ideia até a <span>venda.</span></h2><p>Você aprende os pontos que ajudam a transformar uma receita em um produto organizado, repetível e pronto para ser testado no mercado.</p></div><div className="container guide-preview"><div className="guide-preview-card"><div className="guide-preview-label">PRÉVIA DO CONTEÚDO</div><div className="guide-preview-page"><div className="guide-preview-top"><span>🍓 MORANGO CRAVEJADO</span><small>GUIA PRÁTICO</small></div><h3>Do preparo à venda: o que você precisa dominar</h3><p>Uma visão organizada para você não ficar apenas com a receita, mas entender como transformar o preparo em produto.</p><div className="guide-preview-grid"><div className="guide-preview-item"><b>01 · Preparo</b><span>Ingredientes, montagem e pontos de atenção.</span></div><div className="guide-preview-item"><b>02 · Padronização</b><span>Peso, rendimento e repetição do resultado.</span></div><div className="guide-preview-item"><b>03 · Precificação</b><span>Custos, margem e preço por unidade.</span></div><div className="guide-preview-item"><b>04 · Venda</b><span>Embalagem, conteúdo e atendimento.</span></div></div><div className="guide-preview-note">✓ Conteúdo organizado para consultar enquanto você produz</div></div></div></div><div className="container benefits-grid">{[["🍓","Preparo completo","Entenda cada etapa da montagem e os pontos que interferem no resultado."],["⚖️","Padronização","Organize peso, rendimento e repetição para produzir com consistência."],["💰","Custos e preço","Monte sua ficha técnica e entenda o custo de cada unidade."],["📦","Embalagem","Valorize o produto e facilite transporte, apresentação e entrega."],["📱","Conteúdo","Ideias de Reels, fotos e Stories para apresentar e gerar desejo."],["💬","Venda","Estruture encomendas, combos, atendimento e mensagens de pedido."]].map(([icon,title,text])=><article className="benefit" key={title}><div className="benefit-icon">{icon}</div><h3>{title}</h3><p>{text}</p><span className="benefit-link">Ver no guia →</span></article>)}</div></section>
    <section className="section cream"><div className="container two-col"><div className="section-copy"><div className="eyebrow dark">NÃO VENDA NO ESCURO</div><h2>Antes de colocar um preço, descubra <span>quanto custa produzir.</span></h2><p>Ingredientes são apenas uma parte. Embalagem, perdas e produção também entram na conta. O guia ajuda você a organizar esses números antes de definir seu preço.</p><div className="formula"><small>VISÃO SIMPLIFICADA</small><b>Custo real + margem desejada + posicionamento = preço sustentável</b></div><CTA>QUERO APRENDER A PRECIFICAR</CTA></div><div className="cost-card"><div className="cost-head"><span>EXEMPLO ILUSTRATIVO</span><small>Os valores variam conforme seus custos.</small></div><div className="cost-row"><span>Ingredientes</span><b>R$ __</b></div><div className="cost-row"><span>Embalagem</span><b>R$ __</b></div><div className="cost-row"><span>Perdas / produção</span><b>R$ __</b></div><div className="cost-total"><span>CUSTO REAL</span><strong>R$ __</strong></div><div className="price-tag">O guia ajuda você a montar essa conta.</div></div></div></section>
    <section className="section dark-section"><div className="container center narrow"><div className="eyebrow">NÃO PRECISA ESPERAR</div><h2>Enquanto alguns ainda estão descobrindo, você pode estar <span>testando.</span></h2><p>Não existe garantia de que um produto será viral ou de que você terá lucro. Existe, porém, uma vantagem prática em aprender cedo: você ganha tempo para testar antes de decidir se vale a pena escalar.</p></div><div className="container launch-steps">{[["01","Aprenda","Conheça a técnica e entenda o produto."],["02","Teste","Faça pequenas produções e ajuste seu padrão."],["03","Publique","Mostre o produto de forma irresistível."],["04","Venda","Abra encomendas e descubra a resposta do público."]].map(([n,t,d])=><div className="launch-step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="section light"><div className="container center narrow"><div className="eyebrow dark">PERCEPÇÃO DE VALOR</div><h2>O produto começa a ser vendido antes mesmo da <span>primeira mordida.</span></h2><p>Embalagem, textura, corte e fotografia ajudam a construir a percepção de valor.</p></div><div className="container image-strip"><img src={packagingImage} alt="Embalagem do Morango Cravejado" loading="lazy" decoding="async"/><div><div className="mini-card"><Gift/><b>Apresentação premium</b><span>Valorize a experiência de compra com uma embalagem coerente com o produto.</span></div><div className="mini-card"><Star/><b>Conteúdo que dá vontade</b><span>Use close, corte, crocância e bastidores para mostrar o diferencial.</span></div></div></div></section>
    <section className="section testimonials-section"><div className="container center narrow"><div className="eyebrow dark">QUEM JÁ CONHECEU O GUIA</div><h2>Mais segurança para tirar a ideia do <span>papel.</span></h2><p>Relatos de quem já começou a explorar o Morango Cravejado com mais organização.</p></div><div className="testimonial-viewport"><div className="testimonial-track">{[...testimonials,...testimonials].map(([quote,name,detail],index)=><article className="testimonial-card" key={`${name}-${index}`}><div><div className="testimonial-stars">★★★★★</div><p>{quote}</p></div><div className="testimonial-meta"><b>{name.charAt(0)}</b><span><strong>{name}</strong><br/>{detail}</span></div></article>)}</div></div><div className="container testimonial-note">← deslize para conhecer mais relatos →</div></section>
    <section className="section offer-section" id="oferta"><div className="container offer-card"><div className="offer-ribbon">🍓 CONDIÇÃO ESPECIAL DE LANÇAMENTO</div><div className="offer-content"><div className="offer-copy"><div className="eyebrow">MORANGO CRAVEJADO</div><h2>Chegue cedo e comece a aprender antes que a novidade fique <span>comum.</span></h2><p>Tenha o guia para preparar, padronizar, precificar, apresentar e testar o Morango Cravejado no seu público.</p><div className="included"><b>O que você recebe de bônus:</b><span>✓ Guia completo de preparo e montagem</span><span>✓ Ficha técnica e organização de custos</span><span>✓ Estratégias de precificação</span><span>✓ Ideias de conteúdo e divulgação</span><span>✓ Orientações de embalagem e venda</span></div></div><div className="price-box"><div className="price-label">ACESSO AO GUIA DIGITAL</div><div className="old-price">de R$ 47,00</div><div className="price">R$ 10,00</div><div className="price-note">pagamento único</div><CTA>QUERO COMEÇAR AGORA</CTA><div className="secure"><ShieldCheck size={16}/> Compra protegida • acesso digital</div></div></div><div className="countdown"><div><b>⏳ CONDIÇÃO DE LANÇAMENTO</b><span>Condição promocional sujeita à alteração conforme a campanha.</span></div><Countdown/></div></div></section>
    <section className="section light guarantee"><div className="container guarantee-card"><ShieldCheck size={48}/><div><div className="eyebrow dark">COMPRA COM TRANQUILIDADE</div><h2>Você tem 7 dias para conhecer o material.</h2><p>São 7 dias de garantia para conhecer o guia. Dentro desse prazo, você pode solicitar o reembolso conforme as condições da oferta.</p></div></div></section>
    <section className="section faq-section"><div className="container narrow"><div className="center"><div className="eyebrow dark">AINDA TEM DÚVIDAS?</div><h2>Perguntas <span>frequentes.</span></h2></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq ${openFaq===i?"open":""}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={20}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>
    <section className="final-cta"><div className="container center"><div className="eyebrow">🍓 SUA PRÓXIMA IDEIA PODE COMEÇAR AQUI</div><h2>Não espere a próxima febre chegar para só então procurar como fazer.</h2><p>Aprenda o Morango Cravejado, teste no seu público e descubra se essa oportunidade faz sentido para você.</p><CTA>QUERO CHEGAR PRIMEIRO</CTA><small>Oportunidade não é promessa de lucro. Seus resultados dependem de execução, mercado, custos, preço e divulgação.</small></div></section>
    <footer><div className="container footer-inner"><span>© 2026 Morango Cravejado</span><div><a href="#oferta">Oferta</a><a href="#">Termos</a><a href="#">Privacidade</a></div></div></footer><div className="mobile-sticky"><CTA>QUERO O GUIA • R$ 10,00</CTA></div>
  </main>;
}
