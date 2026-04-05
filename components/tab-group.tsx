"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export function TabGroup({
  tabs,
  defaultTab,
}: {
  tabs: Tab[];
  defaultTab?: string;
}) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id ?? "");

  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div className="mb-4 flex gap-1 overflow-x-auto rounded-xl border bg-muted/20 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              tab.id === active
                ? "bg-hypixel-gold/15 text-hypixel-gold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="animate-fade-in-up" key={current?.id}>
        {current?.content}
      </div>
    </div>
  );
}
