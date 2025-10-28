import { Calendar, Clock, Presentation, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Agenda = () => {
  const tracks = [
    {
      id: "track1",
      name: "Main Hall (Track 1)",
      capacity: "250+ attendees",
      time: "9:30 AM - 5:00 PM",
      description: "Keynotes, 25-min sessions, networking breaks",
      agendaItems: [
        {
          time: "TBA",
          title: "Full Day Program",
          type: "Announcing Soon",
          description: "Detailed schedule coming soon"
        },
      ],
    },
    {
      id: "track2",
      name: "Workshop Hall (Track 2)",
      capacity: "100+ attendees",
      time: "11:30 AM - 4:00 PM",
      description: "In-depth workshops on AI technologies",
      agendaItems: [
        {
          time: "TBA",
          title: "AI Technology Workshops",
          type: "Announcing Soon",
          description: "In-depth hands-on sessions"
        },
      ],
    },
    {
      id: "track3",
      name: "Executive Area (Track 3)",
      time: "12:00 PM - 1:30 PM",
      description: "VIP and Executive exclusive sessions",
      agendaItems: [
        {
          time: "TBA",
          title: "Executive Sessions",
          type: "Announcing Soon",
          description: "VIP exclusive content"
        },
      ],
    },
  ];

  return (
    <section id="agenda" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent animate-gradient-shift bg-300%">
            Event Agenda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            A carefully curated program designed to inspire, educate, and connect
          </p>
          <div className="inline-block px-6 py-2 rounded-full bg-accent/20 border border-accent/50 animate-glow-pulse">
            <span className="text-accent font-semibold">📅 Full Schedule Announcing Soon</span>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Presentation className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">3 Parallel Tracks</span>
            <Users className="w-5 h-5 text-muted-foreground ml-4" />
            <span className="text-muted-foreground">300+ Attendees</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="track1" className="w-full">
            <TabsList className="w-full justify-start mb-8 overflow-x-auto">
              {tracks.map((track) => (
                <TabsTrigger key={track.id} value={track.id} className="min-w-[200px]">
                  {track.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {tracks.map((track) => (
              <TabsContent key={track.id} value={track.id}>
                <div className="mb-6 p-4 border rounded-lg bg-card">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{track.time}</span>
                    {track.capacity && (
                      <>
                        <Users className="w-5 h-5 text-primary ml-4" />
                        <span className="text-foreground font-medium">{track.capacity}</span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground">{track.description}</p>
                </div>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />

                  <div className="space-y-8">
                    {track.agendaItems.map((item, index) => (
                      <div 
                        key={index} 
                        className="relative pl-24"
                      >
                        {/* Time marker */}
                        <div className="absolute left-0 flex items-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-4 border-background">
                            <Clock className="w-6 h-6 text-primary-foreground" />
                          </div>
                        </div>

                        {/* Content card */}
                        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="text-sm text-accent font-semibold mb-1">{item.time}</div>
                              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                              {item.description && (
                                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
