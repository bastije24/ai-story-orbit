import { Users, Target, Lightbulb, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O ainboxmanager
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sme slovenskí priekopníci v oblasti AI asistentov pre správu informácií. 
            Naša vízia je jednoduchá - spraviť prácu s e-mailmi a úlohami efektívnejšou a príjemnejšou.
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-up">
          <div className="bg-surface rounded-xl p-8 md:p-12 shadow-medium">
            <h3 className="text-2xl font-bold text-foreground mb-6">Naša história</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ainboxmanager vznikol z frustrácie nášho tímu s neefektívnou správou e-mailov a úloh. 
                Každý deň sme strácali hodiny hľadaním dôležitých informácií v zavalených inbox-och.
              </p>
              <p>
                V roku 2023 sme sa rozhodli vytvoriť riešenie, ktoré kombinuje najnovšie AI technológie 
                s intuitívnym používateľským rozhraním. Po mesiacoch vývoja a testovania s beta používateľmi 
                sme spustili prvú verziu ainboxmanager-a.
              </p>
              <p>
                Dnes pomáhame tisíckam používateľov po celom Slovensku a Česku efektívnejšie spravovať 
                svoje digitálne informácie a získať späť kontrolu nad svojím časom.
              </p>
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