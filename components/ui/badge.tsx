import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "outline"
  | "gold"
  | "garden"
  | "dungeons"
  | "mayor"
  | "news"
  | "shards"
  | "pets"
  | "slayers"
  | "skills"
  | "accessories"
  | "kuudra"
  | "fishing"
  | "crimson"
  | "rift"
  | "collections"
  | "enchanting";

const variants: Record<BadgeVariant, string> = {
  default: "border-transparent bg-primary text-primary-foreground",
  outline: "border bg-transparent text-foreground",
  gold: "border-hypixel-gold/30 bg-hypixel-gold/10 text-hypixel-gold",
  garden: "border-garden/30 bg-garden/10 text-garden",
  dungeons: "border-dungeons/30 bg-dungeons/10 text-dungeons",
  mayor: "border-mayor/30 bg-mayor/10 text-mayor",
  news: "border-news/30 bg-news/10 text-news",
  shards: "border-shards/30 bg-shards/10 text-shards",
  pets: "border-pets/30 bg-pets/10 text-pets",
  slayers: "border-slayers/30 bg-slayers/10 text-slayers",
  skills: "border-skills/30 bg-skills/10 text-skills",
  accessories: "border-accessories/30 bg-accessories/10 text-accessories",
  kuudra: "border-kuudra/30 bg-kuudra/10 text-kuudra",
  fishing: "border-fishing/30 bg-fishing/10 text-fishing",
  crimson: "border-crimson/30 bg-crimson/10 text-crimson",
  rift: "border-rift/30 bg-rift/10 text-rift",
  collections: "border-collections/30 bg-collections/10 text-collections",
  enchanting: "border-enchanting/30 bg-enchanting/10 text-enchanting",
};

export function Badge({
  variant = "default",
  className,
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
