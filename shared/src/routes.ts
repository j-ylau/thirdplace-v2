// ============================================================================
// Route Constants
// ============================================================================

export const ROUTES = {
  // Root gate
  ROOT: "/",

  // Public routes (no auth required)
  WAITLIST: "/waitlist",
  LOGIN: "/login",

  // Protected routes (auth required)
  HOME: "/home",
  EXPLORE: "/explore",
  PROFILE: "/profile",

  // Admin routes (admin role required)
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

export const PROTECTED_ROUTES: readonly string[] = [
  ROUTES.HOME,
  ROUTES.EXPLORE,
  ROUTES.PROFILE,
  ROUTES.ADMIN,
] as const;

// ============================================================================
// Route Helpers
// ============================================================================

export function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export function isAdminRoute(pathname: string): boolean {
  return pathname === ROUTES.ADMIN || pathname.startsWith(`${ROUTES.ADMIN}/`);
}
