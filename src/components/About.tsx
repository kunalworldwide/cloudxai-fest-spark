import techPattern from "@/assets/tech-pattern.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <img src={techPattern} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-shift bg-300%">
            About the Conference
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            CloudxAI Conference is the premier destination for technology leaders, innovators, and professionals 
            to explore the convergence of cloud computing and artificial intelligence in the enterprise landscape.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Join industry leaders and experts for an intensive day of knowledge sharing, featuring 
            cutting-edge insights, technical deep-dives, and strategic networking opportunities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            { number: "4", label: "Keynote Speakers" },
            { number: "300+", label: "Attendees" },
            { number: "20+", label: "Technical Sessions" },
            { number: "3", label: "Parallel Tracks" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
