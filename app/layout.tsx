import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A special Offer",
  description: "Convite para os padrinhos de casamento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
