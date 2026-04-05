import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";

export default function MiningPage() {
  return (
    <DocsLayout
      title="Mining"
      description="A clear, practical overview: HotM pathing, powder, gear progression, and how to pick the best mining method for you."
    >
      <GuideSection title="Quick overview (what you actually need)">
        <ul>
          <li>
            <strong>Get HotM 10</strong> (without it, many upgrades/setups aren’t worth it).
          </li>
          <li>
            <strong>Powder</strong> is the biggest multiplier for rates (speed/fortune/procs).
          </li>
          <li>
            <strong>Upgrade gear step-by-step</strong> (armor + tool + pet), instead of trying to buy everything at once.
          </li>
          <li>
            <strong>Pick a method</strong>: Crystal Hollows (gems) vs. Glacite Tunnels vs. Dwarven Mines diamonds, etc.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Heart of the Mountain (HotM)"
        description="Your mining skill tree. Unlock it first, then level it efficiently."
      >
        <p>
          After you give <strong>Rhys 15× any enchanted mining item</strong>, you unlock the <strong>Dwarven Mines</strong> — including
          <strong> Heart of the Mountain</strong>. For serious profit/hour, plan to push HotM to <strong>Tier 10</strong> long-term.
        </p>
      </GuideSection>

      <GuideSection title="Leveling HotM (fast & efficient XP)">
        <ul>
          <li>
            <strong>Tier 1–7:</strong> Commissions in the <strong>Dwarven Mines</strong> (simple and straightforward). Crystal Hollows also
            works if you enjoy it more.
          </li>
          <li>
            <strong>Tier 7–10:</strong> Commissions in the <strong>Glacite Tunnels</strong>.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Tree pathing (perks to prioritize)"
        description="Not every perk matters for commissions — but a few are consistently strong."
      >
        <p>
          The best skill tree path depends on your method (gems, mithril, glacite, etc.). While you’re mainly farming HotM XP,
          solid all-round perks are usually enough.
        </p>
        <ul>
          <li>
            <strong>Pickobulus</strong>
          </li>
          <li>
            <strong>Efficient Miner</strong>
          </li>
          <li>
            <strong>Titanium Insanium</strong>
          </li>
          <li>
            <strong>Mining Speed / Mining Fortune</strong> plus perks that give <strong>extra powder</strong>
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Powder (Mithril / Gemstone / Glacite)"
        description="Powder decides your rates — you can start earlier, but it scales hard."
      >
        <p>
          Every HotM perk level costs powder. You can start with less, but it noticeably lowers your rates. A commonly quoted
          target is around <strong>10m / 20m / 20m</strong> (Mithril / Gemstone / Glacite) — and you only need <strong>Glacite Powder</strong>
          for Glacite Tunnels perks.
        </p>
        <p>
          Some permanent HotM upgrades (Core of the Mountain / Mining Master Perk) also require recurring powder investments.
          Typical ballparks are: <strong>8m Glacite</strong> for the last Core/Master tiers (only relevant if you want to push that line),
          plus roughly <strong>150k Mithril</strong> and <strong>1.4m Gemstone</strong> for specific Core upgrades.
        </p>
      </GuideSection>

      <DataTable
        title="Powder milestone targets"
        description="How much powder you need and what it unlocks."
        columns={[
          { key: "tier", label: "Tier" },
          { key: "mithril", label: "Mithril" },
          { key: "gemstone", label: "Gemstone" },
          { key: "glacite", label: "Glacite" },
          { key: "unlocks", label: "What It Unlocks" },
        ]}
        rows={[
          { tier: "Starter", mithril: "~2M", gemstone: "~2M", glacite: "—", unlocks: "Basic HotM perks. Can start mining." },
          { tier: "Mid", mithril: "~5M", gemstone: "~10M", glacite: "~5M", unlocks: "Decent rates. Most perks usable." },
          { tier: "Serious", mithril: "~10M", gemstone: "~20M", glacite: "~20M", unlocks: "Good rates across all methods." },
          { tier: "Maxed", mithril: "~12.5M", gemstone: "~24.5M", glacite: "~34.5M", unlocks: "All perks maxed. Peak efficiency." },
        ]}
        caption="Daily commission bonus at HotM 10+: 1,600 Mithril / 3,200 Gemstone / 4,000 Glacite."
      />

      <TipCallout type="tip" title="Powder buffs stack">
        <p>
          The <strong>Powder Buff</strong> perk combined with a <strong>Spicy Goblin Omelette</strong> gives roughly
          <strong> ~70% more powder</strong>. Always activate both before powder mining sessions.
        </p>
      </TipCallout>

      <GuideSection title="Powder mining (short & effective)">
        <ul>
          <li>
            <strong>Mithril Powder:</strong> Mine mithril and do events.
          </li>
          <li>
            <strong>Gemstone Powder:</strong> Get a <strong>Jungle Pickaxe</strong>, then farm Hard Stone in the <strong>Crystal Hollows Jungle</strong>.
            Chests give powder/rewards; <strong>Sludge</strong> sells well.
          </li>
          <li>
            <strong>Glacite Powder:</strong> Mostly from <strong>even more commissions</strong>.
          </li>
        </ul>
        <p>
          Tip: If you’re doing chest gameplay, it’s worth leveling <strong>Great Explorer</strong>.
        </p>
        <p>
          Powder gain buffs: the <strong>Powder Buff</strong> perk + a <strong>Spicy Goblin Omelette</strong> are a great baseline (together up to
          ~70% more powder). Some drills also give powder bonuses.
        </p>
      </GuideSection>

      <GuideSection
        title="Gear progression (Early → End Game)"
        description="Armor + tool + pet — upgrade in stages."
      >
        <h3 className="text-base font-semibold">Early Game</h3>
        <ul>
          <li>
            <strong>Armor:</strong> Glacite Armor (drops from Glacite Walkers in the Dwarven Mines).
          </li>
          <li>
            <strong>Tool:</strong> Fractured Mithril Pickaxe (from Bubu, 10k) → keep upgrading at Bubu until Refined Mithril Pickaxe.
          </li>
          <li>
            <strong>Pet:</strong> Mithril Golem (any rarity) or Legendary Silverfish.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Mid Game</h3>
        <ul>
          <li>
            <strong>Armor:</strong> Yog Armor (Hard Stone Collection) — has gem slots. Slots/gems are optional, but help progression.
          </li>
          <li>
            <strong>Tool:</strong> Keep the Jungle Pickaxe or start moving toward a Drill. A solid starter Drill is
            <strong> Titanium Drill DR-X355</strong> (buy/forge) — its upgrade path stays relevant later.
          </li>
          <li>
            <strong>Pet:</strong> Legendary <strong>Bal</strong> with <strong>Bejeweled Collar</strong>.
          </li>
          <li>
            <strong>Extras:</strong> Titanium Equipment is often a good step here.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Late Game</h3>
        <ul>
          <li>
            <strong>Armor:</strong> <strong>Divan’s Armor</strong> (Gemstone Chambers are expensive; upgrade gradually). Usually paired with
            <strong> Jaded</strong> as the reforge.
          </li>
          <li>
            <strong>Tool:</strong> Upgrade toward <strong>Titanium Drill DR-X655</strong> (eventually Divan’s Drill).
          </li>
          <li>
            <strong>Pet:</strong> Bal stays great in Magma Fields; <strong>Scatha</strong> is strong in many other areas; <strong>Glacite Golem</strong>
            is mainly for Glacite Mineshafts.
          </li>
          <li>
            <strong>Equipment:</strong> e.g. <strong>Dwarven Handwarmers</strong>.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">End Game</h3>
        <p>
          This is where fine-tuning starts: all Divan slots + <strong>Perfect Gems</strong>, <strong>Divan’s Powder Coatings</strong>,
          <strong> Ice Cold V</strong>, and a fully built-out drill (e.g. Polished Engine, Fuel Tank, Omelette, etc.). The best reforge
          depends on your method; <strong>Lustrous</strong> is a good default.
        </p>
        <p>
          Pets: <strong>Quick Claw</strong> is a common endgame standard. Equipment: often <strong>2× Gemstone Equipment</strong> +
          <strong> Pendant of Divan</strong>.
        </p>
      </GuideSection>

      <GuideSection
        title="Which mining method should you play?"
        description="You’re set up — now it’s about fun, setup, and the area you like."
      >
        <p>
          Mining has a ton of content. You can farm gems in the <strong>Crystal Hollows</strong>, play the <strong>Glacite Tunnels</strong>, or do
          diamonds/mithril in the <strong>Dwarven Mines</strong>. This page is intentionally a <strong>progression guide</strong>: it gets you to a
          setup where almost any method performs well.
        </p>
        <p>
          Next step: pick a method you enjoy, then optimize your tree, gear, route, and party/server flow for it.
        </p>
      </GuideSection>

      <ResourceLinks
        title="Useful links"
        description="Tools and references (safe, fast, no rabbit hole)."
        links={[
          {
            title: "SkyCrypt",
            description: "Check mining stats, MP, gear, pets.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "Hypixel Wiki: Mining",
            description: "Overview of mining, collections, and items.",
            href: "https://wiki.hypixel.net/Mining",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Heart of the Mountain",
            description: "HotM perks, costs, requirements.",
            href: "https://wiki.hypixel.net/Heart_of_the_Mountain",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Crystal Hollows",
            description: "Biomes, mobs, mechanics, commissions.",
            href: "https://wiki.hypixel.net/Crystal_Hollows",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Dwarven Mines",
            description: "Commissions, events, area mechanics.",
            href: "https://wiki.hypixel.net/Dwarven_Mines",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="YouTube Searches"
        description="Click a search and sort by upload date (the meta changes)."
        links={[
          {
            title: "HotM 10 / Commission Route",
            description: "Search: fastest HotM leveling 2025/2026.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+hotm+10+fastest+commissions",
            tag: "YouTube",
          },
          {
            title: "Powder Mining (Mithril/Gemstone)",
            description: "Search: powder mining guide, great explorer, chest routes.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+powder+mining+guide+great+explorer",
            tag: "YouTube",
          },
          {
            title: "Gemstone Mining (Crystal Hollows)",
            description: "Search: gemstone mining route, setup, rates.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+gemstone+mining+route+setup",
            tag: "YouTube",
          },
          {
            title: "Glacite Tunnels mining",
            description: "Search: glacite tunnels commissions + mining methods.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+glacite+tunnels+mining",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
