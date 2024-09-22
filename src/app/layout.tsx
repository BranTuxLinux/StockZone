import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "STOCKZONE",
  description: "APP StockZone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="h-full"
      >
        {children}
      </body>
    </html>
  );
}
