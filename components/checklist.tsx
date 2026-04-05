import { CheckSquare } from "lucide-react";

/**
 * A styled checklist card. Use in MDX like:
 *
 * <Checklist title="Before you start grinding">
 * - Unlock the Garden
 * - Get Farming Fortune 300+
 * - Equip Legendary Elephant pet at Lvl 100
 * - Enchant your hoe with Cultivating X
 * </Checklist>
 *
 * The children (a markdown list) render as individual check items.
 */
export function Checklist({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-4 my-4">
      {title && (
        <div className="flex items-center gap-2 mb-3">
          <CheckSquare className="h-4 w-4 text-primary shrink-0" />
          <p className="text-sm font-semibold text-foreground">{title}</p>
        </div>
      )}
      {/* Override list styles to use checkbox visual */}
      <div className="[&_ul]:space-y-2 [&_ul]:my-0 [&_li]:flex [&_li]:gap-2 [&_li]:items-start [&_li]:text-sm [&_li]:text-muted-foreground [&_.bullet]:hidden">
        <div className="[&>ul>li>span:first-child]:hidden [&>ul]:pl-0">
          {/* Inject a custom bullet replacement via CSS class override */}
          <div className="space-y-2">
            {/* We render children and override the bullet dot from mdx-components */}
            <div className="[&_ul]:space-y-2 [&_ul]:pl-0 [&_ul]:my-0 [&_li>span:first-child]:mt-0.5 [&_li>span:first-child]:h-4 [&_li>span:first-child]:w-4 [&_li>span:first-child]:min-w-[16px] [&_li>span:first-child]:rounded-sm [&_li>span:first-child]:border [&_li>span:first-child]:border-border [&_li>span:first-child]:bg-muted/50">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
