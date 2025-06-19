import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QR Code SENAI",
  description: "By Prof. Arthur Giangiarulo",
};

import "./globals.css"; 

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white font-neo text-text antialiased">
        {children}
      </body>
    </html>
  );
}
