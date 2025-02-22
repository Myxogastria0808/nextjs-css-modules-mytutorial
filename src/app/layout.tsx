import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";

const font = Noto_Serif_JP({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={font.className}>{children}</body>
    </html>
  );
}
