import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "12",
    description: "Pre jednotlivcov a malé tímy",
    features: [
      "100 AI akcií mesačne",
      "Základné AI tagy",
      "Sumarizácia textov",
      "E-mailová podpora",
      "Mobilná aplikácia"
    ],
    popular: false
  },
  {
    name: "Plus",
    price: "32",
    description: "Pre rastúce tímy a firmy",
    features: [
      "500 AI akcií mesačne",
      "Pokročilé AI tagy",
      "Deadliner a pripomienky",
      "Smart kalendár",
      "Prioritná podpora",
      "Tímové funkcie",
      "API prístup"
    ],
    popular: true
  },
  {
    name: "Pro",
    price: "59",
    description: "Pre veľké organizácie",
    features: [
      "Neobmedzené AI akcie",
      "Všetky AI funkcie",
      "Pokročilé analýzy",
      "Vlastné integrácie",
      "24/7 VIP podpora",
      "Tímové analytiky",
      "White-label riešenie",
      "Dedikovaný account manager"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Jednoduché ceny
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vyberte si plán, ktorý najlepšie vyhovuje vašim potrebám
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-primary shadow-glow ring-2 ring-primary/20' 
                  : 'border-border shadow-medium hover:shadow-large'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Najobľúbenejší
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}€</span>
                  <span className="text-muted-foreground">/mesiac</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-success-foreground" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.popular ? "Začať hneď" : "Vybrať plán"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            30-dňová záruka vrátenia peňazí • Bez záväzkov • Zrušenie kedykoľvek
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;