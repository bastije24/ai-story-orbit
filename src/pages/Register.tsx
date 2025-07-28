import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Lock, User, Building } from "lucide-react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">ainboxmanager</h1>
          <p className="text-muted-foreground">Vytvorte si účet a začnite organizovať</p>
        </div>

        <Card className="shadow-large">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Registrácia</CardTitle>
            <CardDescription>
              Začnite s 14-dňovou bezplatnou skúšobnou verziou
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Meno</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Ján"
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Priezvisko</label>
                <input
                  type="text"
                  placeholder="Novák"
                  className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="vas@email.sk"
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Spoločnosť (voliteľné)</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Názov spoločnosti"
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Heslo</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="Minimálne 8 znakov"
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="rounded mt-1" />
                <span className="text-sm text-muted-foreground">
                  Súhlasím s{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    obchodnými podmienkami
                  </a>{" "}
                  a{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    zásadami ochrany údajov
                  </a>
                </span>
              </label>

              <label className="flex items-start space-x-2">
                <input type="checkbox" className="rounded mt-1" />
                <span className="text-sm text-muted-foreground">
                  Chcem dostávať novinky a tipy o ainboxmanager (voliteľné)
                </span>
              </label>
            </div>

            <Button variant="cta" size="lg" className="w-full">
              Vytvoriť účet
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Už máte účet?{" "}
                <a href="/login" className="text-primary hover:underline">
                  Prihláste sa
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            Späť na hlavnú stránku
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;