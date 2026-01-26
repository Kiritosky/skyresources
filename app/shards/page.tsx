import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function ShardsPage() {
  return (
    <DocsLayout
      title="Shards & Hunting"
      description="A hub for shard farming and hunting: where to learn routes, how to prep, and how to avoid the most common time-wasters."
    >
      <GuideSection title="Quick overview (what shard hunting really is)">
        <ul>
          <li>
            This is a <strong>route + repetition</strong> activity. Your downtime matters as much as your damage.
          </li>
          <li>
            Most sessions are won by <strong>spot selection</strong>: mob density, spawn rules, and how often you get interrupted.
          </li>
          <li>
            Track results in short blocks (20–30 minutes) so you don’t waste hours in a bad spot.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Pick a target (don’t grind randomly)" description="Have one clear reason for the session.">
        <ul>
          <li>
            <strong>Specific shard drop</strong> (you know exactly what you’re looking for)
          </li>
          <li>
            <strong>Bestiary</strong> (consistent XP over time)
          </li>
          <li>
            <strong>Coins</strong> (sell drops – use price history to avoid dumping at the worst time)
          </li>
          <li>
            <strong>Collection / requirements</strong> (you’re unlocking something else)
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Route fundamentals (simple rules that scale)">
        <ul>
          <li>
            Build a loop that avoids dead-end time: if you stop moving, your kills/hour dies.
          </li>
          <li>
            Reduce interrupts: clear inventory space, bring sustain, and keep your UI workflow fast.
          </li>
          <li>
            If a lobby is crowded or contested, swap quickly. Fighting for spawns is usually negative value.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Gear checklist (beginner-friendly)" description="No crazy requirements. Just remove downtime.">
        <ul>
          <li>
            <strong>Movement</strong>: speed that keeps your loop smooth (whatever your class/method uses).
          </li>
          <li>
            <strong>Sustain</strong>: healing/mana so you don’t break your route every minute.
          </li>
          <li>
            <strong>Clear speed</strong>: enough damage to one-shot or clean efficiently (don’t over-invest early).
          </li>
          <li>
            <strong>Storage</strong>: sack/backpack setup so you’re not forced to sell every few minutes.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Tracking & when to switch spots" description="A tiny log beats vibes.">
        <ul>
          <li>
            Do 20–30 minutes, then record kills, notable drops, and coins gained.
          </li>
          <li>
            If results are consistently bad: switch spot or adjust route. Don’t “hope” it gets better.
          </li>
          <li>
            If results are good: keep the route consistent and stack hours – variance smooths out over time.
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
          {
            title: "COFL Sky",
            description: "Use history to value drops and avoid selling at the worst time.",
            href: "https://sky.coflnet.com/",
            tag: "Economy",
          },
        ]}
      />

      <ResourceLinks
        title="Hunting routes × YouTube"
        description="Direct intent searches to find up-to-date route videos (sort by upload date)."
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
          {
            title: "Money making from mob drops",
            description: "Search: best mobs to kill for profit, shard drop value.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+mob+drops+money+making",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}