import Link from "next/link";
import { BookOpen } from "lucide-react";
import { NAV_ITEMS, NAV_GROUP_LABELS, type NavGroup } from "../lib/nav";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const GROUPS: NavGroup[] = ["progression", "systems", "economy", "meta"];

const homeDescriptions: Record<string, string> = {
  "/early": "Structured start: priorities, money making, and must-have resources.",
  "/mid": "Optimization phase: scale your setup and pick efficient lanes.",
  "/end": "Meta + efficiency: high-end methods, updates, and min-max resources.",
  "/skills": "All skills overview, best XP methods, and milestone rewards.",
  "/accessories": "Magical Power deep dive, accessory bags, tuning, and power stones.",
  "/tricks": "Small habits and mechanics tips that make you progress faster.",
  "/mods": "Curated essential mods (SkyHanni, QoL, performance) and safe sources.",
  "/garden": "Crop milestones, FF basics, best tools, pest farming & profit checks.",
  "/money": "Farming, mining, flipping, mayor prep — pick your method.",
  "/dungeons": "Floor progression, classes, gear paths, secrets, and tutorials.",
  "/mining": "HotM pathing, powder, gemstones, gear tiers, and drill upgrades.",
  "/mayor": "All mayors & perks, election cycle, and prep strategies.",
  "/news": "Patch notes, what changed, who it affects.",
  "/shards": "Best locations, drops, routes, and tracking tools.",
  "/pets": "Best pets per activity, leveling methods, pet items, and pet score.",
  "/slayers": "All 6 bosses, tier requirements, gear, RNG drops, and costs.",
  "/fishing": "Regular, lava, trophy fishing — gear, sea creatures, and profit.",
  "/enchanting": "Best enchants per gear type, experimentation table, and XP methods.",
  "/crimson": "Faction choice, reputation grind, dojo, and Kuudra intro.",
  "/kuudra": "All 5 tiers, gear requirements, party roles, and Crimson armor.",
  "/rift": "Timecharms, motes farming, enigma souls, and vampire slayer.",
  "/collections": "Important unlocks, best minion setups, and passive income.",
};

const starterSection = {
  id: "getting-started",
  title: "Start here",
  label: "Start here",
  description: "Quick links for new & returning players.",
  href: "#getting-started",
  icon: BookOpen,
  accentClass: "accent-gold",
} as const;

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
          You don&apos;t need another dashboard. You need the right link, at the right
          time. Pick a topic and jump straight to the best tools, guides, and
          checklists.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        {/* ── Sidebar ── */}
        <aside className="lg:sticky lg:top-20 lg:h-[calc(100dvh-6rem)] lg:overflow-y-auto">
          <div className="rounded-xl border bg-card/70 p-4 backdrop-blur">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Topics
            </p>
            <nav className="flex flex-col gap-1">
              <Link
                href={starterSection.href}
                className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-muted/40"
              >
                <starterSection.icon className={`h-4 w-4 ${starterSection.accentClass}`} />
                <span>{starterSection.label}</span>
              </Link>
              {NAV_ITEMS.map((s) => (
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

        {/* ── Main content ── */}
        <div className="space-y-10">
          {/* Grouped card grids */}
          {GROUPS.map((group) => {
            const items = NAV_ITEMS.filter((n) => n.group === group);
            if (items.length === 0) return null;

            return (
              <section key={group}>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {NAV_GROUP_LABELS[group]}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((n) => (
                    <Link key={n.href} href={n.href} className="group">
                      <Card className={`h-full p-0 transition hover:-translate-y-0.5 hover:bg-card/80 ${n.glowClass}`}>
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
                            Open &rarr;
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* ── Start Here ── */}
          <div id="getting-started">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Start here</CardTitle>
                <CardDescription>
                  Common quick checks and where to go.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                  <a
                    className="rounded-xl border bg-muted/20 p-4 hover:bg-muted/30"
                    href="https://wiki.hypixel.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-sm font-semibold">
                      Mechanics lookup?
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Hypixel Wiki (external)
                    </div>
                  </a>
                  <a
                    className="rounded-xl border bg-muted/20 p-4 hover:bg-muted/30"
                    href="https://hypixel-skyblock.fandom.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-sm font-semibold">
                      Detailed wiki?
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Fandom Wiki (external)
                    </div>
                  </a>
                  <a
                    className="rounded-xl border bg-muted/20 p-4 hover:bg-muted/30"
                    href="https://skyblocktools.dev/farming-profit-calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-sm font-semibold">
                      Farming calculator?
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      SkyblockTools.dev (external)
                    </div>
                  </a>
                  <a
                    className="rounded-xl border bg-muted/20 p-4 hover:bg-muted/30"
                    href="https://elitefarmers.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="text-sm font-semibold">
                      Farming leaderboards?
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      EliteFarmers (external)
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
