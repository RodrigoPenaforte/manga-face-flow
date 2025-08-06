import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Book, Video, Gift, Clock, Shield, MessageCircle, Star, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/manga-ebook-hero.jpg";
import expressionsImage from "@/assets/manga-expression-ebook.png";
import nezukoImage from "@/assets/rostos/nezuko.png";
import gokuCriancaImage from "@/assets/rostos/goku-crianca.png";
import sasukeEsbocoImage from "@/assets/rostos/sasuke-esboco.png";
import thoughtfulAnimeImage from "@/assets/rostos/thoughtful-anime-sketch.png";
import sungJinWooImage from "@/assets/rostos/sung-jin-woo.png";
import leviAckermanImage from "@/assets/rostos/levi-ackerman-sketch.png";
import { useState, useEffect, useRef } from "react";
import { activateProtection, handleCheckoutClick } from "@/lib/protection";

export function MangaLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFace, setCurrentFace] = useState(0);
  const [showFaceModal, setShowFaceModal] = useState(false);
  const [showCTAButton, setShowCTAButton] = useState(false);
  const [showRestOfPage, setShowRestOfPage] = useState(false);

  // Timer para mostrar o botão CTA e resto da página após 6 segundos (VLS technique)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTAButton(true);
      setShowRestOfPage(true);
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, []);
  
  // Array de rostos de mangá para o carrossel
  const mangaFaces = [
    {
      id: 1,
      name: "Nezuko",
      image: nezukoImage,
      description: "Expressão inocente e doce",
      bgColor: "bg-artnex-red/20"
    },
    {
      id: 2,
      name: "Goku Criança", 
      image: gokuCriancaImage,
      description: "Expressão alegre e inocente",
      bgColor: "bg-artnex-yellow/20"
    },
    {
      id: 3,
      name: "Sasuke Esboço",
      image: sasukeEsbocoImage, 
      description: "Expressão séria e determinada",
      bgColor: "bg-artnex-blue/20"
    },
    {
      id: 4,
      name: "Anime Sketch Pensativo",
      image: thoughtfulAnimeImage,
      description: "Expressão pensativa e misteriosa",
      bgColor: "bg-artnex-cyan/20"
    },
    {
      id: 5,
      name: "Sung Jin Woo",
      image: sungJinWooImage,
      description: "Expressão confiante e focada",
      bgColor: "bg-artnex-orange/20"
    },
    {
      id: 6,
      name: "Levi Ackerman",
      image: leviAckermanImage,
      description: "Expressão intensa e séria",
      bgColor: "bg-artnex-royal/20"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Santiago",
      role: "Via Instagram",
      avatar: "J",
      gradient: "from-artnex-red to-artnex-orange",
      text: "Gente, sério mesmo! Nunca pensei que conseguiria desenhar rostos assim! O método é demais, cada passo bem explicadinho. Em 2 semanas já tava desenhando muito melhor! 😍"
    },
    {
      name: "Lucas Santos",
      role: "Via WhatsApp",
      avatar: "L",
      gradient: "from-artnex-blue to-artnex-cyan",
      text: "Cara, sempre quis desenhar mangá mas não tinha ideia de como começar. Esse curso simplesmente mudou minha vida! Agora consigo criar personagens completos com expressões incríveis."
    },
    {
      name: "Ana Costa",
      role: "Via WhatsApp",
      avatar: "A",
      gradient: "from-artnex-yellow to-artnex-orange",
      text: "Muito bom mesmo! O método é bem simples e funciona mesmo. A técnica de Loomis explicada assim ficou super fácil de entender. Recomendo demais 👏👏👏👏"
    },
    {
      name: "Pedro Oliveira",
      role: "Via WhatsApp",
      avatar: "P",
      gradient: "from-artnex-orange to-artnex-red",
      text: "Pô, que ebook maneiro, mano. As aulas são super divertidas, o professor mistura comédia com animação. Nunca imaginei que aprender a desenhar rostos pudesse ser tão engraçado 🤣🤣"
    },
    {
      name: "Camila Ferreira",
      role: "Via Facebook",
      avatar: "C",
      gradient: "from-artnex-cyan to-artnex-blue",
      text: "As aulas em vídeo são incríveis! O jeito que ele explica com animações e piadas torna tudo muito mais fácil de entender. O eBook complementa perfeitamente👌"
    },
    {
      name: "Rafael Costa",
      role: "Via Facebook",
      avatar: "R",
      gradient: "from-artnex-royal to-artnex-cyan",
      text: "Melhor investimento que fiz! O eBook tem tudo que preciso e as aulas são hilárias. Aprendi mais em 1 semana do que em meses tentando sozinho"
    },
    {
      name: "Gustavo Macarini",
      role: "Via Instagram",
      avatar: "G",
      gradient: "from-artnex-red to-artnex-yellow",
      text: "Adorei como o curso mistura técnica com diversão! As animações nas aulas tornam tudo muito visual e as comédias do videos ensinando a desenhar rostos são demais 😊"
    },
    {
      name: "Luiz Felipe",
      role: "Via Instagram",
      avatar: "L",
      gradient: "from-artnex-yellow to-artnex-red",
      text: "O eBook é completo demais! E as aulas em vídeo são uma experiência única. Nunca ri tanto enquanto aprendia algo tão técnico"
    }
  ];

  // Touch/swipe robusto
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndX = useRef(null);
  const touchEndY = useRef(null);
  const autoInterval = useRef(null);

  // Quantos depoimentos por vez (1 mobile, 3 desktop)
  const [perPage, setPerPage] = useState(1);
  useEffect(() => {
    function handleResize() {
      setPerPage(window.innerWidth >= 768 ? 3 : 1);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    activateProtection();
    autoInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => {
        // Limite para não passar do último grupo visível
        const maxIndex = Math.max(0, testimonials.length - perPage);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(autoInterval.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage]);

  // Carrossel automático de rostos
  useEffect(() => {
    const faceInterval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % mangaFaces.length);
    }, 3000);
    return () => clearInterval(faceInterval);
  }, [mangaFaces.length]);

  // Funções de swipe
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = null;
    touchEndY.current = null;
    if (autoInterval.current) clearInterval(autoInterval.current);
  }
  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  }
  function handleTouchEnd() {
    if (
      touchStartX.current === null ||
      touchEndX.current === null ||
      touchStartY.current === null ||
      touchEndY.current === null
    ) return;
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50;
    const maxIndex = Math.max(0, testimonials.length - perPage);
    // Só considera swipe se o movimento horizontal for maior que o vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe para esquerda (próximo)
        setCurrentTestimonial((prev) => (prev < maxIndex ? prev + 1 : prev));
      } else {
        // Swipe para direita (anterior)
        setCurrentTestimonial((prev) => (prev > 0 ? prev - 1 : prev));
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    touchStartY.current = null;
    touchEndY.current = null;
    // Reinicia o carrossel automático
    autoInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const maxIndex = Math.max(0, testimonials.length - perPage);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Elementos decorativos artísticos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-artnex-red/20 to-artnex-orange/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-artnex-blue/20 to-artnex-cyan/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-artnex-yellow/20 to-artnex-orange/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-artnex-cyan/20 to-artnex-blue/20 rounded-full blur-xl animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

    {/* Hero Section */}
    <section className="relative px-4 py-16 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-gradient-to-r from-artnex-red to-artnex-orange text-white text-sm px-4 py-2 rounded-full animate-glow">
              MÉTODO COMPROVADO
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Aprenda a Desenhar Rostos <span className="artnex-text-gradient">Estilo Mangá</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Mesmo que você nunca tenha desenhado antes
            </p>
            <p className="text-lg text-foreground mb-8">
              Com um método simples e comprovado, você vai sair do zero em menos de <span className="text-artnex-red font-bold">7 dias</span>. Com <span className="text-artnex-yellow font-bold">aulas em vídeo e um eBook completo</span>, você aprenderá a criar personagens no estilo japonês, com traços profissionais e expressivos!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative group w-full max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-artnex-red via-artnex-orange to-artnex-yellow rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-full">
                <div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                  <div className="wistia_responsive_wrapper" style={{height: '100%', left: '0', position: 'absolute', top: '0', width: '100%'}}>
                    <iframe 
                      src="https://fast.wistia.net/embed/iframe/xrgva5o9w6?web_component=true&seo=false&autoplay=false" 
                      title="VLS FEITA PARA CURSO DE DSENHO Video" 
                      allow="autoplay; fullscreen" 
                      allowTransparency={true} 
                      frameBorder="0" 
                      scrolling="no" 
                      className="wistia_embed" 
                      name="wistia_embed" 
                      width="100%" 
                      height="100%"
                      style={{borderRadius: '8px'}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showCTAButton && (
            <CTAButton size="lg" className="w-full lg:w-auto bg-gradient-to-r from-artnex-red to-artnex-orange hover:from-artnex-orange hover:to-artnex-red text-white border-0 animate-glow" onClick={handleCheckoutClick}>
              Quero Aprender Agora
            </CTAButton>
          )}
        </div>
      </div>
    </section>

    {/* Resto da página - aparece após 1 minuto */}
    {showRestOfPage && (
      <>
        {/* Product Presentation */}
        <section className="py-16 bg-card relative">
      <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-artnex-blue to-artnex-cyan rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img src={expressionsImage} alt="Exemplos de expressões mangá" className="relative w-full rounded-lg shadow-lg border-2 border-artnex-blue/20" />
            </div>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <Book className="w-6 h-6 text-artnex-yellow" />
              <span className="text-foreground font-semibold">eBook + Aulas em vídeo | Acesso imediato</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-6 h-6 text-artnex-orange" />
              <span className="text-foreground font-semibold">Método 100% passo a passo</span>
            </div>
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 text-artnex-cyan" />
              <span className="text-foreground font-semibold">Bônus: Técnica de Loomis + Expressões + Perspectiva</span>
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* Nova seção: Carrossel de Rostos de Mangá */}
    <section className="py-16 bg-background relative">
      <div className="container mx-auto max-w-3xl px-4 relative z-10">
        <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Domine os traços que fazem os rostos mangá se destacarem</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xs">
            <div className="rounded-xl shadow-2xl bg-card overflow-hidden cursor-pointer border-2 border-artnex-red/20 hover:border-artnex-red/40 transition-all duration-300" onClick={() => setShowFaceModal(true)}>
              <div className="relative aspect-[4/5]">
                <img 
                  src={mangaFaces[currentFace].image} 
                  alt={mangaFaces[currentFace].name}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <p className="text-white text-lg font-semibold mb-1 transition-all duration-500">{mangaFaces[currentFace].name}</p>
                  <p className="text-white/90 text-sm transition-all duration-500">{mangaFaces[currentFace].description}</p>
                </div>
              </div>
            </div>
            {/* Navegação do carrossel */}
            <div className="flex justify-center mt-6 gap-3">
              {mangaFaces.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFace(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentFace 
                      ? 'bg-gradient-to-r from-artnex-red to-artnex-orange scale-110 shadow-lg' 
                      : 'bg-artnex-red/40 hover:bg-artnex-red/60 hover:scale-105'
                  }`}
                />
              ))}
            </div>
            {/* Botões de navegação */}
            <button
              onClick={() => setCurrentFace((prev) => (prev - 1 + mangaFaces.length) % mangaFaces.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-card/90 hover:bg-card text-artnex-red p-2 rounded-full shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-artnex-red/20"
              style={{ zIndex: 2 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentFace((prev) => (prev + 1) % mangaFaces.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-card/90 hover:bg-card text-artnex-red p-2 rounded-full shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-artnex-red/20"
              style={{ zIndex: 2 }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-6 text-center text-artnex-yellow font-semibold text-lg">Clique na imagem para ver em detalhes!</p>
        </div>
      </div>

      {/* Modal de imagem ampliada */}
      {showFaceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowFaceModal(false)}>
          <div className="relative max-w-md w-full" onClick={e => e.stopPropagation()}>
            <img src={mangaFaces[currentFace].image} alt={mangaFaces[currentFace].name} className="w-full h-auto rounded-xl shadow-2xl border-2 border-artnex-red/20" />
            <button
              className="absolute top-2 right-2 bg-card/80 hover:bg-card text-artnex-red p-2 rounded-full shadow border border-artnex-red/20"
              onClick={() => setShowFaceModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>

    {/* What You'll Learn */}
    <section className="py-16 bg-card relative">
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Tudo o que você precisa para dominar os rostos no estilo mangá:
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Proporção certa de rostos femininos e masculinos", "Como desenhar olhos, nariz, boca e cabelo no estilo japonês", "Expressões faciais: raiva, alegria, surpresa, tristeza", "Diferentes ângulos do rosto (frente, perfil, ¾)", "Técnica de Loomis (bônus incluído!)", "E muito mais..."].map((item, index) => <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-artnex-cyan mt-1 flex-shrink-0" />
            <span className="text-foreground">{item}</span>
          </div>)}
        </div>
      </div>
    </section>

    {/* Why It Works */}
    <section className="py-16 bg-background relative">
      <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
        <p className="text-lg text-foreground leading-relaxed">
          Diferente de tutoriais soltos e confusos da internet, aqui você aprende com uma estrutura clara,
          passo a passo real e um método que respeita o seu tempo e nível de experiência.
          <br /><br />
          Seja você iniciante ou intermediário, vai aprender de forma simples e divertida.
        </p>
      </div>
    </section>

    {/* Social Proof - Depoimentos */}
    <section className="py-16 bg-card relative">
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-artnex-yellow to-artnex-orange text-white text-sm px-4 py-2 rounded-full">
            ⭐ 4.9/5 ESTRELAS
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            O que nossos alunos estão dizendo
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 300+ alunos já transformaram seus desenhos com nosso método
          </p>
        </div>

        {/* Carrossel de Depoimentos */}
        <div className="relative mb-8">
          {/* Carrossel responsivo */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: '100%',
                transform: `translateX(-${currentTestimonial * (100 / perPage)}%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 px-2 box-border"
                  style={{ maxWidth: perPage === 3 ? `${100 / 3}%` : '100%' }}
                >
                  <Card className="border-2 border-artnex-red/20 hover:border-artnex-red/40 transition-all duration-300 hover:shadow-lg h-full bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-artnex-yellow text-artnex-yellow" />
                          ))}
                        </div>
                        <p className="text-foreground mb-4 italic">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          {/* Navegação do carrossel */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.max(1, testimonials.length - perPage + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-artnex-red to-artnex-orange scale-125' 
                    : 'bg-artnex-red/30 hover:bg-artnex-red/50'
                }`}
              />
            ))}
          </div>
          </div>

        {/* Estatísticas */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-gradient-to-br from-artnex-red/10 to-artnex-orange/10 p-6 rounded-lg border border-artnex-red/20">
            <div className="text-3xl font-bold artnex-text-gradient mb-2">300+</div>
            <div className="text-sm text-muted-foreground">Alunos Satisfeitos</div>
          </div>
          <div className="bg-gradient-to-br from-artnex-yellow/10 to-artnex-orange/10 p-6 rounded-lg border border-artnex-yellow/20">
            <div className="text-3xl font-bold artnex-text-gradient mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="bg-gradient-to-br from-artnex-blue/10 to-artnex-cyan/10 p-6 rounded-lg border border-artnex-blue/20">
            <div className="text-3xl font-bold artnex-text-gradient mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Recomendam</div>
          </div>
          <div className="bg-gradient-to-br from-artnex-cyan/10 to-artnex-blue/10 p-6 rounded-lg border border-artnex-cyan/20">
            <div className="text-3xl font-bold artnex-text-gradient mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Suporte</div>
          </div>
        </div>
      </div>
    </section>

    {/* Guarantee + Urgency */}
    <section className="py-16 bg-background relative">
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-artnex-orange mb-4" />
            <h3 className="font-bold text-foreground mb-2">Oferta Limitada</h3>
            <p className="text-muted-foreground">Essa oferta é por tempo limitado.</p>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="w-12 h-12 text-artnex-blue mb-4" />
            <h3 className="font-bold text-foreground mb-2">Acesso Imediato e Vitalício</h3>
            <p className="text-muted-foreground">Você recebe imediatamente por e-mail, com acesso à área de membros, e o curso é seu para sempre.</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-artnex-cyan mb-4" />
            <h3 className="font-bold text-foreground mb-2">Compra Segura</h3>
            <p className="text-muted-foreground">Compra segura e com suporte direto pelo WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>

     {/* Special Offer */}
     <section className="py-16 bg-gradient-to-br from-artnex-red/10 via-artnex-orange/10 to-artnex-yellow/10 relative">
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-artnex-red to-artnex-orange text-white text-lg px-4 py-2 rounded-full animate-glow">
            OFERTA POR TEMPO LIMITADO
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            <span className="text-artnex-red line-through mr-2">R$97,90</span>
            por apenas <span className="artnex-text-gradient">R$28,90!</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-artnex-red/20 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">O que está incluído:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-artnex-red rounded-sm"></div>
                  <span>eBook Completo: Como Desenhar Rosto Estilo Mangá</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-artnex-orange rounded-sm"></div>
                  <span>Bônus #1: Aulas em vídeo explicando cada técnica</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-artnex-yellow rounded-sm"></div>
                  <span>Bônus #2: Técnica de Loomis aplicada ao estilo mangá</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-artnex-blue rounded-sm"></div>
                  <span>Bônus #3: Como desenhar corpo estilo mangá</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-r from-artnex-red/20 to-artnex-orange/20 p-6 rounded-lg text-center mb-6 border border-artnex-red/20">
              <p className="text-lg font-bold text-foreground">
              🎉 Ao adquirir hoje, você leva tudo isso por um <span className="text-artnex-red font-bold">VALOR ÚNICO</span> de <span className="artnex-text-gradient font-bold">R$28,90!</span>              </p>
            </div>
            <CTAButton size="lg" className="w-full bg-gradient-to-r from-artnex-red to-artnex-orange hover:from-artnex-orange hover:to-artnex-red text-white border-0 animate-glow" onClick={handleCheckoutClick}>SIM, QUERO COMEÇAR AGORA</CTAButton>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 bg-gradient-to-r from-artnex-red/20 via-artnex-orange/20 to-artnex-yellow/20 relative">
      <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Comece a desenhar rostos incríveis hoje mesmo!
        </h2>
        <CTAButton size="lg" className="mb-8 bg-gradient-to-r from-artnex-red to-artnex-orange hover:from-artnex-orange hover:to-artnex-red text-white border-0 animate-glow" onClick={handleCheckoutClick}>SIM, QUERO COMEÇAR AGORA</CTAButton>
      </div>
    </section>

     {/* FAQ Section */}
     <section className="py-16 bg-card relative">
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-artnex-red/20">
            <AccordionTrigger className="text-foreground hover:text-artnex-red">O curso é indicado para quem nunca desenhou antes?</AccordionTrigger>
            <AccordionContent>Sim! O curso é totalmente indicado para iniciantes e também para quem já desenha e quer melhorar seus traços no estilo mangá.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-artnex-orange/20">
            <AccordionTrigger className="text-foreground hover:text-artnex-orange">Recebo acesso imediato?</AccordionTrigger>
            <AccordionContent>Sim! Assim que sua compra for confirmada, você recebe tudo automaticamente no seu e-mail e já pode começar a estudar.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-artnex-yellow/20">
            <AccordionTrigger className="text-foreground hover:text-artnex-yellow">Como recebo o material?</AccordionTrigger>
            <AccordionContent>Você receberá o link para o eBook e acesso às aulas por e-mail logo após a compra.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-artnex-blue/20">
            <AccordionTrigger className="text-foreground hover:text-artnex-blue">O acesso ao curso é vitalício?</AccordionTrigger>
            <AccordionContent>Sim, o curso é seu para sempre. Você pode assistir quantas vezes quiser.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
      </>
    )}
    </div>
  );
}