import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export type Column = {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
};

export function DataTable({
  title,
  description,
  columns,
  rows,
  caption,
}: {
  title?: string;
  description?: string;
  columns: Column[];
  rows: Record<string, React.ReactNode>[];
  caption?: string;
}) {
  return (
    <Card>
      {title ? (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description ? (
            <CardDescription>{description}</CardDescription>
          ) : null}
        </CardHeader>
      ) : null}
      <CardContent className={title ? undefined : "p-0"}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            {caption ? (
              <caption className="mb-2 text-xs text-muted-foreground">
                {caption}
              </caption>
            ) : null}
            <thead>
              <tr className="border-b border-border/50 bg-muted/20">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={cn(
                      "whitespace-nowrap px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                      col.align === "center" && "text-center",
                      col.align === "right" && "text-right",
                      !col.align && "text-left",
                    )}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={cn(
                    "border-b border-border/30 transition-colors hover:bg-muted/10",
                    i % 2 === 1 && "bg-muted/5",
                  )}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={cn(
                        "whitespace-nowrap px-4 py-2.5",
                        col.align === "center" && "text-center",
                        col.align === "right" && "text-right",
                      )}
                    >
                      {row[col.key] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
