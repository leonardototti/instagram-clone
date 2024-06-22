import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import StyledComponentsRegistry from "@/registry";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
      <Head>
        <link
          rel="icon"
          sizes="192x192"
          href="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
        />

        <link
          data-default-icon="https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico"
          rel="shortcut icon"
          type="image/x-icon"
          href="https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico"
        />
        <title>Instagram</title>
      </Head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
