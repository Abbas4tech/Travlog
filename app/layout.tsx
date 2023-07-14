import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travlog",
  description: "A new travel destination of the Internet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
