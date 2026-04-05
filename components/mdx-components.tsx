import type { MDXComponents } from "mdx/types";
import { TipCallout } from "./tip-callout";
import { Details } from "./accordion-section";
import { Checklist } from "./checklist";
import { TableCard } from "./data-table";
import { Steps } from "./progress-path";
import { Stat, StatRow } from "./stat-card";
import { Tabs, Tab } from "./tab-group";
import Link from "next/link";

export function getMDXComponents(overrides?: MDXComponents): MDXComponents {
  return {
    // ── Headings ─────────────────────────────────────────────────────────────
    h1: ({ children }) => (
      <h1 className="text-2xl font-heading tracking-wide gradient-text mt-8 mb-4 sm:text-3xl first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold mt-10 mb-3 border-b border-border pb-2 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold mt-6 mb-2 text-foreground first:mt-0">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xs font-semibold mt-4 mb-1 text-muted-foreground uppercase tracking-widest first:mt-0">
        {children}
      </h4>
    ),

    // ── Body Text ─────────────────────────────────────────────────────────────
    p: ({ children }) => (
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 last:mb-0">
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className="text-foreground font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="text-foreground/80 italic">{children}</em>,
    del: ({ children }) => (
      <del className="text-muted-foreground/50 line-through">{children}</del>
    ),

    // ── Lists ─────────────────────────────────────────────────────────────────
    ul: ({ children }) => (
      <ul className="my-3 space-y-1.5 text-sm text-muted-foreground pl-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-3 space-y-1.5 text-sm text-muted-foreground pl-4 list-decimal">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="flex gap-2 items-start leading-relaxed">
        <span className="mt-2 h-1 w-1 min-w-[4px] rounded-full bg-primary/50 [ol_&]:hidden" />
        <span className="flex-1 [ol_&]:list-item [ol_&]:pl-0">{children}</span>
      </li>
    ),

    // ── Code ──────────────────────────────────────────────────────────────────
    code: ({ children }) => (
      <code className="bg-muted/80 border border-border/60 px-1.5 py-0.5 rounded-md text-xs font-mono text-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted rounded-xl border border-border p-4 overflow-x-auto my-4 text-sm font-mono leading-relaxed">
        {children}
      </pre>
    ),

    // ── Blockquote ────────────────────────────────────────────────────────────
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/40 pl-4 italic text-muted-foreground my-4 text-sm">
        {children}
      </blockquote>
    ),

    // ── Tables (GFM) ─────────────────────────────────────────────────────────
    table: ({ children }) => (
      <div className="overflow-x-auto my-6 rounded-xl border border-border shadow-sm">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-muted/50 border-b border-border">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-border/40">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-muted/20 transition-colors duration-100">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="text-left px-4 py-2.5 font-semibold text-xs uppercase tracking-wider text-foreground/70 whitespace-nowrap">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2.5 text-muted-foreground align-top">{children}</td>
    ),

    // ── Links ─────────────────────────────────────────────────────────────────
    a: ({ children, href }) => {
      const external = href?.startsWith("http");
      if (external) {
        return (
          <a
            href={href}
            className="text-primary hover:underline underline-offset-4 inline-flex items-center gap-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href ?? "#"} className="text-primary hover:underline underline-offset-4">
          {children}
        </Link>
      );
    },

    // ── Misc ─────────────────────────────────────────────────────────────────
    hr: () => <hr className="border-border my-10" />,
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt ?? ""}
        className="rounded-xl border border-border max-w-full h-auto my-4"
      />
    ),

    // ── Callouts ──────────────────────────────────────────────────────────────
    // <Tip title="...">content</Tip>
    // <Warning title="...">content</Warning>
    // <Info title="...">content</Info>
    // <Danger title="...">content</Danger>
    Tip: ({ children, title }: { children: React.ReactNode; title?: string }) => (
      <TipCallout type="tip" title={title}>{children}</TipCallout>
    ),
    Warning: ({ children, title }: { children: React.ReactNode; title?: string }) => (
      <TipCallout type="warning" title={title}>{children}</TipCallout>
    ),
    Info: ({ children, title }: { children: React.ReactNode; title?: string }) => (
      <TipCallout type="info" title={title}>{children}</TipCallout>
    ),
    Danger: ({ children, title }: { children: React.ReactNode; title?: string }) => (
      <TipCallout type="danger" title={title}>{children}</TipCallout>
    ),

    // ── Collapsible ───────────────────────────────────────────────────────────
    // <Details title="Question?">Answer content here</Details>
    Details: ({ children, title, defaultOpen }: { children: React.ReactNode; title: string; defaultOpen?: boolean }) => (
      <Details title={title} defaultOpen={defaultOpen}>{children}</Details>
    ),

    // ── Checklist ─────────────────────────────────────────────────────────────
    // <Checklist title="Before you start">- Item one\n- Item two</Checklist>
    Checklist: ({ children, title }: { children: React.ReactNode; title?: string }) => (
      <Checklist title={title}>{children}</Checklist>
    ),

    // ── Titled table wrapper ──────────────────────────────────────────────────
    // <TableCard title="..." description="...">| table |</TableCard>
    TableCard: ({ children, title, description }: { children: React.ReactNode; title: string; description?: string }) => (
      <TableCard title={title} description={description}>{children}</TableCard>
    ),

    // ── Step progression timeline ─────────────────────────────────────────────
    // <Steps title="..." steps={["Step 1", "Step 2"]} />
    // or with objects: steps={[{ label: "...", description: "...", status: "done" }]}
    Steps: ({ title, steps }: { title?: string; steps: (string | { label: string; description?: string; status?: "done" | "current" | "upcoming" })[] }) => (
      <Steps title={title} steps={steps} />
    ),

    // ── Stat cards ────────────────────────────────────────────────────────────
    // <Stat label="Coins/hr" value="15M" trend="up" note="With setup" />
    Stat: ({ label, value, note, trend }: { label: string; value: string; note?: string; trend?: "up" | "down" | "neutral" }) => (
      <Stat label={label} value={value} note={note} trend={trend} />
    ),
    // <StatRow><Stat .../><Stat .../></StatRow>
    StatRow: ({ children }: { children: React.ReactNode }) => (
      <StatRow>{children}</StatRow>
    ),

    // ── Tabs ──────────────────────────────────────────────────────────────────
    // <Tabs><Tab label="Early">...</Tab><Tab label="Mid">...</Tab></Tabs>
    Tabs: ({ children }: { children: React.ReactNode }) => (
      <Tabs>{children}</Tabs>
    ),
    Tab: ({ children, label }: { children: React.ReactNode; label: string }) => (
      <Tab label={label}>{children}</Tab>
    ),

    ...overrides,
  };
}
