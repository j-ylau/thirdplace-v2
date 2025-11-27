"use client";

import { useEffect, type ReactElement } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@web/components/marketing/navbar";
import { Hero } from "@web/components/marketing/hero";
import { ProblemSection } from "@web/components/marketing/problem-section";
import { HowItWorks } from "@web/components/marketing/how-it-works";
import { FeaturesGrid } from "@web/components/marketing/features-grid";
import { FinalCta } from "@web/components/marketing/final-cta";
import { Footer } from "@web/components/marketing/footer";
import { useAuthUser } from "@web/hooks/use-auth";
import { AuthRole } from "@thirdplace/shared/types";

export default function LandingPage(): ReactElement {
  const router = useRouter();
  const { data: user, isLoading } = useAuthUser();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (user !== null && user !== undefined && user.role === AuthRole.ADMIN) {
      router.replace("/app");
    }
  }, [isLoading, user, router]);

  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <FeaturesGrid />
      <FinalCta />
      <Footer />
    </main>
  );
}
