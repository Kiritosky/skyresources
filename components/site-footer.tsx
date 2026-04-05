import Link from "next/link";

const PROGRESSION = [
  { href: "/early", label: "Early Game" },
  { href: "/mid", label: "Mid Game" },
  { href: "/end", label: "End Game" },
  { href: "/skills", label: "Skills" },
  { href: "/accessories", label: "Accessories & MP" },
];

const SYSTEMS = [
  { href: "/garden", label: "Garden" },
  { href: "/mining", label: "Mining" },
  { href: "/dungeons", label: "Dungeons" },
  { href: "/slayers", label: "Slayers" },
  { href: "/pets", label: "Pets" },
  { href: "/fishing", label: "Fishing" },
  { href: "/kuudra", label: "Kuudra" },
  { href: "/crimson", label: "Crimson Isle" },
  { href: "/rift", label: "The Rift" },
];

const RESOURCES = [
  { href: "/money", label: "Money Making" },
  { href: "/mods", label: "Mods" },
  { href: "/news", label: "News & Patches" },
  { href: "/tricks", label: "Tricks & Tips" },
];

const EXTERNAL = [
  { href: "https://wiki.hypixel.net/", label: "Hypixel Wiki" },
  { href: "https://sky.shiiyu.moe/", label: "SkyCrypt" },
  { href: "https://sky.coflnet.com/", label: "COFL Sky" },
  { href: "https://hypixel-skyblock.fandom.com/", label: "Fandom Wiki" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t bg-background/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Progression */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Progression
            </h4>
            <ul className="space-y-1.5">
              {PROGRESSION.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Systems */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Game Systems
            </h4>
            <ul className="space-y-1.5">
              {SYSTEMS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Resources
            </h4>
            <ul className="space-y-1.5">
              {RESOURCES.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              External Tools
            </h4>
            <ul className="space-y-1.5">
              {EXTERNAL.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>&copy; {year} SkyResources</span>
            <span className="opacity-60">&bull;</span>
            <span>Not affiliated with Hypixel or Mojang.</span>
          </div>
          <a href="https://github.com/Kiritosky/skyresources" className="text-muted-foreground hover:text-foreground" target="_blank"
             rel="noreferrer">
            Github
          </a>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}
