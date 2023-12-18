import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainHeader } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order Food",
  description: "Order your favourite food to yout favorite platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
