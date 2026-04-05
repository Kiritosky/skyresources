/**
 * A titled card wrapper for markdown tables. Use in MDX like:
 *
 * <TableCard title="Money methods comparison" description="Approximate at mid-game gear">
 * | Method | Coins/hr | Setup Cost |
 * |--------|---------|-----------|
 * | Garden | 8M      | 5M        |
 * | Mining | 6M      | 15M       |
 * </TableCard>
 *
 * The GFM markdown table inside is rendered with the standard styled table.
 * TableCard just wraps it with a title and optional description above.
 *
 * If you don't need a title, just write a plain markdown table — it gets
 * the same styling automatically without this component.
 */
export function TableCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6">
      <div className="mb-2">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      {/* Neutralise the top margin the table element adds when inside a card */}
      <div className="[&>div]:mt-0">{children}</div>
    </div>
  );
}
