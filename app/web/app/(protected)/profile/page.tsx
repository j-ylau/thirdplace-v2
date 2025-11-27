"use client";

import type { ReactElement } from "react";
import { useAuthUser } from "@web/hooks/use-auth";
import { en } from "@thirdplace/shared/i18n/en";

export default function ProfilePage(): ReactElement {
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
      <h1 className="mb-4 text-2xl font-bold">Profile</h1>
      <p className="text-muted-foreground">
        Signed in as {user?.email}
      </p>
    </div>
  );
}
