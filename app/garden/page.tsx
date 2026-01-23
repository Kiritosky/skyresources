import { DocsLayout } from "@/components/docs-layout";
import { Checklist } from "@/components/checklist";
import { ResourceLinks } from "@/components/resource-links";

export default function GardenPage() {
  return (
    <DocsLayout
      title="Garden"
      description="Everything you need for Farming Fortune, crop milestones, and profit checks. This page links you to the best external resources (and tells you what to look for)."
    >
      <Checklist
        title="What to check right now"
        description="Fast sanity checks before you sink hours into farming."
        items={[
          { title: "Farming Fortune", detail: "Check MP/FF sources: armor, equipment, pets, reforges." },
          { title: "Crop milestones", detail: "Prioritize milestone unlocks that affect your setup." },
          { title: "Current crop profit", detail: "Compare NPC vs Bazaar and factor in contests/visitor buffs." },
          { title: "Tool progression", detail: "Are you on the right hoe / axe tier for your stage?" },
        ]}
      />

      <ResourceLinks
        title="Best tools"
        description="Open these when you want numbers, prices, or planning help."
        links={[
          {
            title: "SkyCrypt",
            description: "Check farming stats, MP, pets, and profile overview.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "COFL",
            description: "Check market prices and profitability context.",
            href: "https://coflnet.com/",
            tag: "Economy",
          },
          {
            title: "Hypixel Wiki (Garden)",
            description: "Mechanics & unlocks reference.",
            href: "https://wiki.hypixel.net/Garden",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="Guides"
        description="Curated reading list (expand this over time)."
        links={[
          {
            title: "Community farming guides",
            description: "Add your favorite doc/video here next.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+garden+guide",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
