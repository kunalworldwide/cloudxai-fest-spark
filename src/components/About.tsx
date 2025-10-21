const About = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About CloudxAI
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            CloudxAI is the premier destination for technology leaders, innovators, and professionals 
            to explore the convergence of cloud computing and artificial intelligence.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Join us for an immersive experience featuring cutting-edge insights, groundbreaking 
            innovations, and unparalleled networking opportunities that will shape the future of technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            { number: "4", label: "Keynote Speakers" },
            { number: "500+", label: "Attendees" },
            { number: "20+", label: "Sessions" },
            { number: "2", label: "Days" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 animate-scale-in"
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
