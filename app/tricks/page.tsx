import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function TricksPage() {
  return (
    <DocsLayout
      title="Tricks & Quality-of-Life"
      description="Small habits and game-mechanics tips that make you progress faster (and waste less time/coins)."
    >
      <GuideSection title="Progression rules that save you weeks">
        <ul>
          <li>
            <strong>Pick one lane</strong>: if you try to do everything, you progress in nothing.
          </li>
          <li>
            <strong>Don’t buy random gear</strong>: set a target (floor/skill/method) and buy toward it.
          </li>
          <li>
            <strong>Don’t ignore MP</strong>: accessories are boring, but they fix damage and survivability.
          </li>
          <li>
            <strong>Track your sessions</strong>: 30 minutes of notes beats 3 hours of guessing.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Economy tips (safe + beginner-friendly)">
        <ul>
          <li>Prefer stable markets (high volume) before trying risky flips.</li>
          <li>
            Learn taxes and fees first. A{" "}
            <span className="whitespace-nowrap">&quot;good&quot;</span> flip can be negative after tax.
          </li>
          <li>
            Buy upgrades that increase your hourly output (tools, routes, efficiency), not just prestige.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Dungeon habits that actually matter">
        <ul>
          <li>Clearing discipline & team roles are bigger than small gear upgrades.</li>
          <li>Learn 1–2 secret routes per room. Consistency beats marathon learning.</li>
          <li>
            Don’t queue above your effective gear—you’ll waste time in failed runs.
          </li>
        </ul>
      </GuideSection>

      <ResourceLinks
        title="Useful references"
        links={[
          {
            title: "SkyCrypt",
            description: "Quick sanity check for MP, skills, and gear gaps.",
            href: "https://sky.shiiyu.moe/",
            tag: "Tool",
          },
          {
            title: "Hypixel Wiki",
            description: "Mechanics and item reference.",
            href: "https://wiki.hypixel.net/",
            tag: "Wiki",
          },
          {
            title: "COFL Sky",
            description: "Prices/history to avoid bad buys.",
            href: "https://sky.coflnet.com/",
            tag: "Tool",
          },
        ]}
      />
    </DocsLayout>
  );
}
