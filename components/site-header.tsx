import Link from "next/link";
import { BookOpenText } from "lucide-react";
import { SearchTrigger } from "./search-dialog";
import { MobileNav } from "./header-nav";
import { getSearchData } from "@/lib/content";

const HEADER_LINKS = [
  { href: "/early", label: "Progression" },
  { href: "/garden", label: "Garden" },
  { href: "/mining", label: "Mining" },
  { href: "/dungeons", label: "Dungeons" },
  { href: "/money", label: "Money" },
  { href: "/mods", label: "Mods" },
];

export async function SiteHeader() {
  const searchData = await getSearchData();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="rounded-lg border bg-muted/20 p-1.5">
            <BookOpenText className="h-4 w-4 accent-gold" />
          </span>
          <span className="font-heading text-sm tracking-wide">SkyResources</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="ml-2 hidden items-center gap-1 lg:flex">
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground transition hover:bg-muted/30 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="ml-auto" />

        {/* Search */}
        <SearchTrigger data={searchData} />

        {/* Mobile hamburger */}
        <MobileNav />
      </div>
    </header>
  );
}
