import type { Metadata } from "next";
import { Duru_Sans } from "next/font/google";
import "./globals.scss";

const duruSans = Duru_Sans({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Resume",
  description: "Create by Quantum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={duruSans.className}>{children}</body>
    </html>
  );
}
