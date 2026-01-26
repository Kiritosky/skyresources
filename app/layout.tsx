// File: app/layout.tsx
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Skyblock Resource Hub",
    description:
        "Ressourcen, Guides und Live-Updates für Hypixel SkyBlock — Shards, Garden, Tutorials und mehr.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body className={`${inter.variable} ${orbitron.variable} min-h-dvh antialiased`}>
        <SiteHeader />
        <SpeedInsights />
        <Analytics />
        {children}
        <SiteFooter />
        </body>
        </html>
    );
}