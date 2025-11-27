"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import { Home, Compass, User, Shield, type LucideIcon } from "lucide-react";
import { cn } from "@web/lib/utils";
import { Button } from "@web/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useAuthUser } from "@web/hooks/use-auth";
import { signOut } from "@thirdplace/shared/services/auth";
import { AuthRole } from "@thirdplace/shared/types";
import { ROUTES } from "@thirdplace/shared/routes";
import { en } from "@thirdplace/shared/i18n/en";

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

function NavLink({ href, icon: Icon, label, isActive }: NavLinkProps): ReactElement {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}

export function AppNavbar(): ReactElement {
  const pathname = usePathname();
  const { data: user } = useAuthUser();

  const isAdmin = user?.role === AuthRole.ADMIN;

  async function handleSignOut(): Promise<void> {
    await signOut();
    window.location.href = ROUTES.WAITLIST;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border/40 bg-background/60 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link
          href={ROUTES.APP}
          className="text-lg font-semibold text-foreground"
        >
          {en.navBrand}
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          <NavLink
            href={ROUTES.APP}
            icon={Home}
            label={en.navHome}
            isActive={pathname === ROUTES.APP}
          />
          <NavLink
            href={`${ROUTES.APP}/explore`}
            icon={Compass}
            label={en.navExplore}
            isActive={pathname.startsWith(`${ROUTES.APP}/explore`)}
          />
          <NavLink
            href={`${ROUTES.APP}/profile`}
            icon={User}
            label={en.navProfile}
            isActive={pathname.startsWith(`${ROUTES.APP}/profile`)}
          />
          {isAdmin && (
            <NavLink
              href={ROUTES.ADMIN}
              icon={Shield}
              label={en.navAdmin}
              isActive={pathname.startsWith(ROUTES.ADMIN)}
            />
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={(): void => {
              void handleSignOut();
            }}
          >
            {en.authLogout}
          </Button>
        </div>
      </div>
    </nav>
  );
}
