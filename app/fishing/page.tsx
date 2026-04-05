import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { ProgressPath } from "../../components/progress-path";
import { AccordionSection } from "../../components/accordion-section";

export default function FishingPage() {
  return (
    <DocsLayout
      title="Fishing"
      description="A full guide to fishing in Hypixel SkyBlock: regular, barn, lava, and trophy fishing — gear, sea creatures, pets, and profit."
    >
      {/* ── Overview ── */}
      <GuideSection
        title="Fishing overview"
        description="Fishing is a versatile skill with multiple endgame paths and solid profit potential."
      >
        <ul>
          <li>
            <strong>Regular fishing</strong>: basic skill leveling, sea creatures, and coins from drops.
          </li>
          <li>
            <strong>Barn fishing</strong>: dedicated spot for max sea creature spawn rates.
          </li>
          <li>
            <strong>Lava fishing</strong>: Crimson Isle exclusive — lava sea creatures, magma rods, and huge profit.
          </li>
          <li>
            <strong>Trophy fishing</strong>: 18 trophy fish types &times; 4 tiers (Bronze/Silver/Gold/Diamond) = 72 unique catches.
          </li>
        </ul>
      </GuideSection>

      {/* ── Rod Progression ── */}
      <DataTable
        title="Rod progression"
        description="Upgrade your rod step-by-step. Don't skip to endgame rods too early."
        columns={[
          { key: "rod", label: "Rod" },
          { key: "type", label: "Type" },
          { key: "source", label: "Source" },
          { key: "notes", label: "Notes" },
        ]}
        rows={[
          { rod: "Fishing Rod", type: "Regular", source: "Crafting", notes: "Starter rod, free" },
          { rod: "Prismarine Rod", type: "Regular", source: "Fishing Collection", notes: "Early upgrade, cheap" },
          { rod: "Rod of Champions", type: "Regular", source: "Fishing 12", notes: "Solid mid-game rod" },
          { rod: "Rod of Legends", type: "Regular", source: "Fishing 20", notes: "Strong regular rod" },
          { rod: "Shredder", type: "Regular", source: "Fishing 24 + Crafting", notes: "Pre-lava endgame rod" },
          { rod: "Starter Lava Rod", type: "Lava", source: "Crimson Isle vendor", notes: "Entry to lava fishing" },
          { rod: "Magma Rod", type: "Lava", source: "Crafting (Magma Fish)", notes: "Mid-tier lava rod" },
          { rod: "Inferno Rod", type: "Lava", source: "Crafting", notes: "Strong lava rod" },
          { rod: "Hellfire Rod", type: "Lava/Trophy", source: "Crimson Isle", notes: "Best for trophy fishing (Trophy Hunter + Fishing Speed attributes)" },
        ]}
      />

      {/* ── Regular Fishing ── */}
      <GuideSection
        title="Regular fishing"
        description="The basics — where to fish, what to catch, how to level."
      >
        <ul>
          <li>
            <strong>Best spots</strong>: Jerry&apos;s Workshop (winter), Hub lake, Spider&apos;s Den lake.
          </li>
          <li>
            <strong>Bait</strong>: Fish Bait (basic), Whale Bait (sea creatures), Spiked Bait (+speed). Always use bait.
          </li>
          <li>
            <strong>Sea creatures</strong>: spawned by fishing. Killing them gives fishing XP + loot.
            Higher Sea Creature Chance (SCC) = more spawns.
          </li>
          <li>
            <strong>Leveling</strong>: catch fish and kill sea creatures. Marina mayor gives +15 SCC and +50% fishing pet XP.
          </li>
        </ul>
      </GuideSection>

      {/* ── Barn Fishing ── */}
      <GuideSection
        title="Barn fishing"
        description="The dedicated sea creature farming spot."
      >
        <p>
          The <strong>Barn</strong> on the Farming Islands has the highest sea creature spawn rate in the game
          for regular water fishing. Most dedicated fishing players farm sea creatures here.
        </p>
        <ul>
          <li>Use <strong>Whale Bait</strong> for maximum sea creature chance.</li>
          <li>Bring <strong>sustain</strong> (healing) and <strong>AoE damage</strong> for groups of mobs.</li>
          <li>Party fishing with friends stacks spawns and makes it faster.</li>
          <li>Best during <strong>Marina</strong> mayor for the SCC buff.</li>
        </ul>
      </GuideSection>

      <TipCallout type="tip" title="Marina Mayor">
        <p>
          Marina gives <strong>+15 Sea Creature Chance</strong> to all players. This is the single best time
          to grind fishing XP and sea creature drops. Plan your fishing sessions around Marina terms.
        </p>
      </TipCallout>

      {/* ── Lava Fishing ── */}
      <GuideSection
        title="Lava fishing"
        description="Crimson Isle exclusive — different rods, different creatures, bigger profit."
      >
        <ul>
          <li>
            <strong>Where</strong>: any lava pool on the Crimson Isle. The bigger the pool, the better spawn rates.
          </li>
          <li>
            <strong>Rods</strong>: requires lava-specific rods (Starter Lava Rod → Magma Rod → Inferno Rod → Hellfire Rod).
          </li>
          <li>
            <strong>Sea creatures</strong>: lava sea creatures are stronger but drop more valuable loot.
          </li>
          <li>
            <strong>Killing tool</strong>: <strong>Fire Veil Wand</strong> (budget) or <strong>Hyperion</strong> (endgame).
          </li>
          <li>
            <strong>Bait</strong>: <strong>Hot Bait</strong> for lava fishing, increases lava sea creature chance.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="info" title="Fire Veil Wand">
        <p>
          If you can&apos;t afford a Hyperion, the <strong>Fire Veil Wand</strong> is a great budget option
          for killing lava sea creatures. It deals AoE damage in a radius around you.
        </p>
      </TipCallout>

      {/* ── Trophy Fishing ── */}
      <GuideSection
        title="Trophy fishing"
        description="18 trophy fish × 4 tiers = 72 unique catches. One of the most profitable fishing activities."
      >
        <p>
          Trophy Fish are special catches from lava fishing on the Crimson Isle.
          They come in <strong>Bronze, Silver, Gold, and Diamond</strong> tiers, each rarer than the last.
        </p>
        <ul>
          <li>
            <strong>Key gear</strong>: Hellfire Rod with <strong>Trophy Hunter</strong> and <strong>Fishing Speed</strong> attributes.
          </li>
          <li>
            <strong>Armor</strong>: Hunter Armor increases trophy fish chance.
          </li>
          <li>
            <strong>Pet</strong>: Epic Kuudra Pet gives trophy fish bonuses.
          </li>
          <li>
            <strong>Bait</strong>: Hot Bait for lava + bonus trophy chance.
          </li>
          <li>
            <strong>Guaranteed upgrades</strong>: your 100th catch of a specific fish is guaranteed Gold tier.
            600th catch is guaranteed Diamond tier (if not caught before).
          </li>
        </ul>
      </GuideSection>

      {/* ── Fishing Pets ── */}
      <DataTable
        title="Best fishing pets"
        description="Pick the right pet for your fishing activity."
        columns={[
          { key: "pet", label: "Pet" },
          { key: "rarity", label: "Best Rarity" },
          { key: "use", label: "Best For" },
          { key: "perk", label: "Key Perk" },
        ]}
        rows={[
          { pet: "Flying Fish", rarity: "Legendary", use: "Lava fishing", perk: "+SCC in lava, fishing speed" },
          { pet: "Ammonite", rarity: "Legendary", use: "General fishing", perk: "SCC + mining fortune (niche)" },
          { pet: "Baby Yeti", rarity: "Legendary", use: "Barn fishing", perk: "Strength + defense from fishing" },
          { pet: "Squid", rarity: "Legendary", use: "Fishing XP", perk: "Bonus fishing XP" },
          { pet: "Dolphin", rarity: "Legendary", use: "Speed fishing", perk: "Fishing speed + SCC scaling" },
          { pet: "Kuudra (Epic)", rarity: "Epic", use: "Trophy fishing", perk: "Trophy fish chance boost" },
        ]}
      />

      {/* ── Progression Path ── */}
      <GuideSection title="Fishing progression path">
        <ProgressPath
          steps={[
            { title: "Get a basic rod + bait", description: "Fishing Rod or Prismarine Rod. Always use bait.", status: "complete" },
            { title: "Level fishing to 12-20", description: "Unlock Rod of Champions → Rod of Legends.", status: "current" },
            { title: "Start barn fishing", description: "Sea creatures for XP + loot. Use Whale Bait.", status: "upcoming" },
            { title: "Unlock Crimson Isle", description: "Combat level 24. Start lava fishing with Starter Lava Rod.", status: "upcoming" },
            { title: "Get a Hellfire Rod", description: "Add Trophy Hunter + Fishing Speed attributes.", status: "upcoming" },
            { title: "Trophy fish farming", description: "Hunter Armor + Kuudra Pet. Target all 72 catches.", status: "upcoming" },
          ]}
        />
      </GuideSection>

      <TipCallout type="tip" title="Profit potential">
        <p>
          Trophy fishing and lava sea creature farming are some of the best money-making methods
          in the game once you have the right setup. Lava fishing can easily exceed <strong>20M+/hr</strong>
          with a good rod and pet.
        </p>
      </TipCallout>

      {/* ── FAQ ── */}
      <AccordionSection
        title="Frequently asked questions"
        items={[
          {
            question: "Is fishing profitable?",
            answer: (
              <p>
                Yes, especially lava fishing and trophy fishing at higher levels. Regular water fishing
                is slower profit but still decent during Marina mayor.
              </p>
            ),
          },
          {
            question: "Best fishing spot for XP?",
            answer: (
              <p>
                Barn for regular fishing (highest sea creature rate). Crimson Isle lava pools for lava fishing.
                Always fish during Marina mayor for +15 SCC.
              </p>
            ),
          },
          {
            question: "How does trophy fishing work?",
            answer: (
              <p>
                Trophy fish are caught while lava fishing. 18 types &times; 4 tiers. Use a Hellfire Rod with
                Trophy Hunter attribute, Hunter Armor, and Hot Bait. 100th catch = guaranteed Gold, 600th = Diamond.
              </p>
            ),
          },
          {
            question: "Best rod for lava fishing?",
            answer: (
              <p>
                Hellfire Rod is best-in-slot for both lava and trophy fishing. Before that, Inferno Rod is solid.
                Make sure to roll good attributes (Trophy Hunter + Fishing Speed).
              </p>
            ),
          },
          {
            question: "What pet should I use?",
            answer: (
              <p>
                Flying Fish for lava fishing, Baby Yeti for barn fishing, Epic Kuudra for trophy fishing.
                Squid for pure XP grinding.
              </p>
            ),
          },
        ]}
      />

      {/* ── Resource Links ── */}
      <ResourceLinks
        title="Tools & references"
        links={[
          { title: "Hypixel Wiki: Fishing", description: "All fishing mechanics and sea creatures.", href: "https://wiki.hypixel.net/Fishing", tag: "Reference" },
          { title: "Hypixel Wiki: Trophy Fish", description: "All 18 trophy fish and their tiers.", href: "https://wiki.hypixel.net/Trophy_Fish", tag: "Reference" },
          { title: "SkyCrypt", description: "Check your fishing stats and gear.", href: "https://sky.shiiyu.moe/", tag: "Stats" },
          { title: "SkyKings", description: "Fishing leaderboards and guides.", href: "https://skykings.net/", tag: "Community" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        description="Direct searches for up-to-date fishing guides."
        links={[
          { title: "Lava Fishing Guide", description: "Search: setup, rods, lava sea creatures.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+lava+fishing+guide", tag: "YouTube" },
          { title: "Trophy Fishing Guide", description: "Search: trophy fish, Hellfire Rod, Hunter Armor.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+trophy+fishing+guide", tag: "YouTube" },
          { title: "Fishing Money Making", description: "Search: best fishing methods, profit, setup.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+fishing+money+making", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Money Making", description: "Compare fishing profit to other methods.", href: "/money", tag: "Route" },
          { title: "Pets", description: "All fishing pets and leveling methods.", href: "/pets", tag: "Route" },
          { title: "Crimson Isle", description: "Unlock lava fishing via Crimson Isle progression.", href: "/crimson", tag: "Route" },
          { title: "Collections", description: "Fishing collections unlock recipes and items.", href: "/collections", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
