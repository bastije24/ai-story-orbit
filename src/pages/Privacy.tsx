import { ArrowLeft, Shield, Lock, Eye, Users, Server, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPage = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Zásady ochrany osobných údajov</h1>
          <p className="text-xl text-muted-foreground">
            Vaše súkromie je pre nás prioritou. Transparentne vám vysvetľujeme, ako spracovávame vaše údaje.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Posledná aktualizácia: 15. november 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">GDPR Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Plne v súlade s európskymi štandardmi ochrany údajov
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Šifrovanie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  End-to-end šifrovanie všetkých vašich dát
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Transparentnosť</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Jasné informácie o tom, ako používame vaše dáta
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aké údaje zbierame</h2>
              <div className="bg-surface rounded-lg p-6">
                <h3 className="font-semibold mb-3">Základné informácie o účte:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Meno a priezvisko</li>
                  <li>E-mailová adresa</li>
                  <li>Názov spoločnosti (voliteľné)</li>
                  <li>Prihlasovacie údaje (hashované heslo)</li>
                </ul>

                <h3 className="font-semibold mb-3 mt-6">Údaje o používaní:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>IP adresa a informácie o zariadení</li>
                  <li>Údaje o používaní aplikácie (analytics)</li>
                  <li>Nastavenia a preferencie</li>
                  <li>Obsah e-mailov a úloh (len na spracovanie AI funkcií)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Ako používame vaše údaje</h2>
              <div className="bg-surface rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Poskytovanie služieb</h3>
                    <p className="text-muted-foreground">AI spracovanie e-mailov, organizácia úloh, kalendárne funkcie</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Zlepšovanie produktu</h3>
                    <p className="text-muted-foreground">Analýza používania na vylepšenie AI algoritmov a používateľského zážitku</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Komunikácia</h3>
                    <p className="text-muted-foreground">Technická podpora, aktualizácie produktu, marketingová komunikácia (s vaším súhlasom)</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Bezpečnosť údajov</h2>
              <div className="bg-surface rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Implementujeme najvyššie bezpečnostné štandardy na ochranu vašich údajov:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Šifrovanie:</strong> AES-256 šifrovanie pre všetky uložené dáta</li>
                  <li><strong>Prenos:</strong> TLS 1.3 pre všetku komunikáciu</li>
                  <li><strong>Prístup:</strong> Striktné riadenie prístupu s dvojfaktorovým overením</li>
                  <li><strong>Monitoring:</strong> 24/7 sledovanie bezpečnostných incidentov</li>
                  <li><strong>Zálohy:</strong> Pravidelné šifrované zálohy v geograficky rozdelených centrách</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Vaše práva</h2>
              <div className="bg-surface rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Podľa GDPR máte nasledujúce práva:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Prístup k údajom</h3>
                    <p className="text-sm text-muted-foreground">Môžete požiadať o kópiu všetkých vašich osobných údajov</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Oprava údajov</h3>
                    <p className="text-sm text-muted-foreground">Môžete opraviť nesprávne alebo neúplné údaje</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Vymazanie údajov</h3>
                    <p className="text-sm text-muted-foreground">Môžete požiadať o vymazanie vašich osobných údajov</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Prenosnosť údajov</h3>
                    <p className="text-sm text-muted-foreground">Môžete získať vaše údaje v štruktúrovanom formáte</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Kontakt</h2>
              <div className="bg-surface rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Pre otázky týkajúce sa ochrany osobných údajov nás kontaktujte:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>E-mail:</strong> privacy@ainboxmanager.sk</p>
                  <p><strong>Pošta:</strong> ainboxmanager s.r.o., Údaje o ochrane osobních údajů, Bratislava, Slovensko</p>
                  <p><strong>Telefón:</strong> +421 123 456 789</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;