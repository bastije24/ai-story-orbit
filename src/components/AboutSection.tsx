import { Users, Target, Lightbulb, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import aiDashboard from "@/assets/ai-dashboard-tablet.jpg";

const values = [
  {
    icon: Target,
    title: "Naša misia",
    description: "Prinášame revolúciu do správy e-mailov a úloh pomocou najnovších AI technológií. Chceme, aby každý používateľ mal kontrolu nad svojimi informáciami."
  },
  {
    icon: Lightbulb,
    title: "Inovácia",
    description: "Neustále vyvíjame nové funkcie založené na spätnej väzbe používateľov a najnovších technologických trendoch v oblasti umelej inteligencie."
  },
  {
    icon: Users,
    title: "Tím",
    description: "Sme tím odborníkov na AI, UX dizajn a produktový vývoj s viac ako 10-ročnými skúsenosťami v technologických spoločnostiach."
  },
  {
    icon: Award,
    title: "Kvalita",
    description: "Každá funkcia prechádza dôkladným testovaním. Vaše údaje sú v bezpečí vďaka najvyšším štandardom zabezpečenia a GDPR compliance."
  }
];

const AboutSection = () => {
  console.log("AboutSection rendered");
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O ainboxmanager
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sme slovenskí priekopníci v oblasti AI asistentov pre správu informácií. 
            Naša vízia je jednoduchá - spraviť prácu s e-mailmi a úlohami efektívnejšou a príjemnejšou.
          </p>
        </div>

        {/* Story with Visual */}
        <div className="max-w-6xl mx-auto mb-16 animate-fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img 
                src={aiDashboard} 
                alt="ainboxmanager AI Dashboard" 
                className="relative w-full rounded-xl shadow-large hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02]"
              />
            </div>
            
            {/* Timeline */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-foreground mb-8">Naša história</h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
                
                {/* Timeline items */}
                <div className="space-y-8">
                  {/* Problem */}
                  <div className="relative flex items-start group">
                    <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform"></div>
                    <div className="ml-12 bg-surface/50 backdrop-blur-sm rounded-lg p-4 hover:bg-surface transition-all duration-300">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">Problém</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Frustrácia s neefektívnou správou e-mailov. Strácali sme hodiny hľadaním informácií.
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="relative flex items-start group">
                    <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform"></div>
                    <div className="ml-12 bg-surface/50 backdrop-blur-sm rounded-lg p-4 hover:bg-surface transition-all duration-300">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">2023 - Riešenie</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Vytvorili sme AI riešenie s intuitívnym rozhraním. Mesiace vývoja a testovania.
                      </p>
                    </div>
                  </div>

                  {/* Success */}
                  <div className="relative flex items-start group">
                    <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform"></div>
                    <div className="ml-12 bg-surface/50 backdrop-blur-sm rounded-lg p-4 hover:bg-surface transition-all duration-300">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">Dnes - Úspech</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Tisícky používateľov v SK a CZ. Efektívnejšia správa digitálnych informácií.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-large transition-all duration-300 animate-scale-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-up">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Aktívnych používateľov</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500,000+</div>
            <div className="text-muted-foreground">Spracovaných e-mailov</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Spokojnosť zákazníkov</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Podpora</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;