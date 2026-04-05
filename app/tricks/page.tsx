import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function TricksPage() {
  return (
    <DocsLayout
      title="Tricks & Quality-of-Life"
      description="Small habits and game-mechanics tips that make you progress faster and waste less time/coins."
    >
      <GuideSection title="Progression rules that save you weeks">
        <ul>
          <li><strong>Pick one lane</strong>: if you try to do everything, you progress in nothing.</li>
          <li><strong>Don&apos;t buy random gear</strong>: set a target and buy toward it.</li>
          <li><strong>Don&apos;t ignore MP</strong>: accessories are boring, but they fix damage and survivability.</li>
          <li><strong>Track your sessions</strong>: 30 minutes of notes beats 3 hours of guessing.</li>
          <li><strong>Use mods</strong>: SkyHanni alone saves hours per week. See the <a href="/mods">Mods</a> page.</li>
        </ul>
      </GuideSection>

      <TipCallout type="tip" title="The 30-minute rule">
        <p>Before every grind session, spend 30 seconds defining <strong>one goal</strong>. After the session, write <strong>3 notes</strong>: what worked, what didn&apos;t, what to try next. This alone will 2x your progression speed.</p>
      </TipCallout>

      <GuideSection title="Session checklist (before you grind)" description="A simple routine that makes any method faster.">
        <ul>
          <li>Define one goal for the next 30-60 minutes (coins, XP, a drop, a milestone).</li>
          <li>Prep inventory/storage so you don&apos;t interrupt your loop.</li>
          <li>Know your spot/route before you start. Wandering is negative value.</li>
          <li>After the session: write 3 notes (what worked, what didn&apos;t, what to test next).</li>
        </ul>
      </GuideSection>

      <GuideSection title="Economy tips (safe + beginner-friendly)">
        <ul>
          <li>Prefer stable markets (high volume) before trying risky flips.</li>
          <li>Learn taxes and fees first. A &quot;good&quot; flip can be negative after tax.</li>
          <li>Buy upgrades that increase your hourly output, not just prestige.</li>
          <li>Never spend more than 50% of your bank on one item.</li>
        </ul>
      </GuideSection>

      <TipCallout type="warning" title="Don't chase the 'best' method">
        <p>Switching methods every day costs more than it earns. Pick one method, commit for a week, track your actual coins/hr, THEN evaluate if switching makes sense.</p>
      </TipCallout>

      <GuideSection title="Buying checklist (avoid wasting coins)" description="A quick filter before you spend.">
        <ul>
          <li>Does it <strong>increase output/hour</strong>?</li>
          <li>Does it <strong>unlock content</strong> you will actually use?</li>
          <li>Is it replacing a <strong>bottleneck</strong> (missing MP, reforges, enchants)?</li>
          <li>Can you explain the buy in one sentence? If not, wait.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Dungeon habits that matter">
        <ul>
          <li>Clearing discipline &amp; team roles are bigger than small gear upgrades.</li>
          <li>Learn 1-2 secret routes per room. Consistency beats marathon learning.</li>
          <li>Don&apos;t queue above your gear — you waste time in failed runs.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Small mechanics wins (free speed)">
        <ul>
          <li>Use a consistent hotbar layout across methods (less misclicking).</li>
          <li>Save common commands as chat macros (warp routes, party invites).</li>
          <li>When learning something new: improve one thing per day, not ten at once.</li>
          <li>Use SkyHanni for automated profit tracking and reminders.</li>
        </ul>
      </GuideSection>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "What's the single most impactful tip?", answer: <p>Get your Magical Power up. It&apos;s the most underrated stat in the game. Going from 100 to 300 MP can feel like doubling your gear quality. See the Accessories page.</p> },
          { question: "Should I track my coins/hr?", answer: <p>Yes. Even rough tracking (start coins, end coins, time) reveals which methods actually work for you vs. which just feel productive.</p> },
          { question: "How do I stop wasting coins?", answer: <p>Use the buying checklist above. If an upgrade doesn&apos;t increase your output/hr or unlock content, it&apos;s probably not worth it yet.</p> },
        ]}
      />

      <ResourceLinks
        title="Useful references"
        links={[
          { title: "SkyCrypt", description: "Quick sanity check for MP, skills, gear gaps.", href: "https://sky.shiiyu.moe/", tag: "Stats" },
          { title: "COFL Sky", description: "Prices/history to avoid bad buys.", href: "https://sky.coflnet.com/", tag: "Economy" },
          { title: "Hypixel Wiki", description: "Mechanics and item reference.", href: "https://wiki.hypixel.net/", tag: "Reference" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Accessories & MP", description: "The #1 upgrade for every player.", href: "/accessories", tag: "Route" },
          { title: "Money Making", description: "Pick a method and commit.", href: "/money", tag: "Route" },
          { title: "Mods", description: "SkyHanni and other QoL mods.", href: "/mods", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
