import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { ProgressPath } from "../../components/progress-path";
import { AccordionSection } from "../../components/accordion-section";

export default function SkillsPage() {
  return (
    <DocsLayout
      title="Skills Overview"
      description="Every skill in Hypixel SkyBlock, how to level them efficiently, milestone rewards, and which ones to prioritize at each stage of the game."
    >
      {/* ─── Overview ─── */}
      <GuideSection title="What are skills?">
        <p>
          Skills are the backbone of your SkyBlock profile. Every major activity
          you do — mining ores, slaying mobs, farming crops, catching fish —
          earns XP in a corresponding skill. Higher skill levels unlock stat
          bonuses, abilities, and recipe access. Your <strong>Skill Average</strong>{" "}
          (the mean of all skill levels) is the single most-used measure of
          overall account progression.
        </p>
        <p>
          There are <strong>12 skills</strong> in total. Most cap at{" "}
          <strong>Level 60</strong>, while a few (Runecrafting, Social,
          Carpentry) have lower effective caps or different XP curves. The XP
          required per level scales exponentially, so the jump from 50 to 60 is
          far bigger than 1 to 50.
        </p>
      </GuideSection>

      <GuideSection
        title="All 12 skills at a glance"
        description="A quick reference for what each skill does and how you earn XP."
      >
        <ul>
          <li>
            <strong>Combat</strong> — Kill mobs. Grants Crit Damage. Essential
            for Slayers, Dungeons, and general clearing.
          </li>
          <li>
            <strong>Mining</strong> — Break ores and hard stone. Grants Defense.
            Unlocks Heart of the Mountain progression.
          </li>
          <li>
            <strong>Farming</strong> — Harvest crops. Grants Health. Core for
            Garden and contest-based money making.
          </li>
          <li>
            <strong>Foraging</strong> — Chop wood. Grants Strength. Relatively
            low-impact but easy to level in the Park.
          </li>
          <li>
            <strong>Fishing</strong> — Catch fish and sea creatures. Grants
            Health. Strong money maker at higher levels.
          </li>
          <li>
            <strong>Enchanting</strong> — Use the Experimentation Table. Grants
            Intelligence. Passive XP through daily experiments.
          </li>
          <li>
            <strong>Alchemy</strong> — Brew potions. Grants Intelligence. Can be
            leveled fast by mass-brewing Speed V potions.
          </li>
          <li>
            <strong>Taming</strong> — Earn XP while a pet is active. Grants Pet
            Luck. Levels passively as you play with any pet equipped.
          </li>
          <li>
            <strong>Carpentry</strong> — Craft items on the crafting grid. Caps
            at Level 50. Grants no direct stat, but increases your{" "}
            <strong>Skill Average</strong>.
          </li>
          <li>
            <strong>Runecrafting</strong> — Combine runes at the Runic Pedestal.
            Caps at Level 25. Grants no stat; mostly cosmetic.
          </li>
          <li>
            <strong>Social</strong> — Gain XP when visiting other players'
            islands. Caps at Level 25. Very slow to grind.
          </li>
          <li>
            <strong>Dungeoneering</strong> — Complete Dungeon runs. Tracked via
            Catacombs Level and class levels. Grants stat boosts inside
            Dungeons.
          </li>
        </ul>
      </GuideSection>

      {/* ─── XP Methods Table ─── */}
      <DataTable
        title="Best XP methods per skill"
        description="Approximate rates assume mid-to-late game gear. Early game rates will be lower."
        columns={[
          { key: "skill", label: "Skill" },
          { key: "method", label: "Method" },
          { key: "xphr", label: "Approx XP/hr", align: "right" },
          { key: "notes", label: "Notes" },
        ]}
        rows={[
          {
            skill: "Combat",
            method: "Bestiary grinding (Endermen / Blaze)",
            xphr: "3-6M",
            notes: "Voidgloom or T4 Blaze with Combat XP boost",
          },
          {
            skill: "Mining",
            method: "Glacite Tunnels commissions",
            xphr: "1-3M",
            notes: "Also gives HotM XP and Glacite Powder",
          },
          {
            skill: "Farming",
            method: "Pumpkin / Melon / Cane (Garden)",
            xphr: "2-5M",
            notes: "Depends on garden level, crop, and Fermento armor",
          },
          {
            skill: "Foraging",
            method: "2x2 Dark Oak (Park)",
            xphr: "500K-1.5M",
            notes: "Treecapitator required; Foraging is slow overall",
          },
          {
            skill: "Fishing",
            method: "Lava fishing (Crimson Isle)",
            xphr: "1-3M",
            notes: "Magma Rod + Slug pet; also good income",
          },
          {
            skill: "Enchanting",
            method: "Experimentation Table (daily)",
            xphr: "~800K/run",
            notes: "Limited by daily experiments; do Metaphysical Serum",
          },
          {
            skill: "Alchemy",
            method: "Mass-brew Speed V potions",
            xphr: "2-4M",
            notes: "Cheap, fast — can hit 50 in a few hours",
          },
          {
            skill: "Taming",
            method: "Passive (any pet equipped)",
            xphr: "Varies",
            notes: "Levels alongside other skills; no dedicated method",
          },
          {
            skill: "Carpentry",
            method: "Craft items on workbench",
            xphr: "~500K-1M",
            notes: "Level by crafting Minion upgrades or enchanted blocks",
          },
          {
            skill: "Runecrafting",
            method: "Combine runes (Runic Pedestal)",
            xphr: "~100K",
            notes: "Very slow; caps at 25 — low priority",
          },
          {
            skill: "Social",
            method: "Visit player islands",
            xphr: "~50K",
            notes: "Caps at 25; slow and largely passive",
          },
          {
            skill: "Dungeoneering",
            method: "Floor 7 / Master Mode runs",
            xphr: "1-5M",
            notes: "XP scales with floor and score; party matters",
          },
        ]}
        caption="Rates vary based on gear, pets, and boosts. Use Derpy mayor for +50% Skill XP."
      />

      {/* ─── Milestone Timeline ─── */}
      <GuideSection
        title="Skill milestones & what they unlock"
        description="These are the levels that actually change what you can do."
      >
        <ProgressPath
          steps={[
            {
              title: "Level 25 — Recipe unlocks & early stat boost",
              description:
                "Most skill-gated recipes unlock by 25. You gain meaningful base stats (+25 in the skill's stat). Farming 25 unlocks key Garden upgrades. Combat 25 is enough for Revenant T4.",
              status: "complete",
            },
            {
              title: "Level 35 — Mid-game breakpoint",
              description:
                "Stat bonuses become significant. Mining 35+ helps with Crystal Hollows. Combat 35 lets you comfortably farm Voidgloom T3. Most Slayer recipes need skill levels in this range.",
              status: "complete",
            },
            {
              title: "Level 50 — Major milestone",
              description:
                "This is where the XP curve steepens dramatically. Farming 50 is a key Garden goal. Combat 50 unlocks endgame Slayer viability. Alchemy 50 is easy and boosts Skill Average cheaply. You unlock the final stat reward tier at 50.",
              status: "current",
            },
            {
              title: "Level 55 — Late-game grind",
              description:
                "Mostly for Skill Average. The XP gap from 50 to 55 is enormous — focus on skills that give you something (Farming for Garden, Mining for powder efficiency, Combat for damage).",
              status: "upcoming",
            },
            {
              title: "Level 60 — Maximum (for most skills)",
              description:
                "The cap for Combat, Mining, Farming, Foraging, Fishing, Enchanting, and Alchemy. Reaching 60 in any skill is a serious time investment. Overflow XP still counts toward Skill Average past this point.",
              status: "upcoming",
            },
          ]}
        />
      </GuideSection>

      {/* ─── Callouts ─── */}
      <TipCallout type="tip" title="Overflow XP counts">
        <p>
          Skill XP earned past the maximum level still counts toward your{" "}
          <strong>Skill Average</strong>. This means grinding a skill you enjoy
          (even at 60) still improves your SA — which matters for certain
          unlocks, guild requirements, and profile prestige. SkyCrypt shows
          overflow XP on your profile.
        </p>
      </TipCallout>

      <TipCallout type="warning" title="Don't spread too thin early on">
        <p>
          It is tempting to level every skill evenly. <strong>Don't.</strong>{" "}
          Pick <strong>2-3 skills</strong> that align with your current goals and
          focus there. For example: Combat + Farming if you're doing Slayers and
          Garden, or Mining + Combat if you're pushing Dungeons and Crystal
          Hollows. The early levels of neglected skills are fast to catch up on
          later.
        </p>
      </TipCallout>

      {/* ─── Which skills matter most ─── */}
      <GuideSection
        title="Which skills matter most?"
        description="Not all skills are created equal. Here's what to prioritize based on your focus."
      >
        <h3 className="text-base font-semibold">Combat</h3>
        <p>
          The most universally important skill. Higher Combat level means more{" "}
          <strong>Crit Damage</strong>, which scales your damage output directly.
          Required for Slayer boss tiers, Dungeon performance, and general mob
          farming. If you only level one skill, make it Combat.
        </p>

        <h3 className="mt-4 text-base font-semibold">Farming</h3>
        <p>
          Critical if you're investing in the <strong>Garden</strong>. Farming
          level affects your farming fortune, crop contest scores, and unlocks
          key Garden milestones. It's also one of the most reliable money makers
          with maxed crops.
        </p>

        <h3 className="mt-4 text-base font-semibold">Mining</h3>
        <p>
          Needed for <strong>Heart of the Mountain</strong> progression. Higher
          Mining level grants Defense (useful in early game) and is required for
          some HotM perks. The real value is indirect — mining skills unlock
          powder farming, gem mining, and Glacite Tunnels content.
        </p>

        <h3 className="mt-4 text-base font-semibold">Enchanting & Alchemy</h3>
        <p>
          Both give <strong>Intelligence</strong>, which matters for Mage builds
          and ability damage. More importantly, they're{" "}
          <strong>easy to level</strong> — Alchemy can be speed-leveled in a few
          hours, and Enchanting gives daily passive XP through the
          Experimentation Table. Level these for cheap Skill Average gains.
        </p>

        <h3 className="mt-4 text-base font-semibold">Fishing</h3>
        <p>
          Underrated money maker. Lava fishing on the Crimson Isle with proper
          gear can earn <strong>20-40M/hr</strong> while also leveling Fishing.
          The skill itself grants Health. Worth investing in if you enjoy the
          playstyle.
        </p>

        <h3 className="mt-4 text-base font-semibold">Lower Priority</h3>
        <p>
          <strong>Foraging</strong> is slow and grants Strength (which has
          diminishing returns at high values). <strong>Runecrafting</strong> and{" "}
          <strong>Social</strong> cap at 25 and give minimal benefit.{" "}
          <strong>Carpentry</strong> caps at 50 and is mainly for SA padding.{" "}
          <strong>Taming</strong> levels passively — never grind it directly.
        </p>
      </GuideSection>

      {/* ─── Tips for leveling ─── */}
      <GuideSection
        title="General leveling tips"
        description="Strategies that apply across most skills."
      >
        <ul>
          <li>
            <strong>Use Derpy mayor</strong> — Derpy gives{" "}
            <strong>+50% Skill XP</strong> for all skills during his election.
            This is the single biggest XP boost available. Plan your grind
            sessions around Derpy.
          </li>
          <li>
            <strong>Skill XP boost potions</strong> — Brew or buy{" "}
            <strong>Skill XP Boost III</strong> potions for a +20% boost. Stacks
            with Derpy.
          </li>
          <li>
            <strong>Pet perks</strong> — Some pets grant bonus Skill XP. The{" "}
            <strong>Dolphin</strong> pet boosts Fishing XP, the{" "}
            <strong>Mooshroom Cow</strong> boosts Farming XP, and the{" "}
            <strong>Guardian</strong> pet boosts Enchanting XP.
          </li>
          <li>
            <strong>Cookie Buff</strong> — The Booster Cookie from the Bazaar
            grants +25 Magic Find and access to the Bits shop, where you can buy
            useful items including{" "}
            <strong>God Potion</strong> for all potion effects at once.
          </li>
          <li>
            <strong>Wisdom enchantments</strong> — Armor enchantments like{" "}
            <strong>Experience IV</strong> and{" "}
            <strong>Compact / Cultivating / Expertise</strong> on tools grant
            passive XP over time.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="info" title="Skill Average and profiles">
        <p>
          Your Skill Average is calculated across all skills, weighted equally.
          On SkyCrypt, you can see your "true" SA which includes overflow. Many
          guilds and party finders use SA as a quick competence check. A{" "}
          <strong>SA of 40+</strong> is generally considered mid-game,{" "}
          <strong>50+</strong> is late-game, and <strong>55+</strong> is
          endgame territory.
        </p>
      </TipCallout>

      {/* ─── FAQ ─── */}
      <AccordionSection
        title="Frequently asked questions"
        description="Common questions about skills and leveling."
        items={[
          {
            question: "Which skill should I level first?",
            answer: (
              <p>
                <strong>Combat</strong> is almost always the best first pick. It
                directly increases your damage output through Crit Damage, and
                you need it for Slayers and Dungeons. After Combat, choose based
                on your goals: <strong>Farming</strong> if you want Garden
                income, <strong>Mining</strong> if you want Crystal Hollows
                access, or <strong>Alchemy</strong> if you want a quick and cheap
                SA boost (you can hit Alchemy 50 in a few hours by brewing Speed
                V potions).
              </p>
            ),
          },
          {
            question: "Does Skill Average actually matter?",
            answer: (
              <p>
                Yes, but indirectly. SA doesn't give direct stats — it's a{" "}
                <strong>reputation metric</strong>. Guilds use it to evaluate
                applicants, party finders use it to filter players, and it's a
                general indicator of progression. Some features may gate behind
                cumulative skill requirements. At minimum, aim for{" "}
                <strong>SA 40</strong> by mid-game and <strong>SA 50+</strong> by
                late-game. The quickest SA boosts come from leveling
                underleveled skills (Alchemy, Carpentry, Enchanting).
              </p>
            ),
          },
          {
            question: "How does overflow XP work?",
            answer: (
              <p>
                Once a skill hits its cap (usually 60), any additional XP is
                stored as <strong>overflow XP</strong>. This overflow counts
                toward your "true" Skill Average shown on SkyCrypt. For example,
                if you have 100M overflow in Combat, that might add 0.5-1.0 to
                your displayed SA. Overflow is tracked per skill and there is no
                upper limit. This means grinding your favorite skill past 60
                still has measurable benefit.
              </p>
            ),
          },
          {
            question: "Best way to level Combat?",
            answer: (
              <p>
                The fastest Combat XP comes from killing high-XP mobs
                efficiently. <strong>Enderman Slayer</strong> (Voidgloom
                Seraphim) and <strong>Blaze Slayer</strong> are among the best.
                For less gear-intensive options, grind{" "}
                <strong>Zealots in the End</strong> or{" "}
                <strong>Crypt Ghouls in the Hub</strong>. In mid-game, running{" "}
                <strong>Dungeons (Floor 6-7)</strong> gives solid Combat XP
                alongside Dungeoneering XP. Always use a{" "}
                <strong>Combat XP boost potion</strong> and grind during{" "}
                <strong>Derpy</strong> for maximum efficiency.
              </p>
            ),
          },
          {
            question: "Should I level Runecrafting and Social?",
            answer: (
              <p>
                Only if you care about maximizing your Skill Average. Both cap
                at <strong>Level 25</strong> and contribute to SA. Runecrafting
                is tedious but can be done passively by buying cheap runes.
                Social requires visiting other islands (use the hub). Neither
                gives meaningful stats. Level them last, or ignore them entirely
                unless you're chasing a specific SA number.
              </p>
            ),
          },
          {
            question: "What is the Experimentation Table?",
            answer: (
              <p>
                The Experimentation Table is found in your SkyBlock menu (or on
                your island). It lets you play a daily mini-game (matching pairs
                or clicking a sequence) for <strong>Enchanting XP</strong> and
                rewards like Grand Experience Bottles, Titanic Bottles, or
                Metaphysical Serums. The{" "}
                <strong>Superpairs</strong> experiment gives the most XP. This is
                the primary way to level Enchanting — you should do it every day.
                Metaphysical Serum can be used for extra attempts.
              </p>
            ),
          },
        ]}
      />

      {/* ─── Resource Links ─── */}
      <ResourceLinks
        title="Useful links"
        description="Tools and references for tracking and optimizing skills."
        links={[
          {
            title: "SkyCrypt",
            description: "View your skill levels, overflow XP, and Skill Average.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "Hypixel Wiki: Skills",
            description: "Full skill list, XP tables, and stat rewards per level.",
            href: "https://wiki.hypixel.net/Skills",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Experimentation Table",
            description: "Daily experiment rewards and Enchanting XP guide.",
            href: "https://wiki.hypixel.net/Experimentation_Table",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Catacombs",
            description: "Dungeoneering XP, floors, score requirements.",
            href: "https://wiki.hypixel.net/The_Catacombs",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="YouTube searches"
        description="Click a search and sort by upload date — the meta changes often."
        links={[
          {
            title: "Fastest Skill Average guide",
            description: "Search: how to raise skill average fast.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+fastest+skill+average+guide",
            tag: "YouTube",
          },
          {
            title: "Combat XP farming",
            description: "Search: best combat xp methods 2025/2026.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+best+combat+xp+methods",
            tag: "YouTube",
          },
          {
            title: "Alchemy 50 speed guide",
            description: "Search: fastest alchemy 50 method.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+fastest+alchemy+50",
            tag: "YouTube",
          },
          {
            title: "Enchanting leveling",
            description: "Search: experimentation table guide, enchanting XP.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+experimentation+table+enchanting+xp+guide",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
