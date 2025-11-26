import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mella Boutique",
  description: "Keys to The Ultimate Luxury",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mella">
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} antialiased font-sans font-light bg-base-100`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
