"use client";

import type { ReactElement } from "react";
import { AppNavbar } from "@web/components/global/app-navbar";
import { useAuthUser } from "@web/hooks/use-auth";
import { en } from "@thirdplace/shared/i18n/en";

export default function AppHomePage(): ReactElement {
  const { data: user, isLoading } = useAuthUser();

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">{en.commonLoading}</p>
      </main>
    );
  }

  return (
    <>
      <AppNavbar />
      <main className="min-h-screen pt-16">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="mb-4 text-2xl font-bold">
            {en.adminDashboardWelcome}, {user?.email}
          </h1>
          <p className="text-muted-foreground">
            Your personalized spots will appear here.
          </p>
        </div>
      </main>
    </>
  );
}
