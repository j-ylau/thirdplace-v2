"use client";

import type { ReactElement, ReactNode } from "react";
import { useAuthRedirect } from "@web/hooks/use-auth-redirect";

interface AuthRedirectWrapperProps {
  children: ReactNode;
}

export function AuthRedirectWrapper({ children }: AuthRedirectWrapperProps): ReactElement {
  useAuthRedirect();

  return <>{children}</>;
}
