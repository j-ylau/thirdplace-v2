"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthUser } from "./use-auth";
import { AuthRole } from "@thirdplace/shared/types";
import { ROUTES, isPublicRoute, isAdminRoute } from "@thirdplace/shared/routes";

export function useAuthRedirect(): { isLoading: boolean } {
  const { data: user, isLoading } = useAuthUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const isAuthenticated = user !== null && user !== undefined;

    // Unauthenticated user on root → send to waitlist
    if (!isAuthenticated && pathname === ROUTES.ROOT) {
      router.replace(ROUTES.WAITLIST);
      return;
    }

    // Unauthenticated user on protected route → send to waitlist
    if (!isAuthenticated && !isPublicRoute(pathname)) {
      router.replace(ROUTES.WAITLIST);
      return;
    }

    // Authenticated user on public route or root → send to home
    if (isAuthenticated && (isPublicRoute(pathname) || pathname === ROUTES.ROOT)) {
      router.replace(ROUTES.HOME);
      return;
    }

    // Admin route protection - non-admin users get redirected
    if (isAdminRoute(pathname) && user?.role !== AuthRole.ADMIN) {
      router.replace(ROUTES.HOME);
      return;
    }
  }, [user, isLoading, pathname, router]);

  return { isLoading };
}
