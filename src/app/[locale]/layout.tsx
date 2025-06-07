import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";
import { Duru_Sans } from "next/font/google";
import "./globals.scss";
import Header from "@/layout/Header/Header";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";

const duruSans = Duru_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-duru-sans",
});
export const metadata: Metadata = {
  title: "Resume",
  description: "Create by Quantum",

  icons: {
    icon: "./favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <body className={duruSans.className}>
          <LocaleSwitcher />
          <Header />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
