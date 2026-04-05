import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function MoneyPage() {
  return (
    <DocsLayout
      title="Money Making"
      description="Pick a method, then optimize it. This page helps you choose a lane based on your stage, time, and playstyle."
    >
      <GuideSection title="How to pick a method" description="The best method is the one you will actually do consistently.">
        <ul>
          <li><strong>Low setup + steady</strong>: usually farming (Garden).</li>
          <li><strong>High setup + scales hard</strong>: usually mining (Gemstones, HotM).</li>
          <li><strong>Market enjoyer</strong>: flipping (requires discipline and learning taxes/fees).</li>
          <li><strong>Short profit windows</strong>: events + mayor prep (needs planning).</li>
          <li><strong>Combat focused</strong>: slayers, dungeons (M7), Kuudra.</li>
          <li><strong>Passive</strong>: minions (Collections page has setups).</li>
        </ul>
      </GuideSection>

      <DataTable
        title="Money methods comparison"
        description="Approximate coins/hr at different game stages. Numbers vary with gear, skill, and market."
        columns={[
          { key: "method", label: "Method" },
          { key: "early", label: "Early" },
          { key: "mid", label: "Mid" },
          { key: "late", label: "Late" },
          { key: "end", label: "End" },
          { key: "setup", label: "Setup Cost" },
        ]}
        rows={[
          { method: "Garden (crops)", early: "~2-5M", mid: "~8-15M", late: "~15-20M", end: "~20-30M", setup: "Low-Medium" },
          { method: "Pest farming", early: "—", mid: "—", late: "~20-30M", end: "~30-40M", setup: "High" },
          { method: "Mining (gems)", early: "—", mid: "~5-10M", late: "~15-20M", end: "~27-30M", setup: "Very High (~2.7B)" },
          { method: "Bazaar flipping", early: "~2-5M", mid: "~5-15M", late: "~10-30M", end: "~20-50M+", setup: "Low (needs knowledge)" },
          { method: "AH flipping", early: "~1-3M", mid: "~5-10M", late: "~10-20M", end: "~20-40M+", setup: "Medium (needs capital)" },
          { method: "Lava fishing", early: "—", mid: "~5-8M", late: "~10-15M", end: "~20M+", setup: "Medium" },
          { method: "Kuudra (T4+)", early: "—", mid: "—", late: "~10-20M", end: "~20-40M", setup: "Very High" },
          { method: "Dungeons (M7)", early: "—", mid: "—", late: "—", end: "~20-40M", setup: "Very High" },
          { method: "Slayers", early: "Negative", mid: "~1-5M", late: "~5-10M", end: "~10-20M (RNG)", setup: "Medium-High" },
          { method: "Minions (passive)", early: "~1-3M/day", mid: "~3-5M/day", late: "~5-8M/day", end: "~8-15M/day", setup: "Medium" },
        ]}
        caption="Values are approximate. Actual profit depends heavily on setup quality and market conditions."
      />

      <TipCallout type="tip" title="Farming is the safest start">
        <p>Garden farming is the most <strong>accessible and consistent</strong> money maker. You can start earning day one with low setup cost. Mining has higher potential but requires billions in investment to reach peak rates.</p>
      </TipCallout>

      <GuideSection title="Beginner-safe rules">
        <ul>
          <li>Don&apos;t chase a new &quot;best method&quot; every day. You&apos;ll lose more time than you gain.</li>
          <li>Learn taxes/fees before flipping. Many &quot;good&quot; flips are negative after tax.</li>
          <li>Invest in upgrades that increase your hourly output (tools/routes), not just prestige.</li>
          <li>Track your actual coins/hr for at least a week before switching methods.</li>
        </ul>
      </GuideSection>

      <TipCallout type="warning" title="Mining investment warning">
        <p>Mining <strong>looks</strong> like the best method on paper (~27-30M/hr), but it requires ~2.7B in gear (maxed Divan&apos;s + Divan&apos;s Drill) and weeks of powder grinding to reach those rates. Don&apos;t start here.</p>
      </TipCallout>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "What's the best money making method?", answer: <p>It depends on your stage. Early: farming crops or bazaar flipping. Mid: farming with good FF or mining. Late/End: pest farming, gemstone mining, Kuudra, or M7 dungeons. Pick one and optimize it.</p> },
          { question: "Is flipping worth it?", answer: <p>Yes, if you&apos;re willing to learn. Bazaar flipping has low setup cost but requires understanding taxes, volume, and margins. AH flipping needs capital. Both can be very profitable.</p> },
          { question: "When should I start mining?", answer: <p>After you have a solid baseline from farming. Mining needs HotM 10, significant powder investment, and expensive gear. It&apos;s a late-game commitment.</p> },
          { question: "Are minions worth it?", answer: <p>Yes for passive income. With 25+ slots of Snow/Tara/Rev minions, you earn millions daily while doing nothing. See the Collections page for setups.</p> },
        ]}
      />

      <ResourceLinks
        title="Economy tools"
        links={[
          { title: "COFL Sky", description: "Flips, item history, and market tools.", href: "https://sky.coflnet.com/", tag: "Economy" },
          { title: "SkyblockTools.dev", description: "Farming profit calculator.", href: "https://skyblocktools.dev/farming-profit-calculator", tag: "Calculator" },
          { title: "Hypixel Wiki (Bazaar)", description: "Bazaar mechanics reference.", href: "https://wiki.hypixel.net/Bazaar", tag: "Reference" },
          { title: "SkyBlock Tools", description: "Election tracker and calculators.", href: "https://skyblock.tools/", tag: "Tools" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Farming money making", description: "Best crops, setup path, consistent profit.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+farming+money+making", tag: "YouTube" },
          { title: "Mining money making", description: "Routes, HotM, powder, best mining methods.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+mining+money+making+routes", tag: "YouTube" },
          { title: "Bazaar flipping", description: "Taxes, volume, margins, beginner flips.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+bazaar+flipping+guide", tag: "YouTube" },
          { title: "Auction flipping", description: "AH flips, risk management, tools.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+auction+flipping+guide", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Garden", description: "If you choose farming, start here.", href: "/garden", tag: "Route" },
          { title: "Mining", description: "Gemstone mining deep dive.", href: "/mining", tag: "Route" },
          { title: "Collections & Minions", description: "Passive income setups.", href: "/collections", tag: "Route" },
          { title: "Mayors & Events", description: "Profit windows and prep.", href: "/mayor", tag: "Route" },
          { title: "Kuudra", description: "Endgame boss farming for profit.", href: "/kuudra", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
