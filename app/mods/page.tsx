import Link from "next/link";
import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function ModsPage() {
  return (
    <DocsLayout
      title="Mods"
      description="A curated list of the most important SkyBlock mods and where to get them. This page focuses on safe, common, and practical QoL."
    >
      <GuideSection
        title="Quick overview (safe modding rules)"
        description="A good setup is small, stable, and predictable."
      >
        <ul>
          <li>
            Prefer trusted sources (official websites / GitHub). Avoid random re-uploads.
          </li>
          <li>
            Keep your mod folder small. Too many overlapping mods causes bugs and FPS drops.
          </li>
          <li>
            Install in layers: baseline - one mod - re-test - then the next.
          </li>
          <li>
            After SkyBlock updates: treat it like a mini-patch cycle. If your client breaks, disable the last updated mod and
            re-test.
          </li>
          <li>
            If you care about efficiency: use mods to reduce downtime (routing, overlays, quick actions), not to replace game
            knowledge. For practical habits, see <Link href="/tricks">Tricks</Link>.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Recommended baseline stack (start here)"
        description="A small setup that covers most QoL without turning your client into a science project."
      >
        <p>
          If you&apos;re new, your target is a stable client + a few workflows. You can always add more later.
        </p>
        <ul>
          <li>
            <strong>Core QoL:</strong> SBA + NEU (item info, warnings, basic utilities)
          </li>
          <li>
            <strong>Dungeons (optional):</strong> Skytils (only enable what you actually use). If you&apos;re focusing dungeons,
            also check <Link href="/dungeons">Dungeons</Link>.
          </li>
          <li>
            <strong>Performance:</strong> Sodium (Fabric) when you need FPS headroom (especially on orange/red FPS areas).
          </li>
          <li>
            If you&apos;re new: don&apos;t add 10+ mods at once. Add one mod, configure it, then move on.
          </li>
        </ul>
        <p>
          Tip: Mods don&apos;t fix a bad progression path. If you&apos;re unsure what to buy/grind next, use <Link href="/money">Money</Link>
          as the comparison hub and commit to one lane for a week.
        </p>
      </GuideSection>

      <GuideSection
        title="Install & update workflow (no pain)"
        description="A simple process that avoids most crashes (and saves hours of debugging)."
      >
        <ol>
          <li>
            Decide on one ecosystem (Forge or Fabric) and stick to it for now. Mixing random loaders usually ends in pain.
          </li>
          <li>
            Install your baseline stack. Launch once. If it works, add the next mod.
          </li>
          <li>
            Keep backups: before you update, copy your mod folder so you can roll back quickly.
          </li>
          <li>
            When SkyBlock updates: update mods one by one. If something breaks, roll back the last change.
          </li>
          <li>
            When a new patch changes mechanics, you usually want to update your &quot;knowledge&quot; too. Use <Link href="/news">News &amp; patches</Link>
            to triage what matters.
          </li>
        </ol>
      </GuideSection>

      <GuideSection
        title="Settings that prevent headaches"
        description="Most &quot;mod issues&quot; are actually &quot;settings overlap&quot;."
      >
        <ul>
          <li>
            Don&apos;t enable overlapping features in multiple mods (e.g. the same overlay in SBA + NEU + Skytils).
          </li>
          <li>
            If you&apos;re lagging: disable expensive render features and reduce particle-heavy settings.
          </li>
          <li>
            Keep chat and GUI clean: only enable notifications you&apos;ll act on.
          </li>
          <li>
            Don&apos;t let the UI become noise: if you start ignoring warnings/overlays, remove them.
          </li>
          <li>
            If your goal is profit/hour, prioritize settings that support your method (clear timers, route markers, item value
            overlays). Method selection lives on <Link href="/money">Money</Link>; Mining-specific setups are on <Link href="/mining">Mining</Link>.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Future: your modpack">
        <p>
          When you want to link your own modpack, we&apos;ll add a dedicated page with download links
          (Modrinth/CurseForge/GitHub releases), install steps, and compatibility notes.
        </p>
      </GuideSection>

      <ResourceLinks
        title="Core QoL mods"
        description="Commonly used mods that improve UI, usability, and general SkyBlock comfort."
        links={[
          {
            title: "SkyBlockAddons (SBA)",
            description: "QoL features and safety warnings.",
            href: "https://biscuit.codes/mods/skyblockaddons/",
            tag: "Mod",
          },
          {
            title: "NotEnoughUpdates (NEU)",
            description: "Item info overlays and utilities (depends on setup/version).",
            href: "https://github.com/NotEnoughUpdates/NotEnoughUpdates",
            tag: "Mod",
          },
          {
            title: "Skytils",
            description: "Dungeon QoL, solvers, utilities (check rules and settings).",
            href: "https://github.com/Skytils/SkytilsMod",
            tag: "Mod",
          },
        ]}
      />

      <ResourceLinks
        title="Performance"
        description="If your FPS is bad, start here before adding more features."
        links={[
          {
            title: "Sodium (Fabric)",
            description: "Big FPS boost on Fabric.",
            href: "https://modrinth.com/mod/sodium",
            tag: "Mod",
          },
          {
            title: "OptiFine (Legacy)",
            description: "Common on older setups; compatibility varies.",
            href: "https://optifine.net/downloads",
            tag: "Mod",
          },
        ]}
      />

      <ResourceLinks
        title="YouTube searches"
        description="Direct intent searches - sort by upload date for current install/setup guides."
        links={[
          {
            title: "Best SkyBlock mods (current patch)",
            description: "Search: recommended mod list, safe settings, performance.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+best+mods+settings",
            tag: "YouTube",
          },
          {
            title: "Sodium / performance setup",
            description: "Search: FPS boost guide, render settings, optimization.",
            href: "https://www.youtube.com/results?search_query=minecraft+sodium+fps+boost+settings",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
