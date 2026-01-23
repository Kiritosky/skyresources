import { DocsLayout } from "@/components/docs-layout";
import { ResourceLinks } from "@/components/resource-links";

export default function NewsPage() {
  return (
    <DocsLayout
      title="News & patches"
      description="Patch notes are noisy. This page is where we collect what actually matters and link to the source."
    >
      <ResourceLinks
        title="Official-ish sources"
        links={[
          {
            title: "Hypixel Forums (SkyBlock Patch Notes)",
            description: "The primary patch notes source.",
            href: "https://hypixel.net/forums/skyblock-patch-notes.158/",
            tag: "Forums",
          },
          {
            title: "Hypixel Wiki (Changelog)",
            description: "Community-maintained changes.",
            href: "https://wiki.hypixel.net/Changelog",
            tag: "Reference",
          },
        ]}
      />
    </DocsLayout>
  );
}
