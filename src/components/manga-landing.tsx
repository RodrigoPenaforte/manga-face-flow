import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Book, Video, Gift, Clock, Shield, MessageCircle } from "lucide-react";
import heroImage from "@/assets/manga-ebook-hero.jpg";
import expressionsImage from "@/assets/manga-expression-ebook.png";
export function MangaLanding() {
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
          <CTAButton size="lg" className="w-full lg:w-auto" href="https://pay.kiwify.com.br/i4D9YlE">
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
                🎉 Ao adquirir hoje, você leva tudo isso por apenas <span>R$19,90!</span>
              </p>
            </div>
            <CTAButton size="lg" className="w-full" href="https://pay.kiwify.com.br/i4D9YlE">SIM, QUERO COMEÇAR AGORA</CTAButton>
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
            <p className="text-muted-foreground">Você recebe imediatamente por e-mail, com acesso à área de membros, e o curso é seu para sempre.</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-accent mb-4" />
            <h3 className="font-bold text-foreground mb-2">Compra Segura</h3>
            <p className="text-muted-foreground">Compra segura e com suporte direto pelo WhatsApp.</p>
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
        <CTAButton size="lg" className="mb-8" href="https://pay.kiwify.com.br/i4D9YlE">SIM, QUERO COMEÇAR AGORA</CTAButton>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <h4 className="font-bold mb-2">Suporte</h4>
            <p className="text-sm">E-mail ou WhatsApp</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Termos</h4>
            <p className="text-sm">Termos e condições</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Garantia</h4>
            <p className="text-sm">Garantia de satisfação</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Copyright</h4>
            <p className="text-sm">Direitos autorais</p>
          </div>
        </div>
      </div>
    </footer>
  </div>;
}