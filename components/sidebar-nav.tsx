"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, NAV_GROUP_LABELS, type NavGroup } from "@/lib/nav";

const GROUPS: NavGroup[] = ["progression", "systems", "economy", "meta"];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="rounded-xl border bg-card/60 p-4 backdrop-blur">
      {GROUPS.map((group) => {
        const items = NAV_ITEMS.filter((n) => n.group === group);
        if (items.length === 0) return null;

        return (
          <div key={group} className="mb-3 last:mb-0">
            <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {NAV_GROUP_LABELS[group]}
            </p>
            <nav className="flex flex-col gap-0.5">
              {items.map((n) => {
                const isActive = pathname === n.href;
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={cn(
                      "group flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors",
                      isActive
                        ? "bg-muted/40 text-foreground"
                        : "text-foreground/70 hover:bg-muted/20 hover:text-foreground",
                    )}
                  >
                    <n.icon
                      className={cn(
                        "h-3.5 w-3.5",
                        isActive ? n.accentClass : "text-muted-foreground group-hover:" + n.accentClass.replace("accent-", "text-"),
                      )}
                    />
                    <span className="truncate">{n.label}</span>
                    {isActive && (
                      <span
                        className={cn(
                          "ml-auto h-1.5 w-1.5 rounded-full",
                          n.accentClass.replace("accent-", "bg-"),
                        )}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        );
      })}
    </div>
  );
}
