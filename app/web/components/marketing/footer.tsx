"use client";

import type { ReactElement } from "react";
import { en } from "@thirdplace/shared/i18n/en";

export function Footer(): ReactElement {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-primary">ThirdPlace</span>
          </div>

          <p className="max-w-md text-center text-sm text-muted-foreground md:text-left">
            {en.landingFooterTagline}
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              TikTok
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
