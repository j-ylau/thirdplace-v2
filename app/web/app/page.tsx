"use client";

import type { ReactElement } from "react";
import { en } from "@thirdplace/shared/i18n/en";

export default function RootPage(): ReactElement {
  // Auth redirect is handled by useAuthRedirect in layout
  // This page is shown briefly while redirecting
  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">{en.commonLoading}</p>
    </main>
  );
}
