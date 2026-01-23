import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function ModsPage() {
  return (
    <DocsLayout
      title="Mods"
      description="A curated list of the most important SkyBlock mods and where to get them. This page focuses on safe, common, and practical QoL."
    >
      <GuideSection title="Before you install anything">
        <ul>
          <li>Prefer trusted sources (official websites / GitHub). Avoid random re-uploads.</li>
          <li>Keep your mod folder clean. Too many overlapping mods causes bugs and FPS drops.</li>
          <li>If you don’t know what you’re doing: install a small set first, then expand.</li>
          <li>After updates: if something breaks, remove/disable the last added mod and re-test.</li>
        </ul>
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

      <GuideSection title="Future: your modpack">
        <p>
          When you want to link your own modpack, we’ll add a dedicated page with download links
          (Modrinth/CurseForge/GitHub releases), install steps, and compatibility notes.
        </p>
      </GuideSection>
    </DocsLayout>
  );
}
