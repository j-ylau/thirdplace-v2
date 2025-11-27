"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { en } from "@thirdplace/shared/i18n/en";
import { Sliders, Search, CheckCircle } from "lucide-react";

const STEP_DELAY = 0.2;

const steps = [
  {
    id: "step-1",
    icon: Sliders,
    titleKey: "landingHowItWorksStep1Title" as const,
    descriptionKey: "landingHowItWorksStep1Description" as const,
  },
  {
    id: "step-2",
    icon: Search,
    titleKey: "landingHowItWorksStep2Title" as const,
    descriptionKey: "landingHowItWorksStep2Description" as const,
  },
  {
    id: "step-3",
    icon: CheckCircle,
    titleKey: "landingHowItWorksStep3Title" as const,
    descriptionKey: "landingHowItWorksStep3Description" as const,
  },
];

export function HowItWorks(): ReactElement {
  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          {en.landingHowItWorksSectionTitle}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * STEP_DELAY }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {en[step.titleKey]}
                </h3>
                <p className="text-muted-foreground">
                  {en[step.descriptionKey]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
