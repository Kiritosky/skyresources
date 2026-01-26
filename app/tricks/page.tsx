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
            <strong>Don&apos;t buy random gear</strong>: set a target (floor/skill/method) and buy toward it.
          </li>
          <li>
            <strong>Don&apos;t ignore MP</strong>: accessories are boring, but they fix damage and survivability.
          </li>
          <li>
            <strong>Track your sessions</strong>: 30 minutes of notes beats 3 hours of guessing.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Session checklist (before you grind)"
        description="A simple routine that makes any method faster."
      >
        <ul>
          <li>
            Define one goal for the next 30–60 minutes (coins, XP, a drop, a milestone).
          </li>
          <li>
            Prep inventory/storage so you don&apos;t have to interrupt your loop constantly.
          </li>
          <li>
            Know your spot/route before you start. Wandering is usually negative value.
          </li>
          <li>
            After the session: write 3 notes (what worked, what didn&apos;t, what to test next).
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

      <GuideSection
        title="Buying checklist (avoid wasting coins)"
        description="A quick filter before you spend."
      >
        <ul>
          <li>
            Does it <strong>increase output/hour</strong> (rates, clear speed, uptime) or is it mostly a sidegrade?
          </li>
          <li>
            Does it <strong>unlock content</strong> (new area, new commissions, higher floor) you will actually use?
          </li>
          <li>
            Is it replacing a bottleneck (missing accessory power, missing reforges/enchants, missing sustain)?
          </li>
          <li>
            Can you explain the buy in one sentence? If not, wait.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Dungeon habits that actually matter">
        <ul>
          <li>Clearing discipline & team roles are bigger than small gear upgrades.</li>
          <li>Learn 1–2 secret routes per room. Consistency beats marathon learning.</li>
          <li>
            Don&apos;t queue above your effective gear—you&apos;ll waste time in failed runs.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Small mechanics wins (free speed)">
        <ul>
          <li>
            Use a consistent hotbar layout across methods (less misclicking, faster swaps).
          </li>
          <li>
            Save your common commands as chat macros (warp routes, party invites, etc.).
          </li>
          <li>
            When learning something new: improve one thing per day (route, settings, gear), not ten at once.
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

      <ResourceLinks
        title="YouTube searches"
        description="Direct intent searches — sort by upload date to follow current efficiency tips."
        links={[
          {
            title: "Best progression tips",
            description: "Search: progression rules, what to focus on, common mistakes.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+progression+tips",
            tag: "YouTube",
          },
          {
            title: "Money saving / buying guide",
            description: "Search: what to buy first, avoid wasting coins, upgrade order.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+what+to+buy+first",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
