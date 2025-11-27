"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { en } from "@thirdplace/shared/i18n/en";
import { LANDING_FEATURES } from "@thirdplace/shared/constants";
import { FeatureIcon, type LandingFeature } from "@thirdplace/shared/types";
import { Card, CardContent } from "@web/components/ui/card";
import { Wifi, Plug, Volume2, Bath, RefreshCw, Armchair } from "lucide-react";

const STAGGER_DELAY = 0.1;

const iconMap = {
  [FeatureIcon.WIFI]: Wifi,
  [FeatureIcon.OUTLETS]: Plug,
  [FeatureIcon.NOISE]: Volume2,
  [FeatureIcon.RESTROOM]: Bath,
  [FeatureIcon.ROUTINE]: RefreshCw,
  [FeatureIcon.SEATING]: Armchair,
} as const;

function FeatureCard({ feature, index }: { feature: LandingFeature; index: number }): ReactElement {
  const Icon = iconMap[feature.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * STAGGER_DELAY }}
    >
      <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-semibold text-foreground">
            {en[feature.i18nTitleKey]}
          </h3>
          <p className="text-sm text-muted-foreground">
            {en[feature.i18nDescriptionKey]}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FeaturesGrid(): ReactElement {
  return (
    <section id="features" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          {en.landingFeaturesSectionTitle}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LANDING_FEATURES.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
