import type { ComponentType } from "react";
import {
  Sprout,
  Coins,
  Swords,
  Landmark,
  Newspaper,
  Panda,
  Sparkles,
  Target,
  Crown,
  Wrench,
  Lightbulb,
  Pickaxe,
  Cat,
  Skull,
  Trophy,
  Gem,
  Flame,
  Fish,
  Mountain,
  Orbit,
  Package,
  BookMarked,
} from "lucide-react";

export type NavGroup = "progression" | "systems" | "economy" | "meta";

export type NavItem = {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  accentClass: string;
  glowClass: string;
  group: NavGroup;
};

export const NAV_GROUP_LABELS: Record<NavGroup, string> = {
  progression: "Progression",
  systems: "Game Systems",
  economy: "Economy & Tools",
  meta: "Meta & Info",
};

export const NAV_ITEMS: readonly NavItem[] = [
  // Progression
  { href: "/early", label: "Early Game", icon: Sparkles, accentClass: "accent-gold", glowClass: "glow-gold", group: "progression" },
  { href: "/mid", label: "Mid Game", icon: Target, accentClass: "accent-mayor", glowClass: "glow-mayor", group: "progression" },
  { href: "/end", label: "End Game", icon: Crown, accentClass: "accent-dungeons", glowClass: "glow-dungeons", group: "progression" },
  { href: "/skills", label: "Skills", icon: Trophy, accentClass: "accent-skills", glowClass: "glow-skills", group: "progression" },
  { href: "/accessories", label: "Accessories & MP", icon: Gem, accentClass: "accent-accessories", glowClass: "glow-accessories", group: "progression" },

  // Game Systems
  { href: "/garden", label: "Garden", icon: Sprout, accentClass: "accent-garden", glowClass: "glow-garden", group: "systems" },
  { href: "/mining", label: "Mining", icon: Pickaxe, accentClass: "accent-money", glowClass: "glow-money", group: "systems" },
  { href: "/dungeons", label: "Dungeons", icon: Swords, accentClass: "accent-dungeons", glowClass: "glow-dungeons", group: "systems" },
  { href: "/slayers", label: "Slayers", icon: Skull, accentClass: "accent-slayers", glowClass: "glow-slayers", group: "systems" },
  { href: "/pets", label: "Pets", icon: Cat, accentClass: "accent-pets", glowClass: "glow-pets", group: "systems" },
  { href: "/fishing", label: "Fishing", icon: Fish, accentClass: "accent-fishing", glowClass: "glow-fishing", group: "systems" },
  { href: "/enchanting", label: "Enchanting", icon: BookMarked, accentClass: "accent-enchanting", glowClass: "glow-enchanting", group: "systems" },
  { href: "/crimson", label: "Crimson Isle", icon: Mountain, accentClass: "accent-crimson", glowClass: "glow-crimson", group: "systems" },
  { href: "/kuudra", label: "Kuudra", icon: Flame, accentClass: "accent-kuudra", glowClass: "glow-kuudra", group: "systems" },
  { href: "/rift", label: "The Rift", icon: Orbit, accentClass: "accent-rift", glowClass: "glow-rift", group: "systems" },
  { href: "/shards", label: "Shards & Hunting", icon: Panda, accentClass: "accent-shards", glowClass: "glow-shards", group: "systems" },

  // Economy & Tools
  { href: "/money", label: "Money Making", icon: Coins, accentClass: "accent-money", glowClass: "glow-money", group: "economy" },
  { href: "/collections", label: "Collections & Minions", icon: Package, accentClass: "accent-collections", glowClass: "glow-collections", group: "economy" },
  { href: "/mayor", label: "Mayors & Events", icon: Landmark, accentClass: "accent-mayor", glowClass: "glow-mayor", group: "economy" },

  // Meta & Info
  { href: "/tricks", label: "Tricks & Tips", icon: Lightbulb, accentClass: "accent-news", glowClass: "glow-news", group: "meta" },
  { href: "/mods", label: "Mods", icon: Wrench, accentClass: "accent-shards", glowClass: "glow-shards", group: "meta" },
  { href: "/news", label: "News & Patches", icon: Newspaper, accentClass: "accent-news", glowClass: "glow-news", group: "meta" },
] as const;
