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
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  accentClass: string;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { href: "/early", label: "Early Game", icon: Sparkles, accentClass: "accent-gold" },
  { href: "/mid", label: "Mid Game", icon: Target, accentClass: "accent-mayor" },
  { href: "/end", label: "End Game", icon: Crown, accentClass: "accent-dungeons" },
  { href: "/tricks", label: "Tricks", icon: Lightbulb, accentClass: "accent-news" },
  { href: "/mods", label: "Mods", icon: Wrench, accentClass: "accent-shards" },
  { href: "/garden", label: "Garden", icon: Sprout, accentClass: "accent-garden" },
  { href: "/money", label: "Money", icon: Coins, accentClass: "accent-money" },
  { href: "/mining", label: "Mining", icon: Pickaxe, accentClass: "accent-money" },
  { href: "/dungeons", label: "Dungeons", icon: Swords, accentClass: "accent-dungeons" },
  { href: "/mayor", label: "Mayors & Events", icon: Landmark, accentClass: "accent-mayor" },
  { href: "/news", label: "News", icon: Newspaper, accentClass: "accent-news" },
  { href: "/shards", label: "Shards & Hunting", icon: Panda, accentClass: "accent-shards" },
] as const;
