import { DocsLayout } from "@/components/docs-layout";
import { Checklist } from "@/components/checklist";
import { ResourceLinks } from "@/components/resource-links";

export default function EventsPage() {
  return (
    <DocsLayout
      title="Mayors & Events"
      description="Elections, perks, and event prep. This page is about knowing what’s coming and what to do before it starts."
    >
      <Checklist
        title="Prep checklist"
        items={[
          { title: "Check current mayor", detail: "Know which perks are active and what they affect." },
          { title: "Election timing", detail: "If an election is close, delay big investments where perks matter." },
          { title: "Event supplies", detail: "Stock consumables or gear before demand spikes." },
        ]}
      />

      <ResourceLinks
        title="Tracking links"
        links={[
          {
            title: "Hypixel Wiki (Mayors)",
            description: "Mayor list and perk reference.",
            href: "https://wiki.hypixel.net/Mayor",
            tag: "Reference",
          },
        ]}
      />
    </DocsLayout>
  );
}
