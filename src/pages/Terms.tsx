import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TermsPage = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Obchodné podmienky</h1>
          <p className="text-xl text-muted-foreground">
            Pravidla a podmienky používania služby ainboxmanager
          </p>
          <p className="text-sm text-muted-foreground mt-2">Posledná aktualizácia: 15. november 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                <CardTitle className="text-lg">Férové podmienky</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Transparentné a spravodlivé podmienky bez skrytých poplatkov
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="text-center">
                <Scale className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Slovenské právo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Podmienky sú v súlade so slovenským právom a EÚ legislatívou
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Základné ustanovenia</h2>
              <div className="bg-surface rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Tieto obchodné podmienky upravujú vzťahy medzi spoločnosťou <strong>ainboxmanager s.r.o.</strong> 
                  so sídlom v Bratislave, Slovensko (ďalej len "poskytovateľ") a používateľmi služby ainboxmanager (ďalej len "služba").
                </p>
                <p className="text-muted-foreground">
                  Používaním služby vyjadrujete súhlas s týmito podmienkami. Ak s nimi nesúhlasíte, 
                  službu nepoužívajte.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Opis služby</h2>
              <div className="bg-surface rounded-lg p-6 space-y-4">
                <p className="text-muted-foreground">
                  ainboxmanager je AI-powered služba na správu e-mailov a úloh, ktorá poskytuje:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Automatické označovanie e-mailov pomocou AI</li>
                  <li>Sumarizáciu textov a dokumentov</li>
                  <li>Plánovanie a pripomínanie termínov</li>
                  <li>Kalendárne funkcie s AI optimalizáciou</li>
                  <li>API prístup (pre vyššie plány)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Cenník a platby</h2>
              <div className="bg-surface rounded-lg p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h3 className="font-semibold mb-2">Basic</h3>
                    <p className="text-2xl font-bold text-primary">12€</p>
                    <p className="text-sm text-muted-foreground">/mesiac</p>
                  </div>
                  <div className="text-center p-4 border border-primary rounded-lg bg-primary/5">
                    <h3 className="font-semibold mb-2">Plus</h3>
                    <p className="text-2xl font-bold text-primary">32€</p>
                    <p className="text-sm text-muted-foreground">/mesiac</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <h3 className="font-semibold mb-2">Pro</h3>
                    <p className="text-2xl font-bold text-primary">59€</p>
                    <p className="text-sm text-muted-foreground">/mesiac</p>
                  </div>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Platby:</strong> Mesačne vopred cez kartou alebo bankovým prevodom</p>
                  <p><strong>DPH:</strong> Všetky ceny obsahujú 20% DPH</p>
                  <p><strong>Zrušenie:</strong> Kedykoľvek bez výpovednej lehoty</p>
                  <p><strong>Záruka:</strong> 30-dňová záruka vrátenia peňazí</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Práva a povinnosti používateľa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-success/10 rounded-lg p-6">
                  <h3 className="font-semibold text-success mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Môžete
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Používať službu na osobné alebo firemné účely</li>
                    <li>Integrovať službu s ostatnými nástrojmi</li>
                    <li>Exportovať vaše dáta kedykoľvek</li>
                    <li>Zmeniť alebo zrušiť predplatné</li>
                  </ul>
                </div>
                
                <div className="bg-destructive/10 rounded-lg p-6">
                  <h3 className="font-semibold text-destructive mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Nemôžete
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Zdieľať prístupové údaje s inými osobami</li>
                    <li>Používať službu na nelegálne účely</li>
                    <li>Preťažovať systém nadmerným používaním</li>
                    <li>Reverzne inžinieriť AI algoritmy</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Ochrana údajov a bezpečnosť</h2>
              <div className="bg-surface rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Vaše údaje spracovávame v súlade s našimi 
                  <a href="/privacy" className="text-primary hover:underline ml-1">zásadami ochrany osobných údajov</a>.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Údaje sú šifrované a bezpečne uložené v EÚ</li>
                  <li>Pravidelné bezpečnostné audity a zálohy</li>
                  <li>Prístup k údajom majú len oprávnené osoby</li>
                  <li>V prípade bezpečnostného incidentu vás informujeme do 72 hodín</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Zodpovednosť a obmedzenia</h2>
              <div className="bg-surface rounded-lg p-6 space-y-4">
                <p className="text-muted-foreground">
                  Službu poskytujeme "ako je" s 99.9% dostupnosťou. V prípade výpadku predlžujeme predplatné o príslušnú dobu.
                </p>
                <p className="text-muted-foreground">
                  Nenesieme zodpovednosť za škody vzniknuté nesprávnym používaním služby alebo vis maior situáciami.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Zmeny podmienok</h2>
              <div className="bg-surface rounded-lg p-6">
                <p className="text-muted-foreground">
                  Tieto podmienky môžeme zmeniť s 30-dňovým predstihom. O zmenách vás informujeme e-mailom 
                  a na našej webstránke. Pokračovaním v používaní služby vyjadrujete súhlas s novými podmienkami.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Kontakt a riešenie sporov</h2>
              <div className="bg-surface rounded-lg p-6">
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>E-mail:</strong> legal@ainboxmanager.sk</p>
                  <p><strong>Pošta:</strong> ainboxmanager s.r.o., Právne oddelenie, Bratislava, Slovensko</p>
                  <p><strong>Telefón:</strong> +421 123 456 789</p>
                </div>
                <p className="text-muted-foreground mt-4">
                  Spory sa riešia podľa slovenského práva pred príslušnými súdmi v Bratislave.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;