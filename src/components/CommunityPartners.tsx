import { Card } from "@/components/ui/card";

const CommunityPartners = () => {
  const communities = [
    { name: "Community Partner 1", logo: "👥" },
    { name: "Community Partner 2", logo: "🌐" },
    { name: "Community Partner 3", logo: "💼" },
    { name: "Community Partner 4", logo: "🎯" },
    { name: "Community Partner 5", logo: "🚀" },
    { name: "Community Partner 6", logo: "⭐" },
  ];

  return (
    <section id="community-partners" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Community Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by Community
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Together with amazing communities building the future
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {communities.map((community, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card aspect-square"
            >
              <div className="text-4xl mb-2">{community.logo}</div>
              <p className="text-xs text-center font-medium">{community.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;
