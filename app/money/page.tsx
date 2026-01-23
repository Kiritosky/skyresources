import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function MoneyPage() {
  return (
    <DocsLayout
      title="Money making"
      description="Pick a method, then optimize it. This page helps you choose a lane (based on your stage/time/playstyle) and points you to the right resources."
    >
      <GuideSection title="How to pick a money method" description="The best method is the one you will actually do consistently.">
        <ul>
          <li>
            <strong>Low setup + steady</strong>: usually farming.
          </li>
          <li>
            <strong>High setup + scales hard</strong>: usually mining.
          </li>
          <li>
            <strong>Market enjoyer</strong>: flipping (requires discipline and learning taxes/fees).
          </li>
          <li>
            <strong>Short profit windows</strong>: events (needs prep).
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Beginner-safe rules">
        <ul>
          <li>
            Don’t chase a new “best method” every day. You’ll lose more time than you gain.
          </li>
          <li>
            Learn taxes/fees before flipping. Many “good” flips are negative after tax.
          </li>
          <li>
            Invest in upgrades that increase your hourly output (tools/routes), not just prestige.
          </li>
        </ul>
      </GuideSection>

      <ResourceLinks
        title="Economy tools"
        description="Market data & opportunity tracking."
        links={[
          {
            title: "COFL Sky",
            description: "Flips, item history, and market tools.",
            href: "https://sky.coflnet.com/",
            tag: "Economy",
          },
          {
            title: "Hypixel Wiki (Bazaar)",
            description: "Bazaar mechanics reference.",
            href: "https://wiki.hypixel.net/Bazaar",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="Money making guides × YouTube"
        description="Direct intent searches for each lane."
        links={[
          {
            title: "Farming money making",
            description: "Search: best crops, setup path, consistent profit.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+farming+money+making",
            tag: "YouTube",
          },
          {
            title: "Mining money making",
            description: "Search: routes, HotM, powder, best mining methods.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+mining+money+making+routes",
            tag: "YouTube",
          },
          {
            title: "Bazaar flipping",
            description: "Search: taxes, volume, margins, beginner flips.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+bazaar+flipping+guide",
            tag: "YouTube",
          },
          {
            title: "Auction flipping",
            description: "Search: AH flips, risk management, tools.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+auction+flipping+guide",
            tag: "YouTube",
          },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          {
            title: "Garden",
            description: "If you choose farming, start here.",
            href: "/garden",
            tag: "Route",
          },
          {
            title: "Mayors & Events",
            description: "Profit windows and prep.",
            href: "/mayor",
            tag: "Route",
          },
        ]}
      />
    </DocsLayout>
  );
}
