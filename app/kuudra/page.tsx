import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { ProgressPath } from "../../components/progress-path";
import { AccordionSection } from "../../components/accordion-section";

export default function KuudraPage() {
  return (
    <DocsLayout
      title="Kuudra"
      description="The endgame boss of the Crimson Isle. Five tiers of increasing difficulty, party-based combat, and some of the best profit in SkyBlock."
    >
      <GuideSection title="Overview">
        <p>
          <strong>Kuudra</strong> is a 4-player boss fight located on the
          Crimson Isle. It has <strong>5 difficulty tiers</strong>, each
          requiring progressively higher faction reputation and better gear.
          Kuudra is one of the most profitable endgame activities in SkyBlock,
          especially at Tier 4 (Fiery) and Tier 5 (Infernal).
        </p>
        <p>
          The fight involves multiple phases: a pre-fight setup where you carry
          supplies, a ballista phase where you deal damage to Kuudra, and a DPS
          phase where you attack Kuudra directly. Each party member has a
          specific role, and coordination is essential for higher tiers.
        </p>
        <ul>
          <li>
            <strong>Unlock requirement:</strong> Crimson Isle faction reputation
            (see tiers below).
          </li>
          <li>
            <strong>Party size:</strong> 4 players with defined roles.
          </li>
          <li>
            <strong>Key loot:</strong> Crimson armor with attributes, Kuudra
            Keys, rare drops.
          </li>
          <li>
            <strong>Profit:</strong> Significant at T4+, one of the best
            money-makers in the game.
          </li>
        </ul>
      </GuideSection>

      <DataTable
        title="Kuudra tiers"
        description="All five difficulty tiers with requirements, gear recommendations, and expected profit."
        columns={[
          { key: "tier", label: "Tier" },
          { key: "name", label: "Name" },
          { key: "rep", label: "Rep Required" },
          { key: "gear", label: "Recommended Gear" },
          { key: "roles", label: "Party Role Notes" },
          { key: "profit", label: "Profit / Run" },
        ]}
        rows={[
          {
            tier: "T1",
            name: "Basic",
            rep: "0 (Elle's quest)",
            gear: "Storm Armor / Necron Armor, any decent weapon",
            roles: "Roles are flexible. Good for learning mechanics and positioning.",
            profit: "~50k-150k",
          },
          {
            tier: "T2",
            name: "Hot",
            rep: "1,000 (Trusted)",
            gear: "Hyperion required for Mage, Necron + good weapon for DPS",
            roles: "Mage starts becoming important for clearing adds. Tank should have high EHP.",
            profit: "~200k-500k",
          },
          {
            tier: "T3",
            name: "Burning",
            rep: "3,000 (Devoted)",
            gear: "Hyperion (Mage), Terminator (DPS), strong tank setup",
            roles: "Roles are strictly defined. Mage clears, DPS focuses Kuudra, Tank/Healer keep party alive.",
            profit: "~500k-1.5m",
          },
          {
            tier: "T4",
            name: "Fiery",
            rep: "7,000 (Honored)",
            gear: "Full meta: Hyperion, Terminator, maxed Crimson armor with good attributes",
            roles: "Every role must perform well. One weak player drags the entire run. Coordination is critical.",
            profit: "~2m-8m",
          },
          {
            tier: "T5",
            name: "Infernal",
            rep: "12,000 (Max)",
            gear: "Maxed everything: godroll attributes, T7 enchants, maxed pets, all accessories",
            roles: "Extreme coordination required. Runs fail quickly without perfect execution from all 4 players.",
            profit: "~5m-25m+",
          },
        ]}
        caption="Profit varies based on RNG drops, attribute rolls, and market prices."
      />

      <TipCallout type="info" title="Where the money is">
        <p>
          <strong>Fiery (T4) is where real profit starts.</strong> Below that,
          run Kuudra primarily for learning mechanics, building reputation, and
          getting comfortable with your role. T1-T3 profit is minimal compared
          to the gear investment required.
        </p>
      </TipCallout>

      <TipCallout type="warning" title="Hyperion requirement">
        <p>
          <strong>Hyperion is basically required for T2 and above.</strong> The
          Mage role needs it for add clearing, and even non-Mage players
          benefit from having one for utility. Budget accordingly - this is a
          major investment but pays for itself over time.
        </p>
      </TipCallout>

      <GuideSection
        title="Party roles"
        description="Each player has a defined role. Knowing your job and executing it well is more important than raw stats."
      >
        <h3 className="text-base font-semibold">Mage</h3>
        <p>
          The Mage clears adds (smaller mobs) using{" "}
          <strong>Hyperion's Wither Impact</strong> ability. This is critical
          in higher tiers where adds can overwhelm the party. Mages also
          contribute to general DPS during the weakness phase.
        </p>
        <ul>
          <li>
            <strong>Key gear:</strong> Hyperion, Storm Armor (or Aurora), high
            intelligence and mana pool.
          </li>
          <li>
            <strong>Priority:</strong> Keep adds clear so DPS can focus on
            Kuudra.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">DPS</h3>
        <p>
          The DPS player focuses on dealing maximum damage to Kuudra during the
          weakness phase. <strong>Terminator</strong> is the go-to weapon for
          raw damage output. DPS players also help with crate carrying and
          general combat.
        </p>
        <ul>
          <li>
            <strong>Key gear:</strong> Terminator, Necron/Crimson Armor with
            Dominance + Veteran attributes, high strength and crit damage.
          </li>
          <li>
            <strong>Priority:</strong> Maximize damage on Kuudra during
            vulnerable windows.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Tank</h3>
        <p>
          The Tank absorbs damage and provides utility for the team. Tanks draw
          aggro from Kuudra and dangerous mobs, keeping squishier teammates
          alive. They also help with crate carrying due to higher survivability.
        </p>
        <ul>
          <li>
            <strong>Key gear:</strong> Goldor Armor or Crimson with defensive
            attributes, Reaper Falchion or tank weapon, high defense and HP.
          </li>
          <li>
            <strong>Priority:</strong> Stay alive, draw aggro, support the
            team.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Healer</h3>
        <p>
          The Healer keeps the party alive through healing circles and support
          abilities. In higher tiers, a good healer is the difference between
          a clean run and a wipe.
        </p>
        <ul>
          <li>
            <strong>Key gear:</strong> Healing-focused setup, Wand of
            Restoration, high HP and healing modifiers.
          </li>
          <li>
            <strong>Priority:</strong> Keep everyone alive, especially during
            high-damage phases.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Crimson armor attributes"
        description="Attributes are the special stats that roll on Crimson Isle armor. Getting the right combo is key to performance."
      >
        <p>
          Every piece of Crimson armor (Terror, Aurora, Hollow, Fervor, Crimson)
          drops with <strong>two random attributes</strong> at varying levels.
          These attributes significantly impact your effectiveness in Kuudra
          and other Crimson Isle content. The right attribute combination can be
          worth hundreds of millions of coins.
        </p>

        <h3 className="text-base font-semibold">Best attribute combos by role</h3>
        <ul>
          <li>
            <strong>Mage:</strong> Mana Pool + Mana Regeneration. Maximizes
            uptime on Wither Impact and overall mana sustain. Alternatively,
            Mana Pool + Dominance for a hybrid approach.
          </li>
          <li>
            <strong>DPS:</strong> Dominance + Veteran. Dominance gives raw
            damage stats, Veteran gives defense to survive. This is the most
            popular DPS combo.
          </li>
          <li>
            <strong>Tank:</strong> Veteran + Fortitude. Maximum survivability.
            Some tanks also use Veteran + Dominance if they want more damage
            contribution.
          </li>
          <li>
            <strong>Healer:</strong> Mending + Veteran. Mending boosts healing
            output, Veteran provides survivability.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Attribute levels</h3>
        <p>
          Attributes range from <strong>level 1 to level 10</strong>. You can
          combine two pieces with the same attribute to level it up (similar to
          combining pets). Higher attribute levels give proportionally stronger
          bonuses. Most players aim for <strong>level 5+</strong> on their main
          attributes before worrying about perfect combos.
        </p>
      </GuideSection>

      <GuideSection
        title="Fight mechanics"
        description="Understanding the fight phases is essential for clean runs at higher tiers."
      >
        <h3 className="text-base font-semibold">Phase 1: Pre-fight setup</h3>
        <p>
          Before the main fight begins, your party needs to collect and deliver
          supplies (crates) to the ballista. Each player carries crates from
          various locations on the map to the central platform. Tanks and
          players with high survivability often carry the most since the path
          is dangerous.
        </p>

        <h3 className="mt-4 text-base font-semibold">Phase 2: Crate carrying</h3>
        <p>
          Players pick up supply crates scattered around the arena and deliver
          them to the designated drop-off points. Getting hit while carrying
          slows you down, and dying drops the crate. Coordinate who carries
          and who clears the path.
        </p>
        <ul>
          <li>
            Mage should clear adds along the carrying route.
          </li>
          <li>
            Tank carries through dangerous areas due to high HP.
          </li>
          <li>
            DPS helps carry when the path is clear.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Phase 3: Ballista phase</h3>
        <p>
          Once enough crates are delivered, the ballista activates and fires at
          Kuudra, breaking its defenses. During this phase, players need to
          protect the ballista from incoming mobs while it fires. The Mage
          role is critical here for add control.
        </p>

        <h3 className="mt-4 text-base font-semibold">Phase 4: Kuudra weakness</h3>
        <p>
          After the ballista breaks Kuudra's shield, it becomes vulnerable to
          direct damage. This is when the DPS player goes all-out with
          Terminator or other high-damage weapons. The window is limited, so
          maximizing damage during this phase is crucial. Tank holds aggro,
          Healer keeps everyone alive, and Mage continues clearing stray adds.
        </p>
      </GuideSection>

      <ProgressPath
        steps={[
          {
            title: "Learn Basic (T1)",
            description:
              "Get comfortable with fight phases, crate carrying, and your role. No stress about gear perfection.",
            status: "complete",
          },
          {
            title: "Farm Hot (T2) for reputation",
            description:
              "Build reputation toward Devoted (3,000). Acquire Hyperion if playing Mage. Practice role execution.",
            status: "current",
          },
          {
            title: "Break into Burning (T3)",
            description:
              "Upgrade to proper Crimson armor with decent attributes. Terminator for DPS. Runs get serious here.",
            status: "upcoming",
          },
          {
            title: "Profit from Fiery (T4)",
            description:
              "This is the money tier. Good attribute rolls, rare drops, and consistent 2-8m per run. Invest in godroll gear.",
            status: "upcoming",
          },
          {
            title: "Master Infernal (T5)",
            description:
              "The pinnacle of Kuudra. Maxed everything required. 5-25m+ per run with rare drops worth hundreds of millions.",
            status: "upcoming",
          },
        ]}
      />

      <AccordionSection
        title="Frequently asked questions"
        description="Common questions about Kuudra and Crimson Isle endgame."
        items={[
          {
            question: "Is Kuudra worth it for money?",
            answer: (
              <p>
                <strong>Yes, at T4 and T5.</strong> Kuudra Fiery (T4) averages
                2-8m per run depending on drops and attribute rolls. Infernal
                (T5) can be 5-25m+ per run with godroll attribute drops worth
                hundreds of millions. Below T4, the profit is minimal and you
                should treat those runs as practice and reputation building.
                Once you can consistently clear T4, Kuudra becomes one of the
                best money-makers in the game.
              </p>
            ),
          },
          {
            question: "What gear do I need for T4 (Fiery)?",
            answer: (
              <div>
                <p>Minimum requirements for T4 Fiery:</p>
                <ul>
                  <li>
                    <strong>Mage:</strong> Hyperion, Storm/Aurora Armor, 1,500+
                    intelligence, Mana Pool attributes.
                  </li>
                  <li>
                    <strong>DPS:</strong> Terminator, Necron/Crimson Armor with
                    Dominance + Veteran, high crit damage and strength.
                  </li>
                  <li>
                    <strong>Tank:</strong> Goldor/Crimson with Veteran +
                    Fortitude, 30k+ effective HP.
                  </li>
                  <li>
                    <strong>All roles:</strong> Maxed accessories (see{" "}
                    <a href="/accessories" className="text-hypixel-gold underline">
                      accessories
                    </a>
                    ), T6+ enchants, good pet setup.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            question: "Best attributes for DPS?",
            answer: (
              <p>
                <strong>Dominance + Veteran</strong> is the standard DPS combo.
                Dominance provides raw damage stats (strength, crit damage),
                while Veteran gives defense to survive the fight. Some players
                run Dominance + Lifeline for more survivability, but
                Dominance + Veteran is the most balanced and popular choice.
                Aim for attribute level 5+ on each before investing in higher
                levels.
              </p>
            ),
          },
          {
            question: "How do I find a party?",
            answer: (
              <p>
                The <strong>Party Finder</strong> in-game is the most common
                way to find Kuudra parties. For T1-T3, you can usually find
                groups easily. For T4 and T5, many players use{" "}
                <strong>Discord servers</strong> (SkyBlock Maniacs, SkyBlock
                Simplified) to find experienced parties. Having your SkyCrypt
                profile ready to share helps when applying to groups, as party
                leaders often check gear and stats before inviting.
              </p>
            ),
          },
        ]}
      />

      <ResourceLinks
        title="Essential references"
        links={[
          {
            title: "Hypixel Wiki: Kuudra",
            description:
              "Complete reference for all tiers, mechanics, and loot.",
            href: "https://wiki.hypixel.net/Kuudra",
            tag: "Reference",
          },
          {
            title: "SkyCrypt",
            description:
              "Check your stats, gear, attributes, and party readiness.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "Crimson Isle guide (this site)",
            description:
              "Faction choice, reputation, and Dojo overview.",
            href: "/crimson",
            tag: "Guide",
          },
          {
            title: "Accessories guide (this site)",
            description:
              "Magical power and accessory optimization for Kuudra.",
            href: "/accessories",
            tag: "Guide",
          },
        ]}
      />

      <ResourceLinks
        title="YouTube searches"
        description="Search links for guides and strategies. Sort by upload date for current meta."
        links={[
          {
            title: "Kuudra beginner guide",
            description:
              "Search: first Kuudra run, mechanics, party roles.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+kuudra+beginner+guide",
            tag: "YouTube",
          },
          {
            title: "Kuudra T4 guide",
            description:
              "Search: Fiery tier strategy, gear, profit optimization.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+kuudra+t4+fiery+guide",
            tag: "YouTube",
          },
          {
            title: "Best Kuudra attributes",
            description:
              "Search: attribute combos, godrolls, what to keep/sell.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+kuudra+best+attributes+guide",
            tag: "YouTube",
          },
          {
            title: "Kuudra Infernal (T5)",
            description:
              "Search: T5 strategy, required gear, party coordination.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+kuudra+infernal+t5+guide",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
