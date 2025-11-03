import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import aixchangeLogo from "@/assets/aixchange-logo.png";
import cloudComputingCircleLogo from "@/assets/cloud-computing-circle-logo.png";
import castaiLogoWhite from "@/assets/castai-logo-white.png";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              CloudxAI
            </h3>
            <p className="text-muted-foreground mb-4">
              A Premier Tech Conference exploring the convergence of Cloud Computing and Artificial Intelligence
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Agenda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Speakers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Venue</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@cloudxai.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Powered By and Organised By */}
        <div className="pt-8 border-t border-border space-y-8">
          {/* Copyright and Powered By */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 CloudxAI. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Powered by</span>
              <img 
                src={castaiLogoWhite} 
                alt="CAST.AI" 
                className="h-6 object-contain"
              />
            </div>
          </div>

          {/* Organised By */}
          <div className="py-8">
            <h4 className="text-xl font-semibold text-center mb-8">Organised By</h4>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              <div className="flex flex-col items-center">
                <img 
                  src={cloudComputingCircleLogo} 
                  alt="Cloud Computing Circle" 
                  className="h-24 w-24 object-contain mb-3"
                />
                <p className="text-sm font-medium text-foreground">Cloud Computing Circle</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={aixchangeLogo} 
                  alt="AIXchange" 
                  className="h-20 object-contain mb-3"
                />
                <p className="text-sm font-medium text-foreground">AIXchange</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
