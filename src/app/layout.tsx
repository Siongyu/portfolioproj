import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const meta: Metadata = {
  title: "SIONG YU | PORTFOLIO",
  description: "SIONG YU | PORTFOLIO",
  icons: { icon: "/favicon-32x32.png" },
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
