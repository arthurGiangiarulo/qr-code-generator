import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QR Code SENAI",
  description: "By Prof. Arthur Giangiarulo",
};

import "./globals.css";          // 1º linha de imports (logo acima dos fonts Google, se seguir usando)

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white font-neo text-text antialiased">
        {children}
      </body>
    </html>
  );
}
