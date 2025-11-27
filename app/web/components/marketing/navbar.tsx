"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { en } from "@thirdplace/shared/i18n/en";
import { Button } from "@web/components/ui/button";

export function Navbar(): ReactElement {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-primary">ThirdPlace</span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {en.navHowItWorks}
          </a>
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {en.navForRemoteWorkers}
          </a>
          <Button size="sm">{en.navGetEarlyAccess}</Button>
        </div>
      </div>
    </motion.nav>
  );
}
