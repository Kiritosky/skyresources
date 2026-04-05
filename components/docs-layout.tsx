import { Breadcrumb } from "./breadcrumb";
import { SidebarNav } from "./sidebar-nav";

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
      <aside className="hidden lg:block lg:sticky lg:top-20 lg:h-[calc(100dvh-6rem)] lg:overflow-y-auto">
        <SidebarNav />
      </aside>

      <section className="min-w-0">
        <Breadcrumb items={[{ label: title }]} />

        <header className="mb-8">
          <h1 className="text-2xl font-heading tracking-wide sm:text-3xl gradient-text">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </header>

        <div className="space-y-6">{children}</div>
      </section>
    </div>
  );
}
