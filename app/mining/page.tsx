import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";

export default function MiningPage() {
  return (
    <DocsLayout
      title="Mining"
      description="Ein klarer, praxisnaher Überblick: HotM-Pfad, Powder, Gear-Progression und wie du dir die beste Mining-Methode aussuchst."
    >
      <GuideSection title="Kurzüberblick (was du wirklich brauchst)">
        <ul>
          <li>
            <strong>HotM auf 10</strong> bringen (ohne das sind viele Upgrades/Setups nicht sinnvoll).
          </li>
          <li>
            <strong>Powder</strong> ist der größte Multiplikator für Rates (Speed/Fortune/Procs).
          </li>
          <li>
            <strong>Gear stufenweise upgraden</strong> (Armor + Tool + Pet), statt alles auf einmal.
          </li>
          <li>
            <strong>Methode wählen</strong>: Crystal Hollows (Gems) vs. Glacite Tunnels vs. DM-Diamonds usw.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Heart of the Mountain (HotM)" description="Dein Skill-Tree für Mining. Erst freischalten, dann hochziehen.">
        <p>
          Nachdem du <strong>Rhys 15× ein beliebiges Enchanted Mining-Item</strong> gibst, schaltest du die
          <strong> Dwarven Mines</strong> frei – inklusive <strong>Heart of the Mountain</strong>. Für ernsthafte Money-Rates
          solltest du HotM langfristig auf <strong>Tier 10</strong> bringen.
        </p>
      </GuideSection>

      <GuideSection title="HotM upgraden (XP schnell & sinnvoll)">
        <ul>
          <li>
            <strong>Tier 1–7:</strong> Commissions in den <strong>Dwarven Mines</strong> (einfacher/geradliniger). Crystal Hollows
            geht auch, wenn’s dir mehr Spaß macht.
          </li>
          <li>
            <strong>Tier 7–10:</strong> Commissions in den <strong>Glacite Tunnels</strong>.
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Tree Path (Perks, auf die du achten solltest)"
        description="Für Commissions ist nicht jeder Perk wichtig – aber ein paar sind konstant stark."
      >
        <p>
          Je nach Mining-Methode (Gems, Mithril, Glacite usw.) gibt es optimale Skill-Tree-Pfade. Während du nur
          HotM-XP farmst, reichen meist solide Allround-Perks.
        </p>
        <ul>
          <li>
            <strong>Pickobulus</strong>
          </li>
          <li>
            <strong>Efficient Miner</strong>
          </li>
          <li>
            <strong>Titanium Insanium</strong>
          </li>
          <li>
            <strong>Mining Speed / Mining Fortune</strong> sowie Perks, die <strong>extra Powder</strong> geben
          </li>
        </ul>
      </GuideSection>

      <GuideSection
        title="Powder (Mithril / Gemstone / Glacite)"
        description="Powder entscheidet über deine Rates – du kannst früher starten, aber es skaliert brutal."
      >
        <p>
          Jede HotM-Perk-Stufe kostet Powder. Du kannst zwar schon mit weniger Powder starten, aber das drückt die
          Rates spürbar. Eine oft genannte Zielgröße ist etwa <strong>10m / 20m / 20m</strong> (Mithril / Gemstone /
          Glacite) – wobei du <strong>Glacite Powder</strong> nur für Glacite-Tunnels-Perks brauchst.
        </p>
        <p>
          Für einige permanente HotM-Upgrades (Core of the Mountain / Mining Master Perk) brauchst du zusätzlich immer
          wieder Powder. Typische Richtwerte: <strong>8m Glacite</strong> für die letzten Core-/Master-Tiers (nur relevant, wenn
          du diese Linie pushen willst), plus ungefähr <strong>150k Mithril</strong> und <strong>1.4m Gemstone</strong> für bestimmte Core-
          Upgrades.
        </p>
      </GuideSection>

      <GuideSection title="Powder Mining (kurz & effektiv)">
        <ul>
          <li>
            <strong>Mithril Powder:</strong> Mithril abbauen + Events mitnehmen.
          </li>
          <li>
            <strong>Gemstone Powder:</strong> <strong>Jungle Pickaxe</strong> holen und in der <strong>Crystal Hollows Jungle</strong> Hard Stone
            farmen. Die Chests geben Powder/Rewards; „Sludge“ verkauft sich gut.
          </li>
          <li>
            <strong>Glacite Powder:</strong> vor allem über <strong>noch mehr Commissions</strong>.
          </li>
        </ul>
        <p>
          Wichtig: Für das Chest-Gameplay lohnt es sich, <strong>Great Explorer</strong> hoch zu skillen.
        </p>
        <p>
          Powder-Gain Buffs: <strong>Powder Buff</strong> Perk + <strong>Spicy Goblin Omelette</strong> sind eine große Basis (zusammen bis
          zu ~70% mehr Powder). Manche Drills geben ebenfalls Powder-Bonusse.
        </p>
      </GuideSection>

      <GuideSection title="Gear-Progression (Early → End Game)" description="Armor + Tool + Pet – stufenweise upgraden.">
        <h3 className="text-base font-semibold">Early Game</h3>
        <ul>
          <li>
            <strong>Armor:</strong> Glacite Armor (Drop von Glacite Walkers in den Dwarven Mines).
          </li>
          <li>
            <strong>Tool:</strong> Fractured Mithril Pickaxe (bei Bubu, 10k) → weiter bei Bubu upgraden bis Refined Mithril
            Pickaxe.
          </li>
          <li>
            <strong>Pet:</strong> Mithril Golem (beliebige Rarity) oder Legendary Silverfish.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Mid Game</h3>
        <ul>
          <li>
            <strong>Armor:</strong> Yog Armor (Hard Stone Collection) – hat Gem Slots. Slots/Gems sind optional, helfen aber
            beim Progress.
          </li>
          <li>
            <strong>Tool:</strong> Jungle Pickaxe behalten oder in Richtung Drill gehen. Ein solider Start-Drill ist
            <strong> Titanium Drill DR-X355</strong> (kaufen/forgen) – der Upgradetree führt später weiter.
          </li>
          <li>
            <strong>Pet:</strong> Legendary <strong>Bal</strong> mit <strong>Bejeweled Collar</strong>.
          </li>
          <li>
            <strong>Extras:</strong> Titanium Equipment Set ist hier oft ein guter Schritt.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">Late Game</h3>
        <ul>
          <li>
            <strong>Armor:</strong> <strong>Divan’s Armor</strong> (Gemstone Chambers sind teuer; nach und nach upgraden). Dazu meist
            <strong> Jaded</strong> als Reforge.
          </li>
          <li>
            <strong>Tool:</strong> Upgrade Richtung <strong>Titanium Drill DR-X655</strong> (bis Divan’s Drill).
          </li>
          <li>
            <strong>Pet:</strong> Bal bleibt top in Magma Fields; <strong>Scatha</strong> ist in vielen anderen Bereichen stark;
            <strong> Glacite Golem</strong> primär für Glacite Mineshafts.
          </li>
          <li>
            <strong>Equipment:</strong> z.B. <strong>Dwarven Handwarmers</strong>.
          </li>
        </ul>

        <h3 className="mt-4 text-base font-semibold">End Game</h3>
        <p>
          Jetzt geht’s um Feinschliff: alle Divan-Slots + <strong>Perfect Gems</strong>, <strong>Divan’s Powder Coatings</strong>,
          <strong> Ice Cold V</strong>, und ein vollständig ausgebauter Drill (z.B. Polished Engine, Fuel Tank, Omelette usw.).
          Reforge hängt von der Methode ab, <strong>Lustrous</strong> ist ein guter Default.
        </p>
        <p>
          Pets: <strong>Quick Claw</strong> ist ein häufiger Endgame-Standard. Equipment: oft <strong>2× Gemstone Equipment</strong> +
          <strong> Pendant of Divan</strong>.
        </p>
      </GuideSection>

      <GuideSection title="Welche Mining-Methode?" description="Du bist vorbereitet – jetzt zählt Spaß + Setup + Gebiet.">
        <p>
          Mining hat extrem viel Content. Du kannst z.B. in den <strong>Crystal Hollows</strong> Gems farmen, in den
          <strong> Glacite Tunnels</strong> spielen oder in den <strong>Dwarven Mines</strong> Diamonds/Mithril machen. Dieses Sheet ist
          bewusst ein <strong>Progression-Guide</strong>: er bringt dich zu einem Setup, mit dem fast jede Methode gut läuft.
        </p>
        <p>
          Der nächste Schritt ist: pick eine Methode, die dir liegt, und optimiere dafür deinen Tree, Gear, Route und
          Party/Server-Flow.
        </p>
      </GuideSection>

      <ResourceLinks
        title="Useful links"
        description="Tools + Referenzen (safe, schnell, ohne Rabbithole)."
        links={[
          {
            title: "SkyCrypt",
            description: "Check Mining Stats, MP, Gear, Pets.",
            href: "https://sky.shiiyu.moe/",
            tag: "Stats",
          },
          {
            title: "Hypixel Wiki: Mining",
            description: "Übersicht zu Mining, Collections, Items.",
            href: "https://wiki.hypixel.net/Mining",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Heart of the Mountain",
            description: "HotM Perks, Costs, Requirements.",
            href: "https://wiki.hypixel.net/Heart_of_the_Mountain",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Crystal Hollows",
            description: "Biomes, Mobs, Mechanics, Commissions.",
            href: "https://wiki.hypixel.net/Crystal_Hollows",
            tag: "Reference",
          },
          {
            title: "Hypixel Wiki: Dwarven Mines",
            description: "Commissions, Events, Area mechanics.",
            href: "https://wiki.hypixel.net/Dwarven_Mines",
            tag: "Reference",
          },
        ]}
      />

      <ResourceLinks
        title="YouTube Searches"
        description="Einfach klicken, dann nach Aktualität sortieren (Meta ändert sich)."
        links={[
          {
            title: "HotM 10 / Commission Route",
            description: "Search: fastest HotM leveling 2025/2026.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+hotm+10+fastest+commissions",
            tag: "YouTube",
          },
          {
            title: "Powder Mining (Mithril/Gemstone)",
            description: "Search: powder mining guide, great explorer, chest routes.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+powder+mining+guide+great+explorer",
            tag: "YouTube",
          },
          {
            title: "Gemstone Mining (Crystal Hollows)",
            description: "Search: gemstone mining route, setup, rates.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+gemstone+mining+route+setup",
            tag: "YouTube",
          },
          {
            title: "Glacite Tunnels mining",
            description: "Search: glacite tunnels commissions + mining methods.",
            href: "https://www.youtube.com/results?search_query=hypixel+skyblock+glacite+tunnels+mining",
            tag: "YouTube",
          },
        ]}
      />
    </DocsLayout>
  );
}
