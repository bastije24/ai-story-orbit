import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">ainboxmanager</div>
            <p className="text-background/80 max-w-md">
              Inteligentný AI asistent pre efektívnu prácu s informáciami. 
              Organizácia, sumarizácia a plánovanie v jednej aplikácii.
            </p>
            
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://www.facebook.com/ainboxmanager" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/ainboxmanager" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/ainboxmanager" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.twitter.com/ainboxmanager" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/ainboxmanager" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Rýchle odkazy</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  O nás
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Funkcie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Cenník
                </button>
              </li>
              <li>
                <a href="/docs" className="text-background/80 hover:text-background transition-colors">
                  Dokumentácia
                </a>
              </li>
              <li>
                <a href="/api" className="text-background/80 hover:text-background transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Právne</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-background/80 hover:text-background transition-colors">
                  Zásady ochrany údajov
                </a>
              </li>
              <li>
                <a href="/terms" className="text-background/80 hover:text-background transition-colors">
                  Obchodné podmienky
                </a>
              </li>
              <li>
                <a href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/support" className="text-background/80 hover:text-background transition-colors">
                  Podpora
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 ainboxmanager. Všetky práva vyhradené.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="mailto:info@ainboxmanager.sk" className="text-background/80 hover:text-background transition-colors text-sm">
              info@ainboxmanager.sk
            </a>
            <a href="tel:+421123456789" className="text-background/80 hover:text-background transition-colors text-sm">
              +421 123 456 789
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;