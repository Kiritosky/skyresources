import Link from "next/link";
import { BookOpenText } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-lg border bg-muted/20 p-1.5">
            <BookOpenText className="h-4 w-4 accent-gold" />
          </span>
          <span className="font-heading text-sm tracking-wide">SkyResources</span>
        </Link>

        <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
          <span className="hidden sm:inline">A SkyBlock knowledge hub</span>
        </div>
      </div>
    </header>
  );
}
