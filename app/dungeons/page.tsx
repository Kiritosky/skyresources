import { DocsLayout } from "@/components/docs-layout";
import { Checklist } from "@/components/checklist";
import { ResourceLinks } from "@/components/resource-links";

export default function DungeonsPage() {
  return (
    <DocsLayout
      title="Dungeons"
      description="Progression, class basics, and where to find the best up-to-date meta resources."
    >
      <Checklist
        title="Quick progression checks"
        items={[
          { title: "Class + role", detail: "Pick 1 main class and build around it." },
          { title: "Gear tier", detail: "Make sure your gear matches your floor." },
          { title: "Talisman / MP", detail: "Low MP is the #1 hidden issue for damage/tankiness." },
          { title: "Dungeon basics", detail: "Secrets routes and clearing discipline matter more than upgrades." },
        ]}
      />

      <ResourceLinks
        title="Best external links"
        links={[
          {
            title: "SkyCrypt",
            description: "Check MP, stats, gear, and pets.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "Hypixel Wiki (Dungeons)",
            description: "Reference for items, floors, and mechanics.",
            href: "https://wiki.hypixel.net/Catacombs",
            tag: "Reference",
          },
          {
            title: "Community meta guides",
            description: "Add curated docs/videos here.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+dungeons+guide",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
