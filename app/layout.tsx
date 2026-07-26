import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/header";
import QueryProvider from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <ThemeProvider>
            <Header />
            <main className="mx-auto max-w-7xl p-6">{children}</main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}