import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type ResourceLink = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

export function ResourceLinks({
  title,
  description,
  links,
}: {
  title: string;
  description?: string;
  links: ResourceLink[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <a
              key={l.href + l.title}
              className="group rounded-xl border bg-muted/20 p-4 hover:bg-muted/30"
              href={l.href}
              target={l.href.startsWith("/") ? undefined : "_blank"}
              rel={l.href.startsWith("/") ? undefined : "noreferrer"}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">{l.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{l.description}</div>
                </div>
                {l.tag ? (
                  <span className="rounded-full border bg-background/40 px-2 py-0.5 text-[10px] text-muted-foreground">
                    {l.tag}
                  </span>
                ) : null}
              </div>
              <div className="mt-3 text-xs text-hypixel-gold opacity-0 transition group-hover:opacity-100">
                Open →
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
