import { Card } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    { name: "Partner 1", logo: "🏢" },
    { name: "Partner 2", logo: "🏭" },
    { name: "Partner 3", logo: "🏪" },
    { name: "Partner 4", logo: "🏛️" },
  ];

  return (
    <section id="partners" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Partners & Sponsors
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Valued Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us in shaping the future of AI and cloud computing
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-8 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card"
            >
              <div className="text-6xl mb-4">{partner.logo}</div>
              <h3 className="font-semibold text-center">{partner.name}</h3>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Interested in partnering with us?</p>
          <a
            href="mailto:partners@cloudxai.com"
            className="text-primary hover:underline font-semibold"
          >
            Contact us for partnership opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
