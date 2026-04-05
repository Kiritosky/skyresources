import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function ShardsPage() {
  return (
    <DocsLayout
      title="Shards & Hunting"
      description="A hub for shard farming and hunting: routes, prep, gear, and how to avoid the most common time-wasters."
    >
      <GuideSection title="Quick overview">
        <ul>
          <li>This is a <strong>route + repetition</strong> activity. Downtime matters as much as damage.</li>
          <li>Sessions are won by <strong>spot selection</strong>: mob density, spawn rules, interruptions.</li>
          <li>Track results in short blocks (20-30 minutes) to avoid wasting hours in bad spots.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Pick a target" description="Have one clear reason for the session.">
        <ul>
          <li><strong>Specific shard drop</strong>: you know exactly what you&apos;re looking for.</li>
          <li><strong>Bestiary</strong>: consistent XP over time.</li>
          <li><strong>Coins</strong>: sell drops — use price history to avoid dumping at the worst time.</li>
          <li><strong>Collection / requirements</strong>: unlocking something else.</li>
        </ul>
      </GuideSection>

      <TipCallout type="tip" title="Session tracking wins">
        <p>Do 20-30 minutes, then record kills, notable drops, and coins gained. If results are consistently bad, switch spots. Don&apos;t &quot;hope&quot; it gets better — data beats vibes.</p>
      </TipCallout>

      <GuideSection title="Route fundamentals">
        <ul>
          <li>Build a loop that avoids dead-end time: if you stop moving, kills/hour dies.</li>
          <li>Reduce interrupts: clear inventory space, bring sustain, keep UI workflow fast.</li>
          <li>If a lobby is crowded, swap quickly. Fighting for spawns is negative value.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Gear checklist" description="No crazy requirements. Just remove downtime.">
        <ul>
          <li><strong>Movement</strong>: speed that keeps your loop smooth.</li>
          <li><strong>Sustain</strong>: healing/mana so you don&apos;t break route every minute.</li>
          <li><strong>Clear speed</strong>: enough damage to one-shot or clean efficiently.</li>
          <li><strong>Storage</strong>: sack/backpack setup so you aren&apos;t forced to sell constantly.</li>
        </ul>
      </GuideSection>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "Is shard farming profitable?", answer: <p>Depends on the shard and market prices. Some rare drops are worth millions. Bestiary grinding provides steady but slower value. Check COFL for current drop prices.</p> },
          { question: "Best time to sell drops?", answer: <p>Don&apos;t instant-sell in bulk right after farming. Check Bazaar/AH price history. Sell during demand spikes (events, mayor changes) when possible.</p> },
          { question: "How long should a session be?", answer: <p>20-30 minute blocks with tracking. If a spot isn&apos;t working after 2-3 blocks, switch. Good spots should show consistent results within an hour.</p> },
        ]}
      />

      <ResourceLinks
        title="Guides &amp; trackers"
        links={[
          { title: "SkyShards", description: "Shard farming info and references.", href: "https://skyshards.com/", tag: "Guide" },
          { title: "Hypixel Wiki (Bestiary)", description: "Mob + bestiary references.", href: "https://wiki.hypixel.net/Bestiary", tag: "Reference" },
          { title: "COFL Sky", description: "Use history to value drops.", href: "https://sky.coflnet.com/", tag: "Economy" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Shard farming routes", description: "Best spots, route loops, gear.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+shard+farming+routes", tag: "YouTube" },
          { title: "Bestiary grinding", description: "Bestiary leveling, efficiency.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+bestiary+grinding+route", tag: "YouTube" },
          { title: "Mob drops money making", description: "Best mobs for profit.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+mob+drops+money+making", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Money Making", description: "Compare hunting to other methods.", href: "/money", tag: "Route" },
          { title: "Pets", description: "Best combat pets for mob farming.", href: "/pets", tag: "Route" },
          { title: "Slayers", description: "Slayer bosses are part of the hunting loop.", href: "/slayers", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
