import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function EventsPage() {
  return (
    <DocsLayout
      title="Mayors & Events"
      description="Like a calendar + planning page: what mayors do, how elections work, and how to prep for profit windows."
    >
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
            <strong>Before the mayor changes</strong>: stock consumables/materials you will use anyway.
          </li>
          <li>
            <strong>During the perk</strong>: do the grind that the perk buffs. Don’t random-switch.
          </li>
          <li>
            <strong>After the perk</strong>: prices often normalize. Avoid panic-buying.
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
        description="Useful to check “before/after” price changes around mayors/events."
        links={[
          {
            title: "COFL Sky",
            description: "Prices, history, flipping tools.",
            href: "https://sky.coflnet.com/",
            tag: "Economy",
          },
        ]}
      />
    </DocsLayout>
  );
}
