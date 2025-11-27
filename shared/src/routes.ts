// ============================================================================
// Route Constants
// ============================================================================

export const ROUTES = {
  // Public routes (no auth required)
  WAITLIST: "/waitlist",
  LOGIN: "/login",

  // Authenticated routes
  ROOT: "/",
  APP: "/app",

  // Admin-only routes
  ADMIN: "/admin",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

// ============================================================================
// Route Groups
// ============================================================================

export const PUBLIC_ROUTES: readonly string[] = [
  ROUTES.WAITLIST,
  ROUTES.LOGIN,
] as const;

export const AUTH_ROUTES: readonly string[] = [
  ROUTES.ROOT,
  ROUTES.APP,
] as const;

export const ADMIN_ROUTES: readonly string[] = [
  ROUTES.ADMIN,
] as const;

// ============================================================================
// Route Helpers
// ============================================================================

export function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export function isAdminRoute(pathname: string): boolean {
  return ADMIN_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}
