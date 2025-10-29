import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Agenda from "@/components/Agenda";
import Keynotes from "@/components/Keynotes";
import Venue from "@/components/Venue";
import Partners from "@/components/Partners";
import CommunityPartners from "@/components/CommunityPartners";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Agenda />
      <Keynotes />
      <Venue />
      <Partners />
      <CommunityPartners />
      <Footer />
    </div>
  );
};

export default Index;
