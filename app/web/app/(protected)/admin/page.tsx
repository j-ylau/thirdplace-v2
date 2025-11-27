"use client";

import type { ReactElement } from "react";
import { useAuthUser } from "@web/hooks/use-auth";
import { en } from "@thirdplace/shared/i18n/en";

export default function AdminPage(): ReactElement {
  const { data: user, isLoading } = useAuthUser();

  if (isLoading) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <p className="text-muted-foreground">{en.commonLoading}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">{en.adminDashboardTitle}</h1>
      <p className="text-muted-foreground">
        {en.adminDashboardWelcome}, {user?.email}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">Places</h3>
          <p className="text-sm text-muted-foreground">Manage places and locations</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">Users</h3>
          <p className="text-sm text-muted-foreground">Manage user accounts</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">Waitlist</h3>
          <p className="text-sm text-muted-foreground">View waitlist signups</p>
        </div>
      </div>
    </div>
  );
}
