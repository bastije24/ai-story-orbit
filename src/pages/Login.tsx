import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">ainboxmanager</h1>
          <p className="text-muted-foreground">Prihlásenie do vašej AI workspace</p>
        </div>

        <Card className="shadow-large">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Prihlásenie</CardTitle>
            <CardDescription>
              Zadajte vaše prihlasovacie údaje
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
              <label className="text-sm font-medium">Heslo</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Zapamätať si ma</span>
              </label>
              <a href="/forgot-password" className="text-sm text-primary hover:underline">
                Zabudnuté heslo?
              </a>
            </div>

            <Button variant="cta" size="lg" className="w-full">
              Prihlásiť sa
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Nemáte účet?{" "}
                <a href="/register" className="text-primary hover:underline">
                  Zaregistrujte sa
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

export default LoginPage;