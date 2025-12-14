import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
});

export const metadata: Metadata = {
	title: "ThirdKnot | Divine Connections",
	description: "A dating app consisting of a cord of three strands: You, Your Partner, and God.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${outfit.variable} antialiased bg-[#030014] text-white overflow-x-hidden selection:bg-amber-500/30`}>{children}</body>
		</html>
	);
}
