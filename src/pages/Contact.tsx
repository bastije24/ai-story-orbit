import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageCircle, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Kontakt</h1>
          <p className="text-xl text-muted-foreground">
            Radi vám pomôžeme s akýmikoľvek otázkami týkajúcimi sa ainboxmanager
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-large transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>E-mail</CardTitle>
                <CardDescription>Najrýchlejší spôsob kontaktu</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@ainboxmanager.sk" className="text-primary hover:underline">
                  info@ainboxmanager.sk
                </a>
                <p className="text-sm text-muted-foreground mt-2">Odpoveď do 24 hodín</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-large transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Telefón</CardTitle>
                <CardDescription>Pre naliehavé otázky</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="tel:+421123456789" className="text-primary hover:underline">
                  +421 123 456 789
                </a>
                <p className="text-sm text-muted-foreground mt-2">Po-Pia 9:00-18:00</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-large transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Okamžitá podpora</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Spustiť chat
                </Button>
                <p className="text-sm text-muted-foreground mt-2">Po-Pia 9:00-18:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Napíšte nám</h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Meno *</label>
                      <input
                        type="text"
                        placeholder="Ján Novák"
                        className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">E-mail *</label>
                      <input
                        type="email"
                        placeholder="jan@example.com"
                        className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Spoločnosť</label>
                    <input
                      type="text"
                      placeholder="Názov spoločnosti"
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Predmet *</label>
                    <select className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Všeobecná otázka</option>
                      <option>Technická podpora</option>
                      <option>Fakturácia a platby</option>
                      <option>Návrh na vylepšenie</option>
                      <option>Partnerships</option>
                      <option>Médiá a tlač</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Správa *</label>
                    <textarea
                      rows={5}
                      placeholder="Opíšte vašu otázku alebo požiadavku..."
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <Button variant="cta" size="lg" className="w-full">
                    Odoslať správu
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    * Povinné polia. Odpovieme do 24 hodín v pracovných dňoch.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Informácie o spoločnosti</h2>
              
              <Card className="mb-6">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Adresa</h3>
                      <p className="text-muted-foreground">
                        ainboxmanager s.r.o.<br />
                        Michalská 9<br />
                        811 01 Bratislava<br />
                        Slovensko
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Pracovné hodiny</h3>
                      <p className="text-muted-foreground">
                        Pondelok - Piatok: 9:00 - 18:00<br />
                        Sobota - Nedeľa: Zatvorené
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Headphones className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">24/7 Podpora</h3>
                      <p className="text-muted-foreground">
                        Pre používateľov Plus a Pro plánov<br />
                        Technická podpora dostupná nepretržite
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>FAQ</CardTitle>
                  <CardDescription>Najčastejšie otázky</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Ako dlho trvá implementácia?</h4>
                    <p className="text-sm text-muted-foreground">
                      Základné nastavenie je hotové do 5 minút. Pokročilé integrácie trvajú 1-3 dni.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Môžem zmeniť plán kedykoľvek?</h4>
                    <p className="text-sm text-muted-foreground">
                      Áno, plán môžete zmeniť alebo zrušiť kedykoľvek bez výpovednej lehoty.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Kde sú uložené moje dáta?</h4>
                    <p className="text-sm text-muted-foreground">
                      Všetky dáta sú bezpečne uložené v dátových centrách v Európskej únii.
                    </p>
                  </div>

                  <Button variant="outline" className="w-full">
                    Zobraziť všetky FAQ
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

export default ContactPage;