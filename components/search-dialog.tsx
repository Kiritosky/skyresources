"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { SEARCH_INDEX, type SearchEntry } from "@/lib/search-index";

export function SearchTrigger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-lg border bg-muted/20 px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-muted/30"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Search guides...</span>
        <kbd className="hidden rounded border bg-background/40 px-1.5 py-0.5 text-[10px] font-medium sm:inline-block">
          Ctrl K
        </kbd>
      </button>
      {open && <SearchDialog onClose={() => setOpen(false)} />}
    </>
  );
}

function SearchDialog({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = query.length > 1 ? filterResults(query) : [];

  const navigate = useCallback(
    (path: string) => {
      router.push(path);
      onClose();
    },
    [router, onClose],
  );

  return (
    <div
        className="fixed inset-x-0 bottom-0 top-14 z-30 flex items-start justify-center bg-transparent pt-8 sm:pt-12"
        onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, sections, and topics..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
          />
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {query.length <= 1 ? (
            <p className="px-3 py-6 text-center text-xs text-muted-foreground">
              Start typing to search across all guides...
            </p>
          ) : results.length === 0 ? (
            <p className="px-3 py-6 text-center text-xs text-muted-foreground">
              No results for &quot;{query}&quot;
            </p>
          ) : (
            results.map((r) => (
              <button
                key={r.path + r.title}
                onClick={() => navigate(r.path)}
                className="flex w-full flex-col items-start rounded-lg px-3 py-2 text-left hover:bg-muted/20"
              >
                <span className="text-sm font-medium">{r.title}</span>
                <span className="text-xs text-muted-foreground">
                  {r.path}
                  {r.section ? ` — ${r.section}` : ""}
                </span>
              </button>
            ))
          )}
        </div>
        <div className="border-t px-4 py-2 text-[10px] text-muted-foreground">
          <kbd className="rounded border bg-muted/30 px-1 py-0.5">Esc</kbd> to
          close
        </div>
      </div>
    </div>
  );
}

function filterResults(query: string): SearchEntry[] {
  const q = query.toLowerCase();
  const scored: { entry: SearchEntry; score: number }[] = [];

  for (const entry of SEARCH_INDEX) {
    let score = 0;
    if (entry.title.toLowerCase().includes(q)) score += 10;
    if (entry.section?.toLowerCase().includes(q)) score += 5;
    if (entry.tags.some((t) => t.toLowerCase().includes(q))) score += 3;
    if (score > 0) scored.push({ entry, score });
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((s) => s.entry);
}
