"use client";

import type { ReactElement } from "react";

export default function ExplorePage(): ReactElement {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">Explore</h1>
      <p className="text-muted-foreground">
        Discover new places near you.
      </p>
    </div>
  );
}
