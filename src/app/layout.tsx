import type { Metadata } from "next";
import { Manrope } from "next/font/google"
import "./globals.css";
import { Providers } from "@/app/hooks/providers";

const inter = Manrope({ subsets: ["latin"] })

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
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}
