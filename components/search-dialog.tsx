"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Hash, ChevronRight } from "lucide-react";
import type { SearchPageData } from "@/lib/content";

// ── Page icons ────────────────────────────────────────────────────────────────

const PAGE_ICONS: Record<string, string> = {
  early: "🌱",
  mid: "📈",
  end: "🏆",
  skills: "⭐",
  mining: "⛏️",
  dungeons: "⚔️",
  slayers: "🗡️",
  pets: "🐾",
  fishing: "🎣",
  garden: "🌿",
  enchanting: "✨",
  collections: "📦",
  accessories: "💎",
  money: "💰",
  mayor: "🏛️",
  crimson: "🔥",
  kuudra: "👹",
  rift: "🌀",
  mods: "🔧",
  tricks: "💡",
  shards: "🔮",
  news: "📰",
};

const QUICK_LINKS = [
  { label: "Early Game", path: "/early" },
  { label: "Mining", path: "/mining" },
  { label: "Dungeons", path: "/dungeons" },
  { label: "Slayers", path: "/slayers" },
  { label: "Garden", path: "/garden" },
  { label: "Accessories", path: "/accessories" },
  { label: "Mayors", path: "/mayor" },
  { label: "Money Making", path: "/money" },
];

function getIcon(path: string) {
  const slug = path.replace(/^\//, "");
  return PAGE_ICONS[slug] ?? "📄";
}

// ── Scoring ───────────────────────────────────────────────────────────────────

type ScoredResult = {
  entry: SearchPageData;
  score: number;
  context?: string; // matched section or tag to show under title
};

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 0);
}

function scoreEntry(entry: SearchPageData, tokens: string[]): ScoredResult | null {
  let total = 0;
  let matchedContext: string | undefined;
  let allTokensMatched = true;

  for (const token of tokens) {
    let best = 0;
    let ctx: string | undefined;

    const titleLower = entry.title.toLowerCase();
    const descLower = entry.description.toLowerCase();
    const titleWords = titleLower.split(/[\s\-\/()]+/);

    // ── Title matching ──
    if (titleLower === token) {
      best = 20;
    } else if (titleLower.startsWith(token)) {
      best = 16;
    } else if (titleWords.some((w) => w.startsWith(token))) {
      best = 13;
    } else if (titleLower.includes(token)) {
      best = 8;
    }

    // ── Tag matching ──
    const exactTag = entry.tags.find((t) => t === token);
    const prefixTag = entry.tags.find((t) => t !== token && t.startsWith(token));
    const partialTag = entry.tags.find((t) => t.includes(token) && !t.startsWith(token));

    if (exactTag && 12 > best) { best = 12; ctx = exactTag; }
    else if (prefixTag && 9 > best) { best = 9; ctx = prefixTag; }
    else if (partialTag && 5 > best) { best = 5; }

    // ── Section (h2 heading) matching ──
    const matchedSection = entry.sections.find((s) =>
      s.toLowerCase().includes(token)
    );
    if (matchedSection && 7 > best) {
      best = 7;
      ctx = matchedSection;
    }

    // ── Description matching ──
    if (descLower.includes(token) && 3 > best) {
      best = 3;
    }

    if (best === 0) {
      allTokensMatched = false;
    } else {
      total += best;
      if (ctx && !matchedContext) matchedContext = ctx;
    }
  }

  // AND semantics — all tokens must match
  if (!allTokensMatched) return null;

  // Multi-word bonus
  if (tokens.length > 1) total += 5;

  return { entry, score: total, context: matchedContext };
}

function search(data: SearchPageData[], query: string): ScoredResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const scored: ScoredResult[] = [];
  for (const entry of data) {
    const result = scoreEntry(entry, tokens);
    if (result && result.score > 0) scored.push(result);
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, 10);
}

// ── Highlight ─────────────────────────────────────────────────────────────────

function Highlight({ text, query }: { text: string; query: string }) {
  const tokens = tokenize(query);
  if (tokens.length === 0) return <>{text}</>;

  // Find the first token that appears in the text (case-insensitive)
  for (const token of tokens) {
    const idx = text.toLowerCase().indexOf(token);
    if (idx === -1) continue;
    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-primary/25 text-foreground rounded-[3px] px-0.5 not-italic">
          {text.slice(idx, idx + token.length)}
        </mark>
        {text.slice(idx + token.length)}
      </>
    );
  }
  return <>{text}</>;
}

// ── Components ────────────────────────────────────────────────────────────────

interface SearchTriggerProps {
  data: SearchPageData[];
}

export function SearchTrigger({ data }: SearchTriggerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search guides"
        className="flex items-center gap-2 rounded-lg border bg-muted/20 px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-muted/30 hover:text-foreground"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Search guides...</span>
        <kbd className="hidden rounded border border-border/60 bg-background/40 px-1.5 py-0.5 text-[10px] font-medium sm:inline-block">
          ⌘K
        </kbd>
      </button>
      {open && <SearchDialog data={data} onClose={() => setOpen(false)} />}
    </>
  );
}

function SearchDialog({
  data,
  onClose,
}: {
  data: SearchPageData[];
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = query.length > 1 ? search(data, query) : [];
  const hasResults = results.length > 0;

  // Focus input on open
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Reset selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Scroll active result into view
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>("[data-active=true]");
    el?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const navigate = useCallback(
    (path: string) => {
      router.push(path);
      onClose();
    },
    [router, onClose]
  );

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (!hasResults) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => (i + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => (i - 1 + results.length) % results.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        navigate(results[selectedIndex]?.entry.path ?? "/");
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hasResults, results, selectedIndex, navigate, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm pt-[10vh] px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, topics, sections..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          {!query && (
            <button
              onClick={onClose}
              className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Content */}
        <div ref={listRef} className="max-h-[26rem] overflow-y-auto">

          {/* Empty state — quick links */}
          {query.length <= 1 && (
            <div className="p-3">
              <p className="px-1 pb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                Quick access
              </p>
              <div className="grid grid-cols-2 gap-1">
                {QUICK_LINKS.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-muted/30 transition-colors"
                  >
                    <span className="text-base leading-none">{getIcon(link.path)}</span>
                    <span className="text-muted-foreground">{link.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {query.length > 1 && !hasResults && (
            <div className="px-4 py-10 text-center">
              <p className="text-sm text-muted-foreground">
                No results for <span className="text-foreground font-medium">&ldquo;{query}&rdquo;</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground/60">
                Try a different term, or check the{" "}
                <a
                  href="https://wiki.hypixel.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  onClick={onClose}
                >
                  Hypixel Wiki
                </a>
              </p>
            </div>
          )}

          {/* Results */}
          {hasResults && (
            <div className="p-2">
              {results.map((result, i) => {
                const isActive = i === selectedIndex;
                return (
                  <button
                    key={result.entry.path}
                    data-active={isActive}
                    onClick={() => navigate(result.entry.path)}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                      isActive ? "bg-muted/40" : "hover:bg-muted/20"
                    }`}
                  >
                    {/* Icon */}
                    <span className="text-xl leading-none shrink-0 select-none">
                      {getIcon(result.entry.path)}
                    </span>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-snug truncate">
                        <Highlight text={result.entry.title} query={query} />
                      </p>
                      {result.context ? (
                        <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground truncate">
                          <Hash className="h-2.5 w-2.5 shrink-0" />
                          <Highlight text={result.context} query={query} />
                        </p>
                      ) : (
                        <p className="mt-0.5 text-xs text-muted-foreground truncate">
                          {result.entry.description}
                        </p>
                      )}
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      className={`h-3.5 w-3.5 shrink-0 transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground/40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span><kbd className="rounded border border-border/60 bg-muted/30 px-1 py-0.5">↑</kbd> <kbd className="rounded border border-border/60 bg-muted/30 px-1 py-0.5">↓</kbd> navigate</span>
            <span><kbd className="rounded border border-border/60 bg-muted/30 px-1 py-0.5">↵</kbd> open</span>
            <span><kbd className="rounded border border-border/60 bg-muted/30 px-1 py-0.5">Esc</kbd> close</span>
          </div>
          {hasResults && (
            <span className="text-muted-foreground/50">
              {results.length} result{results.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
