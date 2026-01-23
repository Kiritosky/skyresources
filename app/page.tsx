import Link from "next/link";
import { BookOpen, Sprout, Coins, Landmark, Swords, Newspaper } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Section = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  accentClass: string;
};

const sections: Section[] = [
  {
    id: "getting-started",
    title: "Start here",
    description: "Quick links for new & returning players.",
    href: "#getting-started",
    icon: BookOpen,
    accentClass: "accent-gold",
  },
  {
    id: "garden",
    title: "Garden",
    description: "Crop milestones, FF basics, best tools & profit checks.",
    href: "/garden",
    icon: Sprout,
    accentClass: "accent-garden",
  },
  {
    id: "money",
    title: "Money making",
    description: "Farming, mining, flipping, events — pick your method.",
    href: "/money",
    icon: Coins,
    accentClass: "accent-money",
  },
  {
    id: "dungeons",
    title: "Dungeons",
    description: "Progression, classes, gear paths, meta guides.",
    href: "/dungeons",
    icon: Swords,
    accentClass: "accent-dungeons",
  },
  {
    id: "events",
    title: "Mayors & Events",
    description: "What’s happening, what to prep, where to track it.",
    href: "/events",
    icon: Landmark,
    accentClass: "accent-events",
  },
  {
    id: "news",
    title: "News & patches",
    description: "Patch notes, what changed, who it affects.",
    href: "/news",
    icon: Newspaper,
    accentClass: "accent-news",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <p className="text-xs tracking-[0.25em] text-muted-foreground">HYPIXEL SKYBLOCK</p>
        <h1 className="mt-2 text-2xl font-heading tracking-wide sm:text-4xl">Resource Hub</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          You don’t need another dashboard. You need the right link, at the right time.
          Pick a topic and jump straight to the best tools, guides, and checklists.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-6 lg:h-[calc(100dvh-3rem)]">
          <div className="rounded-xl border bg-card/70 p-4 backdrop-blur">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Topics
            </p>
            <nav className="flex flex-col gap-1">
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-muted/40"
                >
                  <s.icon className={`h-4 w-4 ${s.accentClass}`} />
                  <span>{s.title}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-4 rounded-lg bg-muted/30 p-3 text-xs text-muted-foreground">
              <p className="font-semibold text-foreground/90">Search (soon)</p>
              <p className="mt-1">
                Next step: a search bar for “Garden FF”, “Shards”, “Kuudra”, etc.
              </p>
            </div>
          </div>
        </aside>

        <section className="grid gap-4 sm:grid-cols-2">
          {sections.filter((s) => s.href !== "#getting-started").map((s) => (
            <Link key={s.id} href={s.href} className="group">
              <Card className="p-0 transition hover:-translate-y-0.5 hover:bg-card/80">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{s.title}</CardTitle>
                      <CardDescription className="mt-2">{s.description}</CardDescription>
                    </div>
                    <div className="rounded-xl border bg-muted/20 p-2">
                      <s.icon className={`h-5 w-5 ${s.accentClass}`} />
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
                <CardDescription>Common quick checks and where to go.</CardDescription>
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
                    <div className="mt-1 text-xs text-muted-foreground">SkyCrypt (external)</div>
                  </a>
                  <a
                    className="rounded-xl border bg-muted/20 p-4 hover:bg-muted/30"
                    href="https://coflnet.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-sm font-semibold">Checking prices / flipping?</div>
                    <div className="mt-1 text-xs text-muted-foreground">COFL (external)</div>
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
