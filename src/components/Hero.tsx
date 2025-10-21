import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Tech conference background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient-shift bg-300%" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
        <div className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <span className="text-sm font-medium text-primary">A Premier Tech Conference</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-gradient-shift bg-300%">
          CloudxAI
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Where Cloud Computing Meets Artificial Intelligence
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 text-foreground">
            <Calendar className="w-6 h-6 text-accent" />
            <span className="text-lg font-medium">14th March 2026</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div className="flex items-center gap-3 text-foreground">
            <MapPin className="w-6 h-6 text-accent" />
            <span className="text-lg font-medium">Nimhans Convention Center, Bengaluru</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground text-lg px-8 py-6 animate-glow-pulse"
          >
            Register Now
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
          >
            View Agenda
          </Button>
        </div>

        {/* Powered by */}
        <div className="mt-20 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-4">POWERED BY</p>
          <div className="inline-block">
            <div className="text-3xl font-bold text-foreground">
              CAST AI
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
};

export default Hero;
