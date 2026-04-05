"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Tabbed content sections. Use in MDX like:
 *
 * <Tabs>
 * <Tab label="Early Game">
 * Content for early game here — full markdown supported.
 * </Tab>
 * <Tab label="Mid Game">
 * Content for mid game here.
 * </Tab>
 * <Tab label="Late Game">
 * Content for late game here.
 * </Tab>
 * </Tabs>
 *
 * Any markdown (tables, callouts, lists) works inside a <Tab>.
 */

interface TabItem {
  label: string;
  children: React.ReactNode;
}

// Tab is used as a data container — Tabs reads its props via React.Children
export function Tab({ children }: { label: string; children: React.ReactNode }) {
  return <>{children}</>;
}

export function Tabs({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);

  // Collect Tab children
  const tabs = (
    Array.isArray(children) ? children : [children]
  ).filter(Boolean) as React.ReactElement<TabItem>[];

  if (tabs.length === 0) return null;

  return (
    <div className="my-4 rounded-xl border border-border overflow-hidden">
      {/* Tab bar */}
      <div className="flex overflow-x-auto border-b border-border bg-muted/30">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "shrink-0 px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap",
              active === i
                ? "text-primary border-b-2 border-primary bg-background -mb-px"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div className="p-4">
        {tabs[active]?.props.children}
      </div>
    </div>
  );
}
