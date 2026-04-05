import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function EnchantingPage() {
  return (
    <DocsLayout
      title="Enchanting"
      description="Best enchantments per gear type, experimentation table guide, ultimate enchants, and enchanting XP methods."
    >
      {/* ── Overview ── */}
      <GuideSection
        title="Enchanting overview"
        description="Enchantments are one of the biggest power multipliers in the game."
      >
        <ul>
          <li>
            Applied at the <strong>Enchantment Table</strong> or via <strong>enchanted books</strong> in an anvil.
          </li>
          <li>
            <strong>Higher enchanting level</strong> = access to better enchants and higher tiers.
          </li>
          <li>
            <strong>Ultimate Enchantments</strong> are special — only one per item, and they override each other.
          </li>
          <li>
            The <strong>Experimentation Table</strong> is the best source of enchanting XP (and valuable books).
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="warning" title="Telekinesis first">
        <p>
          <strong>Telekinesis</strong> is basically required on every weapon and tool.
          It auto-collects drops. Get it before anything else.
        </p>
      </TipCallout>

      {/* ── Sword Enchants ── */}
      <DataTable
        title="Best sword enchantments"
        description="Priority order for melee weapons."
        columns={[
          { key: "enchant", label: "Enchantment" },
          { key: "max", label: "Max Level" },
          { key: "effect", label: "Effect" },
          { key: "priority", label: "Priority" },
        ]}
        rows={[
          { enchant: "Sharpness", max: "VII", effect: "Flat damage increase", priority: "Essential" },
          { enchant: "Critical", max: "VII", effect: "Increased crit damage", priority: "Essential" },
          { enchant: "Giant Killer", max: "VII", effect: "More damage to higher HP mobs", priority: "Essential" },
          { enchant: "First Strike", max: "V", effect: "Bonus damage on first hit", priority: "High" },
          { enchant: "Ender Slayer", max: "VII", effect: "Damage to end mobs", priority: "High (end content)" },
          { enchant: "Smite", max: "VII", effect: "Damage to undead", priority: "High (dungeons)" },
          { enchant: "Vampirism", max: "VI", effect: "Heal on hit", priority: "Medium" },
          { enchant: "Life Steal", max: "V", effect: "Heal % of damage", priority: "Medium" },
          { enchant: "Looting", max: "V", effect: "More mob drops", priority: "High (farming)" },
          { enchant: "Scavenger", max: "V", effect: "Coins from mobs", priority: "Medium" },
          { enchant: "Thunderlord", max: "VII", effect: "Lightning every 3 hits", priority: "Medium" },
          { enchant: "Telekinesis", max: "I", effect: "Auto-collect drops", priority: "Essential" },
          { enchant: "Experience", max: "V", effect: "More XP from mobs", priority: "Medium" },
        ]}
      />

      {/* ── Bow Enchants ── */}
      <DataTable
        title="Best bow enchantments"
        description="For bows and shortbows."
        columns={[
          { key: "enchant", label: "Enchantment" },
          { key: "max", label: "Max Level" },
          { key: "effect", label: "Effect" },
          { key: "priority", label: "Priority" },
        ]}
        rows={[
          { enchant: "Power", max: "VII", effect: "Flat arrow damage increase", priority: "Essential" },
          { enchant: "Overload", max: "V", effect: "Crit chance + crit damage", priority: "Essential" },
          { enchant: "Soul Eater", max: "V", effect: "Absorb mob strength on kill", priority: "Essential (dungeons)" },
          { enchant: "Flame", max: "II", effect: "Fire damage on arrows", priority: "High" },
          { enchant: "Aiming", max: "V", effect: "Arrows home toward mobs", priority: "High" },
          { enchant: "Dragon Tracer", max: "V", effect: "Arrows curve toward dragons", priority: "High (M7)" },
          { enchant: "Infinite Quiver", max: "X", effect: "Chance to not consume arrows", priority: "Medium" },
          { enchant: "Snipe", max: "IV", effect: "Damage scales with distance", priority: "Medium" },
        ]}
      />

      {/* ── Armor Enchants ── */}
      <DataTable
        title="Best armor enchantments"
        description="Applied to helmets, chestplates, leggings, and boots."
        columns={[
          { key: "enchant", label: "Enchantment" },
          { key: "max", label: "Max Level" },
          { key: "effect", label: "Effect" },
          { key: "priority", label: "Priority" },
        ]}
        rows={[
          { enchant: "Protection", max: "VII", effect: "Flat defense increase", priority: "Essential" },
          { enchant: "Growth", max: "VII", effect: "Flat HP increase", priority: "Essential" },
          { enchant: "Rejuvenate", max: "V", effect: "Health regeneration", priority: "High" },
          { enchant: "Ender Slayer", max: "VII", effect: "Defense vs end mobs", priority: "High (end content)" },
          { enchant: "Sugar Rush", max: "III", effect: "Speed boost", priority: "Medium" },
          { enchant: "Thorns", max: "III", effect: "Reflect damage to attackers", priority: "Low (situational)" },
          { enchant: "Respite", max: "V", effect: "Regen while not attacking", priority: "Medium" },
          { enchant: "True Protection", max: "I", effect: "Reduce true damage", priority: "High (dungeons)" },
        ]}
      />

      <TipCallout type="info" title="Thorns warning">
        <p>
          <strong>Thorns</strong> is controversial. It reflects damage but also causes knockback to mobs,
          which can be annoying in dungeons. Most players skip it unless specifically needed.
        </p>
      </TipCallout>

      {/* ── Ultimate Enchants ── */}
      <GuideSection
        title="Ultimate Enchantments"
        description="Special enchants — only ONE per item. Choose carefully."
      >
        <p>
          Ultimate enchantments are rare and powerful, but you can only apply <strong>one per item</strong>.
          If you apply a second, it replaces the first. Choose based on your build:
        </p>
        <ul>
          <li>
            <strong>One For All</strong>: triples damage but removes all other enchants. For raw damage builds only.
          </li>
          <li>
            <strong>Soul Eater</strong>: absorbs killed mob&apos;s strength. Amazing for bows (Juju, Terminator).
          </li>
          <li>
            <strong>Overload</strong>: crit chance + crit damage. Best general-purpose combat enchant.
          </li>
          <li>
            <strong>Legion</strong>: stats scale with nearby players. Great for dungeons.
          </li>
          <li>
            <strong>Wisdom</strong>: intelligence boost. Good for mage builds.
          </li>
          <li>
            <strong>Bank</strong>: save coins on death. Useful for early game.
          </li>
          <li>
            <strong>Combo</strong>: stacking damage per consecutive hit. Good for fast-hitting weapons.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="danger" title="One For All warning">
        <p>
          <strong>One For All</strong> removes ALL other enchantments from the item.
          Only use it on weapons where raw damage is the only thing that matters.
          You cannot add other enchants back after applying it.
        </p>
      </TipCallout>

      {/* ── Experimentation Table ── */}
      <GuideSection
        title="Experimentation Table"
        description="The best source of enchanting XP and valuable enchanted books."
      >
        <p>
          The Experimentation Table offers 3 minigames that give enchanting XP and random rewards
          (including rare and valuable enchanted books). You get attempts daily.
        </p>
        <ul>
          <li>
            <strong>Chronomatron</strong>: memory game — repeat the sequence of colors.
            Tip: use a pen/paper or screenshot for longer sequences.
          </li>
          <li>
            <strong>Superpairs</strong>: matching pairs memory game.
            Tip: go row by row to build a mental map. Speed matters less than accuracy.
          </li>
          <li>
            <strong>Ultrasequencer</strong>: click items in the correct order.
            Tip: read the order carefully before clicking. Mistakes end the game.
          </li>
        </ul>
        <p>
          <strong>Mod tip</strong>: SkyHanni and Skytils both have solvers for experimentation table
          minigames that make them much easier.
        </p>
      </GuideSection>

      {/* ── Enchanting XP ── */}
      <GuideSection
        title="Leveling enchanting"
        description="How to level the enchanting skill efficiently."
      >
        <ul>
          <li>
            <strong>Experimentation Table</strong>: best XP source. Do all 3 minigames daily.
          </li>
          <li>
            <strong>Enchanting items</strong>: enchant and disenchant items at the enchantment table.
          </li>
          <li>
            <strong>Grandma Wolf pet</strong>: gives combat XP as enchanting XP. Passive while grinding.
          </li>
          <li>
            <strong>Enchanting XP boosts</strong>: Barry mayor gives +15% enchanting XP.
          </li>
        </ul>
      </GuideSection>

      {/* ── FAQ ── */}
      <AccordionSection
        title="Frequently asked questions"
        items={[
          {
            question: "Can I have multiple ultimate enchantments on one item?",
            answer: <p>No. Only one ultimate enchantment per item. Applying a second one replaces the first.</p>,
          },
          {
            question: "Best enchants for dungeon weapons?",
            answer: (
              <p>
                Swords: Sharpness VII, Smite VII (for undead floors), Giant Killer VII, Critical VII.
                Bows: Soul Eater V, Overload V, Power VII. Ultimate: Legion for party play.
              </p>
            ),
          },
          {
            question: "Is Thorns worth it?",
            answer: (
              <p>
                Generally no. The knockback is annoying in most situations, especially dungeons.
                Only consider it for very specific tank builds.
              </p>
            ),
          },
          {
            question: "How to level enchanting fast?",
            answer: (
              <p>
                Do the Experimentation Table daily (all 3 minigames). Use mods like SkyHanni for solvers.
                Enchant items at the table for extra XP. Barry mayor gives +15% enchanting XP.
              </p>
            ),
          },
          {
            question: "What is One For All and should I use it?",
            answer: (
              <p>
                One For All triples your weapon&apos;s base damage but removes all other enchantments.
                Only use it on specific weapons where you just need raw damage (like Livid Dagger for early-game).
              </p>
            ),
          },
        ]}
      />

      {/* ── Resources ── */}
      <ResourceLinks
        title="Tools & references"
        links={[
          { title: "Hypixel Wiki: Enchanting", description: "All enchantments and mechanics.", href: "https://wiki.hypixel.net/Enchanting", tag: "Reference" },
          { title: "Fandom Wiki: Enchantments", description: "Detailed enchantment list.", href: "https://hypixel-skyblock.fandom.com/wiki/Enchantments", tag: "Reference" },
          { title: "SkyCrypt", description: "Check your enchanting level and gear enchants.", href: "https://sky.shiiyu.moe/", tag: "Stats" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Dungeons", description: "Best enchants for dungeon gear.", href: "/dungeons", tag: "Route" },
          { title: "Mining", description: "Best enchants for mining tools.", href: "/mining", tag: "Route" },
          { title: "Mods", description: "SkyHanni + Skytils have experimentation table solvers.", href: "/mods", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
