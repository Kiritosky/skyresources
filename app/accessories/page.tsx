import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { ProgressPath } from "../../components/progress-path";
import { AccordionSection } from "../../components/accordion-section";

export default function AccessoriesPage() {
  return (
    <DocsLayout
      title="Accessories & Magical Power"
      description="Magical Power is the most underrated stat multiplier in SkyBlock. This page covers what MP is, how to build it, power stones, tuning, and the best accessories per budget."
    >
      {/* ─── What is MP ─── */}
      <GuideSection title="What is Magical Power?">
        <p>
          <strong>Magical Power (MP)</strong> is a hidden multiplier that scales
          the stat bonuses from your <strong>Accessory Bag Power Stone</strong>.
          Every accessory in your bag contributes a set amount of MP based on its
          rarity. The higher your total MP, the bigger your reforge stats become.
        </p>
        <p>
          Here's why MP is so important: it is{" "}
          <strong>multiplicative with your accessory reforges</strong>. If you
          have expensive armor and weapons but low MP, your effective damage is
          dramatically lower than someone with the same gear and proper MP. Many
          players skip accessories early on and then wonder why their damage
          feels bad — this is almost always the reason.
        </p>
        <p>
          MP values by accessory rarity:{" "}
          <strong>Common = 3</strong>, <strong>Uncommon = 5</strong>,{" "}
          <strong>Rare = 8</strong>, <strong>Epic = 12</strong>,{" "}
          <strong>Legendary = 16</strong>, <strong>Mythic = 22</strong>,{" "}
          <strong>Special/Very Special = 3-5</strong>. Enrichments can add +1 MP
          each.
        </p>
      </GuideSection>

      <TipCallout type="danger" title="MP is multiplicative">
        <p>
          This is the single most important thing to understand:{" "}
          <strong>
            low MP means low damage, even with expensive gear
          </strong>
          . A player with 500 MP and budget gear will often outdamage a player
          with 200 MP and top-tier weapons. Before upgrading your sword or armor,
          check your MP on SkyCrypt and make sure it's appropriate for your
          progression stage.
        </p>
      </TipCallout>

      {/* ─── MP Breakpoints Table ─── */}
      <DataTable
        title="Magical Power breakpoints"
        description="Rough stat bonus scaling at key MP thresholds. Exact numbers depend on your chosen Power Stone."
        columns={[
          { key: "mp", label: "Total MP", align: "center" },
          { key: "stage", label: "Game Stage" },
          { key: "bonus", label: "Approx Stat Bonus" },
          { key: "notes", label: "Notes" },
        ]}
        rows={[
          {
            mp: "100",
            stage: "Very early",
            bonus: "~15% of stone stats",
            notes: "Just started collecting talismans",
          },
          {
            mp: "200",
            stage: "Early game",
            bonus: "~25% of stone stats",
            notes: "Should have most Common/Uncommon accessories",
          },
          {
            mp: "300",
            stage: "Early-mid",
            bonus: "~35% of stone stats",
            notes: "Start buying cheap Rare accessories",
          },
          {
            mp: "500",
            stage: "Mid game",
            bonus: "~50% of stone stats",
            notes: "Noticeable damage jump; most Rare accessories done",
          },
          {
            mp: "750",
            stage: "Late-mid",
            bonus: "~65% of stone stats",
            notes: "Epic accessories and some Legendary ones",
          },
          {
            mp: "1000",
            stage: "Late game",
            bonus: "~80% of stone stats",
            notes: "Strong profile; most non-endgame accessories",
          },
          {
            mp: "1250",
            stage: "Late game",
            bonus: "~88% of stone stats",
            notes: "Diminishing returns start here",
          },
          {
            mp: "1500+",
            stage: "End game",
            bonus: "~95%+ of stone stats",
            notes: "Mythic accessories, enrichments, Hegemony artifact",
          },
        ]}
        caption="The formula is logarithmic — early MP gains matter the most. Prioritize cheap MP per coin."
      />

      {/* ─── Accessory Bag Upgrade Path ─── */}
      <GuideSection
        title="Upgrading your Accessory Bag"
        description="Your bag starts small. Unlock more slots through Redstone Collection."
      >
        <p>
          The <strong>Accessory Bag</strong> is where all your accessories must
          be placed for their MP to count. The bag starts with very few slots
          and expands as you level your{" "}
          <strong>Redstone Collection</strong>. Each tier of Redstone unlocks an
          Accessory Bag upgrade from the Redstone Shop.
        </p>
        <p>
          You can also gain bonus slots from{" "}
          <strong>Community Shop upgrades</strong> and certain{" "}
          <strong>special items</strong>. The maximum bag size currently allows
          for all existing accessories with room to spare.
        </p>
        <ProgressPath
          steps={[
            {
              title: "Redstone I-III — Starting bag (12-18 slots)",
              description:
                "Mine Redstone in the Deep Caverns. The first few tiers are very fast. Buy a Redstone Minion to speed this up.",
              status: "complete",
            },
            {
              title: "Redstone IV-VI — Mid-size bag (24-36 slots)",
              description:
                "Keep mining or use Redstone Minions. This is where most mid-game players sit. Enough for 300-500 MP.",
              status: "complete",
            },
            {
              title: "Redstone VII-IX — Large bag (42-54 slots)",
              description:
                "Requires significant Redstone collection. Enchanted Redstone Blocks help. This unlocks enough slots for 750+ MP.",
              status: "current",
            },
            {
              title: "Redstone X-XI — Full bag (60-66 slots)",
              description:
                "End-game collection requirement. Enchanted Redstone Lamp tier. Allows you to fit every accessory you'll need.",
              status: "upcoming",
            },
            {
              title: "Community Shop + Bonus Slots (up to 75+ total)",
              description:
                "Community shop upgrades and Jacob's Farming upgrades can add extra slots beyond the Redstone path.",
              status: "upcoming",
            },
          ]}
        />
      </GuideSection>

      {/* ─── Power Stones ─── */}
      <GuideSection
        title="Power Stones — which to use"
        description="Your Power Stone determines what stats your MP converts into. Choosing the right one is critical."
      >
        <p>
          You apply a Power Stone at the <strong>Thaumaturgy</strong> NPC in the
          Hub. Each stone distributes your total MP bonus into specific stats.
          Here are the most commonly used ones:
        </p>

        <h3 className="text-base font-semibold">Hurtful (Damage focused)</h3>
        <p>
          Prioritizes <strong>Crit Damage</strong> and{" "}
          <strong>Strength</strong>. Best all-around damage stone for most
          combat-focused players. If you're unsure which to pick, Hurtful is
          almost never wrong.
        </p>

        <h3 className="mt-4 text-base font-semibold">Silky (Crit Damage heavy)</h3>
        <p>
          Goes all-in on <strong>Crit Damage</strong>. Better than Hurtful when
          you already have high Strength from other sources (like Reaper Armor,
          Golden Dragon pet, etc.). Popular in end-game setups.
        </p>

        <h3 className="mt-4 text-base font-semibold">Itchy (Strength heavy)</h3>
        <p>
          Focuses on <strong>Strength</strong> with some Crit Damage. Use this
          if your Strength is low relative to your Crit Damage (check your stat
          balance on SkyCrypt). Generally less popular than Hurtful unless you
          have a specific reason.
        </p>

        <h3 className="mt-4 text-base font-semibold">Bloody (Berserker builds)</h3>
        <p>
          Grants <strong>Attack Speed</strong> alongside damage stats. Used in
          Berserker Dungeons builds and specific setups that need the extra
          attack speed. Niche but powerful in the right context.
        </p>

        <h3 className="mt-4 text-base font-semibold">Sighted (Mage builds)</h3>
        <p>
          Converts MP into <strong>Intelligence</strong>. Essential for Mage
          Dungeons builds where ability damage scales off Intelligence.
          Completely useless for non-mage setups.
        </p>
      </GuideSection>

      {/* ─── Tuning ─── */}
      <GuideSection
        title="Accessory Tuning"
        description="Fine-tune your stats beyond the Power Stone with tuning points."
      >
        <p>
          <strong>Tuning</strong> lets you shift a portion of your MP bonus from
          one stat to another. You unlock tuning points as your{" "}
          <strong>total MP increases</strong>. Each point lets you reallocate a
          small amount of stats.
        </p>
        <p>
          For example, if you're using Hurtful but want a bit more Strength, you
          can tune some points toward Strength without changing your entire Power
          Stone. Tuning is free to adjust at the <strong>Thaumaturgy</strong>{" "}
          NPC.
        </p>

        <h3 className="text-base font-semibold">Best tuning by build</h3>
        <ul>
          <li>
            <strong>General damage (Berserker/Archer):</strong> Tune toward
            whichever of Strength/Crit Damage is lower. Use SkyCrypt's stat
            optimizer or aim for a roughly{" "}
            <strong>1:1 Strength to Crit Damage ratio</strong> for maximum
            effective damage.
          </li>
          <li>
            <strong>Mage:</strong> Tune all points into{" "}
            <strong>Intelligence</strong>. You want every bit of mana and ability
            damage.
          </li>
          <li>
            <strong>Tank:</strong> Tune into <strong>Defense</strong> and{" "}
            <strong>Health</strong>. Survivability matters more than damage for
            Tank class in Dungeons.
          </li>
          <li>
            <strong>Healer:</strong> Similar to Tank, but you may want some{" "}
            <strong>Intelligence</strong> for healing ability strength.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="warning" title="Don't buy accessories randomly">
        <p>
          Work through accessories by{" "}
          <strong>MP per coin</strong> (cheapest first). Many players waste
          millions on expensive accessories when they still have cheap ones
          missing. Use the SkyCrypt "Missing Accessories" tab to see which ones
          you're missing, sorted by price. A Common accessory for 10K coins
          gives 3 MP — while a Legendary for 50M gives 16 MP. The cheap ones
          are massively more efficient early on.
        </p>
      </TipCallout>

      {/* ─── Best Accessories Table ─── */}
      <DataTable
        title="Best accessories by price tier"
        description="Focus on completing each tier before moving to the next."
        columns={[
          { key: "tier", label: "Price Tier" },
          { key: "accessories", label: "Key Accessories" },
          { key: "mp", label: "MP Each", align: "center" },
          { key: "cost", label: "Approx Cost" },
        ]}
        rows={[
          {
            tier: "Budget (< 500K)",
            accessories: "Zombie Talisman, Skeleton Talisman, Village Affinity Talisman, Intimidation Ring, Pig's Foot",
            mp: "3-5",
            cost: "10K - 500K each",
          },
          {
            tier: "Budget (< 500K)",
            accessories: "Spider Artifact, Bat Ring, Candy Ring, Red Claw Ring, Emerald Ring",
            mp: "5-8",
            cost: "50K - 500K each",
          },
          {
            tier: "Mid (500K - 10M)",
            accessories: "Day Crystal, Night Crystal, Wither Relic, Scarf's Studies (all)",
            mp: "5-8",
            cost: "500K - 5M each",
          },
          {
            tier: "Mid (500K - 10M)",
            accessories: "Treasure Ring, Crooked Artifact, Ender Artifact, Personal Compactor 6000",
            mp: "8-12",
            cost: "1M - 10M each",
          },
          {
            tier: "Expensive (10M - 100M)",
            accessories: "Wither Artifact, Feather Ring, Reaper Orb, Hunter Ring, Bingo Ring",
            mp: "12-16",
            cost: "10M - 50M each",
          },
          {
            tier: "Expensive (10M - 100M)",
            accessories: "Auto Recombobulated accessories (upgrades any to next rarity)",
            mp: "+3 to +6",
            cost: "5-8M per Recombobulator 3000",
          },
          {
            tier: "End game (100M+)",
            accessories: "Hegemony Artifact, Spine of the Leviathan, Abiphone Contacts (all)",
            mp: "16-22",
            cost: "100M - 1B+",
          },
          {
            tier: "End game (100M+)",
            accessories: "Enrichments (applied to Legendary/Mythic accessories)",
            mp: "+1 each",
            cost: "2-20M per enrichment",
          },
        ]}
        caption="Prices fluctuate with the market. Always check Bazaar/AH before buying."
      />

      <TipCallout type="info" title="Recombobulators are efficient MP">
        <p>
          A <strong>Recombobulator 3000</strong> upgrades any accessory's rarity
          by one tier, adding MP. At around 5-8M each, recombobulating your
          existing Epic accessories to Legendary is often{" "}
          <strong>cheaper per MP</strong> than buying new Legendary accessories.
          Recombobulate your highest-rarity accessories first for maximum MP
          gain.
        </p>
      </TipCallout>

      {/* ─── Enrichments ─── */}
      <GuideSection
        title="Enrichments"
        description="Late-game MP optimization applied to individual accessories."
      >
        <p>
          <strong>Enrichments</strong> can be applied to{" "}
          <strong>Legendary and Mythic</strong> rarity accessories. Each
          enrichment adds <strong>+1 MP</strong> and a small stat bonus (like +1
          Critical Damage, +1 Strength, etc.). They're purchased from the{" "}
          <strong>Bits Shop</strong> (requires a Booster Cookie active).
        </p>
        <p>
          Enrichments are one-time use per accessory. The stat type you choose
          should match your build (Critical Damage for damage dealers,
          Intelligence for mages, etc.). While +1 MP per enrichment seems small,
          across 20+ accessories it adds up significantly.
        </p>
      </GuideSection>

      {/* ─── FAQ ─── */}
      <AccordionSection
        title="Frequently asked questions"
        description="Common questions about Magical Power and accessories."
        items={[
          {
            question: "What MP should I target for my stage?",
            answer: (
              <p>
                <strong>Early game:</strong> 150-250 MP. Focus on every Common
                and Uncommon accessory you can find.{" "}
                <strong>Mid game:</strong> 400-600 MP. Complete most Rare
                accessories and start on Epics.{" "}
                <strong>Late game:</strong> 800-1100 MP. Epic and Legendary
                accessories, start recombobulating.{" "}
                <strong>End game:</strong> 1200+ MP. Mythic accessories,
                enrichments, Hegemony Artifact. Check SkyCrypt to see your
                current MP and what you're missing.
              </p>
            ),
          },
          {
            question: "Best Power Stone for damage?",
            answer: (
              <p>
                For most players, <strong>Hurtful</strong> is the safest
                all-around pick. It balances Crit Damage and Strength well. If
                you already have very high Strength from other sources (armor,
                pets, equipment), switch to{" "}
                <strong>Silky</strong> for pure Crit Damage. Use the{" "}
                <strong>damage optimizer</strong> on SkyCrypt to check which
                gives you more effective damage for your specific gear setup.
              </p>
            ),
          },
          {
            question: "How does tuning work exactly?",
            answer: (
              <p>
                You unlock <strong>tuning points</strong> based on your total MP.
                Each point lets you shift a small fraction of your Power Stone
                bonus into a different stat. Visit the{" "}
                <strong>Thaumaturgy NPC</strong> in the Hub to adjust your
                tuning. It costs nothing to change and resets are free. You get
                more tuning points as your MP increases — at 1000+ MP you'll
                have enough points to make a meaningful difference. The best
                approach is to check your stats and tune toward whichever
                offensive stat (Strength or Crit Damage) is lower.
              </p>
            ),
          },
          {
            question: "Which accessories are absolute must-haves?",
            answer: (
              <p>
                <strong>Personal Compactor 6000/7000</strong> — auto-compacts
                items in inventory (quality of life).{" "}
                <strong>Day/Night Crystal</strong> — cheap and give 8 MP each.{" "}
                <strong>Wither Artifact</strong> — solid MP and useful Wither
                damage reduction.{" "}
                <strong>All Scarf's Studies</strong> — obtainable from Floor 2 of
                Dungeons.{" "}
                <strong>Treasure Ring/Artifact</strong> — from the Jerry
                Workshop event. Beyond that, work through the cheapest
                missing accessories on SkyCrypt.
              </p>
            ),
          },
          {
            question: "Do accessories work in Dungeons?",
            answer: (
              <p>
                Yes. All accessory MP and stats apply inside Dungeons and are
                scaled by your Dungeon gear quality. This makes MP especially
                important for Dungeons players — higher MP means more Crit
                Damage/Strength/Intelligence scaling on top of your Dungeon stat
                multipliers. Even small MP improvements translate to noticeable
                damage gains inside Catacombs.
              </p>
            ),
          },
          {
            question: "Is the Hegemony Artifact worth it?",
            answer: (
              <p>
                The <strong>Hegemony Artifact</strong> is the single highest MP
                accessory in the game (22 MP, Mythic). It costs several hundred
                million coins. Whether it's "worth" it depends on your budget —
                if you already have 1000+ MP and most other accessories, the
                Hegemony is a solid upgrade. If you're below 800 MP, your coins
                are better spent on cheaper missing accessories and
                recombobulators.
              </p>
            ),
          },
        ]}
      />

      {/* ─── Resource Links ─── */}
      <ResourceLinks
        title="Useful links"
        description="Check your MP, find missing accessories, and optimize your setup."
        links={[
          {
            title: "SkyCrypt — Accessories tab",
            description: "See your MP, missing accessories sorted by cost, and Power Stone.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "Hypixel Wiki: Accessories",
            description: "Full list of all accessories and their MP values.",
            href: "https://wiki.hypixel.net/Accessory",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Magical Power",
            description: "MP formula, Power Stones, tuning mechanics.",
            href: "https://wiki.hypixel.net/Magical_Power",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Thaumaturgy",
            description: "Power Stone selection and tuning point details.",
            href: "https://wiki.hypixel.net/Thaumaturgy",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="YouTube searches"
        description="Click a search and sort by upload date — prices and meta change."
        links={[
          {
            title: "MP optimization guide",
            description: "Search: magical power guide, best accessories per coin.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+magical+power+guide+best+accessories",
            tag: "YouTube",
          },
          {
            title: "Power Stone comparison",
            description: "Search: best power stone for damage, hurtful vs silky.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+best+power+stone+hurtful+silky",
            tag: "YouTube",
          },
          {
            title: "Accessory bag upgrade path",
            description: "Search: cheapest MP, missing accessories guide.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+cheapest+magical+power+missing+accessories",
            tag: "YouTube",
          },
          {
            title: "Tuning guide",
            description: "Search: tuning points explained, how to tune accessories.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+accessory+tuning+guide+explained",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
