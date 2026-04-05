import { DocsLayout } from "../../components/docs-layout";
import { GuideSection } from "../../components/guide-section";
import { ResourceLinks } from "../../components/resource-links";
import { DataTable } from "../../components/data-table";
import { TipCallout } from "../../components/tip-callout";
import { AccordionSection } from "../../components/accordion-section";

export default function CollectionsPage() {
  return (
    <DocsLayout
      title="Collections & Minions"
      description="Important collection unlocks, best minion setups for passive income, and how to get more minion slots."
    >
      {/* ── Overview ── */}
      <GuideSection
        title="Why collections matter"
        description="Collections unlock recipes, minion tiers, and critical game features."
      >
        <ul>
          <li>
            <strong>Recipes</strong>: many important items are locked behind collection milestones.
          </li>
          <li>
            <strong>Minion slots</strong>: every unique minion you craft adds a slot (up to the cap).
          </li>
          <li>
            <strong>Progression gates</strong>: some content requires specific collection levels
            (e.g., Redstone for accessory bag, Wheat for farm).
          </li>
          <li>
            <strong>Minions</strong>: your best source of <strong>passive income</strong>. Set them up and they
            generate coins while you&apos;re offline.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="info" title="Minion slots are account-wide">
        <p>
          Every new <strong>unique minion</strong> you craft adds a minion slot to your profile.
          Craft Tier I of as many different minions as possible to unlock slots cheaply.
        </p>
      </TipCallout>

      {/* ── Best Minions ── */}
      <DataTable
        title="Best minions for passive income"
        description="Approximate coins/day with Tier XI + Enchanted Lava Bucket + Super Compactor 3000."
        columns={[
          { key: "minion", label: "Minion" },
          { key: "tier", label: "Recommended Tier" },
          { key: "coins", label: "~Coins/Day" },
          { key: "fuel", label: "Fuel" },
          { key: "setup", label: "Extras" },
          { key: "notes", label: "Notes" },
        ]}
        rows={[
          { minion: "Snow Minion", tier: "XI", coins: "~150-200k", fuel: "E. Lava Bucket", setup: "Diamond Spreading", notes: "Safest passive income. Diamond Spreading adds extra profit." },
          { minion: "Tarantula Minion", tier: "XI", coins: "~200-300k", fuel: "E. Lava Bucket", setup: "Super Compactor", notes: "Higher profit but requires Spider Slayer collection." },
          { minion: "Revenant Minion", tier: "XI", coins: "~180-250k", fuel: "E. Lava Bucket", setup: "Super Compactor", notes: "Good profit, requires Zombie Slayer collection." },
          { minion: "Clay Minion", tier: "XI", coins: "~120-180k", fuel: "E. Lava Bucket", setup: "Super Compactor", notes: "Easy to set up. Good for beginners." },
          { minion: "Voidling Minion", tier: "XI", coins: "~250-400k", fuel: "E. Lava Bucket", setup: "Super Compactor", notes: "High profit but expensive to set up." },
          { minion: "Inferno Minion", tier: "XI", coins: "~300-500k", fuel: "Everburning Flame", setup: "Special fuel", notes: "Very high profit, requires Crimson Isle progression." },
        ]}
        caption="Values are approximate and fluctuate with Bazaar prices."
      />

      <TipCallout type="tip" title="Snow Minions + Diamond Spreading">
        <p>
          The <strong>safest and most beginner-friendly</strong> passive income setup.
          Snow Minions with Diamond Spreading produce enchanted diamonds as a bonus on top of snow.
          Low setup cost, consistent returns.
        </p>
      </TipCallout>

      {/* ── Minion Fuel & Upgrades ── */}
      <GuideSection
        title="Minion fuel & upgrades"
        description="Essential items that make your minions significantly more efficient."
      >
        <ul>
          <li>
            <strong>Enchanted Lava Bucket</strong>: +25% speed, lasts forever. The standard fuel for most minions.
          </li>
          <li>
            <strong>Super Compactor 3000</strong>: auto-compacts items (e.g., snow → enchanted snow).
            Saves inventory space and increases sell value.
          </li>
          <li>
            <strong>Diamond Spreading</strong>: adds diamond drops to any minion.
            Best paired with Snow Minions for extra passive income.
          </li>
          <li>
            <strong>Minion Expander</strong>: increases storage capacity. Useful if you check minions less often.
          </li>
          <li>
            <strong>Auto Smelter / Compactor</strong>: cheaper alternatives to Super Compactor.
          </li>
          <li>
            <strong>Flycatcher</strong>: best-in-slot upgrade for most minions (increases speed further).
          </li>
        </ul>
      </GuideSection>

      {/* ── Getting Minion Slots ── */}
      <GuideSection
        title="How to get minion slots"
        description="More slots = more passive income."
      >
        <ul>
          <li>
            <strong>Craft unique minions</strong>: each new unique minion you craft gives +1 slot.
            Craft Tier I of every minion type you can afford.
          </li>
          <li>
            <strong>Community Center upgrades</strong>: some give extra slots.
          </li>
          <li>
            <strong>Total cap</strong>: you can have up to <strong>31 minion slots</strong> (as of current patch).
          </li>
          <li>
            <strong>Strategy</strong>: use Hyminions calculator to find the cheapest minions to craft for your next slot.
          </li>
        </ul>
      </GuideSection>

      <TipCallout type="tip" title="Use Hyminions">
        <p>
          The <strong>Hyminions calculator</strong> (hyminions.herokuapp.com) shows you the cheapest
          unique minion to craft for your next slot. Can save you millions in unnecessary spending.
        </p>
      </TipCallout>

      {/* ── Important Collections ── */}
      <DataTable
        title="Important collection unlocks"
        description="Collections that gate critical progression."
        columns={[
          { key: "collection", label: "Collection" },
          { key: "level", label: "Level Needed" },
          { key: "unlock", label: "What It Unlocks" },
          { key: "why", label: "Why It Matters" },
        ]}
        rows={[
          { collection: "Redstone", level: "Various", unlock: "Accessory Bag upgrades", why: "More accessory slots = more MP = more damage" },
          { collection: "String", level: "IX", unlock: "Tarantula Minion", why: "One of the best money-making minions" },
          { collection: "Rotten Flesh", level: "IX", unlock: "Revenant Minion", why: "Good passive income minion" },
          { collection: "Wheat", level: "Various", unlock: "Farm recipes + upgrades", why: "Essential for Garden progression" },
          { collection: "Cobblestone", level: "IX", unlock: "Super Compactor 3000", why: "Required for all minion setups" },
          { collection: "Coal", level: "IX", unlock: "Enchanted Lava Bucket", why: "Best minion fuel (permanent)" },
          { collection: "Gold", level: "Various", unlock: "Golden tools + recipes", why: "Multiple important crafting recipes" },
          { collection: "Diamond", level: "IX", unlock: "Diamond Spreading", why: "Best minion upgrade for extra income" },
          { collection: "Ender Pearl", level: "Various", unlock: "End content + recipes", why: "Gates many endgame items" },
          { collection: "Lily Pad", level: "IX", unlock: "Fishing recipes", why: "Important for fishing progression" },
        ]}
      />

      {/* ── Leveling Collections ── */}
      <GuideSection
        title="Leveling collections fast"
        description="Tips for reaching collection milestones efficiently."
      >
        <ul>
          <li>
            <strong>Minions</strong>: set up minions for the collection you need. They gather passively.
          </li>
          <li>
            <strong>Farming/mining</strong>: manual grinding is faster than minions for most collections.
          </li>
          <li>
            <strong>Bazaar buying</strong>: some collections can be leveled by buying items from the Bazaar
            and turning them into the collection. Check if it&apos;s cost-effective first.
          </li>
          <li>
            <strong>Events</strong>: some events boost collection gains. Time your grinding accordingly.
          </li>
        </ul>
      </GuideSection>

      {/* ── FAQ ── */}
      <AccordionSection
        title="Frequently asked questions"
        items={[
          {
            question: "How many minion slots can you get?",
            answer: <p>Up to 31 slots total. Each unique minion crafted adds a slot. Use Hyminions calculator to find the cheapest next craft.</p>,
          },
          {
            question: "Best minion for new players?",
            answer: (
              <p>
                Snow Minions with Diamond Spreading and Enchanted Lava Bucket. Low setup cost, consistent income,
                and easy to understand. Clay Minions are a good alternative if you don&apos;t have Snow collection yet.
              </p>
            ),
          },
          {
            question: "Is Diamond Spreading worth it?",
            answer: (
              <p>
                Yes, absolutely. It adds diamond drops to any minion for free extra income. The upgrade pays for
                itself quickly, especially on Snow Minions.
              </p>
            ),
          },
          {
            question: "How to level collections fast?",
            answer: (
              <p>
                Set up minions for passive collection gain. Manual farming/mining is faster.
                Some collections can be bought from Bazaar (check prices first).
                Events can boost gains.
              </p>
            ),
          },
          {
            question: "What collections should I prioritize?",
            answer: (
              <p>
                Redstone (accessory bag), Cobblestone (Super Compactor), Coal (Enchanted Lava Bucket),
                Diamond (Diamond Spreading), and String (Tarantula Minion) are the highest priority.
              </p>
            ),
          },
        ]}
      />

      {/* ── Resources ── */}
      <ResourceLinks
        title="Tools & references"
        links={[
          { title: "Hyminions", description: "Minion calculator — cheapest minion for next slot.", href: "https://hyminions.herokuapp.com/", tag: "Calculator" },
          { title: "Hypixel Wiki: Collections", description: "All collections and unlock requirements.", href: "https://wiki.hypixel.net/Collections", tag: "Reference" },
          { title: "Hypixel Wiki: Minions", description: "All minion types and tiers.", href: "https://wiki.hypixel.net/Minions", tag: "Reference" },
          { title: "SkyCrypt", description: "Check your collection progress and minion setup.", href: "https://sky.shiiyu.moe/", tag: "Stats" },
        ]}
      />

      <ResourceLinks
        title="Guides &times; YouTube"
        links={[
          { title: "Best Minion Setup", description: "Search: best minions 2025, passive income.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+best+minion+setup+passive+income", tag: "YouTube" },
          { title: "Collection Guide", description: "Search: important collections, what to level.", href: "https://www.youtube.com/results?search_query=hypixel+skyblock+important+collections+guide", tag: "YouTube" },
        ]}
      />

      <ResourceLinks
        title="Related pages"
        links={[
          { title: "Money Making", description: "Compare minion income to active methods.", href: "/money", tag: "Route" },
          { title: "Skills", description: "Collections contribute to skill leveling.", href: "/skills", tag: "Route" },
          { title: "Early Game", description: "Best collection priorities for new players.", href: "/early", tag: "Route" },
        ]}
      />
    </DocsLayout>
  );
}
