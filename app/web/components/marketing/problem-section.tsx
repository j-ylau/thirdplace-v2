"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { en } from "@thirdplace/shared/i18n/en";
import { LANDING_SCENARIOS } from "@thirdplace/shared/constants";
import { Card, CardContent } from "@web/components/ui/card";

const STAGGER_DELAY = 0.15;

export function ProblemSection(): ReactElement {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          {en.landingProblemSectionTitle}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {LANDING_SCENARIOS.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * STAGGER_DELAY }}
            >
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl">{scenario.emoji}</div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {en[scenario.i18nTitleKey]}
                  </h3>
                  <p className="text-muted-foreground">
                    {en[scenario.i18nDescriptionKey]}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
