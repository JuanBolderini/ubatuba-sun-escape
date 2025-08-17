import { Card, CardContent } from "@/components/ui/card";
import { Waves, Home, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-sand/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4">
            Sua Casa de Verão em Ubatuba
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Imagine acordar com o som das ondas e o cheirinho do mar! Esta casa grande e 
            espaçosa é o lugar ideal para você e sua família curtirem momentos inesquecíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-ocean-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean-deep mb-4">200m da Praia</h3>
              <p className="text-muted-foreground">
                Apenas uma curta caminhada até as belas praias de Ubatuba. 
                Perfeito para quem quer aproveitar o mar todos os dias.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-palm rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean-deep mb-4">Casa Completa</h3>
              <p className="text-muted-foreground">
                Cozinha equipada, sala ampla com TV, 2 banheiros, quintal com 
                churrasqueira e garagem espaçosa.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sunset to-coral rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ocean-deep mb-4">Localização Top</h3>
              <p className="text-muted-foreground">
                Próxima a posto de gasolina, padaria, mercado, farmácia, 
                bares e restaurantes. Tudo que você precisa!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-ocean-deep to-primary rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Por que escolher nossa casa?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sunset rounded-full mt-2"></div>
                  <p>Capacidade para até 6 pessoas com todo conforto</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sunset rounded-full mt-2"></div>
                  <p>Cama de casal + 2 camas de solteiro + 2 colchões extras</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sunset rounded-full mt-2"></div>
                  <p>Churrasqueira para aqueles encontros especiais</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sunset rounded-full mt-2"></div>
                  <p>Ducha no quintal para se refrescar após a praia</p>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-sunset mb-2">R. Habitat, 253</div>
                <div className="text-xl">Ubatuba, SP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;