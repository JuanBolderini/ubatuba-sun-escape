import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Clock, Car } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-sand/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4">
            Localização Privilegiada
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No coração de Ubatuba, próximo a tudo que você precisa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="aspect-video bg-gradient-to-br from-ocean-light to-primary p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Rua Habitat, 253</h3>
                  <p className="text-xl opacity-90">Ubatuba, SP</p>
                  <p className="mt-4 text-lg bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                    📍 200m da praia
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-ocean-deep mb-6">
                Tudo ao Seu Alcance
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa casa está estrategicamente localizada para oferecer máxima conveniência 
                durante sua estadia em Ubatuba.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-primary/5 to-ocean-light/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-ocean-light rounded-lg flex items-center justify-center">
                      <Navigation className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-ocean-deep">Praia</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Apenas 200 metros de caminhada até a areia e o mar
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/5 to-palm/5 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-palm rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-ocean-deep">Centro</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Poucos minutos do centro histórico e comercial
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-sunset/10 to-coral/10 rounded-2xl p-6 border border-sunset/20">
              <h4 className="text-xl font-bold text-ocean-deep mb-4 flex items-center gap-2">
                <Car className="h-6 w-6 text-sunset" />
                Estabelecimentos Próximos
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sunset rounded-full"></div>
                    <span>Posto de Gasolina</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sunset rounded-full"></div>
                    <span>Padaria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sunset rounded-full"></div>
                    <span>Supermercado</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-coral rounded-full"></div>
                    <span>Farmácia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-coral rounded-full"></div>
                    <span>Bares & Restaurantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-coral rounded-full"></div>
                    <span>Adega</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-ocean-deep to-primary text-white border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3">🏖️ Acesso às Praias</h4>
                <p className="text-white/90 mb-4">
                  Localização estratégica com fácil acesso a múltiplas praias de Ubatuba:
                </p>
                <ul className="space-y-1 text-sm text-white/80">
                  <li>• Praia do Centro - 200m</li>
                  <li>• Outras praias paradisíacas - acesso rápido</li>
                  <li>• Trilhas e cachoeiras nas proximidades</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;