import { Calendar, Clock } from "lucide-react";

const Agenda = () => {
  const agendaItems = [
    {
      time: "09:00 AM",
      title: "Registration & Networking Breakfast",
      type: "Event",
    },
    {
      time: "10:00 AM",
      title: "Opening Keynote: The Future of Cloud & AI",
      type: "Keynote",
      speaker: "TBA",
    },
    {
      time: "11:30 AM",
      title: "Panel Discussion: AI Ethics & Governance",
      type: "Panel",
    },
    {
      time: "01:00 PM",
      title: "Lunch & Networking",
      type: "Break",
    },
    {
      time: "02:30 PM",
      title: "Technical Deep Dive: Cloud Infrastructure at Scale",
      type: "Session",
    },
    {
      time: "04:00 PM",
      title: "Innovation Showcase",
      type: "Event",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Event Agenda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A carefully curated program designed to inspire, educate, and connect
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />

            <div className="space-y-8">
              {agendaItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-24 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Time marker */}
                  <div className="absolute left-0 flex items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-4 border-background shadow-lg shadow-primary/50">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-sm text-accent font-semibold mb-1">{item.time}</div>
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                        {item.speaker && (
                          <p className="text-sm text-muted-foreground mt-1">Speaker: {item.speaker}</p>
                        )}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
