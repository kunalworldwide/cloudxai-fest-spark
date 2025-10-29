import { Card } from "@/components/ui/card";
import { Mic2 } from "lucide-react";
import keynoteStageImg from "@/assets/keynote-stage.jpg";

const Keynotes = () => {
  const keynotes = [
    {
      title: "The Future of Cloud Computing",
      description: "Exploring next-generation cloud architectures and their impact on global infrastructure",
      tag: "Cloud Infrastructure",
    },
    {
      title: "AI at Scale: Challenges & Solutions",
      description: "Real-world insights into deploying and managing AI systems at enterprise scale",
      tag: "Artificial Intelligence",
    },
    {
      title: "Security in the AI Era",
      description: "Addressing emerging security challenges in AI-powered cloud environments",
      tag: "Security",
    },
    {
      title: "Innovation & Sustainability",
      description: "Building sustainable tech solutions for tomorrow's challenges",
      tag: "Sustainability",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Featured Keynotes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry leaders sharing transformative insights and visions for the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {keynotes.map((keynote, index) => (
            <Card 
              key={index}
              className="group p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mic2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30 mb-3">
                    {keynote.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {keynote.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {keynote.description}
              </p>
              
              {/* Speaker placeholder */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Speaker TBA</div>
                    <div className="text-xs text-muted-foreground">To be announced soon</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keynotes;
