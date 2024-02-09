import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

import Navbar from "@/components/layout/navbar";
import { QueryProvider } from "@/components/queryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Court Booking System",
  description: "Book your court and then drop in to play in 10 minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <QueryProvider>
            <Navbar />
            {children}
          </QueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
