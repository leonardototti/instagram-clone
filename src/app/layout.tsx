/* eslint-disable @next/next/no-page-custom-font */

import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/registry";

export const metadata: Metadata = {
  title: "Instagram",
  description:
    "Crie uma conta ou entre no Instagram: compartilhe seus interesses com as pessoas que entendem você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
