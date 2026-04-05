import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A compact stat display. Use in MDX like:
 *
 * Single stat:
 *   <Stat label="Coins/hr" value="15M" note="With budget setup" trend="up" />
 *
 * Multiple stats side-by-side — wrap in <StatRow>:
 *   <StatRow>
 *   <Stat label="Coins/hr" value="15M" trend="up" />
 *   <Stat label="Setup Cost" value="50M" />
 *   <Stat label="HotM Req." value="7+" />
 *   </StatRow>
 *
 * trend: "up" | "down" | "neutral"  (optional — shows a trend arrow)
 */
export function Stat({
  label,
  value,
  note,
  trend,
}: {
  label: string;
  value: string;
  note?: string;
  trend?: "up" | "down" | "neutral";
}) {
  return (
    <div className="flex flex-col gap-0.5 rounded-xl border border-border bg-card/40 px-4 py-3 min-w-[100px]">
      <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
      <div className="flex items-center gap-1.5">
        <span className="text-xl font-heading font-bold text-foreground">{value}</span>
        {trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
        {trend === "down" && <TrendingDown className="h-4 w-4 text-red-400" />}
        {trend === "neutral" && <Minus className="h-4 w-4 text-muted-foreground" />}
      </div>
      {note && <p className="text-xs text-muted-foreground/70">{note}</p>}
    </div>
  );
}

/**
 * Wraps multiple <Stat> components in a responsive flex row.
 *
 * <StatRow>
 * <Stat label="Coins/hr" value="15M" trend="up" />
 * <Stat label="Setup"    value="50M" />
 * </StatRow>
 */
export function StatRow({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("flex flex-wrap gap-3 my-4")}>{children}</div>
  );
}
