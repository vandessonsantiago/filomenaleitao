import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabinete de Pisicologia - Filomena Leitão",
  description: "Gabinete de Psicologia Filomena Leitão, um espaço dedicado a você! Aqui, você se sentirá seguro e apoiado. Explore a oportunidade de (re)construir sua vida, aprendendo a dar significado a cada momento e enfrentando seus desafios com apoio especializado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
