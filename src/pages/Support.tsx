import { ArrowLeft, HelpCircle, Book, MessageCircle, Video, Download, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SupportPage = () => {
  const faqItems = [
    {
      category: "Začíname",
      questions: [
        {
          q: "Ako si vytvorím účet?",
          a: "Kliknite na 'Registrácia' v pravom hornom rohu a vyplňte formulár. Po overení e-mailu môžete začať používať 14-dňovú skúšobnú verziu."
        },
        {
          q: "Aké sú systémové požiadavky?",
          a: "ainboxmanager funguje v každom modernom webovom prehliadači. Odporúčame Chrome, Firefox, Safari alebo Edge. Mobilná aplikácia je dostupná pre iOS a Android."
        },
        {
          q: "Ako dlho trvá nastavenie?",
          a: "Základné nastavenie je hotové do 5 minút. Prepojenie s vašim e-mailovým klientom trvá 2-3 minúty cez bezpečné OAuth autentifikácie."
        }
      ]
    },
    {
      category: "AI Funkcie",
      questions: [
        {
          q: "Ako fungujú AI tagy?",
          a: "AI analyzuje obsah vašich e-mailov a automaticky im priradí relevantné tagy na základe témy, priority a kontextu. Systém sa učí z vašich preferencií."
        },
        {
          q: "Je AI sumarizácia presná?",
          a: "Naša AI dosahuje 95% presnosť pri sumarizácii. Používame najnovšie GPT modely s dodatočným tréningom na e-mailovej komunikácii."
        },
        {
          q: "Môžem si prispôsobiť AI funkcie?",
          a: "Áno, môžete vytvoriť vlastné tagy, nastaviť priority a prispôsobiť AI podľa vašich potrieb. V Plus a Pro plánoch sú dostupné pokročilé nastavenia."
        }
      ]
    },
    {
      category: "Fakturácia",
      questions: [
        {
          q: "Aké platobné metódy akceptujete?",
          a: "Akceptujeme všetky hlavné kreditné karty (Visa, MasterCard, AmEx) a bankové prevody. Firemní zákazníci môžu platiť na faktúru."
        },
        {
          q: "Môžem zmeniť plán kedykoľvek?",
          a: "Áno, plán môžete zmeniť kedykoľvek. Pri upgrade sa rozdiel doplatí pomerne, pri downgrade sa kredit použije v nasledujúcom mesiaci."
        },
        {
          q: "Máte zľavy pre študentov alebo neziskovky?",
          a: "Áno, ponúkame 50% zľavu pre študentov a neziskové organizácie. Kontaktujte nás na edu@ainboxmanager.sk pre viac informácií."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Späť
            </a>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Podpora a pomoc</h1>
          <p className="text-xl text-muted-foreground">
            Všetko čo potrebujete vedieť o ainboxmanager na jednom mieste
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Quick Help Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-large transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Book className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Dokumentácia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Kompletný návod na použitie všetkých funkcií
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-large transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Video tutoriály</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Krok za krokom video návody pre každú funkciu
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-large transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Okamžitá podpora od našich expertov
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-large transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Mobilná app</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stiahnite si našu mobilnú aplikáciu
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Hľadajte v našej databáze znalostí..."
                    className="w-full pl-12 pr-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-lg"
                  />
                  <Button variant="cta" className="absolute right-2 top-1.5">
                    Hľadať
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Support */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Potrebujete pomoc?</CardTitle>
                <CardDescription>
                  Náš tím podpory je tu pre vás
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="cta" size="lg" className="w-full">
                  Kontaktovať podporu
                </Button>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">E-mail:</span>
                    <span>support@ainboxmanager.sk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Telefón:</span>
                    <span>+421 123 456 789</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Odpoveď:</span>
                    <span>Do 2 hodín</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Pro používatelia</h4>
                  <p className="text-sm text-muted-foreground">
                    Máte prístup k 24/7 prioritnej podpore a dedikovanému account managerovi.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Najčastejšie otázky</h2>
              
              <div className="space-y-6">
                {faqItems.map((category, categoryIndex) => (
                  <Card key={categoryIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.questions.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                          <h4 className="font-semibold mb-2 flex items-start gap-2">
                            <HelpCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {item.q}
                          </h4>
                          <p className="text-muted-foreground ml-6 text-sm leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Resources */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Populárne zdroje</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Rýchly štart</CardTitle>
                  <CardDescription>5 minút na nastavenie</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Kompletný návod ako nastaviť ainboxmanager a začať používať AI funkcie.
                  </p>
                  <Button variant="outline" size="sm">
                    Čítať návod
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">API dokumentácia</CardTitle>
                  <CardDescription>Pre vývojárov</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Kompletná dokumentácia API pre integráciu s vašimi systémami.
                  </p>
                  <Button variant="outline" size="sm">
                    API docs
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Best practices</CardTitle>
                  <CardDescription>Tipy a triky</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ako maximalizovať efektivitu práce s AI asistentom.
                  </p>
                  <Button variant="outline" size="sm">
                    Zobraziť tipy
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;