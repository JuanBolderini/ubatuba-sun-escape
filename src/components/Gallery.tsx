import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/lovable-uploads/e7e70a5b-ec55-4cf3-a4c1-e8008ece5383.png", title: "Vista Aérea" },
    { src: "/lovable-uploads/6ad02e58-a707-4fc7-b517-3b92afc51c61.png", title: "Área Externa" },
    { src: "/lovable-uploads/a2da4368-2b3f-4921-aeef-5bf243afcd93.png", title: "Localização" },
    { src: "/lovable-uploads/2c30cfbf-945f-42a1-a68a-e91184d74026.png", title: "Entrada" },
    { src: "/lovable-uploads/5cd548ab-3411-49ff-82a4-33eeb16f47f1.png", title: "Sala de Estar" },
    { src: "/lovable-uploads/4844a11f-3b15-4261-89ec-d63c1714e550.png", title: "Banheiro" },
    { src: "/lovable-uploads/ff9c160a-2fb6-44e7-966b-5110d56f5696.png", title: "Cozinha" },
    { src: "/lovable-uploads/71806d16-10d0-4ad1-9eb0-47f2e10da102.png", title: "Suite" }
  ];

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex].src);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-sand/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4">
            Conheça Cada Cantinho
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma galeria completa para você ver todos os detalhes da nossa casa de praia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card 
              key={index}
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => openModal(image.src, index)}
            >
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Casa de praia"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;