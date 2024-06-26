import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIONG YU | PORTFOLIO",
  description: "SIONG YU | PORTFOLIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="p-8" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
