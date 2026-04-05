import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function NewsPage() {
  return (
    <DocsLayout
      title="News & Patches"
      description="Patch notes are noisy. This page collects reliable sources and helps you quickly figure out what matters for you."
    >
      <GuideSection title="Patch notes triage (2 minutes)" description="A fast checklist to separate signal from noise.">
        <ol>
          <li>Identify what changed for <strong>your lane</strong> (Garden, Mining, Dungeons, Economy). If nothing changed, stop.</li>
          <li>Scan for keywords: &quot;buff/nerf&quot;, drop rate, recipe requirements, NPC prices, caps/limits.</li>
          <li>If the update changes demand or supply, expect price swings — check item history before buying.</li>
        </ol>
      </GuideSection>

      <TipCallout type="warning" title="Don't panic-buy after patches">
        <p>Markets overreact in the first hour after a patch. Wait for confirmations from multiple sources before investing. Prices usually normalize within 24-48 hours.</p>
      </TipCallout>

      <GuideSection title="After a big patch (practical playbook)">
        <ul>
          <li><strong>Don&apos;t panic-buy</strong> in the first hour.</li>
          <li><strong>Re-validate your method</strong>: does the patch change your route, rates, or gear?</li>
          <li><strong>Wait for confirmations</strong>: check forums + wiki + creator testing before investing.</li>
          <li><strong>Keep a small patch log</strong>: what changed, what you tested, your new best method.</li>
        </ul>
      </GuideSection>

      <GuideSection title="Common mistakes">
        <ul>
          <li>Buying &quot;meta&quot; gear without understanding the requirements.</li>
          <li>Switching lanes every patch. Consistency is a bigger multiplier than minor buffs.</li>
          <li>Forgetting taxes/fees when evaluating flips after balance changes.</li>
        </ul>
      </GuideSection>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "Where do I find patch notes?", answer: <p>Official: Hypixel Forums SkyBlock Patch Notes section. Community: Hypixel Wiki Changelog. YouTube creators often do breakdowns within hours.</p> },
          { question: "Should I change my method after every patch?", answer: <p>No. Only change if the patch directly nerfs your method significantly. Most patches have minor effects. Consistency beats constant switching.</p> },
          { question: "How do patches affect prices?", answer: <p>Buffs increase demand (prices go up temporarily). Nerfs decrease demand (prices drop). New items flood the market initially then stabilize. Check COFL for price history.</p> },
        ]}
      />

      <ResourceLinks
        title="Primary sources"
        links={[
          { title: "Hypixel Forums (Patch Notes)", description: "Official patch notes.", href: "https://hypixel.net/forums/skyblock-patch-notes.158/", tag: "Official" },
          { title: "Hypixel Wiki (Changelog)", description: "Community-maintained changes.", href: "https://wiki.hypixel.net/Changelog", tag: "Reference" },
          { title: "COFL Sky", description: "Price impact tracking.", href: "https://sky.coflnet.com/", tag: "Economy" },
          { title: "Fandom Wiki", description: "Detailed community documentation.", href: "https://hypixel-skyblock.fandom.com/", tag: "Reference" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Latest patch breakdown", description: "Patch notes summary + what to do next.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+patch+notes+breakdown", tag: "YouTube" },
          { title: "Economy changes after patch", description: "Price changes, best flips, what to buy/sell.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+economy+after+patch", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Money Making", description: "Re-evaluate methods after patches.", href: "/money", tag: "Route" },
          { title: "Mayors & Events", description: "Check if patches affect mayor cycles.", href: "/mayor", tag: "Route" },
          { title: "Mods", description: "Update mods after SkyBlock patches.", href: "/mods", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
