import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "5512996081177";
    const message = "Olá! Tenho interesse em alugar a casa de praia em Ubatuba. Poderia me fornecer mais informações?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+5512996081177', '_self');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-ocean-deep/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4">
            Reserve Sua Estadia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e garante já suas férias dos sonhos em Ubatuba!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="bg-gradient-to-br from-ocean-deep to-primary text-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Phone className="h-7 w-7" />
                  Fale Conosco
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telefone & WhatsApp</h4>
                      <p className="text-white/80">Clemente</p>
                      <p className="text-xl font-bold">(12) 9 9608-1177</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Endereço</h4>
                      <p className="text-white/80">Rua Habitat, 253</p>
                      <p className="text-white/80">Ubatuba, SP</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Atendimento</h4>
                      <p className="text-white/80">Todos os dias</p>
                      <p className="text-white/80">8h às 22h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center gap-2 text-sunset mb-2">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-sm text-white/90">
                    "Experiência incrível! A casa é exatamente como nas fotos e a localização é perfeita!"
                  </p>
                  <p className="text-xs text-white/70 mt-2">- Família Silva</p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-sunset/10 to-coral/10 border-sunset/20 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sunset to-coral rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ocean-deep mb-4">
                    WhatsApp Direto
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    A forma mais rápida de reservar! Tire suas dúvidas e confirme sua estadia via WhatsApp.
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-sunset to-coral hover:from-coral hover:to-sunset text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-palm/10 border-accent/20 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-palm rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ocean-deep mb-4">
                    Ligação Direta
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Prefere falar diretamente? Ligue para o Clemente e esclareça todas as suas dúvidas.
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-white text-lg py-6 rounded-xl"
                    onClick={handleCall}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Ligar Agora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-ocean-deep via-primary to-ocean-light text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                🌊 Não Perca Esta Oportunidade!
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Viva dias incríveis em um lugar que combina conforto, praticidade e lazer. 
                Garante sua reserva e curta uma experiência única em Ubatuba!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sunset to-coral hover:from-coral hover:to-sunset text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={handleWhatsApp}
                >
                  Reserve Já!
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-ocean-deep text-lg px-8 py-6 rounded-full backdrop-blur-sm bg-white/10"
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Mais Fotos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;