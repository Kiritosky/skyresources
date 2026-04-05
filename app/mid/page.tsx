import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function MidGamePage() {
  return (
    <DocsLayout
      title="Mid Game"
      description="Mid game is optimization: you have the basics, now turn an okay setup into something that scales."
    >
      <GuideSection title="Mid game focus">
        <ul>
          <li><strong>Optimize one system to completion</strong>: Garden for stable coins or Mining for big scaling.</li>
          <li><strong>MP + tuning</strong>: many builds stall because accessories don&apos;t keep up. Target 300-500 MP.</li>
          <li><strong>Clear gear targets</strong>: defined upgrade checkpoints instead of random items.</li>
          <li><strong>Skill levels</strong>: push your main 2-3 skills. They compound with gear upgrades.</li>
        </ul>
      </GuideSection>

      <DataTable
        title="Mid game gear targets"
        description="What you should be working toward."
        columns={[
          { key: "category", label: "Category" },
          { key: "target", label: "Target" },
          { key: "cost", label: "~Cost" },
          { key: "why", label: "Why" },
        ]}
        rows={[
          { category: "MP", target: "300-500 Magical Power", cost: "~20-50M total", why: "Biggest damage/survivability multiplier" },
          { category: "Combat armor", target: "Shadow Assassin or Necron", cost: "~20-40M", why: "Ready for F5-F7 dungeons" },
          { category: "Weapon", target: "Juju Shortbow or Livid Dagger", cost: "~10-30M", why: "Solid DPS for dungeons and slayers" },
          { category: "Farm tool", target: "T3 Mathematical Hoe (maxed crop)", cost: "~5-10M", why: "Major farming income boost" },
          { category: "Mining", target: "HotM 7 + Yog Armor + Drill", cost: "~30-50M", why: "Start serious mining income" },
          { category: "Pet", target: "Legendary Enderman or class-specific", cost: "~10-30M", why: "Combat scaling" },
        ]}
      />

      <TipCallout type="tip" title="MP is the hidden multiplier">
        <p>If your damage feels stuck despite gear upgrades, it&apos;s almost always <strong>low MP</strong>. Going from 200 to 400 MP can feel like doubling your damage. Check the <a href="/accessories">Accessories</a> page for cheapest MP gains.</p>
      </TipCallout>

      <GuideSection title="Money making (mid game)" description="Methods that scale with setup and skill.">
        <ul>
          <li><strong>Garden</strong>: crop choice, Farming Fortune stacking, contest/visitor optimization. ~8-15M/hr.</li>
          <li><strong>Mining</strong>: HotM planning, drills, routes, powder. Starting to get profitable.</li>
          <li><strong>Flipping</strong>: data, taxes, volume, risk management. Can be very lucrative.</li>
          <li><strong>Lava fishing</strong>: Crimson Isle unlocked. Solid income with lava rods.</li>
        </ul>
      </GuideSection>

      <AccordionSection
        title="Frequently asked questions"
        items={[
          { question: "When am I mid game?", answer: <p>When you have 100+ MP, a dedicated money method earning 5M+/hr, and basic progression in at least one system (Garden, Mining, or Dungeons). You&apos;re no longer figuring out basics.</p> },
          { question: "Should I do dungeons or mining?", answer: <p>Both are viable. Dungeons gives unique gear and is fun. Mining gives consistent coins. Pick based on what you enjoy — you&apos;ll stick with it longer.</p> },
          { question: "How much should I invest in gear?", answer: <p>Don&apos;t spend more than 50% of your bank on one upgrade. Keep a coin buffer for unexpected costs and opportunities.</p> },
        ]}
      />

      <ResourceLinks
        title="Tools"
        links={[
          { title: "SkyCrypt", description: "Check MP, skills, gear/enchants.", href: "https://sky.shiiyu.moe/", tag: "Stats" },
          { title: "COFL Sky", description: "Prices/history for data-driven decisions.", href: "https://sky.coflnet.com/", tag: "Economy" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Mid Game Progression", description: "Scaling methods, setup paths.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+mid+game+progression+guide", tag: "YouTube" },
          { title: "Mining Progression", description: "HotM tree, powder, routes.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+mining+progression+hotm", tag: "YouTube" },
          { title: "Dungeons Mid Game", description: "Gear tiers, class progression.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+dungeons+progression+midgame", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Next topics"
        links={[
          { title: "Accessories & MP", description: "Your #1 upgrade priority.", href: "/accessories", tag: "Route" },
          { title: "Mining", description: "Start serious mining income.", href: "/mining", tag: "Route" },
          { title: "Dungeons", description: "Floor progression and gear paths.", href: "/dungeons", tag: "Route" },
          { title: "Slayers", description: "Unlock slayer content and drops.", href: "/slayers", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
