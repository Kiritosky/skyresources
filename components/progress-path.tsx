import { cn } from "@/lib/utils";
import { Check, Circle, ArrowRight } from "lucide-react";

export type PathStep = {
  title: string;
  description?: string;
  status?: "complete" | "current" | "upcoming";
};

export function ProgressPath({ steps }: { steps: PathStep[] }) {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => {
        const status = step.status ?? "upcoming";
        const isLast = i === steps.length - 1;

        return (
          <div key={step.title} className="flex gap-4">
            {/* Timeline column */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition",
                  status === "complete" &&
                    "border-garden bg-garden/20 text-garden",
                  status === "current" &&
                    "border-hypixel-gold bg-hypixel-gold/20 text-hypixel-gold",
                  status === "upcoming" &&
                    "border-muted-foreground/30 bg-muted/20 text-muted-foreground/50",
                )}
              >
                {status === "complete" ? (
                  <Check className="h-4 w-4" />
                ) : status === "current" ? (
                  <ArrowRight className="h-4 w-4" />
                ) : (
                  <Circle className="h-3 w-3" />
                )}
              </div>
              {!isLast && (
                <div
                  className={cn(
                    "w-0.5 grow",
                    status === "complete" ? "bg-garden/40" : "bg-border",
                  )}
                />
              )}
            </div>

            {/* Content column */}
            <div className={cn("pb-6", isLast && "pb-0")}>
              <p
                className={cn(
                  "pt-1 text-sm font-semibold",
                  status === "upcoming" && "text-muted-foreground",
                )}
              >
                {step.title}
              </p>
              {step.description ? (
                <p className="mt-1 text-xs text-muted-foreground">
                  {step.description}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
