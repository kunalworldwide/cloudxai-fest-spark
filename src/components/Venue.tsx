import { MapPin, Navigation, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import venueBg from "@/assets/venue-bg.jpg";

const Venue = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Venue
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at one of Bengaluru's premier conference venues
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden animate-scale-in border border-border shadow-2xl shadow-primary/10">
            <img 
              src={venueBg} 
              alt="Nimhans Convention Center" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Nimhans Convention Center</h3>
                <p className="text-muted-foreground">
                  A state-of-the-art facility equipped with modern amenities and excellent connectivity
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">
                  Hosur Road, Bengaluru, Karnataka 560029<br />
                  Easily accessible from all parts of the city
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">Getting There</h4>
                <p className="text-muted-foreground">
                  15 minutes from Kempegowda International Airport<br />
                  Direct metro connectivity available
                </p>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
            >
              <MapPin className="w-5 h-5 mr-2" />
              View on Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
