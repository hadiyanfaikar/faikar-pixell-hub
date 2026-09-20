import type { Metadata, Viewport } from "next";
import { Press_Start_2P, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hadiyan Faikar — My Digital World",
  description:
    "Explore my world. Find me online. Hadiyan Faikar's personal digital world.",
  keywords: [
    "Hadiyan Faikar",
    "Digital World",
    "Personal Hub",
    "Social Platforms",
    "Spotify",
    "Gaming",
    "Developer",
    "Creative",
    "Retro Game",
  ],
  authors: [{ name: "Hadiyan Faikar" }],
  creator: "Hadiyan Faikar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hadiyanfaikar.me",
    title: "Hadiyan Faikar — My Digital World",
    description: "Explore my world. Find me online.",
    siteName: "Hadiyan Faikar's Digital Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadiyan Faikar — My Digital World",
    description: "Explore my world. Find me online.",
    creator: "@hadiyanfaikar",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
