import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { TipCallout } from "../../components/tip-callout";
import { ResourceLinks } from "../../components/resource-links";
import { ExternalLink, Calendar, User, Newspaper } from "lucide-react";

// Revalidate every hour so news stays fresh without a full rebuild
export const revalidate = 3600;

interface PatchNote {
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  summary: string;
  commentCount: string;
}

function extractText(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&[a-z]+;/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractBullets(html: string): string[] {
  const bullets: string[] = [];
  const re = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = extractText(m[1]);
    if (text.length > 10 && text.length < 300) bullets.push(text);
  }
  return bullets.slice(0, 6);
}

async function getPatchNotes(): Promise<PatchNote[]> {
  try {
    const res = await fetch(
      "https://hypixel.net/forums/skyblock-patch-notes.158/index.rss",
      {
        next: { revalidate: 3600 },
        headers: { "User-Agent": "SkyResources/1.0 community resource hub" },
      }
    );
    if (!res.ok) return [];

    const xml = await res.text();
    const items: PatchNote[] = [];
    const itemRe = /<item>([\s\S]*?)<\/item>/g;
    let m;

    while ((m = itemRe.exec(xml)) !== null) {
      const raw = m[1];

      const title =
        raw.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/s)?.[1] ??
        raw.match(/<title>(.*?)<\/title>/s)?.[1] ??
        "Untitled";

      const link =
        raw.match(/<link>(https?:\/\/[^\s<]+)<\/link>/)?.[1] ??
        raw.match(/<guid[^>]*>(https?:\/\/[^\s<]+)<\/guid>/)?.[1] ??
        "#";

      const pubDate = raw.match(/<pubDate>(.*?)<\/pubDate>/s)?.[1] ?? "";
      const creator =
        raw.match(/<dc:creator>(.*?)<\/dc:creator>/s)?.[1] ?? "Hypixel Team";

      const content =
        raw.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/s)?.[1] ?? "";

      const bullets = extractBullets(content);
      const summary =
        bullets.length > 0 ? bullets.join("\n") : extractText(content).slice(0, 280);

      const commentCount =
        raw.match(/<slash:comments>(\d+)<\/slash:comments>/)?.[1] ?? "0";

      items.push({ title, link, pubDate, creator, summary, commentCount });
    }
    return items;
  } catch {
    return [];
  }
}

function formatDate(raw: string): string {
  try {
    return new Date(raw).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return raw;
  }
}

function timeAgo(raw: string): string {
  try {
    const days = Math.floor((Date.now() - new Date(raw).getTime()) / 86_400_000);
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days}d ago`;
    if (days < 30) return `${Math.floor(days / 7)}w ago`;
    if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
  } catch {
    return "";
  }
}

export default async function NewsPage() {
  const notes = await getPatchNotes();
  const hasPosts = notes.length > 0;

  return (
    <DocsLayout
      title="News & Patch Notes"
      description="Live feed of official Hypixel SkyBlock patch notes — auto-updated from the Hypixel Forums RSS feed every hour."
    >
      <GuideSection
        title="Latest Patch Notes"
        description={
          hasPosts
            ? `${notes.length} recent patches · refreshes every hour automatically`
            : "Could not load patch notes right now — check hypixel.net/forums directly."
        }
      >
        {!hasPosts && (
          <TipCallout type="warning" title="Feed unavailable">
            The live feed could not be reached. Visit{" "}
            <a
              href="https://hypixel.net/forums/skyblock-patch-notes.158/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              hypixel.net/forums
            </a>{" "}
            for the latest patch notes.
          </TipCallout>
        )}

        <div className="space-y-4">
          {notes.map((note, i) => {
            const bullets = note.summary.includes("\n")
              ? note.summary.split("\n").filter(Boolean)
              : null;

            return (
              <article
                key={i}
                className="rounded-xl border border-border bg-card/40 p-5 hover:border-primary/30 hover:bg-card/60 transition-all duration-200"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <a
                      href={note.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2"
                    >
                      <Newspaper className="h-4 w-4 shrink-0 text-primary" />
                      <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-tight">
                        {note.title}
                      </h3>
                      <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(note.pubDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {note.creator}
                      </span>
                      {parseInt(note.commentCount) > 0 && (
                        <span>{note.commentCount} replies</span>
                      )}
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground">
                    {timeAgo(note.pubDate)}
                  </span>
                </div>

                {/* Change list */}
                {bullets ? (
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {note.summary}
                  </p>
                )}

                <a
                  href={note.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  Read full patch notes
                  <ExternalLink className="h-3 w-3" />
                </a>
              </article>
            );
          })}
        </div>
      </GuideSection>

      {/* Patch triage guide */}
      <GuideSection
        title="How to Read a Patch"
        description="Not every patch affects you. Here's a 2-minute triage process."
      >
        <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
          <li>Scan the title — does it mention your area (Garden, Mining, Dungeons...)?</li>
          <li>Look for <strong className="text-foreground">buffs/nerfs</strong> to your coins/hr method.</li>
          <li>Check if gear you use was changed (damage, drop rate, requirements).</li>
          <li>Re-validate your setup after the patch — recalculate if needed.</li>
          <li>Wait 24–48h before investing in "new meta" gear — prices spike then settle.</li>
        </ol>
        <TipCallout type="info" title="Economy Rule">
          Buffs increase demand → prices rise. Nerfs decrease demand → prices drop.
          The best time to buy nerfed gear is right after the nerf when everyone panic-sells.
        </TipCallout>
      </GuideSection>

      <ResourceLinks
        title="Primary sources"
        links={[
          {
            title: "Hypixel Forums — Patch Notes",
            description: "Official source. Subscribe to get notified of new patches.",
            href: "https://hypixel.net/forums/skyblock-patch-notes.158/",
          },
          {
            title: "Hypixel SkyBlock Wiki",
            description: "Community wiki — usually updated within hours of patches.",
            href: "https://wiki.hypixel.net/",
          },
          {
            title: "SkyCrypt",
            description: "Track your profile stats and see how patches affected you.",
            href: "https://sky.shiiyu.moe/",
          },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Money Making", description: "Re-evaluate methods after patches.", href: "/money", tag: "Route" },
          { title: "Mayors & Events", description: "Check if patches affect mayor cycles.", href: "/mayor", tag: "Route" },
          { title: "Mods", description: "Update mods after SkyBlock patches.", href: "/mods", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
