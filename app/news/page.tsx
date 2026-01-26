import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function NewsPage() {
  return (
    <DocsLayout
      title="News & patches"
      description="Patch notes are noisy. This page collects reliable sources and helps you quickly figure out what actually matters for you."
    >
      <GuideSection
        title="Patch notes triage (2 minutes)"
        description="A fast checklist to separate signal from noise."
      >
        <ol>
          <li>
            Identify what changed for your lane (Garden, Mining, Dungeons, Economy). If it doesn&apos;t affect your lane, stop there.
          </li>
          <li>
            Scan for keywords: <span className="whitespace-nowrap">&quot;buff/nerf&quot;</span>, drop rate, recipe requirements, NPC prices,
            and any new caps/limits.
          </li>
          <li>
            If the update changes demand or supply, expect price swings — check item history before buying/selling.
          </li>
        </ol>
      </GuideSection>

      <GuideSection title="After a big patch (practical playbook)">
        <ul>
          <li>
            <strong>Don&apos;t panic-buy</strong> in the first hour. Markets overreact.
          </li>
          <li>
            <strong>Re-validate your method</strong>: does the patch change your route, rates, or required gear?
          </li>
          <li>
            <strong>Wait for confirmations</strong>: check multiple sources (forums + wiki + creator testing) before investing big.
          </li>
          <li>
            <strong>Keep a small patch log</strong>: what changed, what you tested, and your new best method.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Common mistakes (and how to avoid them)">
        <ul>
          <li>
            Buying &quot;meta&quot; gear without understanding the requirements (HotM tiers, milestones, dungeon floors, etc.).
          </li>
          <li>
            Switching lanes every patch. Pick one lane and iterate — your consistency is a bigger multiplier than minor buffs.
          </li>
          <li>Forgetting taxes/fees when evaluating flips after balance changes.</li>
        </ul>
      </GuideSection>

      <GuideSection title="What to do next">
        <ul>
          <li>
            If you&apos;re deciding on a grind lane: use <strong>Money</strong> as a comparison hub, then commit for a week.
          </li>
          <li>
            If the patch buffed Mining: check <strong>Mining</strong> for HotM/powder/gear baseline.
          </li>
          <li>
            If the patch buffed an event/mayor: check <strong>Mayors &amp; Events</strong> for prep windows.
          </li>
        </ul>
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

      <ResourceLinks
        title="YouTube searches"
        description="Direct intent searches — sort by upload date to follow the current meta."
        links={[
          {
            title: "Latest patch breakdown",
            description: "Search: patch notes summary + what to do next.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+patch+notes+breakdown",
            tag: "YouTube",
          },
          {
            title: "Economy changes after patch",
            description: "Search: price changes, best flips, what to buy/sell.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+economy+after+patch",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
