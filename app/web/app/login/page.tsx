"use client";

import { useState, useEffect, type ReactElement, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@web/components/ui/button";
import { Input } from "@web/components/ui/input";
import { signInWithMagicLink } from "@thirdplace/shared/services/auth";
import { AuthStatus, AuthRole } from "@thirdplace/shared/types";
import { en } from "@thirdplace/shared/i18n/en";
import { useAuthUser } from "@web/hooks/use-auth";

export default function LoginPage(): ReactElement {
  const router = useRouter();
  const { data: user, isLoading } = useAuthUser();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.IDLE);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (user !== null && user !== undefined && user.role === AuthRole.ADMIN) {
      router.replace("/app");
    }
  }, [isLoading, user, router]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setStatus(AuthStatus.LOADING);

    const result = await signInWithMagicLink(email);

    if (result.success) {
      setStatus(AuthStatus.SENT);
    } else {
      setStatus(AuthStatus.ERROR);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={(e): void => {
          void handleSubmit(e);
        }}
        className="w-full max-w-md space-y-4 rounded-lg border bg-background p-6 shadow-sm"
      >
        <h1 className="text-xl font-semibold">{en.authLoginTitle}</h1>
        <p className="text-sm text-muted-foreground">{en.authLoginSubtitle}</p>
        <Input
          type="email"
          required
          placeholder={en.authEmailPlaceholder}
          value={email}
          onChange={(e): void => {
            setEmail(e.target.value);
          }}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={status === AuthStatus.LOADING}
        >
          {status === AuthStatus.LOADING ? en.authSending : en.authSendMagicLink}
        </Button>
        {status === AuthStatus.SENT && (
          <p className="text-sm text-green-600">{en.authCheckEmail}</p>
        )}
        {status === AuthStatus.ERROR && (
          <p className="text-sm text-red-600">{en.authLoginFailed}</p>
        )}
      </form>
    </main>
  );
}
