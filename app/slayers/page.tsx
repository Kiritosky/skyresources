import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { ProgressPath } from "../../components/progress-path";
import { AccordionSection } from "../../components/accordion-section";

export default function SlayersPage() {
  return (
    <DocsLayout
      title="Slayers"
      description="Complete guide to all 6 slayer types: boss overviews, recommended progression order, gear requirements, RNG drops, and money considerations."
    >
      <GuideSection title="Overview">
        <p>
          Slayers are a core combat system in Hypixel SkyBlock. There are{" "}
          <strong>6 slayer types</strong>, each associated with a specific mob
          family. To fight a slayer boss, you pick up a{" "}
          <strong>slayer quest</strong> from Maddox the Slayer (or the relevant
          NPC), kill enough mobs of that type to fill the XP bar, then fight
          the spawned boss within a time limit.
        </p>
        <p>
          Completing slayer quests awards{" "}
          <strong>slayer XP</strong> which levels up that specific slayer. Each
          slayer has <strong>9 levels</strong>, and higher levels unlock crafting
          recipes, drops, and stat bonuses. The bosses also have a chance to
          drop <strong>rare RNG items</strong> worth millions (or even hundreds
          of millions) of coins.
        </p>
        <ul>
          <li>
            <strong>Quest tiers:</strong> Each slayer has T1 through T4 (some
            have T5). Higher tiers spawn harder bosses that give more XP and
            better drop chances.
          </li>
          <li>
            <strong>Slayer XP:</strong> Accumulates across all quests. Higher
            tiers give massively more XP per kill.
          </li>
          <li>
            <strong>Combat XP:</strong> You also earn combat XP from killing
            the mobs needed to fill the boss bar.
          </li>
          <li>
            <strong>Coins:</strong> Slayer quests cost coins to start. Higher
            tiers cost more but have better loot tables.
          </li>
        </ul>
      </GuideSection>

      <DataTable
        title="All Slayer Bosses"
        description="Overview of every slayer type, tiers, requirements, and approximate cost per boss."
        columns={[
          { key: "boss", label: "Boss Name" },
          { key: "type", label: "Type" },
          { key: "tiers", label: "Tiers" },
          { key: "unlock", label: "Unlock Requirement" },
          { key: "cost", label: "Cost Per Boss (T4)", align: "right" },
        ]}
        rows={[
          {
            boss: "Revenant Horror",
            type: "Zombie",
            tiers: "T1-T5",
            unlock: "None (starter slayer)",
            cost: "~150k",
          },
          {
            boss: "Tarantula Broodfather",
            type: "Spider",
            tiers: "T1-T4",
            unlock: "Revenant Horror LVL 1",
            cost: "~200k",
          },
          {
            boss: "Sven Packmaster",
            type: "Wolf",
            tiers: "T1-T4",
            unlock: "Tarantula Broodfather LVL 1",
            cost: "~150k",
          },
          {
            boss: "Voidgloom Seraph",
            type: "Enderman",
            tiers: "T1-T4",
            unlock: "Sven Packmaster LVL 4",
            cost: "~1M+",
          },
          {
            boss: "Inferno Demonlord",
            type: "Blaze",
            tiers: "T1-T4",
            unlock: "Voidgloom Seraph LVL 4",
            cost: "~2M+",
          },
          {
            boss: "Riftstalker Bloodfiend",
            type: "Vampire",
            tiers: "T1-T5",
            unlock: "Access to The Rift",
            cost: "In-Rift currency",
          },
        ]}
        caption="Costs are for the quest itself; gear/consumable costs are separate."
      />

      <GuideSection
        title="Recommended Slayer Order"
        description="Work through slayers in this order for the smoothest progression."
      >
        <ProgressPath
          steps={[
            {
              title: "1. Revenant Horror (Zombie)",
              description:
                "The entry-level slayer. Cheap, easy to kill with basic gear. Grind to at least LVL 3-4 to unlock useful crafts like the Reaper Falchion. T5 exists but is optional until endgame.",
              status: "complete",
            },
            {
              title: "2. Tarantula Broodfather (Spider)",
              description:
                "Unlocked at Rev LVL 1. Spider slayer is straightforward. Mosquito Bow is a notable drop. Grind to LVL 3-4 for recipes and progression.",
              status: "complete",
            },
            {
              title: "3. Sven Packmaster (Wolf)",
              description:
                "Unlocked at Tara LVL 1. Wolf slayer drops the Overflux Capacitor, one of the best power stones. Grind in the Howling Cave or Park.",
              status: "current",
            },
            {
              title: "4. Voidgloom Seraph (Enderman)",
              description:
                "Unlocked at Wolf LVL 4. Major difficulty spike. Requires strong gear (Necron armor, Atomsplit Katana, or Terminator). Drops include Judgement Core (200M+) and Transmission Tuners.",
              status: "upcoming",
            },
            {
              title: "5. Inferno Demonlord (Blaze)",
              description:
                "Unlocked at Eman LVL 4. Done on the Crimson Isle. Requires fire-resistant gear and strong combat stats. Drops include High Class Archfiend Dice and Duplex.",
              status: "upcoming",
            },
            {
              title: "6. Riftstalker Bloodfiend (Vampire)",
              description:
                "Done entirely in The Rift. Unique mechanics: you must use specific Rift weapons and manage the Ichor/Mania systems. Drops include the rare Soulflow Engine components.",
              status: "upcoming",
            },
          ]}
        />
      </GuideSection>

      <GuideSection
        title="Gear Requirements by Slayer"
        description="What you need to fight each slayer boss effectively."
      >
        <h3 className="text-base font-semibold">Revenant Horror (Zombie)</h3>
        <ul>
          <li>
            <strong>Armor:</strong> Unstable Dragon or Strong Dragon armor is
            enough for T3-T4. Cheap zombie-focused gear works for T1-T2.
          </li>
          <li>
            <strong>Weapon:</strong> Reaper Falchion (craftable at Rev LVL 2)
            or any decent sword. AOTD works fine for early tiers.
          </li>
          <li>
            <strong>Tips:</strong> Rev is forgiving. If you can survive the
            mini-boss spawns, you can grind indefinitely.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">
          Tarantula Broodfather (Spider)
        </h3>
        <ul>
          <li>
            <strong>Armor:</strong> Strong Dragon or Tarantula Armor for the
            set bonus. Spider-specific damage matters here.
          </li>
          <li>
            <strong>Weapon:</strong> Scorpion Foil (craftable, does 250% more
            damage to spiders) or Shaman Sword.
          </li>
          <li>
            <strong>Tips:</strong> The boss spawns cobwebs that slow you. Keep
            moving and use ranged attacks if struggling.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">
          Sven Packmaster (Wolf)
        </h3>
        <ul>
          <li>
            <strong>Armor:</strong> Mastiff Armor (converts crit damage to
            health) or Strong/Necron armor for higher tiers.
          </li>
          <li>
            <strong>Weapon:</strong> Shaman Sword or Pooch Sword (scales with
            health). AOTD/Livid Dagger also works.
          </li>
          <li>
            <strong>Tips:</strong> The boss has a true damage attack. Mastiff
            armor helps survive it. Bring mana potions.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">
          Voidgloom Seraph (Enderman)
        </h3>
        <ul>
          <li>
            <strong>Armor:</strong> Necron armor (minimum for T3), Final
            Destination armor (BiS for eman slayer).
          </li>
          <li>
            <strong>Weapon:</strong> Atomsplit Katana (craftable at Eman LVL
            7) or Vorpal Katana (LVL 3). Terminator bow for T4.
          </li>
          <li>
            <strong>Tips:</strong> T3+ has multiple phases including a DPS
            check. Bring Mana Flux or Power Orb. This is the first truly hard
            slayer.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">
          Inferno Demonlord (Blaze)
        </h3>
        <ul>
          <li>
            <strong>Armor:</strong> Crimson armor (Fiery or Burning rarity) or
            Necron with fire protection.
          </li>
          <li>
            <strong>Weapon:</strong> Ragnarock Axe, Terminator, or Hyperion.
            Blaze slayer demands high damage output.
          </li>
          <li>
            <strong>Tips:</strong> Done on the Crimson Isle. The arena has lava
            and fire hazards. Bring fire resistance potions and have strong lifesteal.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">
          Riftstalker Bloodfiend (Vampire)
        </h3>
        <ul>
          <li>
            <strong>Armor:</strong> Rift-specific armor (e.g., Tubula armor).
            Regular armor does not work in the Rift.
          </li>
          <li>
            <strong>Weapon:</strong> Rift weapons only (Vampire Slayer weapons,
            Berberis, etc.).
          </li>
          <li>
            <strong>Tips:</strong> Completely different mechanics from other
            slayers. Learn the Ichor and Mania phases. T4-T5 requires
            Rift-specific meta knowledge.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="RNG Drops & the RNG Meter"
        description="The lucrative (and frustrating) side of slayers."
      >
        <p>
          Every slayer boss has a loot table with common drops (like enchanted
          materials) and <strong>rare RNG drops</strong>. These rare drops are
          what make slayers potentially profitable. The drop rates are very low,
          but the <strong>RNG Meter</strong> system helps guarantee you
          eventually get something.
        </p>

        <h3 className="mt-4 text-base font-semibold">How the RNG Meter Works</h3>
        <p>
          Every time you kill a slayer boss and <em>don't</em> get a rare drop,
          your RNG meter fills up slightly. Once it reaches 100%, you are
          guaranteed to receive the RNG drop you have selected. You can choose
          which drop to target from the slayer menu. The meter progress depends
          on the boss tier: higher tiers fill the meter faster.
        </p>

        <h3 className="mt-4 text-base font-semibold">Notable RNG Drops</h3>
        <ul>
          <li>
            <strong>Warden Heart</strong> (Revenant T5) — Worth{" "}
            <strong>~200M-400M</strong>. Used to craft the Warden Helmet.
            Extremely rare base drop rate.
          </li>
          <li>
            <strong>Overflux Capacitor</strong> (Sven T4) — Worth{" "}
            <strong>~40M-80M</strong>. One of the best power stones for
            orbs. Consistent demand.
          </li>
          <li>
            <strong>Judgement Core</strong> (Voidgloom T4) — Worth{" "}
            <strong>~150M-300M</strong>. Used to craft Etherwarp Conduit.
            Very rare.
          </li>
          <li>
            <strong>Shard of the Shredded</strong> (Revenant T4/T5) — Worth{" "}
            <strong>~30M-60M</strong>. Used for the Warden Helmet.
          </li>
          <li>
            <strong>High Class Archfiend Dice</strong> (Inferno T4) — Worth{" "}
            <strong>~50M-100M</strong>. Endgame blaze slayer drop.
          </li>
          <li>
            <strong>Duplex</strong> (Inferno T4) — Worth{" "}
            <strong>~80M-150M</strong>. Ultimate enchantment book for bows.
          </li>
          <li>
            <strong>Snake Rune</strong> (Tarantula T4) — Worth{" "}
            <strong>~5M-15M</strong>. Less valuable but consistent seller.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="warning" title="Slayers Are Coin Sinks">
        <p>
          Slayers cost coins every time you start a quest, and the gear
          requirements can be expensive. Don't dump all your coins into T4
          bosses too early — you'll burn through your bank before getting any
          meaningful drops. Start with T3 to build up slayer XP, then move to
          T4 once you're comfortable with the boss mechanics and have a solid
          coin buffer. <strong>Budget at least 50M</strong> before committing
          to serious T4 grinding on enderman or blaze slayer.
        </p>
      </TipCallout>

      <TipCallout type="tip" title="Aatrox Mayor = 50% Off Slayers">
        <p>
          During <strong>Aatrox</strong> mayor, slayer quests cost 50% less
          coins. This is the best time to grind slayers, especially the
          expensive ones like Voidgloom and Inferno Demonlord. Plan your
          slayer grinding sessions around Aatrox's election cycle to save
          millions of coins over time. Check the mayor schedule on the wiki
          or community trackers.
        </p>
      </TipCallout>

      <DataTable
        title="Slayer Level XP Requirements"
        description="XP needed to reach each slayer level. Higher tiers give proportionally more XP per boss."
        columns={[
          { key: "level", label: "Slayer Level", align: "center" },
          { key: "xpRequired", label: "Total XP Required", align: "right" },
          { key: "notableUnlock", label: "Notable Unlock" },
        ]}
        rows={[
          {
            level: "1",
            xpRequired: "5",
            notableUnlock: "Basic slayer drops enabled",
          },
          {
            level: "2",
            xpRequired: "15",
            notableUnlock: "Tier-specific weapon recipes",
          },
          {
            level: "3",
            xpRequired: "200",
            notableUnlock: "Armor recipes and better drop tables",
          },
          {
            level: "4",
            xpRequired: "1,000",
            notableUnlock: "T4 quest access (most slayers)",
          },
          {
            level: "5",
            xpRequired: "5,000",
            notableUnlock: "Advanced weapon recipes",
          },
          {
            level: "6",
            xpRequired: "20,000",
            notableUnlock: "Rare crafting recipes",
          },
          {
            level: "7",
            xpRequired: "100,000",
            notableUnlock: "Endgame recipes (e.g., Atomsplit Katana at Eman 7)",
          },
          {
            level: "8",
            xpRequired: "400,000",
            notableUnlock: "Stat bonuses and cosmetic rewards",
          },
          {
            level: "9",
            xpRequired: "1,000,000",
            notableUnlock: "Final stat bonuses, completionist milestone",
          },
        ]}
        caption="XP values are cumulative. T4 bosses give 240-500 XP per kill depending on the slayer type."
      />

      <AccordionSection
        title="Frequently Asked Questions"
        description="Common questions about slayers."
        items={[
          {
            question: "Which slayer should I do first?",
            answer: (
              <p>
                Start with <strong>Revenant Horror</strong> (Zombie). It is
                the cheapest, easiest, and has no unlock requirements. Grind
                it to LVL 3-4, then move to Tarantula, then Sven. The order
                is forced anyway because each slayer unlocks the next one.
                Don't skip ahead — the gear and experience you gain from
                earlier slayers helps with later ones.
              </p>
            ),
          },
          {
            question: "Are slayers worth it for money?",
            answer: (
              <p>
                <strong>On average, no.</strong> Slayers are a coin sink for
                most players. The quest costs, gear repairs, and consumables
                add up. However, if you hit an RNG drop (Warden Heart,
                Judgement Core, etc.), you can make hundreds of millions in a
                single drop. Think of slayers as a long-term investment with
                variance. The real value is in the slayer levels themselves,
                which unlock powerful crafting recipes and stat bonuses.
              </p>
            ),
          },
          {
            question: "What is the RNG meter?",
            answer: (
              <p>
                The RNG meter is a pity system for slayer drops. Every boss
                kill that doesn't give you a rare drop fills the meter
                slightly. At 100%, you're guaranteed the drop you selected.
                Higher tier bosses fill the meter faster. You can pick which
                drop to target from the slayer quest menu. It doesn't carry
                over between different drop types — if you switch targets, the
                meter resets for the new target.
              </p>
            ),
          },
          {
            question: "What is the best gear for Voidgloom Seraph?",
            answer: (
              <p>
                For <strong>T3</strong>: Necron armor, Void Edge Katana or
                Vorpal Katana, Wither Skeleton pet, and a mana flux power
                orb. For <strong>T4</strong>: Final Destination armor (or
                Warden Helmet + Necron), Atomsplit Katana, Terminator bow for
                the DPS check phase, and Wither Skeleton or Ender Dragon pet.
                Bring Florid Zombie Sword for healing and make sure you have
                enough mana sustain. T4 Voidgloom is a genuine DPS check —
                you need strong gear or you'll time out.
              </p>
            ),
          },
          {
            question: "Is T5 Revenant worth doing?",
            answer: (
              <p>
                T5 Rev is mainly for the <strong>Warden Heart</strong> drop,
                which is extremely rare but worth 200M-400M. The boss itself
                is mechanically harder than T4 with additional phases. It's
                worth doing once you have strong enough gear to kill it
                quickly and a large enough budget to absorb the quest costs.
                During Aatrox mayor, T5 Rev grinding becomes significantly
                more affordable.
              </p>
            ),
          },
        ]}
      />

      <ResourceLinks
        title="Useful Links"
        description="External resources for slayer information and tools."
        links={[
          {
            title: "Hypixel Wiki: Slayer",
            description:
              "Full breakdown of all slayer types, drops, XP tables, and boss mechanics.",
            href: "https://wiki.hypixel.net/Slayer",
            tag: "Reference",
          },
          {
            title: "SkyCrypt",
            description:
              "View your slayer levels, boss kill counts, and RNG meter progress.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "Hypixel Wiki: RNG Meter",
            description:
              "Details on how the RNG meter works, fill rates, and targeting drops.",
            href: "https://wiki.hypixel.net/RNG_Meter",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Mayors",
            description:
              "Check when Aatrox is up for 50% slayer cost reduction.",
            href: "https://wiki.hypixel.net/Mayor",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="YouTube Searches"
        description="Sort by upload date for the latest meta."
        links={[
          {
            title: "Slayer Guide (All Types)",
            description:
              "Search: slayer guide all types, best gear and strategy.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+slayer+guide+all+types",
            tag: "YouTube",
          },
          {
            title: "Voidgloom Seraph Guide",
            description:
              "Search: enderman slayer T4 guide, gear setup.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+voidgloom+seraph+t4+guide",
            tag: "YouTube",
          },
          {
            title: "Slayer Money Making",
            description:
              "Search: slayer profit guide, RNG drops, best slayer for money.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+slayer+money+making+rng+drops",
            tag: "YouTube",
          },
          {
            title: "Inferno Demonlord Guide",
            description:
              "Search: blaze slayer guide, gear and strategy for T4.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+inferno+demonlord+blaze+slayer+guide",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
