import Link from "next/link";
import { NAV_ITEMS } from "../lib/nav";

export function DocsLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 lg:grid-cols-[260px_1fr]">
      <aside className="lg:sticky lg:top-6 lg:h-[calc(100dvh-3rem)]">
        <div className="rounded-xl border bg-card/60 p-4 backdrop-blur">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Topics
          </p>
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-muted/40"
              >
                <n.icon className={`h-4 w-4 ${n.accentClass}`} />
                <span>{n.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <section>
        <header className="mb-6">
          <h1 className="text-2xl font-heading tracking-wide sm:text-3xl">{title}</h1>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </header>

        <div className="space-y-4">{children}</div>
      </section>
    </div>
  );
}
