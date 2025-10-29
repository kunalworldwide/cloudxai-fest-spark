import { Image } from "lucide-react";
import networkingImg from "@/assets/networking.jpg";
import keynoteStageImg from "@/assets/keynote-stage.jpg";
import exhibitionImg from "@/assets/exhibition.jpg";

const Gallery = () => {
  const images = [
    {
      src: keynoteStageImg,
      alt: "Keynote presentation at CloudxAI Conference with large LED screens",
      title: "Inspiring Keynotes"
    },
    {
      src: networkingImg,
      alt: "Tech professionals networking at conference exhibition area",
      title: "Networking Opportunities"
    },
    {
      src: exhibitionImg,
      alt: "Conference exhibition hall with technology booths and displays",
      title: "Innovation Showcase"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Image className="w-6 h-6 text-primary animate-glow-pulse" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
            Conference Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a glimpse of what awaits you at CloudxAI 2026
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10 hover:shadow-primary/30 transition-all duration-500 animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
