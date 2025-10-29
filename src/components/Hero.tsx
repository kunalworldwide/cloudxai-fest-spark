import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import conferenceCrowd from "@/assets/conference-crowd.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={conferenceCrowd} 
          alt="Massive tech conference crowd at CloudxAI with LED screens and stage lighting" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <span className="text-sm font-medium text-primary">Global Cloud & AI Conference</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
          CloudxAI Conference
          <span className="text-3xl md:text-4xl font-medium block mt-2">2026</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Shaping the Future of Enterprise Technology
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
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
