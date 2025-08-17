import { Card, CardContent } from "@/components/ui/card";
import { 
  Bed, 
  Users, 
  Car, 
  Tv, 
  ChefHat, 
  Bath, 
  Flame,
  Droplets,
  Utensils,
  Home
} from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Bed,
      title: "Acomodações",
      description: "1 cama de casal + 2 camas de solteiro + 2 colchões extras",
      color: "from-primary to-ocean-light"
    },
    {
      icon: Users,
      title: "Capacidade",
      description: "Até 6 pessoas confortavelmente",
      color: "from-accent to-palm"
    },
    {
      icon: ChefHat,
      title: "Cozinha Completa",
      description: "Geladeira, fogão e todos os utensílios necessários",
      color: "from-sunset to-sunrise"
    },
    {
      icon: Tv,
      title: "Entretenimento",
      description: "TV de 32 polegadas na sala ampla",
      color: "from-coral to-sunset"
    },
    {
      icon: Car,
      title: "Garagem",
      description: "Espaço para 1 carro e 4 motos",
      color: "from-ocean-deep to-primary"
    },
    {
      icon: Bath,
      title: "Banheiros",
      description: "2 banheiros práticos e funcionais",
      color: "from-primary to-accent"
    },
    {
      icon: Droplets,
      title: "Ducha Externa",
      description: "Quintal com ducha para se refrescar",
      color: "from-ocean-light to-primary"
    },
    {
      icon: Flame,
      title: "Churrasqueira",
      description: "Para encontros com boa comida e companhia",
      color: "from-sunset to-coral"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4">
            Comodidades & Facilidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para uma estadia perfeita em Ubatuba
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <Card 
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${amenity.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ocean-deep mb-3 group-hover:text-primary transition-colors duration-300">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Special Features Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-accent/10 to-palm/10 border-accent/20 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-palm rounded-xl flex items-center justify-center">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ocean-deep">Casa Completa</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nossa casa oferece tudo que você precisa para se sentir em casa longe de casa. 
                Desde a cozinha totalmente equipada até o conforto da sala com TV.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Sala ampla e arejada</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Cozinha com todos os eletrodomésticos</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Utensílios completos para cozinhar</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-sunset/10 to-coral/10 border-sunset/20 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-sunset to-coral rounded-xl flex items-center justify-center">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ocean-deep">Área Gourmet</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Desfrute de momentos especiais na nossa área gourmet completa. 
                Perfeita para churrascadas e confraternizações com a família e amigos.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sunset rounded-full"></div>
                  <span>Churrasqueira equipada</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sunset rounded-full"></div>
                  <span>Quintal espaçoso</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sunset rounded-full"></div>
                  <span>Ducha para refrescar</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Amenities;