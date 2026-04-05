import { cn } from "@/lib/utils";
import { Lightbulb, AlertTriangle, Info, AlertCircle } from "lucide-react";

type CalloutType = "tip" | "warning" | "info" | "danger";

const config: Record<
  CalloutType,
  { icon: typeof Info; borderClass: string; iconClass: string; bgClass: string }
> = {
  tip: {
    icon: Lightbulb,
    borderClass: "border-l-garden",
    iconClass: "text-garden",
    bgClass: "bg-garden/5",
  },
  warning: {
    icon: AlertTriangle,
    borderClass: "border-l-hypixel-gold",
    iconClass: "text-hypixel-gold",
    bgClass: "bg-hypixel-gold/5",
  },
  info: {
    icon: Info,
    borderClass: "border-l-mayor",
    iconClass: "text-mayor",
    bgClass: "bg-mayor/5",
  },
  danger: {
    icon: AlertCircle,
    borderClass: "border-l-destructive",
    iconClass: "text-destructive",
    bgClass: "bg-destructive/5",
  },
};

export function TipCallout({
  type = "tip",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}) {
  const { icon: Icon, borderClass, iconClass, bgClass } = config[type];

  return (
    <div
      className={cn(
        "rounded-xl border-l-4 p-4",
        borderClass,
        bgClass,
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", iconClass)} />
        <div className="min-w-0">
          {title ? (
            <p className="mb-1 text-sm font-semibold">{title}</p>
          ) : null}
          <div className="text-sm text-muted-foreground [&_strong]:text-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
