import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "@/components/theme-provider";

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
        <body className="w-full flex flex-col items-center h-full">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

          
          {children}
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
