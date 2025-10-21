import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg z-50 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="font-bold text-xl text-foreground">
              CloudxAI Conference 2026
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("agenda")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Agenda
            </button>
            <button 
              onClick={() => scrollToSection("keynotes")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Keynotes
            </button>
            <button 
              onClick={() => scrollToSection("venue")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Venue
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => window.open("#", "_blank")}
              className="hidden sm:inline-flex"
            >
              Submit CFP
            </Button>
            <Button 
              onClick={() => window.open("#", "_blank")}
              className="bg-primary hover:bg-primary/90"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;