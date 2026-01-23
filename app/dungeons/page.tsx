import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function DungeonsPage() {
  return (
    <DocsLayout
      title="Dungeons"
      description="A beginner-friendly Dungeons hub: how to start, what to focus on, and where to learn the meta without information overload."
    >
      <GuideSection title="Start here (absolute basics)">
        <p>
          Dungeons progression is less about buying one expensive item and more about building a
          consistent setup: class role, survivability, and clean runs.
        </p>
        <ul>
          <li>
            <strong>Pick one main class</strong> for now. Switching constantly slows learning.
          </li>
          <li>
            <strong>Don’t skip fundamentals</strong>: room clearing, positioning, and basic secrets.
          </li>
          <li>
            <strong>Gear should match your floor</strong>: being under-geared wastes time (and parties).
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Class roles (what people expect)">
        <ul>
          <li>
            <strong>Healer</strong>: consistency and survivability; great for learning.
          </li>
          <li>
            <strong>Tank</strong>: learn damage patterns and positioning; makes runs stable.
          </li>
          <li>
            <strong>Mage</strong>: damage + clearing; needs mana management and basic route discipline.
          </li>
          <li>
            <strong>Berserk</strong>: damage + cleanup; learn target priority and survivability.
          </li>
          <li>
            <strong>Archer</strong>: team-dependent and gear-sensitive; very strong later.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Progression checklist (what to improve first)"
        description="These upgrades usually give the biggest effect for the least confusion."
      >
        <ol>
          <li>
            <strong>Magical Power (MP)</strong> and basic tuning.
          </li>
          <li>
            <strong>Survivability</strong>: don’t build glass-cannon if you’re dying every run.
          </li>
          <li>
            <strong>Clear speed</strong>: consistent room clear beats occasional big hits.
          </li>
          <li>
            <strong>Secrets</strong>: learn a few rooms at a time; don’t try to memorize everything.
          </li>
        </ol>
      </GuideSection>

      <ResourceLinks
        title="Essential links"
        links={[
          {
            title: "SkyCrypt",
            description: "Check MP, stats, gear, and pets.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "Hypixel Wiki (Catacombs)",
            description: "Reference for items, floors, and mechanics.",
            href: "https://wiki.hypixel.net/Catacombs",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="Tutorials × YouTube"
        description="Direct intent searches (easier to find the right guide fast)."
        links={[
          {
            title: "Dungeons Beginner Guide",
            description: "Search: first steps, class choice, basic gear.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+dungeons+beginner+guide",
            tag: "YouTube",
          },
          {
            title: "Secrets routes (beginner)",
            description: "Search: basic room secrets, routes, practice.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+secrets+routes+beginner",
            tag: "YouTube",
          },
          {
            title: "Class guides (Mage/Bers/Tank/Healer/Archer)",
            description: "Search: role expectations and progression.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+dungeons+class+guide",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
