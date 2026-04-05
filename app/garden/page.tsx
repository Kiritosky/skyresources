import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function GardenPage() {
  return (
    <DocsLayout
      title="Garden"
      description="A practical Garden guide hub: how the system works, what to prioritize, and which tools help you decide what to farm and upgrade next."
    >
      <GuideSection title="Garden basics" description="If you're new, start here before min-maxing.">
        <ul>
          <li><strong>Milestones</strong> unlock progression and should guide your crop choices early.</li>
          <li><strong>Farming Fortune (FF)</strong> is your main scaling stat — stack it from many sources.</li>
          <li><strong>Consistency</strong>: one solid crop setup beats switching every 10 minutes.</li>
          <li><strong>Pest farming</strong> is currently one of the top money makers (~30-40M/hr with setup).</li>
        </ul>
      </GuideSection>

      <GuideSection title="What to do next (simple path)">
        <ol>
          <li>Pick a crop you can farm comfortably and consistently.</li>
          <li>Push milestones until you unlock meaningful upgrades.</li>
          <li>Upgrade tool — then armor/equipment — then pets — then fine-tune.</li>
          <li>Only then worry about tiny optimizations and best-in-slot.</li>
        </ol>
      </GuideSection>

      <DataTable
        title="Crop profit comparison"
        description="Approximate coins/hr at different Farming Fortune levels. Prices fluctuate with Bazaar."
        columns={[
          { key: "crop", label: "Crop" },
          { key: "sell", label: "Sell Method" },
          { key: "low", label: "~500 FF" },
          { key: "mid", label: "~1000 FF" },
          { key: "high", label: "~1400+ FF" },
          { key: "xp", label: "Farming XP" },
        ]}
        rows={[
          { crop: "Melon", sell: "Bazaar", low: "~5M", mid: "~12M", high: "~20M+", xp: "Medium" },
          { crop: "Cactus", sell: "Bazaar", low: "~4M", mid: "~10M", high: "~23M", xp: "Low" },
          { crop: "Nether Wart", sell: "NPC", low: "~4M", mid: "~10M", high: "~16M", xp: "Medium" },
          { crop: "Carrot", sell: "NPC", low: "~3M", mid: "~8M", high: "~14M", xp: "High" },
          { crop: "Potato", sell: "NPC", low: "~3M", mid: "~8M", high: "~14M", xp: "High" },
          { crop: "Pumpkin", sell: "Bazaar", low: "~4M", mid: "~9M", high: "~15M", xp: "Highest" },
          { crop: "Wheat", sell: "NPC/Bazaar", low: "~2M", mid: "~6M", high: "~10M", xp: "Medium" },
          { crop: "Mushroom", sell: "NPC", low: "~3M", mid: "~7M", high: "~12M", xp: "High" },
          { crop: "Cocoa Beans", sell: "Bazaar", low: "~3M", mid: "~7M", high: "~12M", xp: "Medium" },
          { crop: "Sugar Cane", sell: "NPC/Bazaar", low: "~3M", mid: "~8M", high: "~13M", xp: "Medium" },
        ]}
        caption="Values are approximate and depend on Bazaar prices, tool enchants, and player speed."
      />

      <TipCallout type="tip" title="Melon is king for Bazaar profit">
        <p>
          Melon consistently comes out as the <strong>most profitable crop</strong> for Bazaar selling
          at high FF levels. Cactus is also excellent. For NPC safety (stable prices), pick
          Nether Wart, Carrot, or Potato.
        </p>
      </TipCallout>

      <DataTable
        title="Where Farming Fortune comes from"
        description="Use this to spot your biggest missing pieces."
        columns={[
          { key: "source", label: "Source" },
          { key: "ff", label: "~FF Amount" },
          { key: "notes", label: "Notes" },
        ]}
        rows={[
          { source: "Farming Tool (maxed)", ff: "~300-400", notes: "Biggest single source. Turbo enchants + Counter + Cultivating" },
          { source: "Armor (Rancher's + reforges)", ff: "~150-250", notes: "Farm armor set + Bountiful reforge" },
          { source: "Equipment + reforges", ff: "~50-100", notes: "Lotus equipment or equivalent" },
          { source: "Pet (Elephant Leg.)", ff: "~100-180", notes: "Best farming pet. Mooshroom Cow for mushroom" },
          { source: "Garden Level", ff: "~50-100+", notes: "Scales with overall garden progression" },
          { source: "Accessories / MP", ff: "~30-60", notes: "Indirect but meaningful. Don't ignore." },
          { source: "Temporary buffs", ff: "~20-50", notes: "Visitors, cakes, potions, etc." },
          { source: "Farming Skill Level", ff: "~60 (at 60)", notes: "+4 FF per farming level" },
        ]}
        caption="Practical max FF: ~1,440 for hoes, ~1,646 for axes."
      />

      <GuideSection
        title="Visitors & contests"
        description="Two systems that reward consistent garden play."
      >
        <h3 className="text-base font-semibold">Visitors</h3>
        <ul>
          <li>Visitors arrive on your garden and request items. Completing requests gives <strong>copper</strong> and other rewards.</li>
          <li><strong>Rare visitors</strong> (Spaceman, Grandma Wolf, etc.) give much better rewards. Always accept them.</li>
          <li>Use SkyHanni mod for visitor profit calculations — it shows if the request is worth fulfilling.</li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Jacob&apos;s Contests</h3>
        <ul>
          <li>Contests run every 15 minutes of SkyBlock time. Farm the contest crop for medals.</li>
          <li><strong>Bronze</strong>: top 60% — easy with any setup.</li>
          <li><strong>Silver</strong>: top 30% — needs decent FF and speed.</li>
          <li><strong>Gold</strong>: top 10% — needs high FF, good tool, and no downtime.</li>
          <li>Medals unlock <strong>plot bonuses</strong> and cosmetic rewards.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Pest farming" description="Currently one of the top money-making methods in the game.">
        <ul>
          <li><strong>What</strong>: pests spawn on your garden plots. Killing them gives rare drops and coins.</li>
          <li><strong>Setup</strong>: Hypermax your Greenhouse + farming setup. Pest Repellent + pest-attracting items.</li>
          <li><strong>Profit</strong>: ~30-40M/hr with a good setup, potentially more with optimization.</li>
          <li><strong>Requirement</strong>: needs significant Garden progression (high milestones, good tools).</li>
        </ul>
      </GuideSection>

      <TipCallout type="warning" title="Don't rush pest farming">
        <p>
          Pest farming requires a <strong>heavily invested garden</strong>. Focus on crop milestones and FF
          stacking first. Pest farming becomes profitable after you&apos;ve maxed several crop tools.
        </p>
      </TipCallout>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "Which crop should I start with?", answer: <p>Pick one you can farm comfortably. Carrot and Potato are easy and give good XP. Melon is best for profit at higher FF. Don&apos;t overthink it early — consistency matters more than crop choice.</p> },
          { question: "How important is Farming Fortune?", answer: <p>Very. FF directly multiplies your crop yields. A 100 FF increase can mean millions more coins per hour. Stack it from all sources — tool, armor, pet, reforges, garden level.</p> },
          { question: "NPC or Bazaar selling?", answer: <p>NPC is stable (Nether Wart, Carrot, Potato). Bazaar can be higher (Melon, Cactus, Pumpkin) but prices fluctuate. Check current Bazaar prices before deciding.</p> },
          { question: "When should I start pest farming?", answer: <p>After you&apos;ve maxed several crop milestones, have high FF (~1000+), and invested in your Greenhouse. It&apos;s endgame farming content.</p> },
        ]}
      />

      <ResourceLinks
        title="Tools"
        description="Open these when you want numbers, prices, or planning help."
        links={[
          { title: "SkyCrypt", description: "Check farming stats, FF, MP, pets.", href: "https://sky.shiiyu.moe/", tag: "Stats" },
          { title: "SkyblockTools.dev", description: "Farming profit calculator with FF inputs.", href: "https://skyblocktools.dev/farming-profit-calculator", tag: "Calculator" },
          { title: "EliteFarmers", description: "Farming leaderboards and competition.", href: "https://elitefarmers.com/", tag: "Leaderboards" },
          { title: "COFL Sky", description: "Check crop market prices.", href: "https://sky.coflnet.com/", tag: "Economy" },
          { title: "Sky Mutations", description: "Plan and optimize crop mutations.", href: "https://skymutations.eu/", tag: "Planning" },
          { title: "Hypixel Wiki (Garden)", description: "Full Garden mechanics reference.", href: "https://wiki.hypixel.net/Garden", tag: "Reference" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Garden Beginner Guide", description: "Milestones, first setups, progression.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+garden+beginner+guide", tag: "YouTube" },
          { title: "Best crop / profit comparisons", description: "Crop profit, NPC vs Bazaar, optimal crops.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+best+crop+profit+garden", tag: "YouTube" },
          { title: "Pest Farming Guide", description: "Setup, strategy, and profit optimization.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+pest+farming+guide", tag: "YouTube" },
          { title: "Visitor optimization", description: "Visitors, medals, contest strategy.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+garden+visitor+contest+optimization", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Money Making", description: "Compare garden income to other methods.", href: "/money", tag: "Route" },
          { title: "Pets", description: "Best farming pets (Elephant, Rabbit, Bee).", href: "/pets", tag: "Route" },
          { title: "Collections", description: "Farming collections unlock important recipes.", href: "/collections", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
