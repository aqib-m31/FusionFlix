import type { Metadata } from "next";
import "@/global/globals.css";

import data from "@/lib/metadata";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { roboto } from "@/global/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL ?? "https://localhost:3000"),
  ...data,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div className="flex min-h-full">
          <Sidebar className="pt-2" />
          <main className="min-h-full w-full pt-[68px] p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
