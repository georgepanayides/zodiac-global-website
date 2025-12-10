import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import FooterVisibility from "@/components/footer/FooterVisibility";

export const metadata: Metadata = {
  title: "Zodiac Global Group",
  description: "Talent Management & Influencer Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">
        <Header />
        {children}
        <FooterVisibility />
      </body>
    </html>
  );
}
