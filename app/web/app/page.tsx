import type { ReactElement } from "react";
import { Navbar } from "@web/components/marketing/navbar";
import { Hero } from "@web/components/marketing/hero";
import { ProblemSection } from "@web/components/marketing/problem-section";
import { HowItWorks } from "@web/components/marketing/how-it-works";
import { FeaturesGrid } from "@web/components/marketing/features-grid";
import { FinalCta } from "@web/components/marketing/final-cta";
import { Footer } from "@web/components/marketing/footer";

export default function LandingPage(): ReactElement {
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
