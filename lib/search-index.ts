export type SearchEntry = {
  title: string;
  path: string;
  section?: string;
  tags: string[];
};

export const SEARCH_INDEX: SearchEntry[] = [
  // ── Home ──
  { title: "Home", path: "/", tags: ["home", "resource hub", "skyblock", "start"] },

  // ── Progression ──
  { title: "Early Game", path: "/early", tags: ["early", "beginner", "start", "progression"] },
  { title: "Priorities & Setup", path: "/early", section: "Priorities", tags: ["priorities", "order", "first steps"] },
  { title: "Money Making (Early)", path: "/early", section: "Money Making", tags: ["coins", "money", "early"] },
  { title: "Mid Game", path: "/mid", tags: ["mid", "optimization", "scaling"] },
  { title: "Mid Game Money", path: "/mid", section: "Money Making", tags: ["mid", "money", "methods"] },
  { title: "End Game", path: "/end", tags: ["end", "endgame", "meta", "min-max"] },
  { title: "Endgame Money Making", path: "/end", section: "Economy", tags: ["endgame", "money", "economy"] },
  { title: "Skills", path: "/skills", tags: ["skills", "xp", "leveling", "milestones"] },
  { title: "Skill XP Methods", path: "/skills", section: "Best XP Methods", tags: ["farming xp", "combat xp", "mining xp"] },
  { title: "Skill Milestones", path: "/skills", section: "Milestones", tags: ["level 25", "level 50", "level 60"] },
  { title: "Accessories & Magical Power", path: "/accessories", tags: ["accessories", "mp", "magical power", "tuning", "power stones"] },
  { title: "MP Breakpoints", path: "/accessories", section: "MP Breakpoints", tags: ["mp", "magical power", "breakpoints"] },
  { title: "Accessory Bag Upgrades", path: "/accessories", section: "Bag Upgrades", tags: ["bag", "upgrades", "redstone collection"] },

  // ── Game Systems ──
  { title: "Garden", path: "/garden", tags: ["garden", "farming", "crops", "farming fortune"] },
  { title: "Crop Profit Comparison", path: "/garden", section: "Crop Profits", tags: ["melon", "cactus", "nether wart", "crop", "profit"] },
  { title: "Farming Fortune Sources", path: "/garden", section: "Farming Fortune", tags: ["ff", "farming fortune", "armor", "pet"] },
  { title: "Visitors & Contests", path: "/garden", section: "Visitors", tags: ["visitors", "contest", "medals", "jacob"] },
  { title: "Pest Farming", path: "/garden", section: "Pests", tags: ["pest", "farming", "greenhouse"] },
  { title: "Mining", path: "/mining", tags: ["mining", "hotm", "powder", "gemstone", "dwarven"] },
  { title: "Heart of the Mountain", path: "/mining", section: "HotM", tags: ["hotm", "tree", "perks", "mining"] },
  { title: "Powder Guide", path: "/mining", section: "Powder", tags: ["powder", "mithril", "gemstone", "glacite"] },
  { title: "Mining Gear Progression", path: "/mining", section: "Gear", tags: ["divan", "drill", "armor", "mining gear"] },
  { title: "Gemstone Mining", path: "/mining", section: "Methods", tags: ["gemstone", "crystal hollows", "ruby", "jade"] },
  { title: "Dungeons", path: "/dungeons", tags: ["dungeons", "catacombs", "floors", "classes"] },
  { title: "Dungeon Classes", path: "/dungeons", section: "Classes", tags: ["mage", "berserker", "archer", "tank", "healer"] },
  { title: "Floor Progression", path: "/dungeons", section: "Floors", tags: ["f1", "f7", "m7", "master mode"] },
  { title: "Dungeon Gear", path: "/dungeons", section: "Gear", tags: ["necron", "storm", "goldor", "hyperion"] },
  { title: "Secrets", path: "/dungeons", section: "Secrets", tags: ["secrets", "rooms", "s+", "score"] },
  { title: "Slayers", path: "/slayers", tags: ["slayer", "bosses", "rng", "drops"] },
  { title: "Revenant Horror", path: "/slayers", section: "Zombie Slayer", tags: ["zombie", "revenant", "rev"] },
  { title: "Voidgloom Seraph", path: "/slayers", section: "Enderman Slayer", tags: ["enderman", "voidgloom", "eman"] },
  { title: "Inferno Demonlord", path: "/slayers", section: "Blaze Slayer", tags: ["blaze", "inferno", "demonlord"] },
  { title: "Pets", path: "/pets", tags: ["pets", "pet score", "leveling", "golden dragon"] },
  { title: "Combat Pets", path: "/pets", section: "Combat", tags: ["combat", "pet", "damage"] },
  { title: "Farming Pets", path: "/pets", section: "Farming", tags: ["elephant", "rabbit", "farming pet"] },
  { title: "Mining Pets", path: "/pets", section: "Mining", tags: ["bal", "scatha", "mithril golem"] },
  { title: "Fishing", path: "/fishing", tags: ["fishing", "lava", "trophy fish", "sea creatures"] },
  { title: "Trophy Fishing", path: "/fishing", section: "Trophy Fish", tags: ["trophy", "bronze", "silver", "gold", "diamond"] },
  { title: "Lava Fishing", path: "/fishing", section: "Lava Fishing", tags: ["lava", "crimson", "hellfire rod"] },
  { title: "Enchanting", path: "/enchanting", tags: ["enchanting", "enchantments", "experimentation"] },
  { title: "Best Enchantments", path: "/enchanting", section: "Best Enchants", tags: ["enchant", "sword", "armor", "bow"] },
  { title: "Experimentation Table", path: "/enchanting", section: "Experimentation", tags: ["chronomatron", "superpairs", "ultrasequencer"] },
  { title: "Crimson Isle", path: "/crimson", tags: ["crimson", "nether", "faction", "reputation"] },
  { title: "Faction Choice", path: "/crimson", section: "Factions", tags: ["mage", "barbarian", "faction"] },
  { title: "Reputation Guide", path: "/crimson", section: "Reputation", tags: ["reputation", "quests", "dailies"] },
  { title: "Kuudra", path: "/kuudra", tags: ["kuudra", "crimson", "boss", "tiers"] },
  { title: "Kuudra Tiers", path: "/kuudra", section: "Tiers", tags: ["basic", "hot", "burning", "fiery", "infernal"] },
  { title: "Kuudra Gear", path: "/kuudra", section: "Gear", tags: ["terror", "aurora", "crimson armor", "attributes"] },
  { title: "The Rift", path: "/rift", tags: ["rift", "motes", "timecharms", "enigma"] },
  { title: "Motes Farming", path: "/rift", section: "Motes", tags: ["motes", "money", "burgers", "ubik"] },
  { title: "Timecharms Guide", path: "/rift", section: "Timecharms", tags: ["timecharms", "zones", "rift time"] },
  { title: "Shards & Hunting", path: "/shards", tags: ["shards", "hunting", "mobs", "bestiary"] },

  // ── Economy ──
  { title: "Money Making", path: "/money", tags: ["money", "coins", "methods", "profit"] },
  { title: "Farming Money", path: "/money", section: "Farming", tags: ["farming", "crops", "money"] },
  { title: "Mining Money", path: "/money", section: "Mining", tags: ["mining", "gemstones", "money"] },
  { title: "Flipping", path: "/money", section: "Flipping", tags: ["bazaar", "auction", "flipping", "margins"] },
  { title: "Collections & Minions", path: "/collections", tags: ["collections", "minions", "passive income"] },
  { title: "Best Minions", path: "/collections", section: "Minions", tags: ["snow minion", "tarantula", "rev", "clay"] },
  { title: "Mayors & Events", path: "/mayor", tags: ["mayor", "election", "events", "perks"] },
  { title: "All Mayors", path: "/mayor", section: "Mayor List", tags: ["aatrox", "diana", "cole", "marina", "paul", "derpy", "scorpius"] },

  // ── Meta ──
  { title: "Tricks & Tips", path: "/tricks", tags: ["tricks", "tips", "habits", "efficiency"] },
  { title: "Mods", path: "/mods", tags: ["mods", "skyhanni", "neu", "skytils", "performance"] },
  { title: "SkyHanni", path: "/mods", section: "SkyHanni", tags: ["skyhanni", "mod", "overlays"] },
  { title: "Performance Mods", path: "/mods", section: "Performance", tags: ["sodium", "fps", "performance"] },
  { title: "News & Patches", path: "/news", tags: ["news", "patches", "updates", "changelog"] },
];
