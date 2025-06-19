import type { Metadata } from "next";
import "./globals.css";

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
