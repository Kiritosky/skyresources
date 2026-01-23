import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function EndGamePage() {
  return (
    <DocsLayout
      title="End Game"
      description="Endgame is specialization, efficiency, and staying on top of meta changes. Use this page to min-max routes, keep up with updates, and refine high-end money makers."
    >
      <GuideSection title="Endgame mindset">
        <p>
          Endgame players win by (1) deeply understanding one system, (2) keeping setup and session
          quality consistent, and (3) reacting quickly to balance/meta changes.
        </p>
        <ul>
          <li>
            <strong>Read patch notes</strong> — but filter for what affects your content.
          </li>
          <li>
            <strong>Watch the economy</strong> — price swings are part of progression.
          </li>
          <li>
            <strong>Routes & efficiency</strong> — same gear, but 20% more output per session.
          </li>
        </ul>
      </GuideSection>

      <ResourceLinks
        title="Meta & updates"
        links={[
          {
            title: "Hypixel Patch Notes (Forums)",
            description: "Primary source for updates.",
            href: "https://hypixel.net/forums/skyblock-patch-notes.158/",
            tag: "News",
          },
          {
            title: "Hypixel Wiki (Changelog)",
            description: "Community tracking of changes.",
            href: "https://wiki.hypixel.net/Changelog",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="Economy (endgame)"
        description="When you play data-driven: history, margins, arbitrage, and event prep."
        links={[
          {
            title: "COFL Sky",
            description: "Item history, market tools, and flips.",
            href: "https://sky.coflnet.com/",
            tag: "Economy",
          },
        ]}
      />

      <ResourceLinks
        title="Endgame guides × YouTube"
        description="Direct intent searches to cut through noisy recommendations."
        links={[
          {
            title: "Endgame Money Making",
            description: "Search: high-end methods, large setups, efficiency.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+endgame+money+making",
            tag: "YouTube",
          },
          {
            title: "Dungeons Endgame Meta",
            description: "Search: master mode, class meta, gear min-max.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+dungeons+endgame+meta",
            tag: "YouTube",
          },
          {
            title: "Kuudra / Crimson Isle Meta",
            description: "Search: Kuudra tiers, setups, comps.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+kuudra+guide+meta",
            tag: "YouTube",
          },
        ]}
      />

      <GuideSection title="Next improvements I can add">
        <ul>
          <li>Featured Mods page (curated list + tags + install links)</li>
          <li>Modpack page (your future pack: Modrinth/CurseForge/GitHub releases)</li>
          <li>Search (client-side) — query by title/tags/links</li>
        </ul>
      </GuideSection>
    </DocsLayout>
  );
}
