import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Skyblock Resource Hub",
    description:
        "Resources, guides, and live updates for Hypixel SkyBlock — shards, Garden, tutorials, and more.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body className={`${roboto.variable} min-h-dvh antialiased`}>
        <SiteHeader />
        <SpeedInsights />
        <Analytics />
        {children}
        <SiteFooter />
        </body>
        </html>
    );
}