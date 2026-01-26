import Link from "next/link";
import { BookOpen } from "lucide-react";
import { NAV_ITEMS } from "../lib/nav";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const starterSection = {
  id: "getting-started",
  title: "Start here",
  label: "Start here",
  description: "Quick links for new & returning players.",
  href: "#getting-started",
  icon: BookOpen,
  accentClass: "accent-gold",
} as const;

// Descriptions for the cards grid (Home only)
const homeDescriptions: Record<string, string> = {
  "/early": "Structured start: priorities, money making, and must-have resources.",
  "/mid": "Optimization phase: scale your setup and pick efficient lanes.",
  "/end": "Meta + efficiency: high-end methods, updates, and min-max resources.",
  "/tricks": "Small habits and mechanics tips that make you progress faster.",
  "/mods": "Curated essential mods (QoL + performance) and safe sources.",
  "/garden": "Crop milestones, FF basics, best tools & profit checks.",
  "/money": "Farming, mining, flipping, mayor — pick your method.",
  "/dungeons": "Progression, classes, gear paths, tutorials.",
  "/mayor": "What’s happening, what to prep, where to track it.",
  "/news": "Patch notes, what changed, who it affects.",
  "/shards": "Best locations, drops, and tracking tools.",
  "/mining": "Best ores, locations, and gear for mining efficiently.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <p className="text-xs tracking-[0.25em] text-muted-foreground">
          HYPIXEL SKYBLOCK
        </p>
        <h1 className="mt-2 text-2xl font-heading tracking-wide sm:text-4xl">
          Resource Hub
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          You don’t need another dashboard. You need the right link, at the right
          time. Pick a topic and jump straight to the best tools, guides, and
          checklists.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-6 lg:h-[calc(100dvh-3rem)]">
          <div className="rounded-xl border bg-card/70 p-4 backdrop-blur">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Topics
            </p>
            <nav className="flex flex-col gap-1">
              {[starterSection, ...NAV_ITEMS].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-muted/40"
                >
                  <s.icon className={`h-4 w-4 ${s.accentClass}`} />
                  <span>{s.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <section className="grid gap-4 sm:grid-cols-2">
          {NAV_ITEMS.map((n) => (
            <Link key={n.href} href={n.href} className="group">
              <Card className="p-0 transition hover:-translate-y-0.5 hover:bg-card/80">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{n.label}</CardTitle>
                      <CardDescription className="mt-2">
                        {homeDescriptions[n.href] ?? ""}
                      </CardDescription>
                    </div>
                    <div className="rounded-xl border bg-muted/20 p-2">
                      <n.icon className={`h-5 w-5 ${n.accentClass}`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-hypixel-gold opacity-0 transition group-hover:opacity-100">
                    Open →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}

          <div id="getting-started" className="sm:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Start here</CardTitle>
                <CardDescription>
                  Common quick checks and where to go.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    className="rounded-xl border bg-muted/20 p-4 hover:bg-muted/30"
                    href="https://sky.shiiyu.moe/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-sm font-semibold">Need your stats?</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      SkyCrypt (external)
                    </div>
                  </a>
                  <a
                    className="rounded-xl border bg-muted/20 p-4 hover:bg-muted/30"
                    href="https://sky.coflnet.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-sm font-semibold">
                      Checking prices / flipping?
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      COFL (external)
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
