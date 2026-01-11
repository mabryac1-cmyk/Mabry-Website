import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mabry's Air Conditioning & Heating, Inc. | Friendswood TX HVAC",
  description: "Residential AC & Heating Experts Since 1986. Serving Friendswood, Pearland, Clear Lake & Alvin. License TACLB12058E. BBB A+ Rating. Honest, flat-rate pricing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
