import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Providers } from "@web/components/providers/query-provider";
import { AuthRedirectWrapper } from "@web/components/providers/auth-redirect-wrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ThirdPlace - Find somewhere to go when you don't want to go home",
  description:
    "ThirdPlace finds cozy, quiet, plug-friendly spots near you — with WiFi, outlets, restrooms, and vibes you actually like.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <AuthRedirectWrapper>{children}</AuthRedirectWrapper>
        </Providers>
      </body>
    </html>
  );
}
