import type { ReactNode } from "react";
import { AppNavbar } from "@web/components/global/app-navbar";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  return (
    <>
      <AppNavbar />
      <main className="min-h-screen pt-16">{children}</main>
    </>
  );
}
