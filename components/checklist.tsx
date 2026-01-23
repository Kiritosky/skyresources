import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export type ChecklistItem = {
  title: string;
  detail?: string;
};

export function Checklist({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: ChecklistItem[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it.title} className="rounded-xl border bg-muted/15 p-3">
              <div className="text-sm font-semibold">{it.title}</div>
              {it.detail ? (
                <div className="mt-1 text-xs text-muted-foreground">
                  {it.detail}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
