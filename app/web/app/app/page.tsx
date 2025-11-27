"use client";

import { useEffect, type ReactElement } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@web/components/ui/button";
import { signOut } from "@thirdplace/shared/services/auth";
import { AuthRole } from "@thirdplace/shared/types";
import { en } from "@thirdplace/shared/i18n/en";
import { useAuthUser, useInvalidateAuth } from "@web/hooks/use-auth";

export default function AdminDashboard(): ReactElement {
  const router = useRouter();
  const { data: user, isLoading } = useAuthUser();
  const invalidateAuth = useInvalidateAuth();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (user === null || user === undefined || user.role !== AuthRole.ADMIN) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  async function handleSignOut(): Promise<void> {
    await signOut();
    await invalidateAuth();
    router.replace("/");
  }

  if (isLoading || user === null || user === undefined) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">{en.commonLoading}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-semibold">{en.adminDashboardTitle}</h1>
          <Button
            variant="outline"
            onClick={(): void => {
              void handleSignOut();
            }}
          >
            {en.authLogout}
          </Button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-muted-foreground">
          {en.adminDashboardWelcome}, {user.email}
        </p>
      </div>
    </main>
  );
}
