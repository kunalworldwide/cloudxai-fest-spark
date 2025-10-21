const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
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
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
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
