"use client";

import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from "@/lib/tolgee";

export function TolgeeNextProvider({ children }: { children: React.ReactNode }) {
  return (
    <TolgeeProvider tolgee={tolgee} fallback="Loading...">
      {children}
    </TolgeeProvider>
  );
}
