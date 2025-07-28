import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tags, FileText, Calendar, Clock } from "lucide-react";

const features = [
  {
    icon: Tags,
    title: "AI Tagy",
    description: "Automatické označovanie e-mailov a úloh podľa obsahu. AI rozpozná dôležitosť a kategóriu, aby ste sa mohli sústrediť na to podstatné.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: FileText,
    title: "AI Sumarizér",
    description: "Okamžité zhrnutie dlhých textov, e-mailov a dokumentov. Získajte kľúčové informácie za sekundy bez čítania celého obsahu.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Clock,
    title: "Deadliner",
    description: "Inteligentné pripomínanie termínov a automatické plánovanie úloh. Nikdy nezmeškajte dôležitý termín s personalizovanými upozorneniami.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Calendar,
    title: "Smart Kalendár",
    description: "Prepojený kalendár s AI funkciami pre optimálne plánovanie. Automatické navrhovanie času na stretnutia a úlohy.",
    gradient: "from-green-500 to-emerald-500"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Výkonné AI funkcie
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Všetko čo potrebujete pre efektívnu prácu s informáciami na jednom mieste
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-all duration-300 hover:scale-105 border-0 shadow-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA for features */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary-light/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
            A ešte veľa ďalších funkcií v príprave...
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;