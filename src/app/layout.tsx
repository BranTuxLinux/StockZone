import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Navbar } from "@/components/Navbar";

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
      <UserProvider>
        <body className="w-full flex flex-col items-center">
          <Navbar  />
          {children}

        </body>
      </UserProvider>
    </html>
  );
}
