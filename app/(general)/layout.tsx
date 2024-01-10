import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym",
  description: "Gym academy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
