import Hero from "@/components/Hero";
import About from "@/components/About";
import Agenda from "@/components/Agenda";
import Keynotes from "@/components/Keynotes";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Agenda />
      <Keynotes />
      <Venue />
      <Footer />
    </div>
  );
};

export default Index;
