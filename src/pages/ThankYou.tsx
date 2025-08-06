import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, ArrowLeft, Instagram } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import gokuImage from "@/assets/gokuss2.png";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const emailParam = searchParams.get("email");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Obrigado pela sua compra! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Seu pedido foi processado com sucesso
          </p>
          {emailParam && (
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
              <Mail className="w-4 h-4" />
              <span>Verifique seu email: <strong className="text-purple-600">{emailParam}</strong></span>
            </div>
          )}
        </div>

        {/* Imagem do Instagram */}
        <div className="mb-12">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src={gokuImage} 
                alt="Siga-nos no Instagram @artnexoficial"
                className="max-w-sm mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              📱 Siga-nos no Instagram
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Acompanhe nosso trabalho e receba dicas exclusivas de desenho!
            </p>
            <Button 
              onClick={() => window.open('https://instagram.com/artnexoficial', '_blank')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @artnexoficial
            </Button>
          </div>
        </div>

        {/* Informações Importantes */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">📧 Próximos Passos</h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg">
                <strong className="text-purple-600">Email de confirmação:</strong> Enviamos um email com todos os detalhes 
                da sua compra e acesso aos produtos.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg">
                <strong className="text-purple-600">Acesso aos produtos:</strong> Verifique sua caixa de entrada e pasta de spam 
                para encontrar o email com os links de download.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg">
                <strong className="text-purple-600">Suporte:</strong> Se tiver alguma dúvida, entre em contato conosco 
                através do nosso Instagram <strong className="text-purple-600">@artnexoficial</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p className="text-lg">
            Obrigado por escolher nossos produtos! Esperamos que você aproveite
            muito o conteúdo. 🎨✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou; 