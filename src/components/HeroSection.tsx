import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import brainIcon from "@/assets/brain-icon.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-transparent to-primary/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-primary rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            Nová generácia AI asistenta
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
            <span className="flex items-center justify-center gap-4">
              <img src={brainIcon} alt="AI Brain" className="w-12 h-12 sm:w-16 sm:h-16" />
              ainboxmanager
            </span>
            <span className="block text-primary mt-2">
              Tvoj AI asistent na organizáciu
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Poriadok a kľud v inbox-e s inteligentným označovaním, sumarizáciou a plánovaním termínov
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="/register">
              <Button variant="hero" size="xl" className="group">
                Začni teraz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/trial">
              <Button variant="outline" size="xl">
                Vyskúšaj zdarma
              </Button>
            </a>
          </div>
          
          {/* Hero Image */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative max-w-4xl mx-auto">
              <img 
                src={heroDashboard} 
                alt="AI Story Dashboard" 
                className="w-full h-auto rounded-xl shadow-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-muted-foreground mb-4">Dôveruje nám už viac ako 10,000+ používateľov</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="w-16 h-8 bg-muted rounded flex items-center justify-center text-xs font-medium">
                LOGO
              </div>
              <div className="w-16 h-8 bg-muted rounded flex items-center justify-center text-xs font-medium">
                LOGO
              </div>
              <div className="w-16 h-8 bg-muted rounded flex items-center justify-center text-xs font-medium">
                LOGO
              </div>
              <div className="w-16 h-8 bg-muted rounded flex items-center justify-center text-xs font-medium">
                LOGO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;