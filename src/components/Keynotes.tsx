import { Card } from "@/components/ui/card";
import { Mic2 } from "lucide-react";
import keynoteStageImg from "@/assets/keynote-stage.jpg";

const Keynotes = () => {
  const keynotes = [
    {
      tag: "Keynote 1",
    },
    {
      tag: "Keynote 2",
    },
    {
      tag: "Keynote 3",
    },
    {
      tag: "Keynote 4",
    },
  ];

  return (
    <section id="keynotes" className="py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${keynoteStageImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      
      {/* Animated accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Mic2 className="w-6 h-6 text-primary animate-glow-pulse" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">Speakers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-gradient-shift">
            Featured Keynotes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            World-class speakers sharing transformative insights
          </p>
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-accent font-semibold">Announcing Soon</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {keynotes.map((keynote, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Silhouette */}
              <div className="relative mb-6 aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border">
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <div className="relative w-32 h-40">
                    {/* Head */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-muted to-muted-foreground/50 opacity-80" />
                    {/* Body */}
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-24 h-28 rounded-t-full bg-gradient-to-br from-muted to-muted-foreground/50 opacity-80" 
                         style={{ clipPath: 'ellipse(50% 50% at 50% 0%)' }} 
                    />
                  </div>
                </div>
                {/* Question mark overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">?</span>
                </div>
              </div>
              
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30 mb-3">
                  {keynote.tag}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Speaker Announcement
                </h3>
                <p className="text-sm text-muted-foreground">
                  Coming Soon
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keynotes;
