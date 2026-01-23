import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function MidGamePage() {
  return (
    <DocsLayout
      title="Mid Game"
      description="Mid game is optimization: you have the basics, now you turn an “okay” setup into something that actually scales."
    >
      <GuideSection title="Mid game focus">
        <ul>
          <li>
            <strong>Optimize one system to completion</strong>: e.g. Garden for stable coins or Mining
            for big scaling.
          </li>
          <li>
            <strong>MP + tuning</strong>: many builds stall because accessories/MP don’t keep up.
          </li>
          <li>
            <strong>Clear gear targets</strong>: defined upgrade checkpoints instead of random items.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Money making (mid game)"
        description="At this stage you want methods that scale with setup and skill, not just quick ‘3m/h’ fixes."
      >
        <p>
          Strong midgame methods have 3 properties: (1) a clear setup path, (2) they scale with
          skill/upgrades, and (3) they aren’t fully dependent on events.
        </p>
        <ul>
          <li>Garden: crop choice, Farming Fortune stacking, contest/visitor optimization</li>
          <li>Mining: HotM planning, drills, routes, powder, efficient sessions</li>
          <li>Flipping: data, taxes, volume, risk management</li>
        </ul>
      </GuideSection>

      <ResourceLinks
        title="Mid game tools"
        links={[
          {
            title: "SkyCrypt",
            description: "Check MP, skills, gear/enchants, pets.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "COFL Sky",
            description: "Prices/history/flips for data-driven decisions.",
            href: "https://sky.coflnet.com/",
            tag: "Economy",
          },
        ]}
      />

      <ResourceLinks
        title="Mid game guides × YouTube"
        description="Direct intent searches for midgame optimization."
        links={[
          {
            title: "Mid Game Money Making",
            description: "Search: scaling methods, setup paths, comparisons.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+mid+game+money+making",
            tag: "YouTube",
          },
          {
            title: "Mining Progression (HotM/Routes)",
            description: "Search: HotM tree, powder, best routes.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+mining+progression+hotm+routes",
            tag: "YouTube",
          },
          {
            title: "Garden Optimization (FF/Contests/Visitors)",
            description: "Search: best crop, FF sources, contest setups.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+garden+optimization+farming+fortune",
            tag: "YouTube",
          },
          {
            title: "Dungeons Progression (Midgame)",
            description: "Search: gear tiers, roles, floor progression.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+dungeons+progression+midgame",
            tag: "YouTube",
          },
        ]}
      />

      <ResourceLinks
        title="Next topics"
        links={[
          {
            title: "Mayors & Events",
            description: "Timing, perks, prep — important for investments and grinds.",
            href: "/mayor",
            tag: "Route",
          },
          {
            title: "Shards & Hunting",
            description: "If you want to optimize drops/routes.",
            href: "/shards",
            tag: "Route",
          },
        ]}
      />
    </DocsLayout>
  );
}
