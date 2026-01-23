import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function ShardsPage() {
  return (
    <DocsLayout
      title="Shards & Hunting"
      description="A hub for shard farming and hunting: where to learn routes, how to prep, and how to avoid the most common time-wasters."
    >
      <GuideSection title="What this page is for">
        <p>
          Shards/hunting content is often about repetition and route efficiency. The goal isn’t just
          “kill more mobs” – it’s about choosing the right spot, keeping your session consistent,
          and tracking drops so you don’t grind in the wrong place.
        </p>
      </GuideSection>

      <GuideSection title="Session prep (beginner-friendly)">
        <ul>
          <li>
            Know your goal: specific shard, bestiary, best coin value, or collection.
          </li>
          <li>
            Bring sustain (healing/mana) so you don’t “break” your route every minute.
          </li>
          <li>
            Track results for 20–30 minutes: if it’s bad, switch spots – don’t “hope” it gets better.
          </li>
        </ul>
      </GuideSection>

      <ResourceLinks
        title="Guides & trackers"
        links={[
          {
            title: "SkyShards",
            description: "Shard farming info and references.",
            href: "https://skyshards.com/",
            tag: "Guide",
          },
          {
            title: "Hypixel Wiki (Bestiary)",
            description: "Mob + bestiary references.",
            href: "https://wiki.hypixel.net/Bestiary",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="Hunting routes × YouTube"
        description="Direct intent searches to find up-to-date route videos."
        links={[
          {
            title: "Shard farming routes",
            description: "Search: best spots, route loops, gear.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+shard+farming+routes",
            tag: "YouTube",
          },
          {
            title: "Bestiary grinding routes",
            description: "Search: bestiary leveling, efficiency.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+bestiary+grinding+route",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}