import { DocsLayout } from "../../components/docs-layout";
import { Checklist } from "../../components/checklist";
import { ResourceLinks } from "../../components/resource-links";

export default function MoneyPage() {
  return (
    <DocsLayout
      title="Money making"
      description="Pick a method, then jump to the best resources for it. This hub is meant to reduce decision fatigue: choose a lane and optimize it."
    >
      <Checklist
        title="Choose your lane"
        description="Different methods are good at different stages."
        items={[
          { title: "Farming", detail: "Low barrier of entry, steady income. Pairs well with Garden page." },
          { title: "Mining", detail: "High setup cost, massive scaling if optimized." },
          { title: "Flipping", detail: "Best if you enjoy markets and checking prices often." },
          { title: "Events", detail: "Burst profit windows; needs prep." },
        ]}
      />

      <ResourceLinks
        title="Economy tools"
        description="Market data & opportunity tracking."
        links={[
          {
            title: "COFL",
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
    </DocsLayout>
  );
}
