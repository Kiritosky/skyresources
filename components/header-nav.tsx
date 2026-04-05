"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, NAV_GROUP_LABELS, type NavGroup } from "@/lib/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const groups = [...new Set(NAV_ITEMS.map((n) => n.group))] as NavGroup[];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted/30 lg:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <nav
            className="absolute right-0 top-0 h-full w-72 overflow-y-auto border-l bg-card p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-heading text-sm tracking-wide">Navigation</span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 text-muted-foreground hover:bg-muted/30"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {groups.map((group) => (
              <div key={group} className="mb-4">
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {NAV_GROUP_LABELS[group]}
                </p>
                <div className="flex flex-col gap-0.5">
                  {NAV_ITEMS.filter((n) => n.group === group).map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-muted/30"
                    >
                      <n.icon className={`h-4 w-4 ${n.accentClass}`} />
                      <span>{n.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
