import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function EventsPage() {
  return (
    <DocsLayout
      title="Mayors & Events"
      description="Like a calendar + planning page: what mayors do, how elections work, and how to prep for profit windows."
    >
      <GuideSection title="Quick overview (what to actually do)">
        <ul>
          <li>
            Mayors create <strong>time-limited windows</strong> where certain grinds are stronger (Mining, Fishing, Dungeons, Economy).
          </li>
          <li>
            Treat it like planning: <strong>prep before</strong>, <strong>grind during</strong>, <strong>sell/hold after</strong>.
          </li>
          <li>
            Don’t over-invest. The safest prep is stocking items you would use anyway.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="How elections work (quick)"
        description="Know the cycle so you can time grinds and investments."
      >
        <ul>
          <li>A mayor is active for a fixed term. Elections happen regularly.</li>
          <li>
            Most perks create “profit windows” (fishing, mining, dungeons, etc.).
          </li>
          <li>
            If you plan big buys (gear, materials), check if perks will affect prices.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Practical prep (beginner-friendly)">
        <ul>
          <li>
            <strong>Before the mayor changes:</strong> stock consumables/materials you will use anyway.
          </li>
          <li>
            <strong>During the perk:</strong> do the grind that the perk buffs. Don’t random-switch.
          </li>
          <li>
            <strong>After the perk:</strong> prices often normalize. Avoid panic-buying.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Economy rules (safe, no gambling)">
        <ul>
          <li>
            Prefer <strong>high-volume</strong> items. Low-volume markets are easier to manipulate and harder to exit.
          </li>
          <li>
            Always check taxes/fees before you call something a profit.
          </li>
          <li>
            If you’re unsure: split buys over time. Don’t go all-in on one prediction.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Common mistakes">
        <ul>
          <li>
            Prepping items you won’t actually grind with (you end up reselling at a loss).
          </li>
          <li>
            Buying at the top of the hype. Often the best entry is <strong>before</strong> everyone talks about it.
          </li>
          <li>
            Forgetting the simple option: just grind the buffed method more consistently.
          </li>
        </ul>
      </GuideSection>

      <ResourceLinks
        title="Mayor reference"
        links={[
          {
            title: "Hypixel Wiki (Mayors)",
            description: "Mayor list and perk reference.",
            href: "https://wiki.hypixel.net/Mayor",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki (Events)",
            description: "General events reference.",
            href: "https://wiki.hypixel.net/Events",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="Economy tools"
        description="Useful to check before/after price changes around mayors/events."
        links={[
          {
            title: "COFL Sky",
            description: "Prices, history, flipping tools.",
            href: "https://sky.coflnet.com/",
            tag: "Economy",
          },
        ]}
      />

      <ResourceLinks
        title="YouTube searches"
        description="Direct intent searches — sort by upload date to find current mayor prep guides."
        links={[
          {
            title: "Mayor prep guide",
            description: "Search: how to prep for next mayor, what to buy, what to grind.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+mayor+prep+guide",
            tag: "YouTube",
          },
          {
            title: "Event money making",
            description: "Search: best money making during events, routes, setups.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+event+money+making",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
