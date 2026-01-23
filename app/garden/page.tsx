import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function GardenPage() {
  return (
    <DocsLayout
      title="Garden"
      description="A practical Garden guide hub: how the system works, what to prioritize, and which tools help you decide what to farm and upgrade next."
    >
      <GuideSection title="Garden basics (what matters)" description="If you’re new, start here before min-maxing.">
        <ul>
          <li>
            <strong>Milestones</strong> unlock progression and should guide your crop choices early.
          </li>
          <li>
            <strong>Farming Fortune (FF)</strong> is your main scaling stat – stack it from many sources.
          </li>
          <li>
            <strong>Consistency</strong>: one solid crop setup beats switching every 10 minutes.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="What to do next (simple path)">
        <ol>
          <li>Pick a crop you can farm comfortably and consistently.</li>
          <li>Push milestones until you unlock meaningful upgrades.</li>
          <li>Upgrade tool – then armor/equipment – then pets – then fine-tune.</li>
          <li>Only then worry about tiny optimizations and best-in-slot.</li>
        </ol>
      </GuideSection>

      <GuideSection title="Where Farming Fortune comes from" description="Use this list to spot your biggest missing pieces.">
        <ul>
          <li>Armor + reforges</li>
          <li>Equipment + reforges</li>
          <li>Pet + pet item</li>
          <li>Accessories/MP (indirectly helps farming builds)</li>
          <li>Garden upgrades, visitors, and temporary buffs</li>
        </ul>
      </GuideSection>

      <ResourceLinks
        title="Tools"
        description="Open these when you want numbers, prices, or planning help."
        links={[
          {
            title: "SkyCrypt",
            description: "Check farming stats, MP, pets, and profile overview.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "COFL Sky",
            description: "Check market prices and profitability context.",
            href: "https://sky.coflnet.com/",
            tag: "Economy",
          },
          {
            title: "Hypixel Wiki (Garden)",
            description: "Mechanics & unlocks reference.",
            href: "https://wiki.hypixel.net/Garden",
            tag: "Reference",
          },
            {
                title: "Sky Mutations",
                description: "Plan and optimize your crop mutations.",
                href: "https://skymutations.eu/",
                tag: "Planning",
            },
        ]}
      />

      <ResourceLinks
        title="Guides × YouTube"
        description="Direct searches to find the right guide fast."
        links={[
          {
            title: "Garden Beginner Guide",
            description: "Search: milestones, first setups, progression.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+garden+beginner+guide",
            tag: "YouTube",
          },
          {
            title: "Best crop / profit comparisons",
            description: "Search: crop profit, NPC vs Bazaar, optimal crops.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+best+crop+profit+garden",
            tag: "YouTube",
          },
          {
            title: "Visitor / contest optimization",
            description: "Search: visitors, medals, contest strategy.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+garden+visitor+contest+optimization",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
