import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { ProgressPath } from "../../components/progress-path";
import { AccordionSection } from "../../components/accordion-section";

export default function CrimsonIslePage() {
  return (
    <DocsLayout
      title="Crimson Isle"
      description="The Nether-themed endgame zone in Hypixel SkyBlock. Unlock factions, grind reputation, complete the Dojo, and prepare for Kuudra."
    >
      <GuideSection title="Overview">
        <p>
          The <strong>Crimson Isle</strong> is the Nether area of SkyBlock,
          unlocked once you reach <strong>Combat Level 24</strong>. It
          introduces a faction-based reputation system, daily quests, the Dojo
          combat challenges, and the Kuudra boss fight. This zone is a major
          milestone for mid-to-late game players and serves as the gateway to
          some of the most profitable endgame content.
        </p>
        <p>
          Your primary goal on the Crimson Isle is to{" "}
          <strong>build reputation</strong> with your chosen faction. Reputation
          unlocks higher Kuudra tiers, better gear, and exclusive NPCs. Almost
          everything you do here (quests, the Dojo, minibosses) feeds into that
          reputation grind.
        </p>
        <ul>
          <li>
            <strong>Combat Level 24</strong> required to enter the island.
          </li>
          <li>
            <strong>Choose a faction</strong> (Mage or Barbarian) early on -
            this shapes your daily quests and progression path.
          </li>
          <li>
            <strong>Reputation</strong> is the core currency of progression
            here - everything revolves around it.
          </li>
          <li>
            <strong>Kuudra</strong> is the endgame boss, unlocked through
            reputation milestones.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Faction choice: Mage vs. Barbarian"
        description="Your first big decision on the Crimson Isle. Both factions lead to the same endgame, but the path differs."
      >
        <h3 className="text-base font-semibold">Mage Faction</h3>
        <p>
          The Mage faction is generally considered the <strong>easier and
          faster</strong> route for reputation grinding. Mage quests tend to be
          simpler fetch/interact tasks rather than combat encounters. You do not
          need to fight faction bosses to earn reputation, which makes daily
          progress more consistent and less gear-dependent.
        </p>
        <ul>
          <li>
            <strong>Quest style:</strong> Puzzle-oriented, collection tasks,
            NPC interactions.
          </li>
          <li>
            <strong>Reputation pace:</strong> Faster overall due to lower
            difficulty quests.
          </li>
          <li>
            <strong>Best for:</strong> Players who want efficient rep grinding,
            newer players, or those without top-tier combat gear.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Barbarian Faction</h3>
        <p>
          The Barbarian faction is <strong>combat-focused</strong>. Quests
          involve fighting minibosses, completing combat challenges, and
          surviving waves of mobs. The reputation grind is slower and more
          gear-dependent, but some players prefer the combat gameplay loop.
        </p>
        <ul>
          <li>
            <strong>Quest style:</strong> Combat encounters, miniboss kills,
            survival challenges.
          </li>
          <li>
            <strong>Reputation pace:</strong> Slower, requires better gear to
            complete efficiently.
          </li>
          <li>
            <strong>Best for:</strong> Players who enjoy combat and already have
            strong gear.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="tip" title="Faction recommendation">
        <p>
          <strong>Mage faction is generally easier and faster for reputation
          grinding.</strong> Unless you specifically enjoy combat-style quests
          and already have strong gear, Mage is the recommended choice for most
          players.
        </p>
      </TipCallout>

      <TipCallout type="warning" title="Switching factions">
        <p>
          <strong>Switching factions resets half your reputation.</strong> You
          can change factions later by talking to the respective faction NPC,
          but you will lose 50% of your accumulated reputation. Choose
          carefully from the start to avoid wasting days of progress.
        </p>
      </TipCallout>

      <GuideSection title="Reputation progression">
        <p>
          Reputation is earned through daily quests, the Dojo, miniboss kills,
          and various activities on the island. Each milestone unlocks new
          content, NPCs, and Kuudra tiers. The grind from 0 to 12,000 takes
          most players <strong>2-4 weeks</strong> of consistent daily play.
        </p>
      </GuideSection>

      <ProgressPath
        steps={[
          {
            title: "Neutral (0 Reputation)",
            description:
              "Starting rank. Access to basic Crimson Isle content, faction choice, and introductory quests.",
            status: "complete",
          },
          {
            title: "Trusted (1,000 Reputation)",
            description:
              "Unlocks Kuudra Basic (T1) and Hot (T2). Access to faction-specific shops and some NPCs.",
            status: "current",
          },
          {
            title: "Devoted (3,000 Reputation)",
            description:
              "Unlocks Kuudra Burning (T3). Access to higher-tier faction quests and additional daily quest slots.",
            status: "upcoming",
          },
          {
            title: "Honored (7,000 Reputation)",
            description:
              "Unlocks Kuudra Fiery (T4). This is where real profit starts. Access to exclusive faction rewards.",
            status: "upcoming",
          },
          {
            title: "Max Reputation (12,000)",
            description:
              "Unlocks Kuudra Infernal (T5), the hardest and most profitable tier. Full access to all Crimson Isle content.",
            status: "upcoming",
          },
        ]}
      />

      <GuideSection
        title="Daily quests"
        description="Your primary source of reputation. Completing these consistently is the fastest way to max out."
      >
        <p>
          Each day you receive a set of faction-specific quests. Completing all
          available daily quests is the single most important thing you can do
          for reputation progress. Some quests are faster and easier than
          others.
        </p>
        <h3 className="text-base font-semibold">Best quests to prioritize</h3>
        <ul>
          <li>
            <strong>Rescue missions:</strong> Fast and straightforward. Find
            the NPC, interact, done. These are among the quickest reputation
            sources.
          </li>
          <li>
            <strong>Trophy fishing:</strong> If you have a fishing setup, these
            quests give good reputation for relatively passive gameplay. See
            the <a href="/fishing" className="text-hypixel-gold underline">Fishing</a> page for
            gear advice.
          </li>
          <li>
            <strong>Miniboss kills:</strong> Killing Crimson Isle minibosses
            (Ashfang, Bladesoul, etc.) gives reputation. Requires decent combat
            gear but is a solid supplement to quests.
          </li>
        </ul>
        <h3 className="mt-4 text-base font-semibold">Tips for efficiency</h3>
        <ul>
          <li>
            Do your dailies <strong>every single day</strong>. Skipping days
            extends the grind significantly.
          </li>
          <li>
            Some quests can be completed in parallel - check all active quests
            before heading out.
          </li>
          <li>
            Mage faction quests are generally faster than Barbarian quests, so
            Mage players often finish dailies in 15-20 minutes.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="The Dojo"
        description="Seven combat challenges that test different skills. Required for reputation milestones."
      >
        <p>
          The Dojo is a series of <strong>7 challenges</strong>, each testing a
          different combat skill. Completing Dojo challenges awards reputation
          based on your performance rank (D through S). You need to pass these
          for certain reputation milestones and quest completions.
        </p>
        <p>
          Each challenge can be attempted as many times as you want, and your
          best score is saved. Aim for at least <strong>rank B or A</strong> on
          each challenge - S rank is nice but not required for progression.
        </p>
        <ul>
          <li>
            Practice each challenge a few times before worrying about your
            score.
          </li>
          <li>
            Some challenges are significantly easier with specific gear or
            abilities.
          </li>
          <li>
            The Dojo resets periodically, so you can improve your scores over
            time.
          </li>
        </ul>
      </GuideSection>

      <DataTable
        title="Dojo challenges overview"
        description="All 7 Dojo challenges with their type and tips for clearing them."
        columns={[
          { key: "name", label: "Challenge" },
          { key: "type", label: "Type" },
          { key: "tips", label: "Tips" },
        ]}
        rows={[
          {
            name: "Test of Force",
            type: "Damage output",
            tips: "Use your highest DPS weapon. Wither Impact (Hyperion) trivializes this. Stack strength and crit damage.",
          },
          {
            name: "Test of Stamina",
            type: "Survival",
            tips: "Focus on healing and damage reduction. Wand of Atonement or Holy Dragon Armor helps. Avoid taking unnecessary hits.",
          },
          {
            name: "Test of Mastery",
            type: "Mob clearing",
            tips: "Kill mobs quickly before they overwhelm you. AoE weapons like Hyperion or Midas Staff work well.",
          },
          {
            name: "Test of Discipline",
            type: "Precision combat",
            tips: "Hit only the correct colored mobs. Take your time to avoid penalties. Slower but accurate wins here.",
          },
          {
            name: "Test of Swiftness",
            type: "Speed / movement",
            tips: "Use speed-boosting gear and abilities. Young Dragon Armor, AOTE, or Hyperion warp for movement.",
          },
          {
            name: "Test of Tenacity",
            type: "Endurance",
            tips: "Survive as long as possible against increasing damage. Prioritize defense, healing, and damage mitigation.",
          },
          {
            name: "Test of Control",
            type: "Target selection",
            tips: "Carefully follow instructions about which targets to hit. Patience is key - rushing leads to mistakes.",
          },
        ]}
        caption="Aim for at least rank B on each challenge for good reputation gains."
      />

      <GuideSection
        title="Kuudra introduction"
        description="The endgame boss of the Crimson Isle. Your reputation grind leads here."
      >
        <p>
          <strong>Kuudra</strong> is a 4-player boss fight with 5 difficulty
          tiers, each requiring a higher reputation level to access. It is the
          primary endgame money-making content of the Crimson Isle and one of
          the most profitable activities in SkyBlock once you reach Tier 4
          (Fiery) and above.
        </p>
        <ul>
          <li>
            <strong>Party-based:</strong> You need a team of 4 players with
            defined roles (Mage, DPS, Tank, Healer).
          </li>
          <li>
            <strong>Gear requirements</strong> scale steeply with each tier.
            Basic (T1) is accessible with mid-game gear, but Infernal (T5)
            demands fully maxed setups.
          </li>
          <li>
            <strong>Profit</strong> starts becoming significant at Tier 4
            (Fiery), with Tier 5 (Infernal) being the most lucrative.
          </li>
          <li>
            <strong>Crimson armor attributes</strong> drop from Kuudra and are
            a major part of the loot system.
          </li>
        </ul>
        <p>
          For a full breakdown of tiers, gear, roles, and fight mechanics, see
          the dedicated{" "}
          <a href="/kuudra" className="text-hypixel-gold underline">
            Kuudra guide
          </a>
          .
        </p>
      </GuideSection>

      <AccordionSection
        title="Frequently asked questions"
        description="Common questions about the Crimson Isle."
        items={[
          {
            question: "Which faction is better?",
            answer: (
              <p>
                <strong>Mage faction</strong> is better for most players. The
                quests are faster, less gear-dependent, and the overall
                reputation grind is smoother. Barbarian is viable if you prefer
                combat-focused gameplay and already have strong gear, but it
                takes longer on average. Both factions give access to the same
                endgame content (Kuudra, shops, etc.).
              </p>
            ),
          },
          {
            question: "Can I switch factions?",
            answer: (
              <p>
                Yes, but it costs you <strong>50% of your current
                reputation</strong>. Talk to the opposite faction&apos;s NPC to
                switch. This is generally not recommended unless you are very
                early in the reputation grind (under 1,000 rep). If you are
                already past Trusted rank, switching will set you back
                significantly.
              </p>
            ),
          },
          {
            question: "How long does it take to max reputation?",
            answer: (
              <p>
                With consistent daily quest completion, most players reach
                12,000 reputation in <strong>2-4 weeks</strong>. Mage faction
                players tend to finish closer to the 2-week mark since their
                quests are faster. Skipping days or failing to complete all
                dailies can extend this to a month or more. The Dojo and
                miniboss kills supplement your daily reputation gains.
              </p>
            ),
          },
          {
            question: "What unlocks at each reputation level?",
            answer: (
              <div>
                <ul>
                  <li>
                    <strong>Trusted (1,000):</strong> Kuudra Basic and Hot
                    tiers, faction shop access, additional daily quests.
                  </li>
                  <li>
                    <strong>Devoted (3,000):</strong> Kuudra Burning tier,
                    higher-tier quests, more NPC options.
                  </li>
                  <li>
                    <strong>Honored (7,000):</strong> Kuudra Fiery tier
                    (where profits start), exclusive faction rewards.
                  </li>
                  <li>
                    <strong>Max (12,000):</strong> Kuudra Infernal tier (most
                    profitable), full access to all Crimson Isle content and
                    rewards.
                  </li>
                </ul>
              </div>
            ),
          },
        ]}
      />

      <ResourceLinks
        title="Essential references"
        links={[
          {
            title: "Hypixel Wiki: Crimson Isle",
            description:
              "Full reference for quests, NPCs, mobs, and mechanics.",
            href: "https://wiki.hypixel.net/Crimson_Isle",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Kuudra",
            description: "Detailed Kuudra boss mechanics and loot tables.",
            href: "https://wiki.hypixel.net/Kuudra",
            tag: "Reference",
          },
          {
            title: "SkyCrypt",
            description:
              "Check your combat stats, reputation, and gear setup.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "Kuudra guide (this site)",
            description:
              "In-depth tiers, roles, gear, and fight strategy.",
            href: "/kuudra",
            tag: "Guide",
          },
        ]}
      />

      <ResourceLinks
        title="YouTube searches"
        description="Search links sorted by relevance. Filter by upload date for the latest meta."
        links={[
          {
            title: "Crimson Isle beginner guide",
            description:
              "Search: faction choice, daily quests, reputation tips.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+crimson+isle+beginner+guide",
            tag: "YouTube",
          },
          {
            title: "Dojo challenges guide",
            description:
              "Search: how to S-rank Dojo, gear tips, strategies.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+dojo+challenges+guide",
            tag: "YouTube",
          },
          {
            title: "Fastest reputation grind",
            description:
              "Search: daily quest routes, miniboss farming, rep optimization.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+crimson+isle+fastest+reputation",
            tag: "YouTube",
          },
          {
            title: "Kuudra beginner guide",
            description:
              "Search: first Kuudra run, party roles, basic gear.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+kuudra+beginner+guide",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
