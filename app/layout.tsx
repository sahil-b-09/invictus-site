import type { Metadata } from "next";
import { Inter, Nothing_You_Could_Do } from "next/font/google"; // Correct import
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Ensure weight is specified for handwriting font
const handwriting = Nothing_You_Could_Do({ weight: "400", subsets: ["latin"], variable: "--font-handwriting" });

export const metadata: Metadata = {
  title: "Invictus AI | Enterprise-Grade AI. Startup Speed.",
  description: "Custom AI automation, intelligent agents, and digital infrastructure for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, handwriting.variable, "bg-white text-bond-navy antialiased font-sans min-h-screen flex flex-col")}>
        {children}
      </body>
    </html>
  );
}
