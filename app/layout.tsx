import "@/styles/globals.css";
import { Outfit } from "next/font/google";
import { type Metadata } from "next";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "mAmineChniti",
  description: "Amine Chniti's Personal Portfolio",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="bg-black">{children}</body>
    </html>
  );
}
