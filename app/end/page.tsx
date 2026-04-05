import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function EndGamePage() {
  return (
    <DocsLayout
      title="End Game"
      description="Endgame is specialization, efficiency, and staying on top of meta changes. Min-max routes, keep up with updates, and refine high-end money makers."
    >
      <GuideSection title="Endgame mindset">
        <p>Endgame players win by (1) deeply understanding one system, (2) keeping session quality consistent, and (3) reacting quickly to balance changes.</p>
        <ul>
          <li><strong>Read patch notes</strong> — filter for what affects your content.</li>
          <li><strong>Watch the economy</strong> — price swings are part of progression.</li>
          <li><strong>Routes &amp; efficiency</strong> — same gear, but 20% more output per session.</li>
        </ul>
      </GuideSection>

      <DataTable
        title="Endgame gear targets"
        description="The final upgrades in each system."
        columns={[
          { key: "system", label: "System" },
          { key: "gear", label: "Endgame Gear" },
          { key: "cost", label: "~Total Cost" },
          { key: "income", label: "~Coins/hr" },
        ]}
        rows={[
          { system: "Farming", gear: "Maxed hoes, Rancher's, Elephant pet, Greenhouse", cost: "~500M-1B", income: "~30-40M (pests)" },
          { system: "Mining", gear: "Divan's Armor + Drill, Perfect Gems, maxed powder", cost: "~2-3B", income: "~27-30M" },
          { system: "Dungeons (M7)", gear: "Maxed Necron/Storm + Hyperion/Terminator, Master Stars", cost: "~2-5B", income: "~20-40M" },
          { system: "Kuudra (T5)", gear: "Maxed Crimson armor, Hyperion, Terminator", cost: "~3-5B", income: "~20-40M" },
          { system: "Fishing", gear: "Hellfire Rod (perfect attributes), Hunter Armor", cost: "~500M-1B", income: "~20M+" },
        ]}
        caption="At endgame, most methods converge to similar income. Pick what you enjoy."
      />

      <TipCallout type="info" title="Endgame is about efficiency, not gear">
        <p>Past a certain investment level, <strong>route optimization and session discipline</strong> matter more than another 50M gear upgrade. Track your actual hourly rates and optimize from there.</p>
      </TipCallout>

      <GuideSection title="What to focus on">
        <ul>
          <li><strong>Perfect your method</strong>: optimize routes, timing, and session flow.</li>
          <li><strong>Economy plays</strong>: understand price cycles, mayor prep, and event timing.</li>
          <li><strong>Alt accounts</strong>: some endgame players run multiple profiles for minion income.</li>
          <li><strong>Community</strong>: join guilds and Discord servers for party finding and meta discussion.</li>
        </ul>
      </GuideSection>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "When am I endgame?", answer: <p>When you have 1000+ MP, maxed gear in your main system, and consistent 20M+/hr income. You&apos;re optimizing, not building.</p> },
          { question: "Should I switch methods at endgame?", answer: <p>Only if you genuinely enjoy something else more. Switching costs time and coins. The best method is the one you actually grind consistently.</p> },
          { question: "How do I stay on top of the meta?", answer: <p>Read patch notes, follow community content creators, check COFL for price movements, and track your own rates. See the News page for sources.</p> },
        ]}
      />

      <ResourceLinks
        title="Meta &amp; updates"
        links={[
          { title: "Hypixel Patch Notes", description: "Primary source for updates.", href: "https://hypixel.net/forums/skyblock-patch-notes.158/", tag: "News" },
          { title: "Hypixel Wiki (Changelog)", description: "Community tracking of changes.", href: "https://wiki.hypixel.net/Changelog", tag: "Reference" },
          { title: "COFL Sky", description: "Item history, market tools, flips.", href: "https://sky.coflnet.com/", tag: "Economy" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Endgame Money Making", description: "High-end methods, setups, efficiency.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+endgame+money+making", tag: "YouTube" },
          { title: "M7 Guide", description: "Master mode floor 7, comps, strategy.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+m7+guide+master+mode", tag: "YouTube" },
          { title: "Kuudra T5", description: "Infernal tier guide, setups.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+kuudra+infernal+guide", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Money Making", description: "Compare all endgame methods.", href: "/money", tag: "Route" },
          { title: "News & Patches", description: "Stay on top of meta changes.", href: "/news", tag: "Route" },
          { title: "Kuudra", description: "Endgame boss farming.", href: "/kuudra", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
