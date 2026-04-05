import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function PetsPage() {
  return (
    <DocsLayout
      title="Pets"
      description="Everything you need to know about pets: best picks per activity, leveling strategies, pet items, pet score, and autopet rules."
    >
      <GuideSection title="Overview">
        <p>
          Pets are one of the most impactful systems in Hypixel SkyBlock. Every
          pet gives <strong>flat stat bonuses</strong> that scale with its level
          (1-100, or 1-200 for Golden Dragon) and{" "}
          <strong>rarity</strong> (Common through Mythic). On top of raw stats,
          each pet has <strong>unique perks</strong> that unlock at specific
          levels, often defining what the pet is best used for.
        </p>
        <p>
          Pets are tied to <strong>skills</strong>: a Combat pet gains XP when
          you earn Combat XP, a Mining pet levels from Mining XP, and so on.
          This means your pet levels passively while you play the content it is
          associated with. Some pets (like the Golden Dragon) require an
          enormous amount of XP to max out, so plan accordingly.
        </p>
        <ul>
          <li>
            <strong>Rarity tiers:</strong> Common, Uncommon, Rare, Epic,
            Legendary, Mythic. Higher rarity = better stats and more perks.
          </li>
          <li>
            <strong>Active pet:</strong> Only one pet can be active at a time
            (unless you use autopet rules to swap automatically).
          </li>
          <li>
            <strong>Pet items:</strong> You can equip one pet item to modify or
            enhance a pet's abilities.
          </li>
          <li>
            <strong>Pet score:</strong> Owning unique pets at higher rarities
            grants permanent stat boosts via milestones.
          </li>
        </ul>
      </GuideSection>

      <DataTable
        title="Best Pets by Activity"
        description="Top pet choices for each major content type. Prices fluctuate with the market."
        columns={[
          { key: "pet", label: "Pet" },
          { key: "rarity", label: "Rarity" },
          { key: "bestFor", label: "Best For" },
          { key: "keyPerk", label: "Key Perk" },
          { key: "cost", label: "Approx Cost", align: "right" },
        ]}
        rows={[
          {
            pet: "Golden Dragon",
            rarity: "Legendary",
            bestFor: "Combat (end game)",
            keyPerk: "Huge stat boost scaling with gold collection; best raw combat stats in the game",
            cost: "2B-5B+",
          },
          {
            pet: "Ender Dragon",
            rarity: "Legendary",
            bestFor: "Combat (mid-late)",
            keyPerk: "Bonus damage in the End; strong all-around combat stats",
            cost: "30M-80M",
          },
          {
            pet: "Tiger",
            rarity: "Legendary",
            bestFor: "Combat (melee)",
            keyPerk: "Ferocity and strength boost; bonus damage on first hit per mob",
            cost: "15M-40M",
          },
          {
            pet: "Wither Skeleton",
            rarity: "Legendary",
            bestFor: "Combat (dungeons)",
            keyPerk: "Bonus damage to Withers; defense shred on hit",
            cost: "20M-60M",
          },
          {
            pet: "Elephant",
            rarity: "Legendary",
            bestFor: "Farming (crops)",
            keyPerk: "Farming fortune and extra crop drops based on speed",
            cost: "20M-50M",
          },
          {
            pet: "Rabbit",
            rarity: "Legendary",
            bestFor: "Farming (speed/farming fortune)",
            keyPerk: "Farming fortune per farming level; walk speed bonus",
            cost: "5M-15M",
          },
          {
            pet: "Bee",
            rarity: "Legendary",
            bestFor: "Farming (honey/early)",
            keyPerk: "Bonus intel and farming XP; good budget option",
            cost: "1M-5M",
          },
          {
            pet: "Bal",
            rarity: "Legendary",
            bestFor: "Mining (Magma Fields gems)",
            keyPerk: "Mining fortune and speed in lava areas; best with Bejeweled Collar",
            cost: "10M-30M",
          },
          {
            pet: "Scatha",
            rarity: "Legendary",
            bestFor: "Mining (general/worms)",
            keyPerk: "Mining fortune; chance to spawn Scatha worms for rare drops",
            cost: "80M-200M",
          },
          {
            pet: "Mithril Golem",
            rarity: "Legendary",
            bestFor: "Mining (early-mid)",
            keyPerk: "Mining speed and fortune; solid budget mining pet",
            cost: "2M-8M",
          },
          {
            pet: "Glacite Golem",
            rarity: "Legendary",
            bestFor: "Mining (Glacite Tunnels)",
            keyPerk: "Glacite mining fortune; bonus cold resistance",
            cost: "10M-40M",
          },
          {
            pet: "Flying Fish",
            rarity: "Legendary",
            bestFor: "Fishing (general)",
            keyPerk: "Sea creature chance; bonus fishing speed and defense in water",
            cost: "8M-25M",
          },
          {
            pet: "Ammonite",
            rarity: "Legendary",
            bestFor: "Fishing (end game)",
            keyPerk: "Sea creature chance based on fishing speed; extremely strong at high levels",
            cost: "50M-120M",
          },
          {
            pet: "Baby Yeti",
            rarity: "Legendary",
            bestFor: "Fishing (tank/combat)",
            keyPerk: "Massive defense and strength boost; great for tanking sea creatures",
            cost: "15M-40M",
          },
          {
            pet: "Sheep",
            rarity: "Legendary",
            bestFor: "Alchemy",
            keyPerk: "Intelligence and ability damage boost; Alchemy XP bonus",
            cost: "3M-10M",
          },
          {
            pet: "Jellyfish",
            rarity: "Legendary",
            bestFor: "Alchemy (healer)",
            keyPerk: "Heals nearby players; great for dungeon healer class",
            cost: "5M-15M",
          },
        ]}
        caption="Prices are approximate and change with updates and market shifts."
      />

      <GuideSection
        title="Pet Leveling"
        description="How to level pets efficiently and upgrade their rarity."
      >
        <h3 className="text-base font-semibold">XP Grinding</h3>
        <p>
          Pets gain XP from the skill they are associated with. The fastest way
          to level a <strong>Combat pet</strong> is to grind combat XP in areas
          like the Catacombs, Bestiary mobs, or slayer bosses. For{" "}
          <strong>Mining pets</strong>, commissions and powder grinding in the
          Dwarven Mines or Crystal Hollows work well. For{" "}
          <strong>Farming pets</strong>, farm crops with the pet equipped.
        </p>
        <p>
          The <strong>Grandma Wolf</strong> pet is a popular choice during any
          XP grind because its perk gives bonus pet XP to your active pet based
          on your combat kills. Some players also use the{" "}
          <strong>Textbook</strong> pet item for extra Intelligence while
          grinding Enchanting XP.
        </p>

        <h3 className="mt-4 text-base font-semibold">Kat Upgrades</h3>
        <p>
          <strong>Kat</strong> is an NPC in the Hub who can upgrade a pet's
          rarity for coins and time. The upgrade path goes: Common &rarr;
          Uncommon &rarr; Rare &rarr; Epic &rarr; Legendary. Each step costs
          more coins and takes longer. Upgrading from Epic to Legendary is
          particularly expensive (often 20M+ coins and 5+ days). Always compare
          the upgrade cost against just buying the higher-rarity pet from the
          Auction House.
        </p>
        <ul>
          <li>
            <strong>Common &rarr; Uncommon:</strong> Cheap and fast (~6 hours,
            a few hundred thousand coins).
          </li>
          <li>
            <strong>Uncommon &rarr; Rare:</strong> Moderate cost (~12 hours,
            ~500k-2M coins depending on pet).
          </li>
          <li>
            <strong>Rare &rarr; Epic:</strong> Gets expensive (~1 day, ~2M-10M
            coins).
          </li>
          <li>
            <strong>Epic &rarr; Legendary:</strong> Very expensive (~2-6 days,
            ~10M-30M+ coins).
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Autopet Rules</h3>
        <p>
          The <strong>Autopet</strong> system (unlocked through pet score
          milestones) lets you set rules that automatically swap your active pet
          based on conditions. For example: switch to your combat pet when you
          enter the Catacombs, or swap to your farming pet when you enter the
          Garden. You can stack multiple rules in priority order. This is
          incredibly useful for maximizing efficiency without manual swaps.
        </p>
      </GuideSection>

      <GuideSection
        title="Pet Items"
        description="Each pet can hold one pet item. Choosing the right one can significantly boost performance."
      >
        <ul>
          <li>
            <strong>Textbook:</strong> Grants bonus Intelligence based on the
            pet's level. Great for Enchanting XP and mage builds.
          </li>
          <li>
            <strong>Shelmet:</strong> Reduces incoming damage. Good for
            tank-oriented pets like Baby Yeti or Turtle.
          </li>
          <li>
            <strong>Lucky Clover:</strong> Increases Magic Find. Useful when
            grinding rare drops from mobs or slayer bosses.
          </li>
          <li>
            <strong>Bejeweled Collar:</strong> Adds Mining Fortune and Mining
            Speed. Best in slot for Bal in Magma Fields and general mining pets.
          </li>
          <li>
            <strong>Quick Claw:</strong> Grants bonus attack speed and
            ferocity. Top pick for combat pets like Golden Dragon, Tiger, and
            Wither Skeleton. Standard endgame combat pet item.
          </li>
          <li>
            <strong>Antique Remedies:</strong> Adds extra pet XP gain. Great
            for leveling new pets faster.
          </li>
          <li>
            <strong>Minos Relic:</strong> Adds bonus Magic Find. An
            alternative to Lucky Clover that also gives strength.
          </li>
          <li>
            <strong>Green Bandana:</strong> Adds Farming Fortune. The go-to
            pet item for farming pets like Elephant and Rabbit.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="warning" title="Golden Dragon Reality Check">
        <p>
          Golden Dragon is the single strongest pet in the game but costs{" "}
          <strong>billions of coins</strong> and requires leveling to{" "}
          <strong>Level 200</strong> (which takes an enormous amount of XP).
          Don't rush it. A Legendary Ender Dragon or Tiger will carry you
          through 95% of combat content at a fraction of the price. Only invest
          in Golden Dragon when you have the funds and are pushing true endgame.
        </p>
      </TipCallout>

      <TipCallout type="tip" title="Pet Score Matters More Than You Think">
        <p>
          Pet score milestones give <strong>permanent stat boosts</strong> to
          your profile. Unique pets at higher rarities give more points.
          Collecting cheap Common/Uncommon pets you don't use still counts toward
          milestones. It's one of the most overlooked free stat upgrades in the
          game.
        </p>
      </TipCallout>

      <DataTable
        title="Pet Score Milestones"
        description="Rewards for collecting unique pets. Points are based on pet rarity: Common = 1, Uncommon = 2, Rare = 3, Epic = 4, Legendary = 5, Mythic = 6."
        columns={[
          { key: "milestone", label: "Unique Pets", align: "center" },
          { key: "reward", label: "Reward" },
          { key: "notes", label: "Notes" },
        ]}
        rows={[
          {
            milestone: "10",
            reward: "Autopet (1 rule slot)",
            notes: "Unlocks the autopet system. Huge QoL improvement.",
          },
          {
            milestone: "25",
            reward: "+1 Magic Find",
            notes: "Permanent MF boost; helps with rare drops everywhere.",
          },
          {
            milestone: "50",
            reward: "+1 Magic Find, +1 Autopet rule slot",
            notes: "Another free MF point and more autopet flexibility.",
          },
          {
            milestone: "75",
            reward: "+2 Magic Find",
            notes: "Significant MF boost. Stack with Lucky Clover for best results.",
          },
          {
            milestone: "100",
            reward: "+2 Magic Find, +1 Autopet rule slot",
            notes: "Third autopet rule slot. Most active players aim for this.",
          },
          {
            milestone: "130",
            reward: "+3 Magic Find",
            notes: "Harder to reach; requires a diverse pet collection.",
          },
          {
            milestone: "150",
            reward: "+3 Magic Find, +1 Autopet rule slot",
            notes: "Fourth autopet rule slot. Dedicated collectors' goal.",
          },
          {
            milestone: "175",
            reward: "+4 Magic Find",
            notes: "Requires significant investment in unique pets.",
          },
        ]}
        caption="Higher rarity pets contribute more score. A Legendary pet is worth 5 points vs 1 for Common."
      />

      <AccordionSection
        title="Frequently Asked Questions"
        description="Common questions about the pet system."
        items={[
          {
            question: "What is pet score and why does it matter?",
            answer: (
              <p>
                Pet score is a measure of how many unique pets you own and at
                what rarity. Each unique pet adds points based on its highest
                rarity (Common = 1, Uncommon = 2, up to Mythic = 6). Reaching
                milestones gives{" "}
                <strong>permanent Magic Find boosts</strong> and{" "}
                <strong>autopet rule slots</strong>. It is one of the best
                passive stat improvements you can get.
              </p>
            ),
          },
          {
            question: "Should I upgrade rarity with Kat or buy directly?",
            answer: (
              <p>
                Always compare Kat's upgrade cost (coins + wait time) against
                the Auction House price of the higher-rarity pet. For common
                pets, Kat is usually cheaper. For popular pets like Ender
                Dragon or Golden Dragon, buying directly from the AH is often
                better. The Epic &rarr; Legendary upgrade in particular can be
                very expensive through Kat, sometimes costing more than just
                buying the Legendary version outright.
              </p>
            ),
          },
          {
            question: "What is the best all-around combat pet?",
            answer: (
              <p>
                For most players, the{" "}
                <strong>Legendary Ender Dragon</strong> is the best value. It
                provides strong stat bonuses, bonus damage in the End, and is
                useful across most combat content. For dungeons specifically,
                the <strong>Wither Skeleton</strong> is often preferred due to
                its Wither damage bonus. The <strong>Golden Dragon</strong> is
                the undisputed best but costs billions and takes forever to
                level to 200.
              </p>
            ),
          },
          {
            question: "How does autopet work?",
            answer: (
              <p>
                Autopet lets you create rules like "When I enter the Garden,
                equip my Elephant pet" or "When I enter the Catacombs, equip
                my Wither Skeleton." You unlock the first rule slot at{" "}
                <strong>10 pet score</strong> and gain additional slots at
                higher milestones. Rules are evaluated in priority order from
                top to bottom. You can set conditions based on location, item
                held, or activity. Access autopet settings through the pet menu.
              </p>
            ),
          },
          {
            question: "What is the fastest way to level a pet?",
            answer: (
              <p>
                It depends on the pet's skill type. For <strong>Combat pets</strong>,
                grinding Catacombs floors or enderman slayer gives massive XP.
                For <strong>Mining pets</strong>, commissions and mining in the
                Crystal Hollows or Glacite Tunnels. Using the{" "}
                <strong>Grandma Wolf</strong> pet perk (on an alt pet setup) or{" "}
                <strong>Antique Remedies</strong> pet item can speed up leveling.
                There are also pet XP boost items from events.
              </p>
            ),
          },
        ]}
      />

      <ResourceLinks
        title="Useful Links"
        description="External resources for pet information and tools."
        links={[
          {
            title: "SkyCrypt (Pets Tab)",
            description:
              "View your pet collection, levels, pet score, and equipped items.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "Hypixel Wiki: Pets",
            description:
              "Full list of pets, stats per level, perks, and pet items.",
            href: "https://wiki.hypixel.net/Pets",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Pet Score",
            description:
              "All milestones, point values per rarity, and rewards.",
            href: "https://wiki.hypixel.net/Pet_Score",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Kat",
            description:
              "Upgrade costs, timers, and requirements for each rarity tier.",
            href: "https://wiki.hypixel.net/Kat",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="YouTube Searches"
        description="Sort by upload date for the latest meta."
        links={[
          {
            title: "Best Pets Tier List",
            description:
              "Search: best pets tier list SkyBlock 2025/2026.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+best+pets+tier+list",
            tag: "YouTube",
          },
          {
            title: "Pet Leveling Guide",
            description:
              "Search: fastest pet leveling methods, XP grinding.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+pet+leveling+guide+fast",
            tag: "YouTube",
          },
          {
            title: "Pet Score Guide",
            description:
              "Search: cheapest pets for pet score milestones.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+pet+score+guide+cheap+pets",
            tag: "YouTube",
          },
          {
            title: "Best Pet Items",
            description:
              "Search: which pet items to use, pet item tier list.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+best+pet+items+guide",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
