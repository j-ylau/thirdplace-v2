"use client";

import { useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import { en } from "@thirdplace/shared/i18n/en";
import { LANDING_EXAMPLE_PLACES } from "@thirdplace/shared/constants";
import { Button } from "@web/components/ui/button";
import { Input } from "@web/components/ui/input";
import { PlaceCard } from "./place-card";

const CARD_ANIMATION_BASE_DELAY = 0.4;
const CARD_ANIMATION_STAGGER = 0.15;
const CARD_TOP_OFFSET = 80;
const CARD_TOP_BASE = 20;
const CARD_RIGHT_OFFSET = 30;

export function Hero(): ReactElement {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary"
            >
              {en.landingHeroBadge}
            </motion.div>

            <h1 className="mb-6 whitespace-pre-line text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              {en.landingHeroTitle}
            </h1>

            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              {en.landingHeroSubtitle}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={en.landingHeroEmailPlaceholder}
                value={email}
                onChange={(e): void => { setEmail(e.target.value); }}
                className="sm:w-48"
              />
              <Input
                type="text"
                placeholder={en.landingHeroCityPlaceholder}
                value={city}
                onChange={(e): void => { setCity(e.target.value); }}
                className="sm:w-36"
              />
              <Button size="lg">{en.landingHeroCtaPrimary}</Button>
            </div>
          </motion.div>

          {/* Right column - floating cards */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {LANDING_EXAMPLE_PLACES.map((place, index) => (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: CARD_ANIMATION_BASE_DELAY + index * CARD_ANIMATION_STAGGER }}
                  className="absolute"
                  style={{
                    top: `${String(index * CARD_TOP_OFFSET + CARD_TOP_BASE)}px`,
                    right: `${String(index * CARD_RIGHT_OFFSET)}px`,
                    zIndex: LANDING_EXAMPLE_PLACES.length - index,
                  }}
                >
                  <PlaceCard place={place} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
