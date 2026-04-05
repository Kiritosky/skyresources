import Link from "next/link";
import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function ModsPage() {
  return (
    <DocsLayout
      title="Mods"
      description="A curated list of the most important SkyBlock mods (including SkyHanni), safe sources, and setup tips."
    >
      <GuideSection title="Safe modding rules" description="A good setup is small, stable, and predictable.">
        <ul>
          <li>Prefer trusted sources (official websites / GitHub / Modrinth). Avoid random re-uploads.</li>
          <li>Keep your mod folder small. Too many overlapping mods causes bugs and FPS drops.</li>
          <li>Install in layers: baseline — one mod — re-test — then the next.</li>
          <li>Decide on <strong>one ecosystem</strong> (Forge or Fabric) and stick to it.</li>
          <li>After SkyBlock updates: update mods one by one. If something breaks, roll back the last change.</li>
        </ul>
      </GuideSection>

      <DataTable
        title="Recommended mods"
        description="Core mods for SkyBlock in 2025-2026. Most players use SkyHanni + Skyblocker as their base."
        columns={[
          { key: "mod", label: "Mod" },
          { key: "type", label: "Type" },
          { key: "loader", label: "Loader" },
          { key: "features", label: "Key Features" },
          { key: "priority", label: "Priority" },
        ]}
        rows={[
          { mod: "SkyHanni", type: "QoL", loader: "Forge/Fabric", features: "Garden overlays, slayer trackers, fishing tools, mining helpers, visitor profit calc", priority: "Essential" },
          { mod: "Skyblocker", type: "QoL", loader: "Fabric", features: "Core QoL, item tooltips, dungeon helpers, price overlays", priority: "Essential" },
          { mod: "Firmament", type: "QoL", loader: "Fabric", features: "NEU successor — storage overlay, item list, search bar", priority: "High" },
          { mod: "Odin", type: "Dungeons", loader: "Forge", features: "Dungeon-specific solvers and utilities", priority: "High (dungeons)" },
          { mod: "SBO", type: "Diana", loader: "Forge", features: "Diana/mythological event helpers", priority: "Niche (Diana)" },
          { mod: "Skytils", type: "QoL", loader: "Forge", features: "Dungeon solvers, utilities (1.8.9)", priority: "Medium (legacy)" },
          { mod: "NEU", type: "QoL", loader: "Forge", features: "Item info overlays (1.8.9 legacy)", priority: "Medium (legacy)" },
          { mod: "SBA", type: "QoL", loader: "Forge", features: "QoL features and safety warnings (1.8.9)", priority: "Medium (legacy)" },
          { mod: "ScamScreener", type: "Security", loader: "Fabric", features: "Flags phishing links, scam patterns in chat", priority: "Recommended" },
          { mod: "Sodium", type: "Performance", loader: "Fabric", features: "Major FPS boost, render optimization", priority: "Essential" },
        ]}
        caption="For MC 1.21+, SkyHanni + Skyblocker + Sodium is the recommended baseline."
      />

      <TipCallout type="tip" title="SkyHanni is the #1 mod now">
        <p>
          <strong>SkyHanni</strong> has become the most popular SkyBlock mod. It covers Garden (crop money/hr, visitor helper, pest tracker), Slayers (HP indicators, timers), Fishing (trophy display, sea creature alerts), Mining, and much more. Available at <a href="https://sky-hanni.com/" target="_blank" rel="noreferrer">sky-hanni.com</a> and Modrinth.
        </p>
      </TipCallout>

      <GuideSection title="Recommended baseline stack (1.21+)" description="Start here. Add more later.">
        <ol>
          <li><strong>Performance first</strong>: install Sodium. Performance on 1.21+ can feel better than 1.8.9 with the right mods.</li>
          <li><strong>Core QoL</strong>: SkyHanni + Skyblocker (or Firmament). These cover 90% of what you need.</li>
          <li><strong>Dungeons</strong>: add Odin if you play dungeons seriously.</li>
          <li><strong>Security</strong>: ScamScreener to catch phishing and scam messages.</li>
        </ol>
      </GuideSection>

      <GuideSection title="Settings that prevent headaches" description="Most mod issues are actually settings overlap.">
        <ul>
          <li>Don&apos;t enable the same feature in multiple mods (same overlay in SkyHanni + Skyblocker).</li>
          <li>If lagging: disable expensive render features and reduce particles.</li>
          <li>Only enable notifications you&apos;ll act on. Noise = ignored warnings.</li>
          <li>If your goal is profit/hr, prioritize settings that support your method (timers, route markers, value overlays).</li>
        </ul>
      </GuideSection>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "Should I use 1.8.9 or 1.21+?", answer: <p>1.21+ is now recommended for most players. With Sodium + modern mods, performance is equal or better. 1.8.9 mods (SBA, NEU, Skytils) are legacy but still work.</p> },
          { question: "Are these mods allowed?", answer: <p>QoL mods like SkyHanni and Skyblocker are generally accepted. They don&apos;t automate gameplay. Always check the latest Hypixel rules for current allowed mods. Avoid anything that automates actions.</p> },
          { question: "My client crashes after adding a mod?", answer: <p>Remove the last mod you added. Check version compatibility. Don&apos;t mix Forge and Fabric mods. Start with a fresh install if needed.</p> },
          { question: "What about Optifine?", answer: <p>Sodium is preferred for 1.21+. Optifine still works on 1.8.9 Forge setups but isn&apos;t compatible with Fabric mods.</p> },
        ]}
      />

      <ResourceLinks
        title="Download links"
        description="Official and safe sources only."
        links={[
          { title: "SkyHanni", description: "Most popular SkyBlock mod. Fabric/Forge.", href: "https://modrinth.com/mod/skyhanni", tag: "Mod" },
          { title: "SkyHanni (Official Site)", description: "Download, docs, and changelog.", href: "https://sky-hanni.com/", tag: "Mod" },
          { title: "Skyblocker", description: "Core Fabric QoL mod.", href: "https://modrinth.com/mod/skyblocker-liap", tag: "Mod" },
          { title: "Firmament", description: "NEU successor for Fabric.", href: "https://modrinth.com/mod/firmament", tag: "Mod" },
          { title: "Sodium", description: "FPS boost for Fabric.", href: "https://modrinth.com/mod/sodium", tag: "Performance" },
          { title: "SBMW", description: "SkyBlock Mod Wiki — all mods listed.", href: "https://sbmw.ca/", tag: "Directory" },
        ]}
      />

      <ResourceLinks
        title="Legacy mods (1.8.9)"
        links={[
          { title: "SBA", description: "QoL features and safety warnings.", href: "https://biscuit.codes/mods/skyblockaddons/", tag: "Legacy" },
          { title: "NEU", description: "Item info overlays and utilities.", href: "https://github.com/NotEnoughUpdates/NotEnoughUpdates", tag: "Legacy" },
          { title: "Skytils", description: "Dungeon QoL, solvers, utilities.", href: "https://github.com/Skytils/SkytilsMod", tag: "Legacy" },
          { title: "OptiFine", description: "FPS for 1.8.9 Forge.", href: "https://optifine.net/downloads", tag: "Legacy" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Best SkyBlock mods 2025/2026", description: "Search: mod list, safe settings, performance.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+best+mods+2025", tag: "YouTube" },
          { title: "Complete modding guide (1.21+)", description: "Full install walkthrough for modern MC.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+modding+guide+1.21", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Tricks & Tips", description: "Habits and settings that complement mods.", href: "/tricks", tag: "Route" },
          { title: "Dungeons", description: "Dungeon-specific mod setups.", href: "/dungeons", tag: "Route" },
          { title: "Mining", description: "Mining-specific mod overlays.", href: "/mining", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
