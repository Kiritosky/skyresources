import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type StepStatus = "done" | "current" | "upcoming";

interface Step {
  label: string;
  description?: string;
  status?: StepStatus;
}

/**
 * A visual vertical timeline. Two ways to use it in MDX:
 *
 * 1. Simple — just pass steps as a prop array:
 *    <Steps steps={["Get basic gear", "Unlock Garden", "Push 300 MP"]} />
 *
 * 2. With descriptions:
 *    <Steps steps={[
 *      { label: "Get basic gear", description: "Hardened Diamond is fine" },
 *      { label: "Unlock Garden", status: "current" },
 *      { label: "Push 300 MP", status: "upcoming" },
 *    ]} />
 *
 * status: "done" | "current" | "upcoming"  (defaults to "upcoming")
 */
export function Steps({
  title,
  steps,
}: {
  title?: string;
  steps: (string | Step)[];
}) {
  const normalised: Step[] = steps.map((s) =>
    typeof s === "string" ? { label: s, status: "upcoming" } : s
  );

  return (
    <div className="my-4 rounded-xl border border-border bg-card/30 p-4">
      {title && (
        <p className="text-sm font-semibold text-foreground mb-4">{title}</p>
      )}
      <ol className="space-y-0">
        {normalised.map((step, i) => {
          const status = step.status ?? "upcoming";
          const isLast = i === normalised.length - 1;

          return (
            <li key={i} className="flex gap-3">
              {/* Icon column */}
              <div className="flex flex-col items-center">
                <div className="mt-0.5">
                  {status === "done" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : status === "current" ? (
                    <ArrowRight className="h-5 w-5 text-primary" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/40" />
                  )}
                </div>
                {!isLast && (
                  <div className="w-px flex-1 my-1 bg-border min-h-[16px]" />
                )}
              </div>

              {/* Content column */}
              <div className={cn("pb-4", isLast && "pb-0")}>
                <p
                  className={cn(
                    "text-sm font-medium leading-tight",
                    status === "done" && "text-muted-foreground line-through",
                    status === "current" && "text-foreground",
                    status === "upcoming" && "text-muted-foreground"
                  )}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="text-xs text-muted-foreground/70 mt-0.5">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
