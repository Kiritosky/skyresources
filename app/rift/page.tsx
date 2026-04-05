import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { ProgressPath } from "../../components/progress-path";
import { AccordionSection } from "../../components/accordion-section";

export default function RiftPage() {
  return (
    <DocsLayout
      title="The Rift"
      description="A complete guide to the Rift dimension: timecharms, motes farming, enigma souls, quests, and the Vampire Slayer."
    >
      {/* ── Overview ── */}
      <GuideSection
        title="What is the Rift?"
        description="A separate dimension with its own progression, currency, and gear."
      >
        <ul>
          <li>
            The Rift is a <strong>parallel dimension</strong> with unique zones, quests, and mechanics.
          </li>
          <li>
            <strong>Motes</strong> are the Rift currency — earned from activities and traded for items/coins.
          </li>
          <li>
            <strong>Timecharms</strong> unlock new zones and cost Rift Time to enter each session.
          </li>
          <li>
            Your gear and stats are <strong>different in the Rift</strong> — you use Rift-specific equipment.
          </li>
          <li>
            Great for <strong>early profiles</strong> that haven&apos;t progressed much on the main island.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="tip" title="Early profile money">
        <p>
          The Rift is one of the best money-making options for <strong>early and mid-game players</strong>.
          You don&apos;t need expensive gear from the main island — Rift has its own progression.
        </p>
      </TipCallout>

      {/* ── Timecharms ── */}
      <GuideSection
        title="Timecharms"
        description="8 timecharms total. Each unlocks a new zone and grants +100 SkyBlock XP."
      >
        <p>
          Timecharms are obtained mostly in order. Each one grants access to a new Rift zone at the cost
          of Rift Time. They get progressively harder and more expensive to obtain.
        </p>
        <DataTable
          columns={[
            { key: "charm", label: "Timecharm" },
            { key: "zone", label: "Zone Unlocked" },
            { key: "how", label: "How to Obtain" },
          ]}
          rows={[
            { charm: "1. Wyld Timecharm", zone: "Wyld Woods", how: "Complete intro quest" },
            { charm: "2. Lagoon Timecharm", zone: "Black Lagoon", how: "Wyld Woods quests" },
            { charm: "3. Dreadfarm Timecharm", zone: "Dreadfarm", how: "Lagoon quests + boss" },
            { charm: "4. Village Timecharm", zone: "Village Plaza", how: "Dreadfarm completion" },
            { charm: "5. Mirrorverse Timecharm", zone: "Mirrorverse", how: "Parkour + puzzle challenge" },
            { charm: "6. SkyBlock Citizen Timecharm", zone: "Colosseum area", how: "Village quests" },
            { charm: "7. Living Timecharm", zone: "Living Cave", how: "Colosseum + advanced quests" },
            { charm: "8. Castle Timecharm", zone: "Stillgore Chateau", how: "Living Cave completion" },
          ]}
        />
      </GuideSection>

      {/* ── Quest Progression ── */}
      <GuideSection title="Quest progression">
        <ProgressPath
          steps={[
            { title: "Enter the Rift", description: "Talk to the NPC in the Hub. Requires completion of intro quest.", status: "complete" },
            { title: "Wyld Woods", description: "First zone. Kill mobs, gather resources, learn Rift mechanics.", status: "complete" },
            { title: "Black Lagoon", description: "Water zone with fishing and mob challenges.", status: "current" },
            { title: "Dreadfarm", description: "Farming zone with Rift crops and boss fights.", status: "upcoming" },
            { title: "Village Plaza", description: "Central hub with shops, NPCs, and side quests.", status: "upcoming" },
            { title: "Mirrorverse", description: "Puzzle/parkour zone. Tricky but rewarding.", status: "upcoming" },
            { title: "Colosseum area", description: "Combat challenges and mob farming.", status: "upcoming" },
            { title: "Living Cave", description: "Advanced zone with Autonulls and Bacte boss.", status: "upcoming" },
            { title: "Stillgore Chateau", description: "Final zone. Home of the Vampire Slayer.", status: "upcoming" },
          ]}
        />
      </GuideSection>

      {/* ── Motes Farming ── */}
      <DataTable
        title="Motes farming methods"
        description="Pick based on your progression and available zones."
        columns={[
          { key: "method", label: "Method" },
          { key: "rate", label: "Motes/hr" },
          { key: "zone", label: "Zone Required" },
          { key: "difficulty", label: "Difficulty" },
          { key: "notes", label: "Notes" },
        ]}
        rows={[
          { method: "Timite → Highlite crafting", rate: "~500k+", zone: "Dreadfarm", difficulty: "Easy", notes: "Mine timite, craft into highlite, sell" },
          { method: "Burger making", rate: "~400k-600k", zone: "Village Plaza", difficulty: "Medium", notes: "Tedious but reliable passive income" },
          { method: "Autonulls", rate: "~300-500k", zone: "Living Cave", difficulty: "Easy", notes: "400 motes each, respawn on timer" },
          { method: "Autoboots", rate: "~400-600k", zone: "Living Cave", difficulty: "Easy", notes: "500 motes each, slightly rarer" },
          { method: "Bacte boss", rate: "6,000/kill", zone: "Living Cave", difficulty: "Medium", notes: "Requires Living Timecharm" },
          { method: "Ubik's Cube", rate: "25k-45k per challenge", zone: "Village Plaza", difficulty: "Easy", notes: "Every 2 hours. Free motes — don't skip!" },
        ]}
      />

      <TipCallout type="warning" title="Don't skip Ubik's Cube">
        <p>
          Ubik&apos;s Cube gives <strong>25,000–45,000 Motes</strong> every 2 hours with zero gear requirements.
          It&apos;s the easiest free income in the Rift. Do it every time it&apos;s available.
        </p>
      </TipCallout>

      {/* ── Enigma Souls ── */}
      <GuideSection
        title="Enigma Souls"
        description="Hidden collectibles scattered throughout every Rift zone."
      >
        <ul>
          <li>
            <strong>What are they?</strong> Glowing orbs hidden in the Rift dimension. Finding them gives permanent rewards.
          </li>
          <li>
            <strong>Rewards</strong>: Motes, SkyBlock XP, and unique Rift items at milestones.
          </li>
          <li>
            <strong>How to find</strong>: explore every zone thoroughly. Many are hidden behind parkour,
            inside buildings, or in obscure corners. YouTube guides show all locations.
          </li>
          <li>
            <strong>Worth doing?</strong> Yes — the XP and motes add up, and some milestone rewards are very useful.
          </li>
        </ul>
      </GuideSection>

      {/* ── Vampire Slayer ── */}
      <GuideSection
        title="Vampire Slayer (Riftstalker Bloodfiend)"
        description="The Rift's exclusive slayer boss, found in Stillgore Chateau."
      >
        <ul>
          <li>
            <strong>Tiers</strong>: T1 through T5. Progressively harder with better drops.
          </li>
          <li>
            <strong>Location</strong>: Stillgore Chateau (last Rift zone). Requires Castle Timecharm.
          </li>
          <li>
            <strong>Mechanics</strong>: uses Rift-specific gear and stats. Different from main island slayers.
          </li>
          <li>
            <strong>Notable drops</strong>: Vampire-themed items, unique enchantments, and valuable RNG drops.
          </li>
          <li>
            See the <a href="/slayers">Slayers</a> page for more details on all slayer bosses.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="info" title="Rift gear">
        <p>
          The Rift uses its own gear system. You can&apos;t bring main island items in.
          Focus on Rift-specific armor and weapons — the wiki has full lists of what&apos;s available per zone.
        </p>
      </TipCallout>

      {/* ── FAQ ── */}
      <AccordionSection
        title="Frequently asked questions"
        items={[
          {
            question: "Is the Rift worth doing?",
            answer: (
              <p>
                Yes, especially for early/mid-game profiles. Motes convert to coins, and the Rift
                provides unique progression that doesn&apos;t require expensive main island gear.
              </p>
            ),
          },
          {
            question: "How to get more Rift Time?",
            answer: (
              <p>
                Rift Time regenerates over real time. Some items and upgrades increase your max Rift Time.
                Timecharms cost Rift Time to enter each session, so managing it is important.
              </p>
            ),
          },
          {
            question: "Best motes farming method?",
            answer: (
              <p>
                Depends on your progression. Highlite crafting and burger making are good early.
                Autonulls and Autoboots in Living Cave are more efficient later. Always do Ubik&apos;s Cube.
              </p>
            ),
          },
          {
            question: "What are Enigma Souls?",
            answer: (
              <p>
                Hidden collectibles in every Rift zone. Finding them gives Motes, SkyBlock XP, and
                milestone rewards. Use YouTube guides to find all locations.
              </p>
            ),
          },
          {
            question: "Do I need main island gear for the Rift?",
            answer: (
              <p>
                No. The Rift uses its own gear system. Your main island items don&apos;t work there.
                This is why the Rift is great for early profiles — everyone starts on equal footing.
              </p>
            ),
          },
        ]}
      />

      {/* ── Resources ── */}
      <ResourceLinks
        title="Tools & references"
        links={[
          { title: "Hypixel Wiki: Rift", description: "Full Rift mechanics and zone guides.", href: "https://wiki.hypixel.net/Rift_Dimension", tag: "Reference" },
          { title: "Hypixel Wiki: Motes", description: "Motes currency and spending options.", href: "https://wiki.hypixel.net/Motes", tag: "Reference" },
          { title: "Fandom Wiki: Rift Timecharms", description: "Detailed timecharm guide.", href: "https://hypixel-skyblock.fandom.com/wiki/Rift_Timecharms", tag: "Reference" },
          { title: "SkyCrypt", description: "Check Rift stats and progression.", href: "https://sky.shiiyu.moe/", tag: "Stats" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Rift Beginner Guide", description: "Search: rift guide, timecharms, motes.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+rift+beginner+guide", tag: "YouTube" },
          { title: "Motes Farming Guide", description: "Search: best motes farming, money rift.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+motes+farming+guide", tag: "YouTube" },
          { title: "Enigma Soul Locations", description: "Search: all enigma soul locations.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+enigma+soul+locations", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Slayers", description: "Vampire Slayer and all other slayer bosses.", href: "/slayers", tag: "Route" },
          { title: "Money Making", description: "Compare Rift income to other methods.", href: "/money", tag: "Route" },
          { title: "Accessories & MP", description: "Some Rift items help with accessory setups.", href: "/accessories", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
