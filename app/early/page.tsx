import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function EarlyGamePage() {
  return (
    <DocsLayout
      title="Early Game"
      description="A structured start: what to prioritize, what traps to avoid, and which tools/guides will move you forward the fastest."
    >
      <GuideSection
        title="What counts as early game here?"
        description="Goal: stable coins + solid baseline stats so later upgrades don't feel impossibly expensive."
      >
        <p>
          Early game is about building a <strong>foundation</strong>. Not trying to learn 10 systems
          at once. Pick 1–2 main lanes (e.g. Farming or Mining) and push them to a solid baseline.
        </p>
        <ul>
          <li>
            <strong>Magical Power (MP)</strong>: underrated, but huge for damage and survivability.
          </li>
          <li>
            <strong>Skill XP</strong>: many upgrades scale indirectly through skills.
          </li>
          <li>
            <strong>Coins</strong>: you need a reliable money maker, not the{" "}
            <span className="whitespace-nowrap">&quot;best&quot;</span> one.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Priorities (recommended order)">
        <ol>
          <li>
            <strong>Profile check</strong> → identify what is actually low (MP, skills, gear gaps).
          </li>
          <li>
            <strong>One money maker</strong> → farming/mining/flipping, but start with only one.
          </li>
          <li>
            <strong>QoL & knowledge</strong> → good mods + good guides literally save days.
          </li>
          <li>
            <strong>Pick a direction</strong> → are you pushing Dungeons, or economy/progression?
          </li>
        </ol>
      </GuideSection>

      <ResourceLinks
        title="Must-have tools"
        description="These are the links you end up using every week."
        links={[
          {
            title: "SkyCrypt",
            description: "Profile overview: MP, skills, gear, pets.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "COFL Sky",
            description: "Economy tools, prices, flips.",
            href: "https://sky.coflnet.com/",
            tag: "Economy",
          },
          {
            title: "Hypixel Wiki",
            description: "Look up mechanics/items (better than random info).",
            href: "https://wiki.hypixel.net/",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="Money making (early) × videos"
        description="YouTube is noisy → these are direct intent searches."
        links={[
          {
            title: "Early Game Money Making Guide",
            description: "Search: stable methods with low setup.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+early+game+money+making+guide",
            tag: "YouTube",
          },
          {
            title: "Bazaar Flipping Basics",
            description: "Search: low-risk flips, margins, taxes.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+bazaar+flipping+basics",
            tag: "YouTube",
          },
          {
            title: "Garden Beginner Guide",
            description: "Search: garden setup, first crop milestones.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+garden+beginner+guide",
            tag: "YouTube",
          },
        ]}
      />

      <ResourceLinks
        title="Where to go next"
        description="If you're wondering what to open after this page."
        links={[
          {
            title: "Garden (Farming path)",
            description: "If you pick farming as your main money maker.",
            href: "/garden",
            tag: "Route",
          },
          {
            title: "Money making (methods hub)",
            description: "If you want to compare methods and pick a lane.",
            href: "/money",
            tag: "Route",
          },
          {
            title: "Dungeons (Basics + progression)",
            description: "If you want to play dungeon progression.",
            href: "/dungeons",
            tag: "Route",
          },
        ]}
      />
    </DocsLayout>
  );
}
