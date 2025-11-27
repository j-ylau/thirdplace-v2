"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import type { ExamplePlace } from "@thirdplace/shared/types";
import { en } from "@thirdplace/shared/i18n/en";
import { Card, CardContent } from "@web/components/ui/card";
import { Wifi, Plug, Volume2, MapPin } from "lucide-react";

interface PlaceCardProps {
  place: ExamplePlace;
  index: number;
}

const FLOAT_DURATION_BASE = 3;
const FLOAT_DURATION_INCREMENT = 0.5;
const FLOAT_DISTANCE = -10;

export function PlaceCard({ place, index }: PlaceCardProps): ReactElement {
  const name = en[place.i18nNameKey];
  const location = en[place.i18nLocationKey];

  return (
    <motion.div
      animate={{
        y: [0, FLOAT_DISTANCE, 0],
      }}
      transition={{
        duration: FLOAT_DURATION_BASE + index * FLOAT_DURATION_INCREMENT,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Card className="w-64 shadow-lg transition-shadow hover:shadow-xl">
        <CardContent className="p-4">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-foreground">{name}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {location}
              </div>
            </div>
          </div>

          <div className="mb-3 flex gap-2">
            {place.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 text-muted-foreground">
            <Wifi className="h-4 w-4" />
            <Plug className="h-4 w-4" />
            <Volume2 className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
