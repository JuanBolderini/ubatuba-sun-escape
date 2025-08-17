import { Heart, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-ocean-deep to-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Casa de Praia Ubatuba</h3>
            <p className="text-white/80 mb-4">
              Sua casa de verão dos sonhos a apenas 200 metros da praia em Ubatuba, SP.
            </p>
            <div className="flex items-center gap-2 text-sunset">
              <Heart className="h-5 w-5 fill-current" />
              <span>Feito com amor para você</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>Clemente: (12) 9 9608-1177</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Rua Habitat, 253, Ubatuba, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Localização</h4>
            <ul className="space-y-2 text-white/80">
              <li>• 200m da praia</li>
              <li>• Próximo ao centro</li>
              <li>• Fácil acesso a outras praias</li>
              <li>• Comércio nas proximidades</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Casa de Praia Ubatuba. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;