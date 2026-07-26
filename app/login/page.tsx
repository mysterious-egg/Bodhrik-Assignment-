"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  const handleLogin = () => {
    document.cookie =
      "mock-auth=true; path=/; max-age=86400; SameSite=Lax";

    window.location.href = "/dashboard";
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
      <Card className="w-full max-w-md space-y-6 p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            Mock Login
          </h1>

          <p className="text-muted-foreground">
uh-huh just click the button and there we go, you are logged in. No need to enter any credentials.
          </p>
        </div>

        <Button
          className="w-full"
          onClick={handleLogin}
        >
          Continue to Dashboard
        </Button>
      </Card>
    </main>
  );
}