import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const ibmPlexSans = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
	title: "Imaginigan",
	description: "Ai-Powered kekegenkai image editor.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={cn(
						"font-ibm-plex antialiased",
						ibmPlexSans.variable
					)}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
