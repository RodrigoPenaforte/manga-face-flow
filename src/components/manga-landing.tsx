import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Book, Video, Gift, Clock, Shield, MessageCircle, Star, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/manga-ebook-hero.jpg";
import expressionsImage from "@/assets/manga-expression-ebook.png";
import { useState, useEffect } from "react";
import { activateProtection, handleCheckoutClick } from "@/lib/protection";

export function MangaLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Ativa todas as proteções contra clonagem (versão bloqueadora)
    activateProtection();

    // Carrossel automático de depoimentos
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 6);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <div className="min-h-screen bg-background">
    {/* Hero Section */}
    <section className="relative px-4 py-16 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-accent text-accent-foreground text-sm px-3 py-1">
              MÉTODO COMPROVADO
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Aprenda a Desenhar Rostos <span className="text-accent">Estilo Mangá</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Mesmo que você nunca tenha desenhado antes
            </p>
            <p className="text-lg text-foreground mb-8">
              Com um método simples e comprovado, você vai aprender a criar personagens no estilo japonês, com traços profissionais e expressivos!
            </p>
          </div>
          <div className="flex justify-center">
            <img src={heroImage} alt="eBook Como Desenhar Rosto Estilo Mangá" className="max-w-full h-auto rounded-lg shadow-2xl" />
          </div>
          <CTAButton size="lg" className="w-full lg:w-auto" onClick={handleCheckoutClick}>
            Quero Aprender Agora
          </CTAButton>
        </div>
      </div>
    </section>

    {/* Product Presentation */}
    <section className="py-16 bg-card">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src={expressionsImage} alt="Exemplos de expressões mangá" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <Book className="w-6 h-6 text-accent" />
              <span className="text-foreground font-semibold">eBook + Aulas em vídeo | Acesso imediato</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-6 h-6 text-accent" />
              <span className="text-foreground font-semibold">Método 100% passo a passo</span>
            </div>
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 text-accent" />
              <span className="text-foreground font-semibold">Bônus: Técnica de Loomis + Expressões + Perspectiva</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What You'll Learn */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Tudo o que você precisa para dominar os rostos no estilo mangá:
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Proporção certa de rostos femininos e masculinos", "Como desenhar olhos, nariz, boca e cabelo no estilo japonês", "Expressões faciais: raiva, alegria, surpresa, tristeza", "Diferentes ângulos do rosto (frente, perfil, ¾)", "Técnica de Loomis (bônus incluído!)", "E muito mais..."].map((item, index) => <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
            <span className="text-foreground">{item}</span>
          </div>)}
        </div>
      </div>
    </section>

    {/* Why It Works */}
    <section className="py-16 bg-card">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <p className="text-lg text-foreground leading-relaxed">
          Diferente de tutoriais soltos e confusos da internet, aqui você aprende com uma estrutura clara,
          passo a passo real e um método que respeita o seu tempo e nível de experiência.
          <br /><br />
          Seja você iniciante ou intermediário, vai aprender de forma simples e divertida.
        </p>
      </div>
    </section>

    {/* Social Proof - Depoimentos */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-500 text-white text-sm px-3 py-1">
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
          <div className="flex overflow-hidden">
            {[
              {
                name: "Maria Silva",
                role: "Via Instagram",
                avatar: "M",
                gradient: "from-pink-400 to-purple-500",
                text: "Gente, sério mesmo! Nunca pensei que conseguiria desenhar rostos assim! O método é demais, cada passo bem explicadinho. Em 2 semanas já tava desenhando muito melhor! 😍"
              },
              {
                name: "Lucas Santos",
                role: "Via WhatsApp",
                avatar: "L",
                gradient: "from-blue-400 to-cyan-500",
                text: "Cara, sempre quis desenhar mangá mas não tinha ideia de como começar. Esse curso simplesmente mudou minha vida! Agora consigo criar personagens completos com expressões incríveis."
              },
              {
                name: "Ana Costa",
                role: "Via WhatsApp",
                avatar: "A",
                gradient: "from-green-400 to-emerald-500",
                text: "Muito bom mesmo! O método é bem simples e funciona mesmo. A técnica de Loomis explicada assim ficou super fácil de entender. Recomendo demais!"
              },
              {
                name: "Pedro Oliveira",
                role: "Via WhatsApp",
                avatar: "P",
                gradient: "from-orange-400 to-red-500",
                text: "O eBook é fantástico! As aulas são super divertidas, o professor mistura comédia com animação. Nunca imaginei que aprender a desenhar rostos pudesse ser tão engraçado!"
              },
              {
                name: "Camila Ferreira",
                role: "Via Facebook",
                avatar: "C",
                gradient: "from-purple-400 to-pink-500",
                text: "As aulas em vídeo são incríveis! O jeito que ele explica com animações e piadas torna tudo muito mais fácil de entender. O eBook complementa perfeitamente!"
              },
              {
                name: "Rafael Costa",
                role: "Via Facebook",
                avatar: "R",
                gradient: "from-teal-400 to-blue-500",
                text: "Melhor investimento que fiz! O eBook tem tudo que preciso e as aulas são hilárias. Aprendi mais em 1 semana do que em meses tentando sozinho!"
              },
              {
                name: "Juliana Santos",
                role: "Via Instagram",
                avatar: "J",
                gradient: "from-indigo-400 to-purple-500",
                text: "Adorei como o curso mistura técnica com diversão! As animações nas aulas tornam tudo muito visual e as piadas do professor fazem o tempo voar!"
              },
              {
                name: "Diego Almeida",
                role: "Via Instagram",
                avatar: "D",
                gradient: "from-yellow-400 to-orange-500",
                text: "O eBook é completo demais! E as aulas em vídeo são uma experiência única. Nunca ri tanto enquanto aprendia algo tão técnico. Recomendo muito!"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`w-full md:w-1/3 flex-shrink-0 transition-transform duration-500 ease-in-out`}
                style={{ transform: `translateX(-${currentTestimonial * 33.333}%)` }}
              >
                <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg mx-2">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
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
          
          {/* Navegação do carrossel */}
          <div className="flex justify-center mt-6 gap-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-accent scale-125' 
                    : 'bg-accent/30 hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-accent/10 p-6 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">300+</div>
            <div className="text-sm text-muted-foreground">Alunos Satisfeitos</div>
          </div>
          <div className="bg-accent/10 p-6 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="bg-accent/10 p-6 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Recomendam</div>
          </div>
          <div className="bg-accent/10 p-6 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Suporte</div>
          </div>
        </div>
      </div>
    </section>

    {/* Guarantee + Urgency */}
    <section className="py-16 bg-card">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-accent mb-4" />
            <h3 className="font-bold text-foreground mb-2">Oferta Limitada</h3>
            <p className="text-muted-foreground">Essa oferta é por tempo limitado.</p>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="w-12 h-12 text-accent mb-4" />
            <h3 className="font-bold text-foreground mb-2">Acesso Imediato e Vitalício</h3>
            <p className="text-muted-foreground">Você recebe imediatamente por e-mail, com acesso à área de membros, e o curso é seu para sempre.</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-accent mb-4" />
            <h3 className="font-bold text-foreground mb-2">Compra Segura</h3>
            <p className="text-muted-foreground">Compra segura e com suporte direto pelo WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>

     {/* Special Offer */}
     <section className="py-16 bg-accent/10">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-4 py-2">
            OFERTA POR TEMPO LIMITADO
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            <span className="text-red-600 line-through mr-2">R$97,90</span>
            por apenas R$19,90!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-accent/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">O que está incluído:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-primary rounded-sm"></div>
                  <span>eBook Completo: Como Desenhar Rosto Estilo Mangá</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-accent rounded-sm"></div>
                  <span>Bônus #1: Aulas em vídeo explicando cada técnica</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-accent rounded-sm"></div>
                  <span>Bônus #2: Técnica de Loomis aplicada ao estilo mangá</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-accent rounded-sm"></div>
                  <span>Bônus #3: Como desenhar corpo estilo mangá</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center">
            <div className="bg-accent/20 p-6 rounded-lg text-center mb-6">
              <p className="text-lg font-bold text-foreground">
              🎉 Ao adquirir hoje, você leva tudo isso por um <span className="text-red-600 font-bold">VALOR ÚNICO</span> de <span className="text-red-600 font-bold">R$19,90!</span>              </p>
            </div>
            <CTAButton size="lg" className="w-full" onClick={handleCheckoutClick}>SIM, QUERO COMEÇAR AGORA</CTAButton>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 bg-gradient-to-r from-accent/20 to-accent/10">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Comece a desenhar rostos incríveis hoje mesmo!
        </h2>
        <CTAButton size="lg" className="mb-8" onClick={handleCheckoutClick}>SIM, QUERO COMEÇAR AGORA</CTAButton>
      </div>
    </section>

     {/* FAQ Section */}
     <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>O curso é indicado para quem nunca desenhou antes?</AccordionTrigger>
            <AccordionContent>Sim! O curso é totalmente indicado para iniciantes e também para quem já desenha e quer melhorar seus traços no estilo mangá.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Recebo acesso imediato?</AccordionTrigger>
            <AccordionContent>Sim! Assim que sua compra for confirmada, você recebe tudo automaticamente no seu e-mail e já pode começar a estudar.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Como recebo o material?</AccordionTrigger>
            <AccordionContent>Você receberá o link para o eBook e acesso às aulas por e-mail logo após a compra.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>O acesso ao curso é vitalício?</AccordionTrigger>
            <AccordionContent>Sim, o curso é seu para sempre. Você pode assistir quantas vezes quiser.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  </div>;
}