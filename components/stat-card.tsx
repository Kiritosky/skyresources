import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export function StatCard({
  label,
  value,
  unit,
  trend,
  accentClass,
}: {
  label: string;
  value: string;
  unit?: string;
  trend?: "up" | "down" | "neutral";
  accentClass?: string;
}) {
  const TrendIcon =
    trend === "up"
      ? TrendingUp
      : trend === "down"
        ? TrendingDown
        : trend === "neutral"
          ? Minus
          : null;

  return (
    <div className="rounded-2xl border bg-card/60 p-4 backdrop-blur">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="mt-1 flex items-baseline gap-1.5">
        <span
          className={cn(
            "font-heading text-2xl tracking-wide",
            accentClass ?? "text-hypixel-gold",
          )}
        >
          {value}
        </span>
        {unit ? (
          <span className="text-xs text-muted-foreground">{unit}</span>
        ) : null}
        {TrendIcon ? (
          <TrendIcon
            className={cn(
              "ml-1 h-4 w-4",
              trend === "up" && "text-garden",
              trend === "down" && "text-destructive",
              trend === "neutral" && "text-muted-foreground",
            )}
          />
        ) : null}
      </div>
    </div>
  );
}
