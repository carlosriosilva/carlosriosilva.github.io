
import { Umbrella } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 relative bg-background"
    >
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {[
              'photo-1433086966358-54859d0ed716',
              'photo-1482938289607-e9573fc25ebb',
              'photo-1466721591366-2d5fba72006d'
            ].map((photo, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-screen">
                  <img
                    src={`https://images.unsplash.com/${photo}`}
                    alt="Brazil landscape"
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <div className="text-center max-w-3xl mx-auto z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Umbrella className="w-8 h-8 text-secondary" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Carlos Río Silva
          </h1>
        </div>
        <h2 className="text-xl md:text-2xl text-secondary mb-6">
          Software Engineer | Configuration Management | Infrastructure Operations
        </h2>
        <p className="text-lg text-secondary mb-8 flex items-center justify-center gap-2">
          Based in São Paulo, Brazil 🇧🇷
        </p>
        <div className="space-x-4">
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-primary text-foreground rounded-lg hover:bg-secondary/20 transition-colors"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-3 border-2 border-primary text-foreground rounded-lg hover:bg-primary/50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
