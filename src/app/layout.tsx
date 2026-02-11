import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Shloka Dental & Implant Care | Kalyandurg",
    description: "Expert dental care in Kalyandurg. Specializing in implants, root canals, and cosmetic dentistry.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-gray-800 bg-slate-50`}>{children}</body>
        </html>
    );
}
