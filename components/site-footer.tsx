import Link from "next/link";

export function SiteFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-10 border-t bg-background/40 backdrop-blur">
			<div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
				<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
					<span>© {year} SkyResources</span>
					<span className="opacity-60">•</span>
					<span>Not affiliated with Hypixel or Mojang.</span>
				</div>

				<div className="flex items-center gap-3">
					<Link
						className="text-muted-foreground hover:text-foreground"
						href="/"
					>
						Home
					</Link>
					<a
						className="text-muted-foreground hover:text-foreground"
						href="https://wiki.hypixel.net/"
						target="_blank"
						rel="noreferrer"
					>
						Hypixel Wiki
					</a>
				</div>
			</div>
		</footer>
	);
}
