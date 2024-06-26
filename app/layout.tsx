import type { Metadata } from "next";
import { CustomProviders } from "./provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Home",
  description: "Typescript Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomProviders>
      <html lang="th">
        <body className={inter.className}>
          {children}
          <SpeedInsights />
        </body>
      </html>
    </CustomProviders>
  );
}
