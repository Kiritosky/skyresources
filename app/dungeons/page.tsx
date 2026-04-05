import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { ProgressPath } from "../../components/progress-path";
import { AccordionSection } from "../../components/accordion-section";

export default function DungeonsPage() {
  return (
    <DocsLayout
      title="Dungeons"
      description="Floor progression, class guides, gear paths, secrets, Master Mode, and everything you need for Catacombs."
    >
      <GuideSection title="Start here (absolute basics)">
        <p>Dungeons progression is about building a consistent setup: class role, survivability, and clean runs.</p>
        <ul>
          <li><strong>Pick one main class</strong> for now. Switching constantly slows learning.</li>
          <li><strong>Don&apos;t skip fundamentals</strong>: room clearing, positioning, and basic secrets.</li>
          <li><strong>Gear should match your floor</strong>: being under-geared wastes time (and parties).</li>
        </ul>
      </GuideSection>

      <GuideSection title="Floor progression">
        <ProgressPath
          steps={[
            { title: "F1 — The Catacombs Entrance", description: "Learn basics: clearing rooms, dodging attacks. Any decent armor works.", status: "complete" },
            { title: "F2-F3 — Building consistency", description: "Get class-specific gear. Learn your role. Start learning secrets.", status: "complete" },
            { title: "F4 — Spirit Boss", description: "First real gear check. Need survivability + damage. Thorn boss mechanics.", status: "current" },
            { title: "F5 — Livid Boss", description: "DPS check. Class builds start mattering. Livid Dagger is a common drop.", status: "upcoming" },
            { title: "F6 — Sadan Boss", description: "Multi-phase boss. Need good team coordination. Necron armor becomes relevant.", status: "upcoming" },
            { title: "F7 — Necron Boss", description: "Endgame normal floors. 4-phase fight. Drops Wither armor and Hyperion handle.", status: "upcoming" },
            { title: "M1-M6 — Master Mode", description: "Harder versions of F1-F6. Master stars and better loot.", status: "upcoming" },
            { title: "M7 — Master Necron", description: "Endgame. Dragon fight + 4 phases. Drops Necron handles. ~20-40M/hr.", status: "upcoming" },
          ]}
        />
      </GuideSection>

      <DataTable
        title="Class roles"
        description="What each class does and what parties expect."
        columns={[
          { key: "class", label: "Class" },
          { key: "role", label: "Role" },
          { key: "key", label: "Key Strength" },
          { key: "gear", label: "Core F7 Gear" },
          { key: "notes", label: "Notes" },
        ]}
        rows={[
          { class: "Berserker", role: "DPS + cleanup", gear: "3/4 Necron + Golden Sadan Head, Axe of the Shredded", key: "Raw damage", notes: "Good all-rounder. Learn target priority." },
          { class: "Archer", role: "Ranged DPS", gear: "3/4 Necron (Ancient), Juju → Terminator", key: "Burst damage", notes: "Team-dependent. Very strong late. Soul Eater + Overload 5." },
          { class: "Mage", role: "Damage + clearing", gear: "Wither Goggles + Storm armor, Hyperion", key: "AoE clear + damage", notes: "Needs mana management. Hyperion is the goal." },
          { class: "Tank", role: "Survivability", gear: "3/4 Goldor + Reaper Mask", key: "Damage absorption", notes: "Makes runs stable. Learn damage patterns." },
          { class: "Healer", role: "Team sustain", gear: "3/4 Goldor + Mender Crown", key: "Healing output", notes: "Great for learning. Keeps team alive." },
        ]}
      />

      <TipCallout type="tip" title="Class recommendation for beginners">
        <p><strong>Healer</strong> or <strong>Tank</strong> are the best classes for learning dungeons. You contribute to the team by surviving, and you learn mechanics without the pressure of being the main DPS.</p>
      </TipCallout>

      <GuideSection title="Secrets" description="Learning secrets is the single biggest improvement you can make.">
        <ul>
          <li>Each room has a set number of secrets. Getting all secrets in a dungeon contributes to the S+ score.</li>
          <li><strong>Don&apos;t try to memorize everything</strong>. Learn 1-2 rooms per session.</li>
          <li>Use the <strong>Dungeon Rooms Mod</strong> or SkyHanni to identify rooms.</li>
          <li>Secrets include: hidden levers, bats, item frames, and skull puzzles.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Progression checklist" description="Upgrades that give the biggest effect.">
        <ol>
          <li><strong>Magical Power</strong> and basic tuning — see the <a href="/accessories">Accessories</a> page.</li>
          <li><strong>Survivability</strong>: don&apos;t build glass-cannon if you die every run.</li>
          <li><strong>Clear speed</strong>: consistent room clear beats occasional big hits.</li>
          <li><strong>Secrets</strong>: learn a few rooms at a time.</li>
          <li><strong>Catacombs level</strong>: levels give significant stat boosts inside dungeons.</li>
        </ol>
      </GuideSection>

      <TipCallout type="warning" title="Don't rush Master Mode">
        <p>Master Mode doesn&apos;t make good money until M7, and M7 requires <strong>maxed endgame gear</strong> and experienced parties. Focus on consistent F7 S+ runs before considering Master Mode.</p>
      </TipCallout>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "Which class should I pick?", answer: <p>Healer or Tank to learn, Berserker for easy DPS, Mage for AoE clearing (needs Hyperion), Archer for endgame burst (needs Terminator). Pick one and stick with it.</p> },
          { question: "When should I do F7?", answer: <p>When you can survive the full run and contribute to clearing. Minimum: class-specific F7 gear, 300+ MP, and knowledge of basic secrets. Don&apos;t queue above your gear level.</p> },
          { question: "Is dungeons good money?", answer: <p>F7 is decent. M7 is excellent (~20-40M/hr). Below that, dungeons isn&apos;t great for pure money — it&apos;s more about progression and gear drops.</p> },
          { question: "How do secrets work?", answer: <p>Each room has hidden secrets (levers, bats, items). Finding them all contributes to the S+ score. Higher scores = better rewards. Use mods to identify rooms.</p> },
        ]}
      />

      <ResourceLinks
        title="Essential links"
        links={[
          { title: "SkyCrypt", description: "Check cata level, MP, stats, gear.", href: "https://sky.shiiyu.moe/", tag: "Stats" },
          { title: "Hypixel Wiki (Catacombs)", description: "Floor mechanics and items.", href: "https://wiki.hypixel.net/Catacombs", tag: "Reference" },
          { title: "Fandom Wiki (Dungeon Guide)", description: "Detailed floor-by-floor guide.", href: "https://hypixel-skyblock.fandom.com/wiki/Tutorial:Dungeon_Ultimate_Guide", tag: "Reference" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Dungeons Beginner Guide", description: "First steps, class choice, basic gear.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+dungeons+beginner+guide", tag: "YouTube" },
          { title: "F7 Guide", description: "Necron fight phases, gear, and strategy.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+f7+guide+necron", tag: "YouTube" },
          { title: "Secrets routes", description: "Room secrets, routes, practice.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+secrets+routes+beginner", tag: "YouTube" },
          { title: "Class guides", description: "Role expectations and progression per class.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+dungeons+class+guide", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Accessories & MP", description: "MP is critical for dungeon damage.", href: "/accessories", tag: "Route" },
          { title: "Pets", description: "Best combat pets for dungeons.", href: "/pets", tag: "Route" },
          { title: "Enchanting", description: "Best enchants for dungeon gear.", href: "/enchanting", tag: "Route" },
          { title: "Mods", description: "Odin + SkyHanni dungeon helpers.", href: "/mods", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
