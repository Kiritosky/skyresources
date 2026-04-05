import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function EventsPage() {
  return (
    <DocsLayout
      title="Mayors & Events"
      description="All mayors and their perks, how elections work, and how to prep for profit windows."
    >
      <GuideSection title="Quick overview">
        <ul>
          <li>Mayors create <strong>time-limited windows</strong> where certain grinds are stronger.</li>
          <li>Treat it like planning: <strong>prep before</strong>, <strong>grind during</strong>, <strong>sell/hold after</strong>.</li>
          <li>Don&apos;t over-invest. The safest prep is stocking items you would use anyway.</li>
        </ul>
      </GuideSection>

      <GuideSection title="How elections work" description="Know the cycle so you can time grinds.">
        <ul>
          <li>Elections happen every <strong>5 SkyBlock days</strong> (~5 real-world days).</li>
          <li>A mayor is active for their full term. Players vote for the next mayor during the election period.</li>
          <li>Most perks create &quot;profit windows&quot; (fishing, mining, dungeons, etc.).</li>
          <li>Use <strong>SkyBlock Tools</strong> (skyblock.tools/election) to track current and upcoming mayors.</li>
        </ul>
      </GuideSection>

      <DataTable
        title="All mayors & perks"
        description="Regular mayors appear in elections. Special mayors are rare."
        columns={[
          { key: "mayor", label: "Mayor" },
          { key: "type", label: "Type" },
          { key: "perks", label: "Perks" },
          { key: "best", label: "Best For" },
        ]}
        rows={[
          { mayor: "Aatrox", type: "Regular", perks: "+25% Slayer XP, quests 50% cheaper, Griffin +20% rare items", best: "Slayer grinding" },
          { mayor: "Barry", type: "Regular", perks: "+15% Alchemy/Enchanting XP, Spells +15% damage", best: "Enchanting/Alchemy leveling" },
          { mayor: "Cole", type: "Regular", perks: "2x Mining XP (public islands), Minions 25% faster", best: "Mining + minion income" },
          { mayor: "Diana", type: "Regular", perks: "+50% Fishing XP, +25 Pet Luck, Sells Griffin pet", best: "Mythological events + fishing" },
          { mayor: "Diaz", type: "Regular", perks: "+25% Bank Interest, 10x NPC buy limit", best: "Economy / NPC buying" },
          { mayor: "Foxy", type: "Regular", perks: "+20% Spooky candy, 3.5x gift boost, Extra event", best: "Seasonal events" },
          { mayor: "Marina", type: "Regular", perks: "Pets +50% Fishing XP, +15 Sea Creature Chance", best: "Fishing (sea creatures)" },
          { mayor: "Paul", type: "Regular", perks: "+10 Dungeon score bonus, 20% cheaper chests", best: "Dungeon grinding" },
          { mayor: "Scorpius", type: "Special", perks: "1M coins bribe per player, Dark Auction 7 rounds + exclusive items", best: "Free coins + rare items" },
          { mayor: "Derpy", type: "Special", perks: "Minions 200% faster, AH closed", best: "Minion income (no AH)" },
          { mayor: "Jerry", type: "Special", perks: "Random mini-perks, Jerry's Workshop event", best: "Fun / random rewards" },
        ]}
        caption="Special mayors are rare. When they appear, they almost always win."
      />

      <TipCallout type="tip" title="Key mayor windows">
        <p>
          <strong>Marina</strong> = best time to fish (grind SCC and sea creatures). <strong>Aatrox</strong> = best time for slayers (50% cheaper). <strong>Cole</strong> = best for mining XP and minion income. <strong>Paul</strong> = best for dungeon chest profit.
        </p>
      </TipCallout>

      <GuideSection title="Practical prep (beginner-friendly)">
        <ul>
          <li><strong>Before the mayor changes</strong>: stock consumables/materials you will use anyway.</li>
          <li><strong>During the perk</strong>: do the grind that the perk buffs. Don&apos;t random-switch.</li>
          <li><strong>After the perk</strong>: prices often normalize. Avoid panic-buying.</li>
          <li><strong>Track elections</strong>: use skyblock.tools/election to see who&apos;s upcoming.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Common mistakes">
        <ul>
          <li>Prepping items you won&apos;t actually grind with (you end up reselling at a loss).</li>
          <li>Buying at the top of the hype. Best entry is <strong>before</strong> everyone talks about it.</li>
          <li>Forgetting the simple option: just grind the buffed method more consistently.</li>
        </ul>
      </GuideSection>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "How long does a mayor term last?", answer: <p>Each term lasts 5 SkyBlock days (~5 real days). Elections happen during the last day of the current mayor&apos;s term.</p> },
          { question: "How do special mayors work?", answer: <p>Scorpius, Derpy, and Jerry are rare. They appear instead of regular candidates randomly. When they show up, they almost always win due to unique perks.</p> },
          { question: "Should I stockpile for mayors?", answer: <p>Only stockpile items you&apos;d use anyway. Don&apos;t gamble on price speculation. The safest prep is having your gear ready to grind the buffed activity.</p> },
          { question: "Which mayor is best for money?", answer: <p>Depends on your method. Marina for fishing, Aatrox for slayers, Cole for mining/minions, Paul for dungeons. The best mayor is the one that buffs YOUR method.</p> },
        ]}
      />

      <ResourceLinks
        title="Tools & references"
        links={[
          { title: "SkyBlock Tools (Election)", description: "Track current mayor and upcoming elections.", href: "https://skyblock.tools/election/", tag: "Tracker" },
          { title: "Hypixel Wiki (Mayors)", description: "Full mayor list and perk reference.", href: "https://wiki.hypixel.net/Mayors", tag: "Reference" },
          { title: "COFL Sky", description: "Check price changes around mayor terms.", href: "https://sky.coflnet.com/", tag: "Economy" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Mayor prep guide", description: "How to prep for next mayor, what to buy.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+mayor+prep+guide", tag: "YouTube" },
          { title: "Event money making", description: "Best money making during events.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+event+money+making", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Money Making", description: "Compare methods to use during mayor terms.", href: "/money", tag: "Route" },
          { title: "Fishing", description: "Best during Marina mayor.", href: "/fishing", tag: "Route" },
          { title: "Slayers", description: "Best during Aatrox mayor.", href: "/slayers", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
