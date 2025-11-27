"use client";

import { type ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { en } from "@thirdplace/shared/i18n/en";
import { Button } from "@web/components/ui/button";
import { Input } from "@web/components/ui/input";

export function FinalCta(): ReactElement {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          {en.landingFinalCtaTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8 text-primary-foreground/80"
        >
          {en.landingFinalCtaSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder={en.landingHeroEmailPlaceholder}
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
          />
          <Input
            type="text"
            placeholder={en.landingHeroCityPlaceholder}
            value={city}
            onChange={(e) => { setCity(e.target.value); }}
            className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 sm:w-32"
          />
          <Button
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            {en.landingHeroCtaPrimary}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex justify-center gap-4 text-sm text-primary-foreground/60"
        >
          <span>{en.landingFinalCtaIos}</span>
          <span>•</span>
          <span>{en.landingFinalCtaAndroid}</span>
        </motion.div>
      </div>
    </section>
  );
}
