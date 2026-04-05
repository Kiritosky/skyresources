import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { ProgressPath } from "../../components/progress-path";
import { AccordionSection } from "../../components/accordion-section";

export default function EarlyGamePage() {
  return (
    <DocsLayout
      title="Early Game"
      description="A structured start: what to prioritize, what traps to avoid, and which tools/guides will move you forward fastest."
    >
      <GuideSection title="What counts as early game?" description="Goal: stable coins + solid baseline stats.">
        <p>Early game is about building a <strong>foundation</strong>. Pick 1-2 main lanes and push them to a solid baseline.</p>
        <ul>
          <li><strong>Magical Power (MP)</strong>: underrated, but huge for damage and survivability.</li>
          <li><strong>Skill XP</strong>: many upgrades scale indirectly through skills.</li>
          <li><strong>Coins</strong>: you need a reliable money maker, not the &quot;best&quot; one.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Early game milestones">
        <ProgressPath
          steps={[
            { title: "Complete Fairy Souls", description: "Hidden across all islands. Give permanent stat boosts. Use a guide.", status: "current" },
            { title: "Get your first 10M coins", description: "Farming, Bazaar flipping, or minions. Pick one method.", status: "upcoming" },
            { title: "Build a basic armor set", description: "Strong Dragon or Ender Dragon armor. Don't overspend.", status: "upcoming" },
            { title: "Reach 100+ Magical Power", description: "Buy cheap accessories. See Accessories page for priority list.", status: "upcoming" },
            { title: "Unlock the Garden", description: "Start farming crops for reliable income.", status: "upcoming" },
            { title: "Pick a direction", description: "Dungeons, Mining, or Economy? Commit to one path.", status: "upcoming" },
          ]}
        />
      </GuideSection>

      <DataTable
        title="Starter gear recommendations"
        description="Good enough to progress without wasting coins."
        columns={[
          { key: "slot", label: "Slot" },
          { key: "item", label: "Item" },
          { key: "cost", label: "~Cost" },
          { key: "notes", label: "Notes" },
        ]}
        rows={[
          { slot: "Weapon", item: "Aspect of the End (AOTE)", cost: "~200k", notes: "Essential mobility + damage. Get this first." },
          { slot: "Armor", item: "Strong Dragon Armor", cost: "~2-3M set", notes: "Good all-round combat set." },
          { slot: "Accessory", item: "Cheap MP accessories", cost: "~1-5M total", notes: "Priority: highest MP per coin. See Accessories page." },
          { slot: "Tool", item: "Farming Hoe (any crop)", cost: "~100k", notes: "Start garden farming for income." },
          { slot: "Pet", item: "Epic Enderman", cost: "~500k", notes: "Good early combat pet. Cheap." },
        ]}
      />

      <TipCallout type="warning" title="Biggest early-game traps">
        <p>Don&apos;t buy expensive gear before you have <strong>100+ MP</strong>. MP multiplies all your stats — without it, even expensive armor underperforms. Also avoid switching methods daily. Consistency beats chasing the &quot;best&quot; method.</p>
      </TipCallout>

      <TipCallout type="tip" title="Fairy Souls are free stats">
        <p>Collect all <strong>Fairy Souls</strong> as early as possible. They give permanent HP, defense, strength, and speed boosts. Use YouTube guides or SkyHanni mod to find them all.</p>
      </TipCallout>

      <GuideSection title="Priorities (recommended order)">
        <ol>
          <li><strong>Profile check</strong> → identify what is actually low (MP, skills, gear gaps).</li>
          <li><strong>One money maker</strong> → farming/mining/flipping, but start with only one.</li>
          <li><strong>QoL &amp; knowledge</strong> → good mods + good guides save days.</li>
          <li><strong>Pick a direction</strong> → are you pushing Dungeons, or economy/progression?</li>
        </ol>
      </GuideSection>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "What should I do first?", answer: <p>Fairy Souls → cheap accessories for MP → basic armor → one money-making method (Garden farming is easiest). Don&apos;t try to do everything at once.</p> },
          { question: "How do I make money early?", answer: <p>Garden farming (any crop) is the most reliable. Bazaar flipping works if you learn it. Minions give passive income. See the Money page for comparisons.</p> },
          { question: "When should I start dungeons?", answer: <p>After you have decent combat stats, 100+ MP, and a class-appropriate armor set. Don&apos;t rush — being undergeared wastes everyone&apos;s time.</p> },
          { question: "Is the Rift worth doing early?", answer: <p>Yes! The Rift doesn&apos;t require main island gear. It&apos;s one of the best early money sources if your main profile isn&apos;t well progressed yet.</p> },
        ]}
      />

      <ResourceLinks
        title="Must-have tools"
        links={[
          { title: "SkyCrypt", description: "Profile overview: MP, skills, gear, pets.", href: "https://sky.shiiyu.moe/", tag: "Stats" },
          { title: "COFL Sky", description: "Economy tools, prices, flips.", href: "https://sky.coflnet.com/", tag: "Economy" },
          { title: "Hypixel Wiki", description: "Look up mechanics/items.", href: "https://wiki.hypixel.net/", tag: "Reference" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Early Game Money Making", description: "Stable methods with low setup.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+early+game+money+making+guide", tag: "YouTube" },
          { title: "Fairy Soul Guide", description: "All fairy soul locations.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+fairy+soul+guide+all+locations", tag: "YouTube" },
          { title: "Bazaar Flipping Basics", description: "Low-risk flips, margins, taxes.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+bazaar+flipping+basics", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Where to go next"
        links={[
          { title: "Accessories & MP", description: "Priority #1 upgrade for every player.", href: "/accessories", tag: "Route" },
          { title: "Garden", description: "If you pick farming as your money maker.", href: "/garden", tag: "Route" },
          { title: "Money Making", description: "Compare methods and pick a lane.", href: "/money", tag: "Route" },
          { title: "The Rift", description: "Great money for early profiles.", href: "/rift", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
