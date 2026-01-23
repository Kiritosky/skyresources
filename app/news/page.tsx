import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function NewsPage() {
  return (
    <DocsLayout
      title="News & patches"
      description="Patch notes are noisy. This page collects reliable sources and helps you quickly figure out what actually matters for you."
    >
      <GuideSection title="How to read patch notes (fast)">
        <ol>
          <li>Find changes that affect your lane (Garden, Dungeons, Mining, Economy).</li>
          <li>
            Look for{" "}
            <span className="whitespace-nowrap">&quot;buff/nerf&quot;</span>, drop rate, recipe, and NPC price changes.
          </li>
          <li>
            If an update changes demand, expect economy changes — check price history.
          </li>
        </ol>
      </GuideSection>

      <ResourceLinks
        title="Primary sources"
        links={[
          {
            title: "Hypixel Forums (SkyBlock Patch Notes)",
            description: "Official patch notes category.",
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

      <ResourceLinks
        title="Economy context"
        description="Useful to check price impact after big balance changes."
        links={[
          {
            title: "COFL Sky",
            description: "Market tools and item history.",
            href: "https://sky.coflnet.com/",
            tag: "Economy",
          },
        ]}
      />
    </DocsLayout>
  );
}
