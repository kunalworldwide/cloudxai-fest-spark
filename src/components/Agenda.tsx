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
          time: "09:30 AM",
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
          time: "11:00 AM",
          title: "Technical Sessions",
          type: "Sessions",
          description: "25-minute focused presentations"
        },
        {
          time: "01:00 PM",
          title: "Networking Lunch",
          type: "Break",
        },
        {
          time: "02:00 PM",
          title: "Afternoon Sessions",
          type: "Sessions",
        },
        {
          time: "04:30 PM",
          title: "Closing Keynote",
          type: "Keynote",
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
          time: "11:30 AM",
          title: "AI Enabler Workshop",
          type: "Workshop",
          duration: "1.5 hours"
        },
        {
          time: "01:30 PM",
          title: "DBO Implementation Workshop",
          type: "Workshop",
          duration: "1 hour"
        },
        {
          time: "02:45 PM",
          title: "CLM & OMNI Integration Workshop",
          type: "Workshop",
          duration: "1.5 hours"
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
          time: "12:00 PM",
          title: "Executive Lunch & Networking",
          type: "VIP Event",
          duration: "1.5 hours"
        },
      ],
    },
  ];

  return (
    <section id="agenda" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Event Agenda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A carefully curated program designed to inspire, educate, and connect
          </p>
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
                        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="text-sm text-accent font-semibold mb-1">{item.time}</div>
                              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                              {item.speaker && (
                                <p className="text-sm text-muted-foreground mt-1">Speaker: {item.speaker}</p>
                              )}
                              {item.duration && (
                                <p className="text-sm text-muted-foreground mt-1">Duration: {item.duration}</p>
                              )}
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
